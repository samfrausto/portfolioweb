#!/bin/bash
# Generates all project pages

generate_page() {
  local file=$1
  local title=$2
  local cat=$3
  local status=$4
  local status_class=$5
  local role=$6
  local tools=$7
  local desc_long=$8
  local highlights=$9

cat > "/home/claude/portfolio/projects/${file}" << HTMLEOF
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title} — Samuel Frausto</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Instrument+Serif:ital@0;1&family=DM+Mono:wght@300;400&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../style.css">
<style>
.project-hero{padding:8rem 2.5rem 3rem;max-width:1200px;margin:0 auto}
.back-link{display:inline-flex;align-items:center;gap:8px;font-family:var(--mono);font-size:.68rem;color:var(--muted);text-decoration:none;letter-spacing:.06em;text-transform:uppercase;margin-bottom:2.5rem;transition:color .2s}
.back-link:hover{color:var(--coral)}
.back-link::before{content:'←';font-size:.9rem}
.project-eyebrow{font-family:var(--mono);font-size:.68rem;color:var(--coral);letter-spacing:.1em;text-transform:uppercase;margin-bottom:1rem;display:flex;align-items:center;gap:10px}
.project-eyebrow::before{content:'';display:block;width:20px;height:1px;background:var(--coral)}
.project-title{font-size:clamp(2.5rem,6vw,5rem);font-weight:800;line-height:1.0;letter-spacing:-.03em;color:var(--text);margin-bottom:1.5rem}
.project-title em{font-family:var(--serif);font-style:italic;font-weight:400;color:var(--muted)}
.project-meta{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:0}

.project-body{display:grid;grid-template-columns:1fr 320px;gap:0;max-width:1200px;margin:0 auto;border-top:1px solid var(--border)}

/* MEDIA COLUMN */
.media-col{padding:2.5rem 2.5rem 5rem;border-right:1px solid var(--border)}
.media-upload-zone{background:var(--surface);border:1.5px dashed var(--border2);border-radius:var(--r-lg);padding:3rem 2rem;text-align:center;cursor:none;transition:border-color .2s,background .2s;margin-bottom:16px;position:relative;overflow:hidden}
.media-upload-zone:hover{border-color:var(--coral-mid);background:var(--coral-dim)}
.upload-icon{font-size:2rem;margin-bottom:.75rem;opacity:.5}
.upload-label{font-family:var(--mono);font-size:.7rem;color:var(--dim);letter-spacing:.08em;text-transform:uppercase;margin-bottom:.25rem}
.upload-sub{font-size:.72rem;color:var(--dim)}
.upload-input{position:absolute;inset:0;opacity:0;cursor:pointer;width:100%;height:100%}
.media-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.media-item{background:var(--surface);border-radius:var(--r);overflow:hidden;position:relative;border:1px solid var(--border);aspect-ratio:16/10}
.media-item img,.media-item video{width:100%;height:100%;object-fit:cover;display:block}
.media-item .remove-btn{position:absolute;top:8px;right:8px;background:rgba(13,13,15,.8);border:1px solid var(--border2);color:var(--muted);border-radius:99px;font-size:.65rem;padding:3px 9px;cursor:pointer;font-family:var(--mono);transition:all .15s;display:none}
.media-item:hover .remove-btn{display:block}
.media-item .remove-btn:hover{background:var(--coral);color:white;border-color:var(--coral)}
.media-placeholder{display:flex;align-items:center;justify-content:center;height:100%;color:var(--dim);font-family:var(--mono);font-size:.65rem;letter-spacing:.06em;text-transform:uppercase}

/* SIDEBAR */
.sidebar{padding:2.5rem 2rem 5rem;position:sticky;top:5rem;align-self:start}
.sidebar-section{margin-bottom:2rem;padding-bottom:2rem;border-bottom:1px solid var(--border)}
.sidebar-section:last-child{border-bottom:none;margin-bottom:0}
.sidebar-label{font-family:var(--mono);font-size:.62rem;color:var(--dim);letter-spacing:.1em;text-transform:uppercase;margin-bottom:.75rem}
.sidebar-value{font-size:.85rem;color:var(--text);line-height:1.6}
.sidebar-chips{display:flex;flex-wrap:wrap;gap:6px}
.highlight-list{display:flex;flex-direction:column;gap:10px}
.highlight-item{display:flex;gap:10px;font-size:.82rem;color:var(--muted);line-height:1.6}
.highlight-item::before{content:'→';color:var(--coral);flex-shrink:0;margin-top:1px}
.desc-text{font-size:.85rem;color:var(--muted);line-height:1.85}
.desc-text strong{color:var(--text);font-weight:500}

