#!/usr/bin/env python3
"""
Rasterise the SuzChews mark (attempt 4, lockup A's mark) to PNG + ICO.

No rasteriser is installed on this machine (no rsvg-convert / inkscape /
magick / cairosvg), so this walks the mark's actual geometry instead: four
solid shapes for the machine, one knocked-out door, six circles for the
canonical chapter-04 flower. Everything is sampled 4x4 per pixel and averaged,
which is what an SVG renderer's anti-aliasing would give us.

Two artworks, because a favicon is size-specific art, not a shrunk logo:
  FULL  (>=48px) - the mark exactly as drawn in assets/logos/suzchews-mark.svg
  SMALL (<=32px) - flower enlarged 18% about the globe centre and the
                   dispenser door dropped, because at 16px the door is under
                   one pixel across and only reads as dirt.
"""
import struct, zlib, math, os

# ── palette ────────────────────────────────────────────────────────────────
CORAL  = (0xC2, 0x60, 0x70)
BLOOM  = (0xEC, 0xC7, 0x4A)   # relay tag 3 - rgb(236,199,74)
CREAM  = (0xF7, 0xF2, 0xEC)

# ── geometry, in the mark's own 64-unit space ──────────────────────────────
GLOBE   = (32.0, 23.0, 18.0)
COLLAR  = (20.5, 36.5, 23.0, 5.5, 2.4)
FOOT    = (13.0, 54.6, 38.0, 5.2, 2.6)
DOOR    = (32.0, 48.6, 3.7)
HOPPER_D = "M22,41.5 H42 C44,47 46,51.2 48.2,55.6 H15.8 C18,51.2 20,47 22,41.5 Z"

# flower: relay chapter-04 proportions, mapped from the 100-unit bloom box
# into the mark at x=19.6 y=10.6 w=h=24.8  (scale 0.248)
_S, _OX, _OY = 0.248, 19.6, 10.6
_BLOOM_SRC = [(50, 19, 18.2), (79.49, 40.42, 18.2), (68.22, 75.08, 18.2),
              (31.78, 75.08, 18.2), (20.51, 40.42, 18.2), (50, 50, 8.0)]
FLOWER = [(_OX + x * _S, _OY + y * _S, r * _S) for (x, y, r) in _BLOOM_SRC]


def flatten_hopper(steps=24):
    """The hopper is the only path with curves. Flatten its two cubics."""
    def cubic(p0, p1, p2, p3):
        pts = []
        for i in range(1, steps + 1):
            t = i / steps
            u = 1 - t
            pts.append((u*u*u*p0[0] + 3*u*u*t*p1[0] + 3*u*t*t*p2[0] + t*t*t*p3[0],
                        u*u*u*p0[1] + 3*u*u*t*p1[1] + 3*u*t*t*p2[1] + t*t*t*p3[1]))
        return pts
    poly = [(22.0, 41.5), (42.0, 41.5)]
    poly += cubic((42.0, 41.5), (44.0, 47.0), (46.0, 51.2), (48.2, 55.6))
    poly.append((15.8, 55.6))
    poly += cubic((15.8, 55.6), (18.0, 51.2), (20.0, 47.0), (22.0, 41.5))
    return poly

HOPPER = flatten_hopper()


def in_circle(x, y, c):
    return (x - c[0]) ** 2 + (y - c[1]) ** 2 <= c[2] ** 2


def in_rrect(x, y, r):
    rx, ry, w, h, rad = r
    if x < rx or x > rx + w or y < ry or y > ry + h:
        return False
    cx = min(max(x, rx + rad), rx + w - rad)
    cy = min(max(y, ry + rad), ry + h - rad)
    return (x - cx) ** 2 + (y - cy) ** 2 <= rad ** 2


def in_poly(x, y, poly):
    inside = False
    n = len(poly)
    j = n - 1
    for i in range(n):
        xi, yi = poly[i]
        xj, yj = poly[j]
        if (yi > y) != (yj > y):
            if x < (xj - xi) * (y - yi) / (yj - yi) + xi:
                inside = not inside
        j = i
    return inside


