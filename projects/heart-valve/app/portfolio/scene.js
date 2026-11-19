var rp = Object.defineProperty;
var ap = (s, e, t) => e in s ? rp(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var xe = (s, e, t) => ap(s, typeof e != "symbol" ? e + "" : e, t);
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const dc = "169", As = { ROTATE: 0, DOLLY: 1, PAN: 2 }, Ss = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, op = 0, uh = 1, lp = 2, cd = 1, hd = 2, Qn = 3, zn = 0, Yt = 1, Un = 2, Ei = 0, ws = 1, dh = 2, fh = 3, ph = 4, cp = 5, Wi = 100, hp = 101, up = 102, dp = 103, fp = 104, pp = 200, mp = 201, _p = 202, gp = 203, il = 204, sl = 205, vp = 206, xp = 207, yp = 208, Mp = 209, Sp = 210, Ep = 211, Tp = 212, bp = 213, Ap = 214, rl = 0, al = 1, ol = 2, Us = 3, ll = 4, cl = 5, hl = 6, ul = 7, ud = 0, wp = 1, Rp = 2, Ti = 0, Cp = 1, Pp = 2, Lp = 3, dd = 4, Dp = 5, Ip = 6, Np = 7, mh = "attached", Up = "detached", fd = 300, Os = 301, Fs = 302, Da = 303, dl = 304, qa = 306, Bs = 1e3, vi = 1001, Ia = 1002, kt = 1003, pd = 1004, pr = 1005, an = 1006, xa = 1007, ii = 1008, ri = 1009, md = 1010, _d = 1011, Tr = 1012, fc = 1013, Qi = 1014, Rn = 1015, Or = 1016, pc = 1017, mc = 1018, ks = 1020, gd = 35902, vd = 1021, xd = 1022, gn = 1023, yd = 1024, Md = 1025, Rs = 1026, zs = 1027, _c = 1028, gc = 1029, Sd = 1030, vc = 1031, xc = 1033, ya = 33776, Ma = 33777, Sa = 33778, Ea = 33779, fl = 35840, pl = 35841, ml = 35842, _l = 35843, gl = 36196, vl = 37492, xl = 37496, yl = 37808, Ml = 37809, Sl = 37810, El = 37811, Tl = 37812, bl = 37813, Al = 37814, wl = 37815, Rl = 37816, Cl = 37817, Pl = 37818, Ll = 37819, Dl = 37820, Il = 37821, Ta = 36492, Nl = 36494, Ul = 36495, Ed = 36283, Ol = 36284, Fl = 36285, Bl = 36286, br = 2300, Ar = 2301, ro = 2302, _h = 2400, gh = 2401, vh = 2402, Op = 2500, Fp = 0, Td = 1, kl = 2, Bp = 3200, kp = 3201, bd = 0, zp = 1, gi = "", Rt = "srgb", Lt = "srgb-linear", yc = "display-p3", ja = "display-p3-linear", Na = "linear", lt = "srgb", Ua = "rec709", Oa = "p3", ss = 7680, xh = 519, Vp = 512, Hp = 513, Gp = 514, Ad = 515, Wp = 516, Xp = 517, Yp = 518, qp = 519, zl = 35044, yh = "300 es", si = 2e3, Fa = 2001;
class ts {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0) return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0) return;
    const i = this._listeners[e];
    if (i !== void 0) {
      const r = i.indexOf(t);
      r !== -1 && i.splice(r, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const i = n.slice(0);
      for (let r = 0, a = i.length; r < a; r++)
        i[r].call(this, e);
      e.target = null;
    }
  }
}
const Dt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let Mh = 1234567;
const vr = Math.PI / 180, Vs = 180 / Math.PI;
function Cn() {
  const s = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (Dt[s & 255] + Dt[s >> 8 & 255] + Dt[s >> 16 & 255] + Dt[s >> 24 & 255] + "-" + Dt[e & 255] + Dt[e >> 8 & 255] + "-" + Dt[e >> 16 & 15 | 64] + Dt[e >> 24 & 255] + "-" + Dt[t & 63 | 128] + Dt[t >> 8 & 255] + "-" + Dt[t >> 16 & 255] + Dt[t >> 24 & 255] + Dt[n & 255] + Dt[n >> 8 & 255] + Dt[n >> 16 & 255] + Dt[n >> 24 & 255]).toLowerCase();
}
function Ct(s, e, t) {
  return Math.max(e, Math.min(t, s));
}
function Mc(s, e) {
  return (s % e + e) % e;
}
function jp(s, e, t, n, i) {
  return n + (s - e) * (i - n) / (t - e);
}
function Kp(s, e, t) {
  return s !== e ? (t - s) / (e - s) : 0;
}
function xr(s, e, t) {
  return (1 - t) * s + t * e;
}
function Zp(s, e, t, n) {
  return xr(s, e, 1 - Math.exp(-t * n));
}
function $p(s, e = 1) {
  return e - Math.abs(Mc(s, e * 2) - e);
}
function Jp(s, e, t) {
  return s <= e ? 0 : s >= t ? 1 : (s = (s - e) / (t - e), s * s * (3 - 2 * s));
}
function Qp(s, e, t) {
  return s <= e ? 0 : s >= t ? 1 : (s = (s - e) / (t - e), s * s * s * (s * (s * 6 - 15) + 10));
}
function em(s, e) {
  return s + Math.floor(Math.random() * (e - s + 1));
}
function tm(s, e) {
  return s + Math.random() * (e - s);
}
function nm(s) {
  return s * (0.5 - Math.random());
}
function im(s) {
  s !== void 0 && (Mh = s);
  let e = Mh += 1831565813;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function sm(s) {
  return s * vr;
}
function rm(s) {
  return s * Vs;
}
function am(s) {
  return (s & s - 1) === 0 && s !== 0;
}
function om(s) {
  return Math.pow(2, Math.ceil(Math.log(s) / Math.LN2));
}
function lm(s) {
  return Math.pow(2, Math.floor(Math.log(s) / Math.LN2));
}
function cm(s, e, t, n, i) {
  const r = Math.cos, a = Math.sin, o = r(t / 2), l = a(t / 2), c = r((e + n) / 2), h = a((e + n) / 2), u = r((e - n) / 2), d = a((e - n) / 2), p = r((n - e) / 2), g = a((n - e) / 2);
  switch (i) {
    case "XYX":
      s.set(o * h, l * u, l * d, o * c);
      break;
    case "YZY":
      s.set(l * d, o * h, l * u, o * c);
      break;
    case "ZXZ":
      s.set(l * u, l * d, o * h, o * c);
      break;
    case "XZX":
      s.set(o * h, l * g, l * p, o * c);
      break;
    case "YXY":
      s.set(l * p, o * h, l * g, o * c);
      break;
    case "ZYZ":
      s.set(l * g, l * p, o * h, o * c);
      break;
    default:
      console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i);
  }
}
function bn(s, e) {
  switch (e.constructor) {
    case Float32Array:
      return s;
    case Uint32Array:
      return s / 4294967295;
    case Uint16Array:
      return s / 65535;
    case Uint8Array:
      return s / 255;
    case Int32Array:
      return Math.max(s / 2147483647, -1);
    case Int16Array:
      return Math.max(s / 32767, -1);
    case Int8Array:
      return Math.max(s / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function Qe(s, e) {
  switch (e.constructor) {
    case Float32Array:
      return s;
    case Uint32Array:
      return Math.round(s * 4294967295);
    case Uint16Array:
      return Math.round(s * 65535);
    case Uint8Array:
      return Math.round(s * 255);
    case Int32Array:
      return Math.round(s * 2147483647);
    case Int16Array:
      return Math.round(s * 32767);
    case Int8Array:
      return Math.round(s * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const qt = {
  DEG2RAD: vr,
  RAD2DEG: Vs,
  generateUUID: Cn,
  clamp: Ct,
  euclideanModulo: Mc,
  mapLinear: jp,
  inverseLerp: Kp,
  lerp: xr,
  damp: Zp,
  pingpong: $p,
  smoothstep: Jp,
  smootherstep: Qp,
  randInt: em,
  randFloat: tm,
  randFloatSpread: nm,
  seededRandom: im,
  degToRad: sm,
  radToDeg: rm,
  isPowerOfTwo: am,
  ceilPowerOfTwo: om,
  floorPowerOfTwo: lm,
  setQuaternionFromProperEuler: cm,
  normalize: Qe,
  denormalize: bn
};
class Me {
  constructor(e = 0, t = 0) {
    Me.prototype.isVector2 = !0, this.x = e, this.y = t;
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = e.elements;
    return this.x = i[0] * t + i[3] * n + i[6], this.y = i[1] * t + i[4] * n + i[7], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Ct(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t), i = Math.sin(t), r = this.x - e.x, a = this.y - e.y;
    return this.x = r * n - a * i + e.x, this.y = r * i + a * n + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Ue {
  constructor(e, t, n, i, r, a, o, l, c) {
    Ue.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, i, r, a, o, l, c);
  }
  set(e, t, n, i, r, a, o, l, c) {
    const h = this.elements;
    return h[0] = e, h[1] = i, h[2] = o, h[3] = t, h[4] = r, h[5] = l, h[6] = n, h[7] = a, h[8] = c, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[4],
      t[8],
      t[1],
      t[5],
      t[9],
      t[2],
      t[6],
      t[10]
    ), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, r = this.elements, a = n[0], o = n[3], l = n[6], c = n[1], h = n[4], u = n[7], d = n[2], p = n[5], g = n[8], _ = i[0], f = i[3], m = i[6], x = i[1], y = i[4], M = i[7], b = i[2], w = i[5], E = i[8];
    return r[0] = a * _ + o * x + l * b, r[3] = a * f + o * y + l * w, r[6] = a * m + o * M + l * E, r[1] = c * _ + h * x + u * b, r[4] = c * f + h * y + u * w, r[7] = c * m + h * M + u * E, r[2] = d * _ + p * x + g * b, r[5] = d * f + p * y + g * w, r[8] = d * m + p * M + g * E, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], a = e[4], o = e[5], l = e[6], c = e[7], h = e[8];
    return t * a * h - t * o * c - n * r * h + n * o * l + i * r * c - i * a * l;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], a = e[4], o = e[5], l = e[6], c = e[7], h = e[8], u = h * a - o * c, d = o * l - h * r, p = c * r - a * l, g = t * u + n * d + i * p;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const _ = 1 / g;
    return e[0] = u * _, e[1] = (i * c - h * n) * _, e[2] = (o * n - i * a) * _, e[3] = d * _, e[4] = (h * t - i * l) * _, e[5] = (i * r - o * t) * _, e[6] = p * _, e[7] = (n * l - c * t) * _, e[8] = (a * t - n * r) * _, this;
  }
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  setUvTransform(e, t, n, i, r, a, o) {
    const l = Math.cos(r), c = Math.sin(r);
    return this.set(
      n * l,
      n * c,
      -n * (l * a + c * o) + a + e,
      -i * c,
      i * l,
      -i * (-c * a + l * o) + o + t,
      0,
      0,
      1
    ), this;
  }
  //
  scale(e, t) {
    return this.premultiply(ao.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(ao.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(ao.makeTranslation(e, t)), this;
  }
  // for 2D Transforms
  makeTranslation(e, t) {
    return e.isVector2 ? this.set(
      1,
      0,
      e.x,
      0,
      1,
      e.y,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      e,
      0,
      1,
      t,
      0,
      0,
      1
    ), this;
  }
  makeRotation(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      n,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t) {
    return this.set(
      e,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  //
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 9; i++)
      if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const ao = /* @__PURE__ */ new Ue();
function wd(s) {
  for (let e = s.length - 1; e >= 0; --e)
    if (s[e] >= 65535) return !0;
  return !1;
}
function wr(s) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", s);
}
function hm() {
  const s = wr("canvas");
  return s.style.display = "block", s;
}
const Sh = {};
function ba(s) {
  s in Sh || (Sh[s] = !0, console.warn(s));
}
function um(s, e, t) {
  return new Promise(function(n, i) {
    function r() {
      switch (s.clientWaitSync(e, s.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case s.WAIT_FAILED:
          i();
          break;
        case s.TIMEOUT_EXPIRED:
          setTimeout(r, t);
          break;
        default:
          n();
      }
    }
    setTimeout(r, t);
  });
}
function dm(s) {
  const e = s.elements;
  e[2] = 0.5 * e[2] + 0.5 * e[3], e[6] = 0.5 * e[6] + 0.5 * e[7], e[10] = 0.5 * e[10] + 0.5 * e[11], e[14] = 0.5 * e[14] + 0.5 * e[15];
}
function fm(s) {
  const e = s.elements;
  e[11] === -1 ? (e[10] = -e[10] - 1, e[14] = -e[14]) : (e[10] = -e[10], e[14] = -e[14] + 1);
}
const Eh = /* @__PURE__ */ new Ue().set(
  0.8224621,
  0.177538,
  0,
  0.0331941,
  0.9668058,
  0,
  0.0170827,
  0.0723974,
  0.9105199
), Th = /* @__PURE__ */ new Ue().set(
  1.2249401,
  -0.2249404,
  0,
  -0.0420569,
  1.0420571,
  0,
  -0.0196376,
  -0.0786361,
  1.0982735
), nr = {
  [Lt]: {
    transfer: Na,
    primaries: Ua,
    luminanceCoefficients: [0.2126, 0.7152, 0.0722],
    toReference: (s) => s,
    fromReference: (s) => s
  },
  [Rt]: {
    transfer: lt,
    primaries: Ua,
    luminanceCoefficients: [0.2126, 0.7152, 0.0722],
    toReference: (s) => s.convertSRGBToLinear(),
    fromReference: (s) => s.convertLinearToSRGB()
  },
  [ja]: {
    transfer: Na,
    primaries: Oa,
    luminanceCoefficients: [0.2289, 0.6917, 0.0793],
    toReference: (s) => s.applyMatrix3(Th),
    fromReference: (s) => s.applyMatrix3(Eh)
  },
  [yc]: {
    transfer: lt,
    primaries: Oa,
    luminanceCoefficients: [0.2289, 0.6917, 0.0793],
    toReference: (s) => s.convertSRGBToLinear().applyMatrix3(Th),
    fromReference: (s) => s.applyMatrix3(Eh).convertLinearToSRGB()
  }
}, pm = /* @__PURE__ */ new Set([Lt, ja]), qe = {
  enabled: !0,
  _workingColorSpace: Lt,
  get workingColorSpace() {
    return this._workingColorSpace;
  },
  set workingColorSpace(s) {
    if (!pm.has(s))
      throw new Error(`Unsupported working color space, "${s}".`);
    this._workingColorSpace = s;
  },
  convert: function(s, e, t) {
    if (this.enabled === !1 || e === t || !e || !t)
      return s;
    const n = nr[e].toReference, i = nr[t].fromReference;
    return i(n(s));
  },
  fromWorkingColorSpace: function(s, e) {
    return this.convert(s, this._workingColorSpace, e);
  },
  toWorkingColorSpace: function(s, e) {
    return this.convert(s, e, this._workingColorSpace);
  },
  getPrimaries: function(s) {
    return nr[s].primaries;
  },
  getTransfer: function(s) {
    return s === gi ? Na : nr[s].transfer;
  },
  getLuminanceCoefficients: function(s, e = this._workingColorSpace) {
    return s.fromArray(nr[e].luminanceCoefficients);
  }
};
function Cs(s) {
  return s < 0.04045 ? s * 0.0773993808 : Math.pow(s * 0.9478672986 + 0.0521327014, 2.4);
}
function oo(s) {
  return s < 31308e-7 ? s * 12.92 : 1.055 * Math.pow(s, 0.41666) - 0.055;
}
let rs;
class mm {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      rs === void 0 && (rs = wr("canvas")), rs.width = e.width, rs.height = e.height;
      const n = rs.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = rs;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = wr("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height), r = i.data;
      for (let a = 0; a < r.length; a++)
        r[a] = Cs(r[a] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(Cs(t[n] / 255) * 255) : t[n] = Cs(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let _m = 0;
class Rd {
  constructor(e = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: _m++ }), this.uuid = Cn(), this.data = e, this.dataReady = !0, this.version = 0;
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0)
      return e.images[this.uuid];
    const n = {
      uuid: this.uuid,
      url: ""
    }, i = this.data;
    if (i !== null) {
      let r;
      if (Array.isArray(i)) {
        r = [];
        for (let a = 0, o = i.length; a < o; a++)
          i[a].isDataTexture ? r.push(lo(i[a].image)) : r.push(lo(i[a]));
      } else
        r = lo(i);
      n.url = r;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function lo(s) {
  return typeof HTMLImageElement < "u" && s instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && s instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && s instanceof ImageBitmap ? mm.getDataURL(s) : s.data ? {
    data: Array.from(s.data),
    width: s.width,
    height: s.height,
    type: s.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let gm = 0;
class St extends ts {
  constructor(e = St.DEFAULT_IMAGE, t = St.DEFAULT_MAPPING, n = vi, i = vi, r = an, a = ii, o = gn, l = ri, c = St.DEFAULT_ANISOTROPY, h = gi) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: gm++ }), this.uuid = Cn(), this.name = "", this.source = new Rd(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = i, this.magFilter = r, this.minFilter = a, this.anisotropy = c, this.format = o, this.internalFormat = null, this.type = l, this.offset = new Me(0, 0), this.repeat = new Me(1, 1), this.center = new Me(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Ue(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = h, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.pmremVersion = 0;
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0)
      return e.textures[this.uuid];
    const n = {
      metadata: {
        version: 4.6,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== fd) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case Bs:
          e.x = e.x - Math.floor(e.x);
          break;
        case vi:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case Ia:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case Bs:
          e.y = e.y - Math.floor(e.y);
          break;
        case vi:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case Ia:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  set needsPMREMUpdate(e) {
    e === !0 && this.pmremVersion++;
  }
}
St.DEFAULT_IMAGE = null;
St.DEFAULT_MAPPING = fd;
St.DEFAULT_ANISOTROPY = 1;
class Ke {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    Ke.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = i;
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, i) {
    return this.x = e, this.y = t, this.z = n, this.w = i, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setW(e) {
    return this.w = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, r = this.w, a = e.elements;
    return this.x = a[0] * t + a[4] * n + a[8] * i + a[12] * r, this.y = a[1] * t + a[5] * n + a[9] * i + a[13] * r, this.z = a[2] * t + a[6] * n + a[10] * i + a[14] * r, this.w = a[3] * t + a[7] * n + a[11] * i + a[15] * r, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, i, r;
    const l = e.elements, c = l[0], h = l[4], u = l[8], d = l[1], p = l[5], g = l[9], _ = l[2], f = l[6], m = l[10];
    if (Math.abs(h - d) < 0.01 && Math.abs(u - _) < 0.01 && Math.abs(g - f) < 0.01) {
      if (Math.abs(h + d) < 0.1 && Math.abs(u + _) < 0.1 && Math.abs(g + f) < 0.1 && Math.abs(c + p + m - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const y = (c + 1) / 2, M = (p + 1) / 2, b = (m + 1) / 2, w = (h + d) / 4, E = (u + _) / 4, R = (g + f) / 4;
      return y > M && y > b ? y < 0.01 ? (n = 0, i = 0.707106781, r = 0.707106781) : (n = Math.sqrt(y), i = w / n, r = E / n) : M > b ? M < 0.01 ? (n = 0.707106781, i = 0, r = 0.707106781) : (i = Math.sqrt(M), n = w / i, r = R / i) : b < 0.01 ? (n = 0.707106781, i = 0.707106781, r = 0) : (r = Math.sqrt(b), n = E / r, i = R / r), this.set(n, i, r, t), this;
    }
    let x = Math.sqrt((f - g) * (f - g) + (u - _) * (u - _) + (d - h) * (d - h));
    return Math.abs(x) < 1e-3 && (x = 1), this.x = (f - g) / x, this.y = (u - _) / x, this.z = (d - h) / x, this.w = Math.acos((c + p + m - 1) / 2), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this.w = t[15], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class vm extends ts {
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new Ke(0, 0, e, t), this.scissorTest = !1, this.viewport = new Ke(0, 0, e, t);
    const i = { width: e, height: t, depth: 1 };
    n = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: an,
      depthBuffer: !0,
      stencilBuffer: !1,
      resolveDepthBuffer: !0,
      resolveStencilBuffer: !0,
      depthTexture: null,
      samples: 0,
      count: 1
    }, n);
    const r = new St(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace);
    r.flipY = !1, r.generateMipmaps = n.generateMipmaps, r.internalFormat = n.internalFormat, this.textures = [];
    const a = n.count;
    for (let o = 0; o < a; o++)
      this.textures[o] = r.clone(), this.textures[o].isRenderTargetTexture = !0;
    this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this.depthTexture = n.depthTexture, this.samples = n.samples;
  }
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  setSize(e, t, n = 1) {
    if (this.width !== e || this.height !== t || this.depth !== n) {
      this.width = e, this.height = t, this.depth = n;
      for (let i = 0, r = this.textures.length; i < r; i++)
        this.textures[i].image.width = e, this.textures[i].image.height = t, this.textures[i].image.depth = n;
      this.dispose();
    }
    this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0;
    for (let n = 0, i = e.textures.length; n < i; n++)
      this.textures[n] = e.textures[n].clone(), this.textures[n].isRenderTargetTexture = !0;
    const t = Object.assign({}, e.texture.image);
    return this.texture.source = new Rd(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class es extends vm {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), this.isWebGLRenderTarget = !0;
  }
}
class Cd extends St {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = kt, this.minFilter = kt, this.wrapR = vi, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class xm extends St {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = kt, this.minFilter = kt, this.wrapR = vi, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class Vn {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = i;
  }
  static slerpFlat(e, t, n, i, r, a, o) {
    let l = n[i + 0], c = n[i + 1], h = n[i + 2], u = n[i + 3];
    const d = r[a + 0], p = r[a + 1], g = r[a + 2], _ = r[a + 3];
    if (o === 0) {
      e[t + 0] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = u;
      return;
    }
    if (o === 1) {
      e[t + 0] = d, e[t + 1] = p, e[t + 2] = g, e[t + 3] = _;
      return;
    }
    if (u !== _ || l !== d || c !== p || h !== g) {
      let f = 1 - o;
      const m = l * d + c * p + h * g + u * _, x = m >= 0 ? 1 : -1, y = 1 - m * m;
      if (y > Number.EPSILON) {
        const b = Math.sqrt(y), w = Math.atan2(b, m * x);
        f = Math.sin(f * w) / b, o = Math.sin(o * w) / b;
      }
      const M = o * x;
      if (l = l * f + d * M, c = c * f + p * M, h = h * f + g * M, u = u * f + _ * M, f === 1 - o) {
        const b = 1 / Math.sqrt(l * l + c * c + h * h + u * u);
        l *= b, c *= b, h *= b, u *= b;
      }
    }
    e[t] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = u;
  }
  static multiplyQuaternionsFlat(e, t, n, i, r, a) {
    const o = n[i], l = n[i + 1], c = n[i + 2], h = n[i + 3], u = r[a], d = r[a + 1], p = r[a + 2], g = r[a + 3];
    return e[t] = o * g + h * u + l * p - c * d, e[t + 1] = l * g + h * d + c * u - o * p, e[t + 2] = c * g + h * p + o * d - l * u, e[t + 3] = h * g - o * u - l * d - c * p, e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  set(e, t, n, i) {
    return this._x = e, this._y = t, this._z = n, this._w = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, t = !0) {
    const n = e._x, i = e._y, r = e._z, a = e._order, o = Math.cos, l = Math.sin, c = o(n / 2), h = o(i / 2), u = o(r / 2), d = l(n / 2), p = l(i / 2), g = l(r / 2);
    switch (a) {
      case "XYZ":
        this._x = d * h * u + c * p * g, this._y = c * p * u - d * h * g, this._z = c * h * g + d * p * u, this._w = c * h * u - d * p * g;
        break;
      case "YXZ":
        this._x = d * h * u + c * p * g, this._y = c * p * u - d * h * g, this._z = c * h * g - d * p * u, this._w = c * h * u + d * p * g;
        break;
      case "ZXY":
        this._x = d * h * u - c * p * g, this._y = c * p * u + d * h * g, this._z = c * h * g + d * p * u, this._w = c * h * u - d * p * g;
        break;
      case "ZYX":
        this._x = d * h * u - c * p * g, this._y = c * p * u + d * h * g, this._z = c * h * g - d * p * u, this._w = c * h * u + d * p * g;
        break;
      case "YZX":
        this._x = d * h * u + c * p * g, this._y = c * p * u + d * h * g, this._z = c * h * g - d * p * u, this._w = c * h * u - d * p * g;
        break;
      case "XZY":
        this._x = d * h * u - c * p * g, this._y = c * p * u - d * h * g, this._z = c * h * g + d * p * u, this._w = c * h * u + d * p * g;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a);
    }
    return t === !0 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2, i = Math.sin(n);
    return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], i = t[4], r = t[8], a = t[1], o = t[5], l = t[9], c = t[2], h = t[6], u = t[10], d = n + o + u;
    if (d > 0) {
      const p = 0.5 / Math.sqrt(d + 1);
      this._w = 0.25 / p, this._x = (h - l) * p, this._y = (r - c) * p, this._z = (a - i) * p;
    } else if (n > o && n > u) {
      const p = 2 * Math.sqrt(1 + n - o - u);
      this._w = (h - l) / p, this._x = 0.25 * p, this._y = (i + a) / p, this._z = (r + c) / p;
    } else if (o > u) {
      const p = 2 * Math.sqrt(1 + o - n - u);
      this._w = (r - c) / p, this._x = (i + a) / p, this._y = 0.25 * p, this._z = (l + h) / p;
    } else {
      const p = 2 * Math.sqrt(1 + u - n - o);
      this._w = (a - i) / p, this._x = (r + c) / p, this._y = (l + h) / p, this._z = 0.25 * p;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(Ct(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const i = Math.min(1, t / n);
    return this.slerp(e, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x, i = e._y, r = e._z, a = e._w, o = t._x, l = t._y, c = t._z, h = t._w;
    return this._x = n * h + a * o + i * c - r * l, this._y = i * h + a * l + r * o - n * c, this._z = r * h + a * c + n * l - i * o, this._w = a * h - n * o - i * l - r * c, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x, i = this._y, r = this._z, a = this._w;
    let o = a * e._w + n * e._x + i * e._y + r * e._z;
    if (o < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, o = -o) : this.copy(e), o >= 1)
      return this._w = a, this._x = n, this._y = i, this._z = r, this;
    const l = 1 - o * o;
    if (l <= Number.EPSILON) {
      const p = 1 - t;
      return this._w = p * a + t * this._w, this._x = p * n + t * this._x, this._y = p * i + t * this._y, this._z = p * r + t * this._z, this.normalize(), this;
    }
    const c = Math.sqrt(l), h = Math.atan2(c, o), u = Math.sin((1 - t) * h) / c, d = Math.sin(t * h) / c;
    return this._w = a * u + this._w * d, this._x = n * u + this._x * d, this._y = i * u + this._y * d, this._z = r * u + this._z * d, this._onChangeCallback(), this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), n = Math.random(), i = Math.sqrt(1 - n), r = Math.sqrt(n);
    return this.set(
      i * Math.sin(e),
      i * Math.cos(e),
      r * Math.sin(t),
      r * Math.cos(t)
    );
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class P {
  constructor(e = 0, t = 0, n = 0) {
    P.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n;
  }
  set(e, t, n) {
    return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  applyEuler(e) {
    return this.applyQuaternion(bh.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(bh.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = this.z, r = e.elements;
    return this.x = r[0] * t + r[3] * n + r[6] * i, this.y = r[1] * t + r[4] * n + r[7] * i, this.z = r[2] * t + r[5] * n + r[8] * i, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, r = e.elements, a = 1 / (r[3] * t + r[7] * n + r[11] * i + r[15]);
    return this.x = (r[0] * t + r[4] * n + r[8] * i + r[12]) * a, this.y = (r[1] * t + r[5] * n + r[9] * i + r[13]) * a, this.z = (r[2] * t + r[6] * n + r[10] * i + r[14]) * a, this;
  }
  applyQuaternion(e) {
    const t = this.x, n = this.y, i = this.z, r = e.x, a = e.y, o = e.z, l = e.w, c = 2 * (a * i - o * n), h = 2 * (o * t - r * i), u = 2 * (r * n - a * t);
    return this.x = t + l * c + a * u - o * h, this.y = n + l * h + o * c - r * u, this.z = i + l * u + r * h - a * c, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x, n = this.y, i = this.z, r = e.elements;
    return this.x = r[0] * t + r[4] * n + r[8] * i, this.y = r[1] * t + r[5] * n + r[9] * i, this.z = r[2] * t + r[6] * n + r[10] * i, this.normalize();
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  // TODO lengthSquared?
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x, i = e.y, r = e.z, a = t.x, o = t.y, l = t.z;
    return this.x = i * l - r * o, this.y = r * a - n * l, this.z = n * o - i * a, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return co.copy(this).projectOnVector(e), this.sub(co);
  }
  reflect(e) {
    return this.sub(co.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Ct(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y, i = this.z - e.z;
    return t * t + n * n + i * i;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const i = Math.sin(t) * e;
    return this.x = i * Math.sin(n), this.y = Math.cos(t) * e, this.z = i * Math.cos(n), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), i = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = i, this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  setFromColor(e) {
    return this.x = e.r, this.y = e.g, this.z = e.b, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const e = Math.random() * Math.PI * 2, t = Math.random() * 2 - 1, n = Math.sqrt(1 - t * t);
    return this.x = n * Math.cos(e), this.y = t, this.z = n * Math.sin(e), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const co = /* @__PURE__ */ new P(), bh = /* @__PURE__ */ new Vn();
class Wn {
  constructor(e = new P(1 / 0, 1 / 0, 1 / 0), t = new P(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(Sn.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(Sn.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = Sn.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0) {
      const r = n.getAttribute("position");
      if (t === !0 && r !== void 0 && e.isInstancedMesh !== !0)
        for (let a = 0, o = r.count; a < o; a++)
          e.isMesh === !0 ? e.getVertexPosition(a, Sn) : Sn.fromBufferAttribute(r, a), Sn.applyMatrix4(e.matrixWorld), this.expandByPoint(Sn);
      else
        e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), Hr.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), Hr.copy(n.boundingBox)), Hr.applyMatrix4(e.matrixWorld), this.union(Hr);
    }
    const i = e.children;
    for (let r = 0, a = i.length; r < a; r++)
      this.expandByObject(i[r], t);
    return this;
  }
  containsPoint(e) {
    return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z;
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z;
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, Sn), Sn.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(ir), Gr.subVectors(this.max, ir), as.subVectors(e.a, ir), os.subVectors(e.b, ir), ls.subVectors(e.c, ir), ci.subVectors(os, as), hi.subVectors(ls, os), Ii.subVectors(as, ls);
    let t = [
      0,
      -ci.z,
      ci.y,
      0,
      -hi.z,
      hi.y,
      0,
      -Ii.z,
      Ii.y,
      ci.z,
      0,
      -ci.x,
      hi.z,
      0,
      -hi.x,
      Ii.z,
      0,
      -Ii.x,
      -ci.y,
      ci.x,
      0,
      -hi.y,
      hi.x,
      0,
      -Ii.y,
      Ii.x,
      0
    ];
    return !ho(t, as, os, ls, Gr) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !ho(t, as, os, ls, Gr)) ? !1 : (Wr.crossVectors(ci, hi), t = [Wr.x, Wr.y, Wr.z], ho(t, as, os, ls, Gr));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, Sn).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(Sn).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (qn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), qn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), qn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), qn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), qn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), qn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), qn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), qn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(qn), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const qn = [
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P()
], Sn = /* @__PURE__ */ new P(), Hr = /* @__PURE__ */ new Wn(), as = /* @__PURE__ */ new P(), os = /* @__PURE__ */ new P(), ls = /* @__PURE__ */ new P(), ci = /* @__PURE__ */ new P(), hi = /* @__PURE__ */ new P(), Ii = /* @__PURE__ */ new P(), ir = /* @__PURE__ */ new P(), Gr = /* @__PURE__ */ new P(), Wr = /* @__PURE__ */ new P(), Ni = /* @__PURE__ */ new P();
function ho(s, e, t, n, i) {
  for (let r = 0, a = s.length - 3; r <= a; r += 3) {
    Ni.fromArray(s, r);
    const o = i.x * Math.abs(Ni.x) + i.y * Math.abs(Ni.y) + i.z * Math.abs(Ni.z), l = e.dot(Ni), c = t.dot(Ni), h = n.dot(Ni);
    if (Math.max(-Math.max(l, c, h), Math.min(l, c, h)) > o)
      return !1;
  }
  return !0;
}
const ym = /* @__PURE__ */ new Wn(), sr = /* @__PURE__ */ new P(), uo = /* @__PURE__ */ new P();
class Pn {
  constructor(e = new P(), t = -1) {
    this.isSphere = !0, this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : ym.setFromPoints(e).getCenter(n);
    let i = 0;
    for (let r = 0, a = e.length; r < a; r++)
      i = Math.max(i, n.distanceToSquared(e[r]));
    return this.radius = Math.sqrt(i), this;
  }
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty())
      return this.center.copy(e), this.radius = 0, this;
    sr.subVectors(e, this.center);
    const t = sr.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), i = (n - this.radius) * 0.5;
      this.center.addScaledVector(sr, i / n), this.radius += i;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (uo.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(sr.copy(e.center).add(uo)), this.expandByPoint(sr.copy(e.center).sub(uo))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const jn = /* @__PURE__ */ new P(), fo = /* @__PURE__ */ new P(), Xr = /* @__PURE__ */ new P(), ui = /* @__PURE__ */ new P(), po = /* @__PURE__ */ new P(), Yr = /* @__PURE__ */ new P(), mo = /* @__PURE__ */ new P();
class $s {
  constructor(e = new P(), t = new P(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, jn)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = jn.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (jn.copy(this.origin).addScaledVector(this.direction, t), jn.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    fo.copy(e).add(t).multiplyScalar(0.5), Xr.copy(t).sub(e).normalize(), ui.copy(this.origin).sub(fo);
    const r = e.distanceTo(t) * 0.5, a = -this.direction.dot(Xr), o = ui.dot(this.direction), l = -ui.dot(Xr), c = ui.lengthSq(), h = Math.abs(1 - a * a);
    let u, d, p, g;
    if (h > 0)
      if (u = a * l - o, d = a * o - l, g = r * h, u >= 0)
        if (d >= -g)
          if (d <= g) {
            const _ = 1 / h;
            u *= _, d *= _, p = u * (u + a * d + 2 * o) + d * (a * u + d + 2 * l) + c;
          } else
            d = r, u = Math.max(0, -(a * d + o)), p = -u * u + d * (d + 2 * l) + c;
        else
          d = -r, u = Math.max(0, -(a * d + o)), p = -u * u + d * (d + 2 * l) + c;
      else
        d <= -g ? (u = Math.max(0, -(-a * r + o)), d = u > 0 ? -r : Math.min(Math.max(-r, -l), r), p = -u * u + d * (d + 2 * l) + c) : d <= g ? (u = 0, d = Math.min(Math.max(-r, -l), r), p = d * (d + 2 * l) + c) : (u = Math.max(0, -(a * r + o)), d = u > 0 ? r : Math.min(Math.max(-r, -l), r), p = -u * u + d * (d + 2 * l) + c);
    else
      d = a > 0 ? -r : r, u = Math.max(0, -(a * d + o)), p = -u * u + d * (d + 2 * l) + c;
    return n && n.copy(this.origin).addScaledVector(this.direction, u), i && i.copy(fo).addScaledVector(Xr, d), p;
  }
  intersectSphere(e, t) {
    jn.subVectors(e.center, this.origin);
    const n = jn.dot(this.direction), i = jn.dot(jn) - n * n, r = e.radius * e.radius;
    if (i > r) return null;
    const a = Math.sqrt(r - i), o = n - a, l = n + a;
    return l < 0 ? null : o < 0 ? this.at(l, t) : this.at(o, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0)
      return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, i, r, a, o, l;
    const c = 1 / this.direction.x, h = 1 / this.direction.y, u = 1 / this.direction.z, d = this.origin;
    return c >= 0 ? (n = (e.min.x - d.x) * c, i = (e.max.x - d.x) * c) : (n = (e.max.x - d.x) * c, i = (e.min.x - d.x) * c), h >= 0 ? (r = (e.min.y - d.y) * h, a = (e.max.y - d.y) * h) : (r = (e.max.y - d.y) * h, a = (e.min.y - d.y) * h), n > a || r > i || ((r > n || isNaN(n)) && (n = r), (a < i || isNaN(i)) && (i = a), u >= 0 ? (o = (e.min.z - d.z) * u, l = (e.max.z - d.z) * u) : (o = (e.max.z - d.z) * u, l = (e.min.z - d.z) * u), n > l || o > i) || ((o > n || n !== n) && (n = o), (l < i || i !== i) && (i = l), i < 0) ? null : this.at(n >= 0 ? n : i, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, jn) !== null;
  }
  intersectTriangle(e, t, n, i, r) {
    po.subVectors(t, e), Yr.subVectors(n, e), mo.crossVectors(po, Yr);
    let a = this.direction.dot(mo), o;
    if (a > 0) {
      if (i) return null;
      o = 1;
    } else if (a < 0)
      o = -1, a = -a;
    else
      return null;
    ui.subVectors(this.origin, e);
    const l = o * this.direction.dot(Yr.crossVectors(ui, Yr));
    if (l < 0)
      return null;
    const c = o * this.direction.dot(po.cross(ui));
    if (c < 0 || l + c > a)
      return null;
    const h = -o * ui.dot(mo);
    return h < 0 ? null : this.at(h / a, r);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Ie {
  constructor(e, t, n, i, r, a, o, l, c, h, u, d, p, g, _, f) {
    Ie.prototype.isMatrix4 = !0, this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, i, r, a, o, l, c, h, u, d, p, g, _, f);
  }
  set(e, t, n, i, r, a, o, l, c, h, u, d, p, g, _, f) {
    const m = this.elements;
    return m[0] = e, m[4] = t, m[8] = n, m[12] = i, m[1] = r, m[5] = a, m[9] = o, m[13] = l, m[2] = c, m[6] = h, m[10] = u, m[14] = d, m[3] = p, m[7] = g, m[11] = _, m[15] = f, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  clone() {
    return new Ie().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
  }
  copyPosition(e) {
    const t = this.elements, n = e.elements;
    return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[3],
      t[6],
      0,
      t[1],
      t[4],
      t[7],
      0,
      t[2],
      t[5],
      t[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(e, t, n) {
    return this.set(
      e.x,
      t.x,
      n.x,
      0,
      e.y,
      t.y,
      n.y,
      0,
      e.z,
      t.z,
      n.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractRotation(e) {
    const t = this.elements, n = e.elements, i = 1 / cs.setFromMatrixColumn(e, 0).length(), r = 1 / cs.setFromMatrixColumn(e, 1).length(), a = 1 / cs.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * r, t[5] = n[5] * r, t[6] = n[6] * r, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, i = e.y, r = e.z, a = Math.cos(n), o = Math.sin(n), l = Math.cos(i), c = Math.sin(i), h = Math.cos(r), u = Math.sin(r);
    if (e.order === "XYZ") {
      const d = a * h, p = a * u, g = o * h, _ = o * u;
      t[0] = l * h, t[4] = -l * u, t[8] = c, t[1] = p + g * c, t[5] = d - _ * c, t[9] = -o * l, t[2] = _ - d * c, t[6] = g + p * c, t[10] = a * l;
    } else if (e.order === "YXZ") {
      const d = l * h, p = l * u, g = c * h, _ = c * u;
      t[0] = d + _ * o, t[4] = g * o - p, t[8] = a * c, t[1] = a * u, t[5] = a * h, t[9] = -o, t[2] = p * o - g, t[6] = _ + d * o, t[10] = a * l;
    } else if (e.order === "ZXY") {
      const d = l * h, p = l * u, g = c * h, _ = c * u;
      t[0] = d - _ * o, t[4] = -a * u, t[8] = g + p * o, t[1] = p + g * o, t[5] = a * h, t[9] = _ - d * o, t[2] = -a * c, t[6] = o, t[10] = a * l;
    } else if (e.order === "ZYX") {
      const d = a * h, p = a * u, g = o * h, _ = o * u;
      t[0] = l * h, t[4] = g * c - p, t[8] = d * c + _, t[1] = l * u, t[5] = _ * c + d, t[9] = p * c - g, t[2] = -c, t[6] = o * l, t[10] = a * l;
    } else if (e.order === "YZX") {
      const d = a * l, p = a * c, g = o * l, _ = o * c;
      t[0] = l * h, t[4] = _ - d * u, t[8] = g * u + p, t[1] = u, t[5] = a * h, t[9] = -o * h, t[2] = -c * h, t[6] = p * u + g, t[10] = d - _ * u;
    } else if (e.order === "XZY") {
      const d = a * l, p = a * c, g = o * l, _ = o * c;
      t[0] = l * h, t[4] = -u, t[8] = c * h, t[1] = d * u + _, t[5] = a * h, t[9] = p * u - g, t[2] = g * u - p, t[6] = o * h, t[10] = _ * u + d;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(Mm, e, Sm);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return nn.subVectors(e, t), nn.lengthSq() === 0 && (nn.z = 1), nn.normalize(), di.crossVectors(n, nn), di.lengthSq() === 0 && (Math.abs(n.z) === 1 ? nn.x += 1e-4 : nn.z += 1e-4, nn.normalize(), di.crossVectors(n, nn)), di.normalize(), qr.crossVectors(nn, di), i[0] = di.x, i[4] = qr.x, i[8] = nn.x, i[1] = di.y, i[5] = qr.y, i[9] = nn.y, i[2] = di.z, i[6] = qr.z, i[10] = nn.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, r = this.elements, a = n[0], o = n[4], l = n[8], c = n[12], h = n[1], u = n[5], d = n[9], p = n[13], g = n[2], _ = n[6], f = n[10], m = n[14], x = n[3], y = n[7], M = n[11], b = n[15], w = i[0], E = i[4], R = i[8], L = i[12], v = i[1], T = i[5], F = i[9], O = i[13], G = i[2], q = i[6], z = i[10], X = i[14], H = i[3], te = i[7], se = i[11], ce = i[15];
    return r[0] = a * w + o * v + l * G + c * H, r[4] = a * E + o * T + l * q + c * te, r[8] = a * R + o * F + l * z + c * se, r[12] = a * L + o * O + l * X + c * ce, r[1] = h * w + u * v + d * G + p * H, r[5] = h * E + u * T + d * q + p * te, r[9] = h * R + u * F + d * z + p * se, r[13] = h * L + u * O + d * X + p * ce, r[2] = g * w + _ * v + f * G + m * H, r[6] = g * E + _ * T + f * q + m * te, r[10] = g * R + _ * F + f * z + m * se, r[14] = g * L + _ * O + f * X + m * ce, r[3] = x * w + y * v + M * G + b * H, r[7] = x * E + y * T + M * q + b * te, r[11] = x * R + y * F + M * z + b * se, r[15] = x * L + y * O + M * X + b * ce, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], i = e[8], r = e[12], a = e[1], o = e[5], l = e[9], c = e[13], h = e[2], u = e[6], d = e[10], p = e[14], g = e[3], _ = e[7], f = e[11], m = e[15];
    return g * (+r * l * u - i * c * u - r * o * d + n * c * d + i * o * p - n * l * p) + _ * (+t * l * p - t * c * d + r * a * d - i * a * p + i * c * h - r * l * h) + f * (+t * c * u - t * o * p - r * a * u + n * a * p + r * o * h - n * c * h) + m * (-i * o * h - t * l * u + t * o * d + i * a * u - n * a * d + n * l * h);
  }
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  setPosition(e, t, n) {
    const i = this.elements;
    return e.isVector3 ? (i[12] = e.x, i[13] = e.y, i[14] = e.z) : (i[12] = e, i[13] = t, i[14] = n), this;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], a = e[4], o = e[5], l = e[6], c = e[7], h = e[8], u = e[9], d = e[10], p = e[11], g = e[12], _ = e[13], f = e[14], m = e[15], x = u * f * c - _ * d * c + _ * l * p - o * f * p - u * l * m + o * d * m, y = g * d * c - h * f * c - g * l * p + a * f * p + h * l * m - a * d * m, M = h * _ * c - g * u * c + g * o * p - a * _ * p - h * o * m + a * u * m, b = g * u * l - h * _ * l - g * o * d + a * _ * d + h * o * f - a * u * f, w = t * x + n * y + i * M + r * b;
    if (w === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const E = 1 / w;
    return e[0] = x * E, e[1] = (_ * d * r - u * f * r - _ * i * p + n * f * p + u * i * m - n * d * m) * E, e[2] = (o * f * r - _ * l * r + _ * i * c - n * f * c - o * i * m + n * l * m) * E, e[3] = (u * l * r - o * d * r - u * i * c + n * d * c + o * i * p - n * l * p) * E, e[4] = y * E, e[5] = (h * f * r - g * d * r + g * i * p - t * f * p - h * i * m + t * d * m) * E, e[6] = (g * l * r - a * f * r - g * i * c + t * f * c + a * i * m - t * l * m) * E, e[7] = (a * d * r - h * l * r + h * i * c - t * d * c - a * i * p + t * l * p) * E, e[8] = M * E, e[9] = (g * u * r - h * _ * r - g * n * p + t * _ * p + h * n * m - t * u * m) * E, e[10] = (a * _ * r - g * o * r + g * n * c - t * _ * c - a * n * m + t * o * m) * E, e[11] = (h * o * r - a * u * r - h * n * c + t * u * c + a * n * p - t * o * p) * E, e[12] = b * E, e[13] = (h * _ * i - g * u * i + g * n * d - t * _ * d - h * n * f + t * u * f) * E, e[14] = (g * o * i - a * _ * i - g * n * l + t * _ * l + a * n * f - t * o * f) * E, e[15] = (a * u * i - h * o * i + h * n * l - t * u * l - a * n * d + t * o * d) * E, this;
  }
  scale(e) {
    const t = this.elements, n = e.x, i = e.y, r = e.z;
    return t[0] *= n, t[4] *= i, t[8] *= r, t[1] *= n, t[5] *= i, t[9] *= r, t[2] *= n, t[6] *= i, t[10] *= r, t[3] *= n, t[7] *= i, t[11] *= r, this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, i));
  }
  makeTranslation(e, t, n) {
    return e.isVector3 ? this.set(
      1,
      0,
      0,
      e.x,
      0,
      1,
      0,
      e.y,
      0,
      0,
      1,
      e.z,
      0,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      0,
      e,
      0,
      1,
      0,
      t,
      0,
      0,
      1,
      n,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      0,
      n,
      0,
      0,
      1,
      0,
      0,
      -n,
      0,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t), i = Math.sin(t), r = 1 - n, a = e.x, o = e.y, l = e.z, c = r * a, h = r * o;
    return this.set(
      c * a + n,
      c * o - i * l,
      c * l + i * o,
      0,
      c * o + i * l,
      h * o + n,
      h * l - i * a,
      0,
      c * l - i * o,
      h * l + i * a,
      r * l * l + n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t, n) {
    return this.set(
      e,
      0,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeShear(e, t, n, i, r, a) {
    return this.set(
      1,
      n,
      r,
      0,
      e,
      1,
      a,
      0,
      t,
      i,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  compose(e, t, n) {
    const i = this.elements, r = t._x, a = t._y, o = t._z, l = t._w, c = r + r, h = a + a, u = o + o, d = r * c, p = r * h, g = r * u, _ = a * h, f = a * u, m = o * u, x = l * c, y = l * h, M = l * u, b = n.x, w = n.y, E = n.z;
    return i[0] = (1 - (_ + m)) * b, i[1] = (p + M) * b, i[2] = (g - y) * b, i[3] = 0, i[4] = (p - M) * w, i[5] = (1 - (d + m)) * w, i[6] = (f + x) * w, i[7] = 0, i[8] = (g + y) * E, i[9] = (f - x) * E, i[10] = (1 - (d + _)) * E, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this;
  }
  decompose(e, t, n) {
    const i = this.elements;
    let r = cs.set(i[0], i[1], i[2]).length();
    const a = cs.set(i[4], i[5], i[6]).length(), o = cs.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (r = -r), e.x = i[12], e.y = i[13], e.z = i[14], En.copy(this);
    const c = 1 / r, h = 1 / a, u = 1 / o;
    return En.elements[0] *= c, En.elements[1] *= c, En.elements[2] *= c, En.elements[4] *= h, En.elements[5] *= h, En.elements[6] *= h, En.elements[8] *= u, En.elements[9] *= u, En.elements[10] *= u, t.setFromRotationMatrix(En), n.x = r, n.y = a, n.z = o, this;
  }
  makePerspective(e, t, n, i, r, a, o = si) {
    const l = this.elements, c = 2 * r / (t - e), h = 2 * r / (n - i), u = (t + e) / (t - e), d = (n + i) / (n - i);
    let p, g;
    if (o === si)
      p = -(a + r) / (a - r), g = -2 * a * r / (a - r);
    else if (o === Fa)
      p = -a / (a - r), g = -a * r / (a - r);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return l[0] = c, l[4] = 0, l[8] = u, l[12] = 0, l[1] = 0, l[5] = h, l[9] = d, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = p, l[14] = g, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  makeOrthographic(e, t, n, i, r, a, o = si) {
    const l = this.elements, c = 1 / (t - e), h = 1 / (n - i), u = 1 / (a - r), d = (t + e) * c, p = (n + i) * h;
    let g, _;
    if (o === si)
      g = (a + r) * u, _ = -2 * u;
    else if (o === Fa)
      g = r * u, _ = -1 * u;
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return l[0] = 2 * c, l[4] = 0, l[8] = 0, l[12] = -d, l[1] = 0, l[5] = 2 * h, l[9] = 0, l[13] = -p, l[2] = 0, l[6] = 0, l[10] = _, l[14] = -g, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 16; i++)
      if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
  }
}
const cs = /* @__PURE__ */ new P(), En = /* @__PURE__ */ new Ie(), Mm = /* @__PURE__ */ new P(0, 0, 0), Sm = /* @__PURE__ */ new P(1, 1, 1), di = /* @__PURE__ */ new P(), qr = /* @__PURE__ */ new P(), nn = /* @__PURE__ */ new P(), Ah = /* @__PURE__ */ new Ie(), wh = /* @__PURE__ */ new Vn();
class Hn {
  constructor(e = 0, t = 0, n = 0, i = Hn.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = e, this._y = t, this._z = n, this._order = i;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  set(e, t, n, i = this._order) {
    return this._x = e, this._y = t, this._z = n, this._order = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const i = e.elements, r = i[0], a = i[4], o = i[8], l = i[1], c = i[5], h = i[9], u = i[2], d = i[6], p = i[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(Ct(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-h, p), this._z = Math.atan2(-a, r)) : (this._x = Math.atan2(d, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-Ct(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(o, p), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-u, r), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(Ct(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._y = Math.atan2(-u, p), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(l, r));
        break;
      case "ZYX":
        this._y = Math.asin(-Ct(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._x = Math.atan2(d, p), this._z = Math.atan2(l, r)) : (this._x = 0, this._z = Math.atan2(-a, c));
        break;
      case "YZX":
        this._z = Math.asin(Ct(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-h, c), this._y = Math.atan2(-u, r)) : (this._x = 0, this._y = Math.atan2(o, p));
        break;
      case "XZY":
        this._z = Math.asin(-Ct(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(d, c), this._y = Math.atan2(o, r)) : (this._x = Math.atan2(-h, p), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return Ah.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Ah, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return wh.setFromEuler(this), this.setFromQuaternion(wh, e);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
Hn.DEFAULT_ORDER = "XYZ";
class Sc {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let Em = 0;
const Rh = /* @__PURE__ */ new P(), hs = /* @__PURE__ */ new Vn(), Kn = /* @__PURE__ */ new Ie(), jr = /* @__PURE__ */ new P(), rr = /* @__PURE__ */ new P(), Tm = /* @__PURE__ */ new P(), bm = /* @__PURE__ */ new Vn(), Ch = /* @__PURE__ */ new P(1, 0, 0), Ph = /* @__PURE__ */ new P(0, 1, 0), Lh = /* @__PURE__ */ new P(0, 0, 1), Dh = { type: "added" }, Am = { type: "removed" }, us = { type: "childadded", child: null }, _o = { type: "childremoved", child: null };
class ht extends ts {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: Em++ }), this.uuid = Cn(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = ht.DEFAULT_UP.clone();
    const e = new P(), t = new Hn(), n = new Vn(), i = new P(1, 1, 1);
    function r() {
      n.setFromEuler(t, !1);
    }
    function a() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(r), n._onChange(a), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: i
      },
      modelViewMatrix: {
        value: new Ie()
      },
      normalMatrix: {
        value: new Ue()
      }
    }), this.matrix = new Ie(), this.matrixWorld = new Ie(), this.matrixAutoUpdate = ht.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new Sc(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeShadow() {
  }
  onAfterShadow() {
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return hs.setFromAxisAngle(e, t), this.quaternion.multiply(hs), this;
  }
  rotateOnWorldAxis(e, t) {
    return hs.setFromAxisAngle(e, t), this.quaternion.premultiply(hs), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(Ch, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Ph, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(Lh, e);
  }
  translateOnAxis(e, t) {
    return Rh.copy(e).applyQuaternion(this.quaternion), this.position.add(Rh.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(Ch, e);
  }
  translateY(e) {
    return this.translateOnAxis(Ph, e);
  }
  translateZ(e) {
    return this.translateOnAxis(Lh, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(Kn.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? jr.copy(e) : jr.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1), rr.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Kn.lookAt(rr, jr, this.up) : Kn.lookAt(jr, rr, this.up), this.quaternion.setFromRotationMatrix(Kn), i && (Kn.extractRotation(i.matrixWorld), hs.setFromRotationMatrix(Kn), this.quaternion.premultiply(hs.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(Dh), us.child = e, this.dispatchEvent(us), us.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Am), _o.child = e, this.dispatchEvent(_o), _o.child = null), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return this.updateWorldMatrix(!0, !1), Kn.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), Kn.multiply(e.parent.matrixWorld)), e.applyMatrix4(Kn), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(!1, !0), e.dispatchEvent(Dh), us.child = e, this.dispatchEvent(us), us.child = null, this;
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const a = this.children[n].getObjectByProperty(e, t);
      if (a !== void 0)
        return a;
    }
  }
  getObjectsByProperty(e, t, n = []) {
    this[e] === t && n.push(this);
    const i = this.children;
    for (let r = 0, a = i.length; r < a; r++)
      i[r].getObjectsByProperty(e, t, n);
    return n;
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(rr, e, Tm), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(rr, bm, e), e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {
  }
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, e = !0);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].updateMatrixWorld(e);
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === !0 && n !== null && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), t === !0) {
      const i = this.children;
      for (let r = 0, a = i.length; r < a; r++)
        i[r].updateWorldMatrix(!1, !0);
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", n = {};
    t && (e = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, n.metadata = {
      version: 4.6,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const i = {};
    i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.castShadow === !0 && (i.castShadow = !0), this.receiveShadow === !0 && (i.receiveShadow = !0), this.visible === !1 && (i.visible = !1), this.frustumCulled === !1 && (i.frustumCulled = !1), this.renderOrder !== 0 && (i.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), i.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (i.type = "BatchedMesh", i.perObjectFrustumCulled = this.perObjectFrustumCulled, i.sortObjects = this.sortObjects, i.drawRanges = this._drawRanges, i.reservedRanges = this._reservedRanges, i.visibility = this._visibility, i.active = this._active, i.bounds = this._bounds.map((o) => ({
      boxInitialized: o.boxInitialized,
      boxMin: o.box.min.toArray(),
      boxMax: o.box.max.toArray(),
      sphereInitialized: o.sphereInitialized,
      sphereRadius: o.sphere.radius,
      sphereCenter: o.sphere.center.toArray()
    })), i.maxInstanceCount = this._maxInstanceCount, i.maxVertexCount = this._maxVertexCount, i.maxIndexCount = this._maxIndexCount, i.geometryInitialized = this._geometryInitialized, i.geometryCount = this._geometryCount, i.matricesTexture = this._matricesTexture.toJSON(e), this._colorsTexture !== null && (i.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (i.boundingSphere = {
      center: i.boundingSphere.center.toArray(),
      radius: i.boundingSphere.radius
    }), this.boundingBox !== null && (i.boundingBox = {
      min: i.boundingBox.min.toArray(),
      max: i.boundingBox.max.toArray()
    }));
    function r(o, l) {
      return o[l.uuid] === void 0 && (o[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (i.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = r(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const l = o.shapes;
        if (Array.isArray(l))
          for (let c = 0, h = l.length; c < h; c++) {
            const u = l[c];
            r(e.shapes, u);
          }
        else
          r(e.shapes, l);
      }
    }
    if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (r(e.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const o = [];
        for (let l = 0, c = this.material.length; l < c; l++)
          o.push(r(e.materials, this.material[l]));
        i.material = o;
      } else
        i.material = r(e.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let o = 0; o < this.children.length; o++)
        i.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const l = this.animations[o];
        i.animations.push(r(e.animations, l));
      }
    }
    if (t) {
      const o = a(e.geometries), l = a(e.materials), c = a(e.textures), h = a(e.images), u = a(e.shapes), d = a(e.skeletons), p = a(e.animations), g = a(e.nodes);
      o.length > 0 && (n.geometries = o), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), h.length > 0 && (n.images = h), u.length > 0 && (n.shapes = u), d.length > 0 && (n.skeletons = d), p.length > 0 && (n.animations = p), g.length > 0 && (n.nodes = g);
    }
    return n.object = i, n;
    function a(o) {
      const l = [];
      for (const c in o) {
        const h = o[c];
        delete h.metadata, l.push(h);
      }
      return l;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
      for (let n = 0; n < e.children.length; n++) {
        const i = e.children[n];
        this.add(i.clone());
      }
    return this;
  }
}
ht.DEFAULT_UP = /* @__PURE__ */ new P(0, 1, 0);
ht.DEFAULT_MATRIX_AUTO_UPDATE = !0;
ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const Tn = /* @__PURE__ */ new P(), Zn = /* @__PURE__ */ new P(), go = /* @__PURE__ */ new P(), $n = /* @__PURE__ */ new P(), ds = /* @__PURE__ */ new P(), fs = /* @__PURE__ */ new P(), Ih = /* @__PURE__ */ new P(), vo = /* @__PURE__ */ new P(), xo = /* @__PURE__ */ new P(), yo = /* @__PURE__ */ new P(), Mo = /* @__PURE__ */ new Ke(), So = /* @__PURE__ */ new Ke(), Eo = /* @__PURE__ */ new Ke();
class An {
  constructor(e = new P(), t = new P(), n = new P()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), Tn.subVectors(e, t), i.cross(Tn);
    const r = i.lengthSq();
    return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
  }
  // static/instance method to calculate barycentric coordinates
  // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
  static getBarycoord(e, t, n, i, r) {
    Tn.subVectors(i, t), Zn.subVectors(n, t), go.subVectors(e, t);
    const a = Tn.dot(Tn), o = Tn.dot(Zn), l = Tn.dot(go), c = Zn.dot(Zn), h = Zn.dot(go), u = a * c - o * o;
    if (u === 0)
      return r.set(0, 0, 0), null;
    const d = 1 / u, p = (c * l - o * h) * d, g = (a * h - o * l) * d;
    return r.set(1 - p - g, g, p);
  }
  static containsPoint(e, t, n, i) {
    return this.getBarycoord(e, t, n, i, $n) === null ? !1 : $n.x >= 0 && $n.y >= 0 && $n.x + $n.y <= 1;
  }
  static getInterpolation(e, t, n, i, r, a, o, l) {
    return this.getBarycoord(e, t, n, i, $n) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(r, $n.x), l.addScaledVector(a, $n.y), l.addScaledVector(o, $n.z), l);
  }
  static getInterpolatedAttribute(e, t, n, i, r, a) {
    return Mo.setScalar(0), So.setScalar(0), Eo.setScalar(0), Mo.fromBufferAttribute(e, t), So.fromBufferAttribute(e, n), Eo.fromBufferAttribute(e, i), a.setScalar(0), a.addScaledVector(Mo, r.x), a.addScaledVector(So, r.y), a.addScaledVector(Eo, r.z), a;
  }
  static isFrontFacing(e, t, n, i) {
    return Tn.subVectors(n, t), Zn.subVectors(e, t), Tn.cross(Zn).dot(i) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, i) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
  }
  setFromAttributeAndIndices(e, t, n, i) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, i), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return Tn.subVectors(this.c, this.b), Zn.subVectors(this.a, this.b), Tn.cross(Zn).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return An.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return An.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getInterpolation(e, t, n, i, r) {
    return An.getInterpolation(e, this.a, this.b, this.c, t, n, i, r);
  }
  containsPoint(e) {
    return An.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return An.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, i = this.b, r = this.c;
    let a, o;
    ds.subVectors(i, n), fs.subVectors(r, n), vo.subVectors(e, n);
    const l = ds.dot(vo), c = fs.dot(vo);
    if (l <= 0 && c <= 0)
      return t.copy(n);
    xo.subVectors(e, i);
    const h = ds.dot(xo), u = fs.dot(xo);
    if (h >= 0 && u <= h)
      return t.copy(i);
    const d = l * u - h * c;
    if (d <= 0 && l >= 0 && h <= 0)
      return a = l / (l - h), t.copy(n).addScaledVector(ds, a);
    yo.subVectors(e, r);
    const p = ds.dot(yo), g = fs.dot(yo);
    if (g >= 0 && p <= g)
      return t.copy(r);
    const _ = p * c - l * g;
    if (_ <= 0 && c >= 0 && g <= 0)
      return o = c / (c - g), t.copy(n).addScaledVector(fs, o);
    const f = h * g - p * u;
    if (f <= 0 && u - h >= 0 && p - g >= 0)
      return Ih.subVectors(r, i), o = (u - h) / (u - h + (p - g)), t.copy(i).addScaledVector(Ih, o);
    const m = 1 / (f + _ + d);
    return a = _ * m, o = d * m, t.copy(n).addScaledVector(ds, a).addScaledVector(fs, o);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const Pd = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, fi = { h: 0, s: 0, l: 0 }, Kr = { h: 0, s: 0, l: 0 };
function To(s, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? s + (e - s) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? s + (e - s) * 6 * (2 / 3 - t) : s;
}
class be {
  constructor(e, t, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
  }
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const i = e;
      i && i.isColor ? this.copy(i) : typeof i == "number" ? this.setHex(i) : typeof i == "string" && this.setStyle(i);
    } else
      this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = Rt) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, qe.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, i = qe.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, qe.toWorkingColorSpace(this, i), this;
  }
  setHSL(e, t, n, i = qe.workingColorSpace) {
    if (e = Mc(e, 1), t = Ct(t, 0, 1), n = Ct(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const r = n <= 0.5 ? n * (1 + t) : n + t - n * t, a = 2 * n - r;
      this.r = To(a, r, e + 1 / 3), this.g = To(a, r, e), this.b = To(a, r, e - 1 / 3);
    }
    return qe.toWorkingColorSpace(this, i), this;
  }
  setStyle(e, t = Rt) {
    function n(r) {
      r !== void 0 && parseFloat(r) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let i;
    if (i = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let r;
      const a = i[1], o = i[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(r[4]), this.setRGB(
              Math.min(255, parseInt(r[1], 10)) / 255,
              Math.min(255, parseInt(r[2], 10)) / 255,
              Math.min(255, parseInt(r[3], 10)) / 255,
              t
            );
          if (r = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(r[4]), this.setRGB(
              Math.min(100, parseInt(r[1], 10)) / 100,
              Math.min(100, parseInt(r[2], 10)) / 100,
              Math.min(100, parseInt(r[3], 10)) / 100,
              t
            );
          break;
        case "hsl":
        case "hsla":
          if (r = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(r[4]), this.setHSL(
              parseFloat(r[1]) / 360,
              parseFloat(r[2]) / 100,
              parseFloat(r[3]) / 100,
              t
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if (i = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const r = i[1], a = r.length;
      if (a === 3)
        return this.setRGB(
          parseInt(r.charAt(0), 16) / 15,
          parseInt(r.charAt(1), 16) / 15,
          parseInt(r.charAt(2), 16) / 15,
          t
        );
      if (a === 6)
        return this.setHex(parseInt(r, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0)
      return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = Rt) {
    const n = Pd[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = Cs(e.r), this.g = Cs(e.g), this.b = Cs(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = oo(e.r), this.g = oo(e.g), this.b = oo(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Rt) {
    return qe.fromWorkingColorSpace(It.copy(this), e), Math.round(Ct(It.r * 255, 0, 255)) * 65536 + Math.round(Ct(It.g * 255, 0, 255)) * 256 + Math.round(Ct(It.b * 255, 0, 255));
  }
  getHexString(e = Rt) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = qe.workingColorSpace) {
    qe.fromWorkingColorSpace(It.copy(this), t);
    const n = It.r, i = It.g, r = It.b, a = Math.max(n, i, r), o = Math.min(n, i, r);
    let l, c;
    const h = (o + a) / 2;
    if (o === a)
      l = 0, c = 0;
    else {
      const u = a - o;
      switch (c = h <= 0.5 ? u / (a + o) : u / (2 - a - o), a) {
        case n:
          l = (i - r) / u + (i < r ? 6 : 0);
          break;
        case i:
          l = (r - n) / u + 2;
          break;
        case r:
          l = (n - i) / u + 4;
          break;
      }
      l /= 6;
    }
    return e.h = l, e.s = c, e.l = h, e;
  }
  getRGB(e, t = qe.workingColorSpace) {
    return qe.fromWorkingColorSpace(It.copy(this), t), e.r = It.r, e.g = It.g, e.b = It.b, e;
  }
  getStyle(e = Rt) {
    qe.fromWorkingColorSpace(It.copy(this), e);
    const t = It.r, n = It.g, i = It.b;
    return e !== Rt ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(i * 255)})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(fi), this.setHSL(fi.h + e, fi.s + t, fi.l + n);
  }
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  lerpColors(e, t, n) {
    return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
  }
  lerpHSL(e, t) {
    this.getHSL(fi), e.getHSL(Kr);
    const n = xr(fi.h, Kr.h, t), i = xr(fi.s, Kr.s, t), r = xr(fi.l, Kr.l, t);
    return this.setHSL(n, i, r), this;
  }
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  applyMatrix3(e) {
    const t = this.r, n = this.g, i = this.b, r = e.elements;
    return this.r = r[0] * t + r[3] * n + r[6] * i, this.g = r[1] * t + r[4] * n + r[7] * i, this.b = r[2] * t + r[5] * n + r[8] * i, this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const It = /* @__PURE__ */ new be();
be.NAMES = Pd;
let wm = 0;
class kn extends ts {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: wm++ }), this.uuid = Cn(), this.name = "", this.type = "Material", this.blending = ws, this.side = zn, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = il, this.blendDst = sl, this.blendEquation = Wi, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new be(0, 0, 0), this.blendAlpha = 0, this.depthFunc = Us, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = xh, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = ss, this.stencilZFail = ss, this.stencilZPass = ss, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  // onBeforeRender and onBeforeCompile only supported in WebGLRenderer
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);
          continue;
        }
        const i = this[t];
        if (i === void 0) {
          console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
          continue;
        }
        i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[t] = n;
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = {
      textures: {},
      images: {}
    });
    const n = {
      metadata: {
        version: 4.6,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== ws && (n.blending = this.blending), this.side !== zn && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== il && (n.blendSrc = this.blendSrc), this.blendDst !== sl && (n.blendDst = this.blendDst), this.blendEquation !== Wi && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== Us && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== xh && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== ss && (n.stencilFail = this.stencilFail), this.stencilZFail !== ss && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== ss && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function i(r) {
      const a = [];
      for (const o in r) {
        const l = r[o];
        delete l.metadata, a.push(l);
      }
      return a;
    }
    if (t) {
      const r = i(e.textures), a = i(e.images);
      r.length > 0 && (n.textures = r), a.length > 0 && (n.images = a);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const i = t.length;
      n = new Array(i);
      for (let r = 0; r !== i; ++r)
        n[r] = t[r].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  onBuild() {
    console.warn("Material: onBuild() has been removed.");
  }
}
class Yi extends kn {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new be(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Hn(), this.combine = ud, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const xt = /* @__PURE__ */ new P(), Zr = /* @__PURE__ */ new Me();
class zt {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = zl, this.updateRanges = [], this.gpuType = Rn, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
  }
  copyAt(e, t, n) {
    e *= this.itemSize, n *= t.itemSize;
    for (let i = 0, r = this.itemSize; i < r; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        Zr.fromBufferAttribute(this, t), Zr.applyMatrix3(e), this.setXY(t, Zr.x, Zr.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        xt.fromBufferAttribute(this, t), xt.applyMatrix3(e), this.setXYZ(t, xt.x, xt.y, xt.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      xt.fromBufferAttribute(this, t), xt.applyMatrix4(e), this.setXYZ(t, xt.x, xt.y, xt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      xt.fromBufferAttribute(this, t), xt.applyNormalMatrix(e), this.setXYZ(t, xt.x, xt.y, xt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      xt.fromBufferAttribute(this, t), xt.transformDirection(e), this.setXYZ(t, xt.x, xt.y, xt.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = bn(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = Qe(n, this.array)), this.array[e * this.itemSize + t] = n, this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = bn(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = Qe(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = bn(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = Qe(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = bn(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = Qe(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = bn(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = Qe(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = Qe(t, this.array), n = Qe(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e *= this.itemSize, this.normalized && (t = Qe(t, this.array), n = Qe(n, this.array), i = Qe(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, r) {
    return e *= this.itemSize, this.normalized && (t = Qe(t, this.array), n = Qe(n, this.array), i = Qe(i, this.array), r = Qe(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = r, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (e.name = this.name), this.usage !== zl && (e.usage = this.usage), e;
  }
}
class Ld extends zt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class Dd extends zt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class yn extends zt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let Rm = 0;
const pn = /* @__PURE__ */ new Ie(), bo = /* @__PURE__ */ new ht(), ps = /* @__PURE__ */ new P(), sn = /* @__PURE__ */ new Wn(), ar = /* @__PURE__ */ new Wn(), bt = /* @__PURE__ */ new P();
class Ln extends ts {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Rm++ }), this.uuid = Cn(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (wd(e) ? Dd : Ld)(e, 1) : this.index = e, this;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({
      start: e,
      count: t,
      materialIndex: n
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const r = new Ue().getNormalMatrix(e);
      n.applyNormalMatrix(r), n.needsUpdate = !0;
    }
    const i = this.attributes.tangent;
    return i !== void 0 && (i.transformDirection(e), i.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return pn.makeRotationFromQuaternion(e), this.applyMatrix4(pn), this;
  }
  rotateX(e) {
    return pn.makeRotationX(e), this.applyMatrix4(pn), this;
  }
  rotateY(e) {
    return pn.makeRotationY(e), this.applyMatrix4(pn), this;
  }
  rotateZ(e) {
    return pn.makeRotationZ(e), this.applyMatrix4(pn), this;
  }
  translate(e, t, n) {
    return pn.makeTranslation(e, t, n), this.applyMatrix4(pn), this;
  }
  scale(e, t, n) {
    return pn.makeScale(e, t, n), this.applyMatrix4(pn), this;
  }
  lookAt(e) {
    return bo.lookAt(e), bo.updateMatrix(), this.applyMatrix4(bo.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(ps).negate(), this.translate(ps.x, ps.y, ps.z), this;
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, i = e.length; n < i; n++) {
      const r = e[n];
      t.push(r.x, r.y, r.z || 0);
    }
    return this.setAttribute("position", new yn(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Wn());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(
        new P(-1 / 0, -1 / 0, -1 / 0),
        new P(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let n = 0, i = t.length; n < i; n++) {
          const r = t[n];
          sn.setFromBufferAttribute(r), this.morphTargetsRelative ? (bt.addVectors(this.boundingBox.min, sn.min), this.boundingBox.expandByPoint(bt), bt.addVectors(this.boundingBox.max, sn.max), this.boundingBox.expandByPoint(bt)) : (this.boundingBox.expandByPoint(sn.min), this.boundingBox.expandByPoint(sn.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Pn());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new P(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (sn.setFromBufferAttribute(e), t)
        for (let r = 0, a = t.length; r < a; r++) {
          const o = t[r];
          ar.setFromBufferAttribute(o), this.morphTargetsRelative ? (bt.addVectors(sn.min, ar.min), sn.expandByPoint(bt), bt.addVectors(sn.max, ar.max), sn.expandByPoint(bt)) : (sn.expandByPoint(ar.min), sn.expandByPoint(ar.max));
        }
      sn.getCenter(n);
      let i = 0;
      for (let r = 0, a = e.count; r < a; r++)
        bt.fromBufferAttribute(e, r), i = Math.max(i, n.distanceToSquared(bt));
      if (t)
        for (let r = 0, a = t.length; r < a; r++) {
          const o = t[r], l = this.morphTargetsRelative;
          for (let c = 0, h = o.count; c < h; c++)
            bt.fromBufferAttribute(o, c), l && (ps.fromBufferAttribute(e, c), bt.add(ps)), i = Math.max(i, n.distanceToSquared(bt));
        }
      this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = t.position, i = t.normal, r = t.uv;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new zt(new Float32Array(4 * n.count), 4));
    const a = this.getAttribute("tangent"), o = [], l = [];
    for (let R = 0; R < n.count; R++)
      o[R] = new P(), l[R] = new P();
    const c = new P(), h = new P(), u = new P(), d = new Me(), p = new Me(), g = new Me(), _ = new P(), f = new P();
    function m(R, L, v) {
      c.fromBufferAttribute(n, R), h.fromBufferAttribute(n, L), u.fromBufferAttribute(n, v), d.fromBufferAttribute(r, R), p.fromBufferAttribute(r, L), g.fromBufferAttribute(r, v), h.sub(c), u.sub(c), p.sub(d), g.sub(d);
      const T = 1 / (p.x * g.y - g.x * p.y);
      isFinite(T) && (_.copy(h).multiplyScalar(g.y).addScaledVector(u, -p.y).multiplyScalar(T), f.copy(u).multiplyScalar(p.x).addScaledVector(h, -g.x).multiplyScalar(T), o[R].add(_), o[L].add(_), o[v].add(_), l[R].add(f), l[L].add(f), l[v].add(f));
    }
    let x = this.groups;
    x.length === 0 && (x = [{
      start: 0,
      count: e.count
    }]);
    for (let R = 0, L = x.length; R < L; ++R) {
      const v = x[R], T = v.start, F = v.count;
      for (let O = T, G = T + F; O < G; O += 3)
        m(
          e.getX(O + 0),
          e.getX(O + 1),
          e.getX(O + 2)
        );
    }
    const y = new P(), M = new P(), b = new P(), w = new P();
    function E(R) {
      b.fromBufferAttribute(i, R), w.copy(b);
      const L = o[R];
      y.copy(L), y.sub(b.multiplyScalar(b.dot(L))).normalize(), M.crossVectors(w, L);
      const T = M.dot(l[R]) < 0 ? -1 : 1;
      a.setXYZW(R, y.x, y.y, y.z, T);
    }
    for (let R = 0, L = x.length; R < L; ++R) {
      const v = x[R], T = v.start, F = v.count;
      for (let O = T, G = T + F; O < G; O += 3)
        E(e.getX(O + 0)), E(e.getX(O + 1)), E(e.getX(O + 2));
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new zt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let d = 0, p = n.count; d < p; d++)
          n.setXYZ(d, 0, 0, 0);
      const i = new P(), r = new P(), a = new P(), o = new P(), l = new P(), c = new P(), h = new P(), u = new P();
      if (e)
        for (let d = 0, p = e.count; d < p; d += 3) {
          const g = e.getX(d + 0), _ = e.getX(d + 1), f = e.getX(d + 2);
          i.fromBufferAttribute(t, g), r.fromBufferAttribute(t, _), a.fromBufferAttribute(t, f), h.subVectors(a, r), u.subVectors(i, r), h.cross(u), o.fromBufferAttribute(n, g), l.fromBufferAttribute(n, _), c.fromBufferAttribute(n, f), o.add(h), l.add(h), c.add(h), n.setXYZ(g, o.x, o.y, o.z), n.setXYZ(_, l.x, l.y, l.z), n.setXYZ(f, c.x, c.y, c.z);
        }
      else
        for (let d = 0, p = t.count; d < p; d += 3)
          i.fromBufferAttribute(t, d + 0), r.fromBufferAttribute(t, d + 1), a.fromBufferAttribute(t, d + 2), h.subVectors(a, r), u.subVectors(i, r), h.cross(u), n.setXYZ(d + 0, h.x, h.y, h.z), n.setXYZ(d + 1, h.x, h.y, h.z), n.setXYZ(d + 2, h.x, h.y, h.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      bt.fromBufferAttribute(e, t), bt.normalize(), e.setXYZ(t, bt.x, bt.y, bt.z);
  }
  toNonIndexed() {
    function e(o, l) {
      const c = o.array, h = o.itemSize, u = o.normalized, d = new c.constructor(l.length * h);
      let p = 0, g = 0;
      for (let _ = 0, f = l.length; _ < f; _++) {
        o.isInterleavedBufferAttribute ? p = l[_] * o.data.stride + o.offset : p = l[_] * h;
        for (let m = 0; m < h; m++)
          d[g++] = c[p++];
      }
      return new zt(d, h, u);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new Ln(), n = this.index.array, i = this.attributes;
    for (const o in i) {
      const l = i[o], c = e(l, n);
      t.setAttribute(o, c);
    }
    const r = this.morphAttributes;
    for (const o in r) {
      const l = [], c = r[o];
      for (let h = 0, u = c.length; h < u; h++) {
        const d = c[h], p = e(d, n);
        l.push(p);
      }
      t.morphAttributes[o] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, l = a.length; o < l; o++) {
      const c = a[o];
      t.addGroup(c.start, c.count, c.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const l = this.parameters;
      for (const c in l)
        l[c] !== void 0 && (e[c] = l[c]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = {
      type: t.array.constructor.name,
      array: Array.prototype.slice.call(t.array)
    });
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      e.data.attributes[l] = c.toJSON(e.data);
    }
    const i = {};
    let r = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l], h = [];
      for (let u = 0, d = c.length; u < d; u++) {
        const p = c[u];
        h.push(p.toJSON(e.data));
      }
      h.length > 0 && (i[l] = h, r = !0);
    }
    r && (e.data.morphAttributes = i, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return o !== null && (e.data.boundingSphere = {
      center: o.center.toArray(),
      radius: o.radius
    }), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const i = e.attributes;
    for (const c in i) {
      const h = i[c];
      this.setAttribute(c, h.clone(t));
    }
    const r = e.morphAttributes;
    for (const c in r) {
      const h = [], u = r[c];
      for (let d = 0, p = u.length; d < p; d++)
        h.push(u[d].clone(t));
      this.morphAttributes[c] = h;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let c = 0, h = a.length; c < h; c++) {
      const u = a[c];
      this.addGroup(u.start, u.count, u.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const l = e.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Nh = /* @__PURE__ */ new Ie(), Ui = /* @__PURE__ */ new $s(), $r = /* @__PURE__ */ new Pn(), Uh = /* @__PURE__ */ new P(), Jr = /* @__PURE__ */ new P(), Qr = /* @__PURE__ */ new P(), ea = /* @__PURE__ */ new P(), Ao = /* @__PURE__ */ new P(), ta = /* @__PURE__ */ new P(), Oh = /* @__PURE__ */ new P(), na = /* @__PURE__ */ new P();
class Xt extends ht {
  constructor(e = new Ln(), t = new Yi()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, a = i.length; r < a; r++) {
          const o = i[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = r;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry, i = n.attributes.position, r = n.morphAttributes.position, a = n.morphTargetsRelative;
    t.fromBufferAttribute(i, e);
    const o = this.morphTargetInfluences;
    if (r && o) {
      ta.set(0, 0, 0);
      for (let l = 0, c = r.length; l < c; l++) {
        const h = o[l], u = r[l];
        h !== 0 && (Ao.fromBufferAttribute(u, e), a ? ta.addScaledVector(Ao, h) : ta.addScaledVector(Ao.sub(t), h));
      }
      t.add(ta);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.material, r = this.matrixWorld;
    i !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), $r.copy(n.boundingSphere), $r.applyMatrix4(r), Ui.copy(e.ray).recast(e.near), !($r.containsPoint(Ui.origin) === !1 && (Ui.intersectSphere($r, Uh) === null || Ui.origin.distanceToSquared(Uh) > (e.far - e.near) ** 2)) && (Nh.copy(r).invert(), Ui.copy(e.ray).applyMatrix4(Nh), !(n.boundingBox !== null && Ui.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, Ui)));
  }
  _computeIntersections(e, t, n) {
    let i;
    const r = this.geometry, a = this.material, o = r.index, l = r.attributes.position, c = r.attributes.uv, h = r.attributes.uv1, u = r.attributes.normal, d = r.groups, p = r.drawRange;
    if (o !== null)
      if (Array.isArray(a))
        for (let g = 0, _ = d.length; g < _; g++) {
          const f = d[g], m = a[f.materialIndex], x = Math.max(f.start, p.start), y = Math.min(o.count, Math.min(f.start + f.count, p.start + p.count));
          for (let M = x, b = y; M < b; M += 3) {
            const w = o.getX(M), E = o.getX(M + 1), R = o.getX(M + 2);
            i = ia(this, m, e, n, c, h, u, w, E, R), i && (i.faceIndex = Math.floor(M / 3), i.face.materialIndex = f.materialIndex, t.push(i));
          }
        }
      else {
        const g = Math.max(0, p.start), _ = Math.min(o.count, p.start + p.count);
        for (let f = g, m = _; f < m; f += 3) {
          const x = o.getX(f), y = o.getX(f + 1), M = o.getX(f + 2);
          i = ia(this, a, e, n, c, h, u, x, y, M), i && (i.faceIndex = Math.floor(f / 3), t.push(i));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(a))
        for (let g = 0, _ = d.length; g < _; g++) {
          const f = d[g], m = a[f.materialIndex], x = Math.max(f.start, p.start), y = Math.min(l.count, Math.min(f.start + f.count, p.start + p.count));
          for (let M = x, b = y; M < b; M += 3) {
            const w = M, E = M + 1, R = M + 2;
            i = ia(this, m, e, n, c, h, u, w, E, R), i && (i.faceIndex = Math.floor(M / 3), i.face.materialIndex = f.materialIndex, t.push(i));
          }
        }
      else {
        const g = Math.max(0, p.start), _ = Math.min(l.count, p.start + p.count);
        for (let f = g, m = _; f < m; f += 3) {
          const x = f, y = f + 1, M = f + 2;
          i = ia(this, a, e, n, c, h, u, x, y, M), i && (i.faceIndex = Math.floor(f / 3), t.push(i));
        }
      }
  }
}
function Cm(s, e, t, n, i, r, a, o) {
  let l;
  if (e.side === Yt ? l = n.intersectTriangle(a, r, i, !0, o) : l = n.intersectTriangle(i, r, a, e.side === zn, o), l === null) return null;
  na.copy(o), na.applyMatrix4(s.matrixWorld);
  const c = t.ray.origin.distanceTo(na);
  return c < t.near || c > t.far ? null : {
    distance: c,
    point: na.clone(),
    object: s
  };
}
function ia(s, e, t, n, i, r, a, o, l, c) {
  s.getVertexPosition(o, Jr), s.getVertexPosition(l, Qr), s.getVertexPosition(c, ea);
  const h = Cm(s, e, t, n, Jr, Qr, ea, Oh);
  if (h) {
    const u = new P();
    An.getBarycoord(Oh, Jr, Qr, ea, u), i && (h.uv = An.getInterpolatedAttribute(i, o, l, c, u, new Me())), r && (h.uv1 = An.getInterpolatedAttribute(r, o, l, c, u, new Me())), a && (h.normal = An.getInterpolatedAttribute(a, o, l, c, u, new P()), h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1));
    const d = {
      a: o,
      b: l,
      c,
      normal: new P(),
      materialIndex: 0
    };
    An.getNormal(Jr, Qr, ea, d.normal), h.face = d, h.barycoord = u;
  }
  return h;
}
class Fr extends Ln {
  constructor(e = 1, t = 1, n = 1, i = 1, r = 1, a = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: e,
      height: t,
      depth: n,
      widthSegments: i,
      heightSegments: r,
      depthSegments: a
    };
    const o = this;
    i = Math.floor(i), r = Math.floor(r), a = Math.floor(a);
    const l = [], c = [], h = [], u = [];
    let d = 0, p = 0;
    g("z", "y", "x", -1, -1, n, t, e, a, r, 0), g("z", "y", "x", 1, -1, n, t, -e, a, r, 1), g("x", "z", "y", 1, 1, e, n, t, i, a, 2), g("x", "z", "y", 1, -1, e, n, -t, i, a, 3), g("x", "y", "z", 1, -1, e, t, n, i, r, 4), g("x", "y", "z", -1, -1, e, t, -n, i, r, 5), this.setIndex(l), this.setAttribute("position", new yn(c, 3)), this.setAttribute("normal", new yn(h, 3)), this.setAttribute("uv", new yn(u, 2));
    function g(_, f, m, x, y, M, b, w, E, R, L) {
      const v = M / E, T = b / R, F = M / 2, O = b / 2, G = w / 2, q = E + 1, z = R + 1;
      let X = 0, H = 0;
      const te = new P();
      for (let se = 0; se < z; se++) {
        const ce = se * T - O;
        for (let Oe = 0; Oe < q; Oe++) {
          const We = Oe * v - F;
          te[_] = We * x, te[f] = ce * y, te[m] = G, c.push(te.x, te.y, te.z), te[_] = 0, te[f] = 0, te[m] = w > 0 ? 1 : -1, h.push(te.x, te.y, te.z), u.push(Oe / E), u.push(1 - se / R), X += 1;
        }
      }
      for (let se = 0; se < R; se++)
        for (let ce = 0; ce < E; ce++) {
          const Oe = d + ce + q * se, We = d + ce + q * (se + 1), Y = d + (ce + 1) + q * (se + 1), $ = d + (ce + 1) + q * se;
          l.push(Oe, We, $), l.push(We, Y, $), H += 6;
        }
      o.addGroup(p, H, L), p += H, d += X;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Fr(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function Hs(s) {
  const e = {};
  for (const t in s) {
    e[t] = {};
    for (const n in s[t]) {
      const i = s[t][n];
      i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? i.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = i.clone() : Array.isArray(i) ? e[t][n] = i.slice() : e[t][n] = i;
    }
  }
  return e;
}
function Ft(s) {
  const e = {};
  for (let t = 0; t < s.length; t++) {
    const n = Hs(s[t]);
    for (const i in n)
      e[i] = n[i];
  }
  return e;
}
function Pm(s) {
  const e = [];
  for (let t = 0; t < s.length; t++)
    e.push(s[t].clone());
  return e;
}
function Id(s) {
  const e = s.getRenderTarget();
  return e === null ? s.outputColorSpace : e.isXRRenderTarget === !0 ? e.texture.colorSpace : qe.workingColorSpace;
}
const Lm = { clone: Hs, merge: Ft };
var Dm = `void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Im = `void main() {
  gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class wi extends kn {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Dm, this.fragmentShader = Im, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
      clipCullDistance: !1,
      // set to use vertex shader clipping
      multiDraw: !1
      // set to use vertex shader multi_draw / enable gl_DrawID
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv1: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Hs(e.uniforms), this.uniformsGroups = Pm(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const i in this.uniforms) {
      const a = this.uniforms[i].value;
      a && a.isTexture ? t.uniforms[i] = {
        type: "t",
        value: a.toJSON(e).uuid
      } : a && a.isColor ? t.uniforms[i] = {
        type: "c",
        value: a.getHex()
      } : a && a.isVector2 ? t.uniforms[i] = {
        type: "v2",
        value: a.toArray()
      } : a && a.isVector3 ? t.uniforms[i] = {
        type: "v3",
        value: a.toArray()
      } : a && a.isVector4 ? t.uniforms[i] = {
        type: "v4",
        value: a.toArray()
      } : a && a.isMatrix3 ? t.uniforms[i] = {
        type: "m3",
        value: a.toArray()
      } : a && a.isMatrix4 ? t.uniforms[i] = {
        type: "m4",
        value: a.toArray()
      } : t.uniforms[i] = {
        value: a
      };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
    const n = {};
    for (const i in this.extensions)
      this.extensions[i] === !0 && (n[i] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class Nd extends ht {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new Ie(), this.projectionMatrix = new Ie(), this.projectionMatrixInverse = new Ie(), this.coordinateSystem = si;
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const pi = /* @__PURE__ */ new P(), Fh = /* @__PURE__ */ new Me(), Bh = /* @__PURE__ */ new Me();
class Bt extends Nd {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  /**
   * Sets the FOV by focal length in respect to the current .filmGauge.
   *
   * The default film gauge is 35, so that the focal length can be specified for
   * a 35mm (full frame) camera.
   *
   * Values for focal length and film gauge must have the same unit.
   */
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = Vs * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  /**
   * Calculates the focal length from the current .fov and .filmGauge.
   */
  getFocalLength() {
    const e = Math.tan(vr * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return Vs * 2 * Math.atan(
      Math.tan(vr * 0.5 * this.fov) / this.zoom
    );
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  /**
   * Computes the 2D bounds of the camera's viewable rectangle at a given distance along the viewing direction.
   * Sets minTarget and maxTarget to the coordinates of the lower-left and upper-right corners of the view rectangle.
   */
  getViewBounds(e, t, n) {
    pi.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(pi.x, pi.y).multiplyScalar(-e / pi.z), pi.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(pi.x, pi.y).multiplyScalar(-e / pi.z);
  }
  /**
   * Computes the width and height of the camera's viewable rectangle at a given distance along the viewing direction.
   * Copies the result into the target Vector2, where x is width and y is height.
   */
  getViewSize(e, t) {
    return this.getViewBounds(e, Fh, Bh), t.subVectors(Bh, Fh);
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
   * the monitors are in grid like this
   *
   *   +---+---+---+
   *   | A | B | C |
   *   +---+---+---+
   *   | D | E | F |
   *   +---+---+---+
   *
   * then for each monitor you would call it like this
   *
   *   const w = 1920;
   *   const h = 1080;
   *   const fullWidth = w * 3;
   *   const fullHeight = h * 2;
   *
   *   --A--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
   *   --B--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
   *   --C--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
   *   --D--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
   *   --E--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
   *   --F--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
   *
   *   Note there is no reason monitors have to be the same size or in a grid.
   */
  setViewOffset(e, t, n, i, r, a) {
    this.aspect = e / t, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(vr * 0.5 * this.fov) / this.zoom, n = 2 * t, i = this.aspect * n, r = -0.5 * i;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = a.fullWidth, c = a.fullHeight;
      r += a.offsetX * i / l, t -= a.offsetY * n / c, i *= a.width / l, n *= a.height / c;
    }
    const o = this.filmOffset;
    o !== 0 && (r += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, t, t - n, e, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const ms = -90, _s = 1;
class Nm extends ht {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const i = new Bt(ms, _s, e, t);
    i.layers = this.layers, this.add(i);
    const r = new Bt(ms, _s, e, t);
    r.layers = this.layers, this.add(r);
    const a = new Bt(ms, _s, e, t);
    a.layers = this.layers, this.add(a);
    const o = new Bt(ms, _s, e, t);
    o.layers = this.layers, this.add(o);
    const l = new Bt(ms, _s, e, t);
    l.layers = this.layers, this.add(l);
    const c = new Bt(ms, _s, e, t);
    c.layers = this.layers, this.add(c);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [n, i, r, a, o, l] = t;
    for (const c of t) this.remove(c);
    if (e === si)
      n.up.set(0, 1, 0), n.lookAt(1, 0, 0), i.up.set(0, 1, 0), i.lookAt(-1, 0, 0), r.up.set(0, 0, -1), r.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1);
    else if (e === Fa)
      n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), i.up.set(0, -1, 0), i.lookAt(1, 0, 0), r.up.set(0, 0, 1), r.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1);
    else
      throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const c of t)
      this.add(c), c.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: i } = this;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [r, a, o, l, c, h] = this.children, u = e.getRenderTarget(), d = e.getActiveCubeFace(), p = e.getActiveMipmapLevel(), g = e.xr.enabled;
    e.xr.enabled = !1;
    const _ = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0, i), e.render(t, r), e.setRenderTarget(n, 1, i), e.render(t, a), e.setRenderTarget(n, 2, i), e.render(t, o), e.setRenderTarget(n, 3, i), e.render(t, l), e.setRenderTarget(n, 4, i), e.render(t, c), n.texture.generateMipmaps = _, e.setRenderTarget(n, 5, i), e.render(t, h), e.setRenderTarget(u, d, p), e.xr.enabled = g, n.texture.needsPMREMUpdate = !0;
  }
}
class Ud extends St {
  constructor(e, t, n, i, r, a, o, l, c, h) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : Os, super(e, t, n, i, r, a, o, l, c, h), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Um extends es {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, i = [n, n, n, n, n, n];
    this.texture = new Ud(i, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : an;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const n = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: (
        /* glsl */
        `

        varying vec3 vWorldDirection;

        vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

          return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

        }

        void main() {

          vWorldDirection = transformDirection( position, modelMatrix );

          #include <begin_vertex>
          #include <project_vertex>

        }
      `
      ),
      fragmentShader: (
        /* glsl */
        `

        uniform sampler2D tEquirect;

        varying vec3 vWorldDirection;

        #include <common>

        void main() {

          vec3 direction = normalize( vWorldDirection );

          vec2 sampleUV = equirectUv( direction );

          gl_FragColor = texture2D( tEquirect, sampleUV );

        }
      `
      )
    }, i = new Fr(5, 5, 5), r = new wi({
      name: "CubemapFromEquirect",
      uniforms: Hs(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: Yt,
      blending: Ei
    });
    r.uniforms.tEquirect.value = t;
    const a = new Xt(i, r), o = t.minFilter;
    return t.minFilter === ii && (t.minFilter = an), new Nm(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
  }
  clear(e, t, n, i) {
    const r = e.getRenderTarget();
    for (let a = 0; a < 6; a++)
      e.setRenderTarget(this, a), e.clear(t, n, i);
    e.setRenderTarget(r);
  }
}
const wo = /* @__PURE__ */ new P(), Om = /* @__PURE__ */ new P(), Fm = /* @__PURE__ */ new Ue();
class _i {
  constructor(e = new P(1, 0, 0), t = 0) {
    this.isPlane = !0, this.normal = e, this.constant = t;
  }
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  setComponents(e, t, n, i) {
    return this.normal.set(e, t, n), this.constant = i, this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const i = wo.subVectors(n, t).cross(Om.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const n = e.delta(wo), i = this.normal.dot(n);
    if (i === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const r = -(e.start.dot(this.normal) + this.constant) / i;
    return r < 0 || r > 1 ? null : t.copy(e.start).addScaledVector(n, r);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || Fm.getNormalMatrix(e), i = this.coplanarPoint(wo).applyMatrix4(e), r = this.normal.applyMatrix3(n).normalize();
    return this.constant = -i.dot(r), this;
  }
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Oi = /* @__PURE__ */ new Pn(), sa = /* @__PURE__ */ new P();
class Ec {
  constructor(e = new _i(), t = new _i(), n = new _i(), i = new _i(), r = new _i(), a = new _i()) {
    this.planes = [e, t, n, i, r, a];
  }
  set(e, t, n, i, r, a) {
    const o = this.planes;
    return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(i), o[4].copy(r), o[5].copy(a), this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = si) {
    const n = this.planes, i = e.elements, r = i[0], a = i[1], o = i[2], l = i[3], c = i[4], h = i[5], u = i[6], d = i[7], p = i[8], g = i[9], _ = i[10], f = i[11], m = i[12], x = i[13], y = i[14], M = i[15];
    if (n[0].setComponents(l - r, d - c, f - p, M - m).normalize(), n[1].setComponents(l + r, d + c, f + p, M + m).normalize(), n[2].setComponents(l + a, d + h, f + g, M + x).normalize(), n[3].setComponents(l - a, d - h, f - g, M - x).normalize(), n[4].setComponents(l - o, d - u, f - _, M - y).normalize(), t === si)
      n[5].setComponents(l + o, d + u, f + _, M + y).normalize();
    else if (t === Fa)
      n[5].setComponents(o, u, _, y).normalize();
    else
      throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(), Oi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), Oi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(Oi);
  }
  intersectsSprite(e) {
    return Oi.center.set(0, 0, 0), Oi.radius = 0.7071067811865476, Oi.applyMatrix4(e.matrixWorld), this.intersectsSphere(Oi);
  }
  intersectsSphere(e) {
    const t = this.planes, n = e.center, i = -e.radius;
    for (let r = 0; r < 6; r++)
      if (t[r].distanceToPoint(n) < i)
        return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = t[n];
      if (sa.x = i.normal.x > 0 ? e.max.x : e.min.x, sa.y = i.normal.y > 0 ? e.max.y : e.min.y, sa.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(sa) < 0)
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      if (t[n].distanceToPoint(e) < 0)
        return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function Od() {
  let s = null, e = !1, t = null, n = null;
  function i(r, a) {
    t(r, a), n = s.requestAnimationFrame(i);
  }
  return {
    start: function() {
      e !== !0 && t !== null && (n = s.requestAnimationFrame(i), e = !0);
    },
    stop: function() {
      s.cancelAnimationFrame(n), e = !1;
    },
    setAnimationLoop: function(r) {
      t = r;
    },
    setContext: function(r) {
      s = r;
    }
  };
}
function Bm(s) {
  const e = /* @__PURE__ */ new WeakMap();
  function t(o, l) {
    const c = o.array, h = o.usage, u = c.byteLength, d = s.createBuffer();
    s.bindBuffer(l, d), s.bufferData(l, c, h), o.onUploadCallback();
    let p;
    if (c instanceof Float32Array)
      p = s.FLOAT;
    else if (c instanceof Uint16Array)
      o.isFloat16BufferAttribute ? p = s.HALF_FLOAT : p = s.UNSIGNED_SHORT;
    else if (c instanceof Int16Array)
      p = s.SHORT;
    else if (c instanceof Uint32Array)
      p = s.UNSIGNED_INT;
    else if (c instanceof Int32Array)
      p = s.INT;
    else if (c instanceof Int8Array)
      p = s.BYTE;
    else if (c instanceof Uint8Array)
      p = s.UNSIGNED_BYTE;
    else if (c instanceof Uint8ClampedArray)
      p = s.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + c);
    return {
      buffer: d,
      type: p,
      bytesPerElement: c.BYTES_PER_ELEMENT,
      version: o.version,
      size: u
    };
  }
  function n(o, l, c) {
    const h = l.array, u = l.updateRanges;
    if (s.bindBuffer(c, o), u.length === 0)
      s.bufferSubData(c, 0, h);
    else {
      u.sort((p, g) => p.start - g.start);
      let d = 0;
      for (let p = 1; p < u.length; p++) {
        const g = u[d], _ = u[p];
        _.start <= g.start + g.count + 1 ? g.count = Math.max(
          g.count,
          _.start + _.count - g.start
        ) : (++d, u[d] = _);
      }
      u.length = d + 1;
      for (let p = 0, g = u.length; p < g; p++) {
        const _ = u[p];
        s.bufferSubData(
          c,
          _.start * h.BYTES_PER_ELEMENT,
          h,
          _.start,
          _.count
        );
      }
      l.clearUpdateRanges();
    }
    l.onUploadCallback();
  }
  function i(o) {
    return o.isInterleavedBufferAttribute && (o = o.data), e.get(o);
  }
  function r(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    const l = e.get(o);
    l && (s.deleteBuffer(l.buffer), e.delete(o));
  }
  function a(o, l) {
    if (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute) {
      const h = e.get(o);
      (!h || h.version < o.version) && e.set(o, {
        buffer: o.buffer,
        type: o.type,
        bytesPerElement: o.elementSize,
        version: o.version
      });
      return;
    }
    const c = e.get(o);
    if (c === void 0)
      e.set(o, t(o, l));
    else if (c.version < o.version) {
      if (c.size !== o.array.byteLength)
        throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      n(c.buffer, o, l), c.version = o.version;
    }
  }
  return {
    get: i,
    remove: r,
    update: a
  };
}
class Ka extends Ln {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: i
    };
    const r = e / 2, a = t / 2, o = Math.floor(n), l = Math.floor(i), c = o + 1, h = l + 1, u = e / o, d = t / l, p = [], g = [], _ = [], f = [];
    for (let m = 0; m < h; m++) {
      const x = m * d - a;
      for (let y = 0; y < c; y++) {
        const M = y * u - r;
        g.push(M, -x, 0), _.push(0, 0, 1), f.push(y / o), f.push(1 - m / l);
      }
    }
    for (let m = 0; m < l; m++)
      for (let x = 0; x < o; x++) {
        const y = x + c * m, M = x + c * (m + 1), b = x + 1 + c * (m + 1), w = x + 1 + c * m;
        p.push(y, M, w), p.push(M, b, w);
      }
    this.setIndex(p), this.setAttribute("position", new yn(g, 3)), this.setAttribute("normal", new yn(_, 3)), this.setAttribute("uv", new yn(f, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Ka(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var km = `#ifdef USE_ALPHAHASH
  if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, zm = `#ifdef USE_ALPHAHASH
  const float ALPHA_HASH_SCALE = 0.05;
  float hash2D( vec2 value ) {
    return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
  }
  float hash3D( vec3 value ) {
    return hash2D( vec2( hash2D( value.xy ), value.z ) );
  }
  float getAlphaHashThreshold( vec3 position ) {
    float maxDeriv = max(
      length( dFdx( position.xyz ) ),
      length( dFdy( position.xyz ) )
    );
    float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
    vec2 pixScales = vec2(
      exp2( floor( log2( pixScale ) ) ),
      exp2( ceil( log2( pixScale ) ) )
    );
    vec2 alpha = vec2(
      hash3D( floor( pixScales.x * position.xyz ) ),
      hash3D( floor( pixScales.y * position.xyz ) )
    );
    float lerpFactor = fract( log2( pixScale ) );
    float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
    float a = min( lerpFactor, 1.0 - lerpFactor );
    vec3 cases = vec3(
      x * x / ( 2.0 * a * ( 1.0 - a ) ),
      ( x - 0.5 * a ) / ( 1.0 - a ),
      1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
    );
    float threshold = ( x < ( 1.0 - a ) )
      ? ( ( x < a ) ? cases.x : cases.y )
      : cases.z;
    return clamp( threshold , 1.0e-6, 1.0 );
  }
#endif`, Vm = `#ifdef USE_ALPHAMAP
  diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, Hm = `#ifdef USE_ALPHAMAP
  uniform sampler2D alphaMap;
#endif`, Gm = `#ifdef USE_ALPHATEST
  #ifdef ALPHA_TO_COVERAGE
  diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
  if ( diffuseColor.a == 0.0 ) discard;
  #else
  if ( diffuseColor.a < alphaTest ) discard;
  #endif
#endif`, Wm = `#ifdef USE_ALPHATEST
  uniform float alphaTest;
#endif`, Xm = `#ifdef USE_AOMAP
  float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
  reflectedLight.indirectDiffuse *= ambientOcclusion;
  #if defined( USE_CLEARCOAT )
    clearcoatSpecularIndirect *= ambientOcclusion;
  #endif
  #if defined( USE_SHEEN )
    sheenSpecularIndirect *= ambientOcclusion;
  #endif
  #if defined( USE_ENVMAP ) && defined( STANDARD )
    float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
    reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
  #endif
#endif`, Ym = `#ifdef USE_AOMAP
  uniform sampler2D aoMap;
  uniform float aoMapIntensity;
#endif`, qm = `#ifdef USE_BATCHING
  #if ! defined( GL_ANGLE_multi_draw )
  #define gl_DrawID _gl_DrawID
  uniform int _gl_DrawID;
  #endif
  uniform highp sampler2D batchingTexture;
  uniform highp usampler2D batchingIdTexture;
  mat4 getBatchingMatrix( const in float i ) {
    int size = textureSize( batchingTexture, 0 ).x;
    int j = int( i ) * 4;
    int x = j % size;
    int y = j / size;
    vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
    vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
    vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
    vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
    return mat4( v1, v2, v3, v4 );
  }
  float getIndirectIndex( const in int i ) {
    int size = textureSize( batchingIdTexture, 0 ).x;
    int x = i % size;
    int y = i / size;
    return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
  }
#endif
#ifdef USE_BATCHING_COLOR
  uniform sampler2D batchingColorTexture;
  vec3 getBatchingColor( const in float i ) {
    int size = textureSize( batchingColorTexture, 0 ).x;
    int j = int( i );
    int x = j % size;
    int y = j / size;
    return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
  }
#endif`, jm = `#ifdef USE_BATCHING
  mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, Km = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
  vPosition = vec3( position );
#endif`, Zm = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
  vec3 objectTangent = vec3( tangent.xyz );
#endif`, $m = `float G_BlinnPhong_Implicit( ) {
  return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
  return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
  vec3 halfDir = normalize( lightDir + viewDir );
  float dotNH = saturate( dot( normal, halfDir ) );
  float dotVH = saturate( dot( viewDir, halfDir ) );
  vec3 F = F_Schlick( specularColor, 1.0, dotVH );
  float G = G_BlinnPhong_Implicit( );
  float D = D_BlinnPhong( shininess, dotNH );
  return F * ( G * D );
} // validated`, Jm = `#ifdef USE_IRIDESCENCE
  const mat3 XYZ_TO_REC709 = mat3(
     3.2404542, -0.9692660,  0.0556434,
    -1.5371385,  1.8760108, -0.2040259,
    -0.4985314,  0.0415560,  1.0572252
  );
  vec3 Fresnel0ToIor( vec3 fresnel0 ) {
    vec3 sqrtF0 = sqrt( fresnel0 );
    return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
  }
  vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
    return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
  }
  float IorToFresnel0( float transmittedIor, float incidentIor ) {
    return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
  }
  vec3 evalSensitivity( float OPD, vec3 shift ) {
    float phase = 2.0 * PI * OPD * 1.0e-9;
    vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
    vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
    vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
    vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
    xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
    xyz /= 1.0685e-7;
    vec3 rgb = XYZ_TO_REC709 * xyz;
    return rgb;
  }
  vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
    vec3 I;
    float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
    float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
    float cosTheta2Sq = 1.0 - sinTheta2Sq;
    if ( cosTheta2Sq < 0.0 ) {
      return vec3( 1.0 );
    }
    float cosTheta2 = sqrt( cosTheta2Sq );
    float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
    float R12 = F_Schlick( R0, 1.0, cosTheta1 );
    float T121 = 1.0 - R12;
    float phi12 = 0.0;
    if ( iridescenceIOR < outsideIOR ) phi12 = PI;
    float phi21 = PI - phi12;
    vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
    vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
    vec3 phi23 = vec3( 0.0 );
    if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
    if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
    if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
    float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
    vec3 phi = vec3( phi21 ) + phi23;
    vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
    vec3 r123 = sqrt( R123 );
    vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
    vec3 C0 = R12 + Rs;
    I = C0;
    vec3 Cm = Rs - T121;
    for ( int m = 1; m <= 2; ++ m ) {
      Cm *= r123;
      vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
      I += Cm * Sm;
    }
    return max( I, vec3( 0.0 ) );
  }
#endif`, Qm = `#ifdef USE_BUMPMAP
  uniform sampler2D bumpMap;
  uniform float bumpScale;
  vec2 dHdxy_fwd() {
    vec2 dSTdx = dFdx( vBumpMapUv );
    vec2 dSTdy = dFdy( vBumpMapUv );
    float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
    float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
    float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
    return vec2( dBx, dBy );
  }
  vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
    vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
    vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
    vec3 vN = surf_norm;
    vec3 R1 = cross( vSigmaY, vN );
    vec3 R2 = cross( vN, vSigmaX );
    float fDet = dot( vSigmaX, R1 ) * faceDirection;
    vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
    return normalize( abs( fDet ) * surf_norm - vGrad );
  }
#endif`, e_ = `#if NUM_CLIPPING_PLANES > 0
  vec4 plane;
  #ifdef ALPHA_TO_COVERAGE
    float distanceToPlane, distanceGradient;
    float clipOpacity = 1.0;
    #pragma unroll_loop_start
    for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
      plane = clippingPlanes[ i ];
      distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
      distanceGradient = fwidth( distanceToPlane ) / 2.0;
      clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
      if ( clipOpacity == 0.0 ) discard;
    }
    #pragma unroll_loop_end
    #if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
      float unionClipOpacity = 1.0;
      #pragma unroll_loop_start
      for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
        plane = clippingPlanes[ i ];
        distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
        distanceGradient = fwidth( distanceToPlane ) / 2.0;
        unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
      }
      #pragma unroll_loop_end
      clipOpacity *= 1.0 - unionClipOpacity;
    #endif
    diffuseColor.a *= clipOpacity;
    if ( diffuseColor.a == 0.0 ) discard;
  #else
    #pragma unroll_loop_start
    for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
      plane = clippingPlanes[ i ];
      if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
    }
    #pragma unroll_loop_end
    #if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
      bool clipped = true;
      #pragma unroll_loop_start
      for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
        plane = clippingPlanes[ i ];
        clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
      }
      #pragma unroll_loop_end
      if ( clipped ) discard;
    #endif
  #endif
#endif`, t_ = `#if NUM_CLIPPING_PLANES > 0
  varying vec3 vClipPosition;
  uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, n_ = `#if NUM_CLIPPING_PLANES > 0
  varying vec3 vClipPosition;
#endif`, i_ = `#if NUM_CLIPPING_PLANES > 0
  vClipPosition = - mvPosition.xyz;
#endif`, s_ = `#if defined( USE_COLOR_ALPHA )
  diffuseColor *= vColor;
#elif defined( USE_COLOR )
  diffuseColor.rgb *= vColor;
#endif`, r_ = `#if defined( USE_COLOR_ALPHA )
  varying vec4 vColor;
#elif defined( USE_COLOR )
  varying vec3 vColor;
#endif`, a_ = `#if defined( USE_COLOR_ALPHA )
  varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
  varying vec3 vColor;
#endif`, o_ = `#if defined( USE_COLOR_ALPHA )
  vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
  vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
  vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
  vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
  vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
  vColor.xyz *= batchingColor.xyz;
#endif`, l_ = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
  const highp float a = 12.9898, b = 78.233, c = 43758.5453;
  highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
  return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
  float precisionSafeLength( vec3 v ) { return length( v ); }
#else
  float precisionSafeLength( vec3 v ) {
    float maxComponent = max3( abs( v ) );
    return length( v / maxComponent ) * maxComponent;
  }
#endif
struct IncidentLight {
  vec3 color;
  vec3 direction;
  bool visible;
};
struct ReflectedLight {
  vec3 directDiffuse;
  vec3 directSpecular;
  vec3 indirectDiffuse;
  vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
  varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
  return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
  return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
  mat3 tmp;
  tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
  tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
  tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
  return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
  return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
  float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
  float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
  return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
  return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
  float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
  return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
  float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
  return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, c_ = `#ifdef ENVMAP_TYPE_CUBE_UV
  #define cubeUV_minMipLevel 4.0
  #define cubeUV_minTileSize 16.0
  float getFace( vec3 direction ) {
    vec3 absDirection = abs( direction );
    float face = - 1.0;
    if ( absDirection.x > absDirection.z ) {
      if ( absDirection.x > absDirection.y )
        face = direction.x > 0.0 ? 0.0 : 3.0;
      else
        face = direction.y > 0.0 ? 1.0 : 4.0;
    } else {
      if ( absDirection.z > absDirection.y )
        face = direction.z > 0.0 ? 2.0 : 5.0;
      else
        face = direction.y > 0.0 ? 1.0 : 4.0;
    }
    return face;
  }
  vec2 getUV( vec3 direction, float face ) {
    vec2 uv;
    if ( face == 0.0 ) {
      uv = vec2( direction.z, direction.y ) / abs( direction.x );
    } else if ( face == 1.0 ) {
      uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
    } else if ( face == 2.0 ) {
      uv = vec2( - direction.x, direction.y ) / abs( direction.z );
    } else if ( face == 3.0 ) {
      uv = vec2( - direction.z, direction.y ) / abs( direction.x );
    } else if ( face == 4.0 ) {
      uv = vec2( - direction.x, direction.z ) / abs( direction.y );
    } else {
      uv = vec2( direction.x, direction.y ) / abs( direction.z );
    }
    return 0.5 * ( uv + 1.0 );
  }
  vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
    float face = getFace( direction );
    float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
    mipInt = max( mipInt, cubeUV_minMipLevel );
    float faceSize = exp2( mipInt );
    highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
    if ( face > 2.0 ) {
      uv.y += faceSize;
      face -= 3.0;
    }
    uv.x += face * faceSize;
    uv.x += filterInt * 3.0 * cubeUV_minTileSize;
    uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
    uv.x *= CUBEUV_TEXEL_WIDTH;
    uv.y *= CUBEUV_TEXEL_HEIGHT;
    #ifdef texture2DGradEXT
      return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
    #else
      return texture2D( envMap, uv ).rgb;
    #endif
  }
  #define cubeUV_r0 1.0
  #define cubeUV_m0 - 2.0
  #define cubeUV_r1 0.8
  #define cubeUV_m1 - 1.0
  #define cubeUV_r4 0.4
  #define cubeUV_m4 2.0
  #define cubeUV_r5 0.305
  #define cubeUV_m5 3.0
  #define cubeUV_r6 0.21
  #define cubeUV_m6 4.0
  float roughnessToMip( float roughness ) {
    float mip = 0.0;
    if ( roughness >= cubeUV_r1 ) {
      mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
    } else if ( roughness >= cubeUV_r4 ) {
      mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
    } else if ( roughness >= cubeUV_r5 ) {
      mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
    } else if ( roughness >= cubeUV_r6 ) {
      mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
    } else {
      mip = - 2.0 * log2( 1.16 * roughness );		}
    return mip;
  }
  vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
    float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
    float mipF = fract( mip );
    float mipInt = floor( mip );
    vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
    if ( mipF == 0.0 ) {
      return vec4( color0, 1.0 );
    } else {
      vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
      return vec4( mix( color0, color1, mipF ), 1.0 );
    }
  }
#endif`, h_ = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
  vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
  mat3 bm = mat3( batchingMatrix );
  transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
  transformedNormal = bm * transformedNormal;
  #ifdef USE_TANGENT
    transformedTangent = bm * transformedTangent;
  #endif
#endif
#ifdef USE_INSTANCING
  mat3 im = mat3( instanceMatrix );
  transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
  transformedNormal = im * transformedNormal;
  #ifdef USE_TANGENT
    transformedTangent = im * transformedTangent;
  #endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
  transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
  transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
  #ifdef FLIP_SIDED
    transformedTangent = - transformedTangent;
  #endif
#endif`, u_ = `#ifdef USE_DISPLACEMENTMAP
  uniform sampler2D displacementMap;
  uniform float displacementScale;
  uniform float displacementBias;
#endif`, d_ = `#ifdef USE_DISPLACEMENTMAP
  transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, f_ = `#ifdef USE_EMISSIVEMAP
  vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
  totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, p_ = `#ifdef USE_EMISSIVEMAP
  uniform sampler2D emissiveMap;
#endif`, m_ = "gl_FragColor = linearToOutputTexel( gl_FragColor );", __ = `
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
  vec3( 0.8224621, 0.177538, 0.0 ),
  vec3( 0.0331941, 0.9668058, 0.0 ),
  vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
  vec3( 1.2249401, - 0.2249404, 0.0 ),
  vec3( - 0.0420569, 1.0420571, 0.0 ),
  vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
  return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
  return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
  return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
  return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, g_ = `#ifdef USE_ENVMAP
  #ifdef ENV_WORLDPOS
    vec3 cameraToFrag;
    if ( isOrthographic ) {
      cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
    } else {
      cameraToFrag = normalize( vWorldPosition - cameraPosition );
    }
    vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
    #ifdef ENVMAP_MODE_REFLECTION
      vec3 reflectVec = reflect( cameraToFrag, worldNormal );
    #else
      vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
    #endif
  #else
    vec3 reflectVec = vReflect;
  #endif
  #ifdef ENVMAP_TYPE_CUBE
    vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
  #else
    vec4 envColor = vec4( 0.0 );
  #endif
  #ifdef ENVMAP_BLENDING_MULTIPLY
    outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
  #elif defined( ENVMAP_BLENDING_MIX )
    outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
  #elif defined( ENVMAP_BLENDING_ADD )
    outgoingLight += envColor.xyz * specularStrength * reflectivity;
  #endif
#endif`, v_ = `#ifdef USE_ENVMAP
  uniform float envMapIntensity;
  uniform float flipEnvMap;
  uniform mat3 envMapRotation;
  #ifdef ENVMAP_TYPE_CUBE
    uniform samplerCube envMap;
  #else
    uniform sampler2D envMap;
  #endif

#endif`, x_ = `#ifdef USE_ENVMAP
  uniform float reflectivity;
  #if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
    #define ENV_WORLDPOS
  #endif
  #ifdef ENV_WORLDPOS
    varying vec3 vWorldPosition;
    uniform float refractionRatio;
  #else
    varying vec3 vReflect;
  #endif
#endif`, y_ = `#ifdef USE_ENVMAP
  #if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
    #define ENV_WORLDPOS
  #endif
  #ifdef ENV_WORLDPOS

    varying vec3 vWorldPosition;
  #else
    varying vec3 vReflect;
    uniform float refractionRatio;
  #endif
#endif`, M_ = `#ifdef USE_ENVMAP
  #ifdef ENV_WORLDPOS
    vWorldPosition = worldPosition.xyz;
  #else
    vec3 cameraToVertex;
    if ( isOrthographic ) {
      cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
    } else {
      cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
    }
    vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
    #ifdef ENVMAP_MODE_REFLECTION
      vReflect = reflect( cameraToVertex, worldNormal );
    #else
      vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
    #endif
  #endif
#endif`, S_ = `#ifdef USE_FOG
  vFogDepth = - mvPosition.z;
#endif`, E_ = `#ifdef USE_FOG
  varying float vFogDepth;
#endif`, T_ = `#ifdef USE_FOG
  #ifdef FOG_EXP2
    float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
  #else
    float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
  #endif
  gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, b_ = `#ifdef USE_FOG
  uniform vec3 fogColor;
  varying float vFogDepth;
  #ifdef FOG_EXP2
    uniform float fogDensity;
  #else
    uniform float fogNear;
    uniform float fogFar;
  #endif
#endif`, A_ = `#ifdef USE_GRADIENTMAP
  uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
  float dotNL = dot( normal, lightDirection );
  vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
  #ifdef USE_GRADIENTMAP
    return vec3( texture2D( gradientMap, coord ).r );
  #else
    vec2 fw = fwidth( coord ) * 0.5;
    return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
  #endif
}`, w_ = `#ifdef USE_LIGHTMAP
  uniform sampler2D lightMap;
  uniform float lightMapIntensity;
#endif`, R_ = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, C_ = `varying vec3 vViewPosition;
struct LambertMaterial {
  vec3 diffuseColor;
  float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
  float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
  vec3 irradiance = dotNL * directLight.color;
  reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
  reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, P_ = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
  uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
  float x = normal.x, y = normal.y, z = normal.z;
  vec3 result = shCoefficients[ 0 ] * 0.886227;
  result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
  result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
  result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
  result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
  result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
  result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
  result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
  result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
  return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
  vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
  vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
  return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
  vec3 irradiance = ambientLightColor;
  return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
  float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
  if ( cutoffDistance > 0.0 ) {
    distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
  }
  return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
  return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
  struct DirectionalLight {
    vec3 direction;
    vec3 color;
  };
  uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
  void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
    light.color = directionalLight.color;
    light.direction = directionalLight.direction;
    light.visible = true;
  }
#endif
#if NUM_POINT_LIGHTS > 0
  struct PointLight {
    vec3 position;
    vec3 color;
    float distance;
    float decay;
  };
  uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
  void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
    vec3 lVector = pointLight.position - geometryPosition;
    light.direction = normalize( lVector );
    float lightDistance = length( lVector );
    light.color = pointLight.color;
    light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
    light.visible = ( light.color != vec3( 0.0 ) );
  }
#endif
#if NUM_SPOT_LIGHTS > 0
  struct SpotLight {
    vec3 position;
    vec3 direction;
    vec3 color;
    float distance;
    float decay;
    float coneCos;
    float penumbraCos;
  };
  uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
  void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
    vec3 lVector = spotLight.position - geometryPosition;
    light.direction = normalize( lVector );
    float angleCos = dot( light.direction, spotLight.direction );
    float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
    if ( spotAttenuation > 0.0 ) {
      float lightDistance = length( lVector );
      light.color = spotLight.color * spotAttenuation;
      light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
      light.visible = ( light.color != vec3( 0.0 ) );
    } else {
      light.color = vec3( 0.0 );
      light.visible = false;
    }
  }
#endif
#if NUM_RECT_AREA_LIGHTS > 0
  struct RectAreaLight {
    vec3 color;
    vec3 position;
    vec3 halfWidth;
    vec3 halfHeight;
  };
  uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
  uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
  struct HemisphereLight {
    vec3 direction;
    vec3 skyColor;
    vec3 groundColor;
  };
  uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
  vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
    float dotNL = dot( normal, hemiLight.direction );
    float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
    vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
    return irradiance;
  }
#endif`, L_ = `#ifdef USE_ENVMAP
  vec3 getIBLIrradiance( const in vec3 normal ) {
    #ifdef ENVMAP_TYPE_CUBE_UV
      vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
      vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
      return PI * envMapColor.rgb * envMapIntensity;
    #else
      return vec3( 0.0 );
    #endif
  }
  vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
    #ifdef ENVMAP_TYPE_CUBE_UV
      vec3 reflectVec = reflect( - viewDir, normal );
      reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
      reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
      vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
      return envMapColor.rgb * envMapIntensity;
    #else
      return vec3( 0.0 );
    #endif
  }
  #ifdef USE_ANISOTROPY
    vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
      #ifdef ENVMAP_TYPE_CUBE_UV
        vec3 bentNormal = cross( bitangent, viewDir );
        bentNormal = normalize( cross( bentNormal, bitangent ) );
        bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
        return getIBLRadiance( viewDir, bentNormal, roughness );
      #else
        return vec3( 0.0 );
      #endif
    }
  #endif
#endif`, D_ = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, I_ = `varying vec3 vViewPosition;
struct ToonMaterial {
  vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
  vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
  reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
  reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, N_ = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, U_ = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
  vec3 diffuseColor;
  vec3 specularColor;
  float specularShininess;
  float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
  float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
  vec3 irradiance = dotNL * directLight.color;
  reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
  reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
  reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, O_ = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
  material.ior = ior;
  #ifdef USE_SPECULAR
    float specularIntensityFactor = specularIntensity;
    vec3 specularColorFactor = specularColor;
    #ifdef USE_SPECULAR_COLORMAP
      specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
    #endif
    #ifdef USE_SPECULAR_INTENSITYMAP
      specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
    #endif
    material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
  #else
    float specularIntensityFactor = 1.0;
    vec3 specularColorFactor = vec3( 1.0 );
    material.specularF90 = 1.0;
  #endif
  material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
  material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
  material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
  material.clearcoat = clearcoat;
  material.clearcoatRoughness = clearcoatRoughness;
  material.clearcoatF0 = vec3( 0.04 );
  material.clearcoatF90 = 1.0;
  #ifdef USE_CLEARCOATMAP
    material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
  #endif
  #ifdef USE_CLEARCOAT_ROUGHNESSMAP
    material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
  #endif
  material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
  material.clearcoatRoughness += geometryRoughness;
  material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
  material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
  material.iridescence = iridescence;
  material.iridescenceIOR = iridescenceIOR;
  #ifdef USE_IRIDESCENCEMAP
    material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
  #endif
  #ifdef USE_IRIDESCENCE_THICKNESSMAP
    material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
  #else
    material.iridescenceThickness = iridescenceThicknessMaximum;
  #endif
#endif
#ifdef USE_SHEEN
  material.sheenColor = sheenColor;
  #ifdef USE_SHEEN_COLORMAP
    material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
  #endif
  material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
  #ifdef USE_SHEEN_ROUGHNESSMAP
    material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
  #endif
#endif
#ifdef USE_ANISOTROPY
  #ifdef USE_ANISOTROPYMAP
    mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
    vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
    vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
  #else
    vec2 anisotropyV = anisotropyVector;
  #endif
  material.anisotropy = length( anisotropyV );
  if( material.anisotropy == 0.0 ) {
    anisotropyV = vec2( 1.0, 0.0 );
  } else {
    anisotropyV /= material.anisotropy;
    material.anisotropy = saturate( material.anisotropy );
  }
  material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
  material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
  material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, F_ = `struct PhysicalMaterial {
  vec3 diffuseColor;
  float roughness;
  vec3 specularColor;
  float specularF90;
  float dispersion;
  #ifdef USE_CLEARCOAT
    float clearcoat;
    float clearcoatRoughness;
    vec3 clearcoatF0;
    float clearcoatF90;
  #endif
  #ifdef USE_IRIDESCENCE
    float iridescence;
    float iridescenceIOR;
    float iridescenceThickness;
    vec3 iridescenceFresnel;
    vec3 iridescenceF0;
  #endif
  #ifdef USE_SHEEN
    vec3 sheenColor;
    float sheenRoughness;
  #endif
  #ifdef IOR
    float ior;
  #endif
  #ifdef USE_TRANSMISSION
    float transmission;
    float transmissionAlpha;
    float thickness;
    float attenuationDistance;
    vec3 attenuationColor;
  #endif
  #ifdef USE_ANISOTROPY
    float anisotropy;
    float alphaT;
    vec3 anisotropyT;
    vec3 anisotropyB;
  #endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
  float a2 = pow2( alpha );
  float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
  float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
  return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
  float a2 = pow2( alpha );
  float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
  return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
  float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
    float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
    float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
    float v = 0.5 / ( gv + gl );
    return saturate(v);
  }
  float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
    float a2 = alphaT * alphaB;
    highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
    highp float v2 = dot( v, v );
    float w2 = a2 / v2;
    return RECIPROCAL_PI * a2 * pow2 ( w2 );
  }
#endif
#ifdef USE_CLEARCOAT
  vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
    vec3 f0 = material.clearcoatF0;
    float f90 = material.clearcoatF90;
    float roughness = material.clearcoatRoughness;
    float alpha = pow2( roughness );
    vec3 halfDir = normalize( lightDir + viewDir );
    float dotNL = saturate( dot( normal, lightDir ) );
    float dotNV = saturate( dot( normal, viewDir ) );
    float dotNH = saturate( dot( normal, halfDir ) );
    float dotVH = saturate( dot( viewDir, halfDir ) );
    vec3 F = F_Schlick( f0, f90, dotVH );
    float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
    float D = D_GGX( alpha, dotNH );
    return F * ( V * D );
  }
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
  vec3 f0 = material.specularColor;
  float f90 = material.specularF90;
  float roughness = material.roughness;
  float alpha = pow2( roughness );
  vec3 halfDir = normalize( lightDir + viewDir );
  float dotNL = saturate( dot( normal, lightDir ) );
  float dotNV = saturate( dot( normal, viewDir ) );
  float dotNH = saturate( dot( normal, halfDir ) );
  float dotVH = saturate( dot( viewDir, halfDir ) );
  vec3 F = F_Schlick( f0, f90, dotVH );
  #ifdef USE_IRIDESCENCE
    F = mix( F, material.iridescenceFresnel, material.iridescence );
  #endif
  #ifdef USE_ANISOTROPY
    float dotTL = dot( material.anisotropyT, lightDir );
    float dotTV = dot( material.anisotropyT, viewDir );
    float dotTH = dot( material.anisotropyT, halfDir );
    float dotBL = dot( material.anisotropyB, lightDir );
    float dotBV = dot( material.anisotropyB, viewDir );
    float dotBH = dot( material.anisotropyB, halfDir );
    float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
    float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
  #else
    float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
    float D = D_GGX( alpha, dotNH );
  #endif
  return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
  const float LUT_SIZE = 64.0;
  const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
  const float LUT_BIAS = 0.5 / LUT_SIZE;
  float dotNV = saturate( dot( N, V ) );
  vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
  uv = uv * LUT_SCALE + LUT_BIAS;
  return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
  float l = length( f );
  return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
  float x = dot( v1, v2 );
  float y = abs( x );
  float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
  float b = 3.4175940 + ( 4.1616724 + y ) * y;
  float v = a / b;
  float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
  return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
  vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
  vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
  vec3 lightNormal = cross( v1, v2 );
  if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
  vec3 T1, T2;
  T1 = normalize( V - N * dot( V, N ) );
  T2 = - cross( N, T1 );
  mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
  vec3 coords[ 4 ];
  coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
  coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
  coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
  coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
  coords[ 0 ] = normalize( coords[ 0 ] );
  coords[ 1 ] = normalize( coords[ 1 ] );
  coords[ 2 ] = normalize( coords[ 2 ] );
  coords[ 3 ] = normalize( coords[ 3 ] );
  vec3 vectorFormFactor = vec3( 0.0 );
  vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
  vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
  vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
  vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
  float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
  return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
  float alpha = pow2( roughness );
  float invAlpha = 1.0 / alpha;
  float cos2h = dotNH * dotNH;
  float sin2h = max( 1.0 - cos2h, 0.0078125 );
  return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
  return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
  vec3 halfDir = normalize( lightDir + viewDir );
  float dotNL = saturate( dot( normal, lightDir ) );
  float dotNV = saturate( dot( normal, viewDir ) );
  float dotNH = saturate( dot( normal, halfDir ) );
  float D = D_Charlie( sheenRoughness, dotNH );
  float V = V_Neubelt( dotNV, dotNL );
  return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
  float dotNV = saturate( dot( normal, viewDir ) );
  float r2 = roughness * roughness;
  float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
  float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
  float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
  return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
  float dotNV = saturate( dot( normal, viewDir ) );
  const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
  const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
  vec4 r = roughness * c0 + c1;
  float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
  vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
  return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
  vec2 fab = DFGApprox( normal, viewDir, roughness );
  return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
  vec2 fab = DFGApprox( normal, viewDir, roughness );
  #ifdef USE_IRIDESCENCE
    vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
  #else
    vec3 Fr = specularColor;
  #endif
  vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
  float Ess = fab.x + fab.y;
  float Ems = 1.0 - Ess;
  vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
  singleScatter += FssEss;
  multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
  void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
    vec3 normal = geometryNormal;
    vec3 viewDir = geometryViewDir;
    vec3 position = geometryPosition;
    vec3 lightPos = rectAreaLight.position;
    vec3 halfWidth = rectAreaLight.halfWidth;
    vec3 halfHeight = rectAreaLight.halfHeight;
    vec3 lightColor = rectAreaLight.color;
    float roughness = material.roughness;
    vec3 rectCoords[ 4 ];
    rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
    rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
    rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
    vec2 uv = LTC_Uv( normal, viewDir, roughness );
    vec4 t1 = texture2D( ltc_1, uv );
    vec4 t2 = texture2D( ltc_2, uv );
    mat3 mInv = mat3(
      vec3( t1.x, 0, t1.y ),
      vec3(    0, 1,    0 ),
      vec3( t1.z, 0, t1.w )
    );
    vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
    reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
    reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
  }
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
  float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
  vec3 irradiance = dotNL * directLight.color;
  #ifdef USE_CLEARCOAT
    float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
    vec3 ccIrradiance = dotNLcc * directLight.color;
    clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
  #endif
  #ifdef USE_SHEEN
    sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
  #endif
  reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
  reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
  reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
  #ifdef USE_CLEARCOAT
    clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
  #endif
  #ifdef USE_SHEEN
    sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
  #endif
  vec3 singleScattering = vec3( 0.0 );
  vec3 multiScattering = vec3( 0.0 );
  vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
  #ifdef USE_IRIDESCENCE
    computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
  #else
    computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
  #endif
  vec3 totalScattering = singleScattering + multiScattering;
  vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
  reflectedLight.indirectSpecular += radiance * singleScattering;
  reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
  reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
  return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, B_ = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
  geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
  float dotNVi = saturate( dot( normal, geometryViewDir ) );
  if ( material.iridescenceThickness == 0.0 ) {
    material.iridescence = 0.0;
  } else {
    material.iridescence = saturate( material.iridescence );
  }
  if ( material.iridescence > 0.0 ) {
    material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
    material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
  }
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
  PointLight pointLight;
  #if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
  PointLightShadow pointLightShadow;
  #endif
  #pragma unroll_loop_start
  for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
    pointLight = pointLights[ i ];
    getPointLightInfo( pointLight, geometryPosition, directLight );
    #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
    pointLightShadow = pointLightShadows[ i ];
    directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
    #endif
    RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
  }
  #pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
  SpotLight spotLight;
  vec4 spotColor;
  vec3 spotLightCoord;
  bool inSpotLightMap;
  #if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
  SpotLightShadow spotLightShadow;
  #endif
  #pragma unroll_loop_start
  for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
    spotLight = spotLights[ i ];
    getSpotLightInfo( spotLight, geometryPosition, directLight );
    #if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
    #define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
    #elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
    #define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
    #else
    #define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
    #endif
    #if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
      spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
      inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
      spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
      directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
    #endif
    #undef SPOT_LIGHT_MAP_INDEX
    #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
    spotLightShadow = spotLightShadows[ i ];
    directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
    #endif
    RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
  }
  #pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
  DirectionalLight directionalLight;
  #if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
  DirectionalLightShadow directionalLightShadow;
  #endif
  #pragma unroll_loop_start
  for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
    directionalLight = directionalLights[ i ];
    getDirectionalLightInfo( directionalLight, directLight );
    #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
    directionalLightShadow = directionalLightShadows[ i ];
    directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
    #endif
    RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
  }
  #pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
  RectAreaLight rectAreaLight;
  #pragma unroll_loop_start
  for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
    rectAreaLight = rectAreaLights[ i ];
    RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
  }
  #pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
  vec3 iblIrradiance = vec3( 0.0 );
  vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
  #if defined( USE_LIGHT_PROBES )
    irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
  #endif
  #if ( NUM_HEMI_LIGHTS > 0 )
    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
      irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
    }
    #pragma unroll_loop_end
  #endif
#endif
#if defined( RE_IndirectSpecular )
  vec3 radiance = vec3( 0.0 );
  vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, k_ = `#if defined( RE_IndirectDiffuse )
  #ifdef USE_LIGHTMAP
    vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
    vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
    irradiance += lightMapIrradiance;
  #endif
  #if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
    iblIrradiance += getIBLIrradiance( geometryNormal );
  #endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
  #ifdef USE_ANISOTROPY
    radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
  #else
    radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
  #endif
  #ifdef USE_CLEARCOAT
    clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
  #endif
#endif`, z_ = `#if defined( RE_IndirectDiffuse )
  RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
  RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, V_ = `#if defined( USE_LOGDEPTHBUF )
  gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, H_ = `#if defined( USE_LOGDEPTHBUF )
  uniform float logDepthBufFC;
  varying float vFragDepth;
  varying float vIsPerspective;
#endif`, G_ = `#ifdef USE_LOGDEPTHBUF
  varying float vFragDepth;
  varying float vIsPerspective;
#endif`, W_ = `#ifdef USE_LOGDEPTHBUF
  vFragDepth = 1.0 + gl_Position.w;
  vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, X_ = `#ifdef USE_MAP
  vec4 sampledDiffuseColor = texture2D( map, vMapUv );
  #ifdef DECODE_VIDEO_TEXTURE
    sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );

  #endif
  diffuseColor *= sampledDiffuseColor;
#endif`, Y_ = `#ifdef USE_MAP
  uniform sampler2D map;
#endif`, q_ = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
  #if defined( USE_POINTS_UV )
    vec2 uv = vUv;
  #else
    vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
  #endif
#endif
#ifdef USE_MAP
  diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
  diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, j_ = `#if defined( USE_POINTS_UV )
  varying vec2 vUv;
#else
  #if defined( USE_MAP ) || defined( USE_ALPHAMAP )
    uniform mat3 uvTransform;
  #endif
#endif
#ifdef USE_MAP
  uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
  uniform sampler2D alphaMap;
#endif`, K_ = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
  vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
  metalnessFactor *= texelMetalness.b;
#endif`, Z_ = `#ifdef USE_METALNESSMAP
  uniform sampler2D metalnessMap;
#endif`, $_ = `#ifdef USE_INSTANCING_MORPH
  float morphTargetInfluences[ MORPHTARGETS_COUNT ];
  float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
  for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
    morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
  }
#endif`, J_ = `#if defined( USE_MORPHCOLORS )
  vColor *= morphTargetBaseInfluence;
  for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
    #if defined( USE_COLOR_ALPHA )
      if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
    #elif defined( USE_COLOR )
      if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
    #endif
  }
#endif`, Q_ = `#ifdef USE_MORPHNORMALS
  objectNormal *= morphTargetBaseInfluence;
  for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
    if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
  }
#endif`, eg = `#ifdef USE_MORPHTARGETS
  #ifndef USE_INSTANCING_MORPH
    uniform float morphTargetBaseInfluence;
    uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
  #endif
  uniform sampler2DArray morphTargetsTexture;
  uniform ivec2 morphTargetsTextureSize;
  vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
    int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
    int y = texelIndex / morphTargetsTextureSize.x;
    int x = texelIndex - y * morphTargetsTextureSize.x;
    ivec3 morphUV = ivec3( x, y, morphTargetIndex );
    return texelFetch( morphTargetsTexture, morphUV, 0 );
  }
#endif`, tg = `#ifdef USE_MORPHTARGETS
  transformed *= morphTargetBaseInfluence;
  for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
    if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
  }
#endif`, ng = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
  vec3 fdx = dFdx( vViewPosition );
  vec3 fdy = dFdy( vViewPosition );
  vec3 normal = normalize( cross( fdx, fdy ) );
#else
  vec3 normal = normalize( vNormal );
  #ifdef DOUBLE_SIDED
    normal *= faceDirection;
  #endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
  #ifdef USE_TANGENT
    mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
  #else
    mat3 tbn = getTangentFrame( - vViewPosition, normal,
    #if defined( USE_NORMALMAP )
      vNormalMapUv
    #elif defined( USE_CLEARCOAT_NORMALMAP )
      vClearcoatNormalMapUv
    #else
      vUv
    #endif
    );
  #endif
  #if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
    tbn[0] *= faceDirection;
    tbn[1] *= faceDirection;
  #endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
  #ifdef USE_TANGENT
    mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
  #else
    mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
  #endif
  #if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
    tbn2[0] *= faceDirection;
    tbn2[1] *= faceDirection;
  #endif
#endif
vec3 nonPerturbedNormal = normal;`, ig = `#ifdef USE_NORMALMAP_OBJECTSPACE
  normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
  #ifdef FLIP_SIDED
    normal = - normal;
  #endif
  #ifdef DOUBLE_SIDED
    normal = normal * faceDirection;
  #endif
  normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
  vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
  mapN.xy *= normalScale;
  normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
  normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, sg = `#ifndef FLAT_SHADED
  varying vec3 vNormal;
  #ifdef USE_TANGENT
    varying vec3 vTangent;
    varying vec3 vBitangent;
  #endif
#endif`, rg = `#ifndef FLAT_SHADED
  varying vec3 vNormal;
  #ifdef USE_TANGENT
    varying vec3 vTangent;
    varying vec3 vBitangent;
  #endif
#endif`, ag = `#ifndef FLAT_SHADED
  vNormal = normalize( transformedNormal );
  #ifdef USE_TANGENT
    vTangent = normalize( transformedTangent );
    vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
  #endif
#endif`, og = `#ifdef USE_NORMALMAP
  uniform sampler2D normalMap;
  uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
  uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
  mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
    vec3 q0 = dFdx( eye_pos.xyz );
    vec3 q1 = dFdy( eye_pos.xyz );
    vec2 st0 = dFdx( uv.st );
    vec2 st1 = dFdy( uv.st );
    vec3 N = surf_norm;
    vec3 q1perp = cross( q1, N );
    vec3 q0perp = cross( N, q0 );
    vec3 T = q1perp * st0.x + q0perp * st1.x;
    vec3 B = q1perp * st0.y + q0perp * st1.y;
    float det = max( dot( T, T ), dot( B, B ) );
    float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
    return mat3( T * scale, B * scale, N );
  }
#endif`, lg = `#ifdef USE_CLEARCOAT
  vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, cg = `#ifdef USE_CLEARCOAT_NORMALMAP
  vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
  clearcoatMapN.xy *= clearcoatNormalScale;
  clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, hg = `#ifdef USE_CLEARCOATMAP
  uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
  uniform sampler2D clearcoatNormalMap;
  uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
  uniform sampler2D clearcoatRoughnessMap;
#endif`, ug = `#ifdef USE_IRIDESCENCEMAP
  uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
  uniform sampler2D iridescenceThicknessMap;
#endif`, dg = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, fg = `vec3 packNormalToRGB( const in vec3 normal ) {
  return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
  return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
  if( v <= 0.0 )
    return vec4( 0., 0., 0., 0. );
  if( v >= 1.0 )
    return vec4( 1., 1., 1., 1. );
  float vuf;
  float af = modf( v * PackFactors.a, vuf );
  float bf = modf( vuf * ShiftRight8, vuf );
  float gf = modf( vuf * ShiftRight8, vuf );
  return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
  if( v <= 0.0 )
    return vec3( 0., 0., 0. );
  if( v >= 1.0 )
    return vec3( 1., 1., 1. );
  float vuf;
  float bf = modf( v * PackFactors.b, vuf );
  float gf = modf( vuf * ShiftRight8, vuf );
  return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
  if( v <= 0.0 )
    return vec2( 0., 0. );
  if( v >= 1.0 )
    return vec2( 1., 1. );
  float vuf;
  float gf = modf( v * 256., vuf );
  return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
  return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
  return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
  return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
  vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
  return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
  return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
  return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
  return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
  return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
  return ( near * far ) / ( ( far - near ) * depth - far );
}`, pg = `#ifdef PREMULTIPLIED_ALPHA
  gl_FragColor.rgb *= gl_FragColor.a;
#endif`, mg = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
  mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
  mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, _g = `#ifdef DITHERING
  gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, gg = `#ifdef DITHERING
  vec3 dithering( vec3 color ) {
    float grid_position = rand( gl_FragCoord.xy );
    vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
    dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
    return color + dither_shift_RGB;
  }
#endif`, vg = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
  vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
  roughnessFactor *= texelRoughness.g;
#endif`, xg = `#ifdef USE_ROUGHNESSMAP
  uniform sampler2D roughnessMap;
#endif`, yg = `#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
  #if NUM_DIR_LIGHT_SHADOWS > 0
    uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
    varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
    struct DirectionalLightShadow {
      float shadowIntensity;
      float shadowBias;
      float shadowNormalBias;
      float shadowRadius;
      vec2 shadowMapSize;
    };
    uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
  #endif
  #if NUM_SPOT_LIGHT_SHADOWS > 0
    uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
    struct SpotLightShadow {
      float shadowIntensity;
      float shadowBias;
      float shadowNormalBias;
      float shadowRadius;
      vec2 shadowMapSize;
    };
    uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
  #endif
  #if NUM_POINT_LIGHT_SHADOWS > 0
    uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
    varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
    struct PointLightShadow {
      float shadowIntensity;
      float shadowBias;
      float shadowNormalBias;
      float shadowRadius;
      vec2 shadowMapSize;
      float shadowCameraNear;
      float shadowCameraFar;
    };
    uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
  #endif
  float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
    return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
  }
  vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
    return unpackRGBATo2Half( texture2D( shadow, uv ) );
  }
  float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
    float occlusion = 1.0;
    vec2 distribution = texture2DDistribution( shadow, uv );
    float hard_shadow = step( compare , distribution.x );
    if (hard_shadow != 1.0 ) {
      float distance = compare - distribution.x ;
      float variance = max( 0.00000, distribution.y * distribution.y );
      float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
    }
    return occlusion;
  }
  float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
    float shadow = 1.0;
    shadowCoord.xyz /= shadowCoord.w;
    shadowCoord.z += shadowBias;
    bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
    bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
    if ( frustumTest ) {
    #if defined( SHADOWMAP_TYPE_PCF )
      vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
      float dx0 = - texelSize.x * shadowRadius;
      float dy0 = - texelSize.y * shadowRadius;
      float dx1 = + texelSize.x * shadowRadius;
      float dy1 = + texelSize.y * shadowRadius;
      float dx2 = dx0 / 2.0;
      float dy2 = dy0 / 2.0;
      float dx3 = dx1 / 2.0;
      float dy3 = dy1 / 2.0;
      shadow = (
        texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
        texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
        texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
        texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
        texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
        texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
        texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
        texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
        texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
        texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
        texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
        texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
        texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
        texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
        texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
        texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
        texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
      ) * ( 1.0 / 17.0 );
    #elif defined( SHADOWMAP_TYPE_PCF_SOFT )
      vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
      float dx = texelSize.x;
      float dy = texelSize.y;
      vec2 uv = shadowCoord.xy;
      vec2 f = fract( uv * shadowMapSize + 0.5 );
      uv -= f * texelSize;
      shadow = (
        texture2DCompare( shadowMap, uv, shadowCoord.z ) +
        texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
        texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
        texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
        mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
           texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
           f.x ) +
        mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
           texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
           f.x ) +
        mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
           texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
           f.y ) +
        mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
           texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
           f.y ) +
        mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
              texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
              f.x ),
           mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
              texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
              f.x ),
           f.y )
      ) * ( 1.0 / 9.0 );
    #elif defined( SHADOWMAP_TYPE_VSM )
      shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
    #else
      shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
    #endif
    }
    return mix( 1.0, shadow, shadowIntensity );
  }
  vec2 cubeToUV( vec3 v, float texelSizeY ) {
    vec3 absV = abs( v );
    float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
    absV *= scaleToCube;
    v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
    vec2 planar = v.xy;
    float almostATexel = 1.5 * texelSizeY;
    float almostOne = 1.0 - almostATexel;
    if ( absV.z >= almostOne ) {
      if ( v.z > 0.0 )
        planar.x = 4.0 - v.x;
    } else if ( absV.x >= almostOne ) {
      float signX = sign( v.x );
      planar.x = v.z * signX + 2.0 * signX;
    } else if ( absV.y >= almostOne ) {
      float signY = sign( v.y );
      planar.x = v.x + 2.0 * signY + 2.0;
      planar.y = v.z * signY - 2.0;
    }
    return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
  }
  float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
    float shadow = 1.0;
    vec3 lightToPosition = shadowCoord.xyz;

    float lightToPositionLength = length( lightToPosition );
    if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
      float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
      vec3 bd3D = normalize( lightToPosition );
      vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
      #if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
        vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
        shadow = (
          texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
          texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
          texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
          texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
          texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
          texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
          texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
          texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
          texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
        ) * ( 1.0 / 9.0 );
      #else
        shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
      #endif
    }
    return mix( 1.0, shadow, shadowIntensity );
  }
#endif`, Mg = `#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
  #if NUM_DIR_LIGHT_SHADOWS > 0
    uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
    varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
    struct DirectionalLightShadow {
      float shadowIntensity;
      float shadowBias;
      float shadowNormalBias;
      float shadowRadius;
      vec2 shadowMapSize;
    };
    uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
  #endif
  #if NUM_SPOT_LIGHT_SHADOWS > 0
    struct SpotLightShadow {
      float shadowIntensity;
      float shadowBias;
      float shadowNormalBias;
      float shadowRadius;
      vec2 shadowMapSize;
    };
    uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
  #endif
  #if NUM_POINT_LIGHT_SHADOWS > 0
    uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
    varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
    struct PointLightShadow {
      float shadowIntensity;
      float shadowBias;
      float shadowNormalBias;
      float shadowRadius;
      vec2 shadowMapSize;
      float shadowCameraNear;
      float shadowCameraFar;
    };
    uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
  #endif
#endif`, Sg = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
  vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
  vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
  #if NUM_DIR_LIGHT_SHADOWS > 0
    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
      shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
      vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
    }
    #pragma unroll_loop_end
  #endif
  #if NUM_POINT_LIGHT_SHADOWS > 0
    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
      shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
      vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
    }
    #pragma unroll_loop_end
  #endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
  #pragma unroll_loop_start
  for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
    shadowWorldPosition = worldPosition;
    #if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
      shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
    #endif
    vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
  }
  #pragma unroll_loop_end
#endif`, Eg = `float getShadowMask() {
  float shadow = 1.0;
  #ifdef USE_SHADOWMAP
  #if NUM_DIR_LIGHT_SHADOWS > 0
  DirectionalLightShadow directionalLight;
  #pragma unroll_loop_start
  for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
    directionalLight = directionalLightShadows[ i ];
    shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
  }
  #pragma unroll_loop_end
  #endif
  #if NUM_SPOT_LIGHT_SHADOWS > 0
  SpotLightShadow spotLight;
  #pragma unroll_loop_start
  for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
    spotLight = spotLightShadows[ i ];
    shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
  }
  #pragma unroll_loop_end
  #endif
  #if NUM_POINT_LIGHT_SHADOWS > 0
  PointLightShadow pointLight;
  #pragma unroll_loop_start
  for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
    pointLight = pointLightShadows[ i ];
    shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
  }
  #pragma unroll_loop_end
  #endif
  #endif
  return shadow;
}`, Tg = `#ifdef USE_SKINNING
  mat4 boneMatX = getBoneMatrix( skinIndex.x );
  mat4 boneMatY = getBoneMatrix( skinIndex.y );
  mat4 boneMatZ = getBoneMatrix( skinIndex.z );
  mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, bg = `#ifdef USE_SKINNING
  uniform mat4 bindMatrix;
  uniform mat4 bindMatrixInverse;
  uniform highp sampler2D boneTexture;
  mat4 getBoneMatrix( const in float i ) {
    int size = textureSize( boneTexture, 0 ).x;
    int j = int( i ) * 4;
    int x = j % size;
    int y = j / size;
    vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
    vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
    vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
    vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
    return mat4( v1, v2, v3, v4 );
  }
#endif`, Ag = `#ifdef USE_SKINNING
  vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
  vec4 skinned = vec4( 0.0 );
  skinned += boneMatX * skinVertex * skinWeight.x;
  skinned += boneMatY * skinVertex * skinWeight.y;
  skinned += boneMatZ * skinVertex * skinWeight.z;
  skinned += boneMatW * skinVertex * skinWeight.w;
  transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, wg = `#ifdef USE_SKINNING
  mat4 skinMatrix = mat4( 0.0 );
  skinMatrix += skinWeight.x * boneMatX;
  skinMatrix += skinWeight.y * boneMatY;
  skinMatrix += skinWeight.z * boneMatZ;
  skinMatrix += skinWeight.w * boneMatW;
  skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
  objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
  #ifdef USE_TANGENT
    objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
  #endif
#endif`, Rg = `float specularStrength;
#ifdef USE_SPECULARMAP
  vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
  specularStrength = texelSpecular.r;
#else
  specularStrength = 1.0;
#endif`, Cg = `#ifdef USE_SPECULARMAP
  uniform sampler2D specularMap;
#endif`, Pg = `#if defined( TONE_MAPPING )
  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, Lg = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
  return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
  color *= toneMappingExposure;
  return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
  color *= toneMappingExposure;
  color = max( vec3( 0.0 ), color - 0.004 );
  return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
  vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
  vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
  return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
  const mat3 ACESInputMat = mat3(
    vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
    vec3( 0.04823, 0.01566, 0.83777 )
  );
  const mat3 ACESOutputMat = mat3(
    vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
    vec3( -0.07367, -0.00605,  1.07602 )
  );
  color *= toneMappingExposure / 0.6;
  color = ACESInputMat * color;
  color = RRTAndODTFit( color );
  color = ACESOutputMat * color;
  return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
  vec3( 1.6605, - 0.1246, - 0.0182 ),
  vec3( - 0.5876, 1.1329, - 0.1006 ),
  vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
  vec3( 0.6274, 0.0691, 0.0164 ),
  vec3( 0.3293, 0.9195, 0.0880 ),
  vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
  vec3 x2 = x * x;
  vec3 x4 = x2 * x2;
  return + 15.5 * x4 * x2
    - 40.14 * x4 * x
    + 31.96 * x4
    - 6.868 * x2 * x
    + 0.4298 * x2
    + 0.1191 * x
    - 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
  const mat3 AgXInsetMatrix = mat3(
    vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
    vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
    vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
  );
  const mat3 AgXOutsetMatrix = mat3(
    vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
    vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
    vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
  );
  const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
  color *= toneMappingExposure;
  color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
  color = AgXInsetMatrix * color;
  color = max( color, 1e-10 );	color = log2( color );
  color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
  color = clamp( color, 0.0, 1.0 );
  color = agxDefaultContrastApprox( color );
  color = AgXOutsetMatrix * color;
  color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
  color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
  color = clamp( color, 0.0, 1.0 );
  return color;
}
vec3 NeutralToneMapping( vec3 color ) {
  const float StartCompression = 0.8 - 0.04;
  const float Desaturation = 0.15;
  color *= toneMappingExposure;
  float x = min( color.r, min( color.g, color.b ) );
  float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
  color -= offset;
  float peak = max( color.r, max( color.g, color.b ) );
  if ( peak < StartCompression ) return color;
  float d = 1. - StartCompression;
  float newPeak = 1. - d * d / ( peak + d - StartCompression );
  color *= newPeak / peak;
  float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
  return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, Dg = `#ifdef USE_TRANSMISSION
  material.transmission = transmission;
  material.transmissionAlpha = 1.0;
  material.thickness = thickness;
  material.attenuationDistance = attenuationDistance;
  material.attenuationColor = attenuationColor;
  #ifdef USE_TRANSMISSIONMAP
    material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
  #endif
  #ifdef USE_THICKNESSMAP
    material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
  #endif
  vec3 pos = vWorldPosition;
  vec3 v = normalize( cameraPosition - pos );
  vec3 n = inverseTransformDirection( normal, viewMatrix );
  vec4 transmitted = getIBLVolumeRefraction(
    n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
    pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
    material.attenuationColor, material.attenuationDistance );
  material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
  totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, Ig = `#ifdef USE_TRANSMISSION
  uniform float transmission;
  uniform float thickness;
  uniform float attenuationDistance;
  uniform vec3 attenuationColor;
  #ifdef USE_TRANSMISSIONMAP
    uniform sampler2D transmissionMap;
  #endif
  #ifdef USE_THICKNESSMAP
    uniform sampler2D thicknessMap;
  #endif
  uniform vec2 transmissionSamplerSize;
  uniform sampler2D transmissionSamplerMap;
  uniform mat4 modelMatrix;
  uniform mat4 projectionMatrix;
  varying vec3 vWorldPosition;
  float w0( float a ) {
    return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
  }
  float w1( float a ) {
    return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
  }
  float w2( float a ){
    return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
  }
  float w3( float a ) {
    return ( 1.0 / 6.0 ) * ( a * a * a );
  }
  float g0( float a ) {
    return w0( a ) + w1( a );
  }
  float g1( float a ) {
    return w2( a ) + w3( a );
  }
  float h0( float a ) {
    return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
  }
  float h1( float a ) {
    return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
  }
  vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
    uv = uv * texelSize.zw + 0.5;
    vec2 iuv = floor( uv );
    vec2 fuv = fract( uv );
    float g0x = g0( fuv.x );
    float g1x = g1( fuv.x );
    float h0x = h0( fuv.x );
    float h1x = h1( fuv.x );
    float h0y = h0( fuv.y );
    float h1y = h1( fuv.y );
    vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
    vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
    vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
    vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
    return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
      g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
  }
  vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
    vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
    vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
    vec2 fLodSizeInv = 1.0 / fLodSize;
    vec2 cLodSizeInv = 1.0 / cLodSize;
    vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
    vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
    return mix( fSample, cSample, fract( lod ) );
  }
  vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
    vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
    vec3 modelScale;
    modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
    modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
    modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
    return normalize( refractionVector ) * thickness * modelScale;
  }
  float applyIorToRoughness( const in float roughness, const in float ior ) {
    return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
  }
  vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
    float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
    return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
  }
  vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
    if ( isinf( attenuationDistance ) ) {
      return vec3( 1.0 );
    } else {
      vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
      vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
    }
  }
  vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
    const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
    const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
    const in vec3 attenuationColor, const in float attenuationDistance ) {
    vec4 transmittedLight;
    vec3 transmittance;
    #ifdef USE_DISPERSION
      float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
      vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
      for ( int i = 0; i < 3; i ++ ) {
        vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
        vec3 refractedRayExit = position + transmissionRay;

        vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
        vec2 refractionCoords = ndcPos.xy / ndcPos.w;
        refractionCoords += 1.0;
        refractionCoords /= 2.0;

        vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
        transmittedLight[ i ] = transmissionSample[ i ];
        transmittedLight.a += transmissionSample.a;
        transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
      }
      transmittedLight.a /= 3.0;

    #else

      vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
      vec3 refractedRayExit = position + transmissionRay;
      vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
      vec2 refractionCoords = ndcPos.xy / ndcPos.w;
      refractionCoords += 1.0;
      refractionCoords /= 2.0;
      transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
      transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );

    #endif
    vec3 attenuatedColor = transmittance * transmittedLight.rgb;
    vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
    float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
    return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
  }
#endif`, Ng = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
  varying vec2 vUv;
#endif
#ifdef USE_MAP
  varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
  varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
  varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
  varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
  varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
  varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
  varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
  varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
  varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
  varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
  varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
  varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
  varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
  varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
  varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
  varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
  varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
  varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
  varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
  varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
  uniform mat3 transmissionMapTransform;
  varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
  uniform mat3 thicknessMapTransform;
  varying vec2 vThicknessMapUv;
#endif`, Ug = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
  varying vec2 vUv;
#endif
#ifdef USE_MAP
  uniform mat3 mapTransform;
  varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
  uniform mat3 alphaMapTransform;
  varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
  uniform mat3 lightMapTransform;
  varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
  uniform mat3 aoMapTransform;
  varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
  uniform mat3 bumpMapTransform;
  varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
  uniform mat3 normalMapTransform;
  varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
  uniform mat3 displacementMapTransform;
  varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
  uniform mat3 emissiveMapTransform;
  varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
  uniform mat3 metalnessMapTransform;
  varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
  uniform mat3 roughnessMapTransform;
  varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
  uniform mat3 anisotropyMapTransform;
  varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
  uniform mat3 clearcoatMapTransform;
  varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
  uniform mat3 clearcoatNormalMapTransform;
  varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
  uniform mat3 clearcoatRoughnessMapTransform;
  varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
  uniform mat3 sheenColorMapTransform;
  varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
  uniform mat3 sheenRoughnessMapTransform;
  varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
  uniform mat3 iridescenceMapTransform;
  varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
  uniform mat3 iridescenceThicknessMapTransform;
  varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
  uniform mat3 specularMapTransform;
  varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
  uniform mat3 specularColorMapTransform;
  varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
  uniform mat3 specularIntensityMapTransform;
  varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
  uniform mat3 transmissionMapTransform;
  varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
  uniform mat3 thicknessMapTransform;
  varying vec2 vThicknessMapUv;
#endif`, Og = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
  vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
  vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
  vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
  vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
  vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
  vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
  vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
  vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
  vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
  vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
  vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
  vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
  vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
  vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
  vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
  vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
  vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
  vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
  vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
  vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
  vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
  vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
  vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
  vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, Fg = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
  vec4 worldPosition = vec4( transformed, 1.0 );
  #ifdef USE_BATCHING
    worldPosition = batchingMatrix * worldPosition;
  #endif
  #ifdef USE_INSTANCING
    worldPosition = instanceMatrix * worldPosition;
  #endif
  worldPosition = modelMatrix * worldPosition;
#endif`;
const Bg = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
  vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
  gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, kg = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
  vec4 texColor = texture2D( t2D, vUv );
  #ifdef DECODE_VIDEO_TEXTURE
    texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
  #endif
  texColor.rgb *= backgroundIntensity;
  gl_FragColor = texColor;
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`, zg = `varying vec3 vWorldDirection;
#include <common>
void main() {
  vWorldDirection = transformDirection( position, modelMatrix );
  #include <begin_vertex>
  #include <project_vertex>
  gl_Position.z = gl_Position.w;
}`, Vg = `#ifdef ENVMAP_TYPE_CUBE
  uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
  uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
  #ifdef ENVMAP_TYPE_CUBE
    vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
  #elif defined( ENVMAP_TYPE_CUBE_UV )
    vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
  #else
    vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
  #endif
  texColor.rgb *= backgroundIntensity;
  gl_FragColor = texColor;
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`, Hg = `varying vec3 vWorldDirection;
#include <common>
void main() {
  vWorldDirection = transformDirection( position, modelMatrix );
  #include <begin_vertex>
  #include <project_vertex>
  gl_Position.z = gl_Position.w;
}`, Gg = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
  vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
  gl_FragColor = texColor;
  gl_FragColor.a *= opacity;
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`, Wg = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
  #include <uv_vertex>
  #include <batching_vertex>
  #include <skinbase_vertex>
  #include <morphinstance_vertex>
  #ifdef USE_DISPLACEMENTMAP
    #include <beginnormal_vertex>
    #include <morphnormal_vertex>
    #include <skinnormal_vertex>
  #endif
  #include <begin_vertex>
  #include <morphtarget_vertex>
  #include <skinning_vertex>
  #include <displacementmap_vertex>
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>
  vHighPrecisionZW = gl_Position.zw;
}`, Xg = `#if DEPTH_PACKING == 3200
  uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
  vec4 diffuseColor = vec4( 1.0 );
  #include <clipping_planes_fragment>
  #if DEPTH_PACKING == 3200
    diffuseColor.a = opacity;
  #endif
  #include <map_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
  #include <alphahash_fragment>
  #include <logdepthbuf_fragment>
  float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
  #if DEPTH_PACKING == 3200
    gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
  #elif DEPTH_PACKING == 3201
    gl_FragColor = packDepthToRGBA( fragCoordZ );
  #elif DEPTH_PACKING == 3202
    gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
  #elif DEPTH_PACKING == 3203
    gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
  #endif
}`, Yg = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
  #include <uv_vertex>
  #include <batching_vertex>
  #include <skinbase_vertex>
  #include <morphinstance_vertex>
  #ifdef USE_DISPLACEMENTMAP
    #include <beginnormal_vertex>
    #include <morphnormal_vertex>
    #include <skinnormal_vertex>
  #endif
  #include <begin_vertex>
  #include <morphtarget_vertex>
  #include <skinning_vertex>
  #include <displacementmap_vertex>
  #include <project_vertex>
  #include <worldpos_vertex>
  #include <clipping_planes_vertex>
  vWorldPosition = worldPosition.xyz;
}`, qg = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
  vec4 diffuseColor = vec4( 1.0 );
  #include <clipping_planes_fragment>
  #include <map_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
  #include <alphahash_fragment>
  float dist = length( vWorldPosition - referencePosition );
  dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
  dist = saturate( dist );
  gl_FragColor = packDepthToRGBA( dist );
}`, jg = `varying vec3 vWorldDirection;
#include <common>
void main() {
  vWorldDirection = transformDirection( position, modelMatrix );
  #include <begin_vertex>
  #include <project_vertex>
}`, Kg = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
  vec3 direction = normalize( vWorldDirection );
  vec2 sampleUV = equirectUv( direction );
  gl_FragColor = texture2D( tEquirect, sampleUV );
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`, Zg = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
  vLineDistance = scale * lineDistance;
  #include <uv_vertex>
  #include <color_vertex>
  #include <morphinstance_vertex>
  #include <morphcolor_vertex>
  #include <begin_vertex>
  #include <morphtarget_vertex>
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>
  #include <fog_vertex>
}`, $g = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
  vec4 diffuseColor = vec4( diffuse, opacity );
  #include <clipping_planes_fragment>
  if ( mod( vLineDistance, totalSize ) > dashSize ) {
    discard;
  }
  vec3 outgoingLight = vec3( 0.0 );
  #include <logdepthbuf_fragment>
  #include <map_fragment>
  #include <color_fragment>
  outgoingLight = diffuseColor.rgb;
  #include <opaque_fragment>
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
}`, Jg = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
  #include <uv_vertex>
  #include <color_vertex>
  #include <morphinstance_vertex>
  #include <morphcolor_vertex>
  #include <batching_vertex>
  #if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
    #include <beginnormal_vertex>
    #include <morphnormal_vertex>
    #include <skinbase_vertex>
    #include <skinnormal_vertex>
    #include <defaultnormal_vertex>
  #endif
  #include <begin_vertex>
  #include <morphtarget_vertex>
  #include <skinning_vertex>
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>
  #include <worldpos_vertex>
  #include <envmap_vertex>
  #include <fog_vertex>
}`, Qg = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
  varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
  vec4 diffuseColor = vec4( diffuse, opacity );
  #include <clipping_planes_fragment>
  #include <logdepthbuf_fragment>
  #include <map_fragment>
  #include <color_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
  #include <alphahash_fragment>
  #include <specularmap_fragment>
  ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
  #ifdef USE_LIGHTMAP
    vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
    reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
  #else
    reflectedLight.indirectDiffuse += vec3( 1.0 );
  #endif
  #include <aomap_fragment>
  reflectedLight.indirectDiffuse *= diffuseColor.rgb;
  vec3 outgoingLight = reflectedLight.indirectDiffuse;
  #include <envmap_fragment>
  #include <opaque_fragment>
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>
}`, e0 = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
  #include <uv_vertex>
  #include <color_vertex>
  #include <morphinstance_vertex>
  #include <morphcolor_vertex>
  #include <batching_vertex>
  #include <beginnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <defaultnormal_vertex>
  #include <normal_vertex>
  #include <begin_vertex>
  #include <morphtarget_vertex>
  #include <skinning_vertex>
  #include <displacementmap_vertex>
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>
  vViewPosition = - mvPosition.xyz;
  #include <worldpos_vertex>
  #include <envmap_vertex>
  #include <shadowmap_vertex>
  #include <fog_vertex>
}`, t0 = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
  vec4 diffuseColor = vec4( diffuse, opacity );
  #include <clipping_planes_fragment>
  ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
  vec3 totalEmissiveRadiance = emissive;
  #include <logdepthbuf_fragment>
  #include <map_fragment>
  #include <color_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
  #include <alphahash_fragment>
  #include <specularmap_fragment>
  #include <normal_fragment_begin>
  #include <normal_fragment_maps>
  #include <emissivemap_fragment>
  #include <lights_lambert_fragment>
  #include <lights_fragment_begin>
  #include <lights_fragment_maps>
  #include <lights_fragment_end>
  #include <aomap_fragment>
  vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
  #include <envmap_fragment>
  #include <opaque_fragment>
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>
}`, n0 = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
  #include <uv_vertex>
  #include <color_vertex>
  #include <morphinstance_vertex>
  #include <morphcolor_vertex>
  #include <batching_vertex>
  #include <beginnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <defaultnormal_vertex>
  #include <normal_vertex>
  #include <begin_vertex>
  #include <morphtarget_vertex>
  #include <skinning_vertex>
  #include <displacementmap_vertex>
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>
  #include <fog_vertex>
  vViewPosition = - mvPosition.xyz;
}`, i0 = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
  vec4 diffuseColor = vec4( diffuse, opacity );
  #include <clipping_planes_fragment>
  #include <logdepthbuf_fragment>
  #include <map_fragment>
  #include <color_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
  #include <alphahash_fragment>
  #include <normal_fragment_begin>
  #include <normal_fragment_maps>
  vec3 viewDir = normalize( vViewPosition );
  vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
  vec3 y = cross( viewDir, x );
  vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
  #ifdef USE_MATCAP
    vec4 matcapColor = texture2D( matcap, uv );
  #else
    vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
  #endif
  vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
  #include <opaque_fragment>
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>
}`, s0 = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
  varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
  #include <uv_vertex>
  #include <batching_vertex>
  #include <beginnormal_vertex>
  #include <morphinstance_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <defaultnormal_vertex>
  #include <normal_vertex>
  #include <begin_vertex>
  #include <morphtarget_vertex>
  #include <skinning_vertex>
  #include <displacementmap_vertex>
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
  vViewPosition = - mvPosition.xyz;
#endif
}`, r0 = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
  varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
  vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
  #include <clipping_planes_fragment>
  #include <logdepthbuf_fragment>
  #include <normal_fragment_begin>
  #include <normal_fragment_maps>
  gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
  #ifdef OPAQUE
    gl_FragColor.a = 1.0;
  #endif
}`, a0 = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
  #include <uv_vertex>
  #include <color_vertex>
  #include <morphcolor_vertex>
  #include <batching_vertex>
  #include <beginnormal_vertex>
  #include <morphinstance_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <defaultnormal_vertex>
  #include <normal_vertex>
  #include <begin_vertex>
  #include <morphtarget_vertex>
  #include <skinning_vertex>
  #include <displacementmap_vertex>
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>
  vViewPosition = - mvPosition.xyz;
  #include <worldpos_vertex>
  #include <envmap_vertex>
  #include <shadowmap_vertex>
  #include <fog_vertex>
}`, o0 = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
  vec4 diffuseColor = vec4( diffuse, opacity );
  #include <clipping_planes_fragment>
  ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
  vec3 totalEmissiveRadiance = emissive;
  #include <logdepthbuf_fragment>
  #include <map_fragment>
  #include <color_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
  #include <alphahash_fragment>
  #include <specularmap_fragment>
  #include <normal_fragment_begin>
  #include <normal_fragment_maps>
  #include <emissivemap_fragment>
  #include <lights_phong_fragment>
  #include <lights_fragment_begin>
  #include <lights_fragment_maps>
  #include <lights_fragment_end>
  #include <aomap_fragment>
  vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
  #include <envmap_fragment>
  #include <opaque_fragment>
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>
}`, l0 = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
  varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
  #include <uv_vertex>
  #include <color_vertex>
  #include <morphinstance_vertex>
  #include <morphcolor_vertex>
  #include <batching_vertex>
  #include <beginnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <defaultnormal_vertex>
  #include <normal_vertex>
  #include <begin_vertex>
  #include <morphtarget_vertex>
  #include <skinning_vertex>
  #include <displacementmap_vertex>
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>
  vViewPosition = - mvPosition.xyz;
  #include <worldpos_vertex>
  #include <shadowmap_vertex>
  #include <fog_vertex>
#ifdef USE_TRANSMISSION
  vWorldPosition = worldPosition.xyz;
#endif
}`, c0 = `#define STANDARD
#ifdef PHYSICAL
  #define IOR
  #define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
  uniform float ior;
#endif
#ifdef USE_SPECULAR
  uniform float specularIntensity;
  uniform vec3 specularColor;
  #ifdef USE_SPECULAR_COLORMAP
    uniform sampler2D specularColorMap;
  #endif
  #ifdef USE_SPECULAR_INTENSITYMAP
    uniform sampler2D specularIntensityMap;
  #endif
#endif
#ifdef USE_CLEARCOAT
  uniform float clearcoat;
  uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
  uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
  uniform float iridescence;
  uniform float iridescenceIOR;
  uniform float iridescenceThicknessMinimum;
  uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
  uniform vec3 sheenColor;
  uniform float sheenRoughness;
  #ifdef USE_SHEEN_COLORMAP
    uniform sampler2D sheenColorMap;
  #endif
  #ifdef USE_SHEEN_ROUGHNESSMAP
    uniform sampler2D sheenRoughnessMap;
  #endif
#endif
#ifdef USE_ANISOTROPY
  uniform vec2 anisotropyVector;
  #ifdef USE_ANISOTROPYMAP
    uniform sampler2D anisotropyMap;
  #endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
  vec4 diffuseColor = vec4( diffuse, opacity );
  #include <clipping_planes_fragment>
  ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
  vec3 totalEmissiveRadiance = emissive;
  #include <logdepthbuf_fragment>
  #include <map_fragment>
  #include <color_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
  #include <alphahash_fragment>
  #include <roughnessmap_fragment>
  #include <metalnessmap_fragment>
  #include <normal_fragment_begin>
  #include <normal_fragment_maps>
  #include <clearcoat_normal_fragment_begin>
  #include <clearcoat_normal_fragment_maps>
  #include <emissivemap_fragment>
  #include <lights_physical_fragment>
  #include <lights_fragment_begin>
  #include <lights_fragment_maps>
  #include <lights_fragment_end>
  #include <aomap_fragment>
  vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
  vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
  #include <transmission_fragment>
  vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
  #ifdef USE_SHEEN
    float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
    outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
  #endif
  #ifdef USE_CLEARCOAT
    float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
    vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
    outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
  #endif
  #include <opaque_fragment>
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>
}`, h0 = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
  #include <uv_vertex>
  #include <color_vertex>
  #include <morphinstance_vertex>
  #include <morphcolor_vertex>
  #include <batching_vertex>
  #include <beginnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <defaultnormal_vertex>
  #include <normal_vertex>
  #include <begin_vertex>
  #include <morphtarget_vertex>
  #include <skinning_vertex>
  #include <displacementmap_vertex>
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>
  vViewPosition = - mvPosition.xyz;
  #include <worldpos_vertex>
  #include <shadowmap_vertex>
  #include <fog_vertex>
}`, u0 = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
  vec4 diffuseColor = vec4( diffuse, opacity );
  #include <clipping_planes_fragment>
  ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
  vec3 totalEmissiveRadiance = emissive;
  #include <logdepthbuf_fragment>
  #include <map_fragment>
  #include <color_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
  #include <alphahash_fragment>
  #include <normal_fragment_begin>
  #include <normal_fragment_maps>
  #include <emissivemap_fragment>
  #include <lights_toon_fragment>
  #include <lights_fragment_begin>
  #include <lights_fragment_maps>
  #include <lights_fragment_end>
  #include <aomap_fragment>
  vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
  #include <opaque_fragment>
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>
}`, d0 = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
  varying vec2 vUv;
  uniform mat3 uvTransform;
#endif
void main() {
  #ifdef USE_POINTS_UV
    vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
  #endif
  #include <color_vertex>
  #include <morphinstance_vertex>
  #include <morphcolor_vertex>
  #include <begin_vertex>
  #include <morphtarget_vertex>
  #include <project_vertex>
  gl_PointSize = size;
  #ifdef USE_SIZEATTENUATION
    bool isPerspective = isPerspectiveMatrix( projectionMatrix );
    if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
  #endif
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>
  #include <worldpos_vertex>
  #include <fog_vertex>
}`, f0 = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
  vec4 diffuseColor = vec4( diffuse, opacity );
  #include <clipping_planes_fragment>
  vec3 outgoingLight = vec3( 0.0 );
  #include <logdepthbuf_fragment>
  #include <map_particle_fragment>
  #include <color_fragment>
  #include <alphatest_fragment>
  #include <alphahash_fragment>
  outgoingLight = diffuseColor.rgb;
  #include <opaque_fragment>
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
}`, p0 = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
  #include <batching_vertex>
  #include <beginnormal_vertex>
  #include <morphinstance_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <defaultnormal_vertex>
  #include <begin_vertex>
  #include <morphtarget_vertex>
  #include <skinning_vertex>
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <worldpos_vertex>
  #include <shadowmap_vertex>
  #include <fog_vertex>
}`, m0 = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
  #include <logdepthbuf_fragment>
  gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
}`, _0 = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
  #include <uv_vertex>
  vec4 mvPosition = modelViewMatrix[ 3 ];
  vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
  #ifndef USE_SIZEATTENUATION
    bool isPerspective = isPerspectiveMatrix( projectionMatrix );
    if ( isPerspective ) scale *= - mvPosition.z;
  #endif
  vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
  vec2 rotatedPosition;
  rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
  rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
  mvPosition.xy += rotatedPosition;
  gl_Position = projectionMatrix * mvPosition;
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>
  #include <fog_vertex>
}`, g0 = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
  vec4 diffuseColor = vec4( diffuse, opacity );
  #include <clipping_planes_fragment>
  vec3 outgoingLight = vec3( 0.0 );
  #include <logdepthbuf_fragment>
  #include <map_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
  #include <alphahash_fragment>
  outgoingLight = diffuseColor.rgb;
  #include <opaque_fragment>
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
}`, Ne = {
  alphahash_fragment: km,
  alphahash_pars_fragment: zm,
  alphamap_fragment: Vm,
  alphamap_pars_fragment: Hm,
  alphatest_fragment: Gm,
  alphatest_pars_fragment: Wm,
  aomap_fragment: Xm,
  aomap_pars_fragment: Ym,
  batching_pars_vertex: qm,
  batching_vertex: jm,
  begin_vertex: Km,
  beginnormal_vertex: Zm,
  bsdfs: $m,
  iridescence_fragment: Jm,
  bumpmap_pars_fragment: Qm,
  clipping_planes_fragment: e_,
  clipping_planes_pars_fragment: t_,
  clipping_planes_pars_vertex: n_,
  clipping_planes_vertex: i_,
  color_fragment: s_,
  color_pars_fragment: r_,
  color_pars_vertex: a_,
  color_vertex: o_,
  common: l_,
  cube_uv_reflection_fragment: c_,
  defaultnormal_vertex: h_,
  displacementmap_pars_vertex: u_,
  displacementmap_vertex: d_,
  emissivemap_fragment: f_,
  emissivemap_pars_fragment: p_,
  colorspace_fragment: m_,
  colorspace_pars_fragment: __,
  envmap_fragment: g_,
  envmap_common_pars_fragment: v_,
  envmap_pars_fragment: x_,
  envmap_pars_vertex: y_,
  envmap_physical_pars_fragment: L_,
  envmap_vertex: M_,
  fog_vertex: S_,
  fog_pars_vertex: E_,
  fog_fragment: T_,
  fog_pars_fragment: b_,
  gradientmap_pars_fragment: A_,
  lightmap_pars_fragment: w_,
  lights_lambert_fragment: R_,
  lights_lambert_pars_fragment: C_,
  lights_pars_begin: P_,
  lights_toon_fragment: D_,
  lights_toon_pars_fragment: I_,
  lights_phong_fragment: N_,
  lights_phong_pars_fragment: U_,
  lights_physical_fragment: O_,
  lights_physical_pars_fragment: F_,
  lights_fragment_begin: B_,
  lights_fragment_maps: k_,
  lights_fragment_end: z_,
  logdepthbuf_fragment: V_,
  logdepthbuf_pars_fragment: H_,
  logdepthbuf_pars_vertex: G_,
  logdepthbuf_vertex: W_,
  map_fragment: X_,
  map_pars_fragment: Y_,
  map_particle_fragment: q_,
  map_particle_pars_fragment: j_,
  metalnessmap_fragment: K_,
  metalnessmap_pars_fragment: Z_,
  morphinstance_vertex: $_,
  morphcolor_vertex: J_,
  morphnormal_vertex: Q_,
  morphtarget_pars_vertex: eg,
  morphtarget_vertex: tg,
  normal_fragment_begin: ng,
  normal_fragment_maps: ig,
  normal_pars_fragment: sg,
  normal_pars_vertex: rg,
  normal_vertex: ag,
  normalmap_pars_fragment: og,
  clearcoat_normal_fragment_begin: lg,
  clearcoat_normal_fragment_maps: cg,
  clearcoat_pars_fragment: hg,
  iridescence_pars_fragment: ug,
  opaque_fragment: dg,
  packing: fg,
  premultiplied_alpha_fragment: pg,
  project_vertex: mg,
  dithering_fragment: _g,
  dithering_pars_fragment: gg,
  roughnessmap_fragment: vg,
  roughnessmap_pars_fragment: xg,
  shadowmap_pars_fragment: yg,
  shadowmap_pars_vertex: Mg,
  shadowmap_vertex: Sg,
  shadowmask_pars_fragment: Eg,
  skinbase_vertex: Tg,
  skinning_pars_vertex: bg,
  skinning_vertex: Ag,
  skinnormal_vertex: wg,
  specularmap_fragment: Rg,
  specularmap_pars_fragment: Cg,
  tonemapping_fragment: Pg,
  tonemapping_pars_fragment: Lg,
  transmission_fragment: Dg,
  transmission_pars_fragment: Ig,
  uv_pars_fragment: Ng,
  uv_pars_vertex: Ug,
  uv_vertex: Og,
  worldpos_vertex: Fg,
  background_vert: Bg,
  background_frag: kg,
  backgroundCube_vert: zg,
  backgroundCube_frag: Vg,
  cube_vert: Hg,
  cube_frag: Gg,
  depth_vert: Wg,
  depth_frag: Xg,
  distanceRGBA_vert: Yg,
  distanceRGBA_frag: qg,
  equirect_vert: jg,
  equirect_frag: Kg,
  linedashed_vert: Zg,
  linedashed_frag: $g,
  meshbasic_vert: Jg,
  meshbasic_frag: Qg,
  meshlambert_vert: e0,
  meshlambert_frag: t0,
  meshmatcap_vert: n0,
  meshmatcap_frag: i0,
  meshnormal_vert: s0,
  meshnormal_frag: r0,
  meshphong_vert: a0,
  meshphong_frag: o0,
  meshphysical_vert: l0,
  meshphysical_frag: c0,
  meshtoon_vert: h0,
  meshtoon_frag: u0,
  points_vert: d0,
  points_frag: f0,
  shadow_vert: p0,
  shadow_frag: m0,
  sprite_vert: _0,
  sprite_frag: g0
}, ne = {
  common: {
    diffuse: { value: /* @__PURE__ */ new be(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Ue() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Ue() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new Ue() }
  },
  envmap: {
    envMap: { value: null },
    envMapRotation: { value: /* @__PURE__ */ new Ue() },
    flipEnvMap: { value: -1 },
    reflectivity: { value: 1 },
    // basic, lambert, phong
    ior: { value: 1.5 },
    // physical
    refractionRatio: { value: 0.98 }
    // basic, lambert, phong
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 },
    aoMapTransform: { value: /* @__PURE__ */ new Ue() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new Ue() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new Ue() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new Ue() },
    normalScale: { value: /* @__PURE__ */ new Me(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new Ue() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new Ue() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new Ue() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new Ue() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new be(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMap: { value: [] },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotLightMap: { value: [] },
    spotShadowMap: { value: [] },
    spotLightMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMap: { value: [] },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    // TODO (abelnation): RectAreaLight BRDF data needs to be moved from example to main src
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new be(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Ue() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Ue() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new be(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new Me(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Ue() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Ue() },
    alphaTest: { value: 0 }
  }
}, Nn = {
  basic: {
    uniforms: /* @__PURE__ */ Ft([
      ne.common,
      ne.specularmap,
      ne.envmap,
      ne.aomap,
      ne.lightmap,
      ne.fog
    ]),
    vertexShader: Ne.meshbasic_vert,
    fragmentShader: Ne.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ Ft([
      ne.common,
      ne.specularmap,
      ne.envmap,
      ne.aomap,
      ne.lightmap,
      ne.emissivemap,
      ne.bumpmap,
      ne.normalmap,
      ne.displacementmap,
      ne.fog,
      ne.lights,
      {
        emissive: { value: /* @__PURE__ */ new be(0) }
      }
    ]),
    vertexShader: Ne.meshlambert_vert,
    fragmentShader: Ne.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ Ft([
      ne.common,
      ne.specularmap,
      ne.envmap,
      ne.aomap,
      ne.lightmap,
      ne.emissivemap,
      ne.bumpmap,
      ne.normalmap,
      ne.displacementmap,
      ne.fog,
      ne.lights,
      {
        emissive: { value: /* @__PURE__ */ new be(0) },
        specular: { value: /* @__PURE__ */ new be(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: Ne.meshphong_vert,
    fragmentShader: Ne.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ Ft([
      ne.common,
      ne.envmap,
      ne.aomap,
      ne.lightmap,
      ne.emissivemap,
      ne.bumpmap,
      ne.normalmap,
      ne.displacementmap,
      ne.roughnessmap,
      ne.metalnessmap,
      ne.fog,
      ne.lights,
      {
        emissive: { value: /* @__PURE__ */ new be(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: Ne.meshphysical_vert,
    fragmentShader: Ne.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ Ft([
      ne.common,
      ne.aomap,
      ne.lightmap,
      ne.emissivemap,
      ne.bumpmap,
      ne.normalmap,
      ne.displacementmap,
      ne.gradientmap,
      ne.fog,
      ne.lights,
      {
        emissive: { value: /* @__PURE__ */ new be(0) }
      }
    ]),
    vertexShader: Ne.meshtoon_vert,
    fragmentShader: Ne.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ Ft([
      ne.common,
      ne.bumpmap,
      ne.normalmap,
      ne.displacementmap,
      ne.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Ne.meshmatcap_vert,
    fragmentShader: Ne.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ Ft([
      ne.points,
      ne.fog
    ]),
    vertexShader: Ne.points_vert,
    fragmentShader: Ne.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ Ft([
      ne.common,
      ne.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: Ne.linedashed_vert,
    fragmentShader: Ne.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ Ft([
      ne.common,
      ne.displacementmap
    ]),
    vertexShader: Ne.depth_vert,
    fragmentShader: Ne.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ Ft([
      ne.common,
      ne.bumpmap,
      ne.normalmap,
      ne.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Ne.meshnormal_vert,
    fragmentShader: Ne.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ Ft([
      ne.sprite,
      ne.fog
    ]),
    vertexShader: Ne.sprite_vert,
    fragmentShader: Ne.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new Ue() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Ne.background_vert,
    fragmentShader: Ne.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 },
      backgroundRotation: { value: /* @__PURE__ */ new Ue() }
    },
    vertexShader: Ne.backgroundCube_vert,
    fragmentShader: Ne.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: Ne.cube_vert,
    fragmentShader: Ne.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: Ne.equirect_vert,
    fragmentShader: Ne.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ Ft([
      ne.common,
      ne.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new P() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: Ne.distanceRGBA_vert,
    fragmentShader: Ne.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ Ft([
      ne.lights,
      ne.fog,
      {
        color: { value: /* @__PURE__ */ new be(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Ne.shadow_vert,
    fragmentShader: Ne.shadow_frag
  }
};
Nn.physical = {
  uniforms: /* @__PURE__ */ Ft([
    Nn.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new Ue() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new Ue() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new Me(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new Ue() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new Ue() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new Ue() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new be(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new Ue() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new Ue() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new Ue() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new Me() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new Ue() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new be(0) },
      specularColor: { value: /* @__PURE__ */ new be(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new Ue() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new Ue() },
      anisotropyVector: { value: /* @__PURE__ */ new Me() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new Ue() }
    }
  ]),
  vertexShader: Ne.meshphysical_vert,
  fragmentShader: Ne.meshphysical_frag
};
const ra = { r: 0, b: 0, g: 0 }, Fi = /* @__PURE__ */ new Hn(), v0 = /* @__PURE__ */ new Ie();
function x0(s, e, t, n, i, r, a) {
  const o = new be(0);
  let l = r === !0 ? 0 : 1, c, h, u = null, d = 0, p = null;
  function g(x) {
    let y = x.isScene === !0 ? x.background : null;
    return y && y.isTexture && (y = (x.backgroundBlurriness > 0 ? t : e).get(y)), y;
  }
  function _(x) {
    let y = !1;
    const M = g(x);
    M === null ? m(o, l) : M && M.isColor && (m(M, 1), y = !0);
    const b = s.xr.getEnvironmentBlendMode();
    b === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : b === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a), (s.autoClear || y) && (n.buffers.depth.setTest(!0), n.buffers.depth.setMask(!0), n.buffers.color.setMask(!0), s.clear(s.autoClearColor, s.autoClearDepth, s.autoClearStencil));
  }
  function f(x, y) {
    const M = g(y);
    M && (M.isCubeTexture || M.mapping === qa) ? (h === void 0 && (h = new Xt(
      new Fr(1, 1, 1),
      new wi({
        name: "BackgroundCubeMaterial",
        uniforms: Hs(Nn.backgroundCube.uniforms),
        vertexShader: Nn.backgroundCube.vertexShader,
        fragmentShader: Nn.backgroundCube.fragmentShader,
        side: Yt,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function(b, w, E) {
      this.matrixWorld.copyPosition(E.matrixWorld);
    }, Object.defineProperty(h.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), i.update(h)), Fi.copy(y.backgroundRotation), Fi.x *= -1, Fi.y *= -1, Fi.z *= -1, M.isCubeTexture && M.isRenderTargetTexture === !1 && (Fi.y *= -1, Fi.z *= -1), h.material.uniforms.envMap.value = M, h.material.uniforms.flipEnvMap.value = M.isCubeTexture && M.isRenderTargetTexture === !1 ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = y.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = y.backgroundIntensity, h.material.uniforms.backgroundRotation.value.setFromMatrix4(v0.makeRotationFromEuler(Fi)), h.material.toneMapped = qe.getTransfer(M.colorSpace) !== lt, (u !== M || d !== M.version || p !== s.toneMapping) && (h.material.needsUpdate = !0, u = M, d = M.version, p = s.toneMapping), h.layers.enableAll(), x.unshift(h, h.geometry, h.material, 0, 0, null)) : M && M.isTexture && (c === void 0 && (c = new Xt(
      new Ka(2, 2),
      new wi({
        name: "BackgroundMaterial",
        uniforms: Hs(Nn.background.uniforms),
        vertexShader: Nn.background.vertexShader,
        fragmentShader: Nn.background.fragmentShader,
        side: zn,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), i.update(c)), c.material.uniforms.t2D.value = M, c.material.uniforms.backgroundIntensity.value = y.backgroundIntensity, c.material.toneMapped = qe.getTransfer(M.colorSpace) !== lt, M.matrixAutoUpdate === !0 && M.updateMatrix(), c.material.uniforms.uvTransform.value.copy(M.matrix), (u !== M || d !== M.version || p !== s.toneMapping) && (c.material.needsUpdate = !0, u = M, d = M.version, p = s.toneMapping), c.layers.enableAll(), x.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function m(x, y) {
    x.getRGB(ra, Id(s)), n.buffers.color.setClear(ra.r, ra.g, ra.b, y, a);
  }
  return {
    getClearColor: function() {
      return o;
    },
    setClearColor: function(x, y = 1) {
      o.set(x), l = y, m(o, l);
    },
    getClearAlpha: function() {
      return l;
    },
    setClearAlpha: function(x) {
      l = x, m(o, l);
    },
    render: _,
    addToRenderList: f
  };
}
function y0(s, e) {
  const t = s.getParameter(s.MAX_VERTEX_ATTRIBS), n = {}, i = d(null);
  let r = i, a = !1;
  function o(v, T, F, O, G) {
    let q = !1;
    const z = u(O, F, T);
    r !== z && (r = z, c(r.object)), q = p(v, O, F, G), q && g(v, O, F, G), G !== null && e.update(G, s.ELEMENT_ARRAY_BUFFER), (q || a) && (a = !1, M(v, T, F, O), G !== null && s.bindBuffer(s.ELEMENT_ARRAY_BUFFER, e.get(G).buffer));
  }
  function l() {
    return s.createVertexArray();
  }
  function c(v) {
    return s.bindVertexArray(v);
  }
  function h(v) {
    return s.deleteVertexArray(v);
  }
  function u(v, T, F) {
    const O = F.wireframe === !0;
    let G = n[v.id];
    G === void 0 && (G = {}, n[v.id] = G);
    let q = G[T.id];
    q === void 0 && (q = {}, G[T.id] = q);
    let z = q[O];
    return z === void 0 && (z = d(l()), q[O] = z), z;
  }
  function d(v) {
    const T = [], F = [], O = [];
    for (let G = 0; G < t; G++)
      T[G] = 0, F[G] = 0, O[G] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: T,
      enabledAttributes: F,
      attributeDivisors: O,
      object: v,
      attributes: {},
      index: null
    };
  }
  function p(v, T, F, O) {
    const G = r.attributes, q = T.attributes;
    let z = 0;
    const X = F.getAttributes();
    for (const H in X)
      if (X[H].location >= 0) {
        const se = G[H];
        let ce = q[H];
        if (ce === void 0 && (H === "instanceMatrix" && v.instanceMatrix && (ce = v.instanceMatrix), H === "instanceColor" && v.instanceColor && (ce = v.instanceColor)), se === void 0 || se.attribute !== ce || ce && se.data !== ce.data) return !0;
        z++;
      }
    return r.attributesNum !== z || r.index !== O;
  }
  function g(v, T, F, O) {
    const G = {}, q = T.attributes;
    let z = 0;
    const X = F.getAttributes();
    for (const H in X)
      if (X[H].location >= 0) {
        let se = q[H];
        se === void 0 && (H === "instanceMatrix" && v.instanceMatrix && (se = v.instanceMatrix), H === "instanceColor" && v.instanceColor && (se = v.instanceColor));
        const ce = {};
        ce.attribute = se, se && se.data && (ce.data = se.data), G[H] = ce, z++;
      }
    r.attributes = G, r.attributesNum = z, r.index = O;
  }
  function _() {
    const v = r.newAttributes;
    for (let T = 0, F = v.length; T < F; T++)
      v[T] = 0;
  }
  function f(v) {
    m(v, 0);
  }
  function m(v, T) {
    const F = r.newAttributes, O = r.enabledAttributes, G = r.attributeDivisors;
    F[v] = 1, O[v] === 0 && (s.enableVertexAttribArray(v), O[v] = 1), G[v] !== T && (s.vertexAttribDivisor(v, T), G[v] = T);
  }
  function x() {
    const v = r.newAttributes, T = r.enabledAttributes;
    for (let F = 0, O = T.length; F < O; F++)
      T[F] !== v[F] && (s.disableVertexAttribArray(F), T[F] = 0);
  }
  function y(v, T, F, O, G, q, z) {
    z === !0 ? s.vertexAttribIPointer(v, T, F, G, q) : s.vertexAttribPointer(v, T, F, O, G, q);
  }
  function M(v, T, F, O) {
    _();
    const G = O.attributes, q = F.getAttributes(), z = T.defaultAttributeValues;
    for (const X in q) {
      const H = q[X];
      if (H.location >= 0) {
        let te = G[X];
        if (te === void 0 && (X === "instanceMatrix" && v.instanceMatrix && (te = v.instanceMatrix), X === "instanceColor" && v.instanceColor && (te = v.instanceColor)), te !== void 0) {
          const se = te.normalized, ce = te.itemSize, Oe = e.get(te);
          if (Oe === void 0) continue;
          const We = Oe.buffer, Y = Oe.type, $ = Oe.bytesPerElement, me = Y === s.INT || Y === s.UNSIGNED_INT || te.gpuType === fc;
          if (te.isInterleavedBufferAttribute) {
            const he = te.data, Le = he.stride, Ee = te.offset;
            if (he.isInstancedInterleavedBuffer) {
              for (let Ve = 0; Ve < H.locationSize; Ve++)
                m(H.location + Ve, he.meshPerAttribute);
              v.isInstancedMesh !== !0 && O._maxInstanceCount === void 0 && (O._maxInstanceCount = he.meshPerAttribute * he.count);
            } else
              for (let Ve = 0; Ve < H.locationSize; Ve++)
                f(H.location + Ve);
            s.bindBuffer(s.ARRAY_BUFFER, We);
            for (let Ve = 0; Ve < H.locationSize; Ve++)
              y(
                H.location + Ve,
                ce / H.locationSize,
                Y,
                se,
                Le * $,
                (Ee + ce / H.locationSize * Ve) * $,
                me
              );
          } else {
            if (te.isInstancedBufferAttribute) {
              for (let he = 0; he < H.locationSize; he++)
                m(H.location + he, te.meshPerAttribute);
              v.isInstancedMesh !== !0 && O._maxInstanceCount === void 0 && (O._maxInstanceCount = te.meshPerAttribute * te.count);
            } else
              for (let he = 0; he < H.locationSize; he++)
                f(H.location + he);
            s.bindBuffer(s.ARRAY_BUFFER, We);
            for (let he = 0; he < H.locationSize; he++)
              y(
                H.location + he,
                ce / H.locationSize,
                Y,
                se,
                ce * $,
                ce / H.locationSize * he * $,
                me
              );
          }
        } else if (z !== void 0) {
          const se = z[X];
          if (se !== void 0)
            switch (se.length) {
              case 2:
                s.vertexAttrib2fv(H.location, se);
                break;
              case 3:
                s.vertexAttrib3fv(H.location, se);
                break;
              case 4:
                s.vertexAttrib4fv(H.location, se);
                break;
              default:
                s.vertexAttrib1fv(H.location, se);
            }
        }
      }
    }
    x();
  }
  function b() {
    R();
    for (const v in n) {
      const T = n[v];
      for (const F in T) {
        const O = T[F];
        for (const G in O)
          h(O[G].object), delete O[G];
        delete T[F];
      }
      delete n[v];
    }
  }
  function w(v) {
    if (n[v.id] === void 0) return;
    const T = n[v.id];
    for (const F in T) {
      const O = T[F];
      for (const G in O)
        h(O[G].object), delete O[G];
      delete T[F];
    }
    delete n[v.id];
  }
  function E(v) {
    for (const T in n) {
      const F = n[T];
      if (F[v.id] === void 0) continue;
      const O = F[v.id];
      for (const G in O)
        h(O[G].object), delete O[G];
      delete F[v.id];
    }
  }
  function R() {
    L(), a = !0, r !== i && (r = i, c(r.object));
  }
  function L() {
    i.geometry = null, i.program = null, i.wireframe = !1;
  }
  return {
    setup: o,
    reset: R,
    resetDefaultState: L,
    dispose: b,
    releaseStatesOfGeometry: w,
    releaseStatesOfProgram: E,
    initAttributes: _,
    enableAttribute: f,
    disableUnusedAttributes: x
  };
}
function M0(s, e, t) {
  let n;
  function i(c) {
    n = c;
  }
  function r(c, h) {
    s.drawArrays(n, c, h), t.update(h, n, 1);
  }
  function a(c, h, u) {
    u !== 0 && (s.drawArraysInstanced(n, c, h, u), t.update(h, n, u));
  }
  function o(c, h, u) {
    if (u === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, c, 0, h, 0, u);
    let p = 0;
    for (let g = 0; g < u; g++)
      p += h[g];
    t.update(p, n, 1);
  }
  function l(c, h, u, d) {
    if (u === 0) return;
    const p = e.get("WEBGL_multi_draw");
    if (p === null)
      for (let g = 0; g < c.length; g++)
        a(c[g], h[g], d[g]);
    else {
      p.multiDrawArraysInstancedWEBGL(n, c, 0, h, 0, d, 0, u);
      let g = 0;
      for (let _ = 0; _ < u; _++)
        g += h[_];
      for (let _ = 0; _ < d.length; _++)
        t.update(g, n, d[_]);
    }
  }
  this.setMode = i, this.render = r, this.renderInstances = a, this.renderMultiDraw = o, this.renderMultiDrawInstances = l;
}
function S0(s, e, t, n) {
  let i;
  function r() {
    if (i !== void 0) return i;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const E = e.get("EXT_texture_filter_anisotropic");
      i = s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      i = 0;
    return i;
  }
  function a(E) {
    return !(E !== gn && n.convert(E) !== s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function o(E) {
    const R = E === Or && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(E !== ri && n.convert(E) !== s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
    E !== Rn && !R);
  }
  function l(E) {
    if (E === "highp") {
      if (s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.HIGH_FLOAT).precision > 0 && s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.HIGH_FLOAT).precision > 0)
        return "highp";
      E = "mediump";
    }
    return E === "mediump" && s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.MEDIUM_FLOAT).precision > 0 && s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let c = t.precision !== void 0 ? t.precision : "highp";
  const h = l(c);
  h !== c && (console.warn("THREE.WebGLRenderer:", c, "not supported, using", h, "instead."), c = h);
  const u = t.logarithmicDepthBuffer === !0, d = t.reverseDepthBuffer === !0 && e.has("EXT_clip_control");
  if (d === !0) {
    const E = e.get("EXT_clip_control");
    E.clipControlEXT(E.LOWER_LEFT_EXT, E.ZERO_TO_ONE_EXT);
  }
  const p = s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS), g = s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS), _ = s.getParameter(s.MAX_TEXTURE_SIZE), f = s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE), m = s.getParameter(s.MAX_VERTEX_ATTRIBS), x = s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS), y = s.getParameter(s.MAX_VARYING_VECTORS), M = s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS), b = g > 0, w = s.getParameter(s.MAX_SAMPLES);
  return {
    isWebGL2: !0,
    // keeping this for backwards compatibility
    getMaxAnisotropy: r,
    getMaxPrecision: l,
    textureFormatReadable: a,
    textureTypeReadable: o,
    precision: c,
    logarithmicDepthBuffer: u,
    reverseDepthBuffer: d,
    maxTextures: p,
    maxVertexTextures: g,
    maxTextureSize: _,
    maxCubemapSize: f,
    maxAttributes: m,
    maxVertexUniforms: x,
    maxVaryings: y,
    maxFragmentUniforms: M,
    vertexTextures: b,
    maxSamples: w
  };
}
function E0(s) {
  const e = this;
  let t = null, n = 0, i = !1, r = !1;
  const a = new _i(), o = new Ue(), l = { value: null, needsUpdate: !1 };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(u, d) {
    const p = u.length !== 0 || d || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || i;
    return i = d, n = u.length, p;
  }, this.beginShadows = function() {
    r = !0, h(null);
  }, this.endShadows = function() {
    r = !1;
  }, this.setGlobalState = function(u, d) {
    t = h(u, d, 0);
  }, this.setState = function(u, d, p) {
    const g = u.clippingPlanes, _ = u.clipIntersection, f = u.clipShadows, m = s.get(u);
    if (!i || g === null || g.length === 0 || r && !f)
      r ? h(null) : c();
    else {
      const x = r ? 0 : n, y = x * 4;
      let M = m.clippingState || null;
      l.value = M, M = h(g, d, y, p);
      for (let b = 0; b !== y; ++b)
        M[b] = t[b];
      m.clippingState = M, this.numIntersection = _ ? this.numPlanes : 0, this.numPlanes += x;
    }
  };
  function c() {
    l.value !== t && (l.value = t, l.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function h(u, d, p, g) {
    const _ = u !== null ? u.length : 0;
    let f = null;
    if (_ !== 0) {
      if (f = l.value, g !== !0 || f === null) {
        const m = p + _ * 4, x = d.matrixWorldInverse;
        o.getNormalMatrix(x), (f === null || f.length < m) && (f = new Float32Array(m));
        for (let y = 0, M = p; y !== _; ++y, M += 4)
          a.copy(u[y]).applyMatrix4(x, o), a.normal.toArray(f, M), f[M + 3] = a.constant;
      }
      l.value = f, l.needsUpdate = !0;
    }
    return e.numPlanes = _, e.numIntersection = 0, f;
  }
}
function T0(s) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(a, o) {
    return o === Da ? a.mapping = Os : o === dl && (a.mapping = Fs), a;
  }
  function n(a) {
    if (a && a.isTexture) {
      const o = a.mapping;
      if (o === Da || o === dl)
        if (e.has(a)) {
          const l = e.get(a).texture;
          return t(l, a.mapping);
        } else {
          const l = a.image;
          if (l && l.height > 0) {
            const c = new Um(l.height);
            return c.fromEquirectangularTexture(s, a), e.set(a, c), a.addEventListener("dispose", i), t(c.texture, a.mapping);
          } else
            return null;
        }
    }
    return a;
  }
  function i(a) {
    const o = a.target;
    o.removeEventListener("dispose", i);
    const l = e.get(o);
    l !== void 0 && (e.delete(o), l.dispose());
  }
  function r() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: r
  };
}
class Tc extends Nd {
  constructor(e = -1, t = 1, n = 1, i = -1, r = 0.1, a = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = i, this.near = r, this.far = a, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, n, i, r, a) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2;
    let r = n - e, a = n + e, o = i + t, l = i - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      r += c * this.view.offsetX, a = r + c * this.view.width, o -= h * this.view.offsetY, l = o - h * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(r, a, o, l, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
const Es = 4, kh = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], Xi = 20, Ro = /* @__PURE__ */ new Tc(), zh = /* @__PURE__ */ new be();
let Co = null, Po = 0, Lo = 0, Do = !1;
const Hi = (1 + Math.sqrt(5)) / 2, gs = 1 / Hi, Vh = [
  /* @__PURE__ */ new P(-Hi, gs, 0),
  /* @__PURE__ */ new P(Hi, gs, 0),
  /* @__PURE__ */ new P(-gs, 0, Hi),
  /* @__PURE__ */ new P(gs, 0, Hi),
  /* @__PURE__ */ new P(0, Hi, -gs),
  /* @__PURE__ */ new P(0, Hi, gs),
  /* @__PURE__ */ new P(-1, 1, -1),
  /* @__PURE__ */ new P(1, 1, -1),
  /* @__PURE__ */ new P(-1, 1, 1),
  /* @__PURE__ */ new P(1, 1, 1)
];
class Vl {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  /**
   * Generates a PMREM from a supplied Scene, which can be faster than using an
   * image if networking bandwidth is low. Optional sigma specifies a blur radius
   * in radians to be applied to the scene before PMREM generation. Optional near
   * and far planes ensure the scene is rendered in its entirety (the cubeCamera
   * is placed at the origin).
   */
  fromScene(e, t = 0, n = 0.1, i = 100) {
    Co = this._renderer.getRenderTarget(), Po = this._renderer.getActiveCubeFace(), Lo = this._renderer.getActiveMipmapLevel(), Do = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(256);
    const r = this._allocateTargets();
    return r.depthBuffer = !0, this._sceneToCubeUV(e, n, i, r), t > 0 && this._blur(r, 0, 0, t), this._applyPMREM(r), this._cleanup(r), r;
  }
  /**
   * Generates a PMREM from an equirectangular texture, which can be either LDR
   * or HDR. The ideal input image size is 1k (1024 x 512),
   * as this matches best with the 256 x 256 cubemap output.
   * The smallest supported equirectangular image size is 64 x 32.
   */
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Generates a PMREM from an cubemap texture, which can be either LDR
   * or HDR. The ideal input cube size is 256 x 256,
   * as this matches best with the 256 x 256 cubemap output.
   * The smallest supported cube size is 16 x 16.
   */
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Pre-compiles the cubemap shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = Wh(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Gh(), this._compileMaterial(this._equirectMaterial));
  }
  /**
   * Disposes of the PMREMGenerator's internal memory. Note that PMREMGenerator is a static class,
   * so you should not need more than one PMREMGenerator object. If you do, calling dispose() on
   * one of them will cause any others to also become unusable.
   */
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  // private interface
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(Co, Po, Lo), this._renderer.xr.enabled = Do, e.scissorTest = !1, aa(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === Os || e.mapping === Fs ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), Co = this._renderer.getRenderTarget(), Po = this._renderer.getActiveCubeFace(), Lo = this._renderer.getActiveMipmapLevel(), Do = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
      magFilter: an,
      minFilter: an,
      generateMipmaps: !1,
      type: Or,
      format: gn,
      colorSpace: Lt,
      depthBuffer: !1
    }, i = Hh(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Hh(e, t, n);
      const { _lodMax: r } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = b0(r)), this._blurMaterial = A0(r, e, t);
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new Xt(this._lodPlanes[0], e);
    this._renderer.compile(t, Ro);
  }
  _sceneToCubeUV(e, t, n, i) {
    const o = new Bt(90, 1, t, n), l = [1, -1, 1, 1, 1, 1], c = [1, 1, 1, -1, -1, -1], h = this._renderer, u = h.autoClear, d = h.toneMapping;
    h.getClearColor(zh), h.toneMapping = Ti, h.autoClear = !1;
    const p = new Yi({
      name: "PMREM.Background",
      side: Yt,
      depthWrite: !1,
      depthTest: !1
    }), g = new Xt(new Fr(), p);
    let _ = !1;
    const f = e.background;
    f ? f.isColor && (p.color.copy(f), e.background = null, _ = !0) : (p.color.copy(zh), _ = !0);
    for (let m = 0; m < 6; m++) {
      const x = m % 3;
      x === 0 ? (o.up.set(0, l[m], 0), o.lookAt(c[m], 0, 0)) : x === 1 ? (o.up.set(0, 0, l[m]), o.lookAt(0, c[m], 0)) : (o.up.set(0, l[m], 0), o.lookAt(0, 0, c[m]));
      const y = this._cubeSize;
      aa(i, x * y, m > 2 ? y : 0, y, y), h.setRenderTarget(i), _ && h.render(g, o), h.render(e, o);
    }
    g.geometry.dispose(), g.material.dispose(), h.toneMapping = d, h.autoClear = u, e.background = f;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, i = e.mapping === Os || e.mapping === Fs;
    i ? (this._cubemapMaterial === null && (this._cubemapMaterial = Wh()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Gh());
    const r = i ? this._cubemapMaterial : this._equirectMaterial, a = new Xt(this._lodPlanes[0], r), o = r.uniforms;
    o.envMap.value = e;
    const l = this._cubeSize;
    aa(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(a, Ro);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    const i = this._lodPlanes.length;
    for (let r = 1; r < i; r++) {
      const a = Math.sqrt(this._sigmas[r] * this._sigmas[r] - this._sigmas[r - 1] * this._sigmas[r - 1]), o = Vh[(i - r - 1) % Vh.length];
      this._blur(e, r - 1, r, a, o);
    }
    t.autoClear = n;
  }
  /**
   * This is a two-pass Gaussian blur for a cubemap. Normally this is done
   * vertically and horizontally, but this breaks down on a cube. Here we apply
   * the blur latitudinally (around the poles), and then longitudinally (towards
   * the poles) to approximate the orthogonally-separable blur. It is least
   * accurate at the poles, but still does a decent job.
   */
  _blur(e, t, n, i, r) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(
      e,
      a,
      t,
      n,
      i,
      "latitudinal",
      r
    ), this._halfBlur(
      a,
      e,
      n,
      n,
      i,
      "longitudinal",
      r
    );
  }
  _halfBlur(e, t, n, i, r, a, o) {
    const l = this._renderer, c = this._blurMaterial;
    a !== "latitudinal" && a !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const h = 3, u = new Xt(this._lodPlanes[i], c), d = c.uniforms, p = this._sizeLods[n] - 1, g = isFinite(r) ? Math.PI / (2 * p) : 2 * Math.PI / (2 * Xi - 1), _ = r / g, f = isFinite(r) ? 1 + Math.floor(h * _) : Xi;
    f > Xi && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Xi}`);
    const m = [];
    let x = 0;
    for (let E = 0; E < Xi; ++E) {
      const R = E / _, L = Math.exp(-R * R / 2);
      m.push(L), E === 0 ? x += L : E < f && (x += 2 * L);
    }
    for (let E = 0; E < m.length; E++)
      m[E] = m[E] / x;
    d.envMap.value = e.texture, d.samples.value = f, d.weights.value = m, d.latitudinal.value = a === "latitudinal", o && (d.poleAxis.value = o);
    const { _lodMax: y } = this;
    d.dTheta.value = g, d.mipInt.value = y - n;
    const M = this._sizeLods[i], b = 3 * M * (i > y - Es ? i - y + Es : 0), w = 4 * (this._cubeSize - M);
    aa(t, b, w, 3 * M, 2 * M), l.setRenderTarget(t), l.render(u, Ro);
  }
}
function b0(s) {
  const e = [], t = [], n = [];
  let i = s;
  const r = s - Es + 1 + kh.length;
  for (let a = 0; a < r; a++) {
    const o = Math.pow(2, i);
    t.push(o);
    let l = 1 / o;
    a > s - Es ? l = kh[a - s + Es - 1] : a === 0 && (l = 0), n.push(l);
    const c = 1 / (o - 2), h = -c, u = 1 + c, d = [h, h, u, h, u, u, h, h, u, u, h, u], p = 6, g = 6, _ = 3, f = 2, m = 1, x = new Float32Array(_ * g * p), y = new Float32Array(f * g * p), M = new Float32Array(m * g * p);
    for (let w = 0; w < p; w++) {
      const E = w % 3 * 2 / 3 - 1, R = w > 2 ? 0 : -1, L = [
        E,
        R,
        0,
        E + 2 / 3,
        R,
        0,
        E + 2 / 3,
        R + 1,
        0,
        E,
        R,
        0,
        E + 2 / 3,
        R + 1,
        0,
        E,
        R + 1,
        0
      ];
      x.set(L, _ * g * w), y.set(d, f * g * w);
      const v = [w, w, w, w, w, w];
      M.set(v, m * g * w);
    }
    const b = new Ln();
    b.setAttribute("position", new zt(x, _)), b.setAttribute("uv", new zt(y, f)), b.setAttribute("faceIndex", new zt(M, m)), e.push(b), i > Es && i--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function Hh(s, e, t) {
  const n = new es(s, e, t);
  return n.texture.mapping = qa, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function aa(s, e, t, n, i) {
  s.viewport.set(e, t, n, i), s.scissor.set(e, t, n, i);
}
function A0(s, e, t) {
  const n = new Float32Array(Xi), i = new P(0, 1, 0);
  return new wi({
    name: "SphericalGaussianBlur",
    defines: {
      n: Xi,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${s}.0`
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: i }
    },
    vertexShader: bc(),
    fragmentShader: (
      /* glsl */
      `

      precision mediump float;
      precision mediump int;

      varying vec3 vOutputDirection;

      uniform sampler2D envMap;
      uniform int samples;
      uniform float weights[ n ];
      uniform bool latitudinal;
      uniform float dTheta;
      uniform float mipInt;
      uniform vec3 poleAxis;

      #define ENVMAP_TYPE_CUBE_UV
      #include <cube_uv_reflection_fragment>

      vec3 getSample( float theta, vec3 axis ) {

        float cosTheta = cos( theta );
        // Rodrigues' axis-angle rotation
        vec3 sampleDirection = vOutputDirection * cosTheta
          + cross( axis, vOutputDirection ) * sin( theta )
          + axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

        return bilinearCubeUV( envMap, sampleDirection, mipInt );

      }

      void main() {

        vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

        if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

          axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

        }

        axis = normalize( axis );

        gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
        gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

        for ( int i = 1; i < n; i++ ) {

          if ( i >= samples ) {

            break;

          }

          float theta = dTheta * float( i );
          gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
          gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

        }

      }
    `
    ),
    blending: Ei,
    depthTest: !1,
    depthWrite: !1
  });
}
function Gh() {
  return new wi({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: bc(),
    fragmentShader: (
      /* glsl */
      `

      precision mediump float;
      precision mediump int;

      varying vec3 vOutputDirection;

      uniform sampler2D envMap;

      #include <common>

      void main() {

        vec3 outputDirection = normalize( vOutputDirection );
        vec2 uv = equirectUv( outputDirection );

        gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

      }
    `
    ),
    blending: Ei,
    depthTest: !1,
    depthWrite: !1
  });
}
function Wh() {
  return new wi({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: bc(),
    fragmentShader: (
      /* glsl */
      `

      precision mediump float;
      precision mediump int;

      uniform float flipEnvMap;

      varying vec3 vOutputDirection;

      uniform samplerCube envMap;

      void main() {

        gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

      }
    `
    ),
    blending: Ei,
    depthTest: !1,
    depthWrite: !1
  });
}
function bc() {
  return (
    /* glsl */
    `

    precision mediump float;
    precision mediump int;

    attribute float faceIndex;

    varying vec3 vOutputDirection;

    // RH coordinate system; PMREM face-indexing convention
    vec3 getDirection( vec2 uv, float face ) {

      uv = 2.0 * uv - 1.0;

      vec3 direction = vec3( uv, 1.0 );

      if ( face == 0.0 ) {

        direction = direction.zyx; // ( 1, v, u ) pos x

      } else if ( face == 1.0 ) {

        direction = direction.xzy;
        direction.xz *= -1.0; // ( -u, 1, -v ) pos y

      } else if ( face == 2.0 ) {

        direction.x *= -1.0; // ( -u, v, 1 ) pos z

      } else if ( face == 3.0 ) {

        direction = direction.zyx;
        direction.xz *= -1.0; // ( -1, v, -u ) neg x

      } else if ( face == 4.0 ) {

        direction = direction.xzy;
        direction.xy *= -1.0; // ( -u, -1, v ) neg y

      } else if ( face == 5.0 ) {

        direction.z *= -1.0; // ( u, v, -1 ) neg z

      }

      return direction;

    }

    void main() {

      vOutputDirection = getDirection( uv, faceIndex );
      gl_Position = vec4( position, 1.0 );

    }
  `
  );
}
function w0(s) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(o) {
    if (o && o.isTexture) {
      const l = o.mapping, c = l === Da || l === dl, h = l === Os || l === Fs;
      if (c || h) {
        let u = e.get(o);
        const d = u !== void 0 ? u.texture.pmremVersion : 0;
        if (o.isRenderTargetTexture && o.pmremVersion !== d)
          return t === null && (t = new Vl(s)), u = c ? t.fromEquirectangular(o, u) : t.fromCubemap(o, u), u.texture.pmremVersion = o.pmremVersion, e.set(o, u), u.texture;
        if (u !== void 0)
          return u.texture;
        {
          const p = o.image;
          return c && p && p.height > 0 || h && p && i(p) ? (t === null && (t = new Vl(s)), u = c ? t.fromEquirectangular(o) : t.fromCubemap(o), u.texture.pmremVersion = o.pmremVersion, e.set(o, u), o.addEventListener("dispose", r), u.texture) : null;
        }
      }
    }
    return o;
  }
  function i(o) {
    let l = 0;
    const c = 6;
    for (let h = 0; h < c; h++)
      o[h] !== void 0 && l++;
    return l === c;
  }
  function r(o) {
    const l = o.target;
    l.removeEventListener("dispose", r);
    const c = e.get(l);
    c !== void 0 && (e.delete(l), c.dispose());
  }
  function a() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return {
    get: n,
    dispose: a
  };
}
function R0(s) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0)
      return e[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i = s.getExtension("WEBGL_depth_texture") || s.getExtension("MOZ_WEBGL_depth_texture") || s.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i = s.getExtension("EXT_texture_filter_anisotropic") || s.getExtension("MOZ_EXT_texture_filter_anisotropic") || s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i = s.getExtension("WEBGL_compressed_texture_s3tc") || s.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i = s.getExtension("WEBGL_compressed_texture_pvrtc") || s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = s.getExtension(n);
    }
    return e[n] = i, i;
  }
  return {
    has: function(n) {
      return t(n) !== null;
    },
    init: function() {
      t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance"), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture"), t("WEBGL_render_shared_exponent");
    },
    get: function(n) {
      const i = t(n);
      return i === null && ba("THREE.WebGLRenderer: " + n + " extension not supported."), i;
    }
  };
}
function C0(s, e, t, n) {
  const i = {}, r = /* @__PURE__ */ new WeakMap();
  function a(u) {
    const d = u.target;
    d.index !== null && e.remove(d.index);
    for (const g in d.attributes)
      e.remove(d.attributes[g]);
    for (const g in d.morphAttributes) {
      const _ = d.morphAttributes[g];
      for (let f = 0, m = _.length; f < m; f++)
        e.remove(_[f]);
    }
    d.removeEventListener("dispose", a), delete i[d.id];
    const p = r.get(d);
    p && (e.remove(p), r.delete(d)), n.releaseStatesOfGeometry(d), d.isInstancedBufferGeometry === !0 && delete d._maxInstanceCount, t.memory.geometries--;
  }
  function o(u, d) {
    return i[d.id] === !0 || (d.addEventListener("dispose", a), i[d.id] = !0, t.memory.geometries++), d;
  }
  function l(u) {
    const d = u.attributes;
    for (const g in d)
      e.update(d[g], s.ARRAY_BUFFER);
    const p = u.morphAttributes;
    for (const g in p) {
      const _ = p[g];
      for (let f = 0, m = _.length; f < m; f++)
        e.update(_[f], s.ARRAY_BUFFER);
    }
  }
  function c(u) {
    const d = [], p = u.index, g = u.attributes.position;
    let _ = 0;
    if (p !== null) {
      const x = p.array;
      _ = p.version;
      for (let y = 0, M = x.length; y < M; y += 3) {
        const b = x[y + 0], w = x[y + 1], E = x[y + 2];
        d.push(b, w, w, E, E, b);
      }
    } else if (g !== void 0) {
      const x = g.array;
      _ = g.version;
      for (let y = 0, M = x.length / 3 - 1; y < M; y += 3) {
        const b = y + 0, w = y + 1, E = y + 2;
        d.push(b, w, w, E, E, b);
      }
    } else
      return;
    const f = new (wd(d) ? Dd : Ld)(d, 1);
    f.version = _;
    const m = r.get(u);
    m && e.remove(m), r.set(u, f);
  }
  function h(u) {
    const d = r.get(u);
    if (d) {
      const p = u.index;
      p !== null && d.version < p.version && c(u);
    } else
      c(u);
    return r.get(u);
  }
  return {
    get: o,
    update: l,
    getWireframeAttribute: h
  };
}
function P0(s, e, t) {
  let n;
  function i(d) {
    n = d;
  }
  let r, a;
  function o(d) {
    r = d.type, a = d.bytesPerElement;
  }
  function l(d, p) {
    s.drawElements(n, p, r, d * a), t.update(p, n, 1);
  }
  function c(d, p, g) {
    g !== 0 && (s.drawElementsInstanced(n, p, r, d * a, g), t.update(p, n, g));
  }
  function h(d, p, g) {
    if (g === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, p, 0, r, d, 0, g);
    let f = 0;
    for (let m = 0; m < g; m++)
      f += p[m];
    t.update(f, n, 1);
  }
  function u(d, p, g, _) {
    if (g === 0) return;
    const f = e.get("WEBGL_multi_draw");
    if (f === null)
      for (let m = 0; m < d.length; m++)
        c(d[m] / a, p[m], _[m]);
    else {
      f.multiDrawElementsInstancedWEBGL(n, p, 0, r, d, 0, _, 0, g);
      let m = 0;
      for (let x = 0; x < g; x++)
        m += p[x];
      for (let x = 0; x < _.length; x++)
        t.update(m, n, _[x]);
    }
  }
  this.setMode = i, this.setIndex = o, this.render = l, this.renderInstances = c, this.renderMultiDraw = h, this.renderMultiDrawInstances = u;
}
function L0(s) {
  const e = {
    geometries: 0,
    textures: 0
  }, t = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function n(r, a, o) {
    switch (t.calls++, a) {
      case s.TRIANGLES:
        t.triangles += o * (r / 3);
        break;
      case s.LINES:
        t.lines += o * (r / 2);
        break;
      case s.LINE_STRIP:
        t.lines += o * (r - 1);
        break;
      case s.LINE_LOOP:
        t.lines += o * r;
        break;
      case s.POINTS:
        t.points += o * r;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function i() {
    t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: i,
    update: n
  };
}
function D0(s, e, t) {
  const n = /* @__PURE__ */ new WeakMap(), i = new Ke();
  function r(a, o, l) {
    const c = a.morphTargetInfluences, h = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, u = h !== void 0 ? h.length : 0;
    let d = n.get(o);
    if (d === void 0 || d.count !== u) {
      let v = function() {
        R.dispose(), n.delete(o), o.removeEventListener("dispose", v);
      };
      var p = v;
      d !== void 0 && d.texture.dispose();
      const g = o.morphAttributes.position !== void 0, _ = o.morphAttributes.normal !== void 0, f = o.morphAttributes.color !== void 0, m = o.morphAttributes.position || [], x = o.morphAttributes.normal || [], y = o.morphAttributes.color || [];
      let M = 0;
      g === !0 && (M = 1), _ === !0 && (M = 2), f === !0 && (M = 3);
      let b = o.attributes.position.count * M, w = 1;
      b > e.maxTextureSize && (w = Math.ceil(b / e.maxTextureSize), b = e.maxTextureSize);
      const E = new Float32Array(b * w * 4 * u), R = new Cd(E, b, w, u);
      R.type = Rn, R.needsUpdate = !0;
      const L = M * 4;
      for (let T = 0; T < u; T++) {
        const F = m[T], O = x[T], G = y[T], q = b * w * 4 * T;
        for (let z = 0; z < F.count; z++) {
          const X = z * L;
          g === !0 && (i.fromBufferAttribute(F, z), E[q + X + 0] = i.x, E[q + X + 1] = i.y, E[q + X + 2] = i.z, E[q + X + 3] = 0), _ === !0 && (i.fromBufferAttribute(O, z), E[q + X + 4] = i.x, E[q + X + 5] = i.y, E[q + X + 6] = i.z, E[q + X + 7] = 0), f === !0 && (i.fromBufferAttribute(G, z), E[q + X + 8] = i.x, E[q + X + 9] = i.y, E[q + X + 10] = i.z, E[q + X + 11] = G.itemSize === 4 ? i.w : 1);
        }
      }
      d = {
        count: u,
        texture: R,
        size: new Me(b, w)
      }, n.set(o, d), o.addEventListener("dispose", v);
    }
    if (a.isInstancedMesh === !0 && a.morphTexture !== null)
      l.getUniforms().setValue(s, "morphTexture", a.morphTexture, t);
    else {
      let g = 0;
      for (let f = 0; f < c.length; f++)
        g += c[f];
      const _ = o.morphTargetsRelative ? 1 : 1 - g;
      l.getUniforms().setValue(s, "morphTargetBaseInfluence", _), l.getUniforms().setValue(s, "morphTargetInfluences", c);
    }
    l.getUniforms().setValue(s, "morphTargetsTexture", d.texture, t), l.getUniforms().setValue(s, "morphTargetsTextureSize", d.size);
  }
  return {
    update: r
  };
}
function I0(s, e, t, n) {
  let i = /* @__PURE__ */ new WeakMap();
  function r(l) {
    const c = n.render.frame, h = l.geometry, u = e.get(l, h);
    if (i.get(u) !== c && (e.update(u), i.set(u, c)), l.isInstancedMesh && (l.hasEventListener("dispose", o) === !1 && l.addEventListener("dispose", o), i.get(l) !== c && (t.update(l.instanceMatrix, s.ARRAY_BUFFER), l.instanceColor !== null && t.update(l.instanceColor, s.ARRAY_BUFFER), i.set(l, c))), l.isSkinnedMesh) {
      const d = l.skeleton;
      i.get(d) !== c && (d.update(), i.set(d, c));
    }
    return u;
  }
  function a() {
    i = /* @__PURE__ */ new WeakMap();
  }
  function o(l) {
    const c = l.target;
    c.removeEventListener("dispose", o), t.remove(c.instanceMatrix), c.instanceColor !== null && t.remove(c.instanceColor);
  }
  return {
    update: r,
    dispose: a
  };
}
class Fd extends St {
  constructor(e, t, n, i, r, a, o, l, c, h = Rs) {
    if (h !== Rs && h !== zs)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && h === Rs && (n = Qi), n === void 0 && h === zs && (n = ks), super(null, i, r, a, o, l, h, n, c), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = o !== void 0 ? o : kt, this.minFilter = l !== void 0 ? l : kt, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
const Bd = /* @__PURE__ */ new St(), Xh = /* @__PURE__ */ new Fd(1, 1), kd = /* @__PURE__ */ new Cd(), zd = /* @__PURE__ */ new xm(), Vd = /* @__PURE__ */ new Ud(), Yh = [], qh = [], jh = new Float32Array(16), Kh = new Float32Array(9), Zh = new Float32Array(4);
function Js(s, e, t) {
  const n = s[0];
  if (n <= 0 || n > 0) return s;
  const i = e * t;
  let r = Yh[i];
  if (r === void 0 && (r = new Float32Array(i), Yh[i] = r), e !== 0) {
    n.toArray(r, 0);
    for (let a = 1, o = 0; a !== e; ++a)
      o += t, s[a].toArray(r, o);
  }
  return r;
}
function Et(s, e) {
  if (s.length !== e.length) return !1;
  for (let t = 0, n = s.length; t < n; t++)
    if (s[t] !== e[t]) return !1;
  return !0;
}
function Tt(s, e) {
  for (let t = 0, n = e.length; t < n; t++)
    s[t] = e[t];
}
function Za(s, e) {
  let t = qh[e];
  t === void 0 && (t = new Int32Array(e), qh[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = s.allocateTextureUnit();
  return t;
}
function N0(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1f(this.addr, e), t[0] = e);
}
function U0(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (s.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (Et(t, e)) return;
    s.uniform2fv(this.addr, e), Tt(t, e);
  }
}
function O0(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (s.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (Et(t, e)) return;
    s.uniform3fv(this.addr, e), Tt(t, e);
  }
}
function F0(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (Et(t, e)) return;
    s.uniform4fv(this.addr, e), Tt(t, e);
  }
}
function B0(s, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (Et(t, e)) return;
    s.uniformMatrix2fv(this.addr, !1, e), Tt(t, e);
  } else {
    if (Et(t, n)) return;
    Zh.set(n), s.uniformMatrix2fv(this.addr, !1, Zh), Tt(t, n);
  }
}
function k0(s, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (Et(t, e)) return;
    s.uniformMatrix3fv(this.addr, !1, e), Tt(t, e);
  } else {
    if (Et(t, n)) return;
    Kh.set(n), s.uniformMatrix3fv(this.addr, !1, Kh), Tt(t, n);
  }
}
function z0(s, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (Et(t, e)) return;
    s.uniformMatrix4fv(this.addr, !1, e), Tt(t, e);
  } else {
    if (Et(t, n)) return;
    jh.set(n), s.uniformMatrix4fv(this.addr, !1, jh), Tt(t, n);
  }
}
function V0(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1i(this.addr, e), t[0] = e);
}
function H0(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (s.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (Et(t, e)) return;
    s.uniform2iv(this.addr, e), Tt(t, e);
  }
}
function G0(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (Et(t, e)) return;
    s.uniform3iv(this.addr, e), Tt(t, e);
  }
}
function W0(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (Et(t, e)) return;
    s.uniform4iv(this.addr, e), Tt(t, e);
  }
}
function X0(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1ui(this.addr, e), t[0] = e);
}
function Y0(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (s.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (Et(t, e)) return;
    s.uniform2uiv(this.addr, e), Tt(t, e);
  }
}
function q0(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (Et(t, e)) return;
    s.uniform3uiv(this.addr, e), Tt(t, e);
  }
}
function j0(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (Et(t, e)) return;
    s.uniform4uiv(this.addr, e), Tt(t, e);
  }
}
function K0(s, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i);
  let r;
  this.type === s.SAMPLER_2D_SHADOW ? (Xh.compareFunction = Ad, r = Xh) : r = Bd, t.setTexture2D(e || r, i);
}
function Z0(s, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || zd, i);
}
function $0(s, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTextureCube(e || Vd, i);
}
function J0(s, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || kd, i);
}
function Q0(s) {
  switch (s) {
    case 5126:
      return N0;
    case 35664:
      return U0;
    case 35665:
      return O0;
    case 35666:
      return F0;
    case 35674:
      return B0;
    case 35675:
      return k0;
    case 35676:
      return z0;
    case 5124:
    case 35670:
      return V0;
    case 35667:
    case 35671:
      return H0;
    case 35668:
    case 35672:
      return G0;
    case 35669:
    case 35673:
      return W0;
    case 5125:
      return X0;
    case 36294:
      return Y0;
    case 36295:
      return q0;
    case 36296:
      return j0;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return K0;
    case 35679:
    case 36299:
    case 36307:
      return Z0;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return $0;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return J0;
  }
}
function ev(s, e) {
  s.uniform1fv(this.addr, e);
}
function tv(s, e) {
  const t = Js(e, this.size, 2);
  s.uniform2fv(this.addr, t);
}
function nv(s, e) {
  const t = Js(e, this.size, 3);
  s.uniform3fv(this.addr, t);
}
function iv(s, e) {
  const t = Js(e, this.size, 4);
  s.uniform4fv(this.addr, t);
}
function sv(s, e) {
  const t = Js(e, this.size, 4);
  s.uniformMatrix2fv(this.addr, !1, t);
}
function rv(s, e) {
  const t = Js(e, this.size, 9);
  s.uniformMatrix3fv(this.addr, !1, t);
}
function av(s, e) {
  const t = Js(e, this.size, 16);
  s.uniformMatrix4fv(this.addr, !1, t);
}
function ov(s, e) {
  s.uniform1iv(this.addr, e);
}
function lv(s, e) {
  s.uniform2iv(this.addr, e);
}
function cv(s, e) {
  s.uniform3iv(this.addr, e);
}
function hv(s, e) {
  s.uniform4iv(this.addr, e);
}
function uv(s, e) {
  s.uniform1uiv(this.addr, e);
}
function dv(s, e) {
  s.uniform2uiv(this.addr, e);
}
function fv(s, e) {
  s.uniform3uiv(this.addr, e);
}
function pv(s, e) {
  s.uniform4uiv(this.addr, e);
}
function mv(s, e, t) {
  const n = this.cache, i = e.length, r = Za(t, i);
  Et(n, r) || (s.uniform1iv(this.addr, r), Tt(n, r));
  for (let a = 0; a !== i; ++a)
    t.setTexture2D(e[a] || Bd, r[a]);
}
function _v(s, e, t) {
  const n = this.cache, i = e.length, r = Za(t, i);
  Et(n, r) || (s.uniform1iv(this.addr, r), Tt(n, r));
  for (let a = 0; a !== i; ++a)
    t.setTexture3D(e[a] || zd, r[a]);
}
function gv(s, e, t) {
  const n = this.cache, i = e.length, r = Za(t, i);
  Et(n, r) || (s.uniform1iv(this.addr, r), Tt(n, r));
  for (let a = 0; a !== i; ++a)
    t.setTextureCube(e[a] || Vd, r[a]);
}
function vv(s, e, t) {
  const n = this.cache, i = e.length, r = Za(t, i);
  Et(n, r) || (s.uniform1iv(this.addr, r), Tt(n, r));
  for (let a = 0; a !== i; ++a)
    t.setTexture2DArray(e[a] || kd, r[a]);
}
function xv(s) {
  switch (s) {
    case 5126:
      return ev;
    case 35664:
      return tv;
    case 35665:
      return nv;
    case 35666:
      return iv;
    case 35674:
      return sv;
    case 35675:
      return rv;
    case 35676:
      return av;
    case 5124:
    case 35670:
      return ov;
    case 35667:
    case 35671:
      return lv;
    case 35668:
    case 35672:
      return cv;
    case 35669:
    case 35673:
      return hv;
    case 5125:
      return uv;
    case 36294:
      return dv;
    case 36295:
      return fv;
    case 36296:
      return pv;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return mv;
    case 35679:
    case 36299:
    case 36307:
      return _v;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return gv;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return vv;
  }
}
class yv {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = Q0(t.type);
  }
}
class Mv {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = xv(t.type);
  }
}
class Sv {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const i = this.seq;
    for (let r = 0, a = i.length; r !== a; ++r) {
      const o = i[r];
      o.setValue(e, t[o.id], n);
    }
  }
}
const Io = /(\w+)(\])?(\[|\.)?/g;
function $h(s, e) {
  s.seq.push(e), s.map[e.id] = e;
}
function Ev(s, e, t) {
  const n = s.name, i = n.length;
  for (Io.lastIndex = 0; ; ) {
    const r = Io.exec(n), a = Io.lastIndex;
    let o = r[1];
    const l = r[2] === "]", c = r[3];
    if (l && (o = o | 0), c === void 0 || c === "[" && a + 2 === i) {
      $h(t, c === void 0 ? new yv(o, s, e) : new Mv(o, s, e));
      break;
    } else {
      let u = t.map[o];
      u === void 0 && (u = new Sv(o), $h(t, u)), t = u;
    }
  }
}
class Aa {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let i = 0; i < n; ++i) {
      const r = e.getActiveUniform(t, i), a = e.getUniformLocation(t, r.name);
      Ev(r, a, this);
    }
  }
  setValue(e, t, n, i) {
    const r = this.map[t];
    r !== void 0 && r.setValue(e, n, i);
  }
  setOptional(e, t, n) {
    const i = t[n];
    i !== void 0 && this.setValue(e, n, i);
  }
  static upload(e, t, n, i) {
    for (let r = 0, a = t.length; r !== a; ++r) {
      const o = t[r], l = n[o.id];
      l.needsUpdate !== !1 && o.setValue(e, l.value, i);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let i = 0, r = e.length; i !== r; ++i) {
      const a = e[i];
      a.id in t && n.push(a);
    }
    return n;
  }
}
function Jh(s, e, t) {
  const n = s.createShader(e);
  return s.shaderSource(n, t), s.compileShader(n), n;
}
const Tv = 37297;
let bv = 0;
function Av(s, e) {
  const t = s.split(`
`), n = [], i = Math.max(e - 6, 0), r = Math.min(e + 6, t.length);
  for (let a = i; a < r; a++) {
    const o = a + 1;
    n.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`);
  }
  return n.join(`
`);
}
function wv(s) {
  const e = qe.getPrimaries(qe.workingColorSpace), t = qe.getPrimaries(s);
  let n;
  switch (e === t ? n = "" : e === Oa && t === Ua ? n = "LinearDisplayP3ToLinearSRGB" : e === Ua && t === Oa && (n = "LinearSRGBToLinearDisplayP3"), s) {
    case Lt:
    case ja:
      return [n, "LinearTransferOETF"];
    case Rt:
    case yc:
      return [n, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space:", s), [n, "LinearTransferOETF"];
  }
}
function Qh(s, e, t) {
  const n = s.getShaderParameter(e, s.COMPILE_STATUS), i = s.getShaderInfoLog(e).trim();
  if (n && i === "") return "";
  const r = /ERROR: 0:(\d+)/.exec(i);
  if (r) {
    const a = parseInt(r[1]);
    return t.toUpperCase() + `

` + i + `

` + Av(s.getShaderSource(e), a);
  } else
    return i;
}
function Rv(s, e) {
  const t = wv(e);
  return `vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`;
}
function Cv(s, e) {
  let t;
  switch (e) {
    case Cp:
      t = "Linear";
      break;
    case Pp:
      t = "Reinhard";
      break;
    case Lp:
      t = "Cineon";
      break;
    case dd:
      t = "ACESFilmic";
      break;
    case Ip:
      t = "AgX";
      break;
    case Np:
      t = "Neutral";
      break;
    case Dp:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + s + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
const oa = /* @__PURE__ */ new P();
function Pv() {
  qe.getLuminanceCoefficients(oa);
  const s = oa.x.toFixed(4), e = oa.y.toFixed(4), t = oa.z.toFixed(4);
  return [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,
    "	return dot( weights, rgb );",
    "}"
  ].join(`
`);
}
function Lv(s) {
  return [
    s.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "",
    s.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""
  ].filter(mr).join(`
`);
}
function Dv(s) {
  const e = [];
  for (const t in s) {
    const n = s[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function Iv(s, e) {
  const t = {}, n = s.getProgramParameter(e, s.ACTIVE_ATTRIBUTES);
  for (let i = 0; i < n; i++) {
    const r = s.getActiveAttrib(e, i), a = r.name;
    let o = 1;
    r.type === s.FLOAT_MAT2 && (o = 2), r.type === s.FLOAT_MAT3 && (o = 3), r.type === s.FLOAT_MAT4 && (o = 4), t[a] = {
      type: r.type,
      location: s.getAttribLocation(e, a),
      locationSize: o
    };
  }
  return t;
}
function mr(s) {
  return s !== "";
}
function eu(s, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return s.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function tu(s, e) {
  return s.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const Nv = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Hl(s) {
  return s.replace(Nv, Ov);
}
const Uv = /* @__PURE__ */ new Map();
function Ov(s, e) {
  let t = Ne[e];
  if (t === void 0) {
    const n = Uv.get(e);
    if (n !== void 0)
      t = Ne[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else
      throw new Error("Can not resolve #include <" + e + ">");
  }
  return Hl(t);
}
const Fv = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function nu(s) {
  return s.replace(Fv, Bv);
}
function Bv(s, e, t, n) {
  let i = "";
  for (let r = parseInt(e); r < parseInt(t); r++)
    i += n.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r);
  return i;
}
function iu(s) {
  let e = `precision ${s.precision} float;
  precision ${s.precision} int;
  precision ${s.precision} sampler2D;
  precision ${s.precision} samplerCube;
  precision ${s.precision} sampler3D;
  precision ${s.precision} sampler2DArray;
  precision ${s.precision} sampler2DShadow;
  precision ${s.precision} samplerCubeShadow;
  precision ${s.precision} sampler2DArrayShadow;
  precision ${s.precision} isampler2D;
  precision ${s.precision} isampler3D;
  precision ${s.precision} isamplerCube;
  precision ${s.precision} isampler2DArray;
  precision ${s.precision} usampler2D;
  precision ${s.precision} usampler3D;
  precision ${s.precision} usamplerCube;
  precision ${s.precision} usampler2DArray;
  `;
  return s.precision === "highp" ? e += `
#define HIGH_PRECISION` : s.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : s.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function kv(s) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return s.shadowMapType === cd ? e = "SHADOWMAP_TYPE_PCF" : s.shadowMapType === hd ? e = "SHADOWMAP_TYPE_PCF_SOFT" : s.shadowMapType === Qn && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function zv(s) {
  let e = "ENVMAP_TYPE_CUBE";
  if (s.envMap)
    switch (s.envMapMode) {
      case Os:
      case Fs:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case qa:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function Vv(s) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (s.envMap)
    switch (s.envMapMode) {
      case Fs:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function Hv(s) {
  let e = "ENVMAP_BLENDING_NONE";
  if (s.envMap)
    switch (s.combine) {
      case ud:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case wp:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case Rp:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function Gv(s) {
  const e = s.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function Wv(s, e, t, n) {
  const i = s.getContext(), r = t.defines;
  let a = t.vertexShader, o = t.fragmentShader;
  const l = kv(t), c = zv(t), h = Vv(t), u = Hv(t), d = Gv(t), p = Lv(t), g = Dv(r), _ = i.createProgram();
  let f, m, x = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (f = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g
  ].filter(mr).join(`
`), f.length > 0 && (f += `
`), m = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g
  ].filter(mr).join(`
`), m.length > 0 && (m += `
`)) : (f = [
    iu(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g,
    t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
    t.batching ? "#define USE_BATCHING" : "",
    t.batchingColor ? "#define USE_BATCHING_COLOR" : "",
    t.instancing ? "#define USE_INSTANCING" : "",
    t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + h : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    //
    t.mapUv ? "#define MAP_UV " + t.mapUv : "",
    t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
    t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
    t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
    t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
    t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
    t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
    t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "",
    t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
    t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
    t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "",
    t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
    t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "",
    t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "",
    t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "",
    t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "",
    t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "",
    t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "",
    t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
    t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "",
    t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "",
    t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "",
    t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
    //
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.skinning ? "#define USE_SKINNING" : "",
    t.morphTargets ? "#define USE_MORPHTARGETS" : "",
    t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    t.morphColors ? "#define USE_MORPHCOLORS" : "",
    t.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "",
    t.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + l : "",
    t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
    "uniform mat4 modelMatrix;",
    "uniform mat4 modelViewMatrix;",
    "uniform mat4 projectionMatrix;",
    "uniform mat4 viewMatrix;",
    "uniform mat3 normalMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    "#ifdef USE_INSTANCING",
    "	attribute mat4 instanceMatrix;",
    "#endif",
    "#ifdef USE_INSTANCING_COLOR",
    "	attribute vec3 instanceColor;",
    "#endif",
    "#ifdef USE_INSTANCING_MORPH",
    "	uniform sampler2D morphTexture;",
    "#endif",
    "attribute vec3 position;",
    "attribute vec3 normal;",
    "attribute vec2 uv;",
    "#ifdef USE_UV1",
    "	attribute vec2 uv1;",
    "#endif",
    "#ifdef USE_UV2",
    "	attribute vec2 uv2;",
    "#endif",
    "#ifdef USE_UV3",
    "	attribute vec2 uv3;",
    "#endif",
    "#ifdef USE_TANGENT",
    "	attribute vec4 tangent;",
    "#endif",
    "#if defined( USE_COLOR_ALPHA )",
    "	attribute vec4 color;",
    "#elif defined( USE_COLOR )",
    "	attribute vec3 color;",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(mr).join(`
`), m = [
    iu(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + c : "",
    t.envMap ? "#define " + h : "",
    t.envMap ? "#define " + u : "",
    d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "",
    d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "",
    d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoat ? "#define USE_CLEARCOAT" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.dispersion ? "#define USE_DISPERSION" : "",
    t.iridescence ? "#define USE_IRIDESCENCE" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaTest ? "#define USE_ALPHATEST" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.sheen ? "#define USE_SHEEN" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors || t.instancingColor || t.batchingColor ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.gradientMap ? "#define USE_GRADIENTMAP" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + l : "",
    t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    t.toneMapping !== Ti ? "#define TONE_MAPPING" : "",
    t.toneMapping !== Ti ? Ne.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    t.toneMapping !== Ti ? Cv("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    Ne.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    Rv("linearToOutputTexel", t.outputColorSpace),
    Pv(),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(mr).join(`
`)), a = Hl(a), a = eu(a, t), a = tu(a, t), o = Hl(o), o = eu(o, t), o = tu(o, t), a = nu(a), o = nu(o), t.isRawShaderMaterial !== !0 && (x = `#version 300 es
`, f = [
    p,
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + f, m = [
    "#define varying in",
    t.glslVersion === yh ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === yh ? "" : "#define gl_FragColor pc_fragColor",
    "#define gl_FragDepthEXT gl_FragDepth",
    "#define texture2D texture",
    "#define textureCube texture",
    "#define texture2DProj textureProj",
    "#define texture2DLodEXT textureLod",
    "#define texture2DProjLodEXT textureProjLod",
    "#define textureCubeLodEXT textureLod",
    "#define texture2DGradEXT textureGrad",
    "#define texture2DProjGradEXT textureProjGrad",
    "#define textureCubeGradEXT textureGrad"
  ].join(`
`) + `
` + m);
  const y = x + f + a, M = x + m + o, b = Jh(i, i.VERTEX_SHADER, y), w = Jh(i, i.FRAGMENT_SHADER, M);
  i.attachShader(_, b), i.attachShader(_, w), t.index0AttributeName !== void 0 ? i.bindAttribLocation(_, 0, t.index0AttributeName) : t.morphTargets === !0 && i.bindAttribLocation(_, 0, "position"), i.linkProgram(_);
  function E(T) {
    if (s.debug.checkShaderErrors) {
      const F = i.getProgramInfoLog(_).trim(), O = i.getShaderInfoLog(b).trim(), G = i.getShaderInfoLog(w).trim();
      let q = !0, z = !0;
      if (i.getProgramParameter(_, i.LINK_STATUS) === !1)
        if (q = !1, typeof s.debug.onShaderError == "function")
          s.debug.onShaderError(i, _, b, w);
        else {
          const X = Qh(i, b, "vertex"), H = Qh(i, w, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(_, i.VALIDATE_STATUS) + `

Material Name: ` + T.name + `
Material Type: ` + T.type + `

Program Info Log: ` + F + `
` + X + `
` + H
          );
        }
      else F !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", F) : (O === "" || G === "") && (z = !1);
      z && (T.diagnostics = {
        runnable: q,
        programLog: F,
        vertexShader: {
          log: O,
          prefix: f
        },
        fragmentShader: {
          log: G,
          prefix: m
        }
      });
    }
    i.deleteShader(b), i.deleteShader(w), R = new Aa(i, _), L = Iv(i, _);
  }
  let R;
  this.getUniforms = function() {
    return R === void 0 && E(this), R;
  };
  let L;
  this.getAttributes = function() {
    return L === void 0 && E(this), L;
  };
  let v = t.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return v === !1 && (v = i.getProgramParameter(_, Tv)), v;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), i.deleteProgram(_), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = bv++, this.cacheKey = e, this.usedTimes = 1, this.program = _, this.vertexShader = b, this.fragmentShader = w, this;
}
let Xv = 0;
class Yv {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, n = e.fragmentShader, i = this._getShaderStage(t), r = this._getShaderStage(n), a = this._getShaderCacheForMaterial(e);
    return a.has(i) === !1 && (a.add(i), i.usedTimes++), a.has(r) === !1 && (a.add(r), r.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && (n = new qv(e), t.set(e, n)), n;
  }
}
class qv {
  constructor(e) {
    this.id = Xv++, this.code = e, this.usedTimes = 0;
  }
}
function jv(s, e, t, n, i, r, a) {
  const o = new Sc(), l = new Yv(), c = /* @__PURE__ */ new Set(), h = [], u = i.logarithmicDepthBuffer, d = i.reverseDepthBuffer, p = i.vertexTextures;
  let g = i.precision;
  const _ = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function f(v) {
    return c.add(v), v === 0 ? "uv" : `uv${v}`;
  }
  function m(v, T, F, O, G) {
    const q = O.fog, z = G.geometry, X = v.isMeshStandardMaterial ? O.environment : null, H = (v.isMeshStandardMaterial ? t : e).get(v.envMap || X), te = H && H.mapping === qa ? H.image.height : null, se = _[v.type];
    v.precision !== null && (g = i.getMaxPrecision(v.precision), g !== v.precision && console.warn("THREE.WebGLProgram.getParameters:", v.precision, "not supported, using", g, "instead."));
    const ce = z.morphAttributes.position || z.morphAttributes.normal || z.morphAttributes.color, Oe = ce !== void 0 ? ce.length : 0;
    let We = 0;
    z.morphAttributes.position !== void 0 && (We = 1), z.morphAttributes.normal !== void 0 && (We = 2), z.morphAttributes.color !== void 0 && (We = 3);
    let Y, $, me, he;
    if (se) {
      const Ht = Nn[se];
      Y = Ht.vertexShader, $ = Ht.fragmentShader;
    } else
      Y = v.vertexShader, $ = v.fragmentShader, l.update(v), me = l.getVertexShaderID(v), he = l.getFragmentShaderID(v);
    const Le = s.getRenderTarget(), Ee = G.isInstancedMesh === !0, Ve = G.isBatchedMesh === !0, tt = !!v.map, He = !!v.matcap, D = !!H, Qt = !!v.aoMap, ke = !!v.lightMap, Xe = !!v.bumpMap, Ae = !!v.normalMap, at = !!v.displacementMap, Ce = !!v.emissiveMap, C = !!v.metalnessMap, S = !!v.roughnessMap, B = v.anisotropy > 0, K = v.clearcoat > 0, J = v.dispersion > 0, j = v.iridescence > 0, ge = v.sheen > 0, ie = v.transmission > 0, ue = B && !!v.anisotropyMap, Ye = K && !!v.clearcoatMap, Q = K && !!v.clearcoatNormalMap, de = K && !!v.clearcoatRoughnessMap, we = j && !!v.iridescenceMap, Re = j && !!v.iridescenceThicknessMap, fe = ge && !!v.sheenColorMap, ze = ge && !!v.sheenRoughnessMap, De = !!v.specularMap, rt = !!v.specularColorMap, I = !!v.specularIntensityMap, oe = ie && !!v.transmissionMap, W = ie && !!v.thicknessMap, Z = !!v.gradientMap, re = !!v.alphaMap, le = v.alphaTest > 0, Ge = !!v.alphaHash, vt = !!v.extensions;
    let Vt = Ti;
    v.toneMapped && (Le === null || Le.isXRRenderTarget === !0) && (Vt = s.toneMapping);
    const je = {
      shaderID: se,
      shaderType: v.type,
      shaderName: v.name,
      vertexShader: Y,
      fragmentShader: $,
      defines: v.defines,
      customVertexShaderID: me,
      customFragmentShaderID: he,
      isRawShaderMaterial: v.isRawShaderMaterial === !0,
      glslVersion: v.glslVersion,
      precision: g,
      batching: Ve,
      batchingColor: Ve && G._colorsTexture !== null,
      instancing: Ee,
      instancingColor: Ee && G.instanceColor !== null,
      instancingMorph: Ee && G.morphTexture !== null,
      supportsVertexTextures: p,
      outputColorSpace: Le === null ? s.outputColorSpace : Le.isXRRenderTarget === !0 ? Le.texture.colorSpace : Lt,
      alphaToCoverage: !!v.alphaToCoverage,
      map: tt,
      matcap: He,
      envMap: D,
      envMapMode: D && H.mapping,
      envMapCubeUVHeight: te,
      aoMap: Qt,
      lightMap: ke,
      bumpMap: Xe,
      normalMap: Ae,
      displacementMap: p && at,
      emissiveMap: Ce,
      normalMapObjectSpace: Ae && v.normalMapType === zp,
      normalMapTangentSpace: Ae && v.normalMapType === bd,
      metalnessMap: C,
      roughnessMap: S,
      anisotropy: B,
      anisotropyMap: ue,
      clearcoat: K,
      clearcoatMap: Ye,
      clearcoatNormalMap: Q,
      clearcoatRoughnessMap: de,
      dispersion: J,
      iridescence: j,
      iridescenceMap: we,
      iridescenceThicknessMap: Re,
      sheen: ge,
      sheenColorMap: fe,
      sheenRoughnessMap: ze,
      specularMap: De,
      specularColorMap: rt,
      specularIntensityMap: I,
      transmission: ie,
      transmissionMap: oe,
      thicknessMap: W,
      gradientMap: Z,
      opaque: v.transparent === !1 && v.blending === ws && v.alphaToCoverage === !1,
      alphaMap: re,
      alphaTest: le,
      alphaHash: Ge,
      combine: v.combine,
      //
      mapUv: tt && f(v.map.channel),
      aoMapUv: Qt && f(v.aoMap.channel),
      lightMapUv: ke && f(v.lightMap.channel),
      bumpMapUv: Xe && f(v.bumpMap.channel),
      normalMapUv: Ae && f(v.normalMap.channel),
      displacementMapUv: at && f(v.displacementMap.channel),
      emissiveMapUv: Ce && f(v.emissiveMap.channel),
      metalnessMapUv: C && f(v.metalnessMap.channel),
      roughnessMapUv: S && f(v.roughnessMap.channel),
      anisotropyMapUv: ue && f(v.anisotropyMap.channel),
      clearcoatMapUv: Ye && f(v.clearcoatMap.channel),
      clearcoatNormalMapUv: Q && f(v.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: de && f(v.clearcoatRoughnessMap.channel),
      iridescenceMapUv: we && f(v.iridescenceMap.channel),
      iridescenceThicknessMapUv: Re && f(v.iridescenceThicknessMap.channel),
      sheenColorMapUv: fe && f(v.sheenColorMap.channel),
      sheenRoughnessMapUv: ze && f(v.sheenRoughnessMap.channel),
      specularMapUv: De && f(v.specularMap.channel),
      specularColorMapUv: rt && f(v.specularColorMap.channel),
      specularIntensityMapUv: I && f(v.specularIntensityMap.channel),
      transmissionMapUv: oe && f(v.transmissionMap.channel),
      thicknessMapUv: W && f(v.thicknessMap.channel),
      alphaMapUv: re && f(v.alphaMap.channel),
      //
      vertexTangents: !!z.attributes.tangent && (Ae || B),
      vertexColors: v.vertexColors,
      vertexAlphas: v.vertexColors === !0 && !!z.attributes.color && z.attributes.color.itemSize === 4,
      pointsUvs: G.isPoints === !0 && !!z.attributes.uv && (tt || re),
      fog: !!q,
      useFog: v.fog === !0,
      fogExp2: !!q && q.isFogExp2,
      flatShading: v.flatShading === !0,
      sizeAttenuation: v.sizeAttenuation === !0,
      logarithmicDepthBuffer: u,
      reverseDepthBuffer: d,
      skinning: G.isSkinnedMesh === !0,
      morphTargets: z.morphAttributes.position !== void 0,
      morphNormals: z.morphAttributes.normal !== void 0,
      morphColors: z.morphAttributes.color !== void 0,
      morphTargetsCount: Oe,
      morphTextureStride: We,
      numDirLights: T.directional.length,
      numPointLights: T.point.length,
      numSpotLights: T.spot.length,
      numSpotLightMaps: T.spotLightMap.length,
      numRectAreaLights: T.rectArea.length,
      numHemiLights: T.hemi.length,
      numDirLightShadows: T.directionalShadowMap.length,
      numPointLightShadows: T.pointShadowMap.length,
      numSpotLightShadows: T.spotShadowMap.length,
      numSpotLightShadowsWithMaps: T.numSpotLightShadowsWithMaps,
      numLightProbes: T.numLightProbes,
      numClippingPlanes: a.numPlanes,
      numClipIntersection: a.numIntersection,
      dithering: v.dithering,
      shadowMapEnabled: s.shadowMap.enabled && F.length > 0,
      shadowMapType: s.shadowMap.type,
      toneMapping: Vt,
      decodeVideoTexture: tt && v.map.isVideoTexture === !0 && qe.getTransfer(v.map.colorSpace) === lt,
      premultipliedAlpha: v.premultipliedAlpha,
      doubleSided: v.side === Un,
      flipSided: v.side === Yt,
      useDepthPacking: v.depthPacking >= 0,
      depthPacking: v.depthPacking || 0,
      index0AttributeName: v.index0AttributeName,
      extensionClipCullDistance: vt && v.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw: (vt && v.extensions.multiDraw === !0 || Ve) && n.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: v.customProgramCacheKey()
    };
    return je.vertexUv1s = c.has(1), je.vertexUv2s = c.has(2), je.vertexUv3s = c.has(3), c.clear(), je;
  }
  function x(v) {
    const T = [];
    if (v.shaderID ? T.push(v.shaderID) : (T.push(v.customVertexShaderID), T.push(v.customFragmentShaderID)), v.defines !== void 0)
      for (const F in v.defines)
        T.push(F), T.push(v.defines[F]);
    return v.isRawShaderMaterial === !1 && (y(T, v), M(T, v), T.push(s.outputColorSpace)), T.push(v.customProgramCacheKey), T.join();
  }
  function y(v, T) {
    v.push(T.precision), v.push(T.outputColorSpace), v.push(T.envMapMode), v.push(T.envMapCubeUVHeight), v.push(T.mapUv), v.push(T.alphaMapUv), v.push(T.lightMapUv), v.push(T.aoMapUv), v.push(T.bumpMapUv), v.push(T.normalMapUv), v.push(T.displacementMapUv), v.push(T.emissiveMapUv), v.push(T.metalnessMapUv), v.push(T.roughnessMapUv), v.push(T.anisotropyMapUv), v.push(T.clearcoatMapUv), v.push(T.clearcoatNormalMapUv), v.push(T.clearcoatRoughnessMapUv), v.push(T.iridescenceMapUv), v.push(T.iridescenceThicknessMapUv), v.push(T.sheenColorMapUv), v.push(T.sheenRoughnessMapUv), v.push(T.specularMapUv), v.push(T.specularColorMapUv), v.push(T.specularIntensityMapUv), v.push(T.transmissionMapUv), v.push(T.thicknessMapUv), v.push(T.combine), v.push(T.fogExp2), v.push(T.sizeAttenuation), v.push(T.morphTargetsCount), v.push(T.morphAttributeCount), v.push(T.numDirLights), v.push(T.numPointLights), v.push(T.numSpotLights), v.push(T.numSpotLightMaps), v.push(T.numHemiLights), v.push(T.numRectAreaLights), v.push(T.numDirLightShadows), v.push(T.numPointLightShadows), v.push(T.numSpotLightShadows), v.push(T.numSpotLightShadowsWithMaps), v.push(T.numLightProbes), v.push(T.shadowMapType), v.push(T.toneMapping), v.push(T.numClippingPlanes), v.push(T.numClipIntersection), v.push(T.depthPacking);
  }
  function M(v, T) {
    o.disableAll(), T.supportsVertexTextures && o.enable(0), T.instancing && o.enable(1), T.instancingColor && o.enable(2), T.instancingMorph && o.enable(3), T.matcap && o.enable(4), T.envMap && o.enable(5), T.normalMapObjectSpace && o.enable(6), T.normalMapTangentSpace && o.enable(7), T.clearcoat && o.enable(8), T.iridescence && o.enable(9), T.alphaTest && o.enable(10), T.vertexColors && o.enable(11), T.vertexAlphas && o.enable(12), T.vertexUv1s && o.enable(13), T.vertexUv2s && o.enable(14), T.vertexUv3s && o.enable(15), T.vertexTangents && o.enable(16), T.anisotropy && o.enable(17), T.alphaHash && o.enable(18), T.batching && o.enable(19), T.dispersion && o.enable(20), T.batchingColor && o.enable(21), v.push(o.mask), o.disableAll(), T.fog && o.enable(0), T.useFog && o.enable(1), T.flatShading && o.enable(2), T.logarithmicDepthBuffer && o.enable(3), T.reverseDepthBuffer && o.enable(4), T.skinning && o.enable(5), T.morphTargets && o.enable(6), T.morphNormals && o.enable(7), T.morphColors && o.enable(8), T.premultipliedAlpha && o.enable(9), T.shadowMapEnabled && o.enable(10), T.doubleSided && o.enable(11), T.flipSided && o.enable(12), T.useDepthPacking && o.enable(13), T.dithering && o.enable(14), T.transmission && o.enable(15), T.sheen && o.enable(16), T.opaque && o.enable(17), T.pointsUvs && o.enable(18), T.decodeVideoTexture && o.enable(19), T.alphaToCoverage && o.enable(20), v.push(o.mask);
  }
  function b(v) {
    const T = _[v.type];
    let F;
    if (T) {
      const O = Nn[T];
      F = Lm.clone(O.uniforms);
    } else
      F = v.uniforms;
    return F;
  }
  function w(v, T) {
    let F;
    for (let O = 0, G = h.length; O < G; O++) {
      const q = h[O];
      if (q.cacheKey === T) {
        F = q, ++F.usedTimes;
        break;
      }
    }
    return F === void 0 && (F = new Wv(s, T, v, r), h.push(F)), F;
  }
  function E(v) {
    if (--v.usedTimes === 0) {
      const T = h.indexOf(v);
      h[T] = h[h.length - 1], h.pop(), v.destroy();
    }
  }
  function R(v) {
    l.remove(v);
  }
  function L() {
    l.dispose();
  }
  return {
    getParameters: m,
    getProgramCacheKey: x,
    getUniforms: b,
    acquireProgram: w,
    releaseProgram: E,
    releaseShaderCache: R,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: h,
    dispose: L
  };
}
function Kv() {
  let s = /* @__PURE__ */ new WeakMap();
  function e(a) {
    return s.has(a);
  }
  function t(a) {
    let o = s.get(a);
    return o === void 0 && (o = {}, s.set(a, o)), o;
  }
  function n(a) {
    s.delete(a);
  }
  function i(a, o, l) {
    s.get(a)[o] = l;
  }
  function r() {
    s = /* @__PURE__ */ new WeakMap();
  }
  return {
    has: e,
    get: t,
    remove: n,
    update: i,
    dispose: r
  };
}
function Zv(s, e) {
  return s.groupOrder !== e.groupOrder ? s.groupOrder - e.groupOrder : s.renderOrder !== e.renderOrder ? s.renderOrder - e.renderOrder : s.material.id !== e.material.id ? s.material.id - e.material.id : s.z !== e.z ? s.z - e.z : s.id - e.id;
}
function su(s, e) {
  return s.groupOrder !== e.groupOrder ? s.groupOrder - e.groupOrder : s.renderOrder !== e.renderOrder ? s.renderOrder - e.renderOrder : s.z !== e.z ? e.z - s.z : s.id - e.id;
}
function ru() {
  const s = [];
  let e = 0;
  const t = [], n = [], i = [];
  function r() {
    e = 0, t.length = 0, n.length = 0, i.length = 0;
  }
  function a(u, d, p, g, _, f) {
    let m = s[e];
    return m === void 0 ? (m = {
      id: u.id,
      object: u,
      geometry: d,
      material: p,
      groupOrder: g,
      renderOrder: u.renderOrder,
      z: _,
      group: f
    }, s[e] = m) : (m.id = u.id, m.object = u, m.geometry = d, m.material = p, m.groupOrder = g, m.renderOrder = u.renderOrder, m.z = _, m.group = f), e++, m;
  }
  function o(u, d, p, g, _, f) {
    const m = a(u, d, p, g, _, f);
    p.transmission > 0 ? n.push(m) : p.transparent === !0 ? i.push(m) : t.push(m);
  }
  function l(u, d, p, g, _, f) {
    const m = a(u, d, p, g, _, f);
    p.transmission > 0 ? n.unshift(m) : p.transparent === !0 ? i.unshift(m) : t.unshift(m);
  }
  function c(u, d) {
    t.length > 1 && t.sort(u || Zv), n.length > 1 && n.sort(d || su), i.length > 1 && i.sort(d || su);
  }
  function h() {
    for (let u = e, d = s.length; u < d; u++) {
      const p = s[u];
      if (p.id === null) break;
      p.id = null, p.object = null, p.geometry = null, p.material = null, p.group = null;
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: i,
    init: r,
    push: o,
    unshift: l,
    finish: h,
    sort: c
  };
}
function $v() {
  let s = /* @__PURE__ */ new WeakMap();
  function e(n, i) {
    const r = s.get(n);
    let a;
    return r === void 0 ? (a = new ru(), s.set(n, [a])) : i >= r.length ? (a = new ru(), r.push(a)) : a = r[i], a;
  }
  function t() {
    s = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function Jv() {
  const s = {};
  return {
    get: function(e) {
      if (s[e.id] !== void 0)
        return s[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new P(),
            color: new be()
          };
          break;
        case "SpotLight":
          t = {
            position: new P(),
            direction: new P(),
            color: new be(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new P(),
            color: new be(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new P(),
            skyColor: new be(),
            groundColor: new be()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new be(),
            position: new P(),
            halfWidth: new P(),
            halfHeight: new P()
          };
          break;
      }
      return s[e.id] = t, t;
    }
  };
}
function Qv() {
  const s = {};
  return {
    get: function(e) {
      if (s[e.id] !== void 0)
        return s[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Me()
          };
          break;
        case "SpotLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Me()
          };
          break;
        case "PointLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Me(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return s[e.id] = t, t;
    }
  };
}
let ex = 0;
function tx(s, e) {
  return (e.castShadow ? 2 : 0) - (s.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (s.map ? 1 : 0);
}
function nx(s) {
  const e = new Jv(), t = Qv(), n = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1,
      numSpotMaps: -1,
      numLightProbes: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotLightMap: [],
    spotShadow: [],
    spotShadowMap: [],
    spotLightMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numSpotLightShadowsWithMaps: 0,
    numLightProbes: 0
  };
  for (let c = 0; c < 9; c++) n.probe.push(new P());
  const i = new P(), r = new Ie(), a = new Ie();
  function o(c) {
    let h = 0, u = 0, d = 0;
    for (let L = 0; L < 9; L++) n.probe[L].set(0, 0, 0);
    let p = 0, g = 0, _ = 0, f = 0, m = 0, x = 0, y = 0, M = 0, b = 0, w = 0, E = 0;
    c.sort(tx);
    for (let L = 0, v = c.length; L < v; L++) {
      const T = c[L], F = T.color, O = T.intensity, G = T.distance, q = T.shadow && T.shadow.map ? T.shadow.map.texture : null;
      if (T.isAmbientLight)
        h += F.r * O, u += F.g * O, d += F.b * O;
      else if (T.isLightProbe) {
        for (let z = 0; z < 9; z++)
          n.probe[z].addScaledVector(T.sh.coefficients[z], O);
        E++;
      } else if (T.isDirectionalLight) {
        const z = e.get(T);
        if (z.color.copy(T.color).multiplyScalar(T.intensity), T.castShadow) {
          const X = T.shadow, H = t.get(T);
          H.shadowIntensity = X.intensity, H.shadowBias = X.bias, H.shadowNormalBias = X.normalBias, H.shadowRadius = X.radius, H.shadowMapSize = X.mapSize, n.directionalShadow[p] = H, n.directionalShadowMap[p] = q, n.directionalShadowMatrix[p] = T.shadow.matrix, x++;
        }
        n.directional[p] = z, p++;
      } else if (T.isSpotLight) {
        const z = e.get(T);
        z.position.setFromMatrixPosition(T.matrixWorld), z.color.copy(F).multiplyScalar(O), z.distance = G, z.coneCos = Math.cos(T.angle), z.penumbraCos = Math.cos(T.angle * (1 - T.penumbra)), z.decay = T.decay, n.spot[_] = z;
        const X = T.shadow;
        if (T.map && (n.spotLightMap[b] = T.map, b++, X.updateMatrices(T), T.castShadow && w++), n.spotLightMatrix[_] = X.matrix, T.castShadow) {
          const H = t.get(T);
          H.shadowIntensity = X.intensity, H.shadowBias = X.bias, H.shadowNormalBias = X.normalBias, H.shadowRadius = X.radius, H.shadowMapSize = X.mapSize, n.spotShadow[_] = H, n.spotShadowMap[_] = q, M++;
        }
        _++;
      } else if (T.isRectAreaLight) {
        const z = e.get(T);
        z.color.copy(F).multiplyScalar(O), z.halfWidth.set(T.width * 0.5, 0, 0), z.halfHeight.set(0, T.height * 0.5, 0), n.rectArea[f] = z, f++;
      } else if (T.isPointLight) {
        const z = e.get(T);
        if (z.color.copy(T.color).multiplyScalar(T.intensity), z.distance = T.distance, z.decay = T.decay, T.castShadow) {
          const X = T.shadow, H = t.get(T);
          H.shadowIntensity = X.intensity, H.shadowBias = X.bias, H.shadowNormalBias = X.normalBias, H.shadowRadius = X.radius, H.shadowMapSize = X.mapSize, H.shadowCameraNear = X.camera.near, H.shadowCameraFar = X.camera.far, n.pointShadow[g] = H, n.pointShadowMap[g] = q, n.pointShadowMatrix[g] = T.shadow.matrix, y++;
        }
        n.point[g] = z, g++;
      } else if (T.isHemisphereLight) {
        const z = e.get(T);
        z.skyColor.copy(T.color).multiplyScalar(O), z.groundColor.copy(T.groundColor).multiplyScalar(O), n.hemi[m] = z, m++;
      }
    }
    f > 0 && (s.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = ne.LTC_FLOAT_1, n.rectAreaLTC2 = ne.LTC_FLOAT_2) : (n.rectAreaLTC1 = ne.LTC_HALF_1, n.rectAreaLTC2 = ne.LTC_HALF_2)), n.ambient[0] = h, n.ambient[1] = u, n.ambient[2] = d;
    const R = n.hash;
    (R.directionalLength !== p || R.pointLength !== g || R.spotLength !== _ || R.rectAreaLength !== f || R.hemiLength !== m || R.numDirectionalShadows !== x || R.numPointShadows !== y || R.numSpotShadows !== M || R.numSpotMaps !== b || R.numLightProbes !== E) && (n.directional.length = p, n.spot.length = _, n.rectArea.length = f, n.point.length = g, n.hemi.length = m, n.directionalShadow.length = x, n.directionalShadowMap.length = x, n.pointShadow.length = y, n.pointShadowMap.length = y, n.spotShadow.length = M, n.spotShadowMap.length = M, n.directionalShadowMatrix.length = x, n.pointShadowMatrix.length = y, n.spotLightMatrix.length = M + b - w, n.spotLightMap.length = b, n.numSpotLightShadowsWithMaps = w, n.numLightProbes = E, R.directionalLength = p, R.pointLength = g, R.spotLength = _, R.rectAreaLength = f, R.hemiLength = m, R.numDirectionalShadows = x, R.numPointShadows = y, R.numSpotShadows = M, R.numSpotMaps = b, R.numLightProbes = E, n.version = ex++);
  }
  function l(c, h) {
    let u = 0, d = 0, p = 0, g = 0, _ = 0;
    const f = h.matrixWorldInverse;
    for (let m = 0, x = c.length; m < x; m++) {
      const y = c[m];
      if (y.isDirectionalLight) {
        const M = n.directional[u];
        M.direction.setFromMatrixPosition(y.matrixWorld), i.setFromMatrixPosition(y.target.matrixWorld), M.direction.sub(i), M.direction.transformDirection(f), u++;
      } else if (y.isSpotLight) {
        const M = n.spot[p];
        M.position.setFromMatrixPosition(y.matrixWorld), M.position.applyMatrix4(f), M.direction.setFromMatrixPosition(y.matrixWorld), i.setFromMatrixPosition(y.target.matrixWorld), M.direction.sub(i), M.direction.transformDirection(f), p++;
      } else if (y.isRectAreaLight) {
        const M = n.rectArea[g];
        M.position.setFromMatrixPosition(y.matrixWorld), M.position.applyMatrix4(f), a.identity(), r.copy(y.matrixWorld), r.premultiply(f), a.extractRotation(r), M.halfWidth.set(y.width * 0.5, 0, 0), M.halfHeight.set(0, y.height * 0.5, 0), M.halfWidth.applyMatrix4(a), M.halfHeight.applyMatrix4(a), g++;
      } else if (y.isPointLight) {
        const M = n.point[d];
        M.position.setFromMatrixPosition(y.matrixWorld), M.position.applyMatrix4(f), d++;
      } else if (y.isHemisphereLight) {
        const M = n.hemi[_];
        M.direction.setFromMatrixPosition(y.matrixWorld), M.direction.transformDirection(f), _++;
      }
    }
  }
  return {
    setup: o,
    setupView: l,
    state: n
  };
}
function au(s) {
  const e = new nx(s), t = [], n = [];
  function i(h) {
    c.camera = h, t.length = 0, n.length = 0;
  }
  function r(h) {
    t.push(h);
  }
  function a(h) {
    n.push(h);
  }
  function o() {
    e.setup(t);
  }
  function l(h) {
    e.setupView(t, h);
  }
  const c = {
    lightsArray: t,
    shadowsArray: n,
    camera: null,
    lights: e,
    transmissionRenderTarget: {}
  };
  return {
    init: i,
    state: c,
    setupLights: o,
    setupLightsView: l,
    pushLight: r,
    pushShadow: a
  };
}
function ix(s) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(i, r = 0) {
    const a = e.get(i);
    let o;
    return a === void 0 ? (o = new au(s), e.set(i, [o])) : r >= a.length ? (o = new au(s), a.push(o)) : o = a[r], o;
  }
  function n() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: t,
    dispose: n
  };
}
class sx extends kn {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = Bp, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class rx extends kn {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const ax = `void main() {
  gl_Position = vec4( position, 1.0 );
}`, ox = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
  const float samples = float( VSM_SAMPLES );
  float mean = 0.0;
  float squared_mean = 0.0;
  float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
  float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
  for ( float i = 0.0; i < samples; i ++ ) {
    float uvOffset = uvStart + i * uvStride;
    #ifdef HORIZONTAL_PASS
      vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
      mean += distribution.x;
      squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
    #else
      float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
      mean += depth;
      squared_mean += depth * depth;
    #endif
  }
  mean = mean / samples;
  squared_mean = squared_mean / samples;
  float std_dev = sqrt( squared_mean - mean * mean );
  gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function lx(s, e, t) {
  let n = new Ec();
  const i = new Me(), r = new Me(), a = new Ke(), o = new sx({ depthPacking: kp }), l = new rx(), c = {}, h = t.maxTextureSize, u = { [zn]: Yt, [Yt]: zn, [Un]: Un }, d = new wi({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new Me() },
      radius: { value: 4 }
    },
    vertexShader: ax,
    fragmentShader: ox
  }), p = d.clone();
  p.defines.HORIZONTAL_PASS = 1;
  const g = new Ln();
  g.setAttribute(
    "position",
    new zt(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const _ = new Xt(g, d), f = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = cd;
  let m = this.type;
  this.render = function(w, E, R) {
    if (f.enabled === !1 || f.autoUpdate === !1 && f.needsUpdate === !1 || w.length === 0) return;
    const L = s.getRenderTarget(), v = s.getActiveCubeFace(), T = s.getActiveMipmapLevel(), F = s.state;
    F.setBlending(Ei), F.buffers.color.setClear(1, 1, 1, 1), F.buffers.depth.setTest(!0), F.setScissorTest(!1);
    const O = m !== Qn && this.type === Qn, G = m === Qn && this.type !== Qn;
    for (let q = 0, z = w.length; q < z; q++) {
      const X = w[q], H = X.shadow;
      if (H === void 0) {
        console.warn("THREE.WebGLShadowMap:", X, "has no shadow.");
        continue;
      }
      if (H.autoUpdate === !1 && H.needsUpdate === !1) continue;
      i.copy(H.mapSize);
      const te = H.getFrameExtents();
      if (i.multiply(te), r.copy(H.mapSize), (i.x > h || i.y > h) && (i.x > h && (r.x = Math.floor(h / te.x), i.x = r.x * te.x, H.mapSize.x = r.x), i.y > h && (r.y = Math.floor(h / te.y), i.y = r.y * te.y, H.mapSize.y = r.y)), H.map === null || O === !0 || G === !0) {
        const ce = this.type !== Qn ? { minFilter: kt, magFilter: kt } : {};
        H.map !== null && H.map.dispose(), H.map = new es(i.x, i.y, ce), H.map.texture.name = X.name + ".shadowMap", H.camera.updateProjectionMatrix();
      }
      s.setRenderTarget(H.map), s.clear();
      const se = H.getViewportCount();
      for (let ce = 0; ce < se; ce++) {
        const Oe = H.getViewport(ce);
        a.set(
          r.x * Oe.x,
          r.y * Oe.y,
          r.x * Oe.z,
          r.y * Oe.w
        ), F.viewport(a), H.updateMatrices(X, ce), n = H.getFrustum(), M(E, R, H.camera, X, this.type);
      }
      H.isPointLightShadow !== !0 && this.type === Qn && x(H, R), H.needsUpdate = !1;
    }
    m = this.type, f.needsUpdate = !1, s.setRenderTarget(L, v, T);
  };
  function x(w, E) {
    const R = e.update(_);
    d.defines.VSM_SAMPLES !== w.blurSamples && (d.defines.VSM_SAMPLES = w.blurSamples, p.defines.VSM_SAMPLES = w.blurSamples, d.needsUpdate = !0, p.needsUpdate = !0), w.mapPass === null && (w.mapPass = new es(i.x, i.y)), d.uniforms.shadow_pass.value = w.map.texture, d.uniforms.resolution.value = w.mapSize, d.uniforms.radius.value = w.radius, s.setRenderTarget(w.mapPass), s.clear(), s.renderBufferDirect(E, null, R, d, _, null), p.uniforms.shadow_pass.value = w.mapPass.texture, p.uniforms.resolution.value = w.mapSize, p.uniforms.radius.value = w.radius, s.setRenderTarget(w.map), s.clear(), s.renderBufferDirect(E, null, R, p, _, null);
  }
  function y(w, E, R, L) {
    let v = null;
    const T = R.isPointLight === !0 ? w.customDistanceMaterial : w.customDepthMaterial;
    if (T !== void 0)
      v = T;
    else if (v = R.isPointLight === !0 ? l : o, s.localClippingEnabled && E.clipShadows === !0 && Array.isArray(E.clippingPlanes) && E.clippingPlanes.length !== 0 || E.displacementMap && E.displacementScale !== 0 || E.alphaMap && E.alphaTest > 0 || E.map && E.alphaTest > 0) {
      const F = v.uuid, O = E.uuid;
      let G = c[F];
      G === void 0 && (G = {}, c[F] = G);
      let q = G[O];
      q === void 0 && (q = v.clone(), G[O] = q, E.addEventListener("dispose", b)), v = q;
    }
    if (v.visible = E.visible, v.wireframe = E.wireframe, L === Qn ? v.side = E.shadowSide !== null ? E.shadowSide : E.side : v.side = E.shadowSide !== null ? E.shadowSide : u[E.side], v.alphaMap = E.alphaMap, v.alphaTest = E.alphaTest, v.map = E.map, v.clipShadows = E.clipShadows, v.clippingPlanes = E.clippingPlanes, v.clipIntersection = E.clipIntersection, v.displacementMap = E.displacementMap, v.displacementScale = E.displacementScale, v.displacementBias = E.displacementBias, v.wireframeLinewidth = E.wireframeLinewidth, v.linewidth = E.linewidth, R.isPointLight === !0 && v.isMeshDistanceMaterial === !0) {
      const F = s.properties.get(v);
      F.light = R;
    }
    return v;
  }
  function M(w, E, R, L, v) {
    if (w.visible === !1) return;
    if (w.layers.test(E.layers) && (w.isMesh || w.isLine || w.isPoints) && (w.castShadow || w.receiveShadow && v === Qn) && (!w.frustumCulled || n.intersectsObject(w))) {
      w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse, w.matrixWorld);
      const O = e.update(w), G = w.material;
      if (Array.isArray(G)) {
        const q = O.groups;
        for (let z = 0, X = q.length; z < X; z++) {
          const H = q[z], te = G[H.materialIndex];
          if (te && te.visible) {
            const se = y(w, te, L, v);
            w.onBeforeShadow(s, w, E, R, O, se, H), s.renderBufferDirect(R, null, O, se, w, H), w.onAfterShadow(s, w, E, R, O, se, H);
          }
        }
      } else if (G.visible) {
        const q = y(w, G, L, v);
        w.onBeforeShadow(s, w, E, R, O, q, null), s.renderBufferDirect(R, null, O, q, w, null), w.onAfterShadow(s, w, E, R, O, q, null);
      }
    }
    const F = w.children;
    for (let O = 0, G = F.length; O < G; O++)
      M(F[O], E, R, L, v);
  }
  function b(w) {
    w.target.removeEventListener("dispose", b);
    for (const R in c) {
      const L = c[R], v = w.target.uuid;
      v in L && (L[v].dispose(), delete L[v]);
    }
  }
}
const cx = {
  [rl]: al,
  [ol]: hl,
  [ll]: ul,
  [Us]: cl,
  [al]: rl,
  [hl]: ol,
  [ul]: ll,
  [cl]: Us
};
function hx(s) {
  function e() {
    let I = !1;
    const oe = new Ke();
    let W = null;
    const Z = new Ke(0, 0, 0, 0);
    return {
      setMask: function(re) {
        W !== re && !I && (s.colorMask(re, re, re, re), W = re);
      },
      setLocked: function(re) {
        I = re;
      },
      setClear: function(re, le, Ge, vt, Vt) {
        Vt === !0 && (re *= vt, le *= vt, Ge *= vt), oe.set(re, le, Ge, vt), Z.equals(oe) === !1 && (s.clearColor(re, le, Ge, vt), Z.copy(oe));
      },
      reset: function() {
        I = !1, W = null, Z.set(-1, 0, 0, 0);
      }
    };
  }
  function t() {
    let I = !1, oe = !1, W = null, Z = null, re = null;
    return {
      setReversed: function(le) {
        oe = le;
      },
      setTest: function(le) {
        le ? me(s.DEPTH_TEST) : he(s.DEPTH_TEST);
      },
      setMask: function(le) {
        W !== le && !I && (s.depthMask(le), W = le);
      },
      setFunc: function(le) {
        if (oe && (le = cx[le]), Z !== le) {
          switch (le) {
            case rl:
              s.depthFunc(s.NEVER);
              break;
            case al:
              s.depthFunc(s.ALWAYS);
              break;
            case ol:
              s.depthFunc(s.LESS);
              break;
            case Us:
              s.depthFunc(s.LEQUAL);
              break;
            case ll:
              s.depthFunc(s.EQUAL);
              break;
            case cl:
              s.depthFunc(s.GEQUAL);
              break;
            case hl:
              s.depthFunc(s.GREATER);
              break;
            case ul:
              s.depthFunc(s.NOTEQUAL);
              break;
            default:
              s.depthFunc(s.LEQUAL);
          }
          Z = le;
        }
      },
      setLocked: function(le) {
        I = le;
      },
      setClear: function(le) {
        re !== le && (s.clearDepth(le), re = le);
      },
      reset: function() {
        I = !1, W = null, Z = null, re = null;
      }
    };
  }
  function n() {
    let I = !1, oe = null, W = null, Z = null, re = null, le = null, Ge = null, vt = null, Vt = null;
    return {
      setTest: function(je) {
        I || (je ? me(s.STENCIL_TEST) : he(s.STENCIL_TEST));
      },
      setMask: function(je) {
        oe !== je && !I && (s.stencilMask(je), oe = je);
      },
      setFunc: function(je, Ht, Yn) {
        (W !== je || Z !== Ht || re !== Yn) && (s.stencilFunc(je, Ht, Yn), W = je, Z = Ht, re = Yn);
      },
      setOp: function(je, Ht, Yn) {
        (le !== je || Ge !== Ht || vt !== Yn) && (s.stencilOp(je, Ht, Yn), le = je, Ge = Ht, vt = Yn);
      },
      setLocked: function(je) {
        I = je;
      },
      setClear: function(je) {
        Vt !== je && (s.clearStencil(je), Vt = je);
      },
      reset: function() {
        I = !1, oe = null, W = null, Z = null, re = null, le = null, Ge = null, vt = null, Vt = null;
      }
    };
  }
  const i = new e(), r = new t(), a = new n(), o = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap();
  let c = {}, h = {}, u = /* @__PURE__ */ new WeakMap(), d = [], p = null, g = !1, _ = null, f = null, m = null, x = null, y = null, M = null, b = null, w = new be(0, 0, 0), E = 0, R = !1, L = null, v = null, T = null, F = null, O = null;
  const G = s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let q = !1, z = 0;
  const X = s.getParameter(s.VERSION);
  X.indexOf("WebGL") !== -1 ? (z = parseFloat(/^WebGL (\d)/.exec(X)[1]), q = z >= 1) : X.indexOf("OpenGL ES") !== -1 && (z = parseFloat(/^OpenGL ES (\d)/.exec(X)[1]), q = z >= 2);
  let H = null, te = {};
  const se = s.getParameter(s.SCISSOR_BOX), ce = s.getParameter(s.VIEWPORT), Oe = new Ke().fromArray(se), We = new Ke().fromArray(ce);
  function Y(I, oe, W, Z) {
    const re = new Uint8Array(4), le = s.createTexture();
    s.bindTexture(I, le), s.texParameteri(I, s.TEXTURE_MIN_FILTER, s.NEAREST), s.texParameteri(I, s.TEXTURE_MAG_FILTER, s.NEAREST);
    for (let Ge = 0; Ge < W; Ge++)
      I === s.TEXTURE_3D || I === s.TEXTURE_2D_ARRAY ? s.texImage3D(oe, 0, s.RGBA, 1, 1, Z, 0, s.RGBA, s.UNSIGNED_BYTE, re) : s.texImage2D(oe + Ge, 0, s.RGBA, 1, 1, 0, s.RGBA, s.UNSIGNED_BYTE, re);
    return le;
  }
  const $ = {};
  $[s.TEXTURE_2D] = Y(s.TEXTURE_2D, s.TEXTURE_2D, 1), $[s.TEXTURE_CUBE_MAP] = Y(s.TEXTURE_CUBE_MAP, s.TEXTURE_CUBE_MAP_POSITIVE_X, 6), $[s.TEXTURE_2D_ARRAY] = Y(s.TEXTURE_2D_ARRAY, s.TEXTURE_2D_ARRAY, 1, 1), $[s.TEXTURE_3D] = Y(s.TEXTURE_3D, s.TEXTURE_3D, 1, 1), i.setClear(0, 0, 0, 1), r.setClear(1), a.setClear(0), me(s.DEPTH_TEST), r.setFunc(Us), ke(!1), Xe(uh), me(s.CULL_FACE), D(Ei);
  function me(I) {
    c[I] !== !0 && (s.enable(I), c[I] = !0);
  }
  function he(I) {
    c[I] !== !1 && (s.disable(I), c[I] = !1);
  }
  function Le(I, oe) {
    return h[I] !== oe ? (s.bindFramebuffer(I, oe), h[I] = oe, I === s.DRAW_FRAMEBUFFER && (h[s.FRAMEBUFFER] = oe), I === s.FRAMEBUFFER && (h[s.DRAW_FRAMEBUFFER] = oe), !0) : !1;
  }
  function Ee(I, oe) {
    let W = d, Z = !1;
    if (I) {
      W = u.get(oe), W === void 0 && (W = [], u.set(oe, W));
      const re = I.textures;
      if (W.length !== re.length || W[0] !== s.COLOR_ATTACHMENT0) {
        for (let le = 0, Ge = re.length; le < Ge; le++)
          W[le] = s.COLOR_ATTACHMENT0 + le;
        W.length = re.length, Z = !0;
      }
    } else
      W[0] !== s.BACK && (W[0] = s.BACK, Z = !0);
    Z && s.drawBuffers(W);
  }
  function Ve(I) {
    return p !== I ? (s.useProgram(I), p = I, !0) : !1;
  }
  const tt = {
    [Wi]: s.FUNC_ADD,
    [hp]: s.FUNC_SUBTRACT,
    [up]: s.FUNC_REVERSE_SUBTRACT
  };
  tt[dp] = s.MIN, tt[fp] = s.MAX;
  const He = {
    [pp]: s.ZERO,
    [mp]: s.ONE,
    [_p]: s.SRC_COLOR,
    [il]: s.SRC_ALPHA,
    [Sp]: s.SRC_ALPHA_SATURATE,
    [yp]: s.DST_COLOR,
    [vp]: s.DST_ALPHA,
    [gp]: s.ONE_MINUS_SRC_COLOR,
    [sl]: s.ONE_MINUS_SRC_ALPHA,
    [Mp]: s.ONE_MINUS_DST_COLOR,
    [xp]: s.ONE_MINUS_DST_ALPHA,
    [Ep]: s.CONSTANT_COLOR,
    [Tp]: s.ONE_MINUS_CONSTANT_COLOR,
    [bp]: s.CONSTANT_ALPHA,
    [Ap]: s.ONE_MINUS_CONSTANT_ALPHA
  };
  function D(I, oe, W, Z, re, le, Ge, vt, Vt, je) {
    if (I === Ei) {
      g === !0 && (he(s.BLEND), g = !1);
      return;
    }
    if (g === !1 && (me(s.BLEND), g = !0), I !== cp) {
      if (I !== _ || je !== R) {
        if ((f !== Wi || y !== Wi) && (s.blendEquation(s.FUNC_ADD), f = Wi, y = Wi), je)
          switch (I) {
            case ws:
              s.blendFuncSeparate(s.ONE, s.ONE_MINUS_SRC_ALPHA, s.ONE, s.ONE_MINUS_SRC_ALPHA);
              break;
            case dh:
              s.blendFunc(s.ONE, s.ONE);
              break;
            case fh:
              s.blendFuncSeparate(s.ZERO, s.ONE_MINUS_SRC_COLOR, s.ZERO, s.ONE);
              break;
            case ph:
              s.blendFuncSeparate(s.ZERO, s.SRC_COLOR, s.ZERO, s.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", I);
              break;
          }
        else
          switch (I) {
            case ws:
              s.blendFuncSeparate(s.SRC_ALPHA, s.ONE_MINUS_SRC_ALPHA, s.ONE, s.ONE_MINUS_SRC_ALPHA);
              break;
            case dh:
              s.blendFunc(s.SRC_ALPHA, s.ONE);
              break;
            case fh:
              s.blendFuncSeparate(s.ZERO, s.ONE_MINUS_SRC_COLOR, s.ZERO, s.ONE);
              break;
            case ph:
              s.blendFunc(s.ZERO, s.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", I);
              break;
          }
        m = null, x = null, M = null, b = null, w.set(0, 0, 0), E = 0, _ = I, R = je;
      }
      return;
    }
    re = re || oe, le = le || W, Ge = Ge || Z, (oe !== f || re !== y) && (s.blendEquationSeparate(tt[oe], tt[re]), f = oe, y = re), (W !== m || Z !== x || le !== M || Ge !== b) && (s.blendFuncSeparate(He[W], He[Z], He[le], He[Ge]), m = W, x = Z, M = le, b = Ge), (vt.equals(w) === !1 || Vt !== E) && (s.blendColor(vt.r, vt.g, vt.b, Vt), w.copy(vt), E = Vt), _ = I, R = !1;
  }
  function Qt(I, oe) {
    I.side === Un ? he(s.CULL_FACE) : me(s.CULL_FACE);
    let W = I.side === Yt;
    oe && (W = !W), ke(W), I.blending === ws && I.transparent === !1 ? D(Ei) : D(I.blending, I.blendEquation, I.blendSrc, I.blendDst, I.blendEquationAlpha, I.blendSrcAlpha, I.blendDstAlpha, I.blendColor, I.blendAlpha, I.premultipliedAlpha), r.setFunc(I.depthFunc), r.setTest(I.depthTest), r.setMask(I.depthWrite), i.setMask(I.colorWrite);
    const Z = I.stencilWrite;
    a.setTest(Z), Z && (a.setMask(I.stencilWriteMask), a.setFunc(I.stencilFunc, I.stencilRef, I.stencilFuncMask), a.setOp(I.stencilFail, I.stencilZFail, I.stencilZPass)), at(I.polygonOffset, I.polygonOffsetFactor, I.polygonOffsetUnits), I.alphaToCoverage === !0 ? me(s.SAMPLE_ALPHA_TO_COVERAGE) : he(s.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function ke(I) {
    L !== I && (I ? s.frontFace(s.CW) : s.frontFace(s.CCW), L = I);
  }
  function Xe(I) {
    I !== op ? (me(s.CULL_FACE), I !== v && (I === uh ? s.cullFace(s.BACK) : I === lp ? s.cullFace(s.FRONT) : s.cullFace(s.FRONT_AND_BACK))) : he(s.CULL_FACE), v = I;
  }
  function Ae(I) {
    I !== T && (q && s.lineWidth(I), T = I);
  }
  function at(I, oe, W) {
    I ? (me(s.POLYGON_OFFSET_FILL), (F !== oe || O !== W) && (s.polygonOffset(oe, W), F = oe, O = W)) : he(s.POLYGON_OFFSET_FILL);
  }
  function Ce(I) {
    I ? me(s.SCISSOR_TEST) : he(s.SCISSOR_TEST);
  }
  function C(I) {
    I === void 0 && (I = s.TEXTURE0 + G - 1), H !== I && (s.activeTexture(I), H = I);
  }
  function S(I, oe, W) {
    W === void 0 && (H === null ? W = s.TEXTURE0 + G - 1 : W = H);
    let Z = te[W];
    Z === void 0 && (Z = { type: void 0, texture: void 0 }, te[W] = Z), (Z.type !== I || Z.texture !== oe) && (H !== W && (s.activeTexture(W), H = W), s.bindTexture(I, oe || $[I]), Z.type = I, Z.texture = oe);
  }
  function B() {
    const I = te[H];
    I !== void 0 && I.type !== void 0 && (s.bindTexture(I.type, null), I.type = void 0, I.texture = void 0);
  }
  function K() {
    try {
      s.compressedTexImage2D.apply(s, arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function J() {
    try {
      s.compressedTexImage3D.apply(s, arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function j() {
    try {
      s.texSubImage2D.apply(s, arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function ge() {
    try {
      s.texSubImage3D.apply(s, arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function ie() {
    try {
      s.compressedTexSubImage2D.apply(s, arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function ue() {
    try {
      s.compressedTexSubImage3D.apply(s, arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function Ye() {
    try {
      s.texStorage2D.apply(s, arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function Q() {
    try {
      s.texStorage3D.apply(s, arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function de() {
    try {
      s.texImage2D.apply(s, arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function we() {
    try {
      s.texImage3D.apply(s, arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function Re(I) {
    Oe.equals(I) === !1 && (s.scissor(I.x, I.y, I.z, I.w), Oe.copy(I));
  }
  function fe(I) {
    We.equals(I) === !1 && (s.viewport(I.x, I.y, I.z, I.w), We.copy(I));
  }
  function ze(I, oe) {
    let W = l.get(oe);
    W === void 0 && (W = /* @__PURE__ */ new WeakMap(), l.set(oe, W));
    let Z = W.get(I);
    Z === void 0 && (Z = s.getUniformBlockIndex(oe, I.name), W.set(I, Z));
  }
  function De(I, oe) {
    const Z = l.get(oe).get(I);
    o.get(oe) !== Z && (s.uniformBlockBinding(oe, Z, I.__bindingPointIndex), o.set(oe, Z));
  }
  function rt() {
    s.disable(s.BLEND), s.disable(s.CULL_FACE), s.disable(s.DEPTH_TEST), s.disable(s.POLYGON_OFFSET_FILL), s.disable(s.SCISSOR_TEST), s.disable(s.STENCIL_TEST), s.disable(s.SAMPLE_ALPHA_TO_COVERAGE), s.blendEquation(s.FUNC_ADD), s.blendFunc(s.ONE, s.ZERO), s.blendFuncSeparate(s.ONE, s.ZERO, s.ONE, s.ZERO), s.blendColor(0, 0, 0, 0), s.colorMask(!0, !0, !0, !0), s.clearColor(0, 0, 0, 0), s.depthMask(!0), s.depthFunc(s.LESS), s.clearDepth(1), s.stencilMask(4294967295), s.stencilFunc(s.ALWAYS, 0, 4294967295), s.stencilOp(s.KEEP, s.KEEP, s.KEEP), s.clearStencil(0), s.cullFace(s.BACK), s.frontFace(s.CCW), s.polygonOffset(0, 0), s.activeTexture(s.TEXTURE0), s.bindFramebuffer(s.FRAMEBUFFER, null), s.bindFramebuffer(s.DRAW_FRAMEBUFFER, null), s.bindFramebuffer(s.READ_FRAMEBUFFER, null), s.useProgram(null), s.lineWidth(1), s.scissor(0, 0, s.canvas.width, s.canvas.height), s.viewport(0, 0, s.canvas.width, s.canvas.height), c = {}, H = null, te = {}, h = {}, u = /* @__PURE__ */ new WeakMap(), d = [], p = null, g = !1, _ = null, f = null, m = null, x = null, y = null, M = null, b = null, w = new be(0, 0, 0), E = 0, R = !1, L = null, v = null, T = null, F = null, O = null, Oe.set(0, 0, s.canvas.width, s.canvas.height), We.set(0, 0, s.canvas.width, s.canvas.height), i.reset(), r.reset(), a.reset();
  }
  return {
    buffers: {
      color: i,
      depth: r,
      stencil: a
    },
    enable: me,
    disable: he,
    bindFramebuffer: Le,
    drawBuffers: Ee,
    useProgram: Ve,
    setBlending: D,
    setMaterial: Qt,
    setFlipSided: ke,
    setCullFace: Xe,
    setLineWidth: Ae,
    setPolygonOffset: at,
    setScissorTest: Ce,
    activeTexture: C,
    bindTexture: S,
    unbindTexture: B,
    compressedTexImage2D: K,
    compressedTexImage3D: J,
    texImage2D: de,
    texImage3D: we,
    updateUBOMapping: ze,
    uniformBlockBinding: De,
    texStorage2D: Ye,
    texStorage3D: Q,
    texSubImage2D: j,
    texSubImage3D: ge,
    compressedTexSubImage2D: ie,
    compressedTexSubImage3D: ue,
    scissor: Re,
    viewport: fe,
    reset: rt
  };
}
function ou(s, e, t, n) {
  const i = ux(n);
  switch (t) {
    case vd:
      return s * e;
    case yd:
      return s * e;
    case Md:
      return s * e * 2;
    case _c:
      return s * e / i.components * i.byteLength;
    case gc:
      return s * e / i.components * i.byteLength;
    case Sd:
      return s * e * 2 / i.components * i.byteLength;
    case vc:
      return s * e * 2 / i.components * i.byteLength;
    case xd:
      return s * e * 3 / i.components * i.byteLength;
    case gn:
      return s * e * 4 / i.components * i.byteLength;
    case xc:
      return s * e * 4 / i.components * i.byteLength;
    case ya:
    case Ma:
      return Math.floor((s + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case Sa:
    case Ea:
      return Math.floor((s + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case pl:
    case _l:
      return Math.max(s, 16) * Math.max(e, 8) / 4;
    case fl:
    case ml:
      return Math.max(s, 8) * Math.max(e, 8) / 2;
    case gl:
    case vl:
      return Math.floor((s + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case xl:
      return Math.floor((s + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case yl:
      return Math.floor((s + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Ml:
      return Math.floor((s + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case Sl:
      return Math.floor((s + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case El:
      return Math.floor((s + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case Tl:
      return Math.floor((s + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case bl:
      return Math.floor((s + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case Al:
      return Math.floor((s + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case wl:
      return Math.floor((s + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case Rl:
      return Math.floor((s + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case Cl:
      return Math.floor((s + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case Pl:
      return Math.floor((s + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case Ll:
      return Math.floor((s + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case Dl:
      return Math.floor((s + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case Il:
      return Math.floor((s + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    case Ta:
    case Nl:
    case Ul:
      return Math.ceil(s / 4) * Math.ceil(e / 4) * 16;
    case Ed:
    case Ol:
      return Math.ceil(s / 4) * Math.ceil(e / 4) * 8;
    case Fl:
    case Bl:
      return Math.ceil(s / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(
    `Unable to determine texture byte length for ${t} format.`
  );
}
function ux(s) {
  switch (s) {
    case ri:
    case md:
      return { byteLength: 1, components: 1 };
    case Tr:
    case _d:
    case Or:
      return { byteLength: 2, components: 1 };
    case pc:
    case mc:
      return { byteLength: 2, components: 4 };
    case Qi:
    case fc:
    case Rn:
      return { byteLength: 4, components: 1 };
    case gd:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${s}.`);
}
function dx(s, e, t, n, i, r, a) {
  const o = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), c = new Me(), h = /* @__PURE__ */ new WeakMap();
  let u;
  const d = /* @__PURE__ */ new WeakMap();
  let p = !1;
  try {
    p = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function g(C, S) {
    return p ? (
      // eslint-disable-next-line compat/compat
      new OffscreenCanvas(C, S)
    ) : wr("canvas");
  }
  function _(C, S, B) {
    let K = 1;
    const J = Ce(C);
    if ((J.width > B || J.height > B) && (K = B / Math.max(J.width, J.height)), K < 1)
      if (typeof HTMLImageElement < "u" && C instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && C instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && C instanceof ImageBitmap || typeof VideoFrame < "u" && C instanceof VideoFrame) {
        const j = Math.floor(K * J.width), ge = Math.floor(K * J.height);
        u === void 0 && (u = g(j, ge));
        const ie = S ? g(j, ge) : u;
        return ie.width = j, ie.height = ge, ie.getContext("2d").drawImage(C, 0, 0, j, ge), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + J.width + "x" + J.height + ") to (" + j + "x" + ge + ")."), ie;
      } else
        return "data" in C && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + J.width + "x" + J.height + ")."), C;
    return C;
  }
  function f(C) {
    return C.generateMipmaps && C.minFilter !== kt && C.minFilter !== an;
  }
  function m(C) {
    s.generateMipmap(C);
  }
  function x(C, S, B, K, J = !1) {
    if (C !== null) {
      if (s[C] !== void 0) return s[C];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + C + "'");
    }
    let j = S;
    if (S === s.RED && (B === s.FLOAT && (j = s.R32F), B === s.HALF_FLOAT && (j = s.R16F), B === s.UNSIGNED_BYTE && (j = s.R8)), S === s.RED_INTEGER && (B === s.UNSIGNED_BYTE && (j = s.R8UI), B === s.UNSIGNED_SHORT && (j = s.R16UI), B === s.UNSIGNED_INT && (j = s.R32UI), B === s.BYTE && (j = s.R8I), B === s.SHORT && (j = s.R16I), B === s.INT && (j = s.R32I)), S === s.RG && (B === s.FLOAT && (j = s.RG32F), B === s.HALF_FLOAT && (j = s.RG16F), B === s.UNSIGNED_BYTE && (j = s.RG8)), S === s.RG_INTEGER && (B === s.UNSIGNED_BYTE && (j = s.RG8UI), B === s.UNSIGNED_SHORT && (j = s.RG16UI), B === s.UNSIGNED_INT && (j = s.RG32UI), B === s.BYTE && (j = s.RG8I), B === s.SHORT && (j = s.RG16I), B === s.INT && (j = s.RG32I)), S === s.RGB_INTEGER && (B === s.UNSIGNED_BYTE && (j = s.RGB8UI), B === s.UNSIGNED_SHORT && (j = s.RGB16UI), B === s.UNSIGNED_INT && (j = s.RGB32UI), B === s.BYTE && (j = s.RGB8I), B === s.SHORT && (j = s.RGB16I), B === s.INT && (j = s.RGB32I)), S === s.RGBA_INTEGER && (B === s.UNSIGNED_BYTE && (j = s.RGBA8UI), B === s.UNSIGNED_SHORT && (j = s.RGBA16UI), B === s.UNSIGNED_INT && (j = s.RGBA32UI), B === s.BYTE && (j = s.RGBA8I), B === s.SHORT && (j = s.RGBA16I), B === s.INT && (j = s.RGBA32I)), S === s.RGB && B === s.UNSIGNED_INT_5_9_9_9_REV && (j = s.RGB9_E5), S === s.RGBA) {
      const ge = J ? Na : qe.getTransfer(K);
      B === s.FLOAT && (j = s.RGBA32F), B === s.HALF_FLOAT && (j = s.RGBA16F), B === s.UNSIGNED_BYTE && (j = ge === lt ? s.SRGB8_ALPHA8 : s.RGBA8), B === s.UNSIGNED_SHORT_4_4_4_4 && (j = s.RGBA4), B === s.UNSIGNED_SHORT_5_5_5_1 && (j = s.RGB5_A1);
    }
    return (j === s.R16F || j === s.R32F || j === s.RG16F || j === s.RG32F || j === s.RGBA16F || j === s.RGBA32F) && e.get("EXT_color_buffer_float"), j;
  }
  function y(C, S) {
    let B;
    return C ? S === null || S === Qi || S === ks ? B = s.DEPTH24_STENCIL8 : S === Rn ? B = s.DEPTH32F_STENCIL8 : S === Tr && (B = s.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : S === null || S === Qi || S === ks ? B = s.DEPTH_COMPONENT24 : S === Rn ? B = s.DEPTH_COMPONENT32F : S === Tr && (B = s.DEPTH_COMPONENT16), B;
  }
  function M(C, S) {
    return f(C) === !0 || C.isFramebufferTexture && C.minFilter !== kt && C.minFilter !== an ? Math.log2(Math.max(S.width, S.height)) + 1 : C.mipmaps !== void 0 && C.mipmaps.length > 0 ? C.mipmaps.length : C.isCompressedTexture && Array.isArray(C.image) ? S.mipmaps.length : 1;
  }
  function b(C) {
    const S = C.target;
    S.removeEventListener("dispose", b), E(S), S.isVideoTexture && h.delete(S);
  }
  function w(C) {
    const S = C.target;
    S.removeEventListener("dispose", w), L(S);
  }
  function E(C) {
    const S = n.get(C);
    if (S.__webglInit === void 0) return;
    const B = C.source, K = d.get(B);
    if (K) {
      const J = K[S.__cacheKey];
      J.usedTimes--, J.usedTimes === 0 && R(C), Object.keys(K).length === 0 && d.delete(B);
    }
    n.remove(C);
  }
  function R(C) {
    const S = n.get(C);
    s.deleteTexture(S.__webglTexture);
    const B = C.source, K = d.get(B);
    delete K[S.__cacheKey], a.memory.textures--;
  }
  function L(C) {
    const S = n.get(C);
    if (C.depthTexture && C.depthTexture.dispose(), C.isWebGLCubeRenderTarget)
      for (let K = 0; K < 6; K++) {
        if (Array.isArray(S.__webglFramebuffer[K]))
          for (let J = 0; J < S.__webglFramebuffer[K].length; J++) s.deleteFramebuffer(S.__webglFramebuffer[K][J]);
        else
          s.deleteFramebuffer(S.__webglFramebuffer[K]);
        S.__webglDepthbuffer && s.deleteRenderbuffer(S.__webglDepthbuffer[K]);
      }
    else {
      if (Array.isArray(S.__webglFramebuffer))
        for (let K = 0; K < S.__webglFramebuffer.length; K++) s.deleteFramebuffer(S.__webglFramebuffer[K]);
      else
        s.deleteFramebuffer(S.__webglFramebuffer);
      if (S.__webglDepthbuffer && s.deleteRenderbuffer(S.__webglDepthbuffer), S.__webglMultisampledFramebuffer && s.deleteFramebuffer(S.__webglMultisampledFramebuffer), S.__webglColorRenderbuffer)
        for (let K = 0; K < S.__webglColorRenderbuffer.length; K++)
          S.__webglColorRenderbuffer[K] && s.deleteRenderbuffer(S.__webglColorRenderbuffer[K]);
      S.__webglDepthRenderbuffer && s.deleteRenderbuffer(S.__webglDepthRenderbuffer);
    }
    const B = C.textures;
    for (let K = 0, J = B.length; K < J; K++) {
      const j = n.get(B[K]);
      j.__webglTexture && (s.deleteTexture(j.__webglTexture), a.memory.textures--), n.remove(B[K]);
    }
    n.remove(C);
  }
  let v = 0;
  function T() {
    v = 0;
  }
  function F() {
    const C = v;
    return C >= i.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + C + " texture units while this GPU supports only " + i.maxTextures), v += 1, C;
  }
  function O(C) {
    const S = [];
    return S.push(C.wrapS), S.push(C.wrapT), S.push(C.wrapR || 0), S.push(C.magFilter), S.push(C.minFilter), S.push(C.anisotropy), S.push(C.internalFormat), S.push(C.format), S.push(C.type), S.push(C.generateMipmaps), S.push(C.premultiplyAlpha), S.push(C.flipY), S.push(C.unpackAlignment), S.push(C.colorSpace), S.join();
  }
  function G(C, S) {
    const B = n.get(C);
    if (C.isVideoTexture && Ae(C), C.isRenderTargetTexture === !1 && C.version > 0 && B.__version !== C.version) {
      const K = C.image;
      if (K === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (K.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        We(B, C, S);
        return;
      }
    }
    t.bindTexture(s.TEXTURE_2D, B.__webglTexture, s.TEXTURE0 + S);
  }
  function q(C, S) {
    const B = n.get(C);
    if (C.version > 0 && B.__version !== C.version) {
      We(B, C, S);
      return;
    }
    t.bindTexture(s.TEXTURE_2D_ARRAY, B.__webglTexture, s.TEXTURE0 + S);
  }
  function z(C, S) {
    const B = n.get(C);
    if (C.version > 0 && B.__version !== C.version) {
      We(B, C, S);
      return;
    }
    t.bindTexture(s.TEXTURE_3D, B.__webglTexture, s.TEXTURE0 + S);
  }
  function X(C, S) {
    const B = n.get(C);
    if (C.version > 0 && B.__version !== C.version) {
      Y(B, C, S);
      return;
    }
    t.bindTexture(s.TEXTURE_CUBE_MAP, B.__webglTexture, s.TEXTURE0 + S);
  }
  const H = {
    [Bs]: s.REPEAT,
    [vi]: s.CLAMP_TO_EDGE,
    [Ia]: s.MIRRORED_REPEAT
  }, te = {
    [kt]: s.NEAREST,
    [pd]: s.NEAREST_MIPMAP_NEAREST,
    [pr]: s.NEAREST_MIPMAP_LINEAR,
    [an]: s.LINEAR,
    [xa]: s.LINEAR_MIPMAP_NEAREST,
    [ii]: s.LINEAR_MIPMAP_LINEAR
  }, se = {
    [Vp]: s.NEVER,
    [qp]: s.ALWAYS,
    [Hp]: s.LESS,
    [Ad]: s.LEQUAL,
    [Gp]: s.EQUAL,
    [Yp]: s.GEQUAL,
    [Wp]: s.GREATER,
    [Xp]: s.NOTEQUAL
  };
  function ce(C, S) {
    if (S.type === Rn && e.has("OES_texture_float_linear") === !1 && (S.magFilter === an || S.magFilter === xa || S.magFilter === pr || S.magFilter === ii || S.minFilter === an || S.minFilter === xa || S.minFilter === pr || S.minFilter === ii) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), s.texParameteri(C, s.TEXTURE_WRAP_S, H[S.wrapS]), s.texParameteri(C, s.TEXTURE_WRAP_T, H[S.wrapT]), (C === s.TEXTURE_3D || C === s.TEXTURE_2D_ARRAY) && s.texParameteri(C, s.TEXTURE_WRAP_R, H[S.wrapR]), s.texParameteri(C, s.TEXTURE_MAG_FILTER, te[S.magFilter]), s.texParameteri(C, s.TEXTURE_MIN_FILTER, te[S.minFilter]), S.compareFunction && (s.texParameteri(C, s.TEXTURE_COMPARE_MODE, s.COMPARE_REF_TO_TEXTURE), s.texParameteri(C, s.TEXTURE_COMPARE_FUNC, se[S.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) {
      if (S.magFilter === kt || S.minFilter !== pr && S.minFilter !== ii || S.type === Rn && e.has("OES_texture_float_linear") === !1) return;
      if (S.anisotropy > 1 || n.get(S).__currentAnisotropy) {
        const B = e.get("EXT_texture_filter_anisotropic");
        s.texParameterf(C, B.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(S.anisotropy, i.getMaxAnisotropy())), n.get(S).__currentAnisotropy = S.anisotropy;
      }
    }
  }
  function Oe(C, S) {
    let B = !1;
    C.__webglInit === void 0 && (C.__webglInit = !0, S.addEventListener("dispose", b));
    const K = S.source;
    let J = d.get(K);
    J === void 0 && (J = {}, d.set(K, J));
    const j = O(S);
    if (j !== C.__cacheKey) {
      J[j] === void 0 && (J[j] = {
        texture: s.createTexture(),
        usedTimes: 0
      }, a.memory.textures++, B = !0), J[j].usedTimes++;
      const ge = J[C.__cacheKey];
      ge !== void 0 && (J[C.__cacheKey].usedTimes--, ge.usedTimes === 0 && R(S)), C.__cacheKey = j, C.__webglTexture = J[j].texture;
    }
    return B;
  }
  function We(C, S, B) {
    let K = s.TEXTURE_2D;
    (S.isDataArrayTexture || S.isCompressedArrayTexture) && (K = s.TEXTURE_2D_ARRAY), S.isData3DTexture && (K = s.TEXTURE_3D);
    const J = Oe(C, S), j = S.source;
    t.bindTexture(K, C.__webglTexture, s.TEXTURE0 + B);
    const ge = n.get(j);
    if (j.version !== ge.__version || J === !0) {
      t.activeTexture(s.TEXTURE0 + B);
      const ie = qe.getPrimaries(qe.workingColorSpace), ue = S.colorSpace === gi ? null : qe.getPrimaries(S.colorSpace), Ye = S.colorSpace === gi || ie === ue ? s.NONE : s.BROWSER_DEFAULT_WEBGL;
      s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, S.flipY), s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, S.premultiplyAlpha), s.pixelStorei(s.UNPACK_ALIGNMENT, S.unpackAlignment), s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL, Ye);
      let Q = _(S.image, !1, i.maxTextureSize);
      Q = at(S, Q);
      const de = r.convert(S.format, S.colorSpace), we = r.convert(S.type);
      let Re = x(S.internalFormat, de, we, S.colorSpace, S.isVideoTexture);
      ce(K, S);
      let fe;
      const ze = S.mipmaps, De = S.isVideoTexture !== !0, rt = ge.__version === void 0 || J === !0, I = j.dataReady, oe = M(S, Q);
      if (S.isDepthTexture)
        Re = y(S.format === zs, S.type), rt && (De ? t.texStorage2D(s.TEXTURE_2D, 1, Re, Q.width, Q.height) : t.texImage2D(s.TEXTURE_2D, 0, Re, Q.width, Q.height, 0, de, we, null));
      else if (S.isDataTexture)
        if (ze.length > 0) {
          De && rt && t.texStorage2D(s.TEXTURE_2D, oe, Re, ze[0].width, ze[0].height);
          for (let W = 0, Z = ze.length; W < Z; W++)
            fe = ze[W], De ? I && t.texSubImage2D(s.TEXTURE_2D, W, 0, 0, fe.width, fe.height, de, we, fe.data) : t.texImage2D(s.TEXTURE_2D, W, Re, fe.width, fe.height, 0, de, we, fe.data);
          S.generateMipmaps = !1;
        } else
          De ? (rt && t.texStorage2D(s.TEXTURE_2D, oe, Re, Q.width, Q.height), I && t.texSubImage2D(s.TEXTURE_2D, 0, 0, 0, Q.width, Q.height, de, we, Q.data)) : t.texImage2D(s.TEXTURE_2D, 0, Re, Q.width, Q.height, 0, de, we, Q.data);
      else if (S.isCompressedTexture)
        if (S.isCompressedArrayTexture) {
          De && rt && t.texStorage3D(s.TEXTURE_2D_ARRAY, oe, Re, ze[0].width, ze[0].height, Q.depth);
          for (let W = 0, Z = ze.length; W < Z; W++)
            if (fe = ze[W], S.format !== gn)
              if (de !== null)
                if (De) {
                  if (I)
                    if (S.layerUpdates.size > 0) {
                      const re = ou(fe.width, fe.height, S.format, S.type);
                      for (const le of S.layerUpdates) {
                        const Ge = fe.data.subarray(
                          le * re / fe.data.BYTES_PER_ELEMENT,
                          (le + 1) * re / fe.data.BYTES_PER_ELEMENT
                        );
                        t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY, W, 0, 0, le, fe.width, fe.height, 1, de, Ge, 0, 0);
                      }
                      S.clearLayerUpdates();
                    } else
                      t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY, W, 0, 0, 0, fe.width, fe.height, Q.depth, de, fe.data, 0, 0);
                } else
                  t.compressedTexImage3D(s.TEXTURE_2D_ARRAY, W, Re, fe.width, fe.height, Q.depth, 0, fe.data, 0, 0);
              else
                console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
            else
              De ? I && t.texSubImage3D(s.TEXTURE_2D_ARRAY, W, 0, 0, 0, fe.width, fe.height, Q.depth, de, we, fe.data) : t.texImage3D(s.TEXTURE_2D_ARRAY, W, Re, fe.width, fe.height, Q.depth, 0, de, we, fe.data);
        } else {
          De && rt && t.texStorage2D(s.TEXTURE_2D, oe, Re, ze[0].width, ze[0].height);
          for (let W = 0, Z = ze.length; W < Z; W++)
            fe = ze[W], S.format !== gn ? de !== null ? De ? I && t.compressedTexSubImage2D(s.TEXTURE_2D, W, 0, 0, fe.width, fe.height, de, fe.data) : t.compressedTexImage2D(s.TEXTURE_2D, W, Re, fe.width, fe.height, 0, fe.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : De ? I && t.texSubImage2D(s.TEXTURE_2D, W, 0, 0, fe.width, fe.height, de, we, fe.data) : t.texImage2D(s.TEXTURE_2D, W, Re, fe.width, fe.height, 0, de, we, fe.data);
        }
      else if (S.isDataArrayTexture)
        if (De) {
          if (rt && t.texStorage3D(s.TEXTURE_2D_ARRAY, oe, Re, Q.width, Q.height, Q.depth), I)
            if (S.layerUpdates.size > 0) {
              const W = ou(Q.width, Q.height, S.format, S.type);
              for (const Z of S.layerUpdates) {
                const re = Q.data.subarray(
                  Z * W / Q.data.BYTES_PER_ELEMENT,
                  (Z + 1) * W / Q.data.BYTES_PER_ELEMENT
                );
                t.texSubImage3D(s.TEXTURE_2D_ARRAY, 0, 0, 0, Z, Q.width, Q.height, 1, de, we, re);
              }
              S.clearLayerUpdates();
            } else
              t.texSubImage3D(s.TEXTURE_2D_ARRAY, 0, 0, 0, 0, Q.width, Q.height, Q.depth, de, we, Q.data);
        } else
          t.texImage3D(s.TEXTURE_2D_ARRAY, 0, Re, Q.width, Q.height, Q.depth, 0, de, we, Q.data);
      else if (S.isData3DTexture)
        De ? (rt && t.texStorage3D(s.TEXTURE_3D, oe, Re, Q.width, Q.height, Q.depth), I && t.texSubImage3D(s.TEXTURE_3D, 0, 0, 0, 0, Q.width, Q.height, Q.depth, de, we, Q.data)) : t.texImage3D(s.TEXTURE_3D, 0, Re, Q.width, Q.height, Q.depth, 0, de, we, Q.data);
      else if (S.isFramebufferTexture) {
        if (rt)
          if (De)
            t.texStorage2D(s.TEXTURE_2D, oe, Re, Q.width, Q.height);
          else {
            let W = Q.width, Z = Q.height;
            for (let re = 0; re < oe; re++)
              t.texImage2D(s.TEXTURE_2D, re, Re, W, Z, 0, de, we, null), W >>= 1, Z >>= 1;
          }
      } else if (ze.length > 0) {
        if (De && rt) {
          const W = Ce(ze[0]);
          t.texStorage2D(s.TEXTURE_2D, oe, Re, W.width, W.height);
        }
        for (let W = 0, Z = ze.length; W < Z; W++)
          fe = ze[W], De ? I && t.texSubImage2D(s.TEXTURE_2D, W, 0, 0, de, we, fe) : t.texImage2D(s.TEXTURE_2D, W, Re, de, we, fe);
        S.generateMipmaps = !1;
      } else if (De) {
        if (rt) {
          const W = Ce(Q);
          t.texStorage2D(s.TEXTURE_2D, oe, Re, W.width, W.height);
        }
        I && t.texSubImage2D(s.TEXTURE_2D, 0, 0, 0, de, we, Q);
      } else
        t.texImage2D(s.TEXTURE_2D, 0, Re, de, we, Q);
      f(S) && m(K), ge.__version = j.version, S.onUpdate && S.onUpdate(S);
    }
    C.__version = S.version;
  }
  function Y(C, S, B) {
    if (S.image.length !== 6) return;
    const K = Oe(C, S), J = S.source;
    t.bindTexture(s.TEXTURE_CUBE_MAP, C.__webglTexture, s.TEXTURE0 + B);
    const j = n.get(J);
    if (J.version !== j.__version || K === !0) {
      t.activeTexture(s.TEXTURE0 + B);
      const ge = qe.getPrimaries(qe.workingColorSpace), ie = S.colorSpace === gi ? null : qe.getPrimaries(S.colorSpace), ue = S.colorSpace === gi || ge === ie ? s.NONE : s.BROWSER_DEFAULT_WEBGL;
      s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, S.flipY), s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, S.premultiplyAlpha), s.pixelStorei(s.UNPACK_ALIGNMENT, S.unpackAlignment), s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL, ue);
      const Ye = S.isCompressedTexture || S.image[0].isCompressedTexture, Q = S.image[0] && S.image[0].isDataTexture, de = [];
      for (let Z = 0; Z < 6; Z++)
        !Ye && !Q ? de[Z] = _(S.image[Z], !0, i.maxCubemapSize) : de[Z] = Q ? S.image[Z].image : S.image[Z], de[Z] = at(S, de[Z]);
      const we = de[0], Re = r.convert(S.format, S.colorSpace), fe = r.convert(S.type), ze = x(S.internalFormat, Re, fe, S.colorSpace), De = S.isVideoTexture !== !0, rt = j.__version === void 0 || K === !0, I = J.dataReady;
      let oe = M(S, we);
      ce(s.TEXTURE_CUBE_MAP, S);
      let W;
      if (Ye) {
        De && rt && t.texStorage2D(s.TEXTURE_CUBE_MAP, oe, ze, we.width, we.height);
        for (let Z = 0; Z < 6; Z++) {
          W = de[Z].mipmaps;
          for (let re = 0; re < W.length; re++) {
            const le = W[re];
            S.format !== gn ? Re !== null ? De ? I && t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + Z, re, 0, 0, le.width, le.height, Re, le.data) : t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + Z, re, ze, le.width, le.height, 0, le.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : De ? I && t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + Z, re, 0, 0, le.width, le.height, Re, fe, le.data) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + Z, re, ze, le.width, le.height, 0, Re, fe, le.data);
          }
        }
      } else {
        if (W = S.mipmaps, De && rt) {
          W.length > 0 && oe++;
          const Z = Ce(de[0]);
          t.texStorage2D(s.TEXTURE_CUBE_MAP, oe, ze, Z.width, Z.height);
        }
        for (let Z = 0; Z < 6; Z++)
          if (Q) {
            De ? I && t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + Z, 0, 0, 0, de[Z].width, de[Z].height, Re, fe, de[Z].data) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + Z, 0, ze, de[Z].width, de[Z].height, 0, Re, fe, de[Z].data);
            for (let re = 0; re < W.length; re++) {
              const Ge = W[re].image[Z].image;
              De ? I && t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + Z, re + 1, 0, 0, Ge.width, Ge.height, Re, fe, Ge.data) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + Z, re + 1, ze, Ge.width, Ge.height, 0, Re, fe, Ge.data);
            }
          } else {
            De ? I && t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + Z, 0, 0, 0, Re, fe, de[Z]) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + Z, 0, ze, Re, fe, de[Z]);
            for (let re = 0; re < W.length; re++) {
              const le = W[re];
              De ? I && t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + Z, re + 1, 0, 0, Re, fe, le.image[Z]) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + Z, re + 1, ze, Re, fe, le.image[Z]);
            }
          }
      }
      f(S) && m(s.TEXTURE_CUBE_MAP), j.__version = J.version, S.onUpdate && S.onUpdate(S);
    }
    C.__version = S.version;
  }
  function $(C, S, B, K, J, j) {
    const ge = r.convert(B.format, B.colorSpace), ie = r.convert(B.type), ue = x(B.internalFormat, ge, ie, B.colorSpace);
    if (!n.get(S).__hasExternalTextures) {
      const Q = Math.max(1, S.width >> j), de = Math.max(1, S.height >> j);
      J === s.TEXTURE_3D || J === s.TEXTURE_2D_ARRAY ? t.texImage3D(J, j, ue, Q, de, S.depth, 0, ge, ie, null) : t.texImage2D(J, j, ue, Q, de, 0, ge, ie, null);
    }
    t.bindFramebuffer(s.FRAMEBUFFER, C), Xe(S) ? o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER, K, J, n.get(B).__webglTexture, 0, ke(S)) : (J === s.TEXTURE_2D || J >= s.TEXTURE_CUBE_MAP_POSITIVE_X && J <= s.TEXTURE_CUBE_MAP_NEGATIVE_Z) && s.framebufferTexture2D(s.FRAMEBUFFER, K, J, n.get(B).__webglTexture, j), t.bindFramebuffer(s.FRAMEBUFFER, null);
  }
  function me(C, S, B) {
    if (s.bindRenderbuffer(s.RENDERBUFFER, C), S.depthBuffer) {
      const K = S.depthTexture, J = K && K.isDepthTexture ? K.type : null, j = y(S.stencilBuffer, J), ge = S.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT, ie = ke(S);
      Xe(S) ? o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER, ie, j, S.width, S.height) : B ? s.renderbufferStorageMultisample(s.RENDERBUFFER, ie, j, S.width, S.height) : s.renderbufferStorage(s.RENDERBUFFER, j, S.width, S.height), s.framebufferRenderbuffer(s.FRAMEBUFFER, ge, s.RENDERBUFFER, C);
    } else {
      const K = S.textures;
      for (let J = 0; J < K.length; J++) {
        const j = K[J], ge = r.convert(j.format, j.colorSpace), ie = r.convert(j.type), ue = x(j.internalFormat, ge, ie, j.colorSpace), Ye = ke(S);
        B && Xe(S) === !1 ? s.renderbufferStorageMultisample(s.RENDERBUFFER, Ye, ue, S.width, S.height) : Xe(S) ? o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER, Ye, ue, S.width, S.height) : s.renderbufferStorage(s.RENDERBUFFER, ue, S.width, S.height);
      }
    }
    s.bindRenderbuffer(s.RENDERBUFFER, null);
  }
  function he(C, S) {
    if (S && S.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(s.FRAMEBUFFER, C), !(S.depthTexture && S.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(S.depthTexture).__webglTexture || S.depthTexture.image.width !== S.width || S.depthTexture.image.height !== S.height) && (S.depthTexture.image.width = S.width, S.depthTexture.image.height = S.height, S.depthTexture.needsUpdate = !0), G(S.depthTexture, 0);
    const K = n.get(S.depthTexture).__webglTexture, J = ke(S);
    if (S.depthTexture.format === Rs)
      Xe(S) ? o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER, s.DEPTH_ATTACHMENT, s.TEXTURE_2D, K, 0, J) : s.framebufferTexture2D(s.FRAMEBUFFER, s.DEPTH_ATTACHMENT, s.TEXTURE_2D, K, 0);
    else if (S.depthTexture.format === zs)
      Xe(S) ? o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER, s.DEPTH_STENCIL_ATTACHMENT, s.TEXTURE_2D, K, 0, J) : s.framebufferTexture2D(s.FRAMEBUFFER, s.DEPTH_STENCIL_ATTACHMENT, s.TEXTURE_2D, K, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function Le(C) {
    const S = n.get(C), B = C.isWebGLCubeRenderTarget === !0;
    if (S.__boundDepthTexture !== C.depthTexture) {
      const K = C.depthTexture;
      if (S.__depthDisposeCallback && S.__depthDisposeCallback(), K) {
        const J = () => {
          delete S.__boundDepthTexture, delete S.__depthDisposeCallback, K.removeEventListener("dispose", J);
        };
        K.addEventListener("dispose", J), S.__depthDisposeCallback = J;
      }
      S.__boundDepthTexture = K;
    }
    if (C.depthTexture && !S.__autoAllocateDepthBuffer) {
      if (B) throw new Error("target.depthTexture not supported in Cube render targets");
      he(S.__webglFramebuffer, C);
    } else if (B) {
      S.__webglDepthbuffer = [];
      for (let K = 0; K < 6; K++)
        if (t.bindFramebuffer(s.FRAMEBUFFER, S.__webglFramebuffer[K]), S.__webglDepthbuffer[K] === void 0)
          S.__webglDepthbuffer[K] = s.createRenderbuffer(), me(S.__webglDepthbuffer[K], C, !1);
        else {
          const J = C.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT, j = S.__webglDepthbuffer[K];
          s.bindRenderbuffer(s.RENDERBUFFER, j), s.framebufferRenderbuffer(s.FRAMEBUFFER, J, s.RENDERBUFFER, j);
        }
    } else if (t.bindFramebuffer(s.FRAMEBUFFER, S.__webglFramebuffer), S.__webglDepthbuffer === void 0)
      S.__webglDepthbuffer = s.createRenderbuffer(), me(S.__webglDepthbuffer, C, !1);
    else {
      const K = C.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT, J = S.__webglDepthbuffer;
      s.bindRenderbuffer(s.RENDERBUFFER, J), s.framebufferRenderbuffer(s.FRAMEBUFFER, K, s.RENDERBUFFER, J);
    }
    t.bindFramebuffer(s.FRAMEBUFFER, null);
  }
  function Ee(C, S, B) {
    const K = n.get(C);
    S !== void 0 && $(K.__webglFramebuffer, C, C.texture, s.COLOR_ATTACHMENT0, s.TEXTURE_2D, 0), B !== void 0 && Le(C);
  }
  function Ve(C) {
    const S = C.texture, B = n.get(C), K = n.get(S);
    C.addEventListener("dispose", w);
    const J = C.textures, j = C.isWebGLCubeRenderTarget === !0, ge = J.length > 1;
    if (ge || (K.__webglTexture === void 0 && (K.__webglTexture = s.createTexture()), K.__version = S.version, a.memory.textures++), j) {
      B.__webglFramebuffer = [];
      for (let ie = 0; ie < 6; ie++)
        if (S.mipmaps && S.mipmaps.length > 0) {
          B.__webglFramebuffer[ie] = [];
          for (let ue = 0; ue < S.mipmaps.length; ue++)
            B.__webglFramebuffer[ie][ue] = s.createFramebuffer();
        } else
          B.__webglFramebuffer[ie] = s.createFramebuffer();
    } else {
      if (S.mipmaps && S.mipmaps.length > 0) {
        B.__webglFramebuffer = [];
        for (let ie = 0; ie < S.mipmaps.length; ie++)
          B.__webglFramebuffer[ie] = s.createFramebuffer();
      } else
        B.__webglFramebuffer = s.createFramebuffer();
      if (ge)
        for (let ie = 0, ue = J.length; ie < ue; ie++) {
          const Ye = n.get(J[ie]);
          Ye.__webglTexture === void 0 && (Ye.__webglTexture = s.createTexture(), a.memory.textures++);
        }
      if (C.samples > 0 && Xe(C) === !1) {
        B.__webglMultisampledFramebuffer = s.createFramebuffer(), B.__webglColorRenderbuffer = [], t.bindFramebuffer(s.FRAMEBUFFER, B.__webglMultisampledFramebuffer);
        for (let ie = 0; ie < J.length; ie++) {
          const ue = J[ie];
          B.__webglColorRenderbuffer[ie] = s.createRenderbuffer(), s.bindRenderbuffer(s.RENDERBUFFER, B.__webglColorRenderbuffer[ie]);
          const Ye = r.convert(ue.format, ue.colorSpace), Q = r.convert(ue.type), de = x(ue.internalFormat, Ye, Q, ue.colorSpace, C.isXRRenderTarget === !0), we = ke(C);
          s.renderbufferStorageMultisample(s.RENDERBUFFER, we, de, C.width, C.height), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + ie, s.RENDERBUFFER, B.__webglColorRenderbuffer[ie]);
        }
        s.bindRenderbuffer(s.RENDERBUFFER, null), C.depthBuffer && (B.__webglDepthRenderbuffer = s.createRenderbuffer(), me(B.__webglDepthRenderbuffer, C, !0)), t.bindFramebuffer(s.FRAMEBUFFER, null);
      }
    }
    if (j) {
      t.bindTexture(s.TEXTURE_CUBE_MAP, K.__webglTexture), ce(s.TEXTURE_CUBE_MAP, S);
      for (let ie = 0; ie < 6; ie++)
        if (S.mipmaps && S.mipmaps.length > 0)
          for (let ue = 0; ue < S.mipmaps.length; ue++)
            $(B.__webglFramebuffer[ie][ue], C, S, s.COLOR_ATTACHMENT0, s.TEXTURE_CUBE_MAP_POSITIVE_X + ie, ue);
        else
          $(B.__webglFramebuffer[ie], C, S, s.COLOR_ATTACHMENT0, s.TEXTURE_CUBE_MAP_POSITIVE_X + ie, 0);
      f(S) && m(s.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (ge) {
      for (let ie = 0, ue = J.length; ie < ue; ie++) {
        const Ye = J[ie], Q = n.get(Ye);
        t.bindTexture(s.TEXTURE_2D, Q.__webglTexture), ce(s.TEXTURE_2D, Ye), $(B.__webglFramebuffer, C, Ye, s.COLOR_ATTACHMENT0 + ie, s.TEXTURE_2D, 0), f(Ye) && m(s.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let ie = s.TEXTURE_2D;
      if ((C.isWebGL3DRenderTarget || C.isWebGLArrayRenderTarget) && (ie = C.isWebGL3DRenderTarget ? s.TEXTURE_3D : s.TEXTURE_2D_ARRAY), t.bindTexture(ie, K.__webglTexture), ce(ie, S), S.mipmaps && S.mipmaps.length > 0)
        for (let ue = 0; ue < S.mipmaps.length; ue++)
          $(B.__webglFramebuffer[ue], C, S, s.COLOR_ATTACHMENT0, ie, ue);
      else
        $(B.__webglFramebuffer, C, S, s.COLOR_ATTACHMENT0, ie, 0);
      f(S) && m(ie), t.unbindTexture();
    }
    C.depthBuffer && Le(C);
  }
  function tt(C) {
    const S = C.textures;
    for (let B = 0, K = S.length; B < K; B++) {
      const J = S[B];
      if (f(J)) {
        const j = C.isWebGLCubeRenderTarget ? s.TEXTURE_CUBE_MAP : s.TEXTURE_2D, ge = n.get(J).__webglTexture;
        t.bindTexture(j, ge), m(j), t.unbindTexture();
      }
    }
  }
  const He = [], D = [];
  function Qt(C) {
    if (C.samples > 0) {
      if (Xe(C) === !1) {
        const S = C.textures, B = C.width, K = C.height;
        let J = s.COLOR_BUFFER_BIT;
        const j = C.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT, ge = n.get(C), ie = S.length > 1;
        if (ie)
          for (let ue = 0; ue < S.length; ue++)
            t.bindFramebuffer(s.FRAMEBUFFER, ge.__webglMultisampledFramebuffer), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + ue, s.RENDERBUFFER, null), t.bindFramebuffer(s.FRAMEBUFFER, ge.__webglFramebuffer), s.framebufferTexture2D(s.DRAW_FRAMEBUFFER, s.COLOR_ATTACHMENT0 + ue, s.TEXTURE_2D, null, 0);
        t.bindFramebuffer(s.READ_FRAMEBUFFER, ge.__webglMultisampledFramebuffer), t.bindFramebuffer(s.DRAW_FRAMEBUFFER, ge.__webglFramebuffer);
        for (let ue = 0; ue < S.length; ue++) {
          if (C.resolveDepthBuffer && (C.depthBuffer && (J |= s.DEPTH_BUFFER_BIT), C.stencilBuffer && C.resolveStencilBuffer && (J |= s.STENCIL_BUFFER_BIT)), ie) {
            s.framebufferRenderbuffer(s.READ_FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.RENDERBUFFER, ge.__webglColorRenderbuffer[ue]);
            const Ye = n.get(S[ue]).__webglTexture;
            s.framebufferTexture2D(s.DRAW_FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.TEXTURE_2D, Ye, 0);
          }
          s.blitFramebuffer(0, 0, B, K, 0, 0, B, K, J, s.NEAREST), l === !0 && (He.length = 0, D.length = 0, He.push(s.COLOR_ATTACHMENT0 + ue), C.depthBuffer && C.resolveDepthBuffer === !1 && (He.push(j), D.push(j), s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER, D)), s.invalidateFramebuffer(s.READ_FRAMEBUFFER, He));
        }
        if (t.bindFramebuffer(s.READ_FRAMEBUFFER, null), t.bindFramebuffer(s.DRAW_FRAMEBUFFER, null), ie)
          for (let ue = 0; ue < S.length; ue++) {
            t.bindFramebuffer(s.FRAMEBUFFER, ge.__webglMultisampledFramebuffer), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + ue, s.RENDERBUFFER, ge.__webglColorRenderbuffer[ue]);
            const Ye = n.get(S[ue]).__webglTexture;
            t.bindFramebuffer(s.FRAMEBUFFER, ge.__webglFramebuffer), s.framebufferTexture2D(s.DRAW_FRAMEBUFFER, s.COLOR_ATTACHMENT0 + ue, s.TEXTURE_2D, Ye, 0);
          }
        t.bindFramebuffer(s.DRAW_FRAMEBUFFER, ge.__webglMultisampledFramebuffer);
      } else if (C.depthBuffer && C.resolveDepthBuffer === !1 && l) {
        const S = C.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT;
        s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER, [S]);
      }
    }
  }
  function ke(C) {
    return Math.min(i.maxSamples, C.samples);
  }
  function Xe(C) {
    const S = n.get(C);
    return C.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && S.__useRenderToTexture !== !1;
  }
  function Ae(C) {
    const S = a.render.frame;
    h.get(C) !== S && (h.set(C, S), C.update());
  }
  function at(C, S) {
    const B = C.colorSpace, K = C.format, J = C.type;
    return C.isCompressedTexture === !0 || C.isVideoTexture === !0 || B !== Lt && B !== gi && (qe.getTransfer(B) === lt ? (K !== gn || J !== ri) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", B)), S;
  }
  function Ce(C) {
    return typeof HTMLImageElement < "u" && C instanceof HTMLImageElement ? (c.width = C.naturalWidth || C.width, c.height = C.naturalHeight || C.height) : typeof VideoFrame < "u" && C instanceof VideoFrame ? (c.width = C.displayWidth, c.height = C.displayHeight) : (c.width = C.width, c.height = C.height), c;
  }
  this.allocateTextureUnit = F, this.resetTextureUnits = T, this.setTexture2D = G, this.setTexture2DArray = q, this.setTexture3D = z, this.setTextureCube = X, this.rebindTextures = Ee, this.setupRenderTarget = Ve, this.updateRenderTargetMipmap = tt, this.updateMultisampleRenderTarget = Qt, this.setupDepthRenderbuffer = Le, this.setupFrameBufferTexture = $, this.useMultisampledRTT = Xe;
}
function fx(s, e) {
  function t(n, i = gi) {
    let r;
    const a = qe.getTransfer(i);
    if (n === ri) return s.UNSIGNED_BYTE;
    if (n === pc) return s.UNSIGNED_SHORT_4_4_4_4;
    if (n === mc) return s.UNSIGNED_SHORT_5_5_5_1;
    if (n === gd) return s.UNSIGNED_INT_5_9_9_9_REV;
    if (n === md) return s.BYTE;
    if (n === _d) return s.SHORT;
    if (n === Tr) return s.UNSIGNED_SHORT;
    if (n === fc) return s.INT;
    if (n === Qi) return s.UNSIGNED_INT;
    if (n === Rn) return s.FLOAT;
    if (n === Or) return s.HALF_FLOAT;
    if (n === vd) return s.ALPHA;
    if (n === xd) return s.RGB;
    if (n === gn) return s.RGBA;
    if (n === yd) return s.LUMINANCE;
    if (n === Md) return s.LUMINANCE_ALPHA;
    if (n === Rs) return s.DEPTH_COMPONENT;
    if (n === zs) return s.DEPTH_STENCIL;
    if (n === _c) return s.RED;
    if (n === gc) return s.RED_INTEGER;
    if (n === Sd) return s.RG;
    if (n === vc) return s.RG_INTEGER;
    if (n === xc) return s.RGBA_INTEGER;
    if (n === ya || n === Ma || n === Sa || n === Ea)
      if (a === lt)
        if (r = e.get("WEBGL_compressed_texture_s3tc_srgb"), r !== null) {
          if (n === ya) return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (n === Ma) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (n === Sa) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (n === Ea) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (r = e.get("WEBGL_compressed_texture_s3tc"), r !== null) {
        if (n === ya) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n === Ma) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n === Sa) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n === Ea) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (n === fl || n === pl || n === ml || n === _l)
      if (r = e.get("WEBGL_compressed_texture_pvrtc"), r !== null) {
        if (n === fl) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === pl) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === ml) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === _l) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (n === gl || n === vl || n === xl)
      if (r = e.get("WEBGL_compressed_texture_etc"), r !== null) {
        if (n === gl || n === vl) return a === lt ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2;
        if (n === xl) return a === lt ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : r.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (n === yl || n === Ml || n === Sl || n === El || n === Tl || n === bl || n === Al || n === wl || n === Rl || n === Cl || n === Pl || n === Ll || n === Dl || n === Il)
      if (r = e.get("WEBGL_compressed_texture_astc"), r !== null) {
        if (n === yl) return a === lt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === Ml) return a === lt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === Sl) return a === lt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === El) return a === lt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === Tl) return a === lt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === bl) return a === lt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === Al) return a === lt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === wl) return a === lt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === Rl) return a === lt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === Cl) return a === lt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === Pl) return a === lt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === Ll) return a === lt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === Dl) return a === lt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === Il) return a === lt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : r.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (n === Ta || n === Nl || n === Ul)
      if (r = e.get("EXT_texture_compression_bptc"), r !== null) {
        if (n === Ta) return a === lt ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : r.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === Nl) return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === Ul) return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else
        return null;
    if (n === Ed || n === Ol || n === Fl || n === Bl)
      if (r = e.get("EXT_texture_compression_rgtc"), r !== null) {
        if (n === Ta) return r.COMPRESSED_RED_RGTC1_EXT;
        if (n === Ol) return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === Fl) return r.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === Bl) return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return n === ks ? s.UNSIGNED_INT_24_8 : s[n] !== void 0 ? s[n] : null;
  }
  return { convert: t };
}
class px extends Bt {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e;
  }
}
class Fn extends ht {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const mx = { type: "move" };
class No {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new Fn(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new Fn(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new P(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new P()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new Fn(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new P(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new P()), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t)
        for (const n of e.hand.values())
          this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  update(e, t, n) {
    let i = null, r = null, a = null;
    const o = this._targetRay, l = this._grip, c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (c && e.hand) {
        a = !0;
        for (const _ of e.hand.values()) {
          const f = t.getJointPose(_, n), m = this._getHandJoint(c, _);
          f !== null && (m.matrix.fromArray(f.transform.matrix), m.matrix.decompose(m.position, m.rotation, m.scale), m.matrixWorldNeedsUpdate = !0, m.jointRadius = f.radius), m.visible = f !== null;
        }
        const h = c.joints["index-finger-tip"], u = c.joints["thumb-tip"], d = h.position.distanceTo(u.position), p = 0.02, g = 5e-3;
        c.inputState.pinching && d > p + g ? (c.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !c.inputState.pinching && d <= p - g && (c.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        l !== null && e.gripSpace && (r = t.getPose(e.gripSpace, n), r !== null && (l.matrix.fromArray(r.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (l.hasLinearVelocity = !0, l.linearVelocity.copy(r.linearVelocity)) : l.hasLinearVelocity = !1, r.angularVelocity ? (l.hasAngularVelocity = !0, l.angularVelocity.copy(r.angularVelocity)) : l.hasAngularVelocity = !1));
      o !== null && (i = t.getPose(e.targetRaySpace, n), i === null && r !== null && (i = r), i !== null && (o.matrix.fromArray(i.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, i.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(i.linearVelocity)) : o.hasLinearVelocity = !1, i.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(i.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(mx)));
    }
    return o !== null && (o.visible = i !== null), l !== null && (l.visible = r !== null), c !== null && (c.visible = a !== null), this;
  }
  // private method
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new Fn();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
const _x = `
void main() {

  gl_Position = vec4( position, 1.0 );

}`, gx = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

  vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

  if ( coord.x >= 1.0 ) {

    gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

  } else {

    gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

  }

}`;
class vx {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(e, t, n) {
    if (this.texture === null) {
      const i = new St(), r = e.properties.get(i);
      r.__webglTexture = t.texture, (t.depthNear != n.depthNear || t.depthFar != n.depthFar) && (this.depthNear = t.depthNear, this.depthFar = t.depthFar), this.texture = i;
    }
  }
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport, n = new wi({
        vertexShader: _x,
        fragmentShader: gx,
        uniforms: {
          depthColor: { value: this.texture },
          depthWidth: { value: t.z },
          depthHeight: { value: t.w }
        }
      });
      this.mesh = new Xt(new Ka(20, 20), n);
    }
    return this.mesh;
  }
  reset() {
    this.texture = null, this.mesh = null;
  }
  getDepthTexture() {
    return this.texture;
  }
}
class xx extends ts {
  constructor(e, t) {
    super();
    const n = this;
    let i = null, r = 1, a = null, o = "local-floor", l = 1, c = null, h = null, u = null, d = null, p = null, g = null;
    const _ = new vx(), f = t.getContextAttributes();
    let m = null, x = null;
    const y = [], M = [], b = new Me();
    let w = null;
    const E = new Bt();
    E.layers.enable(1), E.viewport = new Ke();
    const R = new Bt();
    R.layers.enable(2), R.viewport = new Ke();
    const L = [E, R], v = new px();
    v.layers.enable(1), v.layers.enable(2);
    let T = null, F = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(Y) {
      let $ = y[Y];
      return $ === void 0 && ($ = new No(), y[Y] = $), $.getTargetRaySpace();
    }, this.getControllerGrip = function(Y) {
      let $ = y[Y];
      return $ === void 0 && ($ = new No(), y[Y] = $), $.getGripSpace();
    }, this.getHand = function(Y) {
      let $ = y[Y];
      return $ === void 0 && ($ = new No(), y[Y] = $), $.getHandSpace();
    };
    function O(Y) {
      const $ = M.indexOf(Y.inputSource);
      if ($ === -1)
        return;
      const me = y[$];
      me !== void 0 && (me.update(Y.inputSource, Y.frame, c || a), me.dispatchEvent({ type: Y.type, data: Y.inputSource }));
    }
    function G() {
      i.removeEventListener("select", O), i.removeEventListener("selectstart", O), i.removeEventListener("selectend", O), i.removeEventListener("squeeze", O), i.removeEventListener("squeezestart", O), i.removeEventListener("squeezeend", O), i.removeEventListener("end", G), i.removeEventListener("inputsourceschange", q);
      for (let Y = 0; Y < y.length; Y++) {
        const $ = M[Y];
        $ !== null && (M[Y] = null, y[Y].disconnect($));
      }
      T = null, F = null, _.reset(), e.setRenderTarget(m), p = null, d = null, u = null, i = null, x = null, We.stop(), n.isPresenting = !1, e.setPixelRatio(w), e.setSize(b.width, b.height, !1), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(Y) {
      r = Y, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(Y) {
      o = Y, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || a;
    }, this.setReferenceSpace = function(Y) {
      c = Y;
    }, this.getBaseLayer = function() {
      return d !== null ? d : p;
    }, this.getBinding = function() {
      return u;
    }, this.getFrame = function() {
      return g;
    }, this.getSession = function() {
      return i;
    }, this.setSession = async function(Y) {
      if (i = Y, i !== null) {
        if (m = e.getRenderTarget(), i.addEventListener("select", O), i.addEventListener("selectstart", O), i.addEventListener("selectend", O), i.addEventListener("squeeze", O), i.addEventListener("squeezestart", O), i.addEventListener("squeezeend", O), i.addEventListener("end", G), i.addEventListener("inputsourceschange", q), f.xrCompatible !== !0 && await t.makeXRCompatible(), w = e.getPixelRatio(), e.getSize(b), i.renderState.layers === void 0) {
          const $ = {
            antialias: f.antialias,
            alpha: !0,
            depth: f.depth,
            stencil: f.stencil,
            framebufferScaleFactor: r
          };
          p = new XRWebGLLayer(i, t, $), i.updateRenderState({ baseLayer: p }), e.setPixelRatio(1), e.setSize(p.framebufferWidth, p.framebufferHeight, !1), x = new es(
            p.framebufferWidth,
            p.framebufferHeight,
            {
              format: gn,
              type: ri,
              colorSpace: e.outputColorSpace,
              stencilBuffer: f.stencil
            }
          );
        } else {
          let $ = null, me = null, he = null;
          f.depth && (he = f.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, $ = f.stencil ? zs : Rs, me = f.stencil ? ks : Qi);
          const Le = {
            colorFormat: t.RGBA8,
            depthFormat: he,
            scaleFactor: r
          };
          u = new XRWebGLBinding(i, t), d = u.createProjectionLayer(Le), i.updateRenderState({ layers: [d] }), e.setPixelRatio(1), e.setSize(d.textureWidth, d.textureHeight, !1), x = new es(
            d.textureWidth,
            d.textureHeight,
            {
              format: gn,
              type: ri,
              depthTexture: new Fd(d.textureWidth, d.textureHeight, me, void 0, void 0, void 0, void 0, void 0, void 0, $),
              stencilBuffer: f.stencil,
              colorSpace: e.outputColorSpace,
              samples: f.antialias ? 4 : 0,
              resolveDepthBuffer: d.ignoreDepthValues === !1
            }
          );
        }
        x.isXRRenderTarget = !0, this.setFoveation(l), c = null, a = await i.requestReferenceSpace(o), We.setContext(i), We.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (i !== null)
        return i.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return _.getDepthTexture();
    };
    function q(Y) {
      for (let $ = 0; $ < Y.removed.length; $++) {
        const me = Y.removed[$], he = M.indexOf(me);
        he >= 0 && (M[he] = null, y[he].disconnect(me));
      }
      for (let $ = 0; $ < Y.added.length; $++) {
        const me = Y.added[$];
        let he = M.indexOf(me);
        if (he === -1) {
          for (let Ee = 0; Ee < y.length; Ee++)
            if (Ee >= M.length) {
              M.push(me), he = Ee;
              break;
            } else if (M[Ee] === null) {
              M[Ee] = me, he = Ee;
              break;
            }
          if (he === -1) break;
        }
        const Le = y[he];
        Le && Le.connect(me);
      }
    }
    const z = new P(), X = new P();
    function H(Y, $, me) {
      z.setFromMatrixPosition($.matrixWorld), X.setFromMatrixPosition(me.matrixWorld);
      const he = z.distanceTo(X), Le = $.projectionMatrix.elements, Ee = me.projectionMatrix.elements, Ve = Le[14] / (Le[10] - 1), tt = Le[14] / (Le[10] + 1), He = (Le[9] + 1) / Le[5], D = (Le[9] - 1) / Le[5], Qt = (Le[8] - 1) / Le[0], ke = (Ee[8] + 1) / Ee[0], Xe = Ve * Qt, Ae = Ve * ke, at = he / (-Qt + ke), Ce = at * -Qt;
      if ($.matrixWorld.decompose(Y.position, Y.quaternion, Y.scale), Y.translateX(Ce), Y.translateZ(at), Y.matrixWorld.compose(Y.position, Y.quaternion, Y.scale), Y.matrixWorldInverse.copy(Y.matrixWorld).invert(), Le[10] === -1)
        Y.projectionMatrix.copy($.projectionMatrix), Y.projectionMatrixInverse.copy($.projectionMatrixInverse);
      else {
        const C = Ve + at, S = tt + at, B = Xe - Ce, K = Ae + (he - Ce), J = He * tt / S * C, j = D * tt / S * C;
        Y.projectionMatrix.makePerspective(B, K, J, j, C, S), Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert();
      }
    }
    function te(Y, $) {
      $ === null ? Y.matrixWorld.copy(Y.matrix) : Y.matrixWorld.multiplyMatrices($.matrixWorld, Y.matrix), Y.matrixWorldInverse.copy(Y.matrixWorld).invert();
    }
    this.updateCamera = function(Y) {
      if (i === null) return;
      let $ = Y.near, me = Y.far;
      _.texture !== null && (_.depthNear > 0 && ($ = _.depthNear), _.depthFar > 0 && (me = _.depthFar)), v.near = R.near = E.near = $, v.far = R.far = E.far = me, (T !== v.near || F !== v.far) && (i.updateRenderState({
        depthNear: v.near,
        depthFar: v.far
      }), T = v.near, F = v.far);
      const he = Y.parent, Le = v.cameras;
      te(v, he);
      for (let Ee = 0; Ee < Le.length; Ee++)
        te(Le[Ee], he);
      Le.length === 2 ? H(v, E, R) : v.projectionMatrix.copy(E.projectionMatrix), se(Y, v, he);
    };
    function se(Y, $, me) {
      me === null ? Y.matrix.copy($.matrixWorld) : (Y.matrix.copy(me.matrixWorld), Y.matrix.invert(), Y.matrix.multiply($.matrixWorld)), Y.matrix.decompose(Y.position, Y.quaternion, Y.scale), Y.updateMatrixWorld(!0), Y.projectionMatrix.copy($.projectionMatrix), Y.projectionMatrixInverse.copy($.projectionMatrixInverse), Y.isPerspectiveCamera && (Y.fov = Vs * 2 * Math.atan(1 / Y.projectionMatrix.elements[5]), Y.zoom = 1);
    }
    this.getCamera = function() {
      return v;
    }, this.getFoveation = function() {
      if (!(d === null && p === null))
        return l;
    }, this.setFoveation = function(Y) {
      l = Y, d !== null && (d.fixedFoveation = Y), p !== null && p.fixedFoveation !== void 0 && (p.fixedFoveation = Y);
    }, this.hasDepthSensing = function() {
      return _.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return _.getMesh(v);
    };
    let ce = null;
    function Oe(Y, $) {
      if (h = $.getViewerPose(c || a), g = $, h !== null) {
        const me = h.views;
        p !== null && (e.setRenderTargetFramebuffer(x, p.framebuffer), e.setRenderTarget(x));
        let he = !1;
        me.length !== v.cameras.length && (v.cameras.length = 0, he = !0);
        for (let Ee = 0; Ee < me.length; Ee++) {
          const Ve = me[Ee];
          let tt = null;
          if (p !== null)
            tt = p.getViewport(Ve);
          else {
            const D = u.getViewSubImage(d, Ve);
            tt = D.viewport, Ee === 0 && (e.setRenderTargetTextures(
              x,
              D.colorTexture,
              d.ignoreDepthValues ? void 0 : D.depthStencilTexture
            ), e.setRenderTarget(x));
          }
          let He = L[Ee];
          He === void 0 && (He = new Bt(), He.layers.enable(Ee), He.viewport = new Ke(), L[Ee] = He), He.matrix.fromArray(Ve.transform.matrix), He.matrix.decompose(He.position, He.quaternion, He.scale), He.projectionMatrix.fromArray(Ve.projectionMatrix), He.projectionMatrixInverse.copy(He.projectionMatrix).invert(), He.viewport.set(tt.x, tt.y, tt.width, tt.height), Ee === 0 && (v.matrix.copy(He.matrix), v.matrix.decompose(v.position, v.quaternion, v.scale)), he === !0 && v.cameras.push(He);
        }
        const Le = i.enabledFeatures;
        if (Le && Le.includes("depth-sensing")) {
          const Ee = u.getDepthInformation(me[0]);
          Ee && Ee.isValid && Ee.texture && _.init(e, Ee, i.renderState);
        }
      }
      for (let me = 0; me < y.length; me++) {
        const he = M[me], Le = y[me];
        he !== null && Le !== void 0 && Le.update(he, $, c || a);
      }
      ce && ce(Y, $), $.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: $ }), g = null;
    }
    const We = new Od();
    We.setAnimationLoop(Oe), this.setAnimationLoop = function(Y) {
      ce = Y;
    }, this.dispose = function() {
    };
  }
}
const Bi = /* @__PURE__ */ new Hn(), yx = /* @__PURE__ */ new Ie();
function Mx(s, e) {
  function t(f, m) {
    f.matrixAutoUpdate === !0 && f.updateMatrix(), m.value.copy(f.matrix);
  }
  function n(f, m) {
    m.color.getRGB(f.fogColor.value, Id(s)), m.isFog ? (f.fogNear.value = m.near, f.fogFar.value = m.far) : m.isFogExp2 && (f.fogDensity.value = m.density);
  }
  function i(f, m, x, y, M) {
    m.isMeshBasicMaterial || m.isMeshLambertMaterial ? r(f, m) : m.isMeshToonMaterial ? (r(f, m), u(f, m)) : m.isMeshPhongMaterial ? (r(f, m), h(f, m)) : m.isMeshStandardMaterial ? (r(f, m), d(f, m), m.isMeshPhysicalMaterial && p(f, m, M)) : m.isMeshMatcapMaterial ? (r(f, m), g(f, m)) : m.isMeshDepthMaterial ? r(f, m) : m.isMeshDistanceMaterial ? (r(f, m), _(f, m)) : m.isMeshNormalMaterial ? r(f, m) : m.isLineBasicMaterial ? (a(f, m), m.isLineDashedMaterial && o(f, m)) : m.isPointsMaterial ? l(f, m, x, y) : m.isSpriteMaterial ? c(f, m) : m.isShadowMaterial ? (f.color.value.copy(m.color), f.opacity.value = m.opacity) : m.isShaderMaterial && (m.uniformsNeedUpdate = !1);
  }
  function r(f, m) {
    f.opacity.value = m.opacity, m.color && f.diffuse.value.copy(m.color), m.emissive && f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity), m.map && (f.map.value = m.map, t(m.map, f.mapTransform)), m.alphaMap && (f.alphaMap.value = m.alphaMap, t(m.alphaMap, f.alphaMapTransform)), m.bumpMap && (f.bumpMap.value = m.bumpMap, t(m.bumpMap, f.bumpMapTransform), f.bumpScale.value = m.bumpScale, m.side === Yt && (f.bumpScale.value *= -1)), m.normalMap && (f.normalMap.value = m.normalMap, t(m.normalMap, f.normalMapTransform), f.normalScale.value.copy(m.normalScale), m.side === Yt && f.normalScale.value.negate()), m.displacementMap && (f.displacementMap.value = m.displacementMap, t(m.displacementMap, f.displacementMapTransform), f.displacementScale.value = m.displacementScale, f.displacementBias.value = m.displacementBias), m.emissiveMap && (f.emissiveMap.value = m.emissiveMap, t(m.emissiveMap, f.emissiveMapTransform)), m.specularMap && (f.specularMap.value = m.specularMap, t(m.specularMap, f.specularMapTransform)), m.alphaTest > 0 && (f.alphaTest.value = m.alphaTest);
    const x = e.get(m), y = x.envMap, M = x.envMapRotation;
    y && (f.envMap.value = y, Bi.copy(M), Bi.x *= -1, Bi.y *= -1, Bi.z *= -1, y.isCubeTexture && y.isRenderTargetTexture === !1 && (Bi.y *= -1, Bi.z *= -1), f.envMapRotation.value.setFromMatrix4(yx.makeRotationFromEuler(Bi)), f.flipEnvMap.value = y.isCubeTexture && y.isRenderTargetTexture === !1 ? -1 : 1, f.reflectivity.value = m.reflectivity, f.ior.value = m.ior, f.refractionRatio.value = m.refractionRatio), m.lightMap && (f.lightMap.value = m.lightMap, f.lightMapIntensity.value = m.lightMapIntensity, t(m.lightMap, f.lightMapTransform)), m.aoMap && (f.aoMap.value = m.aoMap, f.aoMapIntensity.value = m.aoMapIntensity, t(m.aoMap, f.aoMapTransform));
  }
  function a(f, m) {
    f.diffuse.value.copy(m.color), f.opacity.value = m.opacity, m.map && (f.map.value = m.map, t(m.map, f.mapTransform));
  }
  function o(f, m) {
    f.dashSize.value = m.dashSize, f.totalSize.value = m.dashSize + m.gapSize, f.scale.value = m.scale;
  }
  function l(f, m, x, y) {
    f.diffuse.value.copy(m.color), f.opacity.value = m.opacity, f.size.value = m.size * x, f.scale.value = y * 0.5, m.map && (f.map.value = m.map, t(m.map, f.uvTransform)), m.alphaMap && (f.alphaMap.value = m.alphaMap, t(m.alphaMap, f.alphaMapTransform)), m.alphaTest > 0 && (f.alphaTest.value = m.alphaTest);
  }
  function c(f, m) {
    f.diffuse.value.copy(m.color), f.opacity.value = m.opacity, f.rotation.value = m.rotation, m.map && (f.map.value = m.map, t(m.map, f.mapTransform)), m.alphaMap && (f.alphaMap.value = m.alphaMap, t(m.alphaMap, f.alphaMapTransform)), m.alphaTest > 0 && (f.alphaTest.value = m.alphaTest);
  }
  function h(f, m) {
    f.specular.value.copy(m.specular), f.shininess.value = Math.max(m.shininess, 1e-4);
  }
  function u(f, m) {
    m.gradientMap && (f.gradientMap.value = m.gradientMap);
  }
  function d(f, m) {
    f.metalness.value = m.metalness, m.metalnessMap && (f.metalnessMap.value = m.metalnessMap, t(m.metalnessMap, f.metalnessMapTransform)), f.roughness.value = m.roughness, m.roughnessMap && (f.roughnessMap.value = m.roughnessMap, t(m.roughnessMap, f.roughnessMapTransform)), m.envMap && (f.envMapIntensity.value = m.envMapIntensity);
  }
  function p(f, m, x) {
    f.ior.value = m.ior, m.sheen > 0 && (f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen), f.sheenRoughness.value = m.sheenRoughness, m.sheenColorMap && (f.sheenColorMap.value = m.sheenColorMap, t(m.sheenColorMap, f.sheenColorMapTransform)), m.sheenRoughnessMap && (f.sheenRoughnessMap.value = m.sheenRoughnessMap, t(m.sheenRoughnessMap, f.sheenRoughnessMapTransform))), m.clearcoat > 0 && (f.clearcoat.value = m.clearcoat, f.clearcoatRoughness.value = m.clearcoatRoughness, m.clearcoatMap && (f.clearcoatMap.value = m.clearcoatMap, t(m.clearcoatMap, f.clearcoatMapTransform)), m.clearcoatRoughnessMap && (f.clearcoatRoughnessMap.value = m.clearcoatRoughnessMap, t(m.clearcoatRoughnessMap, f.clearcoatRoughnessMapTransform)), m.clearcoatNormalMap && (f.clearcoatNormalMap.value = m.clearcoatNormalMap, t(m.clearcoatNormalMap, f.clearcoatNormalMapTransform), f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale), m.side === Yt && f.clearcoatNormalScale.value.negate())), m.dispersion > 0 && (f.dispersion.value = m.dispersion), m.iridescence > 0 && (f.iridescence.value = m.iridescence, f.iridescenceIOR.value = m.iridescenceIOR, f.iridescenceThicknessMinimum.value = m.iridescenceThicknessRange[0], f.iridescenceThicknessMaximum.value = m.iridescenceThicknessRange[1], m.iridescenceMap && (f.iridescenceMap.value = m.iridescenceMap, t(m.iridescenceMap, f.iridescenceMapTransform)), m.iridescenceThicknessMap && (f.iridescenceThicknessMap.value = m.iridescenceThicknessMap, t(m.iridescenceThicknessMap, f.iridescenceThicknessMapTransform))), m.transmission > 0 && (f.transmission.value = m.transmission, f.transmissionSamplerMap.value = x.texture, f.transmissionSamplerSize.value.set(x.width, x.height), m.transmissionMap && (f.transmissionMap.value = m.transmissionMap, t(m.transmissionMap, f.transmissionMapTransform)), f.thickness.value = m.thickness, m.thicknessMap && (f.thicknessMap.value = m.thicknessMap, t(m.thicknessMap, f.thicknessMapTransform)), f.attenuationDistance.value = m.attenuationDistance, f.attenuationColor.value.copy(m.attenuationColor)), m.anisotropy > 0 && (f.anisotropyVector.value.set(m.anisotropy * Math.cos(m.anisotropyRotation), m.anisotropy * Math.sin(m.anisotropyRotation)), m.anisotropyMap && (f.anisotropyMap.value = m.anisotropyMap, t(m.anisotropyMap, f.anisotropyMapTransform))), f.specularIntensity.value = m.specularIntensity, f.specularColor.value.copy(m.specularColor), m.specularColorMap && (f.specularColorMap.value = m.specularColorMap, t(m.specularColorMap, f.specularColorMapTransform)), m.specularIntensityMap && (f.specularIntensityMap.value = m.specularIntensityMap, t(m.specularIntensityMap, f.specularIntensityMapTransform));
  }
  function g(f, m) {
    m.matcap && (f.matcap.value = m.matcap);
  }
  function _(f, m) {
    const x = e.get(m).light;
    f.referencePosition.value.setFromMatrixPosition(x.matrixWorld), f.nearDistance.value = x.shadow.camera.near, f.farDistance.value = x.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: i
  };
}
function Sx(s, e, t, n) {
  let i = {}, r = {}, a = [];
  const o = s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(x, y) {
    const M = y.program;
    n.uniformBlockBinding(x, M);
  }
  function c(x, y) {
    let M = i[x.id];
    M === void 0 && (g(x), M = h(x), i[x.id] = M, x.addEventListener("dispose", f));
    const b = y.program;
    n.updateUBOMapping(x, b);
    const w = e.render.frame;
    r[x.id] !== w && (d(x), r[x.id] = w);
  }
  function h(x) {
    const y = u();
    x.__bindingPointIndex = y;
    const M = s.createBuffer(), b = x.__size, w = x.usage;
    return s.bindBuffer(s.UNIFORM_BUFFER, M), s.bufferData(s.UNIFORM_BUFFER, b, w), s.bindBuffer(s.UNIFORM_BUFFER, null), s.bindBufferBase(s.UNIFORM_BUFFER, y, M), M;
  }
  function u() {
    for (let x = 0; x < o; x++)
      if (a.indexOf(x) === -1)
        return a.push(x), x;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function d(x) {
    const y = i[x.id], M = x.uniforms, b = x.__cache;
    s.bindBuffer(s.UNIFORM_BUFFER, y);
    for (let w = 0, E = M.length; w < E; w++) {
      const R = Array.isArray(M[w]) ? M[w] : [M[w]];
      for (let L = 0, v = R.length; L < v; L++) {
        const T = R[L];
        if (p(T, w, L, b) === !0) {
          const F = T.__offset, O = Array.isArray(T.value) ? T.value : [T.value];
          let G = 0;
          for (let q = 0; q < O.length; q++) {
            const z = O[q], X = _(z);
            typeof z == "number" || typeof z == "boolean" ? (T.__data[0] = z, s.bufferSubData(s.UNIFORM_BUFFER, F + G, T.__data)) : z.isMatrix3 ? (T.__data[0] = z.elements[0], T.__data[1] = z.elements[1], T.__data[2] = z.elements[2], T.__data[3] = 0, T.__data[4] = z.elements[3], T.__data[5] = z.elements[4], T.__data[6] = z.elements[5], T.__data[7] = 0, T.__data[8] = z.elements[6], T.__data[9] = z.elements[7], T.__data[10] = z.elements[8], T.__data[11] = 0) : (z.toArray(T.__data, G), G += X.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          s.bufferSubData(s.UNIFORM_BUFFER, F, T.__data);
        }
      }
    }
    s.bindBuffer(s.UNIFORM_BUFFER, null);
  }
  function p(x, y, M, b) {
    const w = x.value, E = y + "_" + M;
    if (b[E] === void 0)
      return typeof w == "number" || typeof w == "boolean" ? b[E] = w : b[E] = w.clone(), !0;
    {
      const R = b[E];
      if (typeof w == "number" || typeof w == "boolean") {
        if (R !== w)
          return b[E] = w, !0;
      } else if (R.equals(w) === !1)
        return R.copy(w), !0;
    }
    return !1;
  }
  function g(x) {
    const y = x.uniforms;
    let M = 0;
    const b = 16;
    for (let E = 0, R = y.length; E < R; E++) {
      const L = Array.isArray(y[E]) ? y[E] : [y[E]];
      for (let v = 0, T = L.length; v < T; v++) {
        const F = L[v], O = Array.isArray(F.value) ? F.value : [F.value];
        for (let G = 0, q = O.length; G < q; G++) {
          const z = O[G], X = _(z), H = M % b, te = H % X.boundary, se = H + te;
          M += te, se !== 0 && b - se < X.storage && (M += b - se), F.__data = new Float32Array(X.storage / Float32Array.BYTES_PER_ELEMENT), F.__offset = M, M += X.storage;
        }
      }
    }
    const w = M % b;
    return w > 0 && (M += b - w), x.__size = M, x.__cache = {}, this;
  }
  function _(x) {
    const y = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof x == "number" || typeof x == "boolean" ? (y.boundary = 4, y.storage = 4) : x.isVector2 ? (y.boundary = 8, y.storage = 8) : x.isVector3 || x.isColor ? (y.boundary = 16, y.storage = 12) : x.isVector4 ? (y.boundary = 16, y.storage = 16) : x.isMatrix3 ? (y.boundary = 48, y.storage = 48) : x.isMatrix4 ? (y.boundary = 64, y.storage = 64) : x.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", x), y;
  }
  function f(x) {
    const y = x.target;
    y.removeEventListener("dispose", f);
    const M = a.indexOf(y.__bindingPointIndex);
    a.splice(M, 1), s.deleteBuffer(i[y.id]), delete i[y.id], delete r[y.id];
  }
  function m() {
    for (const x in i)
      s.deleteBuffer(i[x]);
    a = [], i = {}, r = {};
  }
  return {
    bind: l,
    update: c,
    dispose: m
  };
}
class Ex {
  constructor(e = {}) {
    const {
      canvas: t = hm(),
      context: n = null,
      depth: i = !0,
      stencil: r = !1,
      alpha: a = !1,
      antialias: o = !1,
      premultipliedAlpha: l = !0,
      preserveDrawingBuffer: c = !1,
      powerPreference: h = "default",
      failIfMajorPerformanceCaveat: u = !1
    } = e;
    this.isWebGLRenderer = !0;
    let d;
    if (n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext)
        throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      d = n.getContextAttributes().alpha;
    } else
      d = a;
    const p = new Uint32Array(4), g = new Int32Array(4);
    let _ = null, f = null;
    const m = [], x = [];
    this.domElement = t, this.debug = {
      /**
       * Enables error checking and reporting when shader programs are being compiled
       * @type {boolean}
       */
      checkShaderErrors: !0,
      /**
       * Callback for custom error reporting.
       * @type {?Function}
       */
      onShaderError: null
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this._outputColorSpace = Rt, this.toneMapping = Ti, this.toneMappingExposure = 1;
    const y = this;
    let M = !1, b = 0, w = 0, E = null, R = -1, L = null;
    const v = new Ke(), T = new Ke();
    let F = null;
    const O = new be(0);
    let G = 0, q = t.width, z = t.height, X = 1, H = null, te = null;
    const se = new Ke(0, 0, q, z), ce = new Ke(0, 0, q, z);
    let Oe = !1;
    const We = new Ec();
    let Y = !1, $ = !1;
    const me = new Ie(), he = new Ie(), Le = new P(), Ee = new Ke(), Ve = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    let tt = !1;
    function He() {
      return E === null ? X : 1;
    }
    let D = n;
    function Qt(A, N) {
      return t.getContext(A, N);
    }
    try {
      const A = {
        alpha: !0,
        depth: i,
        stencil: r,
        antialias: o,
        premultipliedAlpha: l,
        preserveDrawingBuffer: c,
        powerPreference: h,
        failIfMajorPerformanceCaveat: u
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${dc}`), t.addEventListener("webglcontextlost", Z, !1), t.addEventListener("webglcontextrestored", re, !1), t.addEventListener("webglcontextcreationerror", le, !1), D === null) {
        const N = "webgl2";
        if (D = Qt(N, A), D === null)
          throw Qt(N) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (A) {
      throw console.error("THREE.WebGLRenderer: " + A.message), A;
    }
    let ke, Xe, Ae, at, Ce, C, S, B, K, J, j, ge, ie, ue, Ye, Q, de, we, Re, fe, ze, De, rt, I;
    function oe() {
      ke = new R0(D), ke.init(), De = new fx(D, ke), Xe = new S0(D, ke, e, De), Ae = new hx(D), Xe.reverseDepthBuffer && Ae.buffers.depth.setReversed(!0), at = new L0(D), Ce = new Kv(), C = new dx(D, ke, Ae, Ce, Xe, De, at), S = new T0(y), B = new w0(y), K = new Bm(D), rt = new y0(D, K), J = new C0(D, K, at, rt), j = new I0(D, J, K, at), Re = new D0(D, Xe, C), Q = new E0(Ce), ge = new jv(y, S, B, ke, Xe, rt, Q), ie = new Mx(y, Ce), ue = new $v(), Ye = new ix(ke), we = new x0(y, S, B, Ae, j, d, l), de = new lx(y, j, Xe), I = new Sx(D, at, Xe, Ae), fe = new M0(D, ke, at), ze = new P0(D, ke, at), at.programs = ge.programs, y.capabilities = Xe, y.extensions = ke, y.properties = Ce, y.renderLists = ue, y.shadowMap = de, y.state = Ae, y.info = at;
    }
    oe();
    const W = new xx(y, D);
    this.xr = W, this.getContext = function() {
      return D;
    }, this.getContextAttributes = function() {
      return D.getContextAttributes();
    }, this.forceContextLoss = function() {
      const A = ke.get("WEBGL_lose_context");
      A && A.loseContext();
    }, this.forceContextRestore = function() {
      const A = ke.get("WEBGL_lose_context");
      A && A.restoreContext();
    }, this.getPixelRatio = function() {
      return X;
    }, this.setPixelRatio = function(A) {
      A !== void 0 && (X = A, this.setSize(q, z, !1));
    }, this.getSize = function(A) {
      return A.set(q, z);
    }, this.setSize = function(A, N, k = !0) {
      if (W.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      q = A, z = N, t.width = Math.floor(A * X), t.height = Math.floor(N * X), k === !0 && (t.style.width = A + "px", t.style.height = N + "px"), this.setViewport(0, 0, A, N);
    }, this.getDrawingBufferSize = function(A) {
      return A.set(q * X, z * X).floor();
    }, this.setDrawingBufferSize = function(A, N, k) {
      q = A, z = N, X = k, t.width = Math.floor(A * k), t.height = Math.floor(N * k), this.setViewport(0, 0, A, N);
    }, this.getCurrentViewport = function(A) {
      return A.copy(v);
    }, this.getViewport = function(A) {
      return A.copy(se);
    }, this.setViewport = function(A, N, k, V) {
      A.isVector4 ? se.set(A.x, A.y, A.z, A.w) : se.set(A, N, k, V), Ae.viewport(v.copy(se).multiplyScalar(X).round());
    }, this.getScissor = function(A) {
      return A.copy(ce);
    }, this.setScissor = function(A, N, k, V) {
      A.isVector4 ? ce.set(A.x, A.y, A.z, A.w) : ce.set(A, N, k, V), Ae.scissor(T.copy(ce).multiplyScalar(X).round());
    }, this.getScissorTest = function() {
      return Oe;
    }, this.setScissorTest = function(A) {
      Ae.setScissorTest(Oe = A);
    }, this.setOpaqueSort = function(A) {
      H = A;
    }, this.setTransparentSort = function(A) {
      te = A;
    }, this.getClearColor = function(A) {
      return A.copy(we.getClearColor());
    }, this.setClearColor = function() {
      we.setClearColor.apply(we, arguments);
    }, this.getClearAlpha = function() {
      return we.getClearAlpha();
    }, this.setClearAlpha = function() {
      we.setClearAlpha.apply(we, arguments);
    }, this.clear = function(A = !0, N = !0, k = !0) {
      let V = 0;
      if (A) {
        let U = !1;
        if (E !== null) {
          const ee = E.texture.format;
          U = ee === xc || ee === vc || ee === gc;
        }
        if (U) {
          const ee = E.texture.type, ae = ee === ri || ee === Qi || ee === Tr || ee === ks || ee === pc || ee === mc, pe = we.getClearColor(), _e = we.getClearAlpha(), Se = pe.r, Te = pe.g, ve = pe.b;
          ae ? (p[0] = Se, p[1] = Te, p[2] = ve, p[3] = _e, D.clearBufferuiv(D.COLOR, 0, p)) : (g[0] = Se, g[1] = Te, g[2] = ve, g[3] = _e, D.clearBufferiv(D.COLOR, 0, g));
        } else
          V |= D.COLOR_BUFFER_BIT;
      }
      N && (V |= D.DEPTH_BUFFER_BIT, D.clearDepth(this.capabilities.reverseDepthBuffer ? 0 : 1)), k && (V |= D.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), D.clear(V);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", Z, !1), t.removeEventListener("webglcontextrestored", re, !1), t.removeEventListener("webglcontextcreationerror", le, !1), ue.dispose(), Ye.dispose(), Ce.dispose(), S.dispose(), B.dispose(), j.dispose(), rt.dispose(), I.dispose(), ge.dispose(), W.dispose(), W.removeEventListener("sessionstart", ih), W.removeEventListener("sessionend", sh), Di.stop();
    };
    function Z(A) {
      A.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), M = !0;
    }
    function re() {
      console.log("THREE.WebGLRenderer: Context Restored."), M = !1;
      const A = at.autoReset, N = de.enabled, k = de.autoUpdate, V = de.needsUpdate, U = de.type;
      oe(), at.autoReset = A, de.enabled = N, de.autoUpdate = k, de.needsUpdate = V, de.type = U;
    }
    function le(A) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", A.statusMessage);
    }
    function Ge(A) {
      const N = A.target;
      N.removeEventListener("dispose", Ge), vt(N);
    }
    function vt(A) {
      Vt(A), Ce.remove(A);
    }
    function Vt(A) {
      const N = Ce.get(A).programs;
      N !== void 0 && (N.forEach(function(k) {
        ge.releaseProgram(k);
      }), A.isShaderMaterial && ge.releaseShaderCache(A));
    }
    this.renderBufferDirect = function(A, N, k, V, U, ee) {
      N === null && (N = Ve);
      const ae = U.isMesh && U.matrixWorld.determinant() < 0, pe = tp(A, N, k, V, U);
      Ae.setMaterial(V, ae);
      let _e = k.index, Se = 1;
      if (V.wireframe === !0) {
        if (_e = J.getWireframeAttribute(k), _e === void 0) return;
        Se = 2;
      }
      const Te = k.drawRange, ve = k.attributes.position;
      let Je = Te.start * Se, ot = (Te.start + Te.count) * Se;
      ee !== null && (Je = Math.max(Je, ee.start * Se), ot = Math.min(ot, (ee.start + ee.count) * Se)), _e !== null ? (Je = Math.max(Je, 0), ot = Math.min(ot, _e.count)) : ve != null && (Je = Math.max(Je, 0), ot = Math.min(ot, ve.count));
      const pt = ot - Je;
      if (pt < 0 || pt === 1 / 0) return;
      rt.setup(U, V, pe, k, _e);
      let en, Ze = fe;
      if (_e !== null && (en = K.get(_e), Ze = ze, Ze.setIndex(en)), U.isMesh)
        V.wireframe === !0 ? (Ae.setLineWidth(V.wireframeLinewidth * He()), Ze.setMode(D.LINES)) : Ze.setMode(D.TRIANGLES);
      else if (U.isLine) {
        let ye = V.linewidth;
        ye === void 0 && (ye = 1), Ae.setLineWidth(ye * He()), U.isLineSegments ? Ze.setMode(D.LINES) : U.isLineLoop ? Ze.setMode(D.LINE_LOOP) : Ze.setMode(D.LINE_STRIP);
      } else U.isPoints ? Ze.setMode(D.POINTS) : U.isSprite && Ze.setMode(D.TRIANGLES);
      if (U.isBatchedMesh)
        if (U._multiDrawInstances !== null)
          Ze.renderMultiDrawInstances(U._multiDrawStarts, U._multiDrawCounts, U._multiDrawCount, U._multiDrawInstances);
        else if (ke.get("WEBGL_multi_draw"))
          Ze.renderMultiDraw(U._multiDrawStarts, U._multiDrawCounts, U._multiDrawCount);
        else {
          const ye = U._multiDrawStarts, wt = U._multiDrawCounts, $e = U._multiDrawCount, Mn = _e ? K.get(_e).bytesPerElement : 1, is = Ce.get(V).currentProgram.getUniforms();
          for (let tn = 0; tn < $e; tn++)
            is.setValue(D, "_gl_DrawID", tn), Ze.render(ye[tn] / Mn, wt[tn]);
        }
      else if (U.isInstancedMesh)
        Ze.renderInstances(Je, pt, U.count);
      else if (k.isInstancedBufferGeometry) {
        const ye = k._maxInstanceCount !== void 0 ? k._maxInstanceCount : 1 / 0, wt = Math.min(k.instanceCount, ye);
        Ze.renderInstances(Je, pt, wt);
      } else
        Ze.render(Je, pt);
    };
    function je(A, N, k) {
      A.transparent === !0 && A.side === Un && A.forceSinglePass === !1 ? (A.side = Yt, A.needsUpdate = !0, Vr(A, N, k), A.side = zn, A.needsUpdate = !0, Vr(A, N, k), A.side = Un) : Vr(A, N, k);
    }
    this.compile = function(A, N, k = null) {
      k === null && (k = A), f = Ye.get(k), f.init(N), x.push(f), k.traverseVisible(function(U) {
        U.isLight && U.layers.test(N.layers) && (f.pushLight(U), U.castShadow && f.pushShadow(U));
      }), A !== k && A.traverseVisible(function(U) {
        U.isLight && U.layers.test(N.layers) && (f.pushLight(U), U.castShadow && f.pushShadow(U));
      }), f.setupLights();
      const V = /* @__PURE__ */ new Set();
      return A.traverse(function(U) {
        if (!(U.isMesh || U.isPoints || U.isLine || U.isSprite))
          return;
        const ee = U.material;
        if (ee)
          if (Array.isArray(ee))
            for (let ae = 0; ae < ee.length; ae++) {
              const pe = ee[ae];
              je(pe, k, U), V.add(pe);
            }
          else
            je(ee, k, U), V.add(ee);
      }), x.pop(), f = null, V;
    }, this.compileAsync = function(A, N, k = null) {
      const V = this.compile(A, N, k);
      return new Promise((U) => {
        function ee() {
          if (V.forEach(function(ae) {
            Ce.get(ae).currentProgram.isReady() && V.delete(ae);
          }), V.size === 0) {
            U(A);
            return;
          }
          setTimeout(ee, 10);
        }
        ke.get("KHR_parallel_shader_compile") !== null ? ee() : setTimeout(ee, 10);
      });
    };
    let Ht = null;
    function Yn(A) {
      Ht && Ht(A);
    }
    function ih() {
      Di.stop();
    }
    function sh() {
      Di.start();
    }
    const Di = new Od();
    Di.setAnimationLoop(Yn), typeof self < "u" && Di.setContext(self), this.setAnimationLoop = function(A) {
      Ht = A, W.setAnimationLoop(A), A === null ? Di.stop() : Di.start();
    }, W.addEventListener("sessionstart", ih), W.addEventListener("sessionend", sh), this.render = function(A, N) {
      if (N !== void 0 && N.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (M === !0) return;
      if (A.matrixWorldAutoUpdate === !0 && A.updateMatrixWorld(), N.parent === null && N.matrixWorldAutoUpdate === !0 && N.updateMatrixWorld(), W.enabled === !0 && W.isPresenting === !0 && (W.cameraAutoUpdate === !0 && W.updateCamera(N), N = W.getCamera()), A.isScene === !0 && A.onBeforeRender(y, A, N, E), f = Ye.get(A, x.length), f.init(N), x.push(f), he.multiplyMatrices(N.projectionMatrix, N.matrixWorldInverse), We.setFromProjectionMatrix(he), $ = this.localClippingEnabled, Y = Q.init(this.clippingPlanes, $), _ = ue.get(A, m.length), _.init(), m.push(_), W.enabled === !0 && W.isPresenting === !0) {
        const ee = y.xr.getDepthSensingMesh();
        ee !== null && to(ee, N, -1 / 0, y.sortObjects);
      }
      to(A, N, 0, y.sortObjects), _.finish(), y.sortObjects === !0 && _.sort(H, te), tt = W.enabled === !1 || W.isPresenting === !1 || W.hasDepthSensing() === !1, tt && we.addToRenderList(_, A), this.info.render.frame++, Y === !0 && Q.beginShadows();
      const k = f.state.shadowsArray;
      de.render(k, A, N), Y === !0 && Q.endShadows(), this.info.autoReset === !0 && this.info.reset();
      const V = _.opaque, U = _.transmissive;
      if (f.setupLights(), N.isArrayCamera) {
        const ee = N.cameras;
        if (U.length > 0)
          for (let ae = 0, pe = ee.length; ae < pe; ae++) {
            const _e = ee[ae];
            ah(V, U, A, _e);
          }
        tt && we.render(A);
        for (let ae = 0, pe = ee.length; ae < pe; ae++) {
          const _e = ee[ae];
          rh(_, A, _e, _e.viewport);
        }
      } else
        U.length > 0 && ah(V, U, A, N), tt && we.render(A), rh(_, A, N);
      E !== null && (C.updateMultisampleRenderTarget(E), C.updateRenderTargetMipmap(E)), A.isScene === !0 && A.onAfterRender(y, A, N), rt.resetDefaultState(), R = -1, L = null, x.pop(), x.length > 0 ? (f = x[x.length - 1], Y === !0 && Q.setGlobalState(y.clippingPlanes, f.state.camera)) : f = null, m.pop(), m.length > 0 ? _ = m[m.length - 1] : _ = null;
    };
    function to(A, N, k, V) {
      if (A.visible === !1) return;
      if (A.layers.test(N.layers)) {
        if (A.isGroup)
          k = A.renderOrder;
        else if (A.isLOD)
          A.autoUpdate === !0 && A.update(N);
        else if (A.isLight)
          f.pushLight(A), A.castShadow && f.pushShadow(A);
        else if (A.isSprite) {
          if (!A.frustumCulled || We.intersectsSprite(A)) {
            V && Ee.setFromMatrixPosition(A.matrixWorld).applyMatrix4(he);
            const ae = j.update(A), pe = A.material;
            pe.visible && _.push(A, ae, pe, k, Ee.z, null);
          }
        } else if ((A.isMesh || A.isLine || A.isPoints) && (!A.frustumCulled || We.intersectsObject(A))) {
          const ae = j.update(A), pe = A.material;
          if (V && (A.boundingSphere !== void 0 ? (A.boundingSphere === null && A.computeBoundingSphere(), Ee.copy(A.boundingSphere.center)) : (ae.boundingSphere === null && ae.computeBoundingSphere(), Ee.copy(ae.boundingSphere.center)), Ee.applyMatrix4(A.matrixWorld).applyMatrix4(he)), Array.isArray(pe)) {
            const _e = ae.groups;
            for (let Se = 0, Te = _e.length; Se < Te; Se++) {
              const ve = _e[Se], Je = pe[ve.materialIndex];
              Je && Je.visible && _.push(A, ae, Je, k, Ee.z, ve);
            }
          } else pe.visible && _.push(A, ae, pe, k, Ee.z, null);
        }
      }
      const ee = A.children;
      for (let ae = 0, pe = ee.length; ae < pe; ae++)
        to(ee[ae], N, k, V);
    }
    function rh(A, N, k, V) {
      const U = A.opaque, ee = A.transmissive, ae = A.transparent;
      f.setupLightsView(k), Y === !0 && Q.setGlobalState(y.clippingPlanes, k), V && Ae.viewport(v.copy(V)), U.length > 0 && zr(U, N, k), ee.length > 0 && zr(ee, N, k), ae.length > 0 && zr(ae, N, k), Ae.buffers.depth.setTest(!0), Ae.buffers.depth.setMask(!0), Ae.buffers.color.setMask(!0), Ae.setPolygonOffset(!1);
    }
    function ah(A, N, k, V) {
      if ((k.isScene === !0 ? k.overrideMaterial : null) !== null)
        return;
      f.state.transmissionRenderTarget[V.id] === void 0 && (f.state.transmissionRenderTarget[V.id] = new es(1, 1, {
        generateMipmaps: !0,
        type: ke.has("EXT_color_buffer_half_float") || ke.has("EXT_color_buffer_float") ? Or : ri,
        minFilter: ii,
        samples: 4,
        stencilBuffer: r,
        resolveDepthBuffer: !1,
        resolveStencilBuffer: !1,
        colorSpace: qe.workingColorSpace
      }));
      const ee = f.state.transmissionRenderTarget[V.id], ae = V.viewport || v;
      ee.setSize(ae.z, ae.w);
      const pe = y.getRenderTarget();
      y.setRenderTarget(ee), y.getClearColor(O), G = y.getClearAlpha(), G < 1 && y.setClearColor(16777215, 0.5), y.clear(), tt && we.render(k);
      const _e = y.toneMapping;
      y.toneMapping = Ti;
      const Se = V.viewport;
      if (V.viewport !== void 0 && (V.viewport = void 0), f.setupLightsView(V), Y === !0 && Q.setGlobalState(y.clippingPlanes, V), zr(A, k, V), C.updateMultisampleRenderTarget(ee), C.updateRenderTargetMipmap(ee), ke.has("WEBGL_multisampled_render_to_texture") === !1) {
        let Te = !1;
        for (let ve = 0, Je = N.length; ve < Je; ve++) {
          const ot = N[ve], pt = ot.object, en = ot.geometry, Ze = ot.material, ye = ot.group;
          if (Ze.side === Un && pt.layers.test(V.layers)) {
            const wt = Ze.side;
            Ze.side = Yt, Ze.needsUpdate = !0, oh(pt, k, V, en, Ze, ye), Ze.side = wt, Ze.needsUpdate = !0, Te = !0;
          }
        }
        Te === !0 && (C.updateMultisampleRenderTarget(ee), C.updateRenderTargetMipmap(ee));
      }
      y.setRenderTarget(pe), y.setClearColor(O, G), Se !== void 0 && (V.viewport = Se), y.toneMapping = _e;
    }
    function zr(A, N, k) {
      const V = N.isScene === !0 ? N.overrideMaterial : null;
      for (let U = 0, ee = A.length; U < ee; U++) {
        const ae = A[U], pe = ae.object, _e = ae.geometry, Se = V === null ? ae.material : V, Te = ae.group;
        pe.layers.test(k.layers) && oh(pe, N, k, _e, Se, Te);
      }
    }
    function oh(A, N, k, V, U, ee) {
      A.onBeforeRender(y, N, k, V, U, ee), A.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse, A.matrixWorld), A.normalMatrix.getNormalMatrix(A.modelViewMatrix), U.onBeforeRender(y, N, k, V, A, ee), U.transparent === !0 && U.side === Un && U.forceSinglePass === !1 ? (U.side = Yt, U.needsUpdate = !0, y.renderBufferDirect(k, N, V, U, A, ee), U.side = zn, U.needsUpdate = !0, y.renderBufferDirect(k, N, V, U, A, ee), U.side = Un) : y.renderBufferDirect(k, N, V, U, A, ee), A.onAfterRender(y, N, k, V, U, ee);
    }
    function Vr(A, N, k) {
      N.isScene !== !0 && (N = Ve);
      const V = Ce.get(A), U = f.state.lights, ee = f.state.shadowsArray, ae = U.state.version, pe = ge.getParameters(A, U.state, ee, N, k), _e = ge.getProgramCacheKey(pe);
      let Se = V.programs;
      V.environment = A.isMeshStandardMaterial ? N.environment : null, V.fog = N.fog, V.envMap = (A.isMeshStandardMaterial ? B : S).get(A.envMap || V.environment), V.envMapRotation = V.environment !== null && A.envMap === null ? N.environmentRotation : A.envMapRotation, Se === void 0 && (A.addEventListener("dispose", Ge), Se = /* @__PURE__ */ new Map(), V.programs = Se);
      let Te = Se.get(_e);
      if (Te !== void 0) {
        if (V.currentProgram === Te && V.lightsStateVersion === ae)
          return ch(A, pe), Te;
      } else
        pe.uniforms = ge.getUniforms(A), A.onBeforeCompile(pe, y), Te = ge.acquireProgram(pe, _e), Se.set(_e, Te), V.uniforms = pe.uniforms;
      const ve = V.uniforms;
      return (!A.isShaderMaterial && !A.isRawShaderMaterial || A.clipping === !0) && (ve.clippingPlanes = Q.uniform), ch(A, pe), V.needsLights = ip(A), V.lightsStateVersion = ae, V.needsLights && (ve.ambientLightColor.value = U.state.ambient, ve.lightProbe.value = U.state.probe, ve.directionalLights.value = U.state.directional, ve.directionalLightShadows.value = U.state.directionalShadow, ve.spotLights.value = U.state.spot, ve.spotLightShadows.value = U.state.spotShadow, ve.rectAreaLights.value = U.state.rectArea, ve.ltc_1.value = U.state.rectAreaLTC1, ve.ltc_2.value = U.state.rectAreaLTC2, ve.pointLights.value = U.state.point, ve.pointLightShadows.value = U.state.pointShadow, ve.hemisphereLights.value = U.state.hemi, ve.directionalShadowMap.value = U.state.directionalShadowMap, ve.directionalShadowMatrix.value = U.state.directionalShadowMatrix, ve.spotShadowMap.value = U.state.spotShadowMap, ve.spotLightMatrix.value = U.state.spotLightMatrix, ve.spotLightMap.value = U.state.spotLightMap, ve.pointShadowMap.value = U.state.pointShadowMap, ve.pointShadowMatrix.value = U.state.pointShadowMatrix), V.currentProgram = Te, V.uniformsList = null, Te;
    }
    function lh(A) {
      if (A.uniformsList === null) {
        const N = A.currentProgram.getUniforms();
        A.uniformsList = Aa.seqWithValue(N.seq, A.uniforms);
      }
      return A.uniformsList;
    }
    function ch(A, N) {
      const k = Ce.get(A);
      k.outputColorSpace = N.outputColorSpace, k.batching = N.batching, k.batchingColor = N.batchingColor, k.instancing = N.instancing, k.instancingColor = N.instancingColor, k.instancingMorph = N.instancingMorph, k.skinning = N.skinning, k.morphTargets = N.morphTargets, k.morphNormals = N.morphNormals, k.morphColors = N.morphColors, k.morphTargetsCount = N.morphTargetsCount, k.numClippingPlanes = N.numClippingPlanes, k.numIntersection = N.numClipIntersection, k.vertexAlphas = N.vertexAlphas, k.vertexTangents = N.vertexTangents, k.toneMapping = N.toneMapping;
    }
    function tp(A, N, k, V, U) {
      N.isScene !== !0 && (N = Ve), C.resetTextureUnits();
      const ee = N.fog, ae = V.isMeshStandardMaterial ? N.environment : null, pe = E === null ? y.outputColorSpace : E.isXRRenderTarget === !0 ? E.texture.colorSpace : Lt, _e = (V.isMeshStandardMaterial ? B : S).get(V.envMap || ae), Se = V.vertexColors === !0 && !!k.attributes.color && k.attributes.color.itemSize === 4, Te = !!k.attributes.tangent && (!!V.normalMap || V.anisotropy > 0), ve = !!k.morphAttributes.position, Je = !!k.morphAttributes.normal, ot = !!k.morphAttributes.color;
      let pt = Ti;
      V.toneMapped && (E === null || E.isXRRenderTarget === !0) && (pt = y.toneMapping);
      const en = k.morphAttributes.position || k.morphAttributes.normal || k.morphAttributes.color, Ze = en !== void 0 ? en.length : 0, ye = Ce.get(V), wt = f.state.lights;
      if (Y === !0 && ($ === !0 || A !== L)) {
        const fn = A === L && V.id === R;
        Q.setState(V, A, fn);
      }
      let $e = !1;
      V.version === ye.__version ? (ye.needsLights && ye.lightsStateVersion !== wt.state.version || ye.outputColorSpace !== pe || U.isBatchedMesh && ye.batching === !1 || !U.isBatchedMesh && ye.batching === !0 || U.isBatchedMesh && ye.batchingColor === !0 && U.colorTexture === null || U.isBatchedMesh && ye.batchingColor === !1 && U.colorTexture !== null || U.isInstancedMesh && ye.instancing === !1 || !U.isInstancedMesh && ye.instancing === !0 || U.isSkinnedMesh && ye.skinning === !1 || !U.isSkinnedMesh && ye.skinning === !0 || U.isInstancedMesh && ye.instancingColor === !0 && U.instanceColor === null || U.isInstancedMesh && ye.instancingColor === !1 && U.instanceColor !== null || U.isInstancedMesh && ye.instancingMorph === !0 && U.morphTexture === null || U.isInstancedMesh && ye.instancingMorph === !1 && U.morphTexture !== null || ye.envMap !== _e || V.fog === !0 && ye.fog !== ee || ye.numClippingPlanes !== void 0 && (ye.numClippingPlanes !== Q.numPlanes || ye.numIntersection !== Q.numIntersection) || ye.vertexAlphas !== Se || ye.vertexTangents !== Te || ye.morphTargets !== ve || ye.morphNormals !== Je || ye.morphColors !== ot || ye.toneMapping !== pt || ye.morphTargetsCount !== Ze) && ($e = !0) : ($e = !0, ye.__version = V.version);
      let Mn = ye.currentProgram;
      $e === !0 && (Mn = Vr(V, N, U));
      let is = !1, tn = !1, no = !1;
      const _t = Mn.getUniforms(), li = ye.uniforms;
      if (Ae.useProgram(Mn.program) && (is = !0, tn = !0, no = !0), V.id !== R && (R = V.id, tn = !0), is || L !== A) {
        Xe.reverseDepthBuffer ? (me.copy(A.projectionMatrix), dm(me), fm(me), _t.setValue(D, "projectionMatrix", me)) : _t.setValue(D, "projectionMatrix", A.projectionMatrix), _t.setValue(D, "viewMatrix", A.matrixWorldInverse);
        const fn = _t.map.cameraPosition;
        fn !== void 0 && fn.setValue(D, Le.setFromMatrixPosition(A.matrixWorld)), Xe.logarithmicDepthBuffer && _t.setValue(
          D,
          "logDepthBufFC",
          2 / (Math.log(A.far + 1) / Math.LN2)
        ), (V.isMeshPhongMaterial || V.isMeshToonMaterial || V.isMeshLambertMaterial || V.isMeshBasicMaterial || V.isMeshStandardMaterial || V.isShaderMaterial) && _t.setValue(D, "isOrthographic", A.isOrthographicCamera === !0), L !== A && (L = A, tn = !0, no = !0);
      }
      if (U.isSkinnedMesh) {
        _t.setOptional(D, U, "bindMatrix"), _t.setOptional(D, U, "bindMatrixInverse");
        const fn = U.skeleton;
        fn && (fn.boneTexture === null && fn.computeBoneTexture(), _t.setValue(D, "boneTexture", fn.boneTexture, C));
      }
      U.isBatchedMesh && (_t.setOptional(D, U, "batchingTexture"), _t.setValue(D, "batchingTexture", U._matricesTexture, C), _t.setOptional(D, U, "batchingIdTexture"), _t.setValue(D, "batchingIdTexture", U._indirectTexture, C), _t.setOptional(D, U, "batchingColorTexture"), U._colorsTexture !== null && _t.setValue(D, "batchingColorTexture", U._colorsTexture, C));
      const io = k.morphAttributes;
      if ((io.position !== void 0 || io.normal !== void 0 || io.color !== void 0) && Re.update(U, k, Mn), (tn || ye.receiveShadow !== U.receiveShadow) && (ye.receiveShadow = U.receiveShadow, _t.setValue(D, "receiveShadow", U.receiveShadow)), V.isMeshGouraudMaterial && V.envMap !== null && (li.envMap.value = _e, li.flipEnvMap.value = _e.isCubeTexture && _e.isRenderTargetTexture === !1 ? -1 : 1), V.isMeshStandardMaterial && V.envMap === null && N.environment !== null && (li.envMapIntensity.value = N.environmentIntensity), tn && (_t.setValue(D, "toneMappingExposure", y.toneMappingExposure), ye.needsLights && np(li, no), ee && V.fog === !0 && ie.refreshFogUniforms(li, ee), ie.refreshMaterialUniforms(li, V, X, z, f.state.transmissionRenderTarget[A.id]), Aa.upload(D, lh(ye), li, C)), V.isShaderMaterial && V.uniformsNeedUpdate === !0 && (Aa.upload(D, lh(ye), li, C), V.uniformsNeedUpdate = !1), V.isSpriteMaterial && _t.setValue(D, "center", U.center), _t.setValue(D, "modelViewMatrix", U.modelViewMatrix), _t.setValue(D, "normalMatrix", U.normalMatrix), _t.setValue(D, "modelMatrix", U.matrixWorld), V.isShaderMaterial || V.isRawShaderMaterial) {
        const fn = V.uniformsGroups;
        for (let so = 0, sp = fn.length; so < sp; so++) {
          const hh = fn[so];
          I.update(hh, Mn), I.bind(hh, Mn);
        }
      }
      return Mn;
    }
    function np(A, N) {
      A.ambientLightColor.needsUpdate = N, A.lightProbe.needsUpdate = N, A.directionalLights.needsUpdate = N, A.directionalLightShadows.needsUpdate = N, A.pointLights.needsUpdate = N, A.pointLightShadows.needsUpdate = N, A.spotLights.needsUpdate = N, A.spotLightShadows.needsUpdate = N, A.rectAreaLights.needsUpdate = N, A.hemisphereLights.needsUpdate = N;
    }
    function ip(A) {
      return A.isMeshLambertMaterial || A.isMeshToonMaterial || A.isMeshPhongMaterial || A.isMeshStandardMaterial || A.isShadowMaterial || A.isShaderMaterial && A.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return b;
    }, this.getActiveMipmapLevel = function() {
      return w;
    }, this.getRenderTarget = function() {
      return E;
    }, this.setRenderTargetTextures = function(A, N, k) {
      Ce.get(A.texture).__webglTexture = N, Ce.get(A.depthTexture).__webglTexture = k;
      const V = Ce.get(A);
      V.__hasExternalTextures = !0, V.__autoAllocateDepthBuffer = k === void 0, V.__autoAllocateDepthBuffer || ke.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), V.__useRenderToTexture = !1);
    }, this.setRenderTargetFramebuffer = function(A, N) {
      const k = Ce.get(A);
      k.__webglFramebuffer = N, k.__useDefaultFramebuffer = N === void 0;
    }, this.setRenderTarget = function(A, N = 0, k = 0) {
      E = A, b = N, w = k;
      let V = !0, U = null, ee = !1, ae = !1;
      if (A) {
        const _e = Ce.get(A);
        if (_e.__useDefaultFramebuffer !== void 0)
          Ae.bindFramebuffer(D.FRAMEBUFFER, null), V = !1;
        else if (_e.__webglFramebuffer === void 0)
          C.setupRenderTarget(A);
        else if (_e.__hasExternalTextures)
          C.rebindTextures(A, Ce.get(A.texture).__webglTexture, Ce.get(A.depthTexture).__webglTexture);
        else if (A.depthBuffer) {
          const ve = A.depthTexture;
          if (_e.__boundDepthTexture !== ve) {
            if (ve !== null && Ce.has(ve) && (A.width !== ve.image.width || A.height !== ve.image.height))
              throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            C.setupDepthRenderbuffer(A);
          }
        }
        const Se = A.texture;
        (Se.isData3DTexture || Se.isDataArrayTexture || Se.isCompressedArrayTexture) && (ae = !0);
        const Te = Ce.get(A).__webglFramebuffer;
        A.isWebGLCubeRenderTarget ? (Array.isArray(Te[N]) ? U = Te[N][k] : U = Te[N], ee = !0) : A.samples > 0 && C.useMultisampledRTT(A) === !1 ? U = Ce.get(A).__webglMultisampledFramebuffer : Array.isArray(Te) ? U = Te[k] : U = Te, v.copy(A.viewport), T.copy(A.scissor), F = A.scissorTest;
      } else
        v.copy(se).multiplyScalar(X).floor(), T.copy(ce).multiplyScalar(X).floor(), F = Oe;
      if (Ae.bindFramebuffer(D.FRAMEBUFFER, U) && V && Ae.drawBuffers(A, U), Ae.viewport(v), Ae.scissor(T), Ae.setScissorTest(F), ee) {
        const _e = Ce.get(A.texture);
        D.framebufferTexture2D(D.FRAMEBUFFER, D.COLOR_ATTACHMENT0, D.TEXTURE_CUBE_MAP_POSITIVE_X + N, _e.__webglTexture, k);
      } else if (ae) {
        const _e = Ce.get(A.texture), Se = N || 0;
        D.framebufferTextureLayer(D.FRAMEBUFFER, D.COLOR_ATTACHMENT0, _e.__webglTexture, k || 0, Se);
      }
      R = -1;
    }, this.readRenderTargetPixels = function(A, N, k, V, U, ee, ae) {
      if (!(A && A.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let pe = Ce.get(A).__webglFramebuffer;
      if (A.isWebGLCubeRenderTarget && ae !== void 0 && (pe = pe[ae]), pe) {
        Ae.bindFramebuffer(D.FRAMEBUFFER, pe);
        try {
          const _e = A.texture, Se = _e.format, Te = _e.type;
          if (!Xe.textureFormatReadable(Se)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!Xe.textureTypeReadable(Te)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          N >= 0 && N <= A.width - V && k >= 0 && k <= A.height - U && D.readPixels(N, k, V, U, De.convert(Se), De.convert(Te), ee);
        } finally {
          const _e = E !== null ? Ce.get(E).__webglFramebuffer : null;
          Ae.bindFramebuffer(D.FRAMEBUFFER, _e);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(A, N, k, V, U, ee, ae) {
      if (!(A && A.isWebGLRenderTarget))
        throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let pe = Ce.get(A).__webglFramebuffer;
      if (A.isWebGLCubeRenderTarget && ae !== void 0 && (pe = pe[ae]), pe) {
        const _e = A.texture, Se = _e.format, Te = _e.type;
        if (!Xe.textureFormatReadable(Se))
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
        if (!Xe.textureTypeReadable(Te))
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
        if (N >= 0 && N <= A.width - V && k >= 0 && k <= A.height - U) {
          Ae.bindFramebuffer(D.FRAMEBUFFER, pe);
          const ve = D.createBuffer();
          D.bindBuffer(D.PIXEL_PACK_BUFFER, ve), D.bufferData(D.PIXEL_PACK_BUFFER, ee.byteLength, D.STREAM_READ), D.readPixels(N, k, V, U, De.convert(Se), De.convert(Te), 0);
          const Je = E !== null ? Ce.get(E).__webglFramebuffer : null;
          Ae.bindFramebuffer(D.FRAMEBUFFER, Je);
          const ot = D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return D.flush(), await um(D, ot, 4), D.bindBuffer(D.PIXEL_PACK_BUFFER, ve), D.getBufferSubData(D.PIXEL_PACK_BUFFER, 0, ee), D.deleteBuffer(ve), D.deleteSync(ot), ee;
        } else
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
      }
    }, this.copyFramebufferToTexture = function(A, N = null, k = 0) {
      A.isTexture !== !0 && (ba("WebGLRenderer: copyFramebufferToTexture function signature has changed."), N = arguments[0] || null, A = arguments[1]);
      const V = Math.pow(2, -k), U = Math.floor(A.image.width * V), ee = Math.floor(A.image.height * V), ae = N !== null ? N.x : 0, pe = N !== null ? N.y : 0;
      C.setTexture2D(A, 0), D.copyTexSubImage2D(D.TEXTURE_2D, k, 0, 0, ae, pe, U, ee), Ae.unbindTexture();
    }, this.copyTextureToTexture = function(A, N, k = null, V = null, U = 0) {
      A.isTexture !== !0 && (ba("WebGLRenderer: copyTextureToTexture function signature has changed."), V = arguments[0] || null, A = arguments[1], N = arguments[2], U = arguments[3] || 0, k = null);
      let ee, ae, pe, _e, Se, Te;
      k !== null ? (ee = k.max.x - k.min.x, ae = k.max.y - k.min.y, pe = k.min.x, _e = k.min.y) : (ee = A.image.width, ae = A.image.height, pe = 0, _e = 0), V !== null ? (Se = V.x, Te = V.y) : (Se = 0, Te = 0);
      const ve = De.convert(N.format), Je = De.convert(N.type);
      C.setTexture2D(N, 0), D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL, N.flipY), D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL, N.premultiplyAlpha), D.pixelStorei(D.UNPACK_ALIGNMENT, N.unpackAlignment);
      const ot = D.getParameter(D.UNPACK_ROW_LENGTH), pt = D.getParameter(D.UNPACK_IMAGE_HEIGHT), en = D.getParameter(D.UNPACK_SKIP_PIXELS), Ze = D.getParameter(D.UNPACK_SKIP_ROWS), ye = D.getParameter(D.UNPACK_SKIP_IMAGES), wt = A.isCompressedTexture ? A.mipmaps[U] : A.image;
      D.pixelStorei(D.UNPACK_ROW_LENGTH, wt.width), D.pixelStorei(D.UNPACK_IMAGE_HEIGHT, wt.height), D.pixelStorei(D.UNPACK_SKIP_PIXELS, pe), D.pixelStorei(D.UNPACK_SKIP_ROWS, _e), A.isDataTexture ? D.texSubImage2D(D.TEXTURE_2D, U, Se, Te, ee, ae, ve, Je, wt.data) : A.isCompressedTexture ? D.compressedTexSubImage2D(D.TEXTURE_2D, U, Se, Te, wt.width, wt.height, ve, wt.data) : D.texSubImage2D(D.TEXTURE_2D, U, Se, Te, ee, ae, ve, Je, wt), D.pixelStorei(D.UNPACK_ROW_LENGTH, ot), D.pixelStorei(D.UNPACK_IMAGE_HEIGHT, pt), D.pixelStorei(D.UNPACK_SKIP_PIXELS, en), D.pixelStorei(D.UNPACK_SKIP_ROWS, Ze), D.pixelStorei(D.UNPACK_SKIP_IMAGES, ye), U === 0 && N.generateMipmaps && D.generateMipmap(D.TEXTURE_2D), Ae.unbindTexture();
    }, this.copyTextureToTexture3D = function(A, N, k = null, V = null, U = 0) {
      A.isTexture !== !0 && (ba("WebGLRenderer: copyTextureToTexture3D function signature has changed."), k = arguments[0] || null, V = arguments[1] || null, A = arguments[2], N = arguments[3], U = arguments[4] || 0);
      let ee, ae, pe, _e, Se, Te, ve, Je, ot;
      const pt = A.isCompressedTexture ? A.mipmaps[U] : A.image;
      k !== null ? (ee = k.max.x - k.min.x, ae = k.max.y - k.min.y, pe = k.max.z - k.min.z, _e = k.min.x, Se = k.min.y, Te = k.min.z) : (ee = pt.width, ae = pt.height, pe = pt.depth, _e = 0, Se = 0, Te = 0), V !== null ? (ve = V.x, Je = V.y, ot = V.z) : (ve = 0, Je = 0, ot = 0);
      const en = De.convert(N.format), Ze = De.convert(N.type);
      let ye;
      if (N.isData3DTexture)
        C.setTexture3D(N, 0), ye = D.TEXTURE_3D;
      else if (N.isDataArrayTexture || N.isCompressedArrayTexture)
        C.setTexture2DArray(N, 0), ye = D.TEXTURE_2D_ARRAY;
      else {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
        return;
      }
      D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL, N.flipY), D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL, N.premultiplyAlpha), D.pixelStorei(D.UNPACK_ALIGNMENT, N.unpackAlignment);
      const wt = D.getParameter(D.UNPACK_ROW_LENGTH), $e = D.getParameter(D.UNPACK_IMAGE_HEIGHT), Mn = D.getParameter(D.UNPACK_SKIP_PIXELS), is = D.getParameter(D.UNPACK_SKIP_ROWS), tn = D.getParameter(D.UNPACK_SKIP_IMAGES);
      D.pixelStorei(D.UNPACK_ROW_LENGTH, pt.width), D.pixelStorei(D.UNPACK_IMAGE_HEIGHT, pt.height), D.pixelStorei(D.UNPACK_SKIP_PIXELS, _e), D.pixelStorei(D.UNPACK_SKIP_ROWS, Se), D.pixelStorei(D.UNPACK_SKIP_IMAGES, Te), A.isDataTexture || A.isData3DTexture ? D.texSubImage3D(ye, U, ve, Je, ot, ee, ae, pe, en, Ze, pt.data) : N.isCompressedArrayTexture ? D.compressedTexSubImage3D(ye, U, ve, Je, ot, ee, ae, pe, en, pt.data) : D.texSubImage3D(ye, U, ve, Je, ot, ee, ae, pe, en, Ze, pt), D.pixelStorei(D.UNPACK_ROW_LENGTH, wt), D.pixelStorei(D.UNPACK_IMAGE_HEIGHT, $e), D.pixelStorei(D.UNPACK_SKIP_PIXELS, Mn), D.pixelStorei(D.UNPACK_SKIP_ROWS, is), D.pixelStorei(D.UNPACK_SKIP_IMAGES, tn), U === 0 && N.generateMipmaps && D.generateMipmap(ye), Ae.unbindTexture();
    }, this.initRenderTarget = function(A) {
      Ce.get(A).__webglFramebuffer === void 0 && C.setupRenderTarget(A);
    }, this.initTexture = function(A) {
      A.isCubeTexture ? C.setTextureCube(A, 0) : A.isData3DTexture ? C.setTexture3D(A, 0) : A.isDataArrayTexture || A.isCompressedArrayTexture ? C.setTexture2DArray(A, 0) : C.setTexture2D(A, 0), Ae.unbindTexture();
    }, this.resetState = function() {
      b = 0, w = 0, E = null, Ae.reset(), rt.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return si;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorSpace = e === yc ? "display-p3" : "srgb", t.unpackColorSpace = qe.workingColorSpace === ja ? "display-p3" : "srgb";
  }
}
class Tx extends ht {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new Hn(), this.environmentIntensity = 1, this.environmentRotation = new Hn(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t;
  }
}
class bx {
  constructor(e, t) {
    this.isInterleavedBuffer = !0, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = zl, this.updateRanges = [], this.version = 0, this.uuid = Cn();
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this;
  }
  copyAt(e, t, n) {
    e *= this.stride, n *= t.stride;
    for (let i = 0, r = this.stride; i < r; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  clone(e) {
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Cn()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(t, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  toJSON(e) {
    return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Cn()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
      uuid: this.uuid,
      buffer: this.array.buffer._uuid,
      type: this.array.constructor.name,
      stride: this.stride
    };
  }
}
const Ot = /* @__PURE__ */ new P();
class Ac {
  constructor(e, t, n, i = !1) {
    this.isInterleavedBufferAttribute = !0, this.name = "", this.data = e, this.itemSize = t, this.offset = n, this.normalized = i;
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(e) {
    this.data.needsUpdate = e;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.data.count; t < n; t++)
      Ot.fromBufferAttribute(this, t), Ot.applyMatrix4(e), this.setXYZ(t, Ot.x, Ot.y, Ot.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Ot.fromBufferAttribute(this, t), Ot.applyNormalMatrix(e), this.setXYZ(t, Ot.x, Ot.y, Ot.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Ot.fromBufferAttribute(this, t), Ot.transformDirection(e), this.setXYZ(t, Ot.x, Ot.y, Ot.z);
    return this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.data.stride + this.offset + t];
    return this.normalized && (n = bn(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = Qe(n, this.array)), this.data.array[e * this.data.stride + this.offset + t] = n, this;
  }
  setX(e, t) {
    return this.normalized && (t = Qe(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this;
  }
  setY(e, t) {
    return this.normalized && (t = Qe(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this;
  }
  setZ(e, t) {
    return this.normalized && (t = Qe(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this;
  }
  setW(e, t) {
    return this.normalized && (t = Qe(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this;
  }
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    return this.normalized && (t = bn(t, this.array)), t;
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = bn(t, this.array)), t;
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = bn(t, this.array)), t;
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = bn(t, this.array)), t;
  }
  setXY(e, t, n) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Qe(t, this.array), n = Qe(n, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Qe(t, this.array), n = Qe(n, this.array), i = Qe(i, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, r) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Qe(t, this.array), n = Qe(n, this.array), i = Qe(i, this.array), r = Qe(r, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this.data.array[e + 3] = r, this;
  }
  clone(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++)
          t.push(this.data.array[i + r]);
      }
      return new zt(new this.array.constructor(t), this.itemSize, this.normalized);
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new Ac(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  toJSON(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++)
          t.push(this.data.array[i + r]);
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: t,
        normalized: this.normalized
      };
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), {
        isInterleavedBufferAttribute: !0,
        itemSize: this.itemSize,
        data: this.data.uuid,
        offset: this.offset,
        normalized: this.normalized
      };
  }
}
const lu = /* @__PURE__ */ new P(), cu = /* @__PURE__ */ new Ke(), hu = /* @__PURE__ */ new Ke(), Ax = /* @__PURE__ */ new P(), uu = /* @__PURE__ */ new Ie(), la = /* @__PURE__ */ new P(), Uo = /* @__PURE__ */ new Pn(), du = /* @__PURE__ */ new Ie(), Oo = /* @__PURE__ */ new $s();
class wx extends Xt {
  constructor(e, t) {
    super(e, t), this.isSkinnedMesh = !0, this.type = "SkinnedMesh", this.bindMode = mh, this.bindMatrix = new Ie(), this.bindMatrixInverse = new Ie(), this.boundingBox = null, this.boundingSphere = null;
  }
  computeBoundingBox() {
    const e = this.geometry;
    this.boundingBox === null && (this.boundingBox = new Wn()), this.boundingBox.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      this.getVertexPosition(n, la), this.boundingBox.expandByPoint(la);
  }
  computeBoundingSphere() {
    const e = this.geometry;
    this.boundingSphere === null && (this.boundingSphere = new Pn()), this.boundingSphere.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      this.getVertexPosition(n, la), this.boundingSphere.expandByPoint(la);
  }
  copy(e, t) {
    return super.copy(e, t), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  raycast(e, t) {
    const n = this.material, i = this.matrixWorld;
    n !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), Uo.copy(this.boundingSphere), Uo.applyMatrix4(i), e.ray.intersectsSphere(Uo) !== !1 && (du.copy(i).invert(), Oo.copy(e.ray).applyMatrix4(du), !(this.boundingBox !== null && Oo.intersectsBox(this.boundingBox) === !1) && this._computeIntersections(e, t, Oo)));
  }
  getVertexPosition(e, t) {
    return super.getVertexPosition(e, t), this.applyBoneTransform(e, t), t;
  }
  bind(e, t) {
    this.skeleton = e, t === void 0 && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.copy(t).invert();
  }
  pose() {
    this.skeleton.pose();
  }
  normalizeSkinWeights() {
    const e = new Ke(), t = this.geometry.attributes.skinWeight;
    for (let n = 0, i = t.count; n < i; n++) {
      e.fromBufferAttribute(t, n);
      const r = 1 / e.manhattanLength();
      r !== 1 / 0 ? e.multiplyScalar(r) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w);
    }
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.bindMode === mh ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === Up ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
  }
  applyBoneTransform(e, t) {
    const n = this.skeleton, i = this.geometry;
    cu.fromBufferAttribute(i.attributes.skinIndex, e), hu.fromBufferAttribute(i.attributes.skinWeight, e), lu.copy(t).applyMatrix4(this.bindMatrix), t.set(0, 0, 0);
    for (let r = 0; r < 4; r++) {
      const a = hu.getComponent(r);
      if (a !== 0) {
        const o = cu.getComponent(r);
        uu.multiplyMatrices(n.bones[o].matrixWorld, n.boneInverses[o]), t.addScaledVector(Ax.copy(lu).applyMatrix4(uu), a);
      }
    }
    return t.applyMatrix4(this.bindMatrixInverse);
  }
}
class Hd extends ht {
  constructor() {
    super(), this.isBone = !0, this.type = "Bone";
  }
}
class Gd extends St {
  constructor(e = null, t = 1, n = 1, i, r, a, o, l, c = kt, h = kt, u, d) {
    super(null, a, o, l, c, h, i, r, u, d), this.isDataTexture = !0, this.image = { data: e, width: t, height: n }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
const fu = /* @__PURE__ */ new Ie(), Rx = /* @__PURE__ */ new Ie();
class wc {
  constructor(e = [], t = []) {
    this.uuid = Cn(), this.bones = e.slice(0), this.boneInverses = t, this.boneMatrices = null, this.boneTexture = null, this.init();
  }
  init() {
    const e = this.bones, t = this.boneInverses;
    if (this.boneMatrices = new Float32Array(e.length * 16), t.length === 0)
      this.calculateInverses();
    else if (e.length !== t.length) {
      console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
      for (let n = 0, i = this.bones.length; n < i; n++)
        this.boneInverses.push(new Ie());
    }
  }
  calculateInverses() {
    this.boneInverses.length = 0;
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = new Ie();
      this.bones[e] && n.copy(this.bones[e].matrixWorld).invert(), this.boneInverses.push(n);
    }
  }
  pose() {
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && n.matrixWorld.copy(this.boneInverses[e]).invert();
    }
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && (n.parent && n.parent.isBone ? (n.matrix.copy(n.parent.matrixWorld).invert(), n.matrix.multiply(n.matrixWorld)) : n.matrix.copy(n.matrixWorld), n.matrix.decompose(n.position, n.quaternion, n.scale));
    }
  }
  update() {
    const e = this.bones, t = this.boneInverses, n = this.boneMatrices, i = this.boneTexture;
    for (let r = 0, a = e.length; r < a; r++) {
      const o = e[r] ? e[r].matrixWorld : Rx;
      fu.multiplyMatrices(o, t[r]), fu.toArray(n, r * 16);
    }
    i !== null && (i.needsUpdate = !0);
  }
  clone() {
    return new wc(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let e = Math.sqrt(this.bones.length * 4);
    e = Math.ceil(e / 4) * 4, e = Math.max(e, 4);
    const t = new Float32Array(e * e * 4);
    t.set(this.boneMatrices);
    const n = new Gd(t, e, e, gn, Rn);
    return n.needsUpdate = !0, this.boneMatrices = t, this.boneTexture = n, this;
  }
  getBoneByName(e) {
    for (let t = 0, n = this.bones.length; t < n; t++) {
      const i = this.bones[t];
      if (i.name === e)
        return i;
    }
  }
  dispose() {
    this.boneTexture !== null && (this.boneTexture.dispose(), this.boneTexture = null);
  }
  fromJSON(e, t) {
    this.uuid = e.uuid;
    for (let n = 0, i = e.bones.length; n < i; n++) {
      const r = e.bones[n];
      let a = t[r];
      a === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", r), a = new Hd()), this.bones.push(a), this.boneInverses.push(new Ie().fromArray(e.boneInverses[n]));
    }
    return this.init(), this;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "Skeleton",
        generator: "Skeleton.toJSON"
      },
      bones: [],
      boneInverses: []
    };
    e.uuid = this.uuid;
    const t = this.bones, n = this.boneInverses;
    for (let i = 0, r = t.length; i < r; i++) {
      const a = t[i];
      e.bones.push(a.uuid);
      const o = n[i];
      e.boneInverses.push(o.toArray());
    }
    return e;
  }
}
class Gl extends zt {
  constructor(e, t, n, i = 1) {
    super(e, t, n), this.isInstancedBufferAttribute = !0, this.meshPerAttribute = i;
  }
  copy(e) {
    return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = !0, e;
  }
}
const vs = /* @__PURE__ */ new Ie(), pu = /* @__PURE__ */ new Ie(), ca = [], mu = /* @__PURE__ */ new Wn(), Cx = /* @__PURE__ */ new Ie(), or = /* @__PURE__ */ new Xt(), lr = /* @__PURE__ */ new Pn();
class Px extends Xt {
  constructor(e, t, n) {
    super(e, t), this.isInstancedMesh = !0, this.instanceMatrix = new Gl(new Float32Array(n * 16), 16), this.instanceColor = null, this.morphTexture = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
    for (let i = 0; i < n; i++)
      this.setMatrixAt(i, Cx);
  }
  computeBoundingBox() {
    const e = this.geometry, t = this.count;
    this.boundingBox === null && (this.boundingBox = new Wn()), e.boundingBox === null && e.computeBoundingBox(), this.boundingBox.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, vs), mu.copy(e.boundingBox).applyMatrix4(vs), this.boundingBox.union(mu);
  }
  computeBoundingSphere() {
    const e = this.geometry, t = this.count;
    this.boundingSphere === null && (this.boundingSphere = new Pn()), e.boundingSphere === null && e.computeBoundingSphere(), this.boundingSphere.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, vs), lr.copy(e.boundingSphere).applyMatrix4(vs), this.boundingSphere.union(lr);
  }
  copy(e, t) {
    return super.copy(e, t), this.instanceMatrix.copy(e.instanceMatrix), e.morphTexture !== null && (this.morphTexture = e.morphTexture.clone()), e.instanceColor !== null && (this.instanceColor = e.instanceColor.clone()), this.count = e.count, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  getColorAt(e, t) {
    t.fromArray(this.instanceColor.array, e * 3);
  }
  getMatrixAt(e, t) {
    t.fromArray(this.instanceMatrix.array, e * 16);
  }
  getMorphAt(e, t) {
    const n = t.morphTargetInfluences, i = this.morphTexture.source.data.data, r = n.length + 1, a = e * r + 1;
    for (let o = 0; o < n.length; o++)
      n[o] = i[a + o];
  }
  raycast(e, t) {
    const n = this.matrixWorld, i = this.count;
    if (or.geometry = this.geometry, or.material = this.material, or.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), lr.copy(this.boundingSphere), lr.applyMatrix4(n), e.ray.intersectsSphere(lr) !== !1))
      for (let r = 0; r < i; r++) {
        this.getMatrixAt(r, vs), pu.multiplyMatrices(n, vs), or.matrixWorld = pu, or.raycast(e, ca);
        for (let a = 0, o = ca.length; a < o; a++) {
          const l = ca[a];
          l.instanceId = r, l.object = this, t.push(l);
        }
        ca.length = 0;
      }
  }
  setColorAt(e, t) {
    this.instanceColor === null && (this.instanceColor = new Gl(new Float32Array(this.instanceMatrix.count * 3).fill(1), 3)), t.toArray(this.instanceColor.array, e * 3);
  }
  setMatrixAt(e, t) {
    t.toArray(this.instanceMatrix.array, e * 16);
  }
  setMorphAt(e, t) {
    const n = t.morphTargetInfluences, i = n.length + 1;
    this.morphTexture === null && (this.morphTexture = new Gd(new Float32Array(i * this.count), i, this.count, _c, Rn));
    const r = this.morphTexture.source.data.data;
    let a = 0;
    for (let c = 0; c < n.length; c++)
      a += n[c];
    const o = this.geometry.morphTargetsRelative ? 1 : 1 - a, l = i * e;
    r[l] = o, r.set(n, l + 1);
  }
  updateMorphTargets() {
  }
  dispose() {
    return this.dispatchEvent({ type: "dispose" }), this.morphTexture !== null && (this.morphTexture.dispose(), this.morphTexture = null), this;
  }
}
class Wd extends kn {
  constructor(e) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new be(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const Ba = /* @__PURE__ */ new P(), ka = /* @__PURE__ */ new P(), _u = /* @__PURE__ */ new Ie(), cr = /* @__PURE__ */ new $s(), ha = /* @__PURE__ */ new Pn(), Fo = /* @__PURE__ */ new P(), gu = /* @__PURE__ */ new P();
class Rc extends ht {
  constructor(e = new Ln(), t = new Wd()) {
    super(), this.isLine = !0, this.type = "Line", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [0];
      for (let i = 1, r = t.count; i < r; i++)
        Ba.fromBufferAttribute(t, i - 1), ka.fromBufferAttribute(t, i), n[i] = n[i - 1], n[i] += Ba.distanceTo(ka);
      e.setAttribute("lineDistance", new yn(n, 1));
    } else
      console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, r = e.params.Line.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), ha.copy(n.boundingSphere), ha.applyMatrix4(i), ha.radius += r, e.ray.intersectsSphere(ha) === !1) return;
    _u.copy(i).invert(), cr.copy(e.ray).applyMatrix4(_u);
    const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = this.isLineSegments ? 2 : 1, h = n.index, d = n.attributes.position;
    if (h !== null) {
      const p = Math.max(0, a.start), g = Math.min(h.count, a.start + a.count);
      for (let _ = p, f = g - 1; _ < f; _ += c) {
        const m = h.getX(_), x = h.getX(_ + 1), y = ua(this, e, cr, l, m, x);
        y && t.push(y);
      }
      if (this.isLineLoop) {
        const _ = h.getX(g - 1), f = h.getX(p), m = ua(this, e, cr, l, _, f);
        m && t.push(m);
      }
    } else {
      const p = Math.max(0, a.start), g = Math.min(d.count, a.start + a.count);
      for (let _ = p, f = g - 1; _ < f; _ += c) {
        const m = ua(this, e, cr, l, _, _ + 1);
        m && t.push(m);
      }
      if (this.isLineLoop) {
        const _ = ua(this, e, cr, l, g - 1, p);
        _ && t.push(_);
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, a = i.length; r < a; r++) {
          const o = i[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = r;
        }
      }
    }
  }
}
function ua(s, e, t, n, i, r) {
  const a = s.geometry.attributes.position;
  if (Ba.fromBufferAttribute(a, i), ka.fromBufferAttribute(a, r), t.distanceSqToSegment(Ba, ka, Fo, gu) > n) return;
  Fo.applyMatrix4(s.matrixWorld);
  const l = e.ray.origin.distanceTo(Fo);
  if (!(l < e.near || l > e.far))
    return {
      distance: l,
      // What do we want? intersection point on the ray or on the segment??
      // point: raycaster.ray.at( distance ),
      point: gu.clone().applyMatrix4(s.matrixWorld),
      index: i,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: s
    };
}
const vu = /* @__PURE__ */ new P(), xu = /* @__PURE__ */ new P();
class Lx extends Rc {
  constructor(e, t) {
    super(e, t), this.isLineSegments = !0, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [];
      for (let i = 0, r = t.count; i < r; i += 2)
        vu.fromBufferAttribute(t, i), xu.fromBufferAttribute(t, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + vu.distanceTo(xu);
      e.setAttribute("lineDistance", new yn(n, 1));
    } else
      console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class Dx extends Rc {
  constructor(e, t) {
    super(e, t), this.isLineLoop = !0, this.type = "LineLoop";
  }
}
class Xd extends kn {
  constructor(e) {
    super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new be(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const yu = /* @__PURE__ */ new Ie(), Wl = /* @__PURE__ */ new $s(), da = /* @__PURE__ */ new Pn(), fa = /* @__PURE__ */ new P();
class Ix extends ht {
  constructor(e = new Ln(), t = new Xd()) {
    super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, r = e.params.Points.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), da.copy(n.boundingSphere), da.applyMatrix4(i), da.radius += r, e.ray.intersectsSphere(da) === !1) return;
    yu.copy(i).invert(), Wl.copy(e.ray).applyMatrix4(yu);
    const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = n.index, u = n.attributes.position;
    if (c !== null) {
      const d = Math.max(0, a.start), p = Math.min(c.count, a.start + a.count);
      for (let g = d, _ = p; g < _; g++) {
        const f = c.getX(g);
        fa.fromBufferAttribute(u, f), Mu(fa, f, l, i, e, t, this);
      }
    } else {
      const d = Math.max(0, a.start), p = Math.min(u.count, a.start + a.count);
      for (let g = d, _ = p; g < _; g++)
        fa.fromBufferAttribute(u, g), Mu(fa, g, l, i, e, t, this);
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, a = i.length; r < a; r++) {
          const o = i[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = r;
        }
      }
    }
  }
}
function Mu(s, e, t, n, i, r, a) {
  const o = Wl.distanceSqToPoint(s);
  if (o < t) {
    const l = new P();
    Wl.closestPointToPoint(s, l), l.applyMatrix4(n);
    const c = i.ray.origin.distanceTo(l);
    if (c < i.near || c > i.far) return;
    r.push({
      distance: c,
      distanceToRay: Math.sqrt(o),
      point: l,
      index: e,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: a
    });
  }
}
class Nx extends St {
  constructor(e, t, n, i, r, a, o, l, c) {
    super(e, t, n, i, r, a, o, l, c), this.isCanvasTexture = !0, this.needsUpdate = !0;
  }
}
class Cc extends Ln {
  constructor(e = [], t = [], n = 1, i = 0) {
    super(), this.type = "PolyhedronGeometry", this.parameters = {
      vertices: e,
      indices: t,
      radius: n,
      detail: i
    };
    const r = [], a = [];
    o(i), c(n), h(), this.setAttribute("position", new yn(r, 3)), this.setAttribute("normal", new yn(r.slice(), 3)), this.setAttribute("uv", new yn(a, 2)), i === 0 ? this.computeVertexNormals() : this.normalizeNormals();
    function o(x) {
      const y = new P(), M = new P(), b = new P();
      for (let w = 0; w < t.length; w += 3)
        p(t[w + 0], y), p(t[w + 1], M), p(t[w + 2], b), l(y, M, b, x);
    }
    function l(x, y, M, b) {
      const w = b + 1, E = [];
      for (let R = 0; R <= w; R++) {
        E[R] = [];
        const L = x.clone().lerp(M, R / w), v = y.clone().lerp(M, R / w), T = w - R;
        for (let F = 0; F <= T; F++)
          F === 0 && R === w ? E[R][F] = L : E[R][F] = L.clone().lerp(v, F / T);
      }
      for (let R = 0; R < w; R++)
        for (let L = 0; L < 2 * (w - R) - 1; L++) {
          const v = Math.floor(L / 2);
          L % 2 === 0 ? (d(E[R][v + 1]), d(E[R + 1][v]), d(E[R][v])) : (d(E[R][v + 1]), d(E[R + 1][v + 1]), d(E[R + 1][v]));
        }
    }
    function c(x) {
      const y = new P();
      for (let M = 0; M < r.length; M += 3)
        y.x = r[M + 0], y.y = r[M + 1], y.z = r[M + 2], y.normalize().multiplyScalar(x), r[M + 0] = y.x, r[M + 1] = y.y, r[M + 2] = y.z;
    }
    function h() {
      const x = new P();
      for (let y = 0; y < r.length; y += 3) {
        x.x = r[y + 0], x.y = r[y + 1], x.z = r[y + 2];
        const M = f(x) / 2 / Math.PI + 0.5, b = m(x) / Math.PI + 0.5;
        a.push(M, 1 - b);
      }
      g(), u();
    }
    function u() {
      for (let x = 0; x < a.length; x += 6) {
        const y = a[x + 0], M = a[x + 2], b = a[x + 4], w = Math.max(y, M, b), E = Math.min(y, M, b);
        w > 0.9 && E < 0.1 && (y < 0.2 && (a[x + 0] += 1), M < 0.2 && (a[x + 2] += 1), b < 0.2 && (a[x + 4] += 1));
      }
    }
    function d(x) {
      r.push(x.x, x.y, x.z);
    }
    function p(x, y) {
      const M = x * 3;
      y.x = e[M + 0], y.y = e[M + 1], y.z = e[M + 2];
    }
    function g() {
      const x = new P(), y = new P(), M = new P(), b = new P(), w = new Me(), E = new Me(), R = new Me();
      for (let L = 0, v = 0; L < r.length; L += 9, v += 6) {
        x.set(r[L + 0], r[L + 1], r[L + 2]), y.set(r[L + 3], r[L + 4], r[L + 5]), M.set(r[L + 6], r[L + 7], r[L + 8]), w.set(a[v + 0], a[v + 1]), E.set(a[v + 2], a[v + 3]), R.set(a[v + 4], a[v + 5]), b.copy(x).add(y).add(M).divideScalar(3);
        const T = f(b);
        _(w, v + 0, x, T), _(E, v + 2, y, T), _(R, v + 4, M, T);
      }
    }
    function _(x, y, M, b) {
      b < 0 && x.x === 1 && (a[y] = x.x - 1), M.x === 0 && M.z === 0 && (a[y] = b / 2 / Math.PI + 0.5);
    }
    function f(x) {
      return Math.atan2(x.z, -x.x);
    }
    function m(x) {
      return Math.atan2(-x.y, Math.sqrt(x.x * x.x + x.z * x.z));
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Cc(e.vertices, e.indices, e.radius, e.details);
  }
}
class Pc extends Cc {
  constructor(e = 1, t = 0) {
    const n = (1 + Math.sqrt(5)) / 2, i = [
      -1,
      n,
      0,
      1,
      n,
      0,
      -1,
      -n,
      0,
      1,
      -n,
      0,
      0,
      -1,
      n,
      0,
      1,
      n,
      0,
      -1,
      -n,
      0,
      1,
      -n,
      n,
      0,
      -1,
      n,
      0,
      1,
      -n,
      0,
      -1,
      -n,
      0,
      1
    ], r = [
      0,
      11,
      5,
      0,
      5,
      1,
      0,
      1,
      7,
      0,
      7,
      10,
      0,
      10,
      11,
      1,
      5,
      9,
      5,
      11,
      4,
      11,
      10,
      2,
      10,
      7,
      6,
      7,
      1,
      8,
      3,
      9,
      4,
      3,
      4,
      2,
      3,
      2,
      6,
      3,
      6,
      8,
      3,
      8,
      9,
      4,
      9,
      5,
      2,
      4,
      11,
      6,
      2,
      10,
      8,
      6,
      7,
      9,
      8,
      1
    ];
    super(i, r, e, t), this.type = "IcosahedronGeometry", this.parameters = {
      radius: e,
      detail: t
    };
  }
  static fromJSON(e) {
    return new Pc(e.radius, e.detail);
  }
}
class Lc extends kn {
  constructor(e) {
    super(), this.isMeshStandardMaterial = !0, this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new be(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new be(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = bd, this.normalScale = new Me(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Hn(), this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class Dn extends Lc {
  constructor(e) {
    super(), this.isMeshPhysicalMaterial = !0, this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new Me(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
      get: function() {
        return Ct(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
      },
      set: function(t) {
        this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
      }
    }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new be(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new be(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new be(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._dispersion = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(e);
  }
  get anisotropy() {
    return this._anisotropy;
  }
  set anisotropy(e) {
    this._anisotropy > 0 != e > 0 && this.version++, this._anisotropy = e;
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(e) {
    this._clearcoat > 0 != e > 0 && this.version++, this._clearcoat = e;
  }
  get iridescence() {
    return this._iridescence;
  }
  set iridescence(e) {
    this._iridescence > 0 != e > 0 && this.version++, this._iridescence = e;
  }
  get dispersion() {
    return this._dispersion;
  }
  set dispersion(e) {
    this._dispersion > 0 != e > 0 && this.version++, this._dispersion = e;
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(e) {
    this._sheen > 0 != e > 0 && this.version++, this._sheen = e;
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(e) {
    this._transmission > 0 != e > 0 && this.version++, this._transmission = e;
  }
  copy(e) {
    return super.copy(e), this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.anisotropy = e.anisotropy, this.anisotropyRotation = e.anisotropyRotation, this.anisotropyMap = e.anisotropyMap, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.dispersion = e.dispersion, this.ior = e.ior, this.iridescence = e.iridescence, this.iridescenceMap = e.iridescenceMap, this.iridescenceIOR = e.iridescenceIOR, this.iridescenceThicknessRange = [...e.iridescenceThicknessRange], this.iridescenceThicknessMap = e.iridescenceThicknessMap, this.sheen = e.sheen, this.sheenColor.copy(e.sheenColor), this.sheenColorMap = e.sheenColorMap, this.sheenRoughness = e.sheenRoughness, this.sheenRoughnessMap = e.sheenRoughnessMap, this.transmission = e.transmission, this.transmissionMap = e.transmissionMap, this.thickness = e.thickness, this.thicknessMap = e.thicknessMap, this.attenuationDistance = e.attenuationDistance, this.attenuationColor.copy(e.attenuationColor), this.specularIntensity = e.specularIntensity, this.specularIntensityMap = e.specularIntensityMap, this.specularColor.copy(e.specularColor), this.specularColorMap = e.specularColorMap, this;
  }
}
function pa(s, e, t) {
  return !s || // let 'undefined' and 'null' pass
  !t && s.constructor === e ? s : typeof e.BYTES_PER_ELEMENT == "number" ? new e(s) : Array.prototype.slice.call(s);
}
function Ux(s) {
  return ArrayBuffer.isView(s) && !(s instanceof DataView);
}
function Ox(s) {
  function e(i, r) {
    return s[i] - s[r];
  }
  const t = s.length, n = new Array(t);
  for (let i = 0; i !== t; ++i) n[i] = i;
  return n.sort(e), n;
}
function Su(s, e, t) {
  const n = s.length, i = new s.constructor(n);
  for (let r = 0, a = 0; a !== n; ++r) {
    const o = t[r] * e;
    for (let l = 0; l !== e; ++l)
      i[a++] = s[o + l];
  }
  return i;
}
function Yd(s, e, t, n) {
  let i = 1, r = s[0];
  for (; r !== void 0 && r[n] === void 0; )
    r = s[i++];
  if (r === void 0) return;
  let a = r[n];
  if (a !== void 0)
    if (Array.isArray(a))
      do
        a = r[n], a !== void 0 && (e.push(r.time), t.push.apply(t, a)), r = s[i++];
      while (r !== void 0);
    else if (a.toArray !== void 0)
      do
        a = r[n], a !== void 0 && (e.push(r.time), a.toArray(t, t.length)), r = s[i++];
      while (r !== void 0);
    else
      do
        a = r[n], a !== void 0 && (e.push(r.time), t.push(a)), r = s[i++];
      while (r !== void 0);
}
class Br {
  constructor(e, t, n, i) {
    this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = i !== void 0 ? i : new t.constructor(n), this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
  }
  evaluate(e) {
    const t = this.parameterPositions;
    let n = this._cachedIndex, i = t[n], r = t[n - 1];
    n: {
      e: {
        let a;
        t: {
          i: if (!(e < i)) {
            for (let o = n + 2; ; ) {
              if (i === void 0) {
                if (e < r) break i;
                return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
              }
              if (n === o) break;
              if (r = i, i = t[++n], e < i)
                break e;
            }
            a = t.length;
            break t;
          }
          if (!(e >= r)) {
            const o = t[1];
            e < o && (n = 2, r = o);
            for (let l = n - 2; ; ) {
              if (r === void 0)
                return this._cachedIndex = 0, this.copySampleValue_(0);
              if (n === l) break;
              if (i = r, r = t[--n - 1], e >= r)
                break e;
            }
            a = n, n = 0;
            break t;
          }
          break n;
        }
        for (; n < a; ) {
          const o = n + a >>> 1;
          e < t[o] ? a = o : n = o + 1;
        }
        if (i = t[n], r = t[n - 1], r === void 0)
          return this._cachedIndex = 0, this.copySampleValue_(0);
        if (i === void 0)
          return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
      }
      this._cachedIndex = n, this.intervalChanged_(n, r, i);
    }
    return this.interpolate_(n, r, e, i);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, r = e * i;
    for (let a = 0; a !== i; ++a)
      t[a] = n[r + a];
    return t;
  }
  // Template methods for derived classes:
  interpolate_() {
    throw new Error("call to abstract method");
  }
  intervalChanged_() {
  }
}
class Fx extends Br {
  constructor(e, t, n, i) {
    super(e, t, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
      endingStart: _h,
      endingEnd: _h
    };
  }
  intervalChanged_(e, t, n) {
    const i = this.parameterPositions;
    let r = e - 2, a = e + 1, o = i[r], l = i[a];
    if (o === void 0)
      switch (this.getSettings_().endingStart) {
        case gh:
          r = e, o = 2 * t - n;
          break;
        case vh:
          r = i.length - 2, o = t + i[r] - i[r + 1];
          break;
        default:
          r = e, o = n;
      }
    if (l === void 0)
      switch (this.getSettings_().endingEnd) {
        case gh:
          a = e, l = 2 * n - t;
          break;
        case vh:
          a = 1, l = n + i[1] - i[0];
          break;
        default:
          a = e - 1, l = t;
      }
    const c = (n - t) * 0.5, h = this.valueSize;
    this._weightPrev = c / (t - o), this._weightNext = c / (l - n), this._offsetPrev = r * h, this._offsetNext = a * h;
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = e * o, c = l - o, h = this._offsetPrev, u = this._offsetNext, d = this._weightPrev, p = this._weightNext, g = (n - t) / (i - t), _ = g * g, f = _ * g, m = -d * f + 2 * d * _ - d * g, x = (1 + d) * f + (-1.5 - 2 * d) * _ + (-0.5 + d) * g + 1, y = (-1 - p) * f + (1.5 + p) * _ + 0.5 * g, M = p * f - p * _;
    for (let b = 0; b !== o; ++b)
      r[b] = m * a[h + b] + x * a[c + b] + y * a[l + b] + M * a[u + b];
    return r;
  }
}
class Bx extends Br {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = e * o, c = l - o, h = (n - t) / (i - t), u = 1 - h;
    for (let d = 0; d !== o; ++d)
      r[d] = a[c + d] * u + a[l + d] * h;
    return r;
  }
}
class kx extends Br {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}
class Xn {
  constructor(e, t, n, i) {
    if (e === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (t === void 0 || t.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    this.name = e, this.times = pa(t, this.TimeBufferType), this.values = pa(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
  }
  // Serialization (in static context, because of constructor invocation
  // and automatic invocation of .toJSON):
  static toJSON(e) {
    const t = e.constructor;
    let n;
    if (t.toJSON !== this.toJSON)
      n = t.toJSON(e);
    else {
      n = {
        name: e.name,
        times: pa(e.times, Array),
        values: pa(e.values, Array)
      };
      const i = e.getInterpolation();
      i !== e.DefaultInterpolation && (n.interpolation = i);
    }
    return n.type = e.ValueTypeName, n;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new kx(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new Bx(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new Fx(this.times, this.values, this.getValueSize(), e);
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case br:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case Ar:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case ro:
        t = this.InterpolantFactoryMethodSmooth;
        break;
    }
    if (t === void 0) {
      const n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
      if (this.createInterpolant === void 0)
        if (e !== this.DefaultInterpolation)
          this.setInterpolation(this.DefaultInterpolation);
        else
          throw new Error(n);
      return console.warn("THREE.KeyframeTrack:", n), this;
    }
    return this.createInterpolant = t, this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return br;
      case this.InterpolantFactoryMethodLinear:
        return Ar;
      case this.InterpolantFactoryMethodSmooth:
        return ro;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  // move all keyframes either forwards or backwards in time
  shift(e) {
    if (e !== 0) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n)
        t[n] += e;
    }
    return this;
  }
  // scale all keyframe times by a factor (useful for frame <-> seconds conversions)
  scale(e) {
    if (e !== 1) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n)
        t[n] *= e;
    }
    return this;
  }
  // removes keyframes before and after animation without changing any values within the range [startTime, endTime].
  // IMPORTANT: We do not shift around keys to the start of the track time, because for interpolated keys this will change their values
  trim(e, t) {
    const n = this.times, i = n.length;
    let r = 0, a = i - 1;
    for (; r !== i && n[r] < e; )
      ++r;
    for (; a !== -1 && n[a] > t; )
      --a;
    if (++a, r !== 0 || a !== i) {
      r >= a && (a = Math.max(a, 1), r = a - 1);
      const o = this.getValueSize();
      this.times = n.slice(r, a), this.values = this.values.slice(r * o, a * o);
    }
    return this;
  }
  // ensure we do not get a GarbageInGarbageOut situation, make sure tracks are at least minimally viable
  validate() {
    let e = !0;
    const t = this.getValueSize();
    t - Math.floor(t) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = !1);
    const n = this.times, i = this.values, r = n.length;
    r === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = !1);
    let a = null;
    for (let o = 0; o !== r; o++) {
      const l = n[o];
      if (typeof l == "number" && isNaN(l)) {
        console.error("THREE.KeyframeTrack: Time is not a valid number.", this, o, l), e = !1;
        break;
      }
      if (a !== null && a > l) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, o, l, a), e = !1;
        break;
      }
      a = l;
    }
    if (i !== void 0 && Ux(i))
      for (let o = 0, l = i.length; o !== l; ++o) {
        const c = i[o];
        if (isNaN(c)) {
          console.error("THREE.KeyframeTrack: Value is not a valid number.", this, o, c), e = !1;
          break;
        }
      }
    return e;
  }
  // removes equivalent sequential keys as common in morph target sequences
  // (0,0,0,0,1,1,1,0,0,0,0,0,0,0) --> (0,0,1,1,0,0)
  optimize() {
    const e = this.times.slice(), t = this.values.slice(), n = this.getValueSize(), i = this.getInterpolation() === ro, r = e.length - 1;
    let a = 1;
    for (let o = 1; o < r; ++o) {
      let l = !1;
      const c = e[o], h = e[o + 1];
      if (c !== h && (o !== 1 || c !== e[0]))
        if (i)
          l = !0;
        else {
          const u = o * n, d = u - n, p = u + n;
          for (let g = 0; g !== n; ++g) {
            const _ = t[u + g];
            if (_ !== t[d + g] || _ !== t[p + g]) {
              l = !0;
              break;
            }
          }
        }
      if (l) {
        if (o !== a) {
          e[a] = e[o];
          const u = o * n, d = a * n;
          for (let p = 0; p !== n; ++p)
            t[d + p] = t[u + p];
        }
        ++a;
      }
    }
    if (r > 0) {
      e[a] = e[r];
      for (let o = r * n, l = a * n, c = 0; c !== n; ++c)
        t[l + c] = t[o + c];
      ++a;
    }
    return a !== e.length ? (this.times = e.slice(0, a), this.values = t.slice(0, a * n)) : (this.times = e, this.values = t), this;
  }
  clone() {
    const e = this.times.slice(), t = this.values.slice(), n = this.constructor, i = new n(this.name, e, t);
    return i.createInterpolant = this.createInterpolant, i;
  }
}
Xn.prototype.TimeBufferType = Float32Array;
Xn.prototype.ValueBufferType = Float32Array;
Xn.prototype.DefaultInterpolation = Ar;
class Qs extends Xn {
  // No interpolation parameter because only InterpolateDiscrete is valid.
  constructor(e, t, n) {
    super(e, t, n);
  }
}
Qs.prototype.ValueTypeName = "bool";
Qs.prototype.ValueBufferType = Array;
Qs.prototype.DefaultInterpolation = br;
Qs.prototype.InterpolantFactoryMethodLinear = void 0;
Qs.prototype.InterpolantFactoryMethodSmooth = void 0;
class qd extends Xn {
}
qd.prototype.ValueTypeName = "color";
class Gs extends Xn {
}
Gs.prototype.ValueTypeName = "number";
class zx extends Br {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = (n - t) / (i - t);
    let c = e * o;
    for (let h = c + o; c !== h; c += 4)
      Vn.slerpFlat(r, 0, a, c - o, a, c, l);
    return r;
  }
}
class Ws extends Xn {
  InterpolantFactoryMethodLinear(e) {
    return new zx(this.times, this.values, this.getValueSize(), e);
  }
}
Ws.prototype.ValueTypeName = "quaternion";
Ws.prototype.InterpolantFactoryMethodSmooth = void 0;
class er extends Xn {
  // No interpolation parameter because only InterpolateDiscrete is valid.
  constructor(e, t, n) {
    super(e, t, n);
  }
}
er.prototype.ValueTypeName = "string";
er.prototype.ValueBufferType = Array;
er.prototype.DefaultInterpolation = br;
er.prototype.InterpolantFactoryMethodLinear = void 0;
er.prototype.InterpolantFactoryMethodSmooth = void 0;
class Xs extends Xn {
}
Xs.prototype.ValueTypeName = "vector";
class Vx {
  constructor(e = "", t = -1, n = [], i = Op) {
    this.name = e, this.tracks = n, this.duration = t, this.blendMode = i, this.uuid = Cn(), this.duration < 0 && this.resetDuration();
  }
  static parse(e) {
    const t = [], n = e.tracks, i = 1 / (e.fps || 1);
    for (let a = 0, o = n.length; a !== o; ++a)
      t.push(Gx(n[a]).scale(i));
    const r = new this(e.name, e.duration, t, e.blendMode);
    return r.uuid = e.uuid, r;
  }
  static toJSON(e) {
    const t = [], n = e.tracks, i = {
      name: e.name,
      duration: e.duration,
      tracks: t,
      uuid: e.uuid,
      blendMode: e.blendMode
    };
    for (let r = 0, a = n.length; r !== a; ++r)
      t.push(Xn.toJSON(n[r]));
    return i;
  }
  static CreateFromMorphTargetSequence(e, t, n, i) {
    const r = t.length, a = [];
    for (let o = 0; o < r; o++) {
      let l = [], c = [];
      l.push(
        (o + r - 1) % r,
        o,
        (o + 1) % r
      ), c.push(0, 1, 0);
      const h = Ox(l);
      l = Su(l, 1, h), c = Su(c, 1, h), !i && l[0] === 0 && (l.push(r), c.push(c[0])), a.push(
        new Gs(
          ".morphTargetInfluences[" + t[o].name + "]",
          l,
          c
        ).scale(1 / n)
      );
    }
    return new this(e, -1, a);
  }
  static findByName(e, t) {
    let n = e;
    if (!Array.isArray(e)) {
      const i = e;
      n = i.geometry && i.geometry.animations || i.animations;
    }
    for (let i = 0; i < n.length; i++)
      if (n[i].name === t)
        return n[i];
    return null;
  }
  static CreateClipsFromMorphTargetSequences(e, t, n) {
    const i = {}, r = /^([\w-]*?)([\d]+)$/;
    for (let o = 0, l = e.length; o < l; o++) {
      const c = e[o], h = c.name.match(r);
      if (h && h.length > 1) {
        const u = h[1];
        let d = i[u];
        d || (i[u] = d = []), d.push(c);
      }
    }
    const a = [];
    for (const o in i)
      a.push(this.CreateFromMorphTargetSequence(o, i[o], t, n));
    return a;
  }
  // parse the animation.hierarchy format
  static parseAnimation(e, t) {
    if (!e)
      return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
    const n = function(u, d, p, g, _) {
      if (p.length !== 0) {
        const f = [], m = [];
        Yd(p, f, m, g), f.length !== 0 && _.push(new u(d, f, m));
      }
    }, i = [], r = e.name || "default", a = e.fps || 30, o = e.blendMode;
    let l = e.length || -1;
    const c = e.hierarchy || [];
    for (let u = 0; u < c.length; u++) {
      const d = c[u].keys;
      if (!(!d || d.length === 0))
        if (d[0].morphTargets) {
          const p = {};
          let g;
          for (g = 0; g < d.length; g++)
            if (d[g].morphTargets)
              for (let _ = 0; _ < d[g].morphTargets.length; _++)
                p[d[g].morphTargets[_]] = -1;
          for (const _ in p) {
            const f = [], m = [];
            for (let x = 0; x !== d[g].morphTargets.length; ++x) {
              const y = d[g];
              f.push(y.time), m.push(y.morphTarget === _ ? 1 : 0);
            }
            i.push(new Gs(".morphTargetInfluence[" + _ + "]", f, m));
          }
          l = p.length * a;
        } else {
          const p = ".bones[" + t[u].name + "]";
          n(
            Xs,
            p + ".position",
            d,
            "pos",
            i
          ), n(
            Ws,
            p + ".quaternion",
            d,
            "rot",
            i
          ), n(
            Xs,
            p + ".scale",
            d,
            "scl",
            i
          );
        }
    }
    return i.length === 0 ? null : new this(r, l, i, o);
  }
  resetDuration() {
    const e = this.tracks;
    let t = 0;
    for (let n = 0, i = e.length; n !== i; ++n) {
      const r = this.tracks[n];
      t = Math.max(t, r.times[r.times.length - 1]);
    }
    return this.duration = t, this;
  }
  trim() {
    for (let e = 0; e < this.tracks.length; e++)
      this.tracks[e].trim(0, this.duration);
    return this;
  }
  validate() {
    let e = !0;
    for (let t = 0; t < this.tracks.length; t++)
      e = e && this.tracks[t].validate();
    return e;
  }
  optimize() {
    for (let e = 0; e < this.tracks.length; e++)
      this.tracks[e].optimize();
    return this;
  }
  clone() {
    const e = [];
    for (let t = 0; t < this.tracks.length; t++)
      e.push(this.tracks[t].clone());
    return new this.constructor(this.name, this.duration, e, this.blendMode);
  }
  toJSON() {
    return this.constructor.toJSON(this);
  }
}
function Hx(s) {
  switch (s.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return Gs;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return Xs;
    case "color":
      return qd;
    case "quaternion":
      return Ws;
    case "bool":
    case "boolean":
      return Qs;
    case "string":
      return er;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + s);
}
function Gx(s) {
  if (s.type === void 0)
    throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const e = Hx(s.type);
  if (s.times === void 0) {
    const t = [], n = [];
    Yd(s.keys, t, n, "value"), s.times = t, s.values = n;
  }
  return e.parse !== void 0 ? e.parse(s) : new e(s.name, s.times, s.values, s.interpolation);
}
const xi = {
  enabled: !1,
  files: {},
  add: function(s, e) {
    this.enabled !== !1 && (this.files[s] = e);
  },
  get: function(s) {
    if (this.enabled !== !1)
      return this.files[s];
  },
  remove: function(s) {
    delete this.files[s];
  },
  clear: function() {
    this.files = {};
  }
};
class Wx {
  constructor(e, t, n) {
    const i = this;
    let r = !1, a = 0, o = 0, l;
    const c = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(h) {
      o++, r === !1 && i.onStart !== void 0 && i.onStart(h, a, o), r = !0;
    }, this.itemEnd = function(h) {
      a++, i.onProgress !== void 0 && i.onProgress(h, a, o), a === o && (r = !1, i.onLoad !== void 0 && i.onLoad());
    }, this.itemError = function(h) {
      i.onError !== void 0 && i.onError(h);
    }, this.resolveURL = function(h) {
      return l ? l(h) : h;
    }, this.setURLModifier = function(h) {
      return l = h, this;
    }, this.addHandler = function(h, u) {
      return c.push(h, u), this;
    }, this.removeHandler = function(h) {
      const u = c.indexOf(h);
      return u !== -1 && c.splice(u, 2), this;
    }, this.getHandler = function(h) {
      for (let u = 0, d = c.length; u < d; u += 2) {
        const p = c[u], g = c[u + 1];
        if (p.global && (p.lastIndex = 0), p.test(h))
          return g;
      }
      return null;
    };
  }
}
const Xx = /* @__PURE__ */ new Wx();
class tr {
  constructor(e) {
    this.manager = e !== void 0 ? e : Xx, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
  }
  load() {
  }
  loadAsync(e, t) {
    const n = this;
    return new Promise(function(i, r) {
      n.load(e, i, t, r);
    });
  }
  parse() {
  }
  setCrossOrigin(e) {
    return this.crossOrigin = e, this;
  }
  setWithCredentials(e) {
    return this.withCredentials = e, this;
  }
  setPath(e) {
    return this.path = e, this;
  }
  setResourcePath(e) {
    return this.resourcePath = e, this;
  }
  setRequestHeader(e) {
    return this.requestHeader = e, this;
  }
}
tr.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const Jn = {};
class Yx extends Error {
  constructor(e, t) {
    super(e), this.response = t;
  }
}
class jd extends tr {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = xi.get(e);
    if (r !== void 0)
      return this.manager.itemStart(e), setTimeout(() => {
        t && t(r), this.manager.itemEnd(e);
      }, 0), r;
    if (Jn[e] !== void 0) {
      Jn[e].push({
        onLoad: t,
        onProgress: n,
        onError: i
      });
      return;
    }
    Jn[e] = [], Jn[e].push({
      onLoad: t,
      onProgress: n,
      onError: i
    });
    const a = new Request(e, {
      headers: new Headers(this.requestHeader),
      credentials: this.withCredentials ? "include" : "same-origin"
      // An abort controller could be added within a future PR
    }), o = this.mimeType, l = this.responseType;
    fetch(a).then((c) => {
      if (c.status === 200 || c.status === 0) {
        if (c.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || c.body === void 0 || c.body.getReader === void 0)
          return c;
        const h = Jn[e], u = c.body.getReader(), d = c.headers.get("X-File-Size") || c.headers.get("Content-Length"), p = d ? parseInt(d) : 0, g = p !== 0;
        let _ = 0;
        const f = new ReadableStream({
          start(m) {
            x();
            function x() {
              u.read().then(({ done: y, value: M }) => {
                if (y)
                  m.close();
                else {
                  _ += M.byteLength;
                  const b = new ProgressEvent("progress", { lengthComputable: g, loaded: _, total: p });
                  for (let w = 0, E = h.length; w < E; w++) {
                    const R = h[w];
                    R.onProgress && R.onProgress(b);
                  }
                  m.enqueue(M), x();
                }
              }, (y) => {
                m.error(y);
              });
            }
          }
        });
        return new Response(f);
      } else
        throw new Yx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`, c);
    }).then((c) => {
      switch (l) {
        case "arraybuffer":
          return c.arrayBuffer();
        case "blob":
          return c.blob();
        case "document":
          return c.text().then((h) => new DOMParser().parseFromString(h, o));
        case "json":
          return c.json();
        default:
          if (o === void 0)
            return c.text();
          {
            const u = /charset="?([^;"\s]*)"?/i.exec(o), d = u && u[1] ? u[1].toLowerCase() : void 0, p = new TextDecoder(d);
            return c.arrayBuffer().then((g) => p.decode(g));
          }
      }
    }).then((c) => {
      xi.add(e, c);
      const h = Jn[e];
      delete Jn[e];
      for (let u = 0, d = h.length; u < d; u++) {
        const p = h[u];
        p.onLoad && p.onLoad(c);
      }
    }).catch((c) => {
      const h = Jn[e];
      if (h === void 0)
        throw this.manager.itemError(e), c;
      delete Jn[e];
      for (let u = 0, d = h.length; u < d; u++) {
        const p = h[u];
        p.onError && p.onError(c);
      }
      this.manager.itemError(e);
    }).finally(() => {
      this.manager.itemEnd(e);
    }), this.manager.itemStart(e);
  }
  setResponseType(e) {
    return this.responseType = e, this;
  }
  setMimeType(e) {
    return this.mimeType = e, this;
  }
}
class qx extends tr {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = this, a = xi.get(e);
    if (a !== void 0)
      return r.manager.itemStart(e), setTimeout(function() {
        t && t(a), r.manager.itemEnd(e);
      }, 0), a;
    const o = wr("img");
    function l() {
      h(), xi.add(e, this), t && t(this), r.manager.itemEnd(e);
    }
    function c(u) {
      h(), i && i(u), r.manager.itemError(e), r.manager.itemEnd(e);
    }
    function h() {
      o.removeEventListener("load", l, !1), o.removeEventListener("error", c, !1);
    }
    return o.addEventListener("load", l, !1), o.addEventListener("error", c, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin), r.manager.itemStart(e), o.src = e, o;
  }
}
class jx extends tr {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const r = new St(), a = new qx(this.manager);
    return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(e, function(o) {
      r.image = o, r.needsUpdate = !0, t !== void 0 && t(r);
    }, n, i), r;
  }
}
class $a extends ht {
  constructor(e, t = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new be(e), this.intensity = t;
  }
  dispose() {
  }
  copy(e, t) {
    return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), this.target !== void 0 && (t.object.target = this.target.uuid), t;
  }
}
class Kx extends $a {
  constructor(e, t, n) {
    super(e, n), this.isHemisphereLight = !0, this.type = "HemisphereLight", this.position.copy(ht.DEFAULT_UP), this.updateMatrix(), this.groundColor = new be(t);
  }
  copy(e, t) {
    return super.copy(e, t), this.groundColor.copy(e.groundColor), this;
  }
}
const Bo = /* @__PURE__ */ new Ie(), Eu = /* @__PURE__ */ new P(), Tu = /* @__PURE__ */ new P();
class Dc {
  constructor(e) {
    this.camera = e, this.intensity = 1, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new Me(512, 512), this.map = null, this.mapPass = null, this.matrix = new Ie(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Ec(), this._frameExtents = new Me(1, 1), this._viewportCount = 1, this._viewports = [
      new Ke(0, 0, 1, 1)
    ];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera, n = this.matrix;
    Eu.setFromMatrixPosition(e.matrixWorld), t.position.copy(Eu), Tu.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(Tu), t.updateMatrixWorld(), Bo.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Bo), n.set(
      0.5,
      0,
      0,
      0.5,
      0,
      0.5,
      0,
      0.5,
      0,
      0,
      0.5,
      0.5,
      0,
      0,
      0,
      1
    ), n.multiply(Bo);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return this.camera = e.camera.clone(), this.intensity = e.intensity, this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return this.intensity !== 1 && (e.intensity = this.intensity), this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e;
  }
}
class Zx extends Dc {
  constructor() {
    super(new Bt(50, 1, 0.5, 500)), this.isSpotLightShadow = !0, this.focus = 1;
  }
  updateMatrices(e) {
    const t = this.camera, n = Vs * 2 * e.angle * this.focus, i = this.mapSize.width / this.mapSize.height, r = e.distance || t.far;
    (n !== t.fov || i !== t.aspect || r !== t.far) && (t.fov = n, t.aspect = i, t.far = r, t.updateProjectionMatrix()), super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), this.focus = e.focus, this;
  }
}
class $x extends $a {
  constructor(e, t, n = 0, i = Math.PI / 3, r = 0, a = 2) {
    super(e, t), this.isSpotLight = !0, this.type = "SpotLight", this.position.copy(ht.DEFAULT_UP), this.updateMatrix(), this.target = new ht(), this.distance = n, this.angle = i, this.penumbra = r, this.decay = a, this.map = null, this.shadow = new Zx();
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(e) {
    this.intensity = e / Math.PI;
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
const bu = /* @__PURE__ */ new Ie(), hr = /* @__PURE__ */ new P(), ko = /* @__PURE__ */ new P();
class Jx extends Dc {
  constructor() {
    super(new Bt(90, 1, 0.5, 500)), this.isPointLightShadow = !0, this._frameExtents = new Me(4, 2), this._viewportCount = 6, this._viewports = [
      // These viewports map a cube-map onto a 2D texture with the
      // following orientation:
      //
      //  xzXZ
      //   y Y
      //
      // X - Positive x direction
      // x - Negative x direction
      // Y - Positive y direction
      // y - Negative y direction
      // Z - Positive z direction
      // z - Negative z direction
      // positive X
      new Ke(2, 1, 1, 1),
      // negative X
      new Ke(0, 1, 1, 1),
      // positive Z
      new Ke(3, 1, 1, 1),
      // negative Z
      new Ke(1, 1, 1, 1),
      // positive Y
      new Ke(3, 0, 1, 1),
      // negative Y
      new Ke(1, 0, 1, 1)
    ], this._cubeDirections = [
      new P(1, 0, 0),
      new P(-1, 0, 0),
      new P(0, 0, 1),
      new P(0, 0, -1),
      new P(0, 1, 0),
      new P(0, -1, 0)
    ], this._cubeUps = [
      new P(0, 1, 0),
      new P(0, 1, 0),
      new P(0, 1, 0),
      new P(0, 1, 0),
      new P(0, 0, 1),
      new P(0, 0, -1)
    ];
  }
  updateMatrices(e, t = 0) {
    const n = this.camera, i = this.matrix, r = e.distance || n.far;
    r !== n.far && (n.far = r, n.updateProjectionMatrix()), hr.setFromMatrixPosition(e.matrixWorld), n.position.copy(hr), ko.copy(n.position), ko.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(ko), n.updateMatrixWorld(), i.makeTranslation(-hr.x, -hr.y, -hr.z), bu.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(bu);
  }
}
class Qx extends $a {
  constructor(e, t, n = 0, i = 2) {
    super(e, t), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new Jx();
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(e) {
    this.intensity = e / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this;
  }
}
class ey extends Dc {
  constructor() {
    super(new Tc(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}
class wa extends $a {
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(ht.DEFAULT_UP), this.updateMatrix(), this.target = new ht(), this.shadow = new ey();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
class yr {
  static decodeText(e) {
    if (console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."), typeof TextDecoder < "u")
      return new TextDecoder().decode(e);
    let t = "";
    for (let n = 0, i = e.length; n < i; n++)
      t += String.fromCharCode(e[n]);
    try {
      return decodeURIComponent(escape(t));
    } catch {
      return t;
    }
  }
  static extractUrlBase(e) {
    const t = e.lastIndexOf("/");
    return t === -1 ? "./" : e.slice(0, t + 1);
  }
  static resolveURL(e, t) {
    return typeof e != "string" || e === "" ? "" : (/^https?:\/\//i.test(t) && /^\//.test(e) && (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(e) || /^data:.*,.*$/i.test(e) || /^blob:.*$/i.test(e) ? e : t + e);
  }
}
class ty extends tr {
  constructor(e) {
    super(e), this.isImageBitmapLoader = !0, typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" };
  }
  setOptions(e) {
    return this.options = e, this;
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = this, a = xi.get(e);
    if (a !== void 0) {
      if (r.manager.itemStart(e), a.then) {
        a.then((c) => {
          t && t(c), r.manager.itemEnd(e);
        }).catch((c) => {
          i && i(c);
        });
        return;
      }
      return setTimeout(function() {
        t && t(a), r.manager.itemEnd(e);
      }, 0), a;
    }
    const o = {};
    o.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", o.headers = this.requestHeader;
    const l = fetch(e, o).then(function(c) {
      return c.blob();
    }).then(function(c) {
      return createImageBitmap(c, Object.assign(r.options, { colorSpaceConversion: "none" }));
    }).then(function(c) {
      return xi.add(e, c), t && t(c), r.manager.itemEnd(e), c;
    }).catch(function(c) {
      i && i(c), xi.remove(e), r.manager.itemError(e), r.manager.itemEnd(e);
    });
    xi.add(e, l), r.manager.itemStart(e);
  }
}
const Ic = "\\[\\]\\.:\\/", ny = new RegExp("[" + Ic + "]", "g"), Nc = "[^" + Ic + "]", iy = "[^" + Ic.replace("\\.", "") + "]", sy = /* @__PURE__ */ /((?:WC+[\/:])*)/.source.replace("WC", Nc), ry = /* @__PURE__ */ /(WCOD+)?/.source.replace("WCOD", iy), ay = /* @__PURE__ */ /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Nc), oy = /* @__PURE__ */ /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Nc), ly = new RegExp(
  "^" + sy + ry + ay + oy + "$"
), cy = ["material", "materials", "bones", "map"];
class hy {
  constructor(e, t, n) {
    const i = n || et.parseTrackName(t);
    this._targetGroup = e, this._bindings = e.subscribe_(t, i);
  }
  getValue(e, t) {
    this.bind();
    const n = this._targetGroup.nCachedObjects_, i = this._bindings[n];
    i !== void 0 && i.getValue(e, t);
  }
  setValue(e, t) {
    const n = this._bindings;
    for (let i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i)
      n[i].setValue(e, t);
  }
  bind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].bind();
  }
  unbind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].unbind();
  }
}
class et {
  constructor(e, t, n) {
    this.path = t, this.parsedPath = n || et.parseTrackName(t), this.node = et.findNode(e, this.parsedPath.nodeName), this.rootNode = e, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
  static create(e, t, n) {
    return e && e.isAnimationObjectGroup ? new et.Composite(e, t, n) : new et(e, t, n);
  }
  /**
   * Replaces spaces with underscores and removes unsupported characters from
   * node names, to ensure compatibility with parseTrackName().
   *
   * @param {string} name Node name to be sanitized.
   * @return {string}
   */
  static sanitizeNodeName(e) {
    return e.replace(/\s/g, "_").replace(ny, "");
  }
  static parseTrackName(e) {
    const t = ly.exec(e);
    if (t === null)
      throw new Error("PropertyBinding: Cannot parse trackName: " + e);
    const n = {
      // directoryName: matches[ 1 ], // (tschw) currently unused
      nodeName: t[2],
      objectName: t[3],
      objectIndex: t[4],
      propertyName: t[5],
      // required
      propertyIndex: t[6]
    }, i = n.nodeName && n.nodeName.lastIndexOf(".");
    if (i !== void 0 && i !== -1) {
      const r = n.nodeName.substring(i + 1);
      cy.indexOf(r) !== -1 && (n.nodeName = n.nodeName.substring(0, i), n.objectName = r);
    }
    if (n.propertyName === null || n.propertyName.length === 0)
      throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e);
    return n;
  }
  static findNode(e, t) {
    if (t === void 0 || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid)
      return e;
    if (e.skeleton) {
      const n = e.skeleton.getBoneByName(t);
      if (n !== void 0)
        return n;
    }
    if (e.children) {
      const n = function(r) {
        for (let a = 0; a < r.length; a++) {
          const o = r[a];
          if (o.name === t || o.uuid === t)
            return o;
          const l = n(o.children);
          if (l) return l;
        }
        return null;
      }, i = n(e.children);
      if (i)
        return i;
    }
    return null;
  }
  // these are used to "bind" a nonexistent property
  _getValue_unavailable() {
  }
  _setValue_unavailable() {
  }
  // Getters
  _getValue_direct(e, t) {
    e[t] = this.targetObject[this.propertyName];
  }
  _getValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i)
      e[t++] = n[i];
  }
  _getValue_arrayElement(e, t) {
    e[t] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(e, t) {
    this.resolvedProperty.toArray(e, t);
  }
  // Direct
  _setValue_direct(e, t) {
    this.targetObject[this.propertyName] = e[t];
  }
  _setValue_direct_setNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = !0;
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // EntireArray
  _setValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i)
      n[i] = e[t++];
  }
  _setValue_array_setNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i)
      n[i] = e[t++];
    this.targetObject.needsUpdate = !0;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i)
      n[i] = e[t++];
    this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // ArrayElement
  _setValue_arrayElement(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t];
  }
  _setValue_arrayElement_setNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = !0;
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // HasToFromArray
  _setValue_fromArray(e, t) {
    this.resolvedProperty.fromArray(e, t);
  }
  _setValue_fromArray_setNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = !0;
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _getValue_unbound(e, t) {
    this.bind(), this.getValue(e, t);
  }
  _setValue_unbound(e, t) {
    this.bind(), this.setValue(e, t);
  }
  // create getter / setter pair for a property in the scene graph
  bind() {
    let e = this.node;
    const t = this.parsedPath, n = t.objectName, i = t.propertyName;
    let r = t.propertyIndex;
    if (e || (e = et.findNode(this.rootNode, t.nodeName), this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) {
      console.warn("THREE.PropertyBinding: No target node found for track: " + this.path + ".");
      return;
    }
    if (n) {
      let c = t.objectIndex;
      switch (n) {
        case "materials":
          if (!e.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.materials) {
            console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
            return;
          }
          e = e.material.materials;
          break;
        case "bones":
          if (!e.skeleton) {
            console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
            return;
          }
          e = e.skeleton.bones;
          for (let h = 0; h < e.length; h++)
            if (e[h].name === c) {
              c = h;
              break;
            }
          break;
        case "map":
          if ("map" in e) {
            e = e.map;
            break;
          }
          if (!e.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.map) {
            console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
            return;
          }
          e = e.material.map;
          break;
        default:
          if (e[n] === void 0) {
            console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
            return;
          }
          e = e[n];
      }
      if (c !== void 0) {
        if (e[c] === void 0) {
          console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e);
          return;
        }
        e = e[c];
      }
    }
    const a = e[i];
    if (a === void 0) {
      const c = t.nodeName;
      console.error("THREE.PropertyBinding: Trying to update property for track: " + c + "." + i + " but it wasn't found.", e);
      return;
    }
    let o = this.Versioning.None;
    this.targetObject = e, e.needsUpdate !== void 0 ? o = this.Versioning.NeedsUpdate : e.matrixWorldNeedsUpdate !== void 0 && (o = this.Versioning.MatrixWorldNeedsUpdate);
    let l = this.BindingType.Direct;
    if (r !== void 0) {
      if (i === "morphTargetInfluences") {
        if (!e.geometry) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
          return;
        }
        if (!e.geometry.morphAttributes) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
          return;
        }
        e.morphTargetDictionary[r] !== void 0 && (r = e.morphTargetDictionary[r]);
      }
      l = this.BindingType.ArrayElement, this.resolvedProperty = a, this.propertyIndex = r;
    } else a.fromArray !== void 0 && a.toArray !== void 0 ? (l = this.BindingType.HasFromToArray, this.resolvedProperty = a) : Array.isArray(a) ? (l = this.BindingType.EntireArray, this.resolvedProperty = a) : this.propertyName = i;
    this.getValue = this.GetterByBindingType[l], this.setValue = this.SetterByBindingTypeAndVersioning[l][o];
  }
  unbind() {
    this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
}
et.Composite = hy;
et.prototype.BindingType = {
  Direct: 0,
  EntireArray: 1,
  ArrayElement: 2,
  HasFromToArray: 3
};
et.prototype.Versioning = {
  None: 0,
  NeedsUpdate: 1,
  MatrixWorldNeedsUpdate: 2
};
et.prototype.GetterByBindingType = [
  et.prototype._getValue_direct,
  et.prototype._getValue_array,
  et.prototype._getValue_arrayElement,
  et.prototype._getValue_toArray
];
et.prototype.SetterByBindingTypeAndVersioning = [
  [
    // Direct
    et.prototype._setValue_direct,
    et.prototype._setValue_direct_setNeedsUpdate,
    et.prototype._setValue_direct_setMatrixWorldNeedsUpdate
  ],
  [
    // EntireArray
    et.prototype._setValue_array,
    et.prototype._setValue_array_setNeedsUpdate,
    et.prototype._setValue_array_setMatrixWorldNeedsUpdate
  ],
  [
    // ArrayElement
    et.prototype._setValue_arrayElement,
    et.prototype._setValue_arrayElement_setNeedsUpdate,
    et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
  ],
  [
    // HasToFromArray
    et.prototype._setValue_fromArray,
    et.prototype._setValue_fromArray_setNeedsUpdate,
    et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
  ]
];
const Au = /* @__PURE__ */ new Ie();
class uy {
  constructor(e, t, n = 0, i = 1 / 0) {
    this.ray = new $s(e, t), this.near = n, this.far = i, this.camera = null, this.layers = new Sc(), this.params = {
      Mesh: {},
      Line: { threshold: 1 },
      LOD: {},
      Points: { threshold: 1 },
      Sprite: {}
    };
  }
  set(e, t) {
    this.ray.set(e, t);
  }
  setFromCamera(e, t) {
    t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, 0.5).unproject(t).sub(this.ray.origin).normalize(), this.camera = t) : t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld), this.camera = t) : console.error("THREE.Raycaster: Unsupported camera type: " + t.type);
  }
  setFromXRController(e) {
    return Au.identity().extractRotation(e.matrixWorld), this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(0, 0, -1).applyMatrix4(Au), this;
  }
  intersectObject(e, t = !0, n = []) {
    return Xl(e, this, n, t), n.sort(wu), n;
  }
  intersectObjects(e, t = !0, n = []) {
    for (let i = 0, r = e.length; i < r; i++)
      Xl(e[i], this, n, t);
    return n.sort(wu), n;
  }
}
function wu(s, e) {
  return s.distance - e.distance;
}
function Xl(s, e, t, n) {
  let i = !0;
  if (s.layers.test(e.layers) && s.raycast(e, t) === !1 && (i = !1), i === !0 && n === !0) {
    const r = s.children;
    for (let a = 0, o = r.length; a < o; a++)
      Xl(r[a], e, t, !0);
  }
}
class Yl {
  constructor(e = 1, t = 0, n = 0) {
    return this.radius = e, this.phi = t, this.theta = n, this;
  }
  set(e, t, n) {
    return this.radius = e, this.phi = t, this.theta = n, this;
  }
  copy(e) {
    return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this;
  }
  // restrict phi to be between EPS and PI-EPS
  makeSafe() {
    return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this;
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, n) {
    return this.radius = Math.sqrt(e * e + t * t + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(Ct(t / this.radius, -1, 1))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class dy extends ts {
  constructor(e, t = null) {
    super(), this.object = e, this.domElement = t, this.enabled = !0, this.state = -1, this.keys = {}, this.mouseButtons = { LEFT: null, MIDDLE: null, RIGHT: null }, this.touches = { ONE: null, TWO: null };
  }
  connect() {
  }
  disconnect() {
  }
  dispose() {
  }
  update() {
  }
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: dc
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = dc);
function ei(s) {
  if (s === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return s;
}
function Kd(s, e) {
  s.prototype = Object.create(e.prototype), s.prototype.constructor = s, s.__proto__ = e;
}
/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var hn = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, Rr = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, Uc, Pt, ct, vn = 1e8, st = 1 / vn, ql = Math.PI * 2, fy = ql / 4, py = 0, Zd = Math.sqrt, my = Math.cos, _y = Math.sin, At = function(e) {
  return typeof e == "string";
}, mt = function(e) {
  return typeof e == "function";
}, ai = function(e) {
  return typeof e == "number";
}, Oc = function(e) {
  return typeof e > "u";
}, Gn = function(e) {
  return typeof e == "object";
}, jt = function(e) {
  return e !== !1;
}, Fc = function() {
  return typeof window < "u";
}, ma = function(e) {
  return mt(e) || At(e);
}, $d = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, Ut = Array.isArray, gy = /random\([^)]+\)/g, vy = /,\s*/g, Ru = /(?:-?\.?\d|\.)+/gi, Jd = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, Ts = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, zo = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Qd = /[+-]=-?[.\d]+/, xy = /[^,'"\[\]\s]+/gi, yy = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, dt, In, jl, Bc, un = {}, za = {}, ef, tf = function(e) {
  return (za = Ys(e, un)) && Jt;
}, kc = function(e, t) {
  return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()");
}, Cr = function(e, t) {
  return !t && console.warn(e);
}, nf = function(e, t) {
  return e && (un[e] = t) && za && (za[e] = t) || un;
}, Pr = function() {
  return 0;
}, My = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, Ra = {
  suppressEvents: !0,
  kill: !1
}, Sy = {
  suppressEvents: !0
}, zc = {}, bi = [], Kl = {}, sf, rn = {}, Vo = {}, Cu = 30, Ca = [], Vc = "", Hc = function(e) {
  var t = e[0], n, i;
  if (Gn(t) || mt(t) || (e = [e]), !(n = (t._gsap || {}).harness)) {
    for (i = Ca.length; i-- && !Ca[i].targetTest(t); )
      ;
    n = Ca[i];
  }
  for (i = e.length; i--; )
    e[i] && (e[i]._gsap || (e[i]._gsap = new Af(e[i], n))) || e.splice(i, 1);
  return e;
}, ji = function(e) {
  return e._gsap || Hc(xn(e))[0]._gsap;
}, rf = function(e, t, n) {
  return (n = e[t]) && mt(n) ? e[t]() : Oc(n) && e.getAttribute && e.getAttribute(t) || n;
}, Kt = function(e, t) {
  return (e = e.split(",")).forEach(t) || e;
}, gt = function(e) {
  return Math.round(e * 1e5) / 1e5 || 0;
}, ut = function(e) {
  return Math.round(e * 1e7) / 1e7 || 0;
}, Ps = function(e, t) {
  var n = t.charAt(0), i = parseFloat(t.substr(2));
  return e = parseFloat(e), n === "+" ? e + i : n === "-" ? e - i : n === "*" ? e * i : e / i;
}, Ey = function(e, t) {
  for (var n = t.length, i = 0; e.indexOf(t[i]) < 0 && ++i < n; )
    ;
  return i < n;
}, Va = function() {
  var e = bi.length, t = bi.slice(0), n, i;
  for (Kl = {}, bi.length = 0, n = 0; n < e; n++)
    i = t[n], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
}, Gc = function(e) {
  return !!(e._initted || e._startAt || e.add);
}, af = function(e, t, n, i) {
  bi.length && !Pt && Va(), e.render(t, n, !!(Pt && t < 0 && Gc(e))), bi.length && !Pt && Va();
}, of = function(e) {
  var t = parseFloat(e);
  return (t || t === 0) && (e + "").match(xy).length < 2 ? t : At(e) ? e.trim() : e;
}, lf = function(e) {
  return e;
}, dn = function(e, t) {
  for (var n in t)
    n in e || (e[n] = t[n]);
  return e;
}, Ty = function(e) {
  return function(t, n) {
    for (var i in n)
      i in t || i === "duration" && e || i === "ease" || (t[i] = n[i]);
  };
}, Ys = function(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}, Pu = function s(e, t) {
  for (var n in t)
    n !== "__proto__" && n !== "constructor" && n !== "prototype" && (e[n] = Gn(t[n]) ? s(e[n] || (e[n] = {}), t[n]) : t[n]);
  return e;
}, Ha = function(e, t) {
  var n = {}, i;
  for (i in e)
    i in t || (n[i] = e[i]);
  return n;
}, Mr = function(e) {
  var t = e.parent || dt, n = e.keyframes ? Ty(Ut(e.keyframes)) : dn;
  if (jt(e.inherit))
    for (; t; )
      n(e, t.vars.defaults), t = t.parent || t._dp;
  return e;
}, by = function(e, t) {
  for (var n = e.length, i = n === t.length; i && n-- && e[n] === t[n]; )
    ;
  return n < 0;
}, cf = function(e, t, n, i, r) {
  var a = e[i], o;
  if (r)
    for (o = t[r]; a && a[r] > o; )
      a = a._prev;
  return a ? (t._next = a._next, a._next = t) : (t._next = e[n], e[n] = t), t._next ? t._next._prev = t : e[i] = t, t._prev = a, t.parent = t._dp = e, t;
}, Ja = function(e, t, n, i) {
  n === void 0 && (n = "_first"), i === void 0 && (i = "_last");
  var r = t._prev, a = t._next;
  r ? r._next = a : e[n] === t && (e[n] = a), a ? a._prev = r : e[i] === t && (e[i] = r), t._next = t._prev = t.parent = null;
}, Ri = function(e, t) {
  e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0;
}, Ki = function(e, t) {
  if (e && (!t || t._end > e._dur || t._start < 0))
    for (var n = e; n; )
      n._dirty = 1, n = n.parent;
  return e;
}, Ay = function(e) {
  for (var t = e.parent; t && t.parent; )
    t._dirty = 1, t.totalDuration(), t = t.parent;
  return e;
}, Zl = function(e, t, n, i) {
  return e._startAt && (Pt ? e._startAt.revert(Ra) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, i));
}, wy = function s(e) {
  return !e || e._ts && s(e.parent);
}, Lu = function(e) {
  return e._repeat ? qs(e._tTime, e = e.duration() + e._rDelay) * e : 0;
}, qs = function(e, t) {
  var n = Math.floor(e = ut(e / t));
  return e && n === e ? n - 1 : n;
}, Ga = function(e, t) {
  return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur);
}, Qa = function(e) {
  return e._end = ut(e._start + (e._tDur / Math.abs(e._ts || e._rts || st) || 0));
}, eo = function(e, t) {
  var n = e._dp;
  return n && n.smoothChildTiming && e._ts && (e._start = ut(n._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), Qa(e), n._dirty || Ki(n, e)), e;
}, hf = function(e, t) {
  var n;
  if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (n = Ga(e.rawTime(), t), (!t._dur || kr(0, t.totalDuration(), n) - t._tTime > st) && t.render(n, !0)), Ki(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
    if (e._dur < e.duration())
      for (n = e; n._dp; )
        n.rawTime() >= 0 && n.totalTime(n._tTime), n = n._dp;
    e._zTime = -st;
  }
}, On = function(e, t, n, i) {
  return t.parent && Ri(t), t._start = ut((ai(n) ? n : n || e !== dt ? mn(e, n, t) : e._time) + t._delay), t._end = ut(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), cf(e, t, "_first", "_last", e._sort ? "_start" : 0), $l(t) || (e._recent = t), i || hf(e, t), e._ts < 0 && eo(e, e._tTime), e;
}, uf = function(e, t) {
  return (un.ScrollTrigger || kc("scrollTrigger", t)) && un.ScrollTrigger.create(t, e);
}, df = function(e, t, n, i, r) {
  if (Xc(e, t, r), !e._initted)
    return 1;
  if (!n && e._pt && !Pt && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && sf !== on.frame)
    return bi.push(e), e._lazy = [r, i], 1;
}, Ry = function s(e) {
  var t = e.parent;
  return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || s(t));
}, $l = function(e) {
  var t = e.data;
  return t === "isFromStart" || t === "isStart";
}, Cy = function(e, t, n, i) {
  var r = e.ratio, a = t < 0 || !t && (!e._start && Ry(e) && !(!e._initted && $l(e)) || (e._ts < 0 || e._dp._ts < 0) && !$l(e)) ? 0 : 1, o = e._rDelay, l = 0, c, h, u;
  if (o && e._repeat && (l = kr(0, e._tDur, t), h = qs(l, o), e._yoyo && h & 1 && (a = 1 - a), h !== qs(e._tTime, o) && (r = 1 - a, e.vars.repeatRefresh && e._initted && e.invalidate())), a !== r || Pt || i || e._zTime === st || !t && e._zTime) {
    if (!e._initted && df(e, t, i, n, l))
      return;
    for (u = e._zTime, e._zTime = t || (n ? st : 0), n || (n = t && !u), e.ratio = a, e._from && (a = 1 - a), e._time = 0, e._tTime = l, c = e._pt; c; )
      c.r(a, c.d), c = c._next;
    t < 0 && Zl(e, t, n, !0), e._onUpdate && !n && ln(e, "onUpdate"), l && e._repeat && !n && e.parent && ln(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === a && (a && Ri(e, 1), !n && !Pt && (ln(e, a ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()));
  } else e._zTime || (e._zTime = t);
}, Py = function(e, t, n) {
  var i;
  if (n > t)
    for (i = e._first; i && i._start <= n; ) {
      if (i.data === "isPause" && i._start > t)
        return i;
      i = i._next;
    }
  else
    for (i = e._last; i && i._start >= n; ) {
      if (i.data === "isPause" && i._start < t)
        return i;
      i = i._prev;
    }
}, js = function(e, t, n, i) {
  var r = e._repeat, a = ut(t) || 0, o = e._tTime / e._tDur;
  return o && !i && (e._time *= a / e._dur), e._dur = a, e._tDur = r ? r < 0 ? 1e10 : ut(a * (r + 1) + e._rDelay * r) : a, o > 0 && !i && eo(e, e._tTime = e._tDur * o), e.parent && Qa(e), n || Ki(e.parent, e), e;
}, Du = function(e) {
  return e instanceof Wt ? Ki(e) : js(e, e._dur);
}, Ly = {
  _start: 0,
  endTime: Pr,
  totalDuration: Pr
}, mn = function s(e, t, n) {
  var i = e.labels, r = e._recent || Ly, a = e.duration() >= vn ? r.endTime(!1) : e._dur, o, l, c;
  return At(t) && (isNaN(t) || t in i) ? (l = t.charAt(0), c = t.substr(-1) === "%", o = t.indexOf("="), l === "<" || l === ">" ? (o >= 0 && (t = t.replace(/=/, "")), (l === "<" ? r._start : r.endTime(r._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (c ? (o < 0 ? r : n).totalDuration() / 100 : 1)) : o < 0 ? (t in i || (i[t] = a), i[t]) : (l = parseFloat(t.charAt(o - 1) + t.substr(o + 1)), c && n && (l = l / 100 * (Ut(n) ? n[0] : n).totalDuration()), o > 1 ? s(e, t.substr(0, o - 1), n) + l : a + l)) : t == null ? a : +t;
}, Sr = function(e, t, n) {
  var i = ai(t[1]), r = (i ? 2 : 1) + (e < 2 ? 0 : 1), a = t[r], o, l;
  if (i && (a.duration = t[1]), a.parent = n, e) {
    for (o = a, l = n; l && !("immediateRender" in o); )
      o = l.vars.defaults || {}, l = jt(l.vars.inherit) && l.parent;
    a.immediateRender = jt(o.immediateRender), e < 2 ? a.runBackwards = 1 : a.startAt = t[r - 1];
  }
  return new yt(t[0], a, t[r + 1]);
}, Li = function(e, t) {
  return e || e === 0 ? t(e) : t;
}, kr = function(e, t, n) {
  return n < e ? e : n > t ? t : n;
}, Nt = function(e, t) {
  return !At(e) || !(t = yy.exec(e)) ? "" : t[1];
}, Dy = function(e, t, n) {
  return Li(n, function(i) {
    return kr(e, t, i);
  });
}, Jl = [].slice, ff = function(e, t) {
  return e && Gn(e) && "length" in e && (!t && !e.length || e.length - 1 in e && Gn(e[0])) && !e.nodeType && e !== In;
}, Iy = function(e, t, n) {
  return n === void 0 && (n = []), e.forEach(function(i) {
    var r;
    return At(i) && !t || ff(i, 1) ? (r = n).push.apply(r, xn(i)) : n.push(i);
  }) || n;
}, xn = function(e, t, n) {
  return ct && !t && ct.selector ? ct.selector(e) : At(e) && !n && (jl || !Ks()) ? Jl.call((t || Bc).querySelectorAll(e), 0) : Ut(e) ? Iy(e, n) : ff(e) ? Jl.call(e, 0) : e ? [e] : [];
}, Ql = function(e) {
  return e = xn(e)[0] || Cr("Invalid scope") || {}, function(t) {
    var n = e.current || e.nativeElement || e;
    return xn(t, n.querySelectorAll ? n : n === e ? Cr("Invalid scope") || Bc.createElement("div") : e);
  };
}, pf = function(e) {
  return e.sort(function() {
    return 0.5 - Math.random();
  });
}, mf = function(e) {
  if (mt(e))
    return e;
  var t = Gn(e) ? e : {
    each: e
  }, n = Zi(t.ease), i = t.from || 0, r = parseFloat(t.base) || 0, a = {}, o = i > 0 && i < 1, l = isNaN(i) || o, c = t.axis, h = i, u = i;
  return At(i) ? h = u = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[i] || 0 : !o && l && (h = i[0], u = i[1]), function(d, p, g) {
    var _ = (g || t).length, f = a[_], m, x, y, M, b, w, E, R, L;
    if (!f) {
      if (L = t.grid === "auto" ? 0 : (t.grid || [1, vn])[1], !L) {
        for (E = -vn; E < (E = g[L++].getBoundingClientRect().left) && L < _; )
          ;
        L < _ && L--;
      }
      for (f = a[_] = [], m = l ? Math.min(L, _) * h - 0.5 : i % L, x = L === vn ? 0 : l ? _ * u / L - 0.5 : i / L | 0, E = 0, R = vn, w = 0; w < _; w++)
        y = w % L - m, M = x - (w / L | 0), f[w] = b = c ? Math.abs(c === "y" ? M : y) : Zd(y * y + M * M), b > E && (E = b), b < R && (R = b);
      i === "random" && pf(f), f.max = E - R, f.min = R, f.v = _ = (parseFloat(t.amount) || parseFloat(t.each) * (L > _ ? _ - 1 : c ? c === "y" ? _ / L : L : Math.max(L, _ / L)) || 0) * (i === "edges" ? -1 : 1), f.b = _ < 0 ? r - _ : r, f.u = Nt(t.amount || t.each) || 0, n = n && _ < 0 ? Yy(n) : n;
    }
    return _ = (f[d] - f.min) / f.max || 0, ut(f.b + (n ? n(_) : _) * f.v) + f.u;
  };
}, ec = function(e) {
  var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
  return function(n) {
    var i = ut(Math.round(parseFloat(n) / e) * e * t);
    return (i - i % 1) / t + (ai(n) ? 0 : Nt(n));
  };
}, _f = function(e, t) {
  var n = Ut(e), i, r;
  return !n && Gn(e) && (i = n = e.radius || vn, e.values ? (e = xn(e.values), (r = !ai(e[0])) && (i *= i)) : e = ec(e.increment)), Li(t, n ? mt(e) ? function(a) {
    return r = e(a), Math.abs(r - a) <= i ? r : a;
  } : function(a) {
    for (var o = parseFloat(r ? a.x : a), l = parseFloat(r ? a.y : 0), c = vn, h = 0, u = e.length, d, p; u--; )
      r ? (d = e[u].x - o, p = e[u].y - l, d = d * d + p * p) : d = Math.abs(e[u] - o), d < c && (c = d, h = u);
    return h = !i || c <= i ? e[h] : a, r || h === a || ai(a) ? h : h + Nt(a);
  } : ec(e));
}, gf = function(e, t, n, i) {
  return Li(Ut(e) ? !t : n === !0 ? !!(n = 0) : !i, function() {
    return Ut(e) ? e[~~(Math.random() * e.length)] : (n = n || 1e-5) && (i = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((e - n / 2 + Math.random() * (t - e + n * 0.99)) / n) * n * i) / i;
  });
}, Ny = function() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function(i) {
    return t.reduce(function(r, a) {
      return a(r);
    }, i);
  };
}, Uy = function(e, t) {
  return function(n) {
    return e(parseFloat(n)) + (t || Nt(n));
  };
}, Oy = function(e, t, n) {
  return xf(e, t, 0, 1, n);
}, vf = function(e, t, n) {
  return Li(n, function(i) {
    return e[~~t(i)];
  });
}, Fy = function s(e, t, n) {
  var i = t - e;
  return Ut(e) ? vf(e, s(0, e.length), t) : Li(n, function(r) {
    return (i + (r - e) % i) % i + e;
  });
}, By = function s(e, t, n) {
  var i = t - e, r = i * 2;
  return Ut(e) ? vf(e, s(0, e.length - 1), t) : Li(n, function(a) {
    return a = (r + (a - e) % r) % r || 0, e + (a > i ? r - a : a);
  });
}, Lr = function(e) {
  return e.replace(gy, function(t) {
    var n = t.indexOf("[") + 1, i = t.substring(n || 7, n ? t.indexOf("]") : t.length - 1).split(vy);
    return gf(n ? i : +i[0], n ? 0 : +i[1], +i[2] || 1e-5);
  });
}, xf = function(e, t, n, i, r) {
  var a = t - e, o = i - n;
  return Li(r, function(l) {
    return n + ((l - e) / a * o || 0);
  });
}, ky = function s(e, t, n, i) {
  var r = isNaN(e + t) ? 0 : function(p) {
    return (1 - p) * e + p * t;
  };
  if (!r) {
    var a = At(e), o = {}, l, c, h, u, d;
    if (n === !0 && (i = 1) && (n = null), a)
      e = {
        p: e
      }, t = {
        p: t
      };
    else if (Ut(e) && !Ut(t)) {
      for (h = [], u = e.length, d = u - 2, c = 1; c < u; c++)
        h.push(s(e[c - 1], e[c]));
      u--, r = function(g) {
        g *= u;
        var _ = Math.min(d, ~~g);
        return h[_](g - _);
      }, n = t;
    } else i || (e = Ys(Ut(e) ? [] : {}, e));
    if (!h) {
      for (l in t)
        Wc.call(o, e, l, "get", t[l]);
      r = function(g) {
        return jc(g, o) || (a ? e.p : e);
      };
    }
  }
  return Li(n, r);
}, Iu = function(e, t, n) {
  var i = e.labels, r = vn, a, o, l;
  for (a in i)
    o = i[a] - t, o < 0 == !!n && o && r > (o = Math.abs(o)) && (l = a, r = o);
  return l;
}, ln = function(e, t, n) {
  var i = e.vars, r = i[t], a = ct, o = e._ctx, l, c, h;
  if (r)
    return l = i[t + "Params"], c = i.callbackScope || e, n && bi.length && Va(), o && (ct = o), h = l ? r.apply(c, l) : r.call(c), ct = a, h;
}, _r = function(e) {
  return Ri(e), e.scrollTrigger && e.scrollTrigger.kill(!!Pt), e.progress() < 1 && ln(e, "onInterrupt"), e;
}, bs, yf = [], Mf = function(e) {
  if (e)
    if (e = !e.name && e.default || e, Fc() || e.headless) {
      var t = e.name, n = mt(e), i = t && !n && e.init ? function() {
        this._props = [];
      } : e, r = {
        init: Pr,
        render: jc,
        add: Wc,
        kill: nM,
        modifier: tM,
        rawVars: 0
      }, a = {
        targetTest: 0,
        get: 0,
        getSetter: qc,
        aliases: {},
        register: 0
      };
      if (Ks(), e !== i) {
        if (rn[t])
          return;
        dn(i, dn(Ha(e, r), a)), Ys(i.prototype, Ys(r, Ha(e, a))), rn[i.prop = t] = i, e.targetTest && (Ca.push(i), zc[t] = 1), t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin";
      }
      nf(t, i), e.register && e.register(Jt, i, Zt);
    } else
      yf.push(e);
}, it = 255, gr = {
  aqua: [0, it, it],
  lime: [0, it, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, it],
  navy: [0, 0, 128],
  white: [it, it, it],
  olive: [128, 128, 0],
  yellow: [it, it, 0],
  orange: [it, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [it, 0, 0],
  pink: [it, 192, 203],
  cyan: [0, it, it],
  transparent: [it, it, it, 0]
}, Ho = function(e, t, n) {
  return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? t + (n - t) * e * 6 : e < 0.5 ? n : e * 3 < 2 ? t + (n - t) * (2 / 3 - e) * 6 : t) * it + 0.5 | 0;
}, Sf = function(e, t, n) {
  var i = e ? ai(e) ? [e >> 16, e >> 8 & it, e & it] : 0 : gr.black, r, a, o, l, c, h, u, d, p, g;
  if (!i) {
    if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), gr[e])
      i = gr[e];
    else if (e.charAt(0) === "#") {
      if (e.length < 6 && (r = e.charAt(1), a = e.charAt(2), o = e.charAt(3), e = "#" + r + r + a + a + o + o + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9)
        return i = parseInt(e.substr(1, 6), 16), [i >> 16, i >> 8 & it, i & it, parseInt(e.substr(7), 16) / 255];
      e = parseInt(e.substr(1), 16), i = [e >> 16, e >> 8 & it, e & it];
    } else if (e.substr(0, 3) === "hsl") {
      if (i = g = e.match(Ru), !t)
        l = +i[0] % 360 / 360, c = +i[1] / 100, h = +i[2] / 100, a = h <= 0.5 ? h * (c + 1) : h + c - h * c, r = h * 2 - a, i.length > 3 && (i[3] *= 1), i[0] = Ho(l + 1 / 3, r, a), i[1] = Ho(l, r, a), i[2] = Ho(l - 1 / 3, r, a);
      else if (~e.indexOf("="))
        return i = e.match(Jd), n && i.length < 4 && (i[3] = 1), i;
    } else
      i = e.match(Ru) || gr.transparent;
    i = i.map(Number);
  }
  return t && !g && (r = i[0] / it, a = i[1] / it, o = i[2] / it, u = Math.max(r, a, o), d = Math.min(r, a, o), h = (u + d) / 2, u === d ? l = c = 0 : (p = u - d, c = h > 0.5 ? p / (2 - u - d) : p / (u + d), l = u === r ? (a - o) / p + (a < o ? 6 : 0) : u === a ? (o - r) / p + 2 : (r - a) / p + 4, l *= 60), i[0] = ~~(l + 0.5), i[1] = ~~(c * 100 + 0.5), i[2] = ~~(h * 100 + 0.5)), n && i.length < 4 && (i[3] = 1), i;
}, Ef = function(e) {
  var t = [], n = [], i = -1;
  return e.split(Ai).forEach(function(r) {
    var a = r.match(Ts) || [];
    t.push.apply(t, a), n.push(i += a.length + 1);
  }), t.c = n, t;
}, Nu = function(e, t, n) {
  var i = "", r = (e + i).match(Ai), a = t ? "hsla(" : "rgba(", o = 0, l, c, h, u;
  if (!r)
    return e;
  if (r = r.map(function(d) {
    return (d = Sf(d, t, 1)) && a + (t ? d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : d.join(",")) + ")";
  }), n && (h = Ef(e), l = n.c, l.join(i) !== h.c.join(i)))
    for (c = e.replace(Ai, "1").split(Ts), u = c.length - 1; o < u; o++)
      i += c[o] + (~l.indexOf(o) ? r.shift() || a + "0,0,0,0)" : (h.length ? h : r.length ? r : n).shift());
  if (!c)
    for (c = e.split(Ai), u = c.length - 1; o < u; o++)
      i += c[o] + r[o];
  return i + c[u];
}, Ai = function() {
  var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
  for (e in gr)
    s += "|" + e + "\\b";
  return new RegExp(s + ")", "gi");
}(), zy = /hsl[a]?\(/, Tf = function(e) {
  var t = e.join(" "), n;
  if (Ai.lastIndex = 0, Ai.test(t))
    return n = zy.test(t), e[1] = Nu(e[1], n), e[0] = Nu(e[0], n, Ef(e[1])), !0;
}, Dr, on = function() {
  var s = Date.now, e = 500, t = 33, n = s(), i = n, r = 1e3 / 240, a = r, o = [], l, c, h, u, d, p, g = function _(f) {
    var m = s() - i, x = f === !0, y, M, b, w;
    if ((m > e || m < 0) && (n += m - t), i += m, b = i - n, y = b - a, (y > 0 || x) && (w = ++u.frame, d = b - u.time * 1e3, u.time = b = b / 1e3, a += y + (y >= r ? 4 : r - y), M = 1), x || (l = c(_)), M)
      for (p = 0; p < o.length; p++)
        o[p](b, d, w, f);
  };
  return u = {
    time: 0,
    frame: 0,
    tick: function() {
      g(!0);
    },
    deltaRatio: function(f) {
      return d / (1e3 / (f || 60));
    },
    wake: function() {
      ef && (!jl && Fc() && (In = jl = window, Bc = In.document || {}, un.gsap = Jt, (In.gsapVersions || (In.gsapVersions = [])).push(Jt.version), tf(za || In.GreenSockGlobals || !In.gsap && In || {}), yf.forEach(Mf)), h = typeof requestAnimationFrame < "u" && requestAnimationFrame, l && u.sleep(), c = h || function(f) {
        return setTimeout(f, a - u.time * 1e3 + 1 | 0);
      }, Dr = 1, g(2));
    },
    sleep: function() {
      (h ? cancelAnimationFrame : clearTimeout)(l), Dr = 0, c = Pr;
    },
    lagSmoothing: function(f, m) {
      e = f || 1 / 0, t = Math.min(m || 33, e);
    },
    fps: function(f) {
      r = 1e3 / (f || 240), a = u.time * 1e3 + r;
    },
    add: function(f, m, x) {
      var y = m ? function(M, b, w, E) {
        f(M, b, w, E), u.remove(y);
      } : f;
      return u.remove(f), o[x ? "unshift" : "push"](y), Ks(), y;
    },
    remove: function(f, m) {
      ~(m = o.indexOf(f)) && o.splice(m, 1) && p >= m && p--;
    },
    _listeners: o
  }, u;
}(), Ks = function() {
  return !Dr && on.wake();
}, Be = {}, Vy = /^[\d.\-M][\d.\-,\s]/, Hy = /["']/g, Gy = function(e) {
  for (var t = {}, n = e.substr(1, e.length - 3).split(":"), i = n[0], r = 1, a = n.length, o, l, c; r < a; r++)
    l = n[r], o = r !== a - 1 ? l.lastIndexOf(",") : l.length, c = l.substr(0, o), t[i] = isNaN(c) ? c.replace(Hy, "").trim() : +c, i = l.substr(o + 1).trim();
  return t;
}, Wy = function(e) {
  var t = e.indexOf("(") + 1, n = e.indexOf(")"), i = e.indexOf("(", t);
  return e.substring(t, ~i && i < n ? e.indexOf(")", n + 1) : n);
}, Xy = function(e) {
  var t = (e + "").split("("), n = Be[t[0]];
  return n && t.length > 1 && n.config ? n.config.apply(null, ~e.indexOf("{") ? [Gy(t[1])] : Wy(e).split(",").map(of)) : Be._CE && Vy.test(e) ? Be._CE("", e) : n;
}, Yy = function(e) {
  return function(t) {
    return 1 - e(1 - t);
  };
}, Zi = function(e, t) {
  return e && (mt(e) ? e : Be[e] || Xy(e)) || t;
}, ns = function(e, t, n, i) {
  n === void 0 && (n = function(l) {
    return 1 - t(1 - l);
  }), i === void 0 && (i = function(l) {
    return l < 0.5 ? t(l * 2) / 2 : 1 - t((1 - l) * 2) / 2;
  });
  var r = {
    easeIn: t,
    easeOut: n,
    easeInOut: i
  }, a;
  return Kt(e, function(o) {
    Be[o] = un[o] = r, Be[a = o.toLowerCase()] = n;
    for (var l in r)
      Be[a + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = Be[o + "." + l] = r[l];
  }), r;
}, bf = function(e) {
  return function(t) {
    return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
  };
}, Go = function s(e, t, n) {
  var i = t >= 1 ? t : 1, r = (n || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1), a = r / ql * (Math.asin(1 / i) || 0), o = function(h) {
    return h === 1 ? 1 : i * Math.pow(2, -10 * h) * _y((h - a) * r) + 1;
  }, l = e === "out" ? o : e === "in" ? function(c) {
    return 1 - o(1 - c);
  } : bf(o);
  return r = ql / r, l.config = function(c, h) {
    return s(e, c, h);
  }, l;
}, Wo = function s(e, t) {
  t === void 0 && (t = 1.70158);
  var n = function(a) {
    return a ? --a * a * ((t + 1) * a + t) + 1 : 0;
  }, i = e === "out" ? n : e === "in" ? function(r) {
    return 1 - n(1 - r);
  } : bf(n);
  return i.config = function(r) {
    return s(e, r);
  }, i;
};
Kt("Linear,Quad,Cubic,Quart,Quint,Strong", function(s, e) {
  var t = e < 5 ? e + 1 : e;
  ns(s + ",Power" + (t - 1), e ? function(n) {
    return Math.pow(n, t);
  } : function(n) {
    return n;
  }, function(n) {
    return 1 - Math.pow(1 - n, t);
  }, function(n) {
    return n < 0.5 ? Math.pow(n * 2, t) / 2 : 1 - Math.pow((1 - n) * 2, t) / 2;
  });
});
Be.Linear.easeNone = Be.none = Be.Linear.easeIn;
ns("Elastic", Go("in"), Go("out"), Go());
(function(s, e) {
  var t = 1 / e, n = 2 * t, i = 2.5 * t, r = function(o) {
    return o < t ? s * o * o : o < n ? s * Math.pow(o - 1.5 / e, 2) + 0.75 : o < i ? s * (o -= 2.25 / e) * o + 0.9375 : s * Math.pow(o - 2.625 / e, 2) + 0.984375;
  };
  ns("Bounce", function(a) {
    return 1 - r(1 - a);
  }, r);
})(7.5625, 2.75);
ns("Expo", function(s) {
  return Math.pow(2, 10 * (s - 1)) * s + s * s * s * s * s * s * (1 - s);
});
ns("Circ", function(s) {
  return -(Zd(1 - s * s) - 1);
});
ns("Sine", function(s) {
  return s === 1 ? 1 : -my(s * fy) + 1;
});
ns("Back", Wo("in"), Wo("out"), Wo());
Be.SteppedEase = Be.steps = un.SteppedEase = {
  config: function(e, t) {
    e === void 0 && (e = 1);
    var n = 1 / e, i = e + (t ? 0 : 1), r = t ? 1 : 0, a = 1 - st;
    return function(o) {
      return ((i * kr(0, a, o) | 0) + r) * n;
    };
  }
};
Rr.ease = Be["quad.out"];
Kt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(s) {
  return Vc += s + "," + s + "Params,";
});
var Af = function(e, t) {
  this.id = py++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : rf, this.set = t ? t.getSetter : qc;
}, Ir = /* @__PURE__ */ function() {
  function s(t) {
    this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, js(this, +t.duration, 1, 1), this.data = t.data, ct && (this._ctx = ct, ct.data.push(this)), Dr || on.wake();
  }
  var e = s.prototype;
  return e.delay = function(n) {
    return n || n === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + n - this._delay), this._delay = n, this) : this._delay;
  }, e.duration = function(n) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? n + (n + this._rDelay) * this._repeat : n) : this.totalDuration() && this._dur;
  }, e.totalDuration = function(n) {
    return arguments.length ? (this._dirty = 0, js(this, this._repeat < 0 ? n : (n - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, e.totalTime = function(n, i) {
    if (Ks(), !arguments.length)
      return this._tTime;
    var r = this._dp;
    if (r && r.smoothChildTiming && this._ts) {
      for (eo(this, n), !r._dp || r.parent || hf(r, this); r && r.parent; )
        r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && n < this._tDur || this._ts < 0 && n > 0 || !this._tDur && !n) && On(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== n || !this._dur && !i || this._initted && Math.abs(this._zTime) === st || !this._initted && this._dur && n || !n && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = n), af(this, n, i)), this;
  }, e.time = function(n, i) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), n + Lu(this)) % (this._dur + this._rDelay) || (n ? this._dur : 0), i) : this._time;
  }, e.totalProgress = function(n, i) {
    return arguments.length ? this.totalTime(this.totalDuration() * n, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  }, e.progress = function(n, i) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - n : n) + Lu(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, e.iteration = function(n, i) {
    var r = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (n - 1) * r, i) : this._repeat ? qs(this._tTime, r) + 1 : 1;
  }, e.timeScale = function(n, i) {
    if (!arguments.length)
      return this._rts === -st ? 0 : this._rts;
    if (this._rts === n)
      return this;
    var r = this.parent && this._ts ? Ga(this.parent._time, this) : this._tTime;
    return this._rts = +n || 0, this._ts = this._ps || n === -st ? 0 : this._rts, this.totalTime(kr(-Math.abs(this._delay), this.totalDuration(), r), i !== !1), Qa(this), Ay(this);
  }, e.paused = function(n) {
    return arguments.length ? (this._ps !== n && (this._ps = n, n ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Ks(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== st && (this._tTime -= st)))), this) : this._ps;
  }, e.startTime = function(n) {
    if (arguments.length) {
      this._start = ut(n);
      var i = this.parent || this._dp;
      return i && (i._sort || !this.parent) && On(i, this, this._start - this._delay), this;
    }
    return this._start;
  }, e.endTime = function(n) {
    return this._start + (jt(n) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, e.rawTime = function(n) {
    var i = this.parent || this._dp;
    return i ? n && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Ga(i.rawTime(n), this) : this._tTime : this._tTime;
  }, e.revert = function(n) {
    n === void 0 && (n = Sy);
    var i = Pt;
    return Pt = n, Gc(this) && (this.timeline && this.timeline.revert(n), this.totalTime(-0.01, n.suppressEvents)), this.data !== "nested" && n.kill !== !1 && this.kill(), Pt = i, this;
  }, e.globalTime = function(n) {
    for (var i = this, r = arguments.length ? n : i.rawTime(); i; )
      r = i._start + r / (Math.abs(i._ts) || 1), i = i._dp;
    return !this.parent && this._sat ? this._sat.globalTime(n) : r;
  }, e.repeat = function(n) {
    return arguments.length ? (this._repeat = n === 1 / 0 ? -2 : n, Du(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, e.repeatDelay = function(n) {
    if (arguments.length) {
      var i = this._time;
      return this._rDelay = n, Du(this), i ? this.time(i) : this;
    }
    return this._rDelay;
  }, e.yoyo = function(n) {
    return arguments.length ? (this._yoyo = n, this) : this._yoyo;
  }, e.seek = function(n, i) {
    return this.totalTime(mn(this, n), jt(i));
  }, e.restart = function(n, i) {
    return this.play().totalTime(n ? -this._delay : 0, jt(i)), this._dur || (this._zTime = -st), this;
  }, e.play = function(n, i) {
    return n != null && this.seek(n, i), this.reversed(!1).paused(!1);
  }, e.reverse = function(n, i) {
    return n != null && this.seek(n || this.totalDuration(), i), this.reversed(!0).paused(!1);
  }, e.pause = function(n, i) {
    return n != null && this.seek(n, i), this.paused(!0);
  }, e.resume = function() {
    return this.paused(!1);
  }, e.reversed = function(n) {
    return arguments.length ? (!!n !== this.reversed() && this.timeScale(-this._rts || (n ? -st : 0)), this) : this._rts < 0;
  }, e.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -st, this;
  }, e.isActive = function() {
    var n = this.parent || this._dp, i = this._start, r;
    return !!(!n || this._ts && this._initted && n.isActive() && (r = n.rawTime(!0)) >= i && r < this.endTime(!0) - st);
  }, e.eventCallback = function(n, i, r) {
    var a = this.vars;
    return arguments.length > 1 ? (i ? (a[n] = i, r && (a[n + "Params"] = r), n === "onUpdate" && (this._onUpdate = i)) : delete a[n], this) : a[n];
  }, e.then = function(n) {
    var i = this, r = i._prom;
    return new Promise(function(a) {
      var o = mt(n) ? n : lf, l = function() {
        var h = i.then;
        i.then = null, r && r(), mt(o) && (o = o(i)) && (o.then || o === i) && (i.then = h), a(o), i.then = h;
      };
      i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? l() : i._prom = l;
    });
  }, e.kill = function() {
    _r(this);
  }, s;
}();
dn(Ir.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -st,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var Wt = /* @__PURE__ */ function(s) {
  Kd(e, s);
  function e(n, i) {
    var r;
    return n === void 0 && (n = {}), r = s.call(this, n) || this, r.labels = {}, r.smoothChildTiming = !!n.smoothChildTiming, r.autoRemoveChildren = !!n.autoRemoveChildren, r._sort = jt(n.sortChildren), dt && On(n.parent || dt, ei(r), i), n.reversed && r.reverse(), n.paused && r.paused(!0), n.scrollTrigger && uf(ei(r), n.scrollTrigger), r;
  }
  var t = e.prototype;
  return t.to = function(i, r, a) {
    return Sr(0, arguments, this), this;
  }, t.from = function(i, r, a) {
    return Sr(1, arguments, this), this;
  }, t.fromTo = function(i, r, a, o) {
    return Sr(2, arguments, this), this;
  }, t.set = function(i, r, a) {
    return r.duration = 0, r.parent = this, Mr(r).repeatDelay || (r.repeat = 0), r.immediateRender = !!r.immediateRender, new yt(i, r, mn(this, a), 1), this;
  }, t.call = function(i, r, a) {
    return On(this, yt.delayedCall(0, i, r), a);
  }, t.staggerTo = function(i, r, a, o, l, c, h) {
    return a.duration = r, a.stagger = a.stagger || o, a.onComplete = c, a.onCompleteParams = h, a.parent = this, new yt(i, a, mn(this, l)), this;
  }, t.staggerFrom = function(i, r, a, o, l, c, h) {
    return a.runBackwards = 1, Mr(a).immediateRender = jt(a.immediateRender), this.staggerTo(i, r, a, o, l, c, h);
  }, t.staggerFromTo = function(i, r, a, o, l, c, h, u) {
    return o.startAt = a, Mr(o).immediateRender = jt(o.immediateRender), this.staggerTo(i, r, o, l, c, h, u);
  }, t.render = function(i, r, a) {
    var o = this._time, l = this._dirty ? this.totalDuration() : this._tDur, c = this._dur, h = i <= 0 ? 0 : ut(i), u = this._zTime < 0 != i < 0 && (this._initted || !c), d, p, g, _, f, m, x, y, M, b, w, E;
    if (this !== dt && h > l && i >= 0 && (h = l), h !== this._tTime || a || u) {
      if (o !== this._time && c && (h += this._time - o, i += this._time - o), d = h, M = this._start, y = this._ts, m = !y, u && (c || (o = this._zTime), (i || !r) && (this._zTime = i)), this._repeat) {
        if (w = this._yoyo, f = c + this._rDelay, this._repeat < -1 && i < 0)
          return this.totalTime(f * 100 + i, r, a);
        if (d = ut(h % f), h === l ? (_ = this._repeat, d = c) : (b = ut(h / f), _ = ~~b, _ && _ === b && (d = c, _--), d > c && (d = c)), b = qs(this._tTime, f), !o && this._tTime && b !== _ && this._tTime - b * f - this._dur <= 0 && (b = _), w && _ & 1 && (d = c - d, E = 1), _ !== b && !this._lock) {
          var R = w && b & 1, L = R === (w && _ & 1);
          if (_ < b && (R = !R), o = R ? 0 : h % c ? c : h, this._lock = 1, this.render(o || (E ? 0 : ut(_ * f)), r, !c)._lock = 0, this._tTime = h, !r && this.parent && ln(this, "onRepeat"), this.vars.repeatRefresh && !E && (this.invalidate()._lock = 1, b = _), o && o !== this._time || m !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (c = this._dur, l = this._tDur, L && (this._lock = 2, o = R ? c : -1e-4, this.render(o, !0), this.vars.repeatRefresh && !E && this.invalidate()), this._lock = 0, !this._ts && !m)
            return this;
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (x = Py(this, ut(o), ut(d)), x && (h -= d - (d = x._start))), this._tTime = h, this._time = d, this._act = !!y, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, o = 0), !o && h && c && !r && !b && (ln(this, "onStart"), this._tTime !== h))
        return this;
      if (d >= o && i >= 0)
        for (p = this._first; p; ) {
          if (g = p._next, (p._act || d >= p._start) && p._ts && x !== p) {
            if (p.parent !== this)
              return this.render(i, r, a);
            if (p.render(p._ts > 0 ? (d - p._start) * p._ts : (p._dirty ? p.totalDuration() : p._tDur) + (d - p._start) * p._ts, r, a), d !== this._time || !this._ts && !m) {
              x = 0, g && (h += this._zTime = -st);
              break;
            }
          }
          p = g;
        }
      else {
        p = this._last;
        for (var v = i < 0 ? i : d; p; ) {
          if (g = p._prev, (p._act || v <= p._end) && p._ts && x !== p) {
            if (p.parent !== this)
              return this.render(i, r, a);
            if (p.render(p._ts > 0 ? (v - p._start) * p._ts : (p._dirty ? p.totalDuration() : p._tDur) + (v - p._start) * p._ts, r, a || Pt && Gc(p)), d !== this._time || !this._ts && !m) {
              x = 0, g && (h += this._zTime = v ? -st : st);
              break;
            }
          }
          p = g;
        }
      }
      if (x && !r && (this.pause(), x.render(d >= o ? 0 : -st)._zTime = d >= o ? 1 : -1, this._ts))
        return this._start = M, Qa(this), this.render(i, r, a);
      this._onUpdate && !r && ln(this, "onUpdate", !0), (h === l && this._tTime >= this.totalDuration() || !h && o) && (M === this._start || Math.abs(y) !== Math.abs(this._ts)) && (this._lock || ((i || !c) && (h === l && this._ts > 0 || !h && this._ts < 0) && Ri(this, 1), !r && !(i < 0 && !o) && (h || o || !l) && (ln(this, h === l && i >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(h < l && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, t.add = function(i, r) {
    var a = this;
    if (ai(r) || (r = mn(this, r, i)), !(i instanceof Ir)) {
      if (Ut(i))
        return i.forEach(function(o) {
          return a.add(o, r);
        }), this;
      if (At(i))
        return this.addLabel(i, r);
      if (mt(i))
        i = yt.delayedCall(0, i);
      else
        return this;
    }
    return this !== i ? On(this, i, r) : this;
  }, t.getChildren = function(i, r, a, o) {
    i === void 0 && (i = !0), r === void 0 && (r = !0), a === void 0 && (a = !0), o === void 0 && (o = -vn);
    for (var l = [], c = this._first; c; )
      c._start >= o && (c instanceof yt ? r && l.push(c) : (a && l.push(c), i && l.push.apply(l, c.getChildren(!0, r, a)))), c = c._next;
    return l;
  }, t.getById = function(i) {
    for (var r = this.getChildren(1, 1, 1), a = r.length; a--; )
      if (r[a].vars.id === i)
        return r[a];
  }, t.remove = function(i) {
    return At(i) ? this.removeLabel(i) : mt(i) ? this.killTweensOf(i) : (i.parent === this && Ja(this, i), i === this._recent && (this._recent = this._last), Ki(this));
  }, t.totalTime = function(i, r) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = ut(on.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), s.prototype.totalTime.call(this, i, r), this._forcing = 0, this) : this._tTime;
  }, t.addLabel = function(i, r) {
    return this.labels[i] = mn(this, r), this;
  }, t.removeLabel = function(i) {
    return delete this.labels[i], this;
  }, t.addPause = function(i, r, a) {
    var o = yt.delayedCall(0, r || Pr, a);
    return o.data = "isPause", this._hasPause = 1, On(this, o, mn(this, i));
  }, t.removePause = function(i) {
    var r = this._first;
    for (i = mn(this, i); r; )
      r._start === i && r.data === "isPause" && Ri(r), r = r._next;
  }, t.killTweensOf = function(i, r, a) {
    for (var o = this.getTweensOf(i, a), l = o.length; l--; )
      yi !== o[l] && o[l].kill(i, r);
    return this;
  }, t.getTweensOf = function(i, r) {
    for (var a = [], o = xn(i), l = this._first, c = ai(r), h; l; )
      l instanceof yt ? Ey(l._targets, o) && (c ? (!yi || l._initted && l._ts) && l.globalTime(0) <= r && l.globalTime(l.totalDuration()) > r : !r || l.isActive()) && a.push(l) : (h = l.getTweensOf(o, r)).length && a.push.apply(a, h), l = l._next;
    return a;
  }, t.tweenTo = function(i, r) {
    r = r || {};
    var a = this, o = mn(a, i), l = r, c = l.startAt, h = l.onStart, u = l.onStartParams, d = l.immediateRender, p, g = yt.to(a, dn({
      ease: r.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: o,
      overwrite: "auto",
      duration: r.duration || Math.abs((o - (c && "time" in c ? c.time : a._time)) / a.timeScale()) || st,
      onStart: function() {
        if (a.pause(), !p) {
          var f = r.duration || Math.abs((o - (c && "time" in c ? c.time : a._time)) / a.timeScale());
          g._dur !== f && js(g, f, 0, 1).render(g._time, !0, !0), p = 1;
        }
        h && h.apply(g, u || []);
      }
    }, r));
    return d ? g.render(0) : g;
  }, t.tweenFromTo = function(i, r, a) {
    return this.tweenTo(r, dn({
      startAt: {
        time: mn(this, i)
      }
    }, a));
  }, t.recent = function() {
    return this._recent;
  }, t.nextLabel = function(i) {
    return i === void 0 && (i = this._time), Iu(this, mn(this, i));
  }, t.previousLabel = function(i) {
    return i === void 0 && (i = this._time), Iu(this, mn(this, i), 1);
  }, t.currentLabel = function(i) {
    return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + st);
  }, t.shiftChildren = function(i, r, a) {
    a === void 0 && (a = 0);
    var o = this._first, l = this.labels, c;
    for (i = ut(i); o; )
      o._start >= a && (o._start += i, o._end += i), o = o._next;
    if (r)
      for (c in l)
        l[c] >= a && (l[c] += i);
    return Ki(this);
  }, t.invalidate = function(i) {
    var r = this._first;
    for (this._lock = 0; r; )
      r.invalidate(i), r = r._next;
    return s.prototype.invalidate.call(this, i);
  }, t.clear = function(i) {
    i === void 0 && (i = !0);
    for (var r = this._first, a; r; )
      a = r._next, this.remove(r), r = a;
    return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), Ki(this);
  }, t.totalDuration = function(i) {
    var r = 0, a = this, o = a._last, l = vn, c, h, u;
    if (arguments.length)
      return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -i : i));
    if (a._dirty) {
      for (u = a.parent; o; )
        c = o._prev, o._dirty && o.totalDuration(), h = o._start, h > l && a._sort && o._ts && !a._lock ? (a._lock = 1, On(a, o, h - o._delay, 1)._lock = 0) : l = h, h < 0 && o._ts && (r -= h, (!u && !a._dp || u && u.smoothChildTiming) && (a._start += ut(h / a._ts), a._time -= h, a._tTime -= h), a.shiftChildren(-h, !1, -1 / 0), l = 0), o._end > r && o._ts && (r = o._end), o = c;
      js(a, a === dt && a._time > r ? a._time : r, 1, 1), a._dirty = 0;
    }
    return a._tDur;
  }, e.updateRoot = function(i) {
    if (dt._ts && (af(dt, Ga(i, dt)), sf = on.frame), on.frame >= Cu) {
      Cu += hn.autoSleep || 120;
      var r = dt._first;
      if ((!r || !r._ts) && hn.autoSleep && on._listeners.length < 2) {
        for (; r && !r._ts; )
          r = r._next;
        r || on.sleep();
      }
    }
  }, e;
}(Ir);
dn(Wt.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var qy = function(e, t, n, i, r, a, o) {
  var l = new Zt(this._pt, e, t, 0, 1, Df, null, r), c = 0, h = 0, u, d, p, g, _, f, m, x;
  for (l.b = n, l.e = i, n += "", i += "", (m = ~i.indexOf("random(")) && (i = Lr(i)), a && (x = [n, i], a(x, e, t), n = x[0], i = x[1]), d = n.match(zo) || []; u = zo.exec(i); )
    g = u[0], _ = i.substring(c, u.index), p ? p = (p + 1) % 5 : _.substr(-5) === "rgba(" && (p = 1), g !== d[h++] && (f = parseFloat(d[h - 1]) || 0, l._pt = {
      _next: l._pt,
      p: _ || h === 1 ? _ : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: f,
      c: g.charAt(1) === "=" ? Ps(f, g) - f : parseFloat(g) - f,
      m: p && p < 4 ? Math.round : 0
    }, c = zo.lastIndex);
  return l.c = c < i.length ? i.substring(c, i.length) : "", l.fp = o, (Qd.test(i) || m) && (l.e = 0), this._pt = l, l;
}, Wc = function(e, t, n, i, r, a, o, l, c, h) {
  mt(i) && (i = i(r || 0, e, a));
  var u = e[t], d = n !== "get" ? n : mt(u) ? c ? e[t.indexOf("set") || !mt(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](c) : e[t]() : u, p = mt(u) ? c ? Jy : Pf : Yc, g;
  if (At(i) && (~i.indexOf("random(") && (i = Lr(i)), i.charAt(1) === "=" && (g = Ps(d, i) + (Nt(d) || 0), (g || g === 0) && (i = g))), !h || d !== i || tc)
    return !isNaN(d * i) && i !== "" ? (g = new Zt(this._pt, e, t, +d || 0, i - (d || 0), typeof u == "boolean" ? eM : Lf, 0, p), c && (g.fp = c), o && g.modifier(o, this, e), this._pt = g) : (!u && !(t in e) && kc(t, i), qy.call(this, e, t, d, i, p, l || hn.stringFilter, c));
}, jy = function(e, t, n, i, r) {
  if (mt(e) && (e = Er(e, r, t, n, i)), !Gn(e) || e.style && e.nodeType || Ut(e) || $d(e))
    return At(e) ? Er(e, r, t, n, i) : e;
  var a = {}, o;
  for (o in e)
    a[o] = Er(e[o], r, t, n, i);
  return a;
}, wf = function(e, t, n, i, r, a) {
  var o, l, c, h;
  if (rn[e] && (o = new rn[e]()).init(r, o.rawVars ? t[e] : jy(t[e], i, r, a, n), n, i, a) !== !1 && (n._pt = l = new Zt(n._pt, r, e, 0, 1, o.render, o, 0, o.priority), n !== bs))
    for (c = n._ptLookup[n._targets.indexOf(r)], h = o._props.length; h--; )
      c[o._props[h]] = l;
  return o;
}, yi, tc, Xc = function s(e, t, n) {
  var i = e.vars, r = i.ease, a = i.startAt, o = i.immediateRender, l = i.lazy, c = i.onUpdate, h = i.runBackwards, u = i.yoyoEase, d = i.keyframes, p = i.autoRevert, g = e._dur, _ = e._startAt, f = e._targets, m = e.parent, x = m && m.data === "nested" ? m.vars.targets : f, y = e._overwrite === "auto" && !Uc, M = e.timeline, b = i.easeReverse || u, w, E, R, L, v, T, F, O, G, q, z, X, H;
  if (M && (!d || !r) && (r = "none"), e._ease = Zi(r, Rr.ease), e._rEase = b && (Zi(b) || e._ease), e._from = !M && !!i.runBackwards, e._from && (e.ratio = 1), !M || d && !i.stagger) {
    if (O = f[0] ? ji(f[0]).harness : 0, X = O && i[O.prop], w = Ha(i, zc), _ && (_._zTime < 0 && _.progress(1), t < 0 && h && o && !p ? _.render(-1, !0) : _.revert(h && g ? Ra : My), _._lazy = 0), a) {
      if (Ri(e._startAt = yt.set(f, dn({
        data: "isStart",
        overwrite: !1,
        parent: m,
        immediateRender: !0,
        lazy: !_ && jt(l),
        startAt: null,
        delay: 0,
        onUpdate: c && function() {
          return ln(e, "onUpdate");
        },
        stagger: 0
      }, a))), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (Pt || !o && !p) && e._startAt.revert(Ra), o && g && t <= 0 && n <= 0) {
        t && (e._zTime = t);
        return;
      }
    } else if (h && g && !_) {
      if (t && (o = !1), R = dn({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: o && !_ && jt(l),
        immediateRender: o,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: m
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, w), X && (R[O.prop] = X), Ri(e._startAt = yt.set(f, R)), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (Pt ? e._startAt.revert(Ra) : e._startAt.render(-1, !0)), e._zTime = t, !o)
        s(e._startAt, st, st);
      else if (!t)
        return;
    }
    for (e._pt = e._ptCache = 0, l = g && jt(l) || l && !g, E = 0; E < f.length; E++) {
      if (v = f[E], F = v._gsap || Hc(f)[E]._gsap, e._ptLookup[E] = q = {}, Kl[F.id] && bi.length && Va(), z = x === f ? E : x.indexOf(v), O && (G = new O()).init(v, X || w, e, z, x) !== !1 && (e._pt = L = new Zt(e._pt, v, G.name, 0, 1, G.render, G, 0, G.priority), G._props.forEach(function(te) {
        q[te] = L;
      }), G.priority && (T = 1)), !O || X)
        for (R in w)
          rn[R] && (G = wf(R, w, e, z, v, x)) ? G.priority && (T = 1) : q[R] = L = Wc.call(e, v, R, "get", w[R], z, x, 0, i.stringFilter);
      e._op && e._op[E] && e.kill(v, e._op[E]), y && e._pt && (yi = e, dt.killTweensOf(v, q, e.globalTime(t)), H = !e.parent, yi = 0), e._pt && l && (Kl[F.id] = 1);
    }
    T && If(e), e._onInit && e._onInit(e);
  }
  e._onUpdate = c, e._initted = (!e._op || e._pt) && !H, d && t <= 0 && M.render(vn, !0, !0);
}, Ky = function(e, t, n, i, r, a, o, l) {
  var c = (e._pt && e._ptCache || (e._ptCache = {}))[t], h, u, d, p;
  if (!c)
    for (c = e._ptCache[t] = [], d = e._ptLookup, p = e._targets.length; p--; ) {
      if (h = d[p][t], h && h.d && h.d._pt)
        for (h = h.d._pt; h && h.p !== t && h.fp !== t; )
          h = h._next;
      if (!h)
        return tc = 1, e.vars[t] = "+=0", Xc(e, o), tc = 0, l ? Cr(t + " not eligible for reset. Try splitting into individual properties") : 1;
      c.push(h);
    }
  for (p = c.length; p--; )
    u = c[p], h = u._pt || u, h.s = (i || i === 0) && !r ? i : h.s + (i || 0) + a * h.c, h.c = n - h.s, u.e && (u.e = gt(n) + Nt(u.e)), u.b && (u.b = h.s + Nt(u.b));
}, Zy = function(e, t) {
  var n = e[0] ? ji(e[0]).harness : 0, i = n && n.aliases, r, a, o, l;
  if (!i)
    return t;
  r = Ys({}, t);
  for (a in i)
    if (a in r)
      for (l = i[a].split(","), o = l.length; o--; )
        r[l[o]] = r[a];
  return r;
}, $y = function(e, t, n, i) {
  var r = t.ease || i || "power1.inOut", a, o;
  if (Ut(t))
    o = n[e] || (n[e] = []), t.forEach(function(l, c) {
      return o.push({
        t: c / (t.length - 1) * 100,
        v: l,
        e: r
      });
    });
  else
    for (a in t)
      o = n[a] || (n[a] = []), a === "ease" || o.push({
        t: parseFloat(e),
        v: t[a],
        e: r
      });
}, Er = function(e, t, n, i, r) {
  return mt(e) ? e.call(t, n, i, r) : At(e) && ~e.indexOf("random(") ? Lr(e) : e;
}, Rf = Vc + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert", Cf = {};
Kt(Rf + ",id,stagger,delay,duration,paused,scrollTrigger", function(s) {
  return Cf[s] = 1;
});
var yt = /* @__PURE__ */ function(s) {
  Kd(e, s);
  function e(n, i, r, a) {
    var o;
    typeof i == "number" && (r.duration = i, i = r, r = null), o = s.call(this, a ? i : Mr(i)) || this;
    var l = o.vars, c = l.duration, h = l.delay, u = l.immediateRender, d = l.stagger, p = l.overwrite, g = l.keyframes, _ = l.defaults, f = l.scrollTrigger, m = i.parent || dt, x = (Ut(n) || $d(n) ? ai(n[0]) : "length" in i) ? [n] : xn(n), y, M, b, w, E, R, L, v;
    if (o._targets = x.length ? Hc(x) : Cr("GSAP target " + n + " not found. https://gsap.com", !hn.nullTargetWarn) || [], o._ptLookup = [], o._overwrite = p, g || d || ma(c) || ma(h)) {
      i = o.vars;
      var T = i.easeReverse || i.yoyoEase;
      if (y = o.timeline = new Wt({
        data: "nested",
        defaults: _ || {},
        targets: m && m.data === "nested" ? m.vars.targets : x
      }), y.kill(), y.parent = y._dp = ei(o), y._start = 0, d || ma(c) || ma(h)) {
        if (w = x.length, L = d && mf(d), Gn(d))
          for (E in d)
            ~Rf.indexOf(E) && (v || (v = {}), v[E] = d[E]);
        for (M = 0; M < w; M++)
          b = Ha(i, Cf), b.stagger = 0, T && (b.easeReverse = T), v && Ys(b, v), R = x[M], b.duration = +Er(c, ei(o), M, R, x), b.delay = (+Er(h, ei(o), M, R, x) || 0) - o._delay, !d && w === 1 && b.delay && (o._delay = h = b.delay, o._start += h, b.delay = 0), y.to(R, b, L ? L(M, R, x) : 0), y._ease = Be.none;
        y.duration() ? c = h = 0 : o.timeline = 0;
      } else if (g) {
        Mr(dn(y.vars.defaults, {
          ease: "none"
        })), y._ease = Zi(g.ease || i.ease || "none");
        var F = 0, O, G, q;
        if (Ut(g))
          g.forEach(function(z) {
            return y.to(x, z, ">");
          }), y.duration();
        else {
          b = {};
          for (E in g)
            E === "ease" || E === "easeEach" || $y(E, g[E], b, g.easeEach);
          for (E in b)
            for (O = b[E].sort(function(z, X) {
              return z.t - X.t;
            }), F = 0, M = 0; M < O.length; M++)
              G = O[M], q = {
                ease: G.e,
                duration: (G.t - (M ? O[M - 1].t : 0)) / 100 * c
              }, q[E] = G.v, y.to(x, q, F), F += q.duration;
          y.duration() < c && y.to({}, {
            duration: c - y.duration()
          });
        }
      }
      c || o.duration(c = y.duration());
    } else
      o.timeline = 0;
    return p === !0 && !Uc && (yi = ei(o), dt.killTweensOf(x), yi = 0), On(m, ei(o), r), i.reversed && o.reverse(), i.paused && o.paused(!0), (u || !c && !g && o._start === ut(m._time) && jt(u) && wy(ei(o)) && m.data !== "nested") && (o._tTime = -st, o.render(Math.max(0, -h) || 0)), f && uf(ei(o), f), o;
  }
  var t = e.prototype;
  return t.render = function(i, r, a) {
    var o = this._time, l = this._tDur, c = this._dur, h = i < 0, u = i > l - st && !h ? l : i < st ? 0 : i, d, p, g, _, f, m, x, y;
    if (!c)
      Cy(this, i, r, a);
    else if (u !== this._tTime || !i || a || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== h || this._lazy) {
      if (d = u, y = this.timeline, this._repeat) {
        if (_ = c + this._rDelay, this._repeat < -1 && h)
          return this.totalTime(_ * 100 + i, r, a);
        if (d = ut(u % _), u === l ? (g = this._repeat, d = c) : (f = ut(u / _), g = ~~f, g && g === f ? (d = c, g--) : d > c && (d = c)), m = this._yoyo && g & 1, m && (d = c - d), f = qs(this._tTime, _), d === o && !a && this._initted && g === f)
          return this._tTime = u, this;
        g !== f && this.vars.repeatRefresh && !m && !this._lock && d !== _ && this._initted && (this._lock = a = 1, this.render(ut(_ * g), !0).invalidate()._lock = 0);
      }
      if (!this._initted) {
        if (df(this, h ? i : d, a, r, u))
          return this._tTime = 0, this;
        if (o !== this._time && !(a && this.vars.repeatRefresh && g !== f))
          return this;
        if (c !== this._dur)
          return this.render(i, r, a);
      }
      if (this._rEase) {
        var M = d < o;
        if (M !== this._inv) {
          var b = M ? o : c - o;
          this._inv = M, this._from && (this.ratio = 1 - this.ratio), this._invRatio = this.ratio, this._invTime = o, this._invRecip = b ? (M ? -1 : 1) / b : 0, this._invScale = M ? -this.ratio : 1 - this.ratio, this._invEase = M ? this._rEase : this._ease;
        }
        this.ratio = x = this._invRatio + this._invScale * this._invEase((d - this._invTime) * this._invRecip);
      } else
        this.ratio = x = this._ease(d / c);
      if (this._from && (this.ratio = x = 1 - x), this._tTime = u, this._time = d, !this._act && this._ts && (this._act = 1, this._lazy = 0), !o && u && !r && !f && (ln(this, "onStart"), this._tTime !== u))
        return this;
      for (p = this._pt; p; )
        p.r(x, p.d), p = p._next;
      y && y.render(i < 0 ? i : y._dur * y._ease(d / this._dur), r, a) || this._startAt && (this._zTime = i), this._onUpdate && !r && (h && Zl(this, i, r, a), ln(this, "onUpdate")), this._repeat && g !== f && this.vars.onRepeat && !r && this.parent && ln(this, "onRepeat"), (u === this._tDur || !u) && this._tTime === u && (h && !this._onUpdate && Zl(this, i, !0, !0), (i || !c) && (u === this._tDur && this._ts > 0 || !u && this._ts < 0) && Ri(this, 1), !r && !(h && !o) && (u || o || m) && (ln(this, u === l ? "onComplete" : "onReverseComplete", !0), this._prom && !(u < l && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, t.targets = function() {
    return this._targets;
  }, t.invalidate = function(i) {
    return (!i || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(i), s.prototype.invalidate.call(this, i);
  }, t.resetTo = function(i, r, a, o, l) {
    Dr || on.wake(), this._ts || this.play();
    var c = Math.min(this._dur, (this._dp._time - this._start) * this._ts), h;
    return this._initted || Xc(this, c), h = this._ease(c / this._dur), Ky(this, i, r, a, o, h, c, l) ? this.resetTo(i, r, a, o, 1) : (eo(this, 0), this.parent || cf(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, t.kill = function(i, r) {
    if (r === void 0 && (r = "all"), !i && (!r || r === "all"))
      return this._lazy = this._pt = 0, this.parent ? _r(this) : this.scrollTrigger && this.scrollTrigger.kill(!!Pt), this;
    if (this.timeline) {
      var a = this.timeline.totalDuration();
      return this.timeline.killTweensOf(i, r, yi && yi.vars.overwrite !== !0)._first || _r(this), this.parent && a !== this.timeline.totalDuration() && js(this, this._dur * this.timeline._tDur / a, 0, 1), this;
    }
    var o = this._targets, l = i ? xn(i) : o, c = this._ptLookup, h = this._pt, u, d, p, g, _, f, m;
    if ((!r || r === "all") && by(o, l))
      return r === "all" && (this._pt = 0), _r(this);
    for (u = this._op = this._op || [], r !== "all" && (At(r) && (_ = {}, Kt(r, function(x) {
      return _[x] = 1;
    }), r = _), r = Zy(o, r)), m = o.length; m--; )
      if (~l.indexOf(o[m])) {
        d = c[m], r === "all" ? (u[m] = r, g = d, p = {}) : (p = u[m] = u[m] || {}, g = r);
        for (_ in g)
          f = d && d[_], f && ((!("kill" in f.d) || f.d.kill(_) === !0) && Ja(this, f, "_pt"), delete d[_]), p !== "all" && (p[_] = 1);
      }
    return this._initted && !this._pt && h && _r(this), this;
  }, e.to = function(i, r) {
    return new e(i, r, arguments[2]);
  }, e.from = function(i, r) {
    return Sr(1, arguments);
  }, e.delayedCall = function(i, r, a, o) {
    return new e(r, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: i,
      onComplete: r,
      onReverseComplete: r,
      onCompleteParams: a,
      onReverseCompleteParams: a,
      callbackScope: o
    });
  }, e.fromTo = function(i, r, a) {
    return Sr(2, arguments);
  }, e.set = function(i, r) {
    return r.duration = 0, r.repeatDelay || (r.repeat = 0), new e(i, r);
  }, e.killTweensOf = function(i, r, a) {
    return dt.killTweensOf(i, r, a);
  }, e;
}(Ir);
dn(yt.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
Kt("staggerTo,staggerFrom,staggerFromTo", function(s) {
  yt[s] = function() {
    var e = new Wt(), t = Jl.call(arguments, 0);
    return t.splice(s === "staggerFromTo" ? 5 : 4, 0, 0), e[s].apply(e, t);
  };
});
var Yc = function(e, t, n) {
  return e[t] = n;
}, Pf = function(e, t, n) {
  return e[t](n);
}, Jy = function(e, t, n, i) {
  return e[t](i.fp, n);
}, Qy = function(e, t, n) {
  return e.setAttribute(t, n);
}, qc = function(e, t) {
  return mt(e[t]) ? Pf : Oc(e[t]) && e.setAttribute ? Qy : Yc;
}, Lf = function(e, t) {
  return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
}, eM = function(e, t) {
  return t.set(t.t, t.p, !!(t.s + t.c * e), t);
}, Df = function(e, t) {
  var n = t._pt, i = "";
  if (!e && t.b)
    i = t.b;
  else if (e === 1 && t.e)
    i = t.e;
  else {
    for (; n; )
      i = n.p + (n.m ? n.m(n.s + n.c * e) : Math.round((n.s + n.c * e) * 1e4) / 1e4) + i, n = n._next;
    i += t.c;
  }
  t.set(t.t, t.p, i, t);
}, jc = function(e, t) {
  for (var n = t._pt; n; )
    n.r(e, n.d), n = n._next;
}, tM = function(e, t, n, i) {
  for (var r = this._pt, a; r; )
    a = r._next, r.p === i && r.modifier(e, t, n), r = a;
}, nM = function(e) {
  for (var t = this._pt, n, i; t; )
    i = t._next, t.p === e && !t.op || t.op === e ? Ja(this, t, "_pt") : t.dep || (n = 1), t = i;
  return !n;
}, iM = function(e, t, n, i) {
  i.mSet(e, t, i.m.call(i.tween, n, i.mt), i);
}, If = function(e) {
  for (var t = e._pt, n, i, r, a; t; ) {
    for (n = t._next, i = r; i && i.pr > t.pr; )
      i = i._next;
    (t._prev = i ? i._prev : a) ? t._prev._next = t : r = t, (t._next = i) ? i._prev = t : a = t, t = n;
  }
  e._pt = r;
}, Zt = /* @__PURE__ */ function() {
  function s(t, n, i, r, a, o, l, c, h) {
    this.t = n, this.s = r, this.c = a, this.p = i, this.r = o || Lf, this.d = l || this, this.set = c || Yc, this.pr = h || 0, this._next = t, t && (t._prev = this);
  }
  var e = s.prototype;
  return e.modifier = function(n, i, r) {
    this.mSet = this.mSet || this.set, this.set = iM, this.m = n, this.mt = r, this.tween = i;
  }, s;
}();
Kt(Vc + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse", function(s) {
  return zc[s] = 1;
});
un.TweenMax = un.TweenLite = yt;
un.TimelineLite = un.TimelineMax = Wt;
dt = new Wt({
  sortChildren: !1,
  defaults: Rr,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
hn.stringFilter = Tf;
var $i = [], Pa = {}, sM = [], Uu = 0, rM = 0, Xo = function(e) {
  return (Pa[e] || sM).map(function(t) {
    return t();
  });
}, nc = function() {
  var e = Date.now(), t = [];
  e - Uu > 2 && (Xo("matchMediaInit"), $i.forEach(function(n) {
    var i = n.queries, r = n.conditions, a, o, l, c;
    for (o in i)
      a = In.matchMedia(i[o]).matches, a && (l = 1), a !== r[o] && (r[o] = a, c = 1);
    c && (n.revert(), l && t.push(n));
  }), Xo("matchMediaRevert"), t.forEach(function(n) {
    return n.onMatch(n, function(i) {
      return n.add(null, i);
    });
  }), Uu = e, Xo("matchMedia"));
}, Nf = /* @__PURE__ */ function() {
  function s(t, n) {
    this.selector = n && Ql(n), this.data = [], this._r = [], this.isReverted = !1, this.id = rM++, t && this.add(t);
  }
  var e = s.prototype;
  return e.add = function(n, i, r) {
    mt(n) && (r = i, i = n, n = mt);
    var a = this, o = function() {
      var c = ct, h = a.selector, u;
      return c && c !== a && c.data.push(a), r && (a.selector = Ql(r)), ct = a, u = i.apply(a, arguments), mt(u) && a._r.push(u), ct = c, a.selector = h, a.isReverted = !1, u;
    };
    return a.last = o, n === mt ? o(a, function(l) {
      return a.add(null, l);
    }) : n ? a[n] = o : o;
  }, e.ignore = function(n) {
    var i = ct;
    ct = null, n(this), ct = i;
  }, e.getTweens = function() {
    var n = [];
    return this.data.forEach(function(i) {
      return i instanceof s ? n.push.apply(n, i.getTweens()) : i instanceof yt && !(i.parent && i.parent.data === "nested") && n.push(i);
    }), n;
  }, e.clear = function() {
    this._r.length = this.data.length = 0;
  }, e.kill = function(n, i) {
    var r = this;
    if (n ? function() {
      for (var o = r.getTweens(), l = r.data.length, c; l--; )
        c = r.data[l], c.data === "isFlip" && (c.revert(), c.getChildren(!0, !0, !1).forEach(function(h) {
          return o.splice(o.indexOf(h), 1);
        }));
      for (o.map(function(h) {
        return {
          g: h._dur || h._delay || h._sat && !h._sat.vars.immediateRender ? h.globalTime(0) : -1 / 0,
          t: h
        };
      }).sort(function(h, u) {
        return u.g - h.g || -1 / 0;
      }).forEach(function(h) {
        return h.t.revert(n);
      }), l = r.data.length; l--; )
        c = r.data[l], c instanceof Wt ? c.data !== "nested" && (c.scrollTrigger && c.scrollTrigger.revert(), c.kill()) : !(c instanceof yt) && c.revert && c.revert(n);
      r._r.forEach(function(h) {
        return h(n, r);
      }), r.isReverted = !0;
    }() : this.data.forEach(function(o) {
      return o.kill && o.kill();
    }), this.clear(), i)
      for (var a = $i.length; a--; )
        $i[a].id === this.id && $i.splice(a, 1);
  }, e.revert = function(n) {
    this.kill(n || {});
  }, s;
}(), aM = /* @__PURE__ */ function() {
  function s(t) {
    this.contexts = [], this.scope = t, ct && ct.data.push(this);
  }
  var e = s.prototype;
  return e.add = function(n, i, r) {
    Gn(n) || (n = {
      matches: n
    });
    var a = new Nf(0, r || this.scope), o = a.conditions = {}, l, c, h;
    ct && !a.selector && (a.selector = ct.selector), this.contexts.push(a), i = a.add("onMatch", i), a.queries = n;
    for (c in n)
      c === "all" ? h = 1 : (l = In.matchMedia(n[c]), l && ($i.indexOf(a) < 0 && $i.push(a), (o[c] = l.matches) && (h = 1), l.addListener ? l.addListener(nc) : l.addEventListener("change", nc)));
    return h && i(a, function(u) {
      return a.add(null, u);
    }), this;
  }, e.revert = function(n) {
    this.kill(n || {});
  }, e.kill = function(n) {
    this.contexts.forEach(function(i) {
      return i.kill(n, !0);
    });
  }, s;
}(), Wa = {
  registerPlugin: function() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    t.forEach(function(i) {
      return Mf(i);
    });
  },
  timeline: function(e) {
    return new Wt(e);
  },
  getTweensOf: function(e, t) {
    return dt.getTweensOf(e, t);
  },
  getProperty: function(e, t, n, i) {
    At(e) && (e = xn(e)[0]);
    var r = ji(e || {}).get, a = n ? lf : of;
    return n === "native" && (n = ""), e && (t ? a((rn[t] && rn[t].get || r)(e, t, n, i)) : function(o, l, c) {
      return a((rn[o] && rn[o].get || r)(e, o, l, c));
    });
  },
  quickSetter: function(e, t, n) {
    if (e = xn(e), e.length > 1) {
      var i = e.map(function(h) {
        return Jt.quickSetter(h, t, n);
      }), r = i.length;
      return function(h) {
        for (var u = r; u--; )
          i[u](h);
      };
    }
    e = e[0] || {};
    var a = rn[t], o = ji(e), l = o.harness && (o.harness.aliases || {})[t] || t, c = a ? function(h) {
      var u = new a();
      bs._pt = 0, u.init(e, n ? h + n : h, bs, 0, [e]), u.render(1, u), bs._pt && jc(1, bs);
    } : o.set(e, l);
    return a ? c : function(h) {
      return c(e, l, n ? h + n : h, o, 1);
    };
  },
  quickTo: function(e, t, n) {
    var i, r = Jt.to(e, dn((i = {}, i[t] = "+=0.1", i.paused = !0, i.stagger = 0, i), n || {})), a = function(l, c, h) {
      return r.resetTo(t, l, c, h);
    };
    return a.tween = r, a;
  },
  isTweening: function(e) {
    return dt.getTweensOf(e, !0).length > 0;
  },
  defaults: function(e) {
    return e && e.ease && (e.ease = Zi(e.ease, Rr.ease)), Pu(Rr, e || {});
  },
  config: function(e) {
    return Pu(hn, e || {});
  },
  registerEffect: function(e) {
    var t = e.name, n = e.effect, i = e.plugins, r = e.defaults, a = e.extendTimeline;
    (i || "").split(",").forEach(function(o) {
      return o && !rn[o] && !un[o] && Cr(t + " effect requires " + o + " plugin.");
    }), Vo[t] = function(o, l, c) {
      return n(xn(o), dn(l || {}, r), c);
    }, a && (Wt.prototype[t] = function(o, l, c) {
      return this.add(Vo[t](o, Gn(l) ? l : (c = l) && {}, this), c);
    });
  },
  registerEase: function(e, t) {
    Be[e] = Zi(t);
  },
  parseEase: function(e, t) {
    return arguments.length ? Zi(e, t) : Be;
  },
  getById: function(e) {
    return dt.getById(e);
  },
  exportRoot: function(e, t) {
    e === void 0 && (e = {});
    var n = new Wt(e), i, r;
    for (n.smoothChildTiming = jt(e.smoothChildTiming), dt.remove(n), n._dp = 0, n._time = n._tTime = dt._time, i = dt._first; i; )
      r = i._next, (t || !(!i._dur && i instanceof yt && i.vars.onComplete === i._targets[0])) && On(n, i, i._start - i._delay), i = r;
    return On(dt, n, 0), n;
  },
  context: function(e, t) {
    return e ? new Nf(e, t) : ct;
  },
  matchMedia: function(e) {
    return new aM(e);
  },
  matchMediaRefresh: function() {
    return $i.forEach(function(e) {
      var t = e.conditions, n, i;
      for (i in t)
        t[i] && (t[i] = !1, n = 1);
      n && e.revert();
    }) || nc();
  },
  addEventListener: function(e, t) {
    var n = Pa[e] || (Pa[e] = []);
    ~n.indexOf(t) || n.push(t);
  },
  removeEventListener: function(e, t) {
    var n = Pa[e], i = n && n.indexOf(t);
    i >= 0 && n.splice(i, 1);
  },
  utils: {
    wrap: Fy,
    wrapYoyo: By,
    distribute: mf,
    random: gf,
    snap: _f,
    normalize: Oy,
    getUnit: Nt,
    clamp: Dy,
    splitColor: Sf,
    toArray: xn,
    selector: Ql,
    mapRange: xf,
    pipe: Ny,
    unitize: Uy,
    interpolate: ky,
    shuffle: pf
  },
  install: tf,
  effects: Vo,
  ticker: on,
  updateRoot: Wt.updateRoot,
  plugins: rn,
  globalTimeline: dt,
  core: {
    PropTween: Zt,
    globals: nf,
    Tween: yt,
    Timeline: Wt,
    Animation: Ir,
    getCache: ji,
    _removeLinkedListItem: Ja,
    reverting: function() {
      return Pt;
    },
    context: function(e) {
      return e && ct && (ct.data.push(e), e._ctx = ct), ct;
    },
    suppressOverwrites: function(e) {
      return Uc = e;
    }
  }
};
Kt("to,from,fromTo,delayedCall,set,killTweensOf", function(s) {
  return Wa[s] = yt[s];
});
on.add(Wt.updateRoot);
bs = Wa.to({}, {
  duration: 0
});
var oM = function(e, t) {
  for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t; )
    n = n._next;
  return n;
}, lM = function(e, t) {
  var n = e._targets, i, r, a;
  for (i in t)
    for (r = n.length; r--; )
      a = e._ptLookup[r][i], a && (a = a.d) && (a._pt && (a = oM(a, i)), a && a.modifier && a.modifier(t[i], e, n[r], i));
}, Yo = function(e, t) {
  return {
    name: e,
    headless: 1,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(i, r, a) {
      a._onInit = function(o) {
        var l, c;
        if (At(r) && (l = {}, Kt(r, function(h) {
          return l[h] = 1;
        }), r = l), t) {
          l = {};
          for (c in r)
            l[c] = t(r[c]);
          r = l;
        }
        lM(o, r);
      };
    }
  };
}, Jt = Wa.registerPlugin({
  name: "attr",
  init: function(e, t, n, i, r) {
    var a, o, l;
    this.tween = n;
    for (a in t)
      l = e.getAttribute(a) || "", o = this.add(e, "setAttribute", (l || 0) + "", t[a], i, r, 0, 0, a), o.op = a, o.b = l, this._props.push(a);
  },
  render: function(e, t) {
    for (var n = t._pt; n; )
      Pt ? n.set(n.t, n.p, n.b, n) : n.r(e, n.d), n = n._next;
  }
}, {
  name: "endArray",
  headless: 1,
  init: function(e, t) {
    for (var n = t.length; n--; )
      this.add(e, n, e[n] || 0, t[n], 0, 0, 0, 0, 0, 1);
  }
}, Yo("roundProps", ec), Yo("modifiers"), Yo("snap", _f)) || Wa;
yt.version = Wt.version = Jt.version = "3.15.0";
ef = 1;
Fc() && Ks();
Be.Power0;
Be.Power1;
Be.Power2;
Be.Power3;
Be.Power4;
Be.Linear;
Be.Quad;
Be.Cubic;
Be.Quart;
Be.Quint;
Be.Strong;
Be.Elastic;
Be.Back;
Be.SteppedEase;
Be.Bounce;
Be.Sine;
Be.Expo;
Be.Circ;
/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var Ou, Mi, Ls, Kc, qi, Fu, Zc, cM = function() {
  return typeof window < "u";
}, oi = {}, Gi = 180 / Math.PI, Ds = Math.PI / 180, xs = Math.atan2, Bu = 1e8, $c = /([A-Z])/g, hM = /(left|right|width|margin|padding|x)/i, uM = /[\s,\(]\S/, Bn = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, ic = function(e, t) {
  return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, dM = function(e, t) {
  return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, fM = function(e, t) {
  return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t);
}, pM = function(e, t) {
  return t.set(t.t, t.p, e === 1 ? t.e : e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t);
}, mM = function(e, t) {
  var n = t.s + t.c * e;
  t.set(t.t, t.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + t.u, t);
}, Uf = function(e, t) {
  return t.set(t.t, t.p, e ? t.e : t.b, t);
}, Of = function(e, t) {
  return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
}, _M = function(e, t, n) {
  return e.style[t] = n;
}, gM = function(e, t, n) {
  return e.style.setProperty(t, n);
}, vM = function(e, t, n) {
  return e._gsap[t] = n;
}, xM = function(e, t, n) {
  return e._gsap.scaleX = e._gsap.scaleY = n;
}, yM = function(e, t, n, i, r) {
  var a = e._gsap;
  a.scaleX = a.scaleY = n, a.renderTransform(r, a);
}, MM = function(e, t, n, i, r) {
  var a = e._gsap;
  a[t] = n, a.renderTransform(r, a);
}, ft = "transform", $t = ft + "Origin", SM = function s(e, t) {
  var n = this, i = this.target, r = i.style, a = i._gsap;
  if (e in oi && r) {
    if (this.tfm = this.tfm || {}, e !== "transform")
      e = Bn[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function(o) {
        return n.tfm[o] = ni(i, o);
      }) : this.tfm[e] = a.x ? a[e] : ni(i, e), e === $t && (this.tfm.zOrigin = a.zOrigin);
    else
      return Bn.transform.split(",").forEach(function(o) {
        return s.call(n, o, t);
      });
    if (this.props.indexOf(ft) >= 0)
      return;
    a.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push($t, t, "")), e = ft;
  }
  (r || t) && this.props.push(e, t, r[e]);
}, Ff = function(e) {
  e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"));
}, EM = function() {
  var e = this.props, t = this.target, n = t.style, i = t._gsap, r, a;
  for (r = 0; r < e.length; r += 3)
    e[r + 1] ? e[r + 1] === 2 ? t[e[r]](e[r + 2]) : t[e[r]] = e[r + 2] : e[r + 2] ? n[e[r]] = e[r + 2] : n.removeProperty(e[r].substr(0, 2) === "--" ? e[r] : e[r].replace($c, "-$1").toLowerCase());
  if (this.tfm) {
    for (a in this.tfm)
      i[a] = this.tfm[a];
    i.svg && (i.renderTransform(), t.setAttribute("data-svg-origin", this.svgo || "")), r = Zc(), (!r || !r.isStart) && !n[ft] && (Ff(n), i.zOrigin && n[$t] && (n[$t] += " " + i.zOrigin + "px", i.zOrigin = 0, i.renderTransform()), i.uncache = 1);
  }
}, Bf = function(e, t) {
  var n = {
    target: e,
    props: [],
    revert: EM,
    save: SM
  };
  return e._gsap || Jt.core.getCache(e), t && e.style && e.nodeType && t.split(",").forEach(function(i) {
    return n.save(i);
  }), n;
}, kf, sc = function(e, t) {
  var n = Mi.createElementNS ? Mi.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Mi.createElement(e);
  return n && n.style ? n : Mi.createElement(e);
}, cn = function s(e, t, n) {
  var i = getComputedStyle(e);
  return i[t] || i.getPropertyValue(t.replace($c, "-$1").toLowerCase()) || i.getPropertyValue(t) || !n && s(e, Zs(t) || t, 1) || "";
}, ku = "O,Moz,ms,Ms,Webkit".split(","), Zs = function(e, t, n) {
  var i = t || qi, r = i.style, a = 5;
  if (e in r && !n)
    return e;
  for (e = e.charAt(0).toUpperCase() + e.substr(1); a-- && !(ku[a] + e in r); )
    ;
  return a < 0 ? null : (a === 3 ? "ms" : a >= 0 ? ku[a] : "") + e;
}, rc = function() {
  cM() && window.document && (Ou = window, Mi = Ou.document, Ls = Mi.documentElement, qi = sc("div") || {
    style: {}
  }, sc("div"), ft = Zs(ft), $t = ft + "Origin", qi.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", kf = !!Zs("perspective"), Zc = Jt.core.reverting, Kc = 1);
}, zu = function(e) {
  var t = e.ownerSVGElement, n = sc("svg", t && t.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = e.cloneNode(!0), r;
  i.style.display = "block", n.appendChild(i), Ls.appendChild(n);
  try {
    r = i.getBBox();
  } catch {
  }
  return n.removeChild(i), Ls.removeChild(n), r;
}, Vu = function(e, t) {
  for (var n = t.length; n--; )
    if (e.hasAttribute(t[n]))
      return e.getAttribute(t[n]);
}, zf = function(e) {
  var t, n;
  try {
    t = e.getBBox();
  } catch {
    t = zu(e), n = 1;
  }
  return t && (t.width || t.height) || n || (t = zu(e)), t && !t.width && !t.x && !t.y ? {
    x: +Vu(e, ["x", "cx", "x1"]) || 0,
    y: +Vu(e, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : t;
}, Vf = function(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && zf(e));
}, Ci = function(e, t) {
  if (t) {
    var n = e.style, i;
    t in oi && t !== $t && (t = ft), n.removeProperty ? (i = t.substr(0, 2), (i === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t), n.removeProperty(i === "--" ? t : t.replace($c, "-$1").toLowerCase())) : n.removeAttribute(t);
  }
}, Si = function(e, t, n, i, r, a) {
  var o = new Zt(e._pt, t, n, 0, 1, a ? Of : Uf);
  return e._pt = o, o.b = i, o.e = r, e._props.push(n), o;
}, Hu = {
  deg: 1,
  rad: 1,
  turn: 1
}, TM = {
  grid: 1,
  flex: 1
}, Pi = function s(e, t, n, i) {
  var r = parseFloat(n) || 0, a = (n + "").trim().substr((r + "").length) || "px", o = qi.style, l = hM.test(t), c = e.tagName.toLowerCase() === "svg", h = (c ? "client" : "offset") + (l ? "Width" : "Height"), u = 100, d = i === "px", p = i === "%", g, _, f, m;
  if (i === a || !r || Hu[i] || Hu[a])
    return r;
  if (a !== "px" && !d && (r = s(e, t, n, "px")), m = e.getCTM && Vf(e), (p || a === "%") && (oi[t] || ~t.indexOf("adius")))
    return g = m ? e.getBBox()[l ? "width" : "height"] : e[h], gt(p ? r / g * u : r / 100 * g);
  if (o[l ? "width" : "height"] = u + (d ? a : i), _ = i !== "rem" && ~t.indexOf("adius") || i === "em" && e.appendChild && !c ? e : e.parentNode, m && (_ = (e.ownerSVGElement || {}).parentNode), (!_ || _ === Mi || !_.appendChild) && (_ = Mi.body), f = _._gsap, f && p && f.width && l && f.time === on.time && !f.uncache)
    return gt(r / f.width * u);
  if (p && (t === "height" || t === "width")) {
    var x = e.style[t];
    e.style[t] = u + i, g = e[h], x ? e.style[t] = x : Ci(e, t);
  } else
    (p || a === "%") && !TM[cn(_, "display")] && (o.position = cn(e, "position")), _ === e && (o.position = "static"), _.appendChild(qi), g = qi[h], _.removeChild(qi), o.position = "absolute";
  return l && p && (f = ji(_), f.time = on.time, f.width = _[h]), gt(d ? g * r / u : g && r ? u / g * r : 0);
}, ni = function(e, t, n, i) {
  var r;
  return Kc || rc(), t in Bn && t !== "transform" && (t = Bn[t], ~t.indexOf(",") && (t = t.split(",")[0])), oi[t] && t !== "transform" ? (r = Ur(e, i), r = t !== "transformOrigin" ? r[t] : r.svg ? r.origin : Ya(cn(e, $t)) + " " + r.zOrigin + "px") : (r = e.style[t], (!r || r === "auto" || i || ~(r + "").indexOf("calc(")) && (r = Xa[t] && Xa[t](e, t, n) || cn(e, t) || rf(e, t) || (t === "opacity" ? 1 : 0))), n && !~(r + "").trim().indexOf(" ") ? Pi(e, t, r, n) + n : r;
}, bM = function(e, t, n, i) {
  if (!n || n === "none") {
    var r = Zs(t, e, 1), a = r && cn(e, r, 1);
    a && a !== n ? (t = r, n = a) : t === "borderColor" && (n = cn(e, "borderTopColor"));
  }
  var o = new Zt(this._pt, e.style, t, 0, 1, Df), l = 0, c = 0, h, u, d, p, g, _, f, m, x, y, M, b;
  if (o.b = n, o.e = i, n += "", i += "", i.substring(0, 6) === "var(--" && (i = cn(e, i.substring(4, i.indexOf(")")))), i === "auto" && (_ = e.style[t], e.style[t] = i, i = cn(e, t) || i, _ ? e.style[t] = _ : Ci(e, t)), h = [n, i], Tf(h), n = h[0], i = h[1], d = n.match(Ts) || [], b = i.match(Ts) || [], b.length) {
    for (; u = Ts.exec(i); )
      f = u[0], x = i.substring(l, u.index), g ? g = (g + 1) % 5 : (x.substr(-5) === "rgba(" || x.substr(-5) === "hsla(") && (g = 1), f !== (_ = d[c++] || "") && (p = parseFloat(_) || 0, M = _.substr((p + "").length), f.charAt(1) === "=" && (f = Ps(p, f) + M), m = parseFloat(f), y = f.substr((m + "").length), l = Ts.lastIndex - y.length, y || (y = y || hn.units[t] || M, l === i.length && (i += y, o.e += y)), M !== y && (p = Pi(e, t, _, y) || 0), o._pt = {
        _next: o._pt,
        p: x || c === 1 ? x : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: p,
        c: m - p,
        m: g && g < 4 || t === "zIndex" ? Math.round : 0
      });
    o.c = l < i.length ? i.substring(l, i.length) : "";
  } else
    o.r = t === "display" && i === "none" ? Of : Uf;
  return Qd.test(i) && (o.e = 0), this._pt = o, o;
}, Gu = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, AM = function(e) {
  var t = e.split(" "), n = t[0], i = t[1] || "50%";
  return (n === "top" || n === "bottom" || i === "left" || i === "right") && (e = n, n = i, i = e), t[0] = Gu[n] || n, t[1] = Gu[i] || i, t.join(" ");
}, wM = function(e, t) {
  if (t.tween && t.tween._time === t.tween._dur) {
    var n = t.t, i = n.style, r = t.u, a = n._gsap, o, l, c;
    if (r === "all" || r === !0)
      i.cssText = "", l = 1;
    else
      for (r = r.split(","), c = r.length; --c > -1; )
        o = r[c], oi[o] && (l = 1, o = o === "transformOrigin" ? $t : ft), Ci(n, o);
    l && (Ci(n, ft), a && (a.svg && n.removeAttribute("transform"), i.scale = i.rotate = i.translate = "none", Ur(n, 1), a.uncache = 1, Ff(i)));
  }
}, Xa = {
  clearProps: function(e, t, n, i, r) {
    if (r.data !== "isFromStart") {
      var a = e._pt = new Zt(e._pt, t, n, 0, 0, wM);
      return a.u = i, a.pr = -10, a.tween = r, e._props.push(n), 1;
    }
  }
  /* className feature (about 0.4kb gzipped).
  , className(plugin, target, property, endValue, tween) {
    let _renderClassName = (ratio, data) => {
        data.css.render(ratio, data.css);
        if (!ratio || ratio === 1) {
          let inline = data.rmv,
            target = data.t,
            p;
          target.setAttribute("class", ratio ? data.e : data.b);
          for (p in inline) {
            _removeProperty(target, p);
          }
        }
      },
      _getAllStyles = (target) => {
        let styles = {},
          computed = getComputedStyle(target),
          p;
        for (p in computed) {
          if (isNaN(p) && p !== "cssText" && p !== "length") {
            styles[p] = computed[p];
          }
        }
        _setDefaults(styles, _parseTransform(target, 1));
        return styles;
      },
      startClassList = target.getAttribute("class"),
      style = target.style,
      cssText = style.cssText,
      cache = target._gsap,
      classPT = cache.classPT,
      inlineToRemoveAtEnd = {},
      data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
      changingVars = {},
      startVars = _getAllStyles(target),
      transformRelated = /(transform|perspective)/i,
      endVars, p;
    if (classPT) {
      classPT.r(1, classPT.d);
      _removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
    }
    target.setAttribute("class", data.e);
    endVars = _getAllStyles(target, true);
    target.setAttribute("class", startClassList);
    for (p in endVars) {
      if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
        changingVars[p] = endVars[p];
        if (!style[p] && style[p] !== "0") {
          inlineToRemoveAtEnd[p] = 1;
        }
      }
    }
    cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
    if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://gsap.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
      style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
    }
    _parseTransform(target, true); //to clear the caching of transforms
    data.css = new gsap.plugins.css();
    data.css.init(target, changingVars, tween);
    plugin._props.push(...data.css._props);
    return 1;
  }
  */
}, Nr = [1, 0, 0, 1, 0, 0], Hf = {}, Gf = function(e) {
  return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
}, Wu = function(e) {
  var t = cn(e, ft);
  return Gf(t) ? Nr : t.substr(7).match(Jd).map(gt);
}, Jc = function(e, t) {
  var n = e._gsap || ji(e), i = e.style, r = Wu(e), a, o, l, c;
  return n.svg && e.getAttribute("transform") ? (l = e.transform.baseVal.consolidate().matrix, r = [l.a, l.b, l.c, l.d, l.e, l.f], r.join(",") === "1,0,0,1,0,0" ? Nr : r) : (r === Nr && !e.offsetParent && e !== Ls && !n.svg && (l = i.display, i.display = "block", a = e.parentNode, (!a || !e.offsetParent && !e.getBoundingClientRect().width) && (c = 1, o = e.nextElementSibling, Ls.appendChild(e)), r = Wu(e), l ? i.display = l : Ci(e, "display"), c && (o ? a.insertBefore(e, o) : a ? a.appendChild(e) : Ls.removeChild(e))), t && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r);
}, ac = function(e, t, n, i, r, a) {
  var o = e._gsap, l = r || Jc(e, !0), c = o.xOrigin || 0, h = o.yOrigin || 0, u = o.xOffset || 0, d = o.yOffset || 0, p = l[0], g = l[1], _ = l[2], f = l[3], m = l[4], x = l[5], y = t.split(" "), M = parseFloat(y[0]) || 0, b = parseFloat(y[1]) || 0, w, E, R, L;
  n ? l !== Nr && (E = p * f - g * _) && (R = M * (f / E) + b * (-_ / E) + (_ * x - f * m) / E, L = M * (-g / E) + b * (p / E) - (p * x - g * m) / E, M = R, b = L) : (w = zf(e), M = w.x + (~y[0].indexOf("%") ? M / 100 * w.width : M), b = w.y + (~(y[1] || y[0]).indexOf("%") ? b / 100 * w.height : b)), i || i !== !1 && o.smooth ? (m = M - c, x = b - h, o.xOffset = u + (m * p + x * _) - m, o.yOffset = d + (m * g + x * f) - x) : o.xOffset = o.yOffset = 0, o.xOrigin = M, o.yOrigin = b, o.smooth = !!i, o.origin = t, o.originIsAbsolute = !!n, e.style[$t] = "0px 0px", a && (Si(a, o, "xOrigin", c, M), Si(a, o, "yOrigin", h, b), Si(a, o, "xOffset", u, o.xOffset), Si(a, o, "yOffset", d, o.yOffset)), e.setAttribute("data-svg-origin", M + " " + b);
}, Ur = function(e, t) {
  var n = e._gsap || new Af(e);
  if ("x" in n && !t && !n.uncache)
    return n;
  var i = e.style, r = n.scaleX < 0, a = "px", o = "deg", l = getComputedStyle(e), c = cn(e, $t) || "0", h, u, d, p, g, _, f, m, x, y, M, b, w, E, R, L, v, T, F, O, G, q, z, X, H, te, se, ce, Oe, We, Y, $;
  return h = u = d = _ = f = m = x = y = M = 0, p = g = 1, n.svg = !!(e.getCTM && Vf(e)), l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (i[ft] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[ft] !== "none" ? l[ft] : "")), i.scale = i.rotate = i.translate = "none"), E = Jc(e, n.svg), n.svg && (n.uncache ? (H = e.getBBox(), c = n.xOrigin - H.x + "px " + (n.yOrigin - H.y) + "px", X = "") : X = !t && e.getAttribute("data-svg-origin"), ac(e, X || c, !!X || n.originIsAbsolute, n.smooth !== !1, E)), b = n.xOrigin || 0, w = n.yOrigin || 0, E !== Nr && (T = E[0], F = E[1], O = E[2], G = E[3], h = q = E[4], u = z = E[5], E.length === 6 ? (p = Math.sqrt(T * T + F * F), g = Math.sqrt(G * G + O * O), _ = T || F ? xs(F, T) * Gi : 0, x = O || G ? xs(O, G) * Gi + _ : 0, x && (g *= Math.abs(Math.cos(x * Ds))), n.svg && (h -= b - (b * T + w * O), u -= w - (b * F + w * G))) : ($ = E[6], We = E[7], se = E[8], ce = E[9], Oe = E[10], Y = E[11], h = E[12], u = E[13], d = E[14], R = xs($, Oe), f = R * Gi, R && (L = Math.cos(-R), v = Math.sin(-R), X = q * L + se * v, H = z * L + ce * v, te = $ * L + Oe * v, se = q * -v + se * L, ce = z * -v + ce * L, Oe = $ * -v + Oe * L, Y = We * -v + Y * L, q = X, z = H, $ = te), R = xs(-O, Oe), m = R * Gi, R && (L = Math.cos(-R), v = Math.sin(-R), X = T * L - se * v, H = F * L - ce * v, te = O * L - Oe * v, Y = G * v + Y * L, T = X, F = H, O = te), R = xs(F, T), _ = R * Gi, R && (L = Math.cos(R), v = Math.sin(R), X = T * L + F * v, H = q * L + z * v, F = F * L - T * v, z = z * L - q * v, T = X, q = H), f && Math.abs(f) + Math.abs(_) > 359.9 && (f = _ = 0, m = 180 - m), p = gt(Math.sqrt(T * T + F * F + O * O)), g = gt(Math.sqrt(z * z + $ * $)), R = xs(q, z), x = Math.abs(R) > 2e-4 ? R * Gi : 0, M = Y ? 1 / (Y < 0 ? -Y : Y) : 0), n.svg && (X = e.getAttribute("transform"), n.forceCSS = e.setAttribute("transform", "") || !Gf(cn(e, ft)), X && e.setAttribute("transform", X))), Math.abs(x) > 90 && Math.abs(x) < 270 && (r ? (p *= -1, x += _ <= 0 ? 180 : -180, _ += _ <= 0 ? 180 : -180) : (g *= -1, x += x <= 0 ? 180 : -180)), t = t || n.uncache, n.x = h - ((n.xPercent = h && (!t && n.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-h) ? -50 : 0))) ? e.offsetWidth * n.xPercent / 100 : 0) + a, n.y = u - ((n.yPercent = u && (!t && n.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-u) ? -50 : 0))) ? e.offsetHeight * n.yPercent / 100 : 0) + a, n.z = d + a, n.scaleX = gt(p), n.scaleY = gt(g), n.rotation = gt(_) + o, n.rotationX = gt(f) + o, n.rotationY = gt(m) + o, n.skewX = x + o, n.skewY = y + o, n.transformPerspective = M + a, (n.zOrigin = parseFloat(c.split(" ")[2]) || !t && n.zOrigin || 0) && (i[$t] = Ya(c)), n.xOffset = n.yOffset = 0, n.force3D = hn.force3D, n.renderTransform = n.svg ? CM : kf ? Wf : RM, n.uncache = 0, n;
}, Ya = function(e) {
  return (e = e.split(" "))[0] + " " + e[1];
}, qo = function(e, t, n) {
  var i = Nt(t);
  return gt(parseFloat(t) + parseFloat(Pi(e, "x", n + "px", i))) + i;
}, RM = function(e, t) {
  t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, Wf(e, t);
}, ki = "0deg", ur = "0px", zi = ") ", Wf = function(e, t) {
  var n = t || this, i = n.xPercent, r = n.yPercent, a = n.x, o = n.y, l = n.z, c = n.rotation, h = n.rotationY, u = n.rotationX, d = n.skewX, p = n.skewY, g = n.scaleX, _ = n.scaleY, f = n.transformPerspective, m = n.force3D, x = n.target, y = n.zOrigin, M = "", b = m === "auto" && e && e !== 1 || m === !0;
  if (y && (u !== ki || h !== ki)) {
    var w = parseFloat(h) * Ds, E = Math.sin(w), R = Math.cos(w), L;
    w = parseFloat(u) * Ds, L = Math.cos(w), a = qo(x, a, E * L * -y), o = qo(x, o, -Math.sin(w) * -y), l = qo(x, l, R * L * -y + y);
  }
  f !== ur && (M += "perspective(" + f + zi), (i || r) && (M += "translate(" + i + "%, " + r + "%) "), (b || a !== ur || o !== ur || l !== ur) && (M += l !== ur || b ? "translate3d(" + a + ", " + o + ", " + l + ") " : "translate(" + a + ", " + o + zi), c !== ki && (M += "rotate(" + c + zi), h !== ki && (M += "rotateY(" + h + zi), u !== ki && (M += "rotateX(" + u + zi), (d !== ki || p !== ki) && (M += "skew(" + d + ", " + p + zi), (g !== 1 || _ !== 1) && (M += "scale(" + g + ", " + _ + zi), x.style[ft] = M || "translate(0, 0)";
}, CM = function(e, t) {
  var n = t || this, i = n.xPercent, r = n.yPercent, a = n.x, o = n.y, l = n.rotation, c = n.skewX, h = n.skewY, u = n.scaleX, d = n.scaleY, p = n.target, g = n.xOrigin, _ = n.yOrigin, f = n.xOffset, m = n.yOffset, x = n.forceCSS, y = parseFloat(a), M = parseFloat(o), b, w, E, R, L;
  l = parseFloat(l), c = parseFloat(c), h = parseFloat(h), h && (h = parseFloat(h), c += h, l += h), l || c ? (l *= Ds, c *= Ds, b = Math.cos(l) * u, w = Math.sin(l) * u, E = Math.sin(l - c) * -d, R = Math.cos(l - c) * d, c && (h *= Ds, L = Math.tan(c - h), L = Math.sqrt(1 + L * L), E *= L, R *= L, h && (L = Math.tan(h), L = Math.sqrt(1 + L * L), b *= L, w *= L)), b = gt(b), w = gt(w), E = gt(E), R = gt(R)) : (b = u, R = d, w = E = 0), (y && !~(a + "").indexOf("px") || M && !~(o + "").indexOf("px")) && (y = Pi(p, "x", a, "px"), M = Pi(p, "y", o, "px")), (g || _ || f || m) && (y = gt(y + g - (g * b + _ * E) + f), M = gt(M + _ - (g * w + _ * R) + m)), (i || r) && (L = p.getBBox(), y = gt(y + i / 100 * L.width), M = gt(M + r / 100 * L.height)), L = "matrix(" + b + "," + w + "," + E + "," + R + "," + y + "," + M + ")", p.setAttribute("transform", L), x && (p.style[ft] = L);
}, PM = function(e, t, n, i, r) {
  var a = 360, o = At(r), l = parseFloat(r) * (o && ~r.indexOf("rad") ? Gi : 1), c = l - i, h = i + c + "deg", u, d;
  return o && (u = r.split("_")[1], u === "short" && (c %= a, c !== c % (a / 2) && (c += c < 0 ? a : -a)), u === "cw" && c < 0 ? c = (c + a * Bu) % a - ~~(c / a) * a : u === "ccw" && c > 0 && (c = (c - a * Bu) % a - ~~(c / a) * a)), e._pt = d = new Zt(e._pt, t, n, i, c, dM), d.e = h, d.u = "deg", e._props.push(n), d;
}, Xu = function(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}, LM = function(e, t, n) {
  var i = Xu({}, n._gsap), r = "perspective,force3D,transformOrigin,svgOrigin", a = n.style, o, l, c, h, u, d, p, g;
  i.svg ? (c = n.getAttribute("transform"), n.setAttribute("transform", ""), a[ft] = t, o = Ur(n, 1), Ci(n, ft), n.setAttribute("transform", c)) : (c = getComputedStyle(n)[ft], a[ft] = t, o = Ur(n, 1), a[ft] = c);
  for (l in oi)
    c = i[l], h = o[l], c !== h && r.indexOf(l) < 0 && (p = Nt(c), g = Nt(h), u = p !== g ? Pi(n, l, c, g) : parseFloat(c), d = parseFloat(h), e._pt = new Zt(e._pt, o, l, u, d - u, ic), e._pt.u = g || 0, e._props.push(l));
  Xu(o, i);
};
Kt("padding,margin,Width,Radius", function(s, e) {
  var t = "Top", n = "Right", i = "Bottom", r = "Left", a = (e < 3 ? [t, n, i, r] : [t + r, t + n, i + n, i + r]).map(function(o) {
    return e < 2 ? s + o : "border" + o + s;
  });
  Xa[e > 1 ? "border" + s : s] = function(o, l, c, h, u) {
    var d, p;
    if (arguments.length < 4)
      return d = a.map(function(g) {
        return ni(o, g, c);
      }), p = d.join(" "), p.split(d[0]).length === 5 ? d[0] : p;
    d = (h + "").split(" "), p = {}, a.forEach(function(g, _) {
      return p[g] = d[_] = d[_] || d[(_ - 1) / 2 | 0];
    }), o.init(l, p, u);
  };
});
var Xf = {
  name: "css",
  register: rc,
  targetTest: function(e) {
    return e.style && e.nodeType;
  },
  init: function(e, t, n, i, r) {
    var a = this._props, o = e.style, l = n.vars.startAt, c, h, u, d, p, g, _, f, m, x, y, M, b, w, E, R, L;
    Kc || rc(), this.styles = this.styles || Bf(e), R = this.styles.props, this.tween = n;
    for (_ in t)
      if (_ !== "autoRound" && (h = t[_], !(rn[_] && wf(_, t, n, i, e, r)))) {
        if (p = typeof h, g = Xa[_], p === "function" && (h = h.call(n, i, e, r), p = typeof h), p === "string" && ~h.indexOf("random(") && (h = Lr(h)), g)
          g(this, e, _, h, n) && (E = 1);
        else if (_.substr(0, 2) === "--")
          c = (getComputedStyle(e).getPropertyValue(_) + "").trim(), h += "", Ai.lastIndex = 0, Ai.test(c) || (f = Nt(c), m = Nt(h), m ? f !== m && (c = Pi(e, _, c, m) + m) : f && (h += f)), this.add(o, "setProperty", c, h, i, r, 0, 0, _), a.push(_), R.push(_, 0, o[_]);
        else if (p !== "undefined") {
          if (l && _ in l ? (c = typeof l[_] == "function" ? l[_].call(n, i, e, r) : l[_], At(c) && ~c.indexOf("random(") && (c = Lr(c)), Nt(c + "") || c === "auto" || (c += hn.units[_] || Nt(ni(e, _)) || ""), (c + "").charAt(1) === "=" && (c = ni(e, _))) : c = ni(e, _), d = parseFloat(c), x = p === "string" && h.charAt(1) === "=" && h.substr(0, 2), x && (h = h.substr(2)), u = parseFloat(h), _ in Bn && (_ === "autoAlpha" && (d === 1 && ni(e, "visibility") === "hidden" && u && (d = 0), R.push("visibility", 0, o.visibility), Si(this, o, "visibility", d ? "inherit" : "hidden", u ? "inherit" : "hidden", !u)), _ !== "scale" && _ !== "transform" && (_ = Bn[_], ~_.indexOf(",") && (_ = _.split(",")[0]))), y = _ in oi, y) {
            if (this.styles.save(_), L = h, p === "string" && h.substring(0, 6) === "var(--") {
              if (h = cn(e, h.substring(4, h.indexOf(")"))), h.substring(0, 5) === "calc(") {
                var v = e.style.perspective;
                e.style.perspective = h, h = cn(e, "perspective"), v ? e.style.perspective = v : Ci(e, "perspective");
              }
              u = parseFloat(h);
            }
            if (M || (b = e._gsap, b.renderTransform && !t.parseTransform || Ur(e, t.parseTransform), w = t.smoothOrigin !== !1 && b.smooth, M = this._pt = new Zt(this._pt, o, ft, 0, 1, b.renderTransform, b, 0, -1), M.dep = 1), _ === "scale")
              this._pt = new Zt(this._pt, b, "scaleY", b.scaleY, (x ? Ps(b.scaleY, x + u) : u) - b.scaleY || 0, ic), this._pt.u = 0, a.push("scaleY", _), _ += "X";
            else if (_ === "transformOrigin") {
              R.push($t, 0, o[$t]), h = AM(h), b.svg ? ac(e, h, 0, w, 0, this) : (m = parseFloat(h.split(" ")[2]) || 0, m !== b.zOrigin && Si(this, b, "zOrigin", b.zOrigin, m), Si(this, o, _, Ya(c), Ya(h)));
              continue;
            } else if (_ === "svgOrigin") {
              ac(e, h, 1, w, 0, this);
              continue;
            } else if (_ in Hf) {
              PM(this, b, _, d, x ? Ps(d, x + h) : h);
              continue;
            } else if (_ === "smoothOrigin") {
              Si(this, b, "smooth", b.smooth, h);
              continue;
            } else if (_ === "force3D") {
              b[_] = h;
              continue;
            } else if (_ === "transform") {
              LM(this, h, e);
              continue;
            }
          } else _ in o || (_ = Zs(_) || _);
          if (y || (u || u === 0) && (d || d === 0) && !uM.test(h) && _ in o)
            f = (c + "").substr((d + "").length), u || (u = 0), m = Nt(h) || (_ in hn.units ? hn.units[_] : f), f !== m && (d = Pi(e, _, c, m)), this._pt = new Zt(this._pt, y ? b : o, _, d, (x ? Ps(d, x + u) : u) - d, !y && (m === "px" || _ === "zIndex") && t.autoRound !== !1 ? mM : ic), this._pt.u = m || 0, y && L !== h ? (this._pt.b = c, this._pt.e = L, this._pt.r = pM) : f !== m && m !== "%" && (this._pt.b = c, this._pt.r = fM);
          else if (_ in o)
            bM.call(this, e, _, c, x ? x + h : h);
          else if (_ in e)
            this.add(e, _, c || e[_], x ? x + h : h, i, r);
          else if (_ !== "parseTransform") {
            kc(_, h);
            continue;
          }
          y || (_ in o ? R.push(_, 0, o[_]) : typeof e[_] == "function" ? R.push(_, 2, e[_]()) : R.push(_, 1, c || e[_])), a.push(_);
        }
      }
    E && If(this);
  },
  render: function(e, t) {
    if (t.tween._time || !Zc())
      for (var n = t._pt; n; )
        n.r(e, n.d), n = n._next;
    else
      t.styles.revert();
  },
  get: ni,
  aliases: Bn,
  getSetter: function(e, t, n) {
    var i = Bn[t];
    return i && i.indexOf(",") < 0 && (t = i), t in oi && t !== $t && (e._gsap.x || ni(e, "x")) ? n && Fu === n ? t === "scale" ? xM : vM : (Fu = n || {}) && (t === "scale" ? yM : MM) : e.style && !Oc(e.style[t]) ? _M : ~t.indexOf("-") ? gM : qc(e, t);
  },
  core: {
    _removeProperty: Ci,
    _getMatrix: Jc
  }
};
Jt.utils.checkPrefix = Zs;
Jt.core.getStyleSaver = Bf;
(function(s, e, t, n) {
  var i = Kt(s + "," + e + "," + t, function(r) {
    oi[r] = 1;
  });
  Kt(e, function(r) {
    hn.units[r] = "deg", Hf[r] = 1;
  }), Bn[i[13]] = s + "," + e, Kt(n, function(r) {
    var a = r.split(":");
    Bn[a[1]] = i[a[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
Kt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(s) {
  hn.units[s] = "px";
});
Jt.registerPlugin(Xf);
var Ji = Jt.registerPlugin(Xf) || Jt;
Ji.core.Tween;
function DM(s) {
  const e = new Ex({
    canvas: s,
    antialias: !0,
    alpha: !0,
    powerPreference: "high-performance"
  });
  return e.setPixelRatio(Math.min(window.devicePixelRatio, 2)), e.toneMapping = dd, e.toneMappingExposure = 1, e.outputColorSpace = Rt, e.shadowMap.enabled = !0, e.shadowMap.type = hd, e;
}
function IM(s) {
  const e = new Bt(38, s, 0.1, 100);
  return e.position.set(0, 0.4, 6), e;
}
function NM() {
  const s = new Fn();
  s.name = "lighting";
  const e = new Kx(16771542, 1313544, 0.18);
  s.add(e);
  const t = new wa(16770770, 3);
  t.position.set(-4.5, 6.5, 4.5), t.castShadow = !0, t.shadow.mapSize.set(2048, 2048), t.shadow.camera.near = 1, t.shadow.camera.far = 25, t.shadow.bias = -5e-4, s.add(t);
  const n = new wa(12374271, 0.22);
  n.position.set(5, 1, 3), s.add(n);
  const i = new wa(16767423, 2.4);
  return i.position.set(1.5, 4.5, -6), s.add(i), s;
}
function UM(s) {
  const t = document.createElement("canvas");
  t.width = 128, t.height = 128;
  const n = t.getContext("2d"), i = n.createLinearGradient(0, 0, 0, 128);
  i.addColorStop(0, "#241713"), i.addColorStop(0.34, "#5c3b30"), i.addColorStop(0.58, "#1a1210"), i.addColorStop(1, "#080605"), n.fillStyle = i, n.fillRect(0, 0, 128, 128);
  const r = new Nx(t);
  r.mapping = Da, r.colorSpace = Rt;
  const a = new Vl(s), o = a.fromEquirectangular(r).texture;
  return a.dispose(), r.dispose(), o;
}
const Yu = { type: "change" }, Qc = { type: "start" }, Yf = { type: "end" }, _a = new $s(), qu = new _i(), OM = Math.cos(70 * qt.DEG2RAD), Mt = new P(), Gt = 2 * Math.PI, nt = {
  NONE: -1,
  ROTATE: 0,
  DOLLY: 1,
  PAN: 2,
  TOUCH_ROTATE: 3,
  TOUCH_PAN: 4,
  TOUCH_DOLLY_PAN: 5,
  TOUCH_DOLLY_ROTATE: 6
}, jo = 1e-6;
class FM extends dy {
  constructor(e, t = null) {
    super(e, t), this.state = nt.NONE, this.enabled = !0, this.target = new P(), this.cursor = new P(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.zoomToCursor = !1, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: As.ROTATE, MIDDLE: As.DOLLY, RIGHT: As.PAN }, this.touches = { ONE: Ss.ROTATE, TWO: Ss.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this._lastPosition = new P(), this._lastQuaternion = new Vn(), this._lastTargetPosition = new P(), this._quat = new Vn().setFromUnitVectors(e.up, new P(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new Yl(), this._sphericalDelta = new Yl(), this._scale = 1, this._panOffset = new P(), this._rotateStart = new Me(), this._rotateEnd = new Me(), this._rotateDelta = new Me(), this._panStart = new Me(), this._panEnd = new Me(), this._panDelta = new Me(), this._dollyStart = new Me(), this._dollyEnd = new Me(), this._dollyDelta = new Me(), this._dollyDirection = new P(), this._mouse = new Me(), this._performCursorZoom = !1, this._pointers = [], this._pointerPositions = {}, this._controlActive = !1, this._onPointerMove = kM.bind(this), this._onPointerDown = BM.bind(this), this._onPointerUp = zM.bind(this), this._onContextMenu = qM.bind(this), this._onMouseWheel = GM.bind(this), this._onKeyDown = WM.bind(this), this._onTouchStart = XM.bind(this), this._onTouchMove = YM.bind(this), this._onMouseDown = VM.bind(this), this._onMouseMove = HM.bind(this), this._interceptControlDown = jM.bind(this), this._interceptControlUp = KM.bind(this), this.domElement !== null && this.connect(), this.update();
  }
  connect() {
    this.domElement.addEventListener("pointerdown", this._onPointerDown), this.domElement.addEventListener("pointercancel", this._onPointerUp), this.domElement.addEventListener("contextmenu", this._onContextMenu), this.domElement.addEventListener("wheel", this._onMouseWheel, { passive: !1 }), this.domElement.getRootNode().addEventListener("keydown", this._interceptControlDown, { passive: !0, capture: !0 }), this.domElement.style.touchAction = "none";
  }
  disconnect() {
    this.domElement.removeEventListener("pointerdown", this._onPointerDown), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.domElement.removeEventListener("pointercancel", this._onPointerUp), this.domElement.removeEventListener("wheel", this._onMouseWheel), this.domElement.removeEventListener("contextmenu", this._onContextMenu), this.stopListenToKeyEvents(), this.domElement.getRootNode().removeEventListener("keydown", this._interceptControlDown, { capture: !0 }), this.domElement.style.touchAction = "auto";
  }
  dispose() {
    this.disconnect();
  }
  getPolarAngle() {
    return this._spherical.phi;
  }
  getAzimuthalAngle() {
    return this._spherical.theta;
  }
  getDistance() {
    return this.object.position.distanceTo(this.target);
  }
  listenToKeyEvents(e) {
    e.addEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = e;
  }
  stopListenToKeyEvents() {
    this._domElementKeyEvents !== null && (this._domElementKeyEvents.removeEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = null);
  }
  saveState() {
    this.target0.copy(this.target), this.position0.copy(this.object.position), this.zoom0 = this.object.zoom;
  }
  reset() {
    this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(Yu), this.update(), this.state = nt.NONE;
  }
  update(e = null) {
    const t = this.object.position;
    Mt.copy(t).sub(this.target), Mt.applyQuaternion(this._quat), this._spherical.setFromVector3(Mt), this.autoRotate && this.state === nt.NONE && this._rotateLeft(this._getAutoRotationAngle(e)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
    let n = this.minAzimuthAngle, i = this.maxAzimuthAngle;
    isFinite(n) && isFinite(i) && (n < -Math.PI ? n += Gt : n > Math.PI && (n -= Gt), i < -Math.PI ? i += Gt : i > Math.PI && (i -= Gt), n <= i ? this._spherical.theta = Math.max(n, Math.min(i, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (n + i) / 2 ? Math.max(n, this._spherical.theta) : Math.min(i, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === !0 ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor);
    let r = !1;
    if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera)
      this._spherical.radius = this._clampDistance(this._spherical.radius);
    else {
      const a = this._spherical.radius;
      this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), r = a != this._spherical.radius;
    }
    if (Mt.setFromSpherical(this._spherical), Mt.applyQuaternion(this._quatInverse), t.copy(this.target).add(Mt), this.object.lookAt(this.target), this.enableDamping === !0 ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
      let a = null;
      if (this.object.isPerspectiveCamera) {
        const o = Mt.length();
        a = this._clampDistance(o * this._scale);
        const l = o - a;
        this.object.position.addScaledVector(this._dollyDirection, l), this.object.updateMatrixWorld(), r = !!l;
      } else if (this.object.isOrthographicCamera) {
        const o = new P(this._mouse.x, this._mouse.y, 0);
        o.unproject(this.object);
        const l = this.object.zoom;
        this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), r = l !== this.object.zoom;
        const c = new P(this._mouse.x, this._mouse.y, 0);
        c.unproject(this.object), this.object.position.sub(c).add(o), this.object.updateMatrixWorld(), a = Mt.length();
      } else
        console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = !1;
      a !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position) : (_a.origin.copy(this.object.position), _a.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(_a.direction)) < OM ? this.object.lookAt(this.target) : (qu.setFromNormalAndCoplanarPoint(this.object.up, this.target), _a.intersectPlane(qu, this.target))));
    } else if (this.object.isOrthographicCamera) {
      const a = this.object.zoom;
      this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), a !== this.object.zoom && (this.object.updateProjectionMatrix(), r = !0);
    }
    return this._scale = 1, this._performCursorZoom = !1, r || this._lastPosition.distanceToSquared(this.object.position) > jo || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > jo || this._lastTargetPosition.distanceToSquared(this.target) > jo ? (this.dispatchEvent(Yu), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), !0) : !1;
  }
  _getAutoRotationAngle(e) {
    return e !== null ? Gt / 60 * this.autoRotateSpeed * e : Gt / 60 / 60 * this.autoRotateSpeed;
  }
  _getZoomScale(e) {
    const t = Math.abs(e * 0.01);
    return Math.pow(0.95, this.zoomSpeed * t);
  }
  _rotateLeft(e) {
    this._sphericalDelta.theta -= e;
  }
  _rotateUp(e) {
    this._sphericalDelta.phi -= e;
  }
  _panLeft(e, t) {
    Mt.setFromMatrixColumn(t, 0), Mt.multiplyScalar(-e), this._panOffset.add(Mt);
  }
  _panUp(e, t) {
    this.screenSpacePanning === !0 ? Mt.setFromMatrixColumn(t, 1) : (Mt.setFromMatrixColumn(t, 0), Mt.crossVectors(this.object.up, Mt)), Mt.multiplyScalar(e), this._panOffset.add(Mt);
  }
  // deltaX and deltaY are in pixels; right and down are positive
  _pan(e, t) {
    const n = this.domElement;
    if (this.object.isPerspectiveCamera) {
      const i = this.object.position;
      Mt.copy(i).sub(this.target);
      let r = Mt.length();
      r *= Math.tan(this.object.fov / 2 * Math.PI / 180), this._panLeft(2 * e * r / n.clientHeight, this.object.matrix), this._panUp(2 * t * r / n.clientHeight, this.object.matrix);
    } else this.object.isOrthographicCamera ? (this._panLeft(e * (this.object.right - this.object.left) / this.object.zoom / n.clientWidth, this.object.matrix), this._panUp(t * (this.object.top - this.object.bottom) / this.object.zoom / n.clientHeight, this.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), this.enablePan = !1);
  }
  _dollyOut(e) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale /= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = !1);
  }
  _dollyIn(e) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale *= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = !1);
  }
  _updateZoomParameters(e, t) {
    if (!this.zoomToCursor)
      return;
    this._performCursorZoom = !0;
    const n = this.domElement.getBoundingClientRect(), i = e - n.left, r = t - n.top, a = n.width, o = n.height;
    this._mouse.x = i / a * 2 - 1, this._mouse.y = -(r / o) * 2 + 1, this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize();
  }
  _clampDistance(e) {
    return Math.max(this.minDistance, Math.min(this.maxDistance, e));
  }
  //
  // event callbacks - update the object state
  //
  _handleMouseDownRotate(e) {
    this._rotateStart.set(e.clientX, e.clientY);
  }
  _handleMouseDownDolly(e) {
    this._updateZoomParameters(e.clientX, e.clientX), this._dollyStart.set(e.clientX, e.clientY);
  }
  _handleMouseDownPan(e) {
    this._panStart.set(e.clientX, e.clientY);
  }
  _handleMouseMoveRotate(e) {
    this._rotateEnd.set(e.clientX, e.clientY), this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const t = this.domElement;
    this._rotateLeft(Gt * this._rotateDelta.x / t.clientHeight), this._rotateUp(Gt * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd), this.update();
  }
  _handleMouseMoveDolly(e) {
    this._dollyEnd.set(e.clientX, e.clientY), this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart), this._dollyDelta.y > 0 ? this._dollyOut(this._getZoomScale(this._dollyDelta.y)) : this._dollyDelta.y < 0 && this._dollyIn(this._getZoomScale(this._dollyDelta.y)), this._dollyStart.copy(this._dollyEnd), this.update();
  }
  _handleMouseMovePan(e) {
    this._panEnd.set(e.clientX, e.clientY), this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd), this.update();
  }
  _handleMouseWheel(e) {
    this._updateZoomParameters(e.clientX, e.clientY), e.deltaY < 0 ? this._dollyIn(this._getZoomScale(e.deltaY)) : e.deltaY > 0 && this._dollyOut(this._getZoomScale(e.deltaY)), this.update();
  }
  _handleKeyDown(e) {
    let t = !1;
    switch (e.code) {
      case this.keys.UP:
        e.ctrlKey || e.metaKey || e.shiftKey ? this._rotateUp(Gt * this.rotateSpeed / this.domElement.clientHeight) : this._pan(0, this.keyPanSpeed), t = !0;
        break;
      case this.keys.BOTTOM:
        e.ctrlKey || e.metaKey || e.shiftKey ? this._rotateUp(-Gt * this.rotateSpeed / this.domElement.clientHeight) : this._pan(0, -this.keyPanSpeed), t = !0;
        break;
      case this.keys.LEFT:
        e.ctrlKey || e.metaKey || e.shiftKey ? this._rotateLeft(Gt * this.rotateSpeed / this.domElement.clientHeight) : this._pan(this.keyPanSpeed, 0), t = !0;
        break;
      case this.keys.RIGHT:
        e.ctrlKey || e.metaKey || e.shiftKey ? this._rotateLeft(-Gt * this.rotateSpeed / this.domElement.clientHeight) : this._pan(-this.keyPanSpeed, 0), t = !0;
        break;
    }
    t && (e.preventDefault(), this.update());
  }
  _handleTouchStartRotate(e) {
    if (this._pointers.length === 1)
      this._rotateStart.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e), n = 0.5 * (e.pageX + t.x), i = 0.5 * (e.pageY + t.y);
      this._rotateStart.set(n, i);
    }
  }
  _handleTouchStartPan(e) {
    if (this._pointers.length === 1)
      this._panStart.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e), n = 0.5 * (e.pageX + t.x), i = 0.5 * (e.pageY + t.y);
      this._panStart.set(n, i);
    }
  }
  _handleTouchStartDolly(e) {
    const t = this._getSecondPointerPosition(e), n = e.pageX - t.x, i = e.pageY - t.y, r = Math.sqrt(n * n + i * i);
    this._dollyStart.set(0, r);
  }
  _handleTouchStartDollyPan(e) {
    this.enableZoom && this._handleTouchStartDolly(e), this.enablePan && this._handleTouchStartPan(e);
  }
  _handleTouchStartDollyRotate(e) {
    this.enableZoom && this._handleTouchStartDolly(e), this.enableRotate && this._handleTouchStartRotate(e);
  }
  _handleTouchMoveRotate(e) {
    if (this._pointers.length == 1)
      this._rotateEnd.set(e.pageX, e.pageY);
    else {
      const n = this._getSecondPointerPosition(e), i = 0.5 * (e.pageX + n.x), r = 0.5 * (e.pageY + n.y);
      this._rotateEnd.set(i, r);
    }
    this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const t = this.domElement;
    this._rotateLeft(Gt * this._rotateDelta.x / t.clientHeight), this._rotateUp(Gt * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd);
  }
  _handleTouchMovePan(e) {
    if (this._pointers.length === 1)
      this._panEnd.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e), n = 0.5 * (e.pageX + t.x), i = 0.5 * (e.pageY + t.y);
      this._panEnd.set(n, i);
    }
    this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd);
  }
  _handleTouchMoveDolly(e) {
    const t = this._getSecondPointerPosition(e), n = e.pageX - t.x, i = e.pageY - t.y, r = Math.sqrt(n * n + i * i);
    this._dollyEnd.set(0, r), this._dollyDelta.set(0, Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed)), this._dollyOut(this._dollyDelta.y), this._dollyStart.copy(this._dollyEnd);
    const a = (e.pageX + t.x) * 0.5, o = (e.pageY + t.y) * 0.5;
    this._updateZoomParameters(a, o);
  }
  _handleTouchMoveDollyPan(e) {
    this.enableZoom && this._handleTouchMoveDolly(e), this.enablePan && this._handleTouchMovePan(e);
  }
  _handleTouchMoveDollyRotate(e) {
    this.enableZoom && this._handleTouchMoveDolly(e), this.enableRotate && this._handleTouchMoveRotate(e);
  }
  // pointers
  _addPointer(e) {
    this._pointers.push(e.pointerId);
  }
  _removePointer(e) {
    delete this._pointerPositions[e.pointerId];
    for (let t = 0; t < this._pointers.length; t++)
      if (this._pointers[t] == e.pointerId) {
        this._pointers.splice(t, 1);
        return;
      }
  }
  _isTrackingPointer(e) {
    for (let t = 0; t < this._pointers.length; t++)
      if (this._pointers[t] == e.pointerId) return !0;
    return !1;
  }
  _trackPointer(e) {
    let t = this._pointerPositions[e.pointerId];
    t === void 0 && (t = new Me(), this._pointerPositions[e.pointerId] = t), t.set(e.pageX, e.pageY);
  }
  _getSecondPointerPosition(e) {
    const t = e.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
    return this._pointerPositions[t];
  }
  //
  _customWheelEvent(e) {
    const t = e.deltaMode, n = {
      clientX: e.clientX,
      clientY: e.clientY,
      deltaY: e.deltaY
    };
    switch (t) {
      case 1:
        n.deltaY *= 16;
        break;
      case 2:
        n.deltaY *= 100;
        break;
    }
    return e.ctrlKey && !this._controlActive && (n.deltaY *= 10), n;
  }
}
function BM(s) {
  this.enabled !== !1 && (this._pointers.length === 0 && (this.domElement.setPointerCapture(s.pointerId), this.domElement.addEventListener("pointermove", this._onPointerMove), this.domElement.addEventListener("pointerup", this._onPointerUp)), !this._isTrackingPointer(s) && (this._addPointer(s), s.pointerType === "touch" ? this._onTouchStart(s) : this._onMouseDown(s)));
}
function kM(s) {
  this.enabled !== !1 && (s.pointerType === "touch" ? this._onTouchMove(s) : this._onMouseMove(s));
}
function zM(s) {
  switch (this._removePointer(s), this._pointers.length) {
    case 0:
      this.domElement.releasePointerCapture(s.pointerId), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(Yf), this.state = nt.NONE;
      break;
    case 1:
      const e = this._pointers[0], t = this._pointerPositions[e];
      this._onTouchStart({ pointerId: e, pageX: t.x, pageY: t.y });
      break;
  }
}
function VM(s) {
  let e;
  switch (s.button) {
    case 0:
      e = this.mouseButtons.LEFT;
      break;
    case 1:
      e = this.mouseButtons.MIDDLE;
      break;
    case 2:
      e = this.mouseButtons.RIGHT;
      break;
    default:
      e = -1;
  }
  switch (e) {
    case As.DOLLY:
      if (this.enableZoom === !1) return;
      this._handleMouseDownDolly(s), this.state = nt.DOLLY;
      break;
    case As.ROTATE:
      if (s.ctrlKey || s.metaKey || s.shiftKey) {
        if (this.enablePan === !1) return;
        this._handleMouseDownPan(s), this.state = nt.PAN;
      } else {
        if (this.enableRotate === !1) return;
        this._handleMouseDownRotate(s), this.state = nt.ROTATE;
      }
      break;
    case As.PAN:
      if (s.ctrlKey || s.metaKey || s.shiftKey) {
        if (this.enableRotate === !1) return;
        this._handleMouseDownRotate(s), this.state = nt.ROTATE;
      } else {
        if (this.enablePan === !1) return;
        this._handleMouseDownPan(s), this.state = nt.PAN;
      }
      break;
    default:
      this.state = nt.NONE;
  }
  this.state !== nt.NONE && this.dispatchEvent(Qc);
}
function HM(s) {
  switch (this.state) {
    case nt.ROTATE:
      if (this.enableRotate === !1) return;
      this._handleMouseMoveRotate(s);
      break;
    case nt.DOLLY:
      if (this.enableZoom === !1) return;
      this._handleMouseMoveDolly(s);
      break;
    case nt.PAN:
      if (this.enablePan === !1) return;
      this._handleMouseMovePan(s);
      break;
  }
}
function GM(s) {
  this.enabled === !1 || this.enableZoom === !1 || this.state !== nt.NONE || (s.preventDefault(), this.dispatchEvent(Qc), this._handleMouseWheel(this._customWheelEvent(s)), this.dispatchEvent(Yf));
}
function WM(s) {
  this.enabled === !1 || this.enablePan === !1 || this._handleKeyDown(s);
}
function XM(s) {
  switch (this._trackPointer(s), this._pointers.length) {
    case 1:
      switch (this.touches.ONE) {
        case Ss.ROTATE:
          if (this.enableRotate === !1) return;
          this._handleTouchStartRotate(s), this.state = nt.TOUCH_ROTATE;
          break;
        case Ss.PAN:
          if (this.enablePan === !1) return;
          this._handleTouchStartPan(s), this.state = nt.TOUCH_PAN;
          break;
        default:
          this.state = nt.NONE;
      }
      break;
    case 2:
      switch (this.touches.TWO) {
        case Ss.DOLLY_PAN:
          if (this.enableZoom === !1 && this.enablePan === !1) return;
          this._handleTouchStartDollyPan(s), this.state = nt.TOUCH_DOLLY_PAN;
          break;
        case Ss.DOLLY_ROTATE:
          if (this.enableZoom === !1 && this.enableRotate === !1) return;
          this._handleTouchStartDollyRotate(s), this.state = nt.TOUCH_DOLLY_ROTATE;
          break;
        default:
          this.state = nt.NONE;
      }
      break;
    default:
      this.state = nt.NONE;
  }
  this.state !== nt.NONE && this.dispatchEvent(Qc);
}
function YM(s) {
  switch (this._trackPointer(s), this.state) {
    case nt.TOUCH_ROTATE:
      if (this.enableRotate === !1) return;
      this._handleTouchMoveRotate(s), this.update();
      break;
    case nt.TOUCH_PAN:
      if (this.enablePan === !1) return;
      this._handleTouchMovePan(s), this.update();
      break;
    case nt.TOUCH_DOLLY_PAN:
      if (this.enableZoom === !1 && this.enablePan === !1) return;
      this._handleTouchMoveDollyPan(s), this.update();
      break;
    case nt.TOUCH_DOLLY_ROTATE:
      if (this.enableZoom === !1 && this.enableRotate === !1) return;
      this._handleTouchMoveDollyRotate(s), this.update();
      break;
    default:
      this.state = nt.NONE;
  }
}
function qM(s) {
  this.enabled !== !1 && s.preventDefault();
}
function jM(s) {
  s.key === "Control" && (this._controlActive = !0, this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, { passive: !0, capture: !0 }));
}
function KM(s) {
  s.key === "Control" && (this._controlActive = !1, this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, { passive: !0, capture: !0 }));
}
const ZM = 1600, qf = 1e3, $M = 0.55, JM = 2, QM = "cardiac:uiScale";
let oc = 1;
const eS = /* @__PURE__ */ new Set();
function tS() {
  return Math.min(window.innerWidth / ZM, window.innerHeight / qf);
}
function eh() {
  const s = tS() * oc;
  return Math.min(JM, Math.max($M, s));
}
function jf() {
  const s = eh();
  return s <= 0 ? 1 : window.innerHeight / qf / s;
}
function lc(s) {
  return s * jf();
}
function ju(s) {
  return s * eh();
}
function Ku() {
  const s = eh();
  document.documentElement.style.setProperty("--ui-scale", String(s));
  for (const e of eS) e(s);
}
function nS() {
  const s = new URLSearchParams(window.location.search).get("uiscale");
  if (s !== null && Number.isFinite(Number(s)))
    oc = Math.min(2, Math.max(0.5, Number(s)));
  else
    try {
      const e = window.localStorage.getItem(QM);
      e !== null && Number.isFinite(Number(e)) && (oc = Math.min(2, Math.max(0.5, Number(e))));
    } catch {
    }
  window.addEventListener("resize", Ku), Ku();
}
const iS = 3;
function sS(s, e) {
  const t = new FM(s, e);
  return t.enableDamping = !0, t.dampingFactor = 0.08, t.rotateSpeed = 0.6, t.enablePan = !1, t.enableZoom = !1, t.minDistance = lc(iS), t.maxDistance = lc(16), t.minPolarAngle = 0.15, t.maxPolarAngle = Math.PI - 0.15, t.target.set(0, 0, 0), t.update(), t;
}
function rS() {
  const s = new Pc(1, 5);
  aS(s), s.computeVertexNormals();
  const e = new Dn({
    color: new be("#7c2b2b"),
    roughness: 0.72,
    metalness: 0,
    clearcoat: 0.18,
    clearcoatRoughness: 0.6,
    sheen: 0.25,
    sheenColor: new be("#b05050")
  }), t = new Xt(s, e);
  return t.name = "placeholder-heart", t.castShadow = !0, t.receiveShadow = !0, t.rotation.set(0.12, 0.5, 0.22), t.scale.setScalar(1.35), t;
}
function aS(s) {
  const e = s.getAttribute("position"), t = new P();
  for (let n = 0; n < e.count; n++) {
    t.fromBufferAttribute(e, n);
    const i = (t.y + 1) / 2, a = 0.08 + 0.92 * Math.pow(qt.clamp(i, 0, 1), 0.62), o = Math.atan2(t.z, t.x), c = 1 - 0.09 * Math.sin(Math.PI * i) * Math.max(0, Math.cos(o)), h = 1 + 0.05 * Math.sin(o + 0.6) * i, u = a * c * h;
    t.x *= u, t.z *= u, t.y *= 1.22, t.y += 0.06 * Math.pow(qt.clamp(i, 0, 1), 3), e.setXYZ(n, t.x, t.y, t.z);
  }
  e.needsUpdate = !0;
}
function Zu(s, e) {
  if (e === Fp)
    return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), s;
  if (e === kl || e === Td) {
    let t = s.getIndex();
    if (t === null) {
      const a = [], o = s.getAttribute("position");
      if (o !== void 0) {
        for (let l = 0; l < o.count; l++)
          a.push(l);
        s.setIndex(a), t = s.getIndex();
      } else
        return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), s;
    }
    const n = t.count - 2, i = [];
    if (e === kl)
      for (let a = 1; a <= n; a++)
        i.push(t.getX(0)), i.push(t.getX(a)), i.push(t.getX(a + 1));
    else
      for (let a = 0; a < n; a++)
        a % 2 === 0 ? (i.push(t.getX(a)), i.push(t.getX(a + 1)), i.push(t.getX(a + 2))) : (i.push(t.getX(a + 2)), i.push(t.getX(a + 1)), i.push(t.getX(a)));
    i.length / 3 !== n && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    const r = s.clone();
    return r.setIndex(i), r.clearGroups(), r;
  } else
    return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", e), s;
}
class oS extends tr {
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new dS(t);
    }), this.register(function(t) {
      return new fS(t);
    }), this.register(function(t) {
      return new SS(t);
    }), this.register(function(t) {
      return new ES(t);
    }), this.register(function(t) {
      return new TS(t);
    }), this.register(function(t) {
      return new mS(t);
    }), this.register(function(t) {
      return new _S(t);
    }), this.register(function(t) {
      return new gS(t);
    }), this.register(function(t) {
      return new vS(t);
    }), this.register(function(t) {
      return new uS(t);
    }), this.register(function(t) {
      return new xS(t);
    }), this.register(function(t) {
      return new pS(t);
    }), this.register(function(t) {
      return new MS(t);
    }), this.register(function(t) {
      return new yS(t);
    }), this.register(function(t) {
      return new cS(t);
    }), this.register(function(t) {
      return new bS(t);
    }), this.register(function(t) {
      return new AS(t);
    });
  }
  load(e, t, n, i) {
    const r = this;
    let a;
    if (this.resourcePath !== "")
      a = this.resourcePath;
    else if (this.path !== "") {
      const c = yr.extractUrlBase(e);
      a = yr.resolveURL(c, this.path);
    } else
      a = yr.extractUrlBase(e);
    this.manager.itemStart(e);
    const o = function(c) {
      i ? i(c) : console.error(c), r.manager.itemError(e), r.manager.itemEnd(e);
    }, l = new jd(this.manager);
    l.setPath(this.path), l.setResponseType("arraybuffer"), l.setRequestHeader(this.requestHeader), l.setWithCredentials(this.withCredentials), l.load(e, function(c) {
      try {
        r.parse(c, a, function(h) {
          t(h), r.manager.itemEnd(e);
        }, o);
      } catch (h) {
        o(h);
      }
    }, n, o);
  }
  setDRACOLoader(e) {
    return this.dracoLoader = e, this;
  }
  setKTX2Loader(e) {
    return this.ktx2Loader = e, this;
  }
  setMeshoptDecoder(e) {
    return this.meshoptDecoder = e, this;
  }
  register(e) {
    return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this;
  }
  unregister(e) {
    return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this;
  }
  parse(e, t, n, i) {
    let r;
    const a = {}, o = {}, l = new TextDecoder();
    if (typeof e == "string")
      r = JSON.parse(e);
    else if (e instanceof ArrayBuffer)
      if (l.decode(new Uint8Array(e, 0, 4)) === Kf) {
        try {
          a[Fe.KHR_BINARY_GLTF] = new wS(e);
        } catch (u) {
          i && i(u);
          return;
        }
        r = JSON.parse(a[Fe.KHR_BINARY_GLTF].content);
      } else
        r = JSON.parse(l.decode(e));
    else
      r = e;
    if (r.asset === void 0 || r.asset.version[0] < 2) {
      i && i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const c = new zS(r, {
      path: t || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder
    });
    c.fileLoader.setRequestHeader(this.requestHeader);
    for (let h = 0; h < this.pluginCallbacks.length; h++) {
      const u = this.pluginCallbacks[h](c);
      u.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), o[u.name] = u, a[u.name] = !0;
    }
    if (r.extensionsUsed)
      for (let h = 0; h < r.extensionsUsed.length; ++h) {
        const u = r.extensionsUsed[h], d = r.extensionsRequired || [];
        switch (u) {
          case Fe.KHR_MATERIALS_UNLIT:
            a[u] = new hS();
            break;
          case Fe.KHR_DRACO_MESH_COMPRESSION:
            a[u] = new RS(r, this.dracoLoader);
            break;
          case Fe.KHR_TEXTURE_TRANSFORM:
            a[u] = new CS();
            break;
          case Fe.KHR_MESH_QUANTIZATION:
            a[u] = new PS();
            break;
          default:
            d.indexOf(u) >= 0 && o[u] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + u + '".');
        }
      }
    c.setExtensions(a), c.setPlugins(o), c.parse(n, i);
  }
  parseAsync(e, t) {
    const n = this;
    return new Promise(function(i, r) {
      n.parse(e, t, i, r);
    });
  }
}
function lS() {
  let s = {};
  return {
    get: function(e) {
      return s[e];
    },
    add: function(e, t) {
      s[e] = t;
    },
    remove: function(e) {
      delete s[e];
    },
    removeAll: function() {
      s = {};
    }
  };
}
const Fe = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
  KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
  EXT_MATERIALS_BUMP: "EXT_materials_bump",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_TEXTURE_AVIF: "EXT_texture_avif",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
  EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
};
class cS {
  constructor(e) {
    this.parser = e, this.name = Fe.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    const e = this.parser, t = this.parser.json.nodes || [];
    for (let n = 0, i = t.length; n < i; n++) {
      const r = t[n];
      r.extensions && r.extensions[this.name] && r.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, r.extensions[this.name].light);
    }
  }
  _loadLight(e) {
    const t = this.parser, n = "light:" + e;
    let i = t.cache.get(n);
    if (i) return i;
    const r = t.json, l = ((r.extensions && r.extensions[this.name] || {}).lights || [])[e];
    let c;
    const h = new be(16777215);
    l.color !== void 0 && h.setRGB(l.color[0], l.color[1], l.color[2], Lt);
    const u = l.range !== void 0 ? l.range : 0;
    switch (l.type) {
      case "directional":
        c = new wa(h), c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      case "point":
        c = new Qx(h), c.distance = u;
        break;
      case "spot":
        c = new $x(h), c.distance = u, l.spot = l.spot || {}, l.spot.innerConeAngle = l.spot.innerConeAngle !== void 0 ? l.spot.innerConeAngle : 0, l.spot.outerConeAngle = l.spot.outerConeAngle !== void 0 ? l.spot.outerConeAngle : Math.PI / 4, c.angle = l.spot.outerConeAngle, c.penumbra = 1 - l.spot.innerConeAngle / l.spot.outerConeAngle, c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + l.type);
    }
    return c.position.set(0, 0, 0), c.decay = 2, ti(c, l), l.intensity !== void 0 && (c.intensity = l.intensity), c.name = t.createUniqueName(l.name || "light_" + e), i = Promise.resolve(c), t.cache.add(n, i), i;
  }
  getDependency(e, t) {
    if (e === "light")
      return this._loadLight(t);
  }
  createNodeAttachment(e) {
    const t = this, n = this.parser, r = n.json.nodes[e], o = (r.extensions && r.extensions[this.name] || {}).light;
    return o === void 0 ? null : this._loadLight(o).then(function(l) {
      return n._getNodeRef(t.cache, o, l);
    });
  }
}
class hS {
  constructor() {
    this.name = Fe.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return Yi;
  }
  extendParams(e, t, n) {
    const i = [];
    e.color = new be(1, 1, 1), e.opacity = 1;
    const r = t.pbrMetallicRoughness;
    if (r) {
      if (Array.isArray(r.baseColorFactor)) {
        const a = r.baseColorFactor;
        e.color.setRGB(a[0], a[1], a[2], Lt), e.opacity = a[3];
      }
      r.baseColorTexture !== void 0 && i.push(n.assignTexture(e, "map", r.baseColorTexture, Rt));
    }
    return Promise.all(i);
  }
}
class uS {
  constructor(e) {
    this.parser = e, this.name = Fe.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = i.extensions[this.name].emissiveStrength;
    return r !== void 0 && (t.emissiveIntensity = r), Promise.resolve();
  }
}
class dS {
  constructor(e) {
    this.parser = e, this.name = Fe.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Dn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], a = i.extensions[this.name];
    if (a.clearcoatFactor !== void 0 && (t.clearcoat = a.clearcoatFactor), a.clearcoatTexture !== void 0 && r.push(n.assignTexture(t, "clearcoatMap", a.clearcoatTexture)), a.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = a.clearcoatRoughnessFactor), a.clearcoatRoughnessTexture !== void 0 && r.push(n.assignTexture(t, "clearcoatRoughnessMap", a.clearcoatRoughnessTexture)), a.clearcoatNormalTexture !== void 0 && (r.push(n.assignTexture(t, "clearcoatNormalMap", a.clearcoatNormalTexture)), a.clearcoatNormalTexture.scale !== void 0)) {
      const o = a.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new Me(o, o);
    }
    return Promise.all(r);
  }
}
class fS {
  constructor(e) {
    this.parser = e, this.name = Fe.KHR_MATERIALS_DISPERSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Dn;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = i.extensions[this.name];
    return t.dispersion = r.dispersion !== void 0 ? r.dispersion : 0, Promise.resolve();
  }
}
class pS {
  constructor(e) {
    this.parser = e, this.name = Fe.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Dn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], a = i.extensions[this.name];
    return a.iridescenceFactor !== void 0 && (t.iridescence = a.iridescenceFactor), a.iridescenceTexture !== void 0 && r.push(n.assignTexture(t, "iridescenceMap", a.iridescenceTexture)), a.iridescenceIor !== void 0 && (t.iridescenceIOR = a.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), a.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = a.iridescenceThicknessMinimum), a.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = a.iridescenceThicknessMaximum), a.iridescenceThicknessTexture !== void 0 && r.push(n.assignTexture(t, "iridescenceThicknessMap", a.iridescenceThicknessTexture)), Promise.all(r);
  }
}
class mS {
  constructor(e) {
    this.parser = e, this.name = Fe.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Dn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [];
    t.sheenColor = new be(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
    const a = i.extensions[this.name];
    if (a.sheenColorFactor !== void 0) {
      const o = a.sheenColorFactor;
      t.sheenColor.setRGB(o[0], o[1], o[2], Lt);
    }
    return a.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = a.sheenRoughnessFactor), a.sheenColorTexture !== void 0 && r.push(n.assignTexture(t, "sheenColorMap", a.sheenColorTexture, Rt)), a.sheenRoughnessTexture !== void 0 && r.push(n.assignTexture(t, "sheenRoughnessMap", a.sheenRoughnessTexture)), Promise.all(r);
  }
}
class _S {
  constructor(e) {
    this.parser = e, this.name = Fe.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Dn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], a = i.extensions[this.name];
    return a.transmissionFactor !== void 0 && (t.transmission = a.transmissionFactor), a.transmissionTexture !== void 0 && r.push(n.assignTexture(t, "transmissionMap", a.transmissionTexture)), Promise.all(r);
  }
}
class gS {
  constructor(e) {
    this.parser = e, this.name = Fe.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Dn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], a = i.extensions[this.name];
    t.thickness = a.thicknessFactor !== void 0 ? a.thicknessFactor : 0, a.thicknessTexture !== void 0 && r.push(n.assignTexture(t, "thicknessMap", a.thicknessTexture)), t.attenuationDistance = a.attenuationDistance || 1 / 0;
    const o = a.attenuationColor || [1, 1, 1];
    return t.attenuationColor = new be().setRGB(o[0], o[1], o[2], Lt), Promise.all(r);
  }
}
class vS {
  constructor(e) {
    this.parser = e, this.name = Fe.KHR_MATERIALS_IOR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Dn;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = i.extensions[this.name];
    return t.ior = r.ior !== void 0 ? r.ior : 1.5, Promise.resolve();
  }
}
class xS {
  constructor(e) {
    this.parser = e, this.name = Fe.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Dn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], a = i.extensions[this.name];
    t.specularIntensity = a.specularFactor !== void 0 ? a.specularFactor : 1, a.specularTexture !== void 0 && r.push(n.assignTexture(t, "specularIntensityMap", a.specularTexture));
    const o = a.specularColorFactor || [1, 1, 1];
    return t.specularColor = new be().setRGB(o[0], o[1], o[2], Lt), a.specularColorTexture !== void 0 && r.push(n.assignTexture(t, "specularColorMap", a.specularColorTexture, Rt)), Promise.all(r);
  }
}
class yS {
  constructor(e) {
    this.parser = e, this.name = Fe.EXT_MATERIALS_BUMP;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Dn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], a = i.extensions[this.name];
    return t.bumpScale = a.bumpFactor !== void 0 ? a.bumpFactor : 1, a.bumpTexture !== void 0 && r.push(n.assignTexture(t, "bumpMap", a.bumpTexture)), Promise.all(r);
  }
}
class MS {
  constructor(e) {
    this.parser = e, this.name = Fe.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Dn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], a = i.extensions[this.name];
    return a.anisotropyStrength !== void 0 && (t.anisotropy = a.anisotropyStrength), a.anisotropyRotation !== void 0 && (t.anisotropyRotation = a.anisotropyRotation), a.anisotropyTexture !== void 0 && r.push(n.assignTexture(t, "anisotropyMap", a.anisotropyTexture)), Promise.all(r);
  }
}
class SS {
  constructor(e) {
    this.parser = e, this.name = Fe.KHR_TEXTURE_BASISU;
  }
  loadTexture(e) {
    const t = this.parser, n = t.json, i = n.textures[e];
    if (!i.extensions || !i.extensions[this.name])
      return null;
    const r = i.extensions[this.name], a = t.options.ktx2Loader;
    if (!a) {
      if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return t.loadTextureImage(e, r.source, a);
  }
}
class ES {
  constructor(e) {
    this.parser = e, this.name = Fe.EXT_TEXTURE_WEBP, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, i = n.json, r = i.textures[e];
    if (!r.extensions || !r.extensions[t])
      return null;
    const a = r.extensions[t], o = i.images[a.source];
    let l = n.textureLoader;
    if (o.uri) {
      const c = n.options.manager.getHandler(o.uri);
      c !== null && (l = c);
    }
    return this.detectSupport().then(function(c) {
      if (c) return n.loadTextureImage(e, a.source, l);
      if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0)
        throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(e) {
      const t = new Image();
      t.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", t.onload = t.onerror = function() {
        e(t.height === 1);
      };
    })), this.isSupported;
  }
}
class TS {
  constructor(e) {
    this.parser = e, this.name = Fe.EXT_TEXTURE_AVIF, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, i = n.json, r = i.textures[e];
    if (!r.extensions || !r.extensions[t])
      return null;
    const a = r.extensions[t], o = i.images[a.source];
    let l = n.textureLoader;
    if (o.uri) {
      const c = n.options.manager.getHandler(o.uri);
      c !== null && (l = c);
    }
    return this.detectSupport().then(function(c) {
      if (c) return n.loadTextureImage(e, a.source, l);
      if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0)
        throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(e) {
      const t = new Image();
      t.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=", t.onload = t.onerror = function() {
        e(t.height === 1);
      };
    })), this.isSupported;
  }
}
class bS {
  constructor(e) {
    this.name = Fe.EXT_MESHOPT_COMPRESSION, this.parser = e;
  }
  loadBufferView(e) {
    const t = this.parser.json, n = t.bufferViews[e];
    if (n.extensions && n.extensions[this.name]) {
      const i = n.extensions[this.name], r = this.parser.getDependency("buffer", i.buffer), a = this.parser.options.meshoptDecoder;
      if (!a || !a.supported) {
        if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0)
          throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return r.then(function(o) {
        const l = i.byteOffset || 0, c = i.byteLength || 0, h = i.count, u = i.byteStride, d = new Uint8Array(o, l, c);
        return a.decodeGltfBufferAsync ? a.decodeGltfBufferAsync(h, u, d, i.mode, i.filter).then(function(p) {
          return p.buffer;
        }) : a.ready.then(function() {
          const p = new ArrayBuffer(h * u);
          return a.decodeGltfBuffer(new Uint8Array(p), h, u, d, i.mode, i.filter), p;
        });
      });
    } else
      return null;
  }
}
class AS {
  constructor(e) {
    this.name = Fe.EXT_MESH_GPU_INSTANCING, this.parser = e;
  }
  createNodeMesh(e) {
    const t = this.parser.json, n = t.nodes[e];
    if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0)
      return null;
    const i = t.meshes[n.mesh];
    for (const c of i.primitives)
      if (c.mode !== _n.TRIANGLES && c.mode !== _n.TRIANGLE_STRIP && c.mode !== _n.TRIANGLE_FAN && c.mode !== void 0)
        return null;
    const a = n.extensions[this.name].attributes, o = [], l = {};
    for (const c in a)
      o.push(this.parser.getDependency("accessor", a[c]).then((h) => (l[c] = h, l[c])));
    return o.length < 1 ? null : (o.push(this.parser.createNodeMesh(e)), Promise.all(o).then((c) => {
      const h = c.pop(), u = h.isGroup ? h.children : [h], d = c[0].count, p = [];
      for (const g of u) {
        const _ = new Ie(), f = new P(), m = new Vn(), x = new P(1, 1, 1), y = new Px(g.geometry, g.material, d);
        for (let M = 0; M < d; M++)
          l.TRANSLATION && f.fromBufferAttribute(l.TRANSLATION, M), l.ROTATION && m.fromBufferAttribute(l.ROTATION, M), l.SCALE && x.fromBufferAttribute(l.SCALE, M), y.setMatrixAt(M, _.compose(f, m, x));
        for (const M in l)
          if (M === "_COLOR_0") {
            const b = l[M];
            y.instanceColor = new Gl(b.array, b.itemSize, b.normalized);
          } else M !== "TRANSLATION" && M !== "ROTATION" && M !== "SCALE" && g.geometry.setAttribute(M, l[M]);
        ht.prototype.copy.call(y, g), this.parser.assignFinalMaterial(y), p.push(y);
      }
      return h.isGroup ? (h.clear(), h.add(...p), h) : p[0];
    }));
  }
}
const Kf = "glTF", dr = 12, $u = { JSON: 1313821514, BIN: 5130562 };
class wS {
  constructor(e) {
    this.name = Fe.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, dr), n = new TextDecoder();
    if (this.header = {
      magic: n.decode(new Uint8Array(e.slice(0, 4))),
      version: t.getUint32(4, !0),
      length: t.getUint32(8, !0)
    }, this.header.magic !== Kf)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const i = this.header.length - dr, r = new DataView(e, dr);
    let a = 0;
    for (; a < i; ) {
      const o = r.getUint32(a, !0);
      a += 4;
      const l = r.getUint32(a, !0);
      if (a += 4, l === $u.JSON) {
        const c = new Uint8Array(e, dr + a, o);
        this.content = n.decode(c);
      } else if (l === $u.BIN) {
        const c = dr + a;
        this.body = e.slice(c, c + o);
      }
      a += o;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class RS {
  constructor(e, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = Fe.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const n = this.json, i = this.dracoLoader, r = e.extensions[this.name].bufferView, a = e.extensions[this.name].attributes, o = {}, l = {}, c = {};
    for (const h in a) {
      const u = cc[h] || h.toLowerCase();
      o[u] = a[h];
    }
    for (const h in e.attributes) {
      const u = cc[h] || h.toLowerCase();
      if (a[h] !== void 0) {
        const d = n.accessors[e.attributes[h]], p = Is[d.componentType];
        c[u] = p.name, l[u] = d.normalized === !0;
      }
    }
    return t.getDependency("bufferView", r).then(function(h) {
      return new Promise(function(u, d) {
        i.decodeDracoFile(h, function(p) {
          for (const g in p.attributes) {
            const _ = p.attributes[g], f = l[g];
            f !== void 0 && (_.normalized = f);
          }
          u(p);
        }, o, c, Lt, d);
      });
    });
  }
}
class CS {
  constructor() {
    this.name = Fe.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e;
  }
}
class PS {
  constructor() {
    this.name = Fe.KHR_MESH_QUANTIZATION;
  }
}
class Zf extends Br {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, r = e * i * 3 + i;
    for (let a = 0; a !== i; a++)
      t[a] = n[r + a];
    return t;
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = o * 2, c = o * 3, h = i - t, u = (n - t) / h, d = u * u, p = d * u, g = e * c, _ = g - c, f = -2 * p + 3 * d, m = p - d, x = 1 - f, y = m - d + u;
    for (let M = 0; M !== o; M++) {
      const b = a[_ + M + o], w = a[_ + M + l] * h, E = a[g + M + o], R = a[g + M] * h;
      r[M] = x * b + y * w + f * E + m * R;
    }
    return r;
  }
}
const LS = new Vn();
class DS extends Zf {
  interpolate_(e, t, n, i) {
    const r = super.interpolate_(e, t, n, i);
    return LS.fromArray(r).normalize().toArray(r), r;
  }
}
const _n = {
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6
}, Is = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, Ju = {
  9728: kt,
  9729: an,
  9984: pd,
  9985: xa,
  9986: pr,
  9987: ii
}, Qu = {
  33071: vi,
  33648: Ia,
  10497: Bs
}, Ko = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, cc = {
  POSITION: "position",
  NORMAL: "normal",
  TANGENT: "tangent",
  TEXCOORD_0: "uv",
  TEXCOORD_1: "uv1",
  TEXCOORD_2: "uv2",
  TEXCOORD_3: "uv3",
  COLOR_0: "color",
  WEIGHTS_0: "skinWeight",
  JOINTS_0: "skinIndex"
}, mi = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, IS = {
  CUBICSPLINE: void 0,
  // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
  // keyframe track will be initialized with a default interpolation type, then modified.
  LINEAR: Ar,
  STEP: br
}, Zo = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function NS(s) {
  return s.DefaultMaterial === void 0 && (s.DefaultMaterial = new Lc({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: zn
  })), s.DefaultMaterial;
}
function Vi(s, e, t) {
  for (const n in t.extensions)
    s[n] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[n] = t.extensions[n]);
}
function ti(s, e) {
  e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(s.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
}
function US(s, e, t) {
  let n = !1, i = !1, r = !1;
  for (let c = 0, h = e.length; c < h; c++) {
    const u = e[c];
    if (u.POSITION !== void 0 && (n = !0), u.NORMAL !== void 0 && (i = !0), u.COLOR_0 !== void 0 && (r = !0), n && i && r) break;
  }
  if (!n && !i && !r) return Promise.resolve(s);
  const a = [], o = [], l = [];
  for (let c = 0, h = e.length; c < h; c++) {
    const u = e[c];
    if (n) {
      const d = u.POSITION !== void 0 ? t.getDependency("accessor", u.POSITION) : s.attributes.position;
      a.push(d);
    }
    if (i) {
      const d = u.NORMAL !== void 0 ? t.getDependency("accessor", u.NORMAL) : s.attributes.normal;
      o.push(d);
    }
    if (r) {
      const d = u.COLOR_0 !== void 0 ? t.getDependency("accessor", u.COLOR_0) : s.attributes.color;
      l.push(d);
    }
  }
  return Promise.all([
    Promise.all(a),
    Promise.all(o),
    Promise.all(l)
  ]).then(function(c) {
    const h = c[0], u = c[1], d = c[2];
    return n && (s.morphAttributes.position = h), i && (s.morphAttributes.normal = u), r && (s.morphAttributes.color = d), s.morphTargetsRelative = !0, s;
  });
}
function OS(s, e) {
  if (s.updateMorphTargets(), e.weights !== void 0)
    for (let t = 0, n = e.weights.length; t < n; t++)
      s.morphTargetInfluences[t] = e.weights[t];
  if (e.extras && Array.isArray(e.extras.targetNames)) {
    const t = e.extras.targetNames;
    if (s.morphTargetInfluences.length === t.length) {
      s.morphTargetDictionary = {};
      for (let n = 0, i = t.length; n < i; n++)
        s.morphTargetDictionary[t[n]] = n;
    } else
      console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function FS(s) {
  let e;
  const t = s.extensions && s.extensions[Fe.KHR_DRACO_MESH_COMPRESSION];
  if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + $o(t.attributes) : e = s.indices + ":" + $o(s.attributes) + ":" + s.mode, s.targets !== void 0)
    for (let n = 0, i = s.targets.length; n < i; n++)
      e += ":" + $o(s.targets[n]);
  return e;
}
function $o(s) {
  let e = "";
  const t = Object.keys(s).sort();
  for (let n = 0, i = t.length; n < i; n++)
    e += t[n] + ":" + s[t[n]] + ";";
  return e;
}
function hc(s) {
  switch (s) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
  }
}
function BS(s) {
  return s.search(/\.jpe?g($|\?)/i) > 0 || s.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : s.search(/\.webp($|\?)/i) > 0 || s.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png";
}
const kS = new Ie();
class zS {
  constructor(e = {}, t = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new lS(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let n = !1, i = -1, r = !1, a = -1;
    if (typeof navigator < "u") {
      const o = navigator.userAgent;
      n = /^((?!chrome|android).)*safari/i.test(o) === !0;
      const l = o.match(/Version\/(\d+)/);
      i = n && l ? parseInt(l[1], 10) : -1, r = o.indexOf("Firefox") > -1, a = r ? o.match(/Firefox\/([0-9]+)\./)[1] : -1;
    }
    typeof createImageBitmap > "u" || n && i < 17 || r && a < 98 ? this.textureLoader = new jx(this.options.manager) : this.textureLoader = new ty(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new jd(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
  }
  setExtensions(e) {
    this.extensions = e;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  parse(e, t) {
    const n = this, i = this.json, r = this.extensions;
    this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(a) {
      return a._markDefs && a._markDefs();
    }), Promise.all(this._invokeAll(function(a) {
      return a.beforeRoot && a.beforeRoot();
    })).then(function() {
      return Promise.all([
        n.getDependencies("scene"),
        n.getDependencies("animation"),
        n.getDependencies("camera")
      ]);
    }).then(function(a) {
      const o = {
        scene: a[0][i.scene || 0],
        scenes: a[0],
        animations: a[1],
        cameras: a[2],
        asset: i.asset,
        parser: n,
        userData: {}
      };
      return Vi(r, o, i), ti(o, i), Promise.all(n._invokeAll(function(l) {
        return l.afterRoot && l.afterRoot(o);
      })).then(function() {
        for (const l of o.scenes)
          l.updateMatrixWorld();
        e(o);
      });
    }).catch(t);
  }
  /**
   * Marks the special nodes/meshes in json for efficient parse.
   */
  _markDefs() {
    const e = this.json.nodes || [], t = this.json.skins || [], n = this.json.meshes || [];
    for (let i = 0, r = t.length; i < r; i++) {
      const a = t[i].joints;
      for (let o = 0, l = a.length; o < l; o++)
        e[a[o]].isBone = !0;
    }
    for (let i = 0, r = e.length; i < r; i++) {
      const a = e[i];
      a.mesh !== void 0 && (this._addNodeRef(this.meshCache, a.mesh), a.skin !== void 0 && (n[a.mesh].isSkinnedMesh = !0)), a.camera !== void 0 && this._addNodeRef(this.cameraCache, a.camera);
    }
  }
  /**
   * Counts references to shared node / Object3D resources. These resources
   * can be reused, or "instantiated", at multiple nodes in the scene
   * hierarchy. Mesh, Camera, and Light instances are instantiated and must
   * be marked. Non-scenegraph resources (like Materials, Geometries, and
   * Textures) can be reused directly and are not marked here.
   *
   * Example: CesiumMilkTruck sample model reuses "Wheel" meshes.
   */
  _addNodeRef(e, t) {
    t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
  }
  /** Returns a reference to a shared resource, cloning it if necessary. */
  _getNodeRef(e, t, n) {
    if (e.refs[t] <= 1) return n;
    const i = n.clone(), r = (a, o) => {
      const l = this.associations.get(a);
      l != null && this.associations.set(o, l);
      for (const [c, h] of a.children.entries())
        r(h, o.children[c]);
    };
    return r(n, i), i.name += "_instance_" + e.uses[t]++, i;
  }
  _invokeOne(e) {
    const t = Object.values(this.plugins);
    t.push(this);
    for (let n = 0; n < t.length; n++) {
      const i = e(t[n]);
      if (i) return i;
    }
    return null;
  }
  _invokeAll(e) {
    const t = Object.values(this.plugins);
    t.unshift(this);
    const n = [];
    for (let i = 0; i < t.length; i++) {
      const r = e(t[i]);
      r && n.push(r);
    }
    return n;
  }
  /**
   * Requests the specified dependency asynchronously, with caching.
   * @param {string} type
   * @param {number} index
   * @return {Promise<Object3D|Material|THREE.Texture|AnimationClip|ArrayBuffer|Object>}
   */
  getDependency(e, t) {
    const n = e + ":" + t;
    let i = this.cache.get(n);
    if (!i) {
      switch (e) {
        case "scene":
          i = this.loadScene(t);
          break;
        case "node":
          i = this._invokeOne(function(r) {
            return r.loadNode && r.loadNode(t);
          });
          break;
        case "mesh":
          i = this._invokeOne(function(r) {
            return r.loadMesh && r.loadMesh(t);
          });
          break;
        case "accessor":
          i = this.loadAccessor(t);
          break;
        case "bufferView":
          i = this._invokeOne(function(r) {
            return r.loadBufferView && r.loadBufferView(t);
          });
          break;
        case "buffer":
          i = this.loadBuffer(t);
          break;
        case "material":
          i = this._invokeOne(function(r) {
            return r.loadMaterial && r.loadMaterial(t);
          });
          break;
        case "texture":
          i = this._invokeOne(function(r) {
            return r.loadTexture && r.loadTexture(t);
          });
          break;
        case "skin":
          i = this.loadSkin(t);
          break;
        case "animation":
          i = this._invokeOne(function(r) {
            return r.loadAnimation && r.loadAnimation(t);
          });
          break;
        case "camera":
          i = this.loadCamera(t);
          break;
        default:
          if (i = this._invokeOne(function(r) {
            return r != this && r.getDependency && r.getDependency(e, t);
          }), !i)
            throw new Error("Unknown type: " + e);
          break;
      }
      this.cache.add(n, i);
    }
    return i;
  }
  /**
   * Requests all dependencies of the specified type asynchronously, with caching.
   * @param {string} type
   * @return {Promise<Array<Object>>}
   */
  getDependencies(e) {
    let t = this.cache.get(e);
    if (!t) {
      const n = this, i = this.json[e + (e === "mesh" ? "es" : "s")] || [];
      t = Promise.all(i.map(function(r, a) {
        return n.getDependency(e, a);
      })), this.cache.add(e, t);
    }
    return t;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBuffer(e) {
    const t = this.json.buffers[e], n = this.fileLoader;
    if (t.type && t.type !== "arraybuffer")
      throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
    if (t.uri === void 0 && e === 0)
      return Promise.resolve(this.extensions[Fe.KHR_BINARY_GLTF].body);
    const i = this.options;
    return new Promise(function(r, a) {
      n.load(yr.resolveURL(t.uri, i.path), r, void 0, function() {
        a(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
      });
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferViewIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBufferView(e) {
    const t = this.json.bufferViews[e];
    return this.getDependency("buffer", t.buffer).then(function(n) {
      const i = t.byteLength || 0, r = t.byteOffset || 0;
      return n.slice(r, r + i);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
   * @param {number} accessorIndex
   * @return {Promise<BufferAttribute|InterleavedBufferAttribute>}
   */
  loadAccessor(e) {
    const t = this, n = this.json, i = this.json.accessors[e];
    if (i.bufferView === void 0 && i.sparse === void 0) {
      const a = Ko[i.type], o = Is[i.componentType], l = i.normalized === !0, c = new o(i.count * a);
      return Promise.resolve(new zt(c, a, l));
    }
    const r = [];
    return i.bufferView !== void 0 ? r.push(this.getDependency("bufferView", i.bufferView)) : r.push(null), i.sparse !== void 0 && (r.push(this.getDependency("bufferView", i.sparse.indices.bufferView)), r.push(this.getDependency("bufferView", i.sparse.values.bufferView))), Promise.all(r).then(function(a) {
      const o = a[0], l = Ko[i.type], c = Is[i.componentType], h = c.BYTES_PER_ELEMENT, u = h * l, d = i.byteOffset || 0, p = i.bufferView !== void 0 ? n.bufferViews[i.bufferView].byteStride : void 0, g = i.normalized === !0;
      let _, f;
      if (p && p !== u) {
        const m = Math.floor(d / p), x = "InterleavedBuffer:" + i.bufferView + ":" + i.componentType + ":" + m + ":" + i.count;
        let y = t.cache.get(x);
        y || (_ = new c(o, m * p, i.count * p / h), y = new bx(_, p / h), t.cache.add(x, y)), f = new Ac(y, l, d % p / h, g);
      } else
        o === null ? _ = new c(i.count * l) : _ = new c(o, d, i.count * l), f = new zt(_, l, g);
      if (i.sparse !== void 0) {
        const m = Ko.SCALAR, x = Is[i.sparse.indices.componentType], y = i.sparse.indices.byteOffset || 0, M = i.sparse.values.byteOffset || 0, b = new x(a[1], y, i.sparse.count * m), w = new c(a[2], M, i.sparse.count * l);
        o !== null && (f = new zt(f.array.slice(), f.itemSize, f.normalized)), f.normalized = !1;
        for (let E = 0, R = b.length; E < R; E++) {
          const L = b[E];
          if (f.setX(L, w[E * l]), l >= 2 && f.setY(L, w[E * l + 1]), l >= 3 && f.setZ(L, w[E * l + 2]), l >= 4 && f.setW(L, w[E * l + 3]), l >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
        f.normalized = g;
      }
      return f;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
   * @param {number} textureIndex
   * @return {Promise<THREE.Texture|null>}
   */
  loadTexture(e) {
    const t = this.json, n = this.options, r = t.textures[e].source, a = t.images[r];
    let o = this.textureLoader;
    if (a.uri) {
      const l = n.manager.getHandler(a.uri);
      l !== null && (o = l);
    }
    return this.loadTextureImage(e, r, o);
  }
  loadTextureImage(e, t, n) {
    const i = this, r = this.json, a = r.textures[e], o = r.images[t], l = (o.uri || o.bufferView) + ":" + a.sampler;
    if (this.textureCache[l])
      return this.textureCache[l];
    const c = this.loadImageSource(t, n).then(function(h) {
      h.flipY = !1, h.name = a.name || o.name || "", h.name === "" && typeof o.uri == "string" && o.uri.startsWith("data:image/") === !1 && (h.name = o.uri);
      const d = (r.samplers || {})[a.sampler] || {};
      return h.magFilter = Ju[d.magFilter] || an, h.minFilter = Ju[d.minFilter] || ii, h.wrapS = Qu[d.wrapS] || Bs, h.wrapT = Qu[d.wrapT] || Bs, i.associations.set(h, { textures: e }), h;
    }).catch(function() {
      return null;
    });
    return this.textureCache[l] = c, c;
  }
  loadImageSource(e, t) {
    const n = this, i = this.json, r = this.options;
    if (this.sourceCache[e] !== void 0)
      return this.sourceCache[e].then((u) => u.clone());
    const a = i.images[e], o = self.URL || self.webkitURL;
    let l = a.uri || "", c = !1;
    if (a.bufferView !== void 0)
      l = n.getDependency("bufferView", a.bufferView).then(function(u) {
        c = !0;
        const d = new Blob([u], { type: a.mimeType });
        return l = o.createObjectURL(d), l;
      });
    else if (a.uri === void 0)
      throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
    const h = Promise.resolve(l).then(function(u) {
      return new Promise(function(d, p) {
        let g = d;
        t.isImageBitmapLoader === !0 && (g = function(_) {
          const f = new St(_);
          f.needsUpdate = !0, d(f);
        }), t.load(yr.resolveURL(u, r.path), g, void 0, p);
      });
    }).then(function(u) {
      return c === !0 && o.revokeObjectURL(l), ti(u, a), u.userData.mimeType = a.mimeType || BS(a.uri), u;
    }).catch(function(u) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", l), u;
    });
    return this.sourceCache[e] = h, h;
  }
  /**
   * Asynchronously assigns a texture to the given material parameters.
   * @param {Object} materialParams
   * @param {string} mapName
   * @param {Object} mapDef
   * @return {Promise<Texture>}
   */
  assignTexture(e, t, n, i) {
    const r = this;
    return this.getDependency("texture", n.index).then(function(a) {
      if (!a) return null;
      if (n.texCoord !== void 0 && n.texCoord > 0 && (a = a.clone(), a.channel = n.texCoord), r.extensions[Fe.KHR_TEXTURE_TRANSFORM]) {
        const o = n.extensions !== void 0 ? n.extensions[Fe.KHR_TEXTURE_TRANSFORM] : void 0;
        if (o) {
          const l = r.associations.get(a);
          a = r.extensions[Fe.KHR_TEXTURE_TRANSFORM].extendTexture(a, o), r.associations.set(a, l);
        }
      }
      return i !== void 0 && (a.colorSpace = i), e[t] = a, a;
    });
  }
  /**
   * Assigns final material to a Mesh, Line, or Points instance. The instance
   * already has a material (generated from the glTF material options alone)
   * but reuse of the same glTF material may require multiple threejs materials
   * to accommodate different primitive types, defines, etc. New materials will
   * be created if necessary, and reused from a cache.
   * @param  {Object3D} mesh Mesh, Line, or Points instance.
   */
  assignFinalMaterial(e) {
    const t = e.geometry;
    let n = e.material;
    const i = t.attributes.tangent === void 0, r = t.attributes.color !== void 0, a = t.attributes.normal === void 0;
    if (e.isPoints) {
      const o = "PointsMaterial:" + n.uuid;
      let l = this.cache.get(o);
      l || (l = new Xd(), kn.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, l.sizeAttenuation = !1, this.cache.add(o, l)), n = l;
    } else if (e.isLine) {
      const o = "LineBasicMaterial:" + n.uuid;
      let l = this.cache.get(o);
      l || (l = new Wd(), kn.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, this.cache.add(o, l)), n = l;
    }
    if (i || r || a) {
      let o = "ClonedMaterial:" + n.uuid + ":";
      i && (o += "derivative-tangents:"), r && (o += "vertex-colors:"), a && (o += "flat-shading:");
      let l = this.cache.get(o);
      l || (l = n.clone(), r && (l.vertexColors = !0), a && (l.flatShading = !0), i && (l.normalScale && (l.normalScale.y *= -1), l.clearcoatNormalScale && (l.clearcoatNormalScale.y *= -1)), this.cache.add(o, l), this.associations.set(l, this.associations.get(n))), n = l;
    }
    e.material = n;
  }
  getMaterialType() {
    return Lc;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
   * @param {number} materialIndex
   * @return {Promise<Material>}
   */
  loadMaterial(e) {
    const t = this, n = this.json, i = this.extensions, r = n.materials[e];
    let a;
    const o = {}, l = r.extensions || {}, c = [];
    if (l[Fe.KHR_MATERIALS_UNLIT]) {
      const u = i[Fe.KHR_MATERIALS_UNLIT];
      a = u.getMaterialType(), c.push(u.extendParams(o, r, t));
    } else {
      const u = r.pbrMetallicRoughness || {};
      if (o.color = new be(1, 1, 1), o.opacity = 1, Array.isArray(u.baseColorFactor)) {
        const d = u.baseColorFactor;
        o.color.setRGB(d[0], d[1], d[2], Lt), o.opacity = d[3];
      }
      u.baseColorTexture !== void 0 && c.push(t.assignTexture(o, "map", u.baseColorTexture, Rt)), o.metalness = u.metallicFactor !== void 0 ? u.metallicFactor : 1, o.roughness = u.roughnessFactor !== void 0 ? u.roughnessFactor : 1, u.metallicRoughnessTexture !== void 0 && (c.push(t.assignTexture(o, "metalnessMap", u.metallicRoughnessTexture)), c.push(t.assignTexture(o, "roughnessMap", u.metallicRoughnessTexture))), a = this._invokeOne(function(d) {
        return d.getMaterialType && d.getMaterialType(e);
      }), c.push(Promise.all(this._invokeAll(function(d) {
        return d.extendMaterialParams && d.extendMaterialParams(e, o);
      })));
    }
    r.doubleSided === !0 && (o.side = Un);
    const h = r.alphaMode || Zo.OPAQUE;
    if (h === Zo.BLEND ? (o.transparent = !0, o.depthWrite = !1) : (o.transparent = !1, h === Zo.MASK && (o.alphaTest = r.alphaCutoff !== void 0 ? r.alphaCutoff : 0.5)), r.normalTexture !== void 0 && a !== Yi && (c.push(t.assignTexture(o, "normalMap", r.normalTexture)), o.normalScale = new Me(1, 1), r.normalTexture.scale !== void 0)) {
      const u = r.normalTexture.scale;
      o.normalScale.set(u, u);
    }
    if (r.occlusionTexture !== void 0 && a !== Yi && (c.push(t.assignTexture(o, "aoMap", r.occlusionTexture)), r.occlusionTexture.strength !== void 0 && (o.aoMapIntensity = r.occlusionTexture.strength)), r.emissiveFactor !== void 0 && a !== Yi) {
      const u = r.emissiveFactor;
      o.emissive = new be().setRGB(u[0], u[1], u[2], Lt);
    }
    return r.emissiveTexture !== void 0 && a !== Yi && c.push(t.assignTexture(o, "emissiveMap", r.emissiveTexture, Rt)), Promise.all(c).then(function() {
      const u = new a(o);
      return r.name && (u.name = r.name), ti(u, r), t.associations.set(u, { materials: e }), r.extensions && Vi(i, u, r), u;
    });
  }
  /** When Object3D instances are targeted by animation, they need unique names. */
  createUniqueName(e) {
    const t = et.sanitizeNodeName(e || "");
    return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
   *
   * Creates BufferGeometries from primitives.
   *
   * @param {Array<GLTF.Primitive>} primitives
   * @return {Promise<Array<BufferGeometry>>}
   */
  loadGeometries(e) {
    const t = this, n = this.extensions, i = this.primitiveCache;
    function r(o) {
      return n[Fe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o, t).then(function(l) {
        return ed(l, o, t);
      });
    }
    const a = [];
    for (let o = 0, l = e.length; o < l; o++) {
      const c = e[o], h = FS(c), u = i[h];
      if (u)
        a.push(u.promise);
      else {
        let d;
        c.extensions && c.extensions[Fe.KHR_DRACO_MESH_COMPRESSION] ? d = r(c) : d = ed(new Ln(), c, t), i[h] = { primitive: c, promise: d }, a.push(d);
      }
    }
    return Promise.all(a);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
   * @param {number} meshIndex
   * @return {Promise<Group|Mesh|SkinnedMesh>}
   */
  loadMesh(e) {
    const t = this, n = this.json, i = this.extensions, r = n.meshes[e], a = r.primitives, o = [];
    for (let l = 0, c = a.length; l < c; l++) {
      const h = a[l].material === void 0 ? NS(this.cache) : this.getDependency("material", a[l].material);
      o.push(h);
    }
    return o.push(t.loadGeometries(a)), Promise.all(o).then(function(l) {
      const c = l.slice(0, l.length - 1), h = l[l.length - 1], u = [];
      for (let p = 0, g = h.length; p < g; p++) {
        const _ = h[p], f = a[p];
        let m;
        const x = c[p];
        if (f.mode === _n.TRIANGLES || f.mode === _n.TRIANGLE_STRIP || f.mode === _n.TRIANGLE_FAN || f.mode === void 0)
          m = r.isSkinnedMesh === !0 ? new wx(_, x) : new Xt(_, x), m.isSkinnedMesh === !0 && m.normalizeSkinWeights(), f.mode === _n.TRIANGLE_STRIP ? m.geometry = Zu(m.geometry, Td) : f.mode === _n.TRIANGLE_FAN && (m.geometry = Zu(m.geometry, kl));
        else if (f.mode === _n.LINES)
          m = new Lx(_, x);
        else if (f.mode === _n.LINE_STRIP)
          m = new Rc(_, x);
        else if (f.mode === _n.LINE_LOOP)
          m = new Dx(_, x);
        else if (f.mode === _n.POINTS)
          m = new Ix(_, x);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + f.mode);
        Object.keys(m.geometry.morphAttributes).length > 0 && OS(m, r), m.name = t.createUniqueName(r.name || "mesh_" + e), ti(m, r), f.extensions && Vi(i, m, f), t.assignFinalMaterial(m), u.push(m);
      }
      for (let p = 0, g = u.length; p < g; p++)
        t.associations.set(u[p], {
          meshes: e,
          primitives: p
        });
      if (u.length === 1)
        return r.extensions && Vi(i, u[0], r), u[0];
      const d = new Fn();
      r.extensions && Vi(i, d, r), t.associations.set(d, { meshes: e });
      for (let p = 0, g = u.length; p < g; p++)
        d.add(u[p]);
      return d;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
   * @param {number} cameraIndex
   * @return {Promise<THREE.Camera>}
   */
  loadCamera(e) {
    let t;
    const n = this.json.cameras[e], i = n[n.type];
    if (!i) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return n.type === "perspective" ? t = new Bt(qt.radToDeg(i.yfov), i.aspectRatio || 1, i.znear || 1, i.zfar || 2e6) : n.type === "orthographic" && (t = new Tc(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)), n.name && (t.name = this.createUniqueName(n.name)), ti(t, n), Promise.resolve(t);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
   * @param {number} skinIndex
   * @return {Promise<Skeleton>}
   */
  loadSkin(e) {
    const t = this.json.skins[e], n = [];
    for (let i = 0, r = t.joints.length; i < r; i++)
      n.push(this._loadNodeShallow(t.joints[i]));
    return t.inverseBindMatrices !== void 0 ? n.push(this.getDependency("accessor", t.inverseBindMatrices)) : n.push(null), Promise.all(n).then(function(i) {
      const r = i.pop(), a = i, o = [], l = [];
      for (let c = 0, h = a.length; c < h; c++) {
        const u = a[c];
        if (u) {
          o.push(u);
          const d = new Ie();
          r !== null && d.fromArray(r.array, c * 16), l.push(d);
        } else
          console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[c]);
      }
      return new wc(o, l);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
   * @param {number} animationIndex
   * @return {Promise<AnimationClip>}
   */
  loadAnimation(e) {
    const t = this.json, n = this, i = t.animations[e], r = i.name ? i.name : "animation_" + e, a = [], o = [], l = [], c = [], h = [];
    for (let u = 0, d = i.channels.length; u < d; u++) {
      const p = i.channels[u], g = i.samplers[p.sampler], _ = p.target, f = _.node, m = i.parameters !== void 0 ? i.parameters[g.input] : g.input, x = i.parameters !== void 0 ? i.parameters[g.output] : g.output;
      _.node !== void 0 && (a.push(this.getDependency("node", f)), o.push(this.getDependency("accessor", m)), l.push(this.getDependency("accessor", x)), c.push(g), h.push(_));
    }
    return Promise.all([
      Promise.all(a),
      Promise.all(o),
      Promise.all(l),
      Promise.all(c),
      Promise.all(h)
    ]).then(function(u) {
      const d = u[0], p = u[1], g = u[2], _ = u[3], f = u[4], m = [];
      for (let x = 0, y = d.length; x < y; x++) {
        const M = d[x], b = p[x], w = g[x], E = _[x], R = f[x];
        if (M === void 0) continue;
        M.updateMatrix && M.updateMatrix();
        const L = n._createAnimationTracks(M, b, w, E, R);
        if (L)
          for (let v = 0; v < L.length; v++)
            m.push(L[v]);
      }
      return new Vx(r, void 0, m);
    });
  }
  createNodeMesh(e) {
    const t = this.json, n = this, i = t.nodes[e];
    return i.mesh === void 0 ? null : n.getDependency("mesh", i.mesh).then(function(r) {
      const a = n._getNodeRef(n.meshCache, i.mesh, r);
      return i.weights !== void 0 && a.traverse(function(o) {
        if (o.isMesh)
          for (let l = 0, c = i.weights.length; l < c; l++)
            o.morphTargetInfluences[l] = i.weights[l];
      }), a;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
   * @param {number} nodeIndex
   * @return {Promise<Object3D>}
   */
  loadNode(e) {
    const t = this.json, n = this, i = t.nodes[e], r = n._loadNodeShallow(e), a = [], o = i.children || [];
    for (let c = 0, h = o.length; c < h; c++)
      a.push(n.getDependency("node", o[c]));
    const l = i.skin === void 0 ? Promise.resolve(null) : n.getDependency("skin", i.skin);
    return Promise.all([
      r,
      Promise.all(a),
      l
    ]).then(function(c) {
      const h = c[0], u = c[1], d = c[2];
      d !== null && h.traverse(function(p) {
        p.isSkinnedMesh && p.bind(d, kS);
      });
      for (let p = 0, g = u.length; p < g; p++)
        h.add(u[p]);
      return h;
    });
  }
  // ._loadNodeShallow() parses a single node.
  // skin and child nodes are created and added in .loadNode() (no '_' prefix).
  _loadNodeShallow(e) {
    const t = this.json, n = this.extensions, i = this;
    if (this.nodeCache[e] !== void 0)
      return this.nodeCache[e];
    const r = t.nodes[e], a = r.name ? i.createUniqueName(r.name) : "", o = [], l = i._invokeOne(function(c) {
      return c.createNodeMesh && c.createNodeMesh(e);
    });
    return l && o.push(l), r.camera !== void 0 && o.push(i.getDependency("camera", r.camera).then(function(c) {
      return i._getNodeRef(i.cameraCache, r.camera, c);
    })), i._invokeAll(function(c) {
      return c.createNodeAttachment && c.createNodeAttachment(e);
    }).forEach(function(c) {
      o.push(c);
    }), this.nodeCache[e] = Promise.all(o).then(function(c) {
      let h;
      if (r.isBone === !0 ? h = new Hd() : c.length > 1 ? h = new Fn() : c.length === 1 ? h = c[0] : h = new ht(), h !== c[0])
        for (let u = 0, d = c.length; u < d; u++)
          h.add(c[u]);
      if (r.name && (h.userData.name = r.name, h.name = a), ti(h, r), r.extensions && Vi(n, h, r), r.matrix !== void 0) {
        const u = new Ie();
        u.fromArray(r.matrix), h.applyMatrix4(u);
      } else
        r.translation !== void 0 && h.position.fromArray(r.translation), r.rotation !== void 0 && h.quaternion.fromArray(r.rotation), r.scale !== void 0 && h.scale.fromArray(r.scale);
      return i.associations.has(h) || i.associations.set(h, {}), i.associations.get(h).nodes = e, h;
    }), this.nodeCache[e];
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
   * @param {number} sceneIndex
   * @return {Promise<Group>}
   */
  loadScene(e) {
    const t = this.extensions, n = this.json.scenes[e], i = this, r = new Fn();
    n.name && (r.name = i.createUniqueName(n.name)), ti(r, n), n.extensions && Vi(t, r, n);
    const a = n.nodes || [], o = [];
    for (let l = 0, c = a.length; l < c; l++)
      o.push(i.getDependency("node", a[l]));
    return Promise.all(o).then(function(l) {
      for (let h = 0, u = l.length; h < u; h++)
        r.add(l[h]);
      const c = (h) => {
        const u = /* @__PURE__ */ new Map();
        for (const [d, p] of i.associations)
          (d instanceof kn || d instanceof St) && u.set(d, p);
        return h.traverse((d) => {
          const p = i.associations.get(d);
          p != null && u.set(d, p);
        }), u;
      };
      return i.associations = c(r), r;
    });
  }
  _createAnimationTracks(e, t, n, i, r) {
    const a = [], o = e.name ? e.name : e.uuid, l = [];
    mi[r.path] === mi.weights ? e.traverse(function(d) {
      d.morphTargetInfluences && l.push(d.name ? d.name : d.uuid);
    }) : l.push(o);
    let c;
    switch (mi[r.path]) {
      case mi.weights:
        c = Gs;
        break;
      case mi.rotation:
        c = Ws;
        break;
      case mi.position:
      case mi.scale:
        c = Xs;
        break;
      default:
        switch (n.itemSize) {
          case 1:
            c = Gs;
            break;
          case 2:
          case 3:
          default:
            c = Xs;
            break;
        }
        break;
    }
    const h = i.interpolation !== void 0 ? IS[i.interpolation] : Ar, u = this._getArrayFromAccessor(n);
    for (let d = 0, p = l.length; d < p; d++) {
      const g = new c(
        l[d] + "." + mi[r.path],
        t.array,
        u,
        h
      );
      i.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(g), a.push(g);
    }
    return a;
  }
  _getArrayFromAccessor(e) {
    let t = e.array;
    if (e.normalized) {
      const n = hc(t.constructor), i = new Float32Array(t.length);
      for (let r = 0, a = t.length; r < a; r++)
        i[r] = t[r] * n;
      t = i;
    }
    return t;
  }
  _createCubicSplineTrackInterpolant(e) {
    e.createInterpolant = function(n) {
      const i = this instanceof Ws ? DS : Zf;
      return new i(this.times, this.values, this.getValueSize() / 3, n);
    }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0;
  }
}
function VS(s, e, t) {
  const n = e.attributes, i = new Wn();
  if (n.POSITION !== void 0) {
    const o = t.json.accessors[n.POSITION], l = o.min, c = o.max;
    if (l !== void 0 && c !== void 0) {
      if (i.set(
        new P(l[0], l[1], l[2]),
        new P(c[0], c[1], c[2])
      ), o.normalized) {
        const h = hc(Is[o.componentType]);
        i.min.multiplyScalar(h), i.max.multiplyScalar(h);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else
    return;
  const r = e.targets;
  if (r !== void 0) {
    const o = new P(), l = new P();
    for (let c = 0, h = r.length; c < h; c++) {
      const u = r[c];
      if (u.POSITION !== void 0) {
        const d = t.json.accessors[u.POSITION], p = d.min, g = d.max;
        if (p !== void 0 && g !== void 0) {
          if (l.setX(Math.max(Math.abs(p[0]), Math.abs(g[0]))), l.setY(Math.max(Math.abs(p[1]), Math.abs(g[1]))), l.setZ(Math.max(Math.abs(p[2]), Math.abs(g[2]))), d.normalized) {
            const _ = hc(Is[d.componentType]);
            l.multiplyScalar(_);
          }
          o.max(l);
        } else
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    i.expandByVector(o);
  }
  s.boundingBox = i;
  const a = new Pn();
  i.getCenter(a.center), a.radius = i.min.distanceTo(i.max) / 2, s.boundingSphere = a;
}
function ed(s, e, t) {
  const n = e.attributes, i = [];
  function r(a, o) {
    return t.getDependency("accessor", a).then(function(l) {
      s.setAttribute(o, l);
    });
  }
  for (const a in n) {
    const o = cc[a] || a.toLowerCase();
    o in s.attributes || i.push(r(n[a], o));
  }
  if (e.indices !== void 0 && !s.index) {
    const a = t.getDependency("accessor", e.indices).then(function(o) {
      s.setIndex(o);
    });
    i.push(a);
  }
  return qe.workingColorSpace !== Lt && "COLOR_0" in n && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${qe.workingColorSpace}" not supported.`), ti(s, e), VS(s, e, t), Promise.all(i).then(function() {
    return e.targets !== void 0 ? US(s, e.targets, t) : s;
  });
}
const HS = "/projects/heart-valve/app/models/heart-base-v2.glb", td = 1.9;
async function GS() {
  const s = new oS(), e = HS, n = (await s.loadAsync(e)).scene;
  n.traverse((l) => {
    const c = l;
    if (!c.isMesh) return;
    c.castShadow = !0, c.receiveShadow = !0;
    const h = c.material;
    h && (h.side = zn), c.geometry.getAttribute("normal") || c.geometry.computeVertexNormals();
  });
  const i = new Wn().setFromObject(n), r = i.getCenter(new P()), a = i.getBoundingSphere(new Pn()).radius || 1;
  n.position.sub(r);
  const o = new Fn();
  return o.name = "heart-model", o.add(n), o.scale.setScalar(td / a), o.userData.fitScale = td / a, o.userData.fitRadius = a, o.rotation.set(0, 0, 0), o;
}
const WS = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, "") === "cutawaydoor";
class XS {
  constructor(e) {
    xe(this, "door", null);
    xe(this, "mat", null);
    xe(this, "tween", null);
    xe(this, "state", { open: 0 });
    if (e.traverse((t) => {
      const n = t;
      n.isMesh && WS(n.name) && (this.door = n);
    }), this.door) {
      const t = this.door.material;
      this.mat = t.clone(), this.door.material = this.mat;
    }
  }
  /** True once the door mesh was found (diagnostics / guards). */
  get available() {
    return this.door !== null;
  }
  /** Current openness, 0 (closed) → 1 (fully cut away). */
  get open() {
    return this.state.open;
  }
  /**
   * Set the cutaway openness. `animate:false` snaps (headless / initial framing);
   * otherwise it dissolves over `duration` seconds so the wall fades on entrance.
   */
  set(e, t = {}) {
    var i;
    if (e = qt.clamp(e, 0, 1), !this.door || !this.mat) return;
    (i = this.tween) == null || i.kill();
    const n = () => {
      const r = this.state.open, a = r > 1e-3;
      this.mat.transparent !== a && (this.mat.transparent = a, this.mat.needsUpdate = !0), this.mat.opacity = 1 - r, this.mat.depthWrite = r < 0.5, this.door.visible = r < 0.999;
    };
    if (t.animate === !1) {
      this.state.open = e, n();
      return;
    }
    this.tween = Ji.to(this.state, {
      open: e,
      duration: t.duration ?? 0.9,
      ease: "power2.inOut",
      onUpdate: n
    });
  }
  dispose() {
    var e;
    (e = this.tween) == null || e.kill();
  }
}
class YS {
  constructor(e, t) {
    xe(this, "heart");
    xe(this, "frame");
    xe(this, "state", { deg: 0 });
    xe(this, "tween", null);
    this.heart = e, this.frame = t, this.apply();
  }
  /** Current turn, in degrees clockwise-from-above. */
  get degrees() {
    return this.state.deg;
  }
  /**
   * Turn the heart to `deg` (clockwise-from-above). `animate:false` snaps, which is
   * what headless rendering and the very first framing want; otherwise it eases, in
   * step with the cutaway dissolve so the entrance reads as one move.
   */
  set(e, t = {}) {
    var n;
    if ((n = this.tween) == null || n.kill(), t.animate === !1) {
      this.state.deg = e, this.apply();
      return;
    }
    this.tween = Ji.to(this.state, {
      deg: e,
      duration: t.duration ?? 0.9,
      ease: "power2.inOut",
      onUpdate: () => this.apply()
    });
  }
  apply() {
    const e = -this.state.deg * qt.DEG2RAD;
    this.heart.rotation.y = e, this.frame.rotation.y = e, this.frame.updateMatrixWorld(!0);
  }
  dispose() {
    var e;
    (e = this.tween) == null || e.kill();
  }
}
class qS {
  constructor(e) {
    xe(this, "renderer");
    xe(this, "scene");
    xe(this, "camera");
    xe(this, "controls");
    /** Resolves once the heart model has loaded (or fallen back). */
    xe(this, "ready");
    /** Diagnostics (Phase 3 troubleshooting): populated by loadHeart(). */
    xe(this, "loadError", null);
    xe(this, "usingPlaceholder", !1);
    /**
     * A rotation-only companion to the heart group: no scale, no translation, just the
     * same turn (see `heartOrientation.ts`). In-heart overlays — the blood bodies, the
     * liquid jets, the closure blooms — are added HERE rather than straight to the
     * scene, so their hand-measured world anchors stay valid when a section turns the
     * heart. World-space HUD furniture (the manometer columns) must NOT go in here.
     */
    xe(this, "heartFrame", new Fn());
    xe(this, "canvas");
    xe(this, "heartGroup", null);
    xe(this, "wallInfluence", null);
    xe(this, "cutawayCtl", null);
    xe(this, "orientation", null);
    xe(this, "rafId", null);
    xe(this, "running", !1);
    xe(this, "lastFrameTime", 0);
    xe(this, "frameCallbacks", /* @__PURE__ */ new Set());
    xe(this, "onResize", () => this.resize());
    this.canvas = e, this.scene = new Tx(), this.renderer = DM(e), this.camera = IM(this.aspect()), this.controls = sS(this.camera, e), this.scene.environment = UM(this.renderer), this.scene.add(NM()), this.heartFrame.name = "heart-frame", this.scene.add(this.heartFrame), this.ready = this.loadHeart(), this.resize(), window.addEventListener("resize", this.onResize);
  }
  /** The loaded heart group, or null until `ready` resolves. */
  getHeart() {
    return this.heartGroup;
  }
  /** The authored-cutaway controller, or null (placeholder / not yet loaded). */
  getCutaway() {
    return this.cutawayCtl;
  }
  /**
   * The rotation-only frame that mirrors the heart's turn. In-heart overlays add
   * themselves here so their world-measured anchors survive a section's rotation.
   */
  getHeartFrame() {
    return this.heartFrame;
  }
  /** Per-section heart turn, or null (placeholder / not yet loaded). */
  getOrientation() {
    return this.orientation;
  }
  /**
   * Publish the rig's ventricular wall weight so overlays living INSIDE the ventricle
   * can move with the muscle. `bindHeartToClock` computes it (0 at end-diastole → 1 at
   * end-systole) as the weight it feeds the `ventricle_systole` morph; main.ts hands it
   * over here once the binding exists.
   *
   * ⚠️ Anything that has to stay inside a contracting chamber must read THIS rather than
   * re-deriving the same normalization from the clock. The blood pools did not have it,
   * so the wall came in and the liquid stayed put and slid out through the muscle. One
   * number, one source — the same discipline the engine gets for timing.
   */
  setWallInfluence(e) {
    this.wallInfluence = e;
  }
  /** How far the ventricular wall is through its contraction, 0 → 1. */
  getWallInfluence() {
    var e;
    return ((e = this.wallInfluence) == null ? void 0 : e.call(this)) ?? 0;
  }
  /** Load the real anatomical heart; fall back to the placeholder on failure. */
  async loadHeart() {
    try {
      const e = await GS();
      this.heartGroup = e, this.scene.add(e), this.cutawayCtl = new XS(e), this.orientation = new YS(e, this.heartFrame);
    } catch (e) {
      console.error("Failed to load heart model; using placeholder.", e), this.loadError = e, this.usingPlaceholder = !0, this.scene.add(rS());
    }
  }
  /**
   * Register a per-frame callback (receives the frame delta in seconds). Overlays
   * that animate independently of the beat — flowing blood, particle motion — hook
   * here rather than owning their own render loop. Returns an unsubscribe.
   */
  onFrame(e) {
    return this.frameCallbacks.add(e), () => this.frameCallbacks.delete(e);
  }
  /** Begin the render loop. Idempotent. */
  start() {
    if (this.running) return;
    this.running = !0, this.lastFrameTime = performance.now();
    const e = (t) => {
      if (!this.running) return;
      this.rafId = requestAnimationFrame(e);
      const n = Math.min(0.05, (t - this.lastFrameTime) / 1e3);
      this.lastFrameTime = t;
      for (const i of this.frameCallbacks) i(n);
      this.controls.update(), this.renderer.render(this.scene, this.camera);
    };
    this.rafId = requestAnimationFrame(e);
  }
  /** Pause the render loop and stop consuming the GPU. Idempotent. */
  stop() {
    this.running = !1, this.rafId !== null && (cancelAnimationFrame(this.rafId), this.rafId = null);
  }
  /** Tear down listeners and GPU resources. */
  dispose() {
    this.stop(), window.removeEventListener("resize", this.onResize), this.controls.dispose(), this.renderer.dispose();
  }
  aspect() {
    return this.canvas.clientWidth / Math.max(1, this.canvas.clientHeight);
  }
  resize() {
    const e = this.canvas.clientWidth, t = this.canvas.clientHeight;
    this.renderer.setSize(e, t, !1), this.camera.aspect = this.aspect(), this.camera.updateProjectionMatrix();
  }
}
const jS = {
  aorticvalve: "aortic",
  pulmonaryvalve: "pulmonary",
  mitralvalve: "mitral",
  tricuspidvalve: "tricuspid"
}, KS = 0.04;
function ZS(s, e, t) {
  const n = (l) => (l % 1 + 1) % 1, i = n(t - e);
  if (i < 1e-6) return 1;
  const r = n(s - e);
  if (r >= i) return 1;
  const a = Math.min(KS, i / 2);
  let o = Math.min(r / a, (i - r) / a, 1);
  return o = o * o * (3 - 2 * o), 1 - o;
}
const $S = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, "");
function JS(s) {
  const e = s.morphTargetDictionary;
  return !e || !s.morphTargetInfluences || !("open" in e) || !("closed" in e) ? null : { openIndex: e.open, closedIndex: e.closed };
}
function QS(s, e, t) {
  const n = s.morphTargetInfluences;
  if (!n) return;
  const i = qt.clamp(t, 0, 1);
  n[e.closedIndex] = i, n[e.openIndex] = 1 - i;
}
function eE(s, e) {
  const t = [], n = [], i = [];
  s.traverse((f) => {
    const m = f;
    if (!m.isMesh) return;
    i.push(m.name);
    const x = m.morphTargetDictionary;
    if (!x || !m.morphTargetInfluences) return;
    "ventricle_systole" in x && t.push({ mesh: m, index: x.ventricle_systole, driver: "ventricle" }), "atrial_systole" in x && t.push({ mesh: m, index: x.atrial_systole, driver: "atrium" });
    const y = jS[$S(m.name)], M = y ? JS(m) : null;
    y && M && n.push({ mesh: m, valve: y, ...M });
  });
  const r = e.getEngine();
  let a = 1 / 0, o = -1 / 0, l = 1 / 0, c = -1 / 0;
  const h = 200;
  for (let f = 0; f < h; f++) {
    const m = r.sample(f / h);
    a = Math.min(a, m.volumes.LV), o = Math.max(o, m.volumes.LV), l = Math.min(l, m.volumes.LA), c = Math.max(c, m.volumes.LA);
  }
  const u = o - a, d = c - l;
  let p = 0;
  const g = () => {
    const f = e.sample(), m = u > 1e-6 ? qt.clamp((o - f.volumes.LV) / u, 0, 1) : 0, x = d > 1e-6 ? qt.clamp((c - f.volumes.LA) / d, 0, 1) : 0;
    p = m;
    for (const y of t) {
      const M = y.mesh.morphTargetInfluences;
      M && (M[y.index] = y.driver === "ventricle" ? m : x);
    }
    if (n.length > 0) {
      const y = e.getEvents(), M = e.getPhase();
      for (const b of n) {
        const w = y.valve[b.valve];
        QS(b.mesh, b, ZS(M, w.open, w.close));
      }
    }
  };
  return {
    unsubscribe: e.subscribe(g),
    meshNames: i,
    boundChambers: t.map((f) => f.driver),
    boundLeaflets: n.length,
    sampleInfluence: () => p
  };
}
const Jo = {
  heartRateBpm: { min: 60, max: 100, target: 75 }
}, wn = {
  // LV end-systolic elastance E_es, mmHg/mL.
  contractility: { min: 1, max: 6, default: 2.8 },
  // Mean systemic-venous filling pressure, mmHg.
  preload: { min: 2, max: 12, default: 7 },
  // Systemic vascular resistance R_sys, mmHg·s/mL.
  afterload: { min: 0.6, max: 1.6, default: 1 },
  // Heart rate, bpm (T = 60 / HR → 0.6–1.0 s, matching the §7 cycle range).
  heartRate: {
    min: Jo.heartRateBpm.min,
    max: Jo.heartRateBpm.max,
    default: Jo.heartRateBpm.target
  },
  // AV conduction delay (the PR interval), seconds. Default 0.16 s sits mid-band
  // of the normal 0.12–0.20 s PR interval; 0.32 s is a marked delay.
  //
  // The floor is 0, below any real PR interval, and that is the point: SPEC §5's
  // control exists to show what the delay BUYS. At 0 the mitral shuts at cycle
  // phase 0.004, so the whole atrial contraction lands against a closed door —
  // measured EDV falls 119.3 → 111.5 mL and stroke volume 71.5 → 66.5 mL while
  // peak left-atrial pressure RISES 8.6 → 10.0 mmHg. The atrium works harder and
  // delivers less. See the §5 notes in HANDOFF.md for the full sweep.
  avDelay: { min: 0, max: 0.32, default: 0.16 }
}, nd = {
  contractility: wn.contractility.default,
  preload: wn.preload.default,
  afterload: wn.afterload.default,
  heartRate: wn.heartRate.default,
  avDelay: wn.avDelay.default
}, id = {
  // Cycle phase 0 = atrial-systole onset. Atria fire first (start 0); the
  // ventricles fire after the AV delay (activationStart is recomputed as
  // avDelay/cycleLength so the delay stays fixed in seconds as HR changes).
  chambers: {
    // Left ventricle — full fidelity, the contractility knob lives on eMax.
    LV: {
      eMin: 0.06,
      eMax: wn.contractility.default,
      v0: 5,
      activationStart: 0.2,
      // ≈ avDelay / cycleLength (0.16 / 0.8)
      activationDuration: 0.42
    },
    // Left atrium — weak, fires first (the atrial kick).
    LA: {
      eMin: 0.16,
      eMax: 0.3,
      v0: 4,
      activationStart: 0,
      activationDuration: 0.17
    },
    // Right ventricle — moderate, simplified.
    RV: {
      eMin: 0.05,
      eMax: 0.42,
      v0: 5,
      activationStart: 0.2,
      activationDuration: 0.42
    },
    // Right atrium — weak, simplified.
    RA: {
      eMin: 0.14,
      eMax: 0.25,
      v0: 4,
      activationStart: 0,
      activationDuration: 0.17
    }
  },
  // Systemic arteries — three-element Windkessel (PHYSICS.md §3).
  sysArt: {
    zc: 0.01,
    ca: 1.4,
    rSys: wn.afterload.default,
    v0: 700
  },
  // Systemic veins — large passive compliance, the preload reservoir.
  sysVein: { compliance: 100, v0: 2500 },
  // Pulmonary side — deliberately coarse (single compliance + resistance).
  pulArt: { compliance: 4, v0: 90 },
  pulVein: { compliance: 8, v0: 200 },
  valveResistance: 6e-3,
  pulResistance: 0.08,
  venousReturnResistance: 0.025,
  pulVenousReturnResistance: 0.01,
  // Mirrors KNOB_RANGES.avDelay.default. The knob is the source of truth —
  // `applyKnobsToParams` writes this on every knob change — so do not tune the
  // delay here.
  avDelay: wn.avDelay.default,
  cycleLength: 60 / wn.heartRate.default,
  // 0.8 s at 75 bpm
  totalBloodVolume: 4850,
  dt: 1e-4
  // 0.1 ms RK4 sub-step (PHYSICS.md §8)
}, tE = 0.5;
function nE(s, e, t) {
  if (t <= 0) return 0;
  let n = s - e;
  if (n -= Math.floor(n), n >= t) return 0;
  const i = tE * t;
  return n <= i ? 0.5 * (1 - Math.cos(Math.PI * n / i)) : 0.5 * (1 + Math.cos(Math.PI * (n - i) / (t - i)));
}
function iE(s, e) {
  const t = nE(
    e,
    s.activationStart,
    s.activationDuration
  );
  return {
    elastance: s.eMin + (s.eMax - s.eMin) * t,
    activation: t
  };
}
const th = [
  "LA",
  "LV",
  "SysArt",
  "SysVein",
  "RA",
  "RV",
  "PulArt",
  "PulVein"
], sE = ["LA", "LV", "RA", "RV"], rE = {
  mitral: { up: "LA", down: "LV" },
  aortic: { up: "LV", down: "SysArt" },
  tricuspid: { up: "RA", down: "RV" },
  pulmonary: { up: "RV", down: "PulArt" }
};
function aE(s, e, t) {
  const n = {}, i = {};
  for (const r of sE) {
    const a = e.chambers[r], { elastance: o, activation: l } = iE(a, t);
    n[r] = l, i[r] = o * (s[r] - a.v0);
  }
  return i.SysArt = (s.SysArt - e.sysArt.v0) / e.sysArt.ca, i.SysVein = (s.SysVein - e.sysVein.v0) / e.sysVein.compliance, i.PulArt = (s.PulArt - e.pulArt.v0) / e.pulArt.compliance, i.PulVein = (s.PulVein - e.pulVein.v0) / e.pulVein.compliance, { pressures: i, activation: n };
}
function oE(s, e, t) {
  const n = s - e;
  return n > 0 ? n / t : 0;
}
function lE(s, e) {
  const t = {}, n = {};
  for (const i of ["mitral", "aortic", "tricuspid", "pulmonary"]) {
    const { up: r, down: a } = rE[i], o = i === "aortic" ? e.sysArt.zc : 0, l = oE(s[r], s[a], e.valveResistance + o);
    t[i] = l, n[i] = l > 0;
  }
  return { valveFlow: t, valveOpen: n };
}
function La(s, e, t) {
  const { pressures: n, activation: i } = aE(s, e, t), { valveFlow: r, valveOpen: a } = lE(n, e);
  return { pressures: n, activation: i, valveFlow: r, valveOpen: a };
}
function ga(s, e, t) {
  const { pressures: n, valveFlow: i } = La(s, e, t), r = (n.SysArt - n.SysVein) / e.sysArt.rSys, a = (n.SysVein - n.RA) / e.venousReturnResistance, o = (n.PulArt - n.PulVein) / e.pulResistance, l = (n.PulVein - n.LA) / e.pulVenousReturnResistance;
  return {
    LA: l - i.mitral,
    LV: i.mitral - i.aortic,
    SysArt: i.aortic - r,
    SysVein: r - a,
    RA: a - i.tricuspid,
    RV: i.tricuspid - i.pulmonary,
    PulArt: i.pulmonary - o,
    PulVein: o - l
  };
}
function Qo(s, e, t) {
  const n = {};
  for (const i of th) n[i] = s[i] + t * e[i];
  return n;
}
function el(s, e, t, n, i) {
  const r = ga(s, e, n), a = ga(Qo(s, r, t / 2), e, n + i / 2), o = ga(Qo(s, a, t / 2), e, n + i / 2), l = ga(Qo(s, o, t), e, n + i), c = {};
  for (const h of th)
    c[h] = s[h] + t / 6 * (r[h] + 2 * a[h] + 2 * o[h] + l[h]);
  return c;
}
const cE = 70, hE = 8e-3, uE = 0.015, dE = 0.095, fE = 0.024, pE = 0.032, mE = 0.144, _E = 0.1;
function Ns(s, e, t) {
  return Math.min(t, Math.max(e, s));
}
function $f(s, e) {
  const t = (l) => l / e, n = t(uE), i = n + t(dE), r = t(s), a = r + t(fE), o = a + t(pE);
  return [
    { landmark: "sa-node", start: 0, end: n },
    { landmark: "atria", start: n, end: i },
    // Zero-length (or negative, clamped) once the delay is shorter than atrial
    // depolarisation: the node no longer holds the impulse at all.
    { landmark: "av-node", start: i, end: Math.max(i, r) },
    { landmark: "septum", start: r, end: a },
    { landmark: "apex", start: a, end: o },
    { landmark: "ventricles", start: o, end: o + t(mE) }
  ];
}
function gE(s, e, t) {
  if (s < e.start) return 0;
  const n = e.end - e.start;
  if (n > 1e-9 && s < e.end) return (s - e.start) / n;
  const i = s - Math.max(e.start, e.end);
  return i >= t ? 0 : 1 - i / t;
}
class vE {
  constructor(e = {}) {
    xe(this, "params");
    xe(this, "knobs");
    xe(this, "volumes");
    xe(this, "time", 0);
    /** The canonical steady-state beat, recorded phase 0 → 1. */
    xe(this, "beat", []);
    xe(this, "events", null);
    xe(this, "metrics", null);
    if (this.params = { ...structuredClone(id), ...structuredClone(e) }, this.knobs = { ...nd }, e.avDelay !== void 0) {
      const t = wn.avDelay;
      this.knobs.avDelay = Ns(e.avDelay, t.min, t.max);
    }
    this.applyKnobsToParams(), this.volumes = this.initialVolumes();
  }
  // ---- Configuration -------------------------------------------------------
  getParams() {
    return this.params;
  }
  getKnobs() {
    return this.knobs;
  }
  /**
   * The conduction path's landmark windows for the current operating point, as
   * cycle phases.
   *
   * Exposed so that Section 5's ECG can place its P wave and QRS complex on the
   * engine's OWN timings rather than re-deriving them. An ECG that hand-keyed
   * where the QRS goes would drift out of agreement with the muscle the moment
   * the reader touched the AV-delay knob — which is precisely the class of bug
   * this schedule was made derived to kill. Timing lives in one place.
   */
  getConductionSchedule() {
    return $f(this.params.avDelay, this.params.cycleLength);
  }
  /**
   * Update one or more knobs, each clamped to its physiological range
   * (PHYSICS.md §6), then map onto parameters. Invalidates the cached solve.
   */
  setKnobs(e) {
    for (const t of Object.keys(e)) {
      const n = e[t];
      if (n === void 0) continue;
      const i = wn[t];
      this.knobs[t] = Ns(n, i.min, i.max);
    }
    this.applyKnobsToParams(), this.invalidate();
  }
  applyKnobsToParams() {
    const e = this.params;
    e.chambers.LV.eMax = this.knobs.contractility, e.sysArt.rSys = this.knobs.afterload, e.cycleLength = 60 / this.knobs.heartRate, e.avDelay = this.knobs.avDelay;
    const t = e.avDelay / e.cycleLength;
    e.chambers.LV.activationStart = t, e.chambers.RV.activationStart = t, e.totalBloodVolume = id.totalBloodVolume + cE * (this.knobs.preload - nd.preload);
  }
  // ---- Simulation ----------------------------------------------------------
  /** Reset integrator state: fresh volume distribution, phase 0. */
  reset() {
    this.volumes = this.initialVolumes(), this.time = 0;
  }
  /** Advance real time by `dtSeconds`, RK4-substepping at the internal dt. */
  step(e) {
    const t = this.params, n = t.cycleLength, i = Math.max(1, Math.round(e / t.dt)), r = e / i, a = r / n;
    for (let o = 0; o < i; o++) {
      const l = this.time / n % 1;
      this.volumes = el(this.volumes, t, r, l, a), this.time += r;
    }
  }
  /** Instantaneous state at the current time (live path). */
  getState() {
    this.ensureSolved();
    const e = this.time / this.params.cycleLength % 1;
    return this.buildState(this.volumes, e);
  }
  /** Steady-state snapshot at normalized cycle phase (scrub path). */
  sample(e) {
    this.ensureSolved();
    const t = e - Math.floor(e), n = this.recordAt(t);
    return this.buildState(n.volumes, t);
  }
  /**
   * Integrate to a periodic steady state at the current operating point, then
   * record the canonical beat and derive its events + metrics.
   */
  runToSteadyState(e = {}) {
    const t = e.maxBeats ?? 80, n = e.tolerance ?? 0.02, i = this.params, r = i.cycleLength, a = Math.max(1, Math.round(r / i.dt)), o = r / a, l = 1 / a;
    this.reset();
    let c = 1 / 0, h = 1 / 0;
    for (let u = 0; u < t; u++) {
      let d = 1 / 0, p = -1 / 0;
      for (let g = 0; g < a; g++)
        this.volumes = el(this.volumes, i, o, g * l, l), this.volumes.LV < d && (d = this.volumes.LV), this.volumes.LV > p && (p = this.volumes.LV);
      if (Math.abs(p - c) < n && Math.abs(d - h) < n)
        break;
      c = p, h = d;
    }
    this.recordBeat(a, o, l), this.events = this.computeEvents(), this.metrics = this.computeMetrics(), this.time = 0;
  }
  getCycleMetrics() {
    return this.ensureSolved(), this.metrics;
  }
  getEvents() {
    return this.ensureSolved(), this.events;
  }
  // ---- Internals -----------------------------------------------------------
  ensureSolved() {
    (this.beat.length === 0 || this.events === null || this.metrics === null) && this.runToSteadyState();
  }
  invalidate() {
    this.beat = [], this.events = null, this.metrics = null;
  }
  /** Initial volume distribution summing exactly to total blood volume. */
  initialVolumes() {
    const e = this.params, t = {
      LA: 50,
      LV: 120,
      SysArt: e.sysArt.v0 + 150,
      SysVein: 0,
      RA: 50,
      RV: 120,
      PulArt: e.pulArt.v0 + 60,
      PulVein: e.pulVein.v0 + 60
    };
    let n = 0;
    for (const i of th) i !== "SysVein" && (n += t[i]);
    return t.SysVein = e.totalBloodVolume - n, t;
  }
  /** Integrate one beat from the converged state, storing ~1000 snapshots. */
  recordBeat(e, t, n) {
    const i = this.params, r = Math.max(1, Math.floor(e / 1e3));
    this.beat = [];
    let a = this.volumes;
    for (let o = 0; o < e; o++) {
      const l = o / e;
      o % r === 0 && this.beat.push({ phase: l, volumes: { ...a } }), a = el(a, i, t, l, n);
    }
    this.volumes = a;
  }
  /** Nearest recorded snapshot to `phase` (0 → 1). */
  recordAt(e) {
    const t = this.beat.length, n = Ns(Math.round(e * t), 0, t - 1);
    return this.beat[n] ?? { phase: e, volumes: this.volumes };
  }
  computeEvents() {
    const e = {};
    for (const i of ["mitral", "aortic", "tricuspid", "pulmonary"])
      e[i] = { open: 0, close: 0 };
    const t = {
      mitral: { open: !1, close: !1 },
      aortic: { open: !1, close: !1 },
      tricuspid: { open: !1, close: !1 },
      pulmonary: { open: !1, close: !1 }
    };
    let n = null;
    for (const i of this.beat) {
      const { valveOpen: r } = La(i.volumes, this.params, i.phase);
      if (n)
        for (const a of ["mitral", "aortic", "tricuspid", "pulmonary"])
          !n[a] && r[a] && !t[a].open && (e[a].open = i.phase, t[a].open = !0), n[a] && !r[a] && !t[a].close && (e[a].close = i.phase, t[a].close = !0);
      n = { ...r };
    }
    return {
      valve: e,
      s1Phase: e.mitral.close,
      // AV-valve closure ("lub")
      s2Phase: e.aortic.close,
      // semilunar closure ("dub")
      phaseStart: {
        "atrial-systole": 0,
        "isovolumetric-contraction": e.mitral.close,
        ejection: e.aortic.open,
        "isovolumetric-relaxation": e.aortic.close,
        filling: e.mitral.open
      }
    };
  }
  computeMetrics() {
    const e = this.params.cycleLength;
    let t = 1 / 0, n = -1 / 0, i = -1 / 0, r = -1 / 0, a = 1 / 0, o = -1 / 0, l = -1 / 0, c = 1 / 0, h = 0, u = 0;
    for (const m of this.beat) {
      const { pressures: x } = La(m.volumes, this.params, m.phase), y = m.volumes.LV;
      y < t && (t = y), y > n && (n = y), x.LV > i && (i = x.LV), x.SysArt > r && (r = x.SysArt), x.SysArt < a && (a = x.SysArt), x.RV > o && (o = x.RV), x.PulArt > l && (l = x.PulArt), x.PulArt < c && (c = x.PulArt), h += x.LA, u += x.RA;
    }
    const d = this.beat.length || 1, p = n, g = t, _ = p - g, f = 60 / e;
    return {
      edv: p,
      esv: g,
      strokeVolume: _,
      ejectionFraction: _ / p,
      peakLVPressure: i,
      aorticSystolic: r,
      aorticDiastolic: a,
      meanLAPressure: h / d,
      peakRVPressure: o,
      pulmonarySystolic: l,
      pulmonaryDiastolic: c,
      meanRAPressure: u / d,
      heartRateBpm: f,
      cycleLengthSeconds: e,
      cardiacOutput: _ * f / 1e3
    };
  }
  /** Assemble a full EngineState frame from raw volumes at a cycle phase. */
  buildState(e, t) {
    const { pressures: n, activation: i, valveFlow: r, valveOpen: a } = La(
      e,
      this.params,
      t
    ), o = {};
    for (const c of ["mitral", "aortic", "tricuspid", "pulmonary"])
      o[c] = {
        open: a[c],
        openFraction: a[c] ? 1 : 0,
        flow: r[c]
      };
    const l = this.events;
    return {
      time: this.time,
      cyclePhase: t,
      phase: this.classifyPhase(t, l, a),
      volumes: { ...e },
      pressures: n,
      valves: o,
      activation: i,
      electricalWave: xE(t, this.params.avDelay, this.params.cycleLength),
      markers: {
        s1: sd(t, l.s1Phase),
        s2: sd(t, l.s2Phase)
      }
    };
  }
  /**
   * Classify the phase from the *actual* left-valve state (so the label always
   * agrees with the reported valve booleans), using the aortic-open event only
   * to tell the pre-ejection sealed phase from the post-ejection one.
   */
  classifyPhase(e, t, n) {
    const i = e < t.valve.aortic.open;
    return n.aortic ? "ejection" : n.mitral ? i ? "atrial-systole" : "filling" : i ? "isovolumetric-contraction" : "isovolumetric-relaxation";
  }
}
function sd(s, e) {
  let t = Math.abs(s - e);
  return t = Math.min(t, 1 - t), t <= hE;
}
function xE(s, e, t) {
  const n = $f(e, t), i = _E / t, r = n.length, a = {};
  let o = 0;
  for (let u = 0; u < r; u++) {
    const d = n[u];
    a[d.landmark] = Ns(gE(s, d, i), 0, 1), s >= d.start && (o = u);
  }
  const l = n[o], c = l.end - l.start, h = c > 1e-9 ? Ns((s - l.start) / c, 0, 1) : 1;
  return {
    progress: Ns((o + h) / r, 0, 1),
    landmark: l.landmark,
    segmentProgress: h,
    levels: a
  };
}
class yE {
  constructor(e) {
    xe(this, "engine");
    xe(this, "phase", 0);
    xe(this, "listeners", /* @__PURE__ */ new Set());
    this.engine = e;
  }
  /** Current normalized position in the beat, 0 → 1. */
  getPhase() {
    return this.phase;
  }
  /** Set the position; wraps into [0, 1) so scrubbing past the end loops. */
  setPhase(e) {
    this.phase = (e % 1 + 1) % 1, this.emit();
  }
  /** The engine frame at the current phase (the "clock frame"). */
  sample() {
    return this.engine.sample(this.phase);
  }
  getEvents() {
    return this.engine.getEvents();
  }
  getMetrics() {
    return this.engine.getCycleMetrics();
  }
  getEngine() {
    return this.engine;
  }
  /**
   * Re-solve the engine after a parameter/knob change, then notify listeners so
   * every bound view refreshes together. Keeps the current phase.
   */
  resolve() {
    this.engine.runToSteadyState(), this.emit();
  }
  /** Subscribe to phase changes; fires immediately with the current phase. */
  subscribe(e) {
    return this.listeners.add(e), e(this.phase), () => this.listeners.delete(e);
  }
  emit() {
    for (const e of this.listeners) e(this.phase);
  }
}
const ME = "#54e6b0", SE = "#ff6a58", tl = "http://www.w3.org/2000/svg";
class EE {
  constructor(e, t, n = {}) {
    xe(this, "scene");
    xe(this, "frame");
    xe(this, "dom");
    xe(this, "svg");
    xe(this, "labels", /* @__PURE__ */ new Map());
    xe(this, "projected", new P());
    xe(this, "unframe", null);
    xe(this, "visible", !1);
    xe(this, "showAt", 0);
    xe(this, "bounds");
    this.scene = e, this.frame = n.frame ?? null, this.bounds = n.bounds ?? {}, this.dom = document.createElement("div"), this.dom.className = "valve-label-layer", this.dom.style.cssText = "position:fixed;inset:0;pointer-events:none;z-index:6;display:none", document.body.appendChild(this.dom), this.svg = document.createElementNS(tl, "svg"), this.svg.setAttribute("width", "100%"), this.svg.setAttribute("height", "100%"), this.svg.style.cssText = "position:absolute;inset:0;overflow:visible;pointer-events:none", this.dom.appendChild(this.svg);
    for (const i of t) {
      const r = document.createElement("div");
      r.style.cssText = "position:absolute;transform:translate(-50%,-50%);white-space:nowrap;will-change:left,top,opacity;transition:opacity .25s ease";
      const a = document.createElement("div");
      a.style.cssText = `display:inline-block;padding:6px 11px 7px;border-radius:9px;background:rgba(10,7,6,.66);backdrop-filter:blur(3px);border:1px solid ${i.accent}66;box-shadow:0 4px 16px rgba(0,0,0,.55)`;
      const o = document.createElement("div");
      o.style.cssText = "display:flex;align-items:center;gap:7px";
      const l = document.createElement("span");
      l.style.cssText = `flex:0 0 auto;width:8px;height:8px;border-radius:50%;background:${i.accent};box-shadow:0 0 9px ${i.accent}`;
      const c = document.createElement("span");
      c.style.cssText = "color:#f7f1ea;font:600 14px/1.15 var(--font-display,Georgia,serif);letter-spacing:.01em", c.textContent = i.name, o.append(l, c);
      const h = document.createElement("div");
      h.style.cssText = "margin-top:3px;display:flex;align-items:baseline;gap:7px;font:600 11px/1.3 var(--font-body,sans-serif);letter-spacing:.06em";
      const u = document.createElement("span"), d = document.createElement("span");
      d.style.cssText = "color:#f7f1ea;opacity:.68;font-weight:400;letter-spacing:.02em", h.append(u, d);
      const p = document.createElement("div");
      p.style.cssText = "margin-top:5px;max-width:23ch;white-space:normal;color:#f7f1ea;opacity:.8;font:400 11.5px/1.42 var(--font-body,sans-serif);display:none", p.textContent = i.mechanism, a.append(o, h, p), r.appendChild(a), this.dom.appendChild(r);
      const g = document.createElementNS(tl, "line");
      g.setAttribute("stroke", i.accent), g.setAttribute("stroke-width", "1"), g.setAttribute("stroke-dasharray", "3 3"), this.svg.appendChild(g);
      const _ = document.createElementNS(tl, "circle");
      _.setAttribute("r", "3.5"), _.setAttribute("fill", "none"), _.setAttribute("stroke", i.accent), _.setAttribute("stroke-width", "1.5"), this.svg.appendChild(_), this.labels.set(i.key, {
        spec: i,
        point: new P(...i.point),
        el: r,
        stateEl: u,
        loadEl: d,
        mechEl: p,
        leader: g,
        pin: _,
        emphasis: "dim"
      });
    }
  }
  /**
   * Set one valve's live readout. Called per frame by the section from the
   * solver — never from a timer, so the chip flips exactly when the diode does.
   */
  setState(e, t) {
    const n = this.labels.get(e);
    n && (n.stateEl.textContent = t.open ? "▸ OPEN" : "■ SHUT", n.stateEl.style.color = t.open ? ME : SE, n.loadEl.textContent = t.open ? "" : `holding ${t.loadMmHg.toFixed(0)} mmHg`);
  }
  /**
   * Which valve is being studied. `null` shows all four, equally weighted. Otherwise
   * the studied valve goes `full` (mechanism text and all), its declared counterpart
   * stays `dim` for the comparison, and the remaining two hide so they cannot crowd
   * a pushed-in framing.
   */
  setEmphasis(e) {
    var n;
    const t = e === null ? null : ((n = this.labels.get(e)) == null ? void 0 : n.spec.counterpart) ?? null;
    for (const [i, r] of this.labels) {
      const a = e === null ? "dim" : i === e ? "full" : i === t ? "dim" : "hidden";
      r.emphasis = a, r.mechEl.style.display = a === "full" ? "block" : "none";
    }
  }
  show() {
    this.visible || (this.visible = !0, this.showAt = performance.now(), this.dom.style.display = "block", this.unframe = this.scene.onFrame(() => this.update()), this.update());
  }
  hide() {
    var e;
    this.visible && (this.visible = !1, this.dom.style.display = "none", (e = this.unframe) == null || e.call(this), this.unframe = null);
  }
  /** Project every anchor and place its tag + leader. Runs per frame while shown. */
  update() {
    const e = qt.clamp((performance.now() - this.showAt) / 600, 0, 1), t = this.scene.camera, n = this.scene.renderer.domElement.getBoundingClientRect(), i = (u) => (this.projected.copy(u), this.frame && this.frame.localToWorld(this.projected), this.projected.project(t), {
      x: n.left + (this.projected.x * 0.5 + 0.5) * n.width,
      y: n.top + (-this.projected.y * 0.5 + 0.5) * n.height,
      behind: this.projected.z > 1
    }), r = 130, a = 60, o = Math.max(n.left + r, this.bounds.left ?? -1 / 0), l = Math.min(n.left + n.width - r, this.bounds.right ?? 1 / 0), c = Math.max(n.top + a, this.bounds.top ?? -1 / 0), h = Math.min(n.top + n.height - a, this.bounds.bottom ?? 1 / 0);
    for (const u of this.labels.values()) {
      const d = i(u.point), p = (u.emphasis === "full" ? 1 : 0.82) * e, g = d.behind || u.emphasis === "hidden";
      if (u.el.style.display = g ? "none" : "block", u.leader.style.display = g ? "none" : "block", u.pin.style.display = g ? "none" : "block", g) continue;
      const _ = {
        x: qt.clamp(d.x + ju(u.spec.offsetPx[0]), o, Math.max(o, l)),
        y: qt.clamp(d.y + ju(u.spec.offsetPx[1]), c, Math.max(c, h))
      };
      u.el.style.opacity = `${p}`, u.el.style.left = `${_.x}px`, u.el.style.top = `${_.y}px`;
      const f = _.x - d.x, m = _.y - d.y, x = Math.hypot(f, m) || 1, y = Math.max(0, x - 46);
      u.leader.setAttribute("x1", `${d.x}`), u.leader.setAttribute("y1", `${d.y}`), u.leader.setAttribute("x2", `${d.x + f / x * y}`), u.leader.setAttribute("y2", `${d.y + m / x * y}`), u.leader.setAttribute("opacity", `${p * 0.7}`), u.pin.setAttribute("cx", `${d.x}`), u.pin.setAttribute("cy", `${d.y}`), u.pin.setAttribute("opacity", `${p * 0.85}`);
    }
  }
  dispose() {
    this.hide(), this.dom.remove(), this.labels.clear();
  }
}
const TE = (s) => s < 0.5 ? 4 * s * s * s : 1 - Math.pow(-2 * s + 2, 3) / 2;
class bE {
  constructor(e, t) {
    xe(this, "clock");
    xe(this, "opts");
    xe(this, "root");
    xe(this, "sides", []);
    xe(this, "details", []);
    xe(this, "lever");
    xe(this, "index");
    xe(this, "visible", !1);
    /** In-flight throw. `from`/`to` are absolute phases; `span` is always forward. */
    xe(this, "travel", null);
    this.clock = e, this.opts = t, this.index = t.initial ?? 0, this.root = document.createElement("div"), this.root.className = "phase-switch";
    const n = document.createElement("div");
    n.className = "phase-switch-track", this.lever = document.createElement("div"), this.lever.className = "phase-switch-lever", n.appendChild(this.lever), t.positions.forEach((i, r) => {
      const a = document.createElement("button");
      a.type = "button", a.className = "phase-switch-side", a.style.setProperty("--pos-accent", i.color);
      const o = document.createElement("span");
      o.className = "phase-switch-label", o.textContent = i.label;
      const l = document.createElement("span");
      l.className = "phase-switch-detail", l.textContent = i.detail, a.append(o, l), a.addEventListener("click", () => this.throwTo(r)), n.appendChild(a), this.sides.push(a), this.details.push(l);
    }), this.root.appendChild(n), document.body.appendChild(this.root), this.syncFaces();
  }
  /**
   * Throw the switch. Idempotent on the position already held, and re-throwing
   * mid-travel just retargets — a reader flicking it back and forth must never be told
   * to wait.
   */
  throwTo(e) {
    if (e === this.index && !this.travel) return;
    const t = this.clock.getPhase();
    let i = this.wrap(this.opts.positions[e].phase(this.clock)) - t;
    for (; i <= 1e-6; ) i += 1;
    this.index = e, this.travel = {
      from: t,
      span: i,
      t: 0,
      dur: Math.max(0.15, this.opts.throwSeconds ?? 1.15),
      to: e
    }, this.syncFaces();
  }
  /** Which position is held (or being thrown to). */
  getIndex() {
    return this.index;
  }
  /** Drive the in-flight throw. Call from the scene's frame callback. */
  update(e) {
    var n, i;
    const t = this.travel;
    t && (t.t = Math.min(1, t.t + e / t.dur), this.clock.setPhase(t.from + t.span * TE(t.t)), t.t >= 1 && (this.travel = null, (i = (n = this.opts).onSettle) == null || i.call(n, t.to)));
  }
  /**
   * Snap to the held position with no travel. For an entrance, and for headless: a
   * throw cannot complete in the ~13 frames a screenshot gets.
   */
  settleNow() {
    this.travel = null, this.clock.setPhase(this.opts.positions[this.index].phase(this.clock)), this.syncFaces();
  }
  /**
   * Re-read the positions after a re-solve. The phases are functions of the engine's
   * events, so a knob move relocates both of them.
   */
  refresh() {
    this.travel || this.settleNow();
  }
  show() {
    this.visible || (this.visible = !0, this.root.classList.add("is-visible"));
  }
  hide() {
    this.visible && (this.visible = !1, this.root.classList.remove("is-visible"), this.travel = null);
  }
  dispose() {
    this.travel = null, this.root.remove(), this.sides.length = 0, this.details.length = 0;
  }
  wrap(e) {
    return (e % 1 + 1) % 1;
  }
  syncFaces() {
    this.lever.classList.toggle("is-right", this.index === 1), this.lever.style.setProperty("--pos-accent", this.opts.positions[this.index].color), this.sides.forEach((e, t) => e.classList.toggle("is-on", t === this.index));
  }
}
function Jf(s) {
  const e = jf();
  if (Math.abs(e - 1) < 1e-6) return s;
  const t = new P(...s.target), i = new P(...s.position).clone().sub(t).multiplyScalar(e), r = t.clone().add(i);
  return { position: [r.x, r.y, r.z], target: [...s.target] };
}
function AE(s, e, t = {}) {
  const { duration: n = 1.6, onComplete: i, immediate: r = !1 } = t, a = s.camera, o = s.controls, l = Jf(e), [c, h, u] = l.position, [d, p, g] = l.target;
  if (r)
    return a.position.set(c, h, u), o.target.set(d, p, g), o.update(), i == null || i(), null;
  o.enabled = !1;
  const _ = {
    px: a.position.x,
    py: a.position.y,
    pz: a.position.z,
    tx: o.target.x,
    ty: o.target.y,
    tz: o.target.z
  };
  return Ji.to(_, {
    px: c,
    py: h,
    pz: u,
    tx: d,
    ty: p,
    tz: g,
    duration: n,
    ease: "power2.inOut",
    overwrite: !0,
    onUpdate() {
      a.position.set(_.px, _.py, _.pz), o.target.set(_.tx, _.ty, _.tz), o.update();
    },
    onComplete() {
      o.enabled = !0, i == null || i();
    }
  });
}
const ys = { position: [1.604, 0.192, 1.817], target: [-0.122, -0.66, 0.383] }, rd = 1, wE = {
  anchor: [5e-3, -0.3, -0.014],
  radius: 0.55,
  strength: 0.55
}, RE = 1.8, CE = 2, PE = 480, LE = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, ""), DE = {
  aorticvalve: "aortic",
  pulmonaryvalve: "pulmonary",
  mitralvalve: "mitral",
  tricuspidvalve: "tricuspid"
}, nl = {
  aortic: [-0.022, -0.204, -0.039],
  pulmonary: [0.174, 0.015, 0.22],
  mitral: [0.146, -0.543, -0.269],
  tricuspid: [-0.204, -0.615, 0.167]
}, ad = "#ff5a4d", od = "#7fa8ff", IE = [
  {
    key: "mitral",
    counterpart: "aortic",
    name: "Mitral valve",
    mechanism: "Two big leaflets, tethered. Cords (chordae) tie their free edges down to the ventricle wall, so pressure cannot blow them inside out.",
    point: [0.23, -0.64, -0.04],
    offsetPx: [330, 40],
    accent: ad
  },
  {
    key: "aortic",
    counterpart: "mitral",
    name: "Aortic valve",
    mechanism: "Three cusps, untethered. Backflow catches in their pockets and presses them together. The harder it pushes back, the tighter they seal.",
    point: [0.1, -0.33, 0.12],
    offsetPx: [360, -150],
    accent: ad
  },
  {
    key: "tricuspid",
    counterpart: "pulmonary",
    name: "Tricuspid valve",
    mechanism: "The same tethered design as the mitral, on the right. Three leaflets instead of two, holding back a far gentler pressure.",
    point: [-0.08, -0.71, 0.35],
    offsetPx: [-300, 90],
    accent: od
  },
  {
    key: "pulmonary",
    counterpart: "tricuspid",
    name: "Pulmonary valve",
    mechanism: "The same three-cusp design as the aortic, on the right. The low-pressure exit door out to the lungs.",
    point: [0.31, -0.1, 0.38],
    offsetPx: [-330, -70],
    accent: od
  }
], va = "Throw the switch and watch the two pairs trade places. Click any valve to study it.", NE = {
  label: "The way in",
  detail: "mitral + tricuspid",
  color: "#5fd6c0",
  phase: (s) => {
    const e = s.getEvents().phaseStart, t = e.filling, n = e["isovolumetric-contraction"] + 1;
    return t + 0.5 * (n - t);
  }
}, UE = {
  label: "The way out",
  detail: "aortic + pulmonary",
  color: "#ffd24a",
  phase: (s) => {
    const e = s.getEvents().phaseStart;
    return e.ejection + 0.5 * (e["isovolumetric-relaxation"] - e.ejection);
  }
};
function OE() {
  let s = null, e = null, t = null, n = null, i = !1;
  const r = [];
  let a = [];
  const o = (b) => {
    for (const w of a) w.visible = b;
  };
  let l = null, c = null;
  const h = { mitral: 0, aortic: 0, tricuspid: 0, pulmonary: 0 }, u = (b) => ({
    mitral: b.pressures.LV - b.pressures.LA,
    tricuspid: b.pressures.RV - b.pressures.RA,
    aortic: b.pressures.SysArt - b.pressures.LV,
    pulmonary: b.pressures.PulArt - b.pressures.RV
  }), d = (b) => {
    const w = b.clock.getEngine();
    for (const R of Object.keys(h)) h[R] = 0;
    const E = 240;
    for (let R = 0; R < E; R++) {
      const L = w.sample(R / E), v = u(L);
      for (const T of Object.keys(h))
        !L.valves[T].open && v[T] > h[T] && (h[T] = v[T]);
    }
  };
  let p = null, g = null, _ = null;
  const f = () => `The shut mitral holds back ${h.mitral.toFixed(0)} mmHg. The shut aortic holds back ${h.aortic.toFixed(0)}. Near-identical loads, solved two completely different ways.`, m = (b) => {
    const w = new P(...nl[b]), E = new P(...ys.position).sub(new P(...ys.target)).normalize(), R = w.clone().addScaledVector(E, CE);
    return { position: [R.x, R.y, R.z], target: [w.x, w.y, w.z] };
  }, x = (b, w) => {
    c = b, s == null || s.setEmphasis(b), _ && (_.style.display = b ? "inline-block" : "none"), p && (p.textContent = b ? "Turn the dial and watch just this one. The chip reads what the pressure across it is doing." : va), AE(w.scene, b ? m(b) : ys, { duration: 1.1 });
  }, y = (b) => {
    const w = b.scene.renderer.domElement, E = new uy(), R = new Me();
    let L = 0, v = 0, T = 0;
    const F = (G) => {
      L = G.clientX, v = G.clientY, T = performance.now();
    }, O = (G) => {
      if (!i || Math.hypot(G.clientX - L, G.clientY - v) > 5 || performance.now() - T > 500) return;
      const q = w.getBoundingClientRect();
      R.set(
        (G.clientX - q.left) / q.width * 2 - 1,
        -((G.clientY - q.top) / q.height) * 2 + 1
      ), E.setFromCamera(R, b.scene.camera);
      const X = E.intersectObjects(
        r.filter((te) => te.mesh.visible).map((te) => te.mesh),
        !1
      )[0];
      if (!X) return;
      const H = r.find((te) => te.mesh === X.object);
      H && x(H.valve === c ? null : H.valve, b);
    };
    w.addEventListener("pointerdown", F), w.addEventListener("pointerup", O), n = () => {
      w.removeEventListener("pointerdown", F), w.removeEventListener("pointerup", O);
    };
  }, M = (b) => {
    const w = b.panel.querySelector(".section-extra");
    if (!w || w.querySelector(".valves-controls")) return;
    const E = document.createElement("div");
    E.className = "valves-controls keystone-controls", p = document.createElement("p"), p.className = "keystone-hint", p.textContent = va, g = document.createElement("p"), g.className = "keystone-hint", g.style.opacity = "0.85", g.textContent = f(), _ = document.createElement("button"), _.className = "keystone-toggle", _.type = "button", _.textContent = "◂  Show all four", _.style.display = "none", _.addEventListener("click", () => x(null, b)), E.append(p, g, _), w.appendChild(E);
  };
  return {
    id: "valve-plane",
    title: "The four valves",
    // The last clause used to be "— and the heart solves that one problem two
    // entirely different ways", which is SPEC §3's *Aha* and is also what
    // `compareText()` already delivers live, with the two real mmHg loads in it.
    // The copy names the oddity and stops.
    //
    // ⚠️ THE `more` DELIBERATELY DOES NOT SAY "the same load". That is the reframed
    // thesis (HANDOFF: mitral 116 vs aortic 104 mmHg, a DESIGN contrast rather than a
    // load contrast) and `compareText()` states it live with the measured numbers in it.
    blurb: "Four one-way doors, and not one of them has a motor. Pressure alone pushes each one open and slams it shut.",
    more: [
      "Two of the four guard the way in. Two guard the way out. They are not built the same way at all.",
      "Cords, pockets, two leaflets or three. Click a valve and it will tell you which, and what it is holding back."
    ],
    framing: { position: [...ys.position], target: [...ys.target] },
    cutaway: rd,
    focus: wE,
    init: (b) => {
      const w = b.scene.getHeart();
      w && w.traverse((E) => {
        const R = E;
        if (!R.isMesh) return;
        const L = LE(R.name), v = DE[L];
        v && r.push({ mesh: R, valve: v }), L === "atria" && a.push(R);
      }), s = new EE(b.scene, IE, {
        frame: b.scene.getHeartFrame(),
        bounds: { left: PE }
      }), e = new bE(b.clock, {
        positions: [NE, UE],
        initial: 0,
        onSettle: () => {
          p && !c && (p.textContent = va);
        }
      }), d(b), M(b), y(b), t = b.scene.onFrame((E) => {
        if (!i || (e == null || e.update(E), !s)) return;
        const R = b.clock.sample(), L = u(R);
        for (const v of Object.keys(nl))
          s.setState(v, { open: R.valves[v].open, loadMmHg: Math.max(0, L[v]) });
      });
    },
    enter: (b) => {
      var T;
      const { scene: w, panel: E } = b, R = new URLSearchParams(window.location.search), L = R.get("intro") === "0";
      E.classList.add("is-active"), document.body.classList.add("keystone-active"), i = !0, d(b), g && (g.textContent = f()), o(!1), l === null && (l = w.controls.minDistance, w.controls.minDistance = lc(RE)), c = null, s == null || s.setEmphasis(null), _ && (_.style.display = "none"), p && (p.textContent = va), s == null || s.show();
      const v = R.get("valve");
      if (v && v in nl && (c = v, s == null || s.setEmphasis(c), _ && (_.style.display = "inline-block")), e && (e.throwTo(R.get("valveswitch") === "out" ? 1 : 0), e.settleNow(), e.show()), (T = w.getCutaway()) == null || T.set(rd, { animate: !L }), L) {
        const F = c ? m(c) : ys;
        {
          const O = Jf(F);
          w.camera.position.set(...O.position), w.controls.target.set(...O.target);
        }
        w.controls.enabled = !0, w.controls.update();
      }
    },
    exit: (b) => {
      var w;
      i = !1, b.panel.classList.remove("is-active"), document.body.classList.remove("keystone-active"), s == null || s.hide(), e == null || e.hide(), o(!0), l !== null && (b.scene.controls.minDistance = l, l = null), (w = b.scene.getCutaway()) == null || w.set(0, { animate: !0 });
    },
    dispose: (b) => {
      i = !1, t == null || t(), t = null, n == null || n(), n = null, s == null || s.dispose(), s = null, e == null || e.dispose(), e = null, o(!0), a = [], r.length = 0, l !== null && (b.scene.controls.minDistance = l, l = null);
    }
  };
}
const Ms = document.querySelector("#scene"), ld = document.querySelector("#section-valve-plane"), uc = (s) => parent.postMessage({ type: "alma-preview", state: s }, location.origin), fr = matchMedia("(prefers-reduced-motion: reduce)");
let Pe = null, Qf = !1;
function ep() {
  document.body.dataset.state = "error", Pe == null || Pe.stop(), uc("error");
}
function nh() {
  Pe && (document.hidden || Qf ? Pe.stop() : Pe.start());
}
async function FE() {
  var g, _;
  nS(), Pe = new qS(Ms), Pe.renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5)), Pe.controls.enableDamping = !fr.matches;
  const s = new vE();
  s.runToSteadyState();
  const e = new yE(s);
  if (await Pe.ready, Pe.usingPlaceholder) throw new Error("Alma anatomy could not load");
  const t = Pe.getHeart(), n = eE(t, e);
  Pe.setWallInfluence(() => n.sampleInfluence() ?? 0);
  const i = OE(), r = { scene: Pe, clock: e, panel: ld }, a = Pe.onFrame.bind(Pe);
  Pe.onFrame = (f) => a((m) => f(fr.matches ? 2 : m));
  const o = () => {
    Pe.controls.enableDamping = !fr.matches, Ji.globalTimeline.timeScale(fr.matches ? 1e3 : 1);
  };
  o(), fr.addEventListener("change", o), (g = i.init) == null || g.call(i, r), (_ = i.enter) == null || _.call(i, r);
  const l = new P(...i.framing.position).sub(new P(...i.framing.target)).normalize();
  function c() {
    if (!Pe) return;
    for (const y of Ji.globalTimeline.getChildren(!1, !0, !1))
      y instanceof Ji.core.Tween && y.targets().some((M) => M && typeof M == "object" && "px" in M && "tx" in M) && y.kill();
    Pe.controls.enabled = !0;
    const f = innerWidth < 900, m = f ? new P(5e-3, -0.52, 0.05) : new P(...i.framing.target), x = f ? Math.max(2.65, 2.3 / Pe.camera.aspect) : 2.6;
    Pe.controls.target.copy(m), Pe.camera.position.copy(m).addScaledVector(l, x), Pe.controls.minDistance = 1.25, Pe.controls.maxDistance = 7, Pe.controls.update();
  }
  c();
  const h = () => {
    var f;
    (f = ld.querySelector(".keystone-toggle")) == null || f.click(), c();
  }, u = (f) => {
    const m = Pe.camera.position.clone().sub(Pe.controls.target), x = qt.clamp(m.length() * f, 1.25, 7);
    Pe.camera.position.copy(Pe.controls.target).addScaledVector(m.normalize(), x), Pe.controls.update();
  };
  document.querySelector("#zoom-in").addEventListener("click", () => u(0.85)), document.querySelector("#zoom-out").addEventListener("click", () => u(1.18)), document.querySelector("#reset-view").addEventListener("click", h), Ms.addEventListener("keydown", (f) => {
    if (f.key === "Escape") {
      uc("leave");
      return;
    }
    if (f.key === "Home") {
      f.preventDefault(), h();
      return;
    }
    if (f.key === "+" || f.key === "=") {
      f.preventDefault(), u(0.85);
      return;
    }
    if (f.key === "-") {
      f.preventDefault(), u(1.18);
      return;
    }
    if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(f.key)) return;
    f.preventDefault();
    const m = new Yl().setFromVector3(Pe.camera.position.clone().sub(Pe.controls.target));
    m.theta += f.key === "ArrowLeft" ? 0.12 : f.key === "ArrowRight" ? -0.12 : 0, m.phi = qt.clamp(m.phi + (f.key === "ArrowUp" ? -0.1 : f.key === "ArrowDown" ? 0.1 : 0), 0.15, Math.PI - 0.15), Pe.camera.position.copy(Pe.controls.target).add(new P().setFromSpherical(m)), Pe.controls.update();
  }), Ms.addEventListener("pointerdown", () => Ms.focus({ preventScroll: !0 })), window.addEventListener("resize", c);
  const d = ["pulmonary", "aortic", "tricuspid", "mitral"];
  let p = "";
  Pe.onFrame(() => {
    const f = e.sample(), m = d.map((x) => f.valves[x].open ? "open" : "shut").join(",");
    if (m !== p) {
      p = m;
      for (const x of d) {
        const y = document.querySelector('[data-valve="' + x + '"]');
        y.dataset.open = String(f.valves[x].open), y.querySelector("span").textContent = f.valves[x].open ? "Open" : "Shut";
      }
    }
  }), window.almaPreview = { capture: () => (Pe.renderer.render(Pe.scene, Pe.camera), Ms.toDataURL("image/webp", 0.85)) }, nh(), requestAnimationFrame(() => requestAnimationFrame(() => {
    document.body.dataset.state = "ready", uc("ready");
  })), window.addEventListener("pagehide", () => {
    var f;
    (f = i.dispose) == null || f.call(i, r), n.unsubscribe(), Pe == null || Pe.dispose();
  }, { once: !0 });
}
window.addEventListener("message", (s) => {
  var e;
  s.origin !== location.origin || s.source !== parent || ((e = s.data) == null ? void 0 : e.type) !== "alma-preview-control" || (Qf = s.data.paused === !0, nh());
});
document.addEventListener("visibilitychange", nh);
Ms.addEventListener("webglcontextlost", (s) => {
  s.preventDefault(), ep();
});
FE().catch(ep);
