/* =========================================================
 * National AI Data Center — Frontend
 * ========================================================= */
(() => {
  const D = window.SKAI_DATA;
  const $ = (sel, root=document) => root.querySelector(sel);
  const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));

  /* ============ BACKGROUND CANVAS — particle network ============ */
  function initBackground(){
    const canvas = $("#bgCanvas");
    const ctx = canvas.getContext("2d");
    let w, h, dpr;
    let nodes = [];
    const TARGET_COUNT = window.innerWidth < 760 ? 50 : 100;

    function resize(){
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.width = window.innerWidth * dpr;
      h = canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      // re-seed
      nodes = Array.from({length:TARGET_COUNT}, () => ({
        x: Math.random()*w,
        y: Math.random()*h,
        vx: (Math.random()-0.5)*0.18*dpr,
        vy: (Math.random()-0.5)*0.18*dpr,
        r: (Math.random()*1.6 + 0.4) * dpr,
        h: Math.random()*60 + 180 // hue 180-240 (cyan->violet)
      }));
    }
    function tick(){
      ctx.clearRect(0,0,w,h);
      const linkDist = 140 * dpr;
      // draw nodes
      for (let i=0;i<nodes.length;i++){
        const n = nodes[i];
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
        ctx.beginPath();
        ctx.fillStyle = `hsla(${n.h}, 80%, 65%, 0.85)`;
        ctx.arc(n.x, n.y, n.r, 0, Math.PI*2);
        ctx.fill();
      }
      // links
      for (let i=0;i<nodes.length;i++){
        for (let j=i+1;j<nodes.length;j++){
          const a = nodes[i], b = nodes[j];
          const dx = a.x-b.x, dy = a.y-b.y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          if (dist < linkDist){
            const alpha = (1 - dist/linkDist) * 0.18;
            ctx.strokeStyle = `hsla(${(a.h+b.h)/2}, 70%, 60%, ${alpha})`;
            ctx.lineWidth = 0.7 * dpr;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(tick);
    }
    window.addEventListener("resize", resize, {passive:true});
    resize();
    tick();
  }

  /* ============ STATS — count up ============ */
  function initCounters(){
    const cards = $$(".stat-card");
    const iob = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting){
          const card = e.target;
          const target = parseFloat(card.dataset.counter);
          const decimals = parseInt(card.dataset.decimal || "0", 10);
          const suffix = card.dataset.suffix || "";
          animateCount(card.querySelector(".stat-num"), target, decimals, suffix);
          iob.unobserve(card);
        }
      });
    }, {threshold:0.4});
    cards.forEach(c => iob.observe(c));
  }
  function animateCount(el, target, decimals, suffix){
    const dur = 1400;
    const start = performance.now();
    function f(t){
      const e = Math.min(1, (t-start)/dur);
      const eased = 1 - Math.pow(1-e, 4);
      const v = target*eased;
      el.textContent = format(v, decimals) + suffix;
      if (e < 1) requestAnimationFrame(f);
      else el.textContent = format(target, decimals) + suffix;
    }
    requestAnimationFrame(f);
  }
  function format(v, d){
    if (d > 0) return v.toFixed(d);
    if (v >= 1000) return Math.round(v).toLocaleString("ko-KR");
    return Math.round(v).toString();
  }

  /* ============ TIMELINE ============ */
  function initTimeline(){
    const root = $("#timeline-track");
    if (!root) return;
    root.innerHTML = D.timeline.map((t,i) => `
      <div class="tl-node ${t.cls||""}" data-i="${i}">
        <div class="tl-dot"></div>
        <div class="tl-when">${t.date}</div>
        <div class="tl-card">
          <div class="tl-card-title">${t.title}</div>
          <div class="tl-card-text">${t.body}</div>
          <span class="tl-card-tag">${t.tag}</span>
        </div>
      </div>
    `).join("");
  }

  /* ============ DONUT — SPC shares ============ */
  function initDonut(){
    const svg = $("#spcDonut");
    const legend = $("#spcLegend");
    if (!svg) return;
    const cx=120, cy=120, r=82, sw=24;
    const total = D.spcShares.reduce((a,b) => a+b.value, 0);
    let acc = -90; // start at top
    const ns = "http://www.w3.org/2000/svg";
    // base ring
    const ring = document.createElementNS(ns, "circle");
    ring.setAttribute("cx", cx); ring.setAttribute("cy", cy); ring.setAttribute("r", r);
    ring.setAttribute("fill","none"); ring.setAttribute("stroke","rgba(255,255,255,.04)");
    ring.setAttribute("stroke-width", sw);
    svg.appendChild(ring);

    const circ = 2*Math.PI*r;
    D.spcShares.forEach((seg, i) => {
      const frac = seg.value/total;
      const len = frac*circ;
      const arc = document.createElementNS(ns, "circle");
      arc.setAttribute("cx", cx); arc.setAttribute("cy", cy); arc.setAttribute("r", r);
      arc.setAttribute("fill", "none");
      arc.setAttribute("stroke", seg.color);
      arc.setAttribute("stroke-width", sw);
      arc.setAttribute("stroke-dasharray", `${len} ${circ-len}`);
      arc.setAttribute("stroke-dashoffset", `${-( (acc+90)/360 )*circ}`);
      arc.setAttribute("transform", `rotate(-90 ${cx} ${cy})`);
      arc.style.transition = "stroke-width .2s ease";
      arc.style.cursor = "pointer";
      arc.addEventListener("mouseenter", () => arc.setAttribute("stroke-width", sw+6));
      arc.addEventListener("mouseleave", () => arc.setAttribute("stroke-width", sw));
      svg.appendChild(arc);
      acc += frac*360;
    });
    // center label
    const tx = document.createElementNS(ns, "text");
    tx.setAttribute("x", cx); tx.setAttribute("y", cy-4);
    tx.setAttribute("text-anchor", "middle");
    tx.setAttribute("fill", "#fff");
    tx.setAttribute("font-size", "13");
    tx.setAttribute("font-weight", "500");
    tx.setAttribute("font-family", "Pretendard");
    tx.textContent = "SPC 지분";
    svg.appendChild(tx);
    const tx2 = document.createElementNS(ns, "text");
    tx2.setAttribute("x", cx); tx2.setAttribute("y", cy+18);
    tx2.setAttribute("text-anchor", "middle");
    tx2.setAttribute("fill", "rgba(255,255,255,.55)");
    tx2.setAttribute("font-size", "11");
    tx2.setAttribute("font-family", "Pretendard");
    tx2.textContent = "2026.05.11 협약";
    svg.appendChild(tx2);

    legend.innerHTML = D.spcShares.map(s => `
      <div class="lg-row">
        <span class="lg-sw" style="background:${s.color}"></span>
        <span class="lg-name">${s.name}</span>
        <span class="lg-pct">${s.value}%</span>
      </div>
    `).join("");
  }

  /* ============ NUMBER WATCH (tabs) ============ */
  function initWatch(){
    const tabs = $$("#watchTabs .watch-btn");
    const stage = $("#watchStage");
    function render(key){
      const cfg = D.watch[key];
      stage.innerHTML = cfg.rows.map(r => `
        <div class="watch-row">
          <div class="watch-when">${r.when}</div>
          <div>
            <div style="font-size:13.5px;color:var(--ink);margin-bottom:6px">${r.what}
              <span class="watch-tag tag-${r.tag}">${r.tag==="final"?"확정":r.tag==="init"?"초기":r.tag==="revise"?"변경":"보도"}</span>
            </div>
            <div class="watch-bar"><span style="width:${Math.max(2, r.pct)}%"></span></div>
            <div style="font-size:11.5px;color:var(--ink-faint);margin-top:6px">${r.note}</div>
          </div>
          <div class="watch-val">${r.val}</div>
        </div>
      `).join("");
    }
    tabs.forEach(b => b.addEventListener("click", () => {
      tabs.forEach(x => x.classList.remove("active"));
      b.classList.add("active");
      render(b.dataset.watch);
    }));
    render("cost");
  }

  /* ============ WORLD MATRIX ============ */
  function initWorld(){
    const grid = $("#worldGrid");
    grid.innerHTML = D.world.map(c => `
      <article class="world-card${c.kr?" kr":""}">
        <span class="world-flag">${c.flag}</span>
        <div class="world-name">${c.name}</div>
        <div class="world-prog">${c.prog}</div>
        <div class="world-stat"><span>규모</span><span>${c.scale}</span></div>
        <div class="world-stat"><span>전력</span><span>${c.power}</span></div>
        <div class="world-stat"><span>운영</span><span>${c.ops}</span></div>
        <div class="world-stat"><span>목표</span><span>${c.goal}</span></div>
        ${c.kr ? "" : `<div class="world-vs">${c.vs}</div>`}
      </article>
    `).join("");
  }

  /* ============ MEDIA SPECTRUM ============ */
  function initSpectrum(){
    const root = $("#spectrum");
    root.innerHTML = D.spectrum.map(m => `
      <div class="sp-item ${m.cls}" style="left:${m.x}%;top:${m.y}%">
        ${m.name}<span class="sp-tag">${m.tag}</span>
      </div>
    `).join("");
  }

  /* ============ ISSUES ============ */
  function initIssues(){
    const root = $("#issues-grid");
    root.innerHTML = D.issues.map(i => `
      <article class="iss-card">
        <div class="iss-num">${i.n}</div>
        <h3 class="iss-title">${i.title}</h3>
        <p class="iss-text">${i.text}</p>
        <div class="iss-quote">"${i.quote}"<span class="who">— ${i.who}</span></div>
      </article>
    `).join("");
  }

  /* ============ VOICES ============ */
  function initVoices(){
    const root = $("#voices-grid");
    const labels = {pro:"찬성", con:"비판", mid:"중립", ext:"외부"};
    root.innerHTML = D.voices.map(v => `
      <article class="voice-card">
        <span class="voice-stance ${v.stance}">${labels[v.stance]}</span>
        <p class="voice-quote">${v.quote}</p>
        <div class="voice-who">${v.who}</div>
        <div class="voice-when">${v.when}</div>
        <div class="voice-note">${v.note}</div>
      </article>
    `).join("");
  }

  /* ============ REVEAL ON SCROLL ============ */
  function initReveal(){
    const targets = $$(".stat-card, .iss-card, .voice-card, .src-card, .world-card, .donut-card, .spc-evolution, .watch-stage, .timeline-wrap, .spectrum-wrap, .section-head");
    targets.forEach(t => t.classList.add("reveal"));
    const iob = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting){
          e.target.classList.add("is-in");
          iob.unobserve(e.target);
        }
      });
    }, {threshold:0.12});
    targets.forEach(t => iob.observe(t));
  }

  /* ============ NAV smooth highlight ============ */
  function initNav(){
    const links = $$(".nav-links a");
    const map = new Map();
    links.forEach(a => {
      const id = a.getAttribute("href").slice(1);
      const sec = document.getElementById(id);
      if (sec) map.set(sec, a);
    });
    const iob = new IntersectionObserver(entries => {
      entries.forEach(e => {
        const link = map.get(e.target);
        if (!link) return;
        if (e.isIntersecting){
          links.forEach(l => l.style.color = "");
          link.style.color = "#fff";
        }
      });
    }, {rootMargin:"-50% 0px -45% 0px"});
    map.forEach((_, sec) => iob.observe(sec));
  }

  /* ============ BOOTSTRAP ============ */
  document.addEventListener("DOMContentLoaded", () => {
    initBackground();
    initCounters();
    initTimeline();
    initDonut();
    initWatch();
    initWorld();
    initSpectrum();
    initIssues();
    initVoices();
    initReveal();
    initNav();
  });
})();