.empty-state{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:300px;color:var(--dim);text-align:center;gap:12px;padding:2rem}
.empty-icon{font-size:2.5rem;opacity:.4}
.empty-text{font-family:var(--mono);font-size:.7rem;letter-spacing:.08em;text-transform:uppercase}

@media(max-width:900px){
  .project-body{grid-template-columns:1fr}
  .media-col{border-right:none;border-bottom:1px solid var(--border);padding:2rem 1.25rem}
  .sidebar{position:static;padding:2rem 1.25rem}
  .project-hero{padding:7rem 1.25rem 2rem}
  .media-grid{grid-template-columns:1fr}
}
</style>
</head>
<body>
<div class="cursor" id="cursor"></div>
<div class="cursor-ring" id="cursorRing"></div>

<nav>
  <a class="nav-logo" href="../index.html">S<span>.</span>Frausto</a>
  <div class="nav-links">
    <a href="../index.html#projects">Work</a>
    <a href="../index.html#about">About</a>
    <a href="../index.html#contact">Contact</a>
    <div class="nav-dot"></div>
  </div>
</nav>

<div class="project-hero">
  <a class="back-link" href="../index.html">All projects</a>
  <p class="project-eyebrow">${cat}</p>
  <h1 class="project-title">${title}</h1>
  <div class="project-meta">
    <span class="card-status ${status_class}">${status}</span>
    <span class="chip">${role}</span>
  </div>
</div>

<div class="project-body">
  <!-- MEDIA GALLERY -->
  <div class="media-col">
    <div class="media-upload-zone" id="uploadZone">
      <input type="file" class="upload-input" id="fileInput" accept="image/*,video/*,.gif" multiple onchange="handleFiles(this.files)">
      <div class="upload-icon">＋</div>
      <p class="upload-label">Add media</p>
      <p class="upload-sub">Images, video, GIFs — drag or click</p>
    </div>
    <div class="media-grid" id="mediaGrid">
      <div class="media-item"><div class="media-placeholder">Image / Video</div></div>
      <div class="media-item"><div class="media-placeholder">Image / Video</div></div>
    </div>
  </div>

  <!-- SIDEBAR INFO -->
  <div class="sidebar">
    <div class="sidebar-section">
      <p class="sidebar-label">About this project</p>
      <p class="desc-text">${desc_long}</p>
    </div>
    <div class="sidebar-section">
      <p class="sidebar-label">Key highlights</p>
      <div class="highlight-list">${highlights}</div>
    </div>
    <div class="sidebar-section">
      <p class="sidebar-label">Tools &amp; tech</p>
      <div class="sidebar-chips">${tools}</div>
    </div>
    <div class="sidebar-section">
      <p class="sidebar-label">Role</p>
      <p class="sidebar-value">${role}</p>
    </div>
  </div>
</div>

<script src="../shared.js"></script>
<script>
let mediaItems = [];

// Drag and drop
const zone = document.getElementById('uploadZone');
zone.addEventListener('dragover', e=>{ e.preventDefault(); zone.style.borderColor='var(--coral)'; });
zone.addEventListener('dragleave', ()=>{ zone.style.borderColor=''; });
zone.addEventListener('drop', e=>{ e.preventDefault(); zone.style.borderColor=''; handleFiles(e.dataTransfer.files); });

function handleFiles(files) {
  [...files].forEach(file => {
    const url = URL.createObjectURL(file);
    mediaItems.push({ url, type: file.type });
    renderMedia();
  });
}

