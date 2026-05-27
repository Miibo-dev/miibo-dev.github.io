// ============================================================
// PORTFOLIO v2 — app.js
// Hero warehouse sim · title block · timeline path · count-ups · tweaks
// ============================================================

// ---------------- Tweaks ----------------
const TWEAK_DEFAULTS = {
  "accent": "#1e3a5f",
  "motif": "medium",
  "grid": true
};

let tweaks = { ...TWEAK_DEFAULTS };

function hexToRgba(hex, a) {
  const h = hex.replace('#', '');
  const r = parseInt(h.substring(0,2), 16);
  const g = parseInt(h.substring(2,4), 16);
  const b = parseInt(h.substring(4,6), 16);
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}
function lighten(hex, amt) {
  const h = hex.replace('#', '');
  let r = parseInt(h.substring(0,2), 16);
  let g = parseInt(h.substring(2,4), 16);
  let b = parseInt(h.substring(4,6), 16);
  r = Math.min(255, Math.round(r + (255 - r) * amt));
  g = Math.min(255, Math.round(g + (255 - g) * amt));
  b = Math.min(255, Math.round(b + (255 - b) * amt));
  return `#${r.toString(16).padStart(2,'0')}${g.toString(16).padStart(2,'0')}${b.toString(16).padStart(2,'0')}`;
}

function applyTweaks() {
  const root = document.documentElement;
  root.style.setProperty('--accent', tweaks.accent);
  root.style.setProperty('--accent-2', lighten(tweaks.accent, 0.18));
  root.style.setProperty('--accent-3', lighten(tweaks.accent, 0.35));
  root.style.setProperty('--accent-soft', hexToRgba(tweaks.accent, 0.07));

  const motifMap = {
    subtle: { size: '88px', op: 0.5 },
    medium: { size: '64px', op: 1.0 },
    strong: { size: '44px', op: 1.4 },
  };
  const m = motifMap[tweaks.motif] || motifMap.medium;
  root.style.setProperty('--grid-size', m.size);
  root.style.setProperty('--grid-opacity', tweaks.grid ? m.op : 0);

  document.querySelectorAll('.swatch').forEach(s => {
    s.classList.toggle('active', s.dataset.color === tweaks.accent);
  });
  document.querySelectorAll('[data-motif]').forEach(b => {
    b.classList.toggle('active', b.dataset.motif === tweaks.motif);
  });
  document.querySelectorAll('[data-grid]').forEach(b => {
    b.classList.toggle('active', (b.dataset.grid === 'on') === tweaks.grid);
  });
}

function setTweak(key, value) {
  tweaks[key] = value;
  applyTweaks();
}

function buildTweaksPanel() {
  const panel = document.createElement('div');
  panel.className = 'tweaks-panel';
  panel.id = 'tweaks-panel';
  panel.innerHTML = `
    <div class="tweaks-head">
      <h4>Tweaks</h4>
      <button id="tweaks-close" aria-label="Close">×</button>
    </div>
    <div class="tweak-row">
      <span class="tlabel">Accent color</span>
      <div class="swatches">
        <div class="swatch" data-color="#1e3a5f" style="background:#1e3a5f" title="Deep blue"></div>
        <div class="swatch" data-color="#0d6b6b" style="background:#0d6b6b" title="Teal"></div>
        <div class="swatch" data-color="#2a3340" style="background:#2a3340" title="Slate"></div>
        <div class="swatch" data-color="#1a4d3e" style="background:#1a4d3e" title="Forest"></div>
        <div class="swatch" data-color="#b54a2a" style="background:#b54a2a" title="Rust"></div>
      </div>
    </div>
    <div class="tweak-row">
      <span class="tlabel">Motif intensity</span>
      <div class="toggle-row">
        <button data-motif="subtle">Subtle</button>
        <button data-motif="medium">Medium</button>
        <button data-motif="strong">Strong</button>
      </div>
    </div>
    <div class="tweak-row">
      <span class="tlabel">Background grid</span>
      <div class="toggle-row">
        <button data-grid="on">On</button>
        <button data-grid="off">Off</button>
      </div>
    </div>
  `;
  document.body.appendChild(panel);
  panel.querySelectorAll('.swatch').forEach(s =>
    s.addEventListener('click', () => setTweak('accent', s.dataset.color)));
  panel.querySelectorAll('[data-motif]').forEach(b =>
    b.addEventListener('click', () => setTweak('motif', b.dataset.motif)));
  panel.querySelectorAll('[data-grid]').forEach(b =>
    b.addEventListener('click', () => setTweak('grid', b.dataset.grid === 'on')));
  document.getElementById('tweaks-close').addEventListener('click', () => {
    panel.classList.remove('open');
  });
}