def scaled_flower(k):
    """Scale the flower about the globe centre - used by the small variant."""
    gx, gy = GLOBE[0], GLOBE[1]
    return [(gx + (x - gx) * k, gy + (y - gy) * k, r * k) for (x, y, r) in FLOWER]


def sample(x, y, flower, door):
    """Return (r,g,b,a) for one sub-sample point in 64-unit space."""
    for c in flower:
        if in_circle(x, y, c):
            return BLOOM + (255,)
    body = (in_circle(x, y, GLOBE) or in_rrect(x, y, COLLAR)
            or in_poly(x, y, HOPPER) or in_rrect(x, y, FOOT))
    if body:
        if door and in_circle(x, y, DOOR):
            return (0, 0, 0, 0)
        return CORAL + (255,)
    return (0, 0, 0, 0)


def render(size, variant="full", bg=None, ss=4):
    """Render to a flat RGBA bytearray. bg=None leaves the ground transparent."""
    flower = FLOWER if variant == "full" else scaled_flower(1.18)
    door = (variant == "full")
    step = 64.0 / size
    rows = []
    for py in range(size):
        row = bytearray()
        for px in range(size):
            ar = ag = ab = aa = 0.0
            for sy in range(ss):
                for sx in range(ss):
                    ux = (px + (sx + 0.5) / ss) * step
                    uy = (py + (sy + 0.5) / ss) * step
                    r, g, b, a = sample(ux, uy, flower, door)
                    if a:
                        ar += r; ag += g; ab += b; aa += 1.0
            n = ss * ss
            cov = aa / n
            if cov > 0:
                r = ar / aa; g = ag / aa; b = ab / aa
            else:
                r = g = b = 0.0
            if bg is not None:                       # composite onto a ground
                r = r * cov + bg[0] * (1 - cov)
                g = g * cov + bg[1] * (1 - cov)
                b = b * cov + bg[2] * (1 - cov)
                cov = 1.0
            row += bytes((int(round(r)), int(round(g)), int(round(b)),
                          int(round(cov * 255))))
        rows.append(row)
    return rows


def png(rows, size):
    raw = b"".join(b"\x00" + bytes(r) for r in rows)
    def chunk(tag, data):
        c = tag + data
        return struct.pack(">I", len(data)) + c + struct.pack(">I", zlib.crc32(c) & 0xffffffff)
    return (b"\x89PNG\r\n\x1a\n"
            + chunk(b"IHDR", struct.pack(">IIBBBBB", size, size, 8, 6, 0, 0, 0))
            + chunk(b"IDAT", zlib.compress(raw, 9))
            + chunk(b"IEND", b""))


def ico(pngs):
    """ICO with PNG payloads (Vista+; every browser in use understands it)."""
    out = struct.pack("<HHH", 0, 1, len(pngs))
    offset = 6 + 16 * len(pngs)
    entries, blobs = b"", b""
    for size, data in pngs:
        entries += struct.pack("<BBBBHHII", size & 0xFF, size & 0xFF, 0, 0,
                               1, 32, len(data), offset)
        offset += len(data)
        blobs += data
    return out + entries + blobs


OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                   "..", "..", "..", "..", "..")
DEST = os.environ.get("DEST", ".")

def write(name, data):
    p = os.path.join(DEST, name)
    with open(p, "wb") as f:
        f.write(data)
    print("%-28s %6d bytes" % (name, len(data)))


if __name__ == "__main__":
    small16 = png(render(16, "small"), 16)
    small32 = png(render(32, "small"), 32)
    full48  = png(render(48, "full"), 48)
    write("favicon-16.png", small16)
    write("favicon-32.png", small32)
    write("favicon-48.png", full48)
    write("favicon.ico", ico([(16, small16), (32, small32), (48, full48)]))
    # iOS composites a transparent touch icon onto black, so give it a ground.
    write("apple-touch-icon.png", png(render(180, "full", bg=CREAM), 180))
    write("icon-192.png", png(render(192, "full", bg=CREAM), 192))
    write("icon-512.png", png(render(512, "full", bg=CREAM), 512))