function renderMedia() {
  const grid = document.getElementById('mediaGrid');
  grid.innerHTML = '';
  if(mediaItems.length === 0) {
    grid.innerHTML = '<div class="media-item"><div class="media-placeholder">Image / Video</div></div><div class="media-item"><div class="media-placeholder">Image / Video</div></div>';
    return;
  }
  mediaItems.forEach((item, i) => {
    const div = document.createElement('div');
    div.className = 'media-item';
    if(item.type.startsWith('video')) {
      div.innerHTML = \`<video src="\${item.url}" controls muted loop playsinline></video><button class="remove-btn" onclick="removeMedia(\${i})">Remove</button>\`;
    } else {
      div.innerHTML = \`<img src="\${item.url}" alt="Project media \${i+1}"><button class="remove-btn" onclick="removeMedia(\${i})">Remove</button>\`;
    }
    grid.appendChild(div);
  });
}

function removeMedia(i) {
  mediaItems.splice(i,1);
  renderMedia();
}
</script>
</body>
</html>
HTMLEOF
}

# ---- Generate all 10 project pages ----

generate_page "vr-baseball.html" \
  "VR Baseball Training System" \
  "XR / 3D · Independent" \
  "In Progress" "s-progress" \
  "Solo — Independent Project" \
  '<span class="chip">Unity</span><span class="chip">Blender</span><span class="chip">C#</span><span class="chip">Physics Engine</span><span class="chip">VR Interaction</span>' \
  "An immersive VR training environment designed to simulate realistic baseball scenarios for catchers and batters. Built independently using Unity for experience design and Blender for custom 3D modeling." \
  '<div class="highlight-item">Custom ball physics engine with pitch type simulation</div><div class="highlight-item">Real-time trajectory modeling and speed variation</div><div class="highlight-item">Interactive catcher scenarios and strike zone detection</div><div class="highlight-item">All 3D assets modeled in Blender from scratch</div>'

generate_page "iyh-digital-twin.html" \
  "Iovine &amp; Young Hall Digital Twin" \
  "Digital Twin · Multi-Platform" \
  "In Progress" "s-progress" \
  "Web Dev Team (3-person sub-team)" \
  '<span class="chip">Omniverse</span><span class="chip">visionOS</span><span class="chip">Meta Quest</span><span class="chip">Web</span><span class="chip">JavaScript</span>' \
  "A classwide project to create a full digital twin experience of the Iovine and Young Hall at USC. My role is on the 3-person web development team, bringing the Omniverse experience to life across Web, Meta Quest, and Apple Vision Pro." \
  '<div class="highlight-item">Google Maps-style waypoint navigation system</div><div class="highlight-item">Multi-platform: Web, Meta Quest, Apple Vision Pro</div><div class="highlight-item">Integrated with student-modeled building architecture</div><div class="highlight-item">Seamless transitions between virtual viewpoints</div>'

generate_page "synesthesia.html" \
  "Synesthesia — Ambient VR App" \
  "visionOS · ACAD 217" \
  "Completed" "s-live" \
  "Technical Lead (3-person team)" \
  '<span class="chip">visionOS</span><span class="chip">Unity</span><span class="chip">SwiftUI</span><span class="chip">Shader</span><span class="chip">ACAD 217</span>' \
  "Synesthesia is an experiential visionOS app designed to run passively in the background while you work — a living, breathing ambient environment. I served as technical lead, building all core mechanics while teammates handled modeling and design." \
  '<div class="highlight-item">Scene switching mechanics across multiple environments</div><div class="highlight-item">Dynamic color, music, and AR opacity controls</div><div class="highlight-item">Unity to visionOS pipeline with custom gradient shaders</div><div class="highlight-item">Designed to be beautiful running at any opacity level</div>'

generate_page "pavilia.html" \
  "Pavilia — Portal Mechanic" \
  "3D · Group Project" \
  "Completed" "s-live" \
  "Technical Lead — Portal System" \
  '<span class="chip">Unity</span><span class="chip">HLSL Shader</span><span class="chip">Render Texture</span><span class="chip">C#</span>' \
  "A collaborative Unity scene combining environments built by two students. My partner created the cherry blossom tree and island models; I handled the visuals and implemented a custom portal mechanic using advanced shader programming." \
  '<div class="highlight-item">Dual-camera system mathematically replicating player movement</div><div class="highlight-item">Render texture pipeline creating a live window into another world</div><div class="highlight-item">Custom HLSL shader tweaked so the full island is visible</div><div class="highlight-item">Teleportation mechanic with seamless portal shutoff</div>'

generate_page "cyberpunk-twin.html" \
  "Cyberpunk 2077 Room — Digital Twin" \
  "Digital Twin · ACAD 288" \
  "Completed" "s-live" \
  "Co-Lead — Modeling, Animation &amp; Skybox" \
  '<span class="chip">Omniverse</span><span class="chip">USD</span><span class="chip">Blender</span><span class="chip">Animation</span><span class="chip">ACAD 288</span>' \
  "A high-definition virtual replica of a real-world Cyberpunk 2077 bedroom environment built in NVIDIA Omniverse. As team co-lead, I was responsible for modeling, animation, and skybox development — plus building a custom Omniverse extension." \
  '<div class="highlight-item">High-fidelity recreation of a Cyberpunk 2077 environment</div><div class="highlight-item">Custom Omniverse extension to streamline material transfer</div><div class="highlight-item">Co-led modeling, animation, and skybox development</div><div class="highlight-item">Designed for spatial exploration and simulation</div>'

generate_page "flavoice-crayola.html" \
  "Fla-Vor-Ice × Crayola" \
  "Brand &amp; Marketing · Jel Sert Internship" \
  "Jel Sert Internship" "s-intern" \
  "Marketing Intern — Jel Sert" \
  '<span class="chip">PR Writing</span><span class="chip">Graphic Design</span><span class="chip">Video Editing</span><span class="chip">Influencer Outreach</span>' \
  "A limited-edition brand partnership between Fla-Vor-Ice and Crayola, launching a Banana Mango freezer bar inspired by the retired Crayon color Dandelion — dreamed up by kids. I managed communications, creative assets, and influencer strategy." \
  '<div class="highlight-item">Wrote the official press release published on PR Newswire</div><div class="highlight-item">Produced and edited promotional graphics &amp; video posted by Crayola</div><div class="highlight-item">Found and contacted influencers for product seeding</div><div class="highlight-item">Created internal company newsletter covering campaign performance</div>'

generate_page "purekick-harley.html" \
  "Pure Kick × Harley-Davidson" \
  "Brand &amp; Marketing · Jel Sert Internship" \
  "Jel Sert Internship" "s-intern" \
  "Marketing Intern — Jel Sert" \
  '<span class="chip">Video Production</span><span class="chip">Consumer Research</span><span class="chip">Brand Strategy</span>' \
  "A co-branded partnership between Pure Kick energy drink and Harley-Davidson, centered on a custom motorcycle giveaway. I produced the promotional video, delivered consumer insights research, and identified award opportunities for the partnership." \
  '<div class="highlight-item">Produced and edited promotional video for motorcycle giveaway</div><div class="highlight-item">Researched consumer insights and predictive outcomes of the partnership</div><div class="highlight-item">Identified product awards the company could apply to</div><div class="highlight-item">Contributed to brand strategy and campaign positioning</div>'

generate_page "jelsert-jamba.html" \
  "Jel Sert × Jamba" \
  "Brand &amp; Marketing · Jel Sert Internship" \
  "Jel Sert Internship" "s-intern" \
  "Marketing Intern — Jel Sert" \
  '<span class="chip">Partnerships</span><span class="chip">PR Writing</span><span class="chip">Brand Strategy</span><span class="chip">Influencer Outreach</span>' \
  "A major brand collaboration between Jel Sert and Jamba, launching Jamba Singles To Go — single-serve powdered drink sticks translating Jamba smoothies into a portable format. I owned influencer and partnership outreach, media relations, and represented the company in the field." \
  '<div class="highlight-item">Sought out and managed 30+ partnership and influencer contacts</div><div class="highlight-item">Represented the company at a road show in Bakersfield, CA</div><div class="highlight-item">Authored the official press release and company blog post</div><div class="highlight-item">Launch coverage published on Jel Sert website and PR Newswire</div>'

generate_page "suzchews.html" \
  "SuzChews — Cancer Patient Gum" \
  "Human-Centered Innovation · Health" \
  "Prototyping" "s-progress" \
  "Founder — Independent Project" \
  '<span class="chip">Product Design</span><span class="chip">HCD</span><span class="chip">Biotech</span><span class="chip">Formulation</span><span class="chip">Prototyping</span>' \
  "SuzChews is a gum specially formulated to combat dysgeusia — the chemotherapy-induced taste distortion that affects a majority of cancer patients during treatment. Inspired directly by my parents' experience undergoing cancer treatment, this project combines my background in cancer research with my passion for human-centered innovation." \
  '<div class="highlight-item">Addresses dysgeusia, a widespread and underserved side effect of chemotherapy</div><div class="highlight-item">Ingredient list finalized based on cancer research and taste science</div><div class="highlight-item">Currently entering the physical prototyping phase</div><div class="highlight-item">Bridges scientific research and consumer product design</div>'

generate_page "tet2-research.html" \
  "TET2 Inhibition Cancer Research" \
  "Scientific Research · UChicago" \
  "2nd Place — UIUC Symposium" "s-award" \
  "Independent Researcher — UChicago Lab" \
  '<span class="chip">Immunology</span><span class="chip">Epigenetics</span><span class="chip">Wetlab</span><span class="chip">Cell Culture</span><span class="chip">Data Analysis</span>' \
  "A 300+ hour wetlab immunology project evaluating small molecule inhibition of TET2 as a strategy to overcome adaptive resistance to radiation therapy in cancer cells. Conducted at the University of Chicago. Presented at the University of Illinois, Urbana-Champaign cancer research symposium in front of faculty from top Illinois universities." \
  '<div class="highlight-item">Cultured CT-26 cell lines to test drug effects on radiation-resistant cells</div><div class="highlight-item">Evaluated TET2 inhibition for overcoming adaptive radiation resistance</div><div class="highlight-item">Awarded 2nd place out of 36 presenters at the UIUC symposium</div><div class="highlight-item">Project inspired a subsequent grant-winning study by a fellow lab member</div>'

echo "All project pages generated successfully."