// ---------------- Scroll-in animations ----------------
let __rafFired = false;
requestAnimationFrame(() => { __rafFired = true; });

function snapAllVisible() {
  document.querySelectorAll('.fade-in').forEach(el => {
    el.style.transition = 'none';
    el.style.opacity = '1';
    el.style.transform = 'none';
    el.classList.add('visible');
    el.dataset.__revealed = '1';
  });
  document.querySelectorAll('[data-count]').forEach(c => {
    c.textContent = (c.dataset.prefix || '') + c.dataset.count + (c.dataset.suffix || '');
  });
  document.querySelectorAll('.lang').forEach(el => {
    const bar = el.querySelector('.lang-bar');
    if (bar) {
      bar.style.transition = 'none';
      bar.style.setProperty('--w', (el.dataset.level || 0) + '%');
    }
  });
}

function setupScrollAnims() {
  setTimeout(() => {
    if (!__rafFired) {
      snapAllVisible();
      return;
    }
  }, 300);

  function reveal(el) {
    if (el.dataset.__revealed) return;
    el.dataset.__revealed = '1';
    el.classList.add('visible');
    if (el.dataset.count) countUp(el);
    if (el.classList.contains('lang')) {
      const bar = el.querySelector('.lang-bar');
      if (bar) bar.style.setProperty('--w', el.dataset.level + '%');
    }
  }

  const all = document.querySelectorAll('.fade-in, [data-count], .lang');

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        reveal(e.target);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  all.forEach(el => obs.observe(el));

  function checkInitial() {
    const winH = window.innerHeight || document.documentElement.clientHeight;
    all.forEach(el => {
      if (el.dataset.__revealed) return;
      const r = el.getBoundingClientRect();
      if (r.top < winH * 0.9 && r.bottom > 0) {
        reveal(el);
        obs.unobserve(el);
      }
    });
  }
  requestAnimationFrame(checkInitial);
  setTimeout(checkInitial, 120);
  setTimeout(checkInitial, 500);

  let scrollCheckPending = false;
  window.addEventListener('scroll', () => {
    if (scrollCheckPending) return;
    scrollCheckPending = true;
    requestAnimationFrame(() => {
      scrollCheckPending = false;
      checkInitial();
    });
  }, { passive: true });
}

function countUp(el) {
  const target = parseFloat(el.dataset.count);
  const suffix = el.dataset.suffix || '';
  const prefix = el.dataset.prefix || '';
  const duration = 1800;
  const start = performance.now();
  function tick(now) {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    const val = target * eased;
    let display;
    if (Number.isInteger(target)) display = Math.round(val).toString();
    else if (target < 10) display = val.toFixed(1);
    else display = Math.round(val).toString();
    el.textContent = prefix + display + suffix;
    if (t < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

// ---------------- Nav, title block, timeline path ----------------
function setupScrollUI() {
  const nav = document.querySelector('.topnav');
  const links = document.querySelectorAll('.topnav nav a');
  const sections = [...document.querySelectorAll('section[id]')];

  const tbSection = document.getElementById('tb-section');
  const tbScroll = document.getElementById('tb-scroll');
  const tbPct = document.getElementById('tb-pct');

  const sectionLabels = {
    hero: 'COVER · 00',
    about: 'BIOGRAPHY · 01',
    impact: 'IMPACT · 02',
    'ch-foundation': 'CH.I · FOUNDATION',
    'role-thesis': 'CH.I · ROLE 01',
    'ch-simulation': 'CH.II · SIMULATION',
    'role-sim': 'CH.II · ROLE 02',
    'ch-application': 'CH.III · APPLICATION',
    'role-app': 'CH.III · ROLE 03',
    projects: 'WORK · 03',
    education: 'EDUCATION · 04',
    skills: 'CAPABILITIES · 05',
    certs: 'CREDENTIALS · 06',
    contact: 'CONTACT · 07'
  };

  const timeline = document.querySelector('.timeline');
  const timelineFill = document.querySelector('.timeline-path .fill');

  let ticking = false;
  function update() {
    const y = window.scrollY;
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    const pct = Math.max(0, Math.min(100, (y / docH) * 100));

    nav.classList.toggle('scrolled', y > 30);

    if (tbScroll) tbScroll.style.setProperty('--scroll', pct + '%');
    if (tbPct) tbPct.textContent = Math.round(pct).toString().padStart(2, '0') + '%';

    let current = sections[0]?.id;
    const probe = y + window.innerHeight * 0.35;
    for (const s of sections) {
      if (s.offsetTop <= probe) current = s.id;
    }
    links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + current));
    if (tbSection) tbSection.textContent = sectionLabels[current] || current.toUpperCase();

    if (timeline && timelineFill) {
      const rect = timeline.getBoundingClientRect();
      const tlH = rect.height;
      const startY = rect.top;
      const winH = window.innerHeight;
      const mid = winH * 0.5;
      const range = tlH;
      const traveled = Math.max(0, Math.min(range, mid - startY));
      const tp = range > 0 ? traveled / range : 0;
      timelineFill.style.setProperty('--path-progress', tp.toFixed(3));

      document.querySelectorAll('.role').forEach(role => {
        const r = role.getBoundingClientRect();
        if (r.top < winH * 0.55) role.classList.add('reached');
      });
    }

    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });
  update();
}

// ---------------- Live clock in title block ----------------
function setupClock() {
  const el = document.getElementById('tb-time');
  if (!el) return;
  function tick() {
    const now = new Date();
    const opts = { timeZone: 'Europe/Rome', hour: '2-digit', minute: '2-digit', hour12: false };
    el.textContent = now.toLocaleTimeString('en-GB', opts) + ' CET';
  }
  tick();
  setInterval(tick, 30000);
}

// ============================================================
// HERO WAREHOUSE SIM
// 6x6 grid · 4 stations · 2 AMRs · Manhattan pathing · job queue
// ============================================================
function setupHeroSim() {
  const wrap = document.getElementById('hero-sim');
  if (!wrap) return;

  const W = 480, H = 480;
  const PAD = 36;
  const COLS = 6, ROWS = 6;
  const cw = (W - PAD * 2) / COLS;
  const ch = (H - PAD * 2) / ROWS;

  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
  svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
  wrap.appendChild(svg);

  const cellToXY = (c, r) => [PAD + c * cw + cw / 2, PAD + r * ch + ch / 2];

  // Background grid lines
  for (let i = 0; i <= COLS; i++) {
    const x = PAD + i * cw;
    const l = document.createElementNS(svgNS, 'line');
    l.setAttribute('x1', x); l.setAttribute('x2', x);
    l.setAttribute('y1', PAD); l.setAttribute('y2', H - PAD);
    l.setAttribute('stroke', 'var(--grid-strong)');
    l.setAttribute('stroke-width', '0.5');
    svg.appendChild(l);
  }
  for (let i = 0; i <= ROWS; i++) {
    const y = PAD + i * ch;
    const l = document.createElementNS(svgNS, 'line');
    l.setAttribute('x1', PAD); l.setAttribute('x2', W - PAD);
    l.setAttribute('y1', y); l.setAttribute('y2', y);
    l.setAttribute('stroke', 'var(--grid-strong)');
    l.setAttribute('stroke-width', '0.5');
    svg.appendChild(l);
  }

  // Outer frame
  const frame = document.createElementNS(svgNS, 'rect');
  frame.setAttribute('x', PAD); frame.setAttribute('y', PAD);
  frame.setAttribute('width', W - PAD * 2); frame.setAttribute('height', H - PAD * 2);
  frame.setAttribute('fill', 'none');
  frame.setAttribute('stroke', 'var(--rule-strong)');
  frame.setAttribute('stroke-width', '1');
  svg.appendChild(frame);

  // Stations (cell coords)
  const stations = [
    { id: 'PICK-A', cell: [0, 0], color: 'var(--accent)', label: 'P-A' },
    { id: 'PICK-B', cell: [5, 0], color: 'var(--accent)', label: 'P-B' },
    { id: 'DROP',   cell: [5, 5], color: '#2fa44e',       label: 'D' },
    { id: 'CHARGE', cell: [0, 5], color: '#c98b2a',       label: 'C' },
  ];

  stations.forEach(s => {
    const [cx, cy] = cellToXY(s.cell[0], s.cell[1]);
    const rect = document.createElementNS(svgNS, 'rect');
    const size = Math.min(cw, ch) * 0.62;
    rect.setAttribute('x', cx - size/2);
    rect.setAttribute('y', cy - size/2);
    rect.setAttribute('width', size);
    rect.setAttribute('height', size);
    rect.setAttribute('fill', s.color);
    rect.setAttribute('opacity', '0.16');
    rect.setAttribute('stroke', s.color);
    rect.setAttribute('stroke-width', '1');
    svg.appendChild(rect);

    const t = document.createElementNS(svgNS, 'text');
    t.setAttribute('x', cx); t.setAttribute('y', cy + 3.5);
    t.setAttribute('text-anchor', 'middle');
    t.setAttribute('font-family', 'var(--mono)');
    t.setAttribute('font-size', '10');
    t.setAttribute('fill', s.color);
    t.setAttribute('font-weight', '600');
    t.textContent = s.label;
    svg.appendChild(t);
  });

  // Path layer
  const pathLayer = document.createElementNS(svgNS, 'g');
  svg.appendChild(pathLayer);

  // AMR class
  class AMR {
    constructor(id, startCell, color) {
      this.id = id;
      this.cell = [...startCell];
      this.color = color;
      this.target = null;
      this.path = [];
      this.posX = null;
      this.posY = null;
      this.state = 'IDLE';
      this.dwellUntil = 0;
      this.job = null;
      this.heading = 0;
      [this.posX, this.posY] = cellToXY(startCell[0], startCell[1]);

      const g = document.createElementNS(svgNS, 'g');
      g.setAttribute('class', 'amr');
      const r = Math.min(cw, ch) * 0.18;
      const body = document.createElementNS(svgNS, 'circle');
      body.setAttribute('r', r);
      body.setAttribute('fill', color);
      body.setAttribute('stroke', 'var(--paper)');
      body.setAttribute('stroke-width', '1.5');
      g.appendChild(body);
      const arrow = document.createElementNS(svgNS, 'path');
      arrow.setAttribute('d', `M 0 ${-r*0.55} L ${r*0.42} ${r*0.3} L ${-r*0.42} ${r*0.3} Z`);
      arrow.setAttribute('fill', 'var(--paper)');
      g.appendChild(arrow);
      this.arrow = arrow;

      const ring = document.createElementNS(svgNS, 'circle');
      ring.setAttribute('r', r + 3);
      ring.setAttribute('fill', 'none');
      ring.setAttribute('stroke', color);
      ring.setAttribute('stroke-width', '0.5');
      ring.setAttribute('opacity', '0.35');
      g.appendChild(ring);

      const label = document.createElementNS(svgNS, 'text');
      label.setAttribute('y', -r - 6);
      label.setAttribute('text-anchor', 'middle');
      label.setAttribute('font-family', 'var(--mono)');
      label.setAttribute('font-size', '8');
      label.setAttribute('fill', color);
      label.setAttribute('font-weight', '600');
      label.textContent = id;
      g.appendChild(label);

      svg.appendChild(g);
      this.node = g;
      this.pathLine = document.createElementNS(svgNS, 'path');
      this.pathLine.setAttribute('fill', 'none');
      this.pathLine.setAttribute('stroke', color);
      this.pathLine.setAttribute('stroke-width', '1');
      this.pathLine.setAttribute('stroke-dasharray', '3 3');
      this.pathLine.setAttribute('opacity', '0.4');
      pathLayer.appendChild(this.pathLine);

      this.updateTransform();
    }

    updateTransform() {
      this.node.setAttribute('transform', `translate(${this.posX} ${this.posY}) rotate(${this.heading})`);
    }

    setJob(pickup, dropoff) {
      this.job = { pickup, dropoff };
      this.target = pickup.cell;
      this.computePath();
      this.state = 'MOVING';
    }

    setReturn() {
      const charge = stations.find(s => s.id === 'CHARGE');
      this.target = charge.cell;
      this.computePath();
      this.state = 'RETURNING';
    }

    computePath() {
      this.path = [];
      let [cx, cy] = this.cell;
      const [tx, ty] = this.target;
      while (cx !== tx) {
        cx += cx < tx ? 1 : -1;
        this.path.push([cx, cy]);
      }
      while (cy !== ty) {
        cy += cy < ty ? 1 : -1;
        this.path.push([cx, cy]);
      }
      this.drawPathLine();
    }

    drawPathLine() {
      if (this.path.length === 0) {
        this.pathLine.setAttribute('d', '');
        return;
      }
      let d = `M ${this.posX} ${this.posY}`;
      this.path.forEach(c => {
        const [x, y] = cellToXY(c[0], c[1]);
        d += ` L ${x} ${y}`;
      });
      this.pathLine.setAttribute('d', d);
    }

    step(dt) {
      if (this.state === 'IDLE' || this.state === 'AT_STATION') {
        if (performance.now() < this.dwellUntil) return;
        return;
      }
      if (this.path.length === 0) return;
      const next = this.path[0];
      const [tx, ty] = cellToXY(next[0], next[1]);
      const dx = tx - this.posX;
      const dy = ty - this.posY;
      const dist = Math.hypot(dx, dy);
      const speed = 38;
      const move = speed * dt;
      if (dist <= move) {
        this.posX = tx; this.posY = ty;
        this.cell = next;
        this.path.shift();
        this.drawPathLine();
        if (this.path.length === 0) {
          this.state = 'AT_STATION';
          this.dwellUntil = performance.now() + 600 + Math.random() * 400;
        }
      } else {
        this.posX += (dx / dist) * move;
        this.posY += (dy / dist) * move;
        if (Math.abs(dx) > Math.abs(dy)) this.heading = dx > 0 ? 90 : -90;
        else this.heading = dy > 0 ? 180 : 0;
      }
      this.updateTransform();
    }
  }

  const amrs = [
    new AMR('A-01', [2, 2], 'var(--accent)'),
    new AMR('A-02', [3, 3], '#c98b2a'),
  ];

  const statusEl = document.getElementById('sim-status');

  let jobCounter = 0;
  function assignJob(amr) {
    jobCounter++;
    const pickStations = stations.filter(s => s.id.startsWith('PICK'));
    const pick = pickStations[Math.floor(Math.random() * pickStations.length)];
    const drop = stations.find(s => s.id === 'DROP');
    amr.setJob(pick, drop);
  }
  function handleArrival(amr) {
    if (!amr.job) {
      amr.state = 'IDLE';
      setTimeout(() => assignJob(amr), 500 + Math.random() * 600);
      return;
    }
    if (amr.cell[0] === amr.job.pickup.cell[0] && amr.cell[1] === amr.job.pickup.cell[1]) {
      amr.target = amr.job.dropoff.cell;
      amr.computePath();
      amr.state = 'MOVING';
    } else if (amr.cell[0] === amr.job.dropoff.cell[0] && amr.cell[1] === amr.job.dropoff.cell[1]) {
      amr.job = null;
      if (Math.random() < 0.25) {
        amr.setReturn();
      } else {
        amr.state = 'IDLE';
        setTimeout(() => assignJob(amr), 400 + Math.random() * 700);
      }
    }
  }

  amrs.forEach((a, i) => setTimeout(() => assignJob(a), 600 + i * 800));

  let last = performance.now();
  let running = true;
  function tick(now) {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    if (running) {
      amrs.forEach(a => {
        const prevState = a.state;
        a.step(dt);
        if (prevState === 'MOVING' && a.state === 'AT_STATION') {
          setTimeout(() => handleArrival(a), 600);
        } else if (prevState === 'RETURNING' && a.state === 'AT_STATION') {
          setTimeout(() => handleArrival(a), 800);
        }
      });
      if (statusEl) {
        const labels = amrs.map(a => {
          let dest = '—';
          if (a.state === 'MOVING' && a.job) {
            dest = a.job.pickup.id;
            if (a.target && a.target[0] === a.job.dropoff.cell[0] && a.target[1] === a.job.dropoff.cell[1]) {
              dest = a.job.dropoff.id;
            }
          } else if (a.state === 'RETURNING') dest = 'CHARGE';
          else if (a.state === 'AT_STATION') dest = '· dwell';
          else if (a.state === 'IDLE') dest = '· idle';
          return `${a.id} → ${dest}`;
        });
        statusEl.textContent = labels.join('   ');
      }
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);

  const io = new IntersectionObserver(([e]) => { running = e.isIntersecting; });
  io.observe(wrap);
}

// ---------------- Init ----------------
document.addEventListener('DOMContentLoaded', () => {
  buildTweaksPanel();
  applyTweaks();
  setupScrollAnims();
  setupScrollUI();
  setupClock();
  setupHeroSim();
});
