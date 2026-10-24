/* ---------- Rendering helpers ---------- */
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;" }[c]));
const zha = s => esc(s).replace(/ఴ/g, '<span class="zha" title="Tamil ழ (zh)">ళ</span>');
const clean = s => s.replace(/\|/g, "");

function cell(lang, text, override, noRead) {
  const native = esc(clean(text));
  if (noRead || text === "—") return `<span class="nat">${native}</span>`;
  let reading = lang === "kn" ? knToTe(text) : (override || taToTe(text));
  reading = lang === "kn" ? esc(reading) : zha(reading);
  return `<span class="nat">${native}</span><span class="rd" aria-label="Telugu reading">${reading}</span>`;
}

const JUDGE = `<span class="judge" role="group" aria-label="How did you do?"><button type="button" class="j-ok" data-j="1">✓ Knew it</button><button type="button" class="j-no" data-j="-1">✗ Missed</button></span>`;

function table(sec, pageId, si) {
  const cols = sec.cols || ["", "తెలుగు", "ಕನ್ನಡ", "தமிழ்"];
  const sc = (pageId && S.scores[pageId]) || {};
  const head = `<thead><tr><th class="c-en" scope="col">${esc(cols[0] || "Meaning")}</th><th class="c-te" scope="col">${esc(cols[1])}</th><th class="c-kn" scope="col">${esc(cols[2])}</th><th class="c-ta" scope="col">${esc(cols[3])}</th></tr></thead>`;
  const body = sec.rows.map((r, ri) => {
    const key = si + "." + ri, mark = sc[key] || {};
    const cls = l => mark[l] === 1 ? " k-ok" : mark[l] === -1 ? " k-no" : "";
    const scoreable = l => pageId && r[l === "kn" ? 2 : 3] !== "—";
    return `<tr>
      <td class="c-en" data-l="Meaning">${esc(r[0])}</td>
      <td class="c-te" data-l="తెలుగు"><span class="nat">${esc(r[1])}</span></td>
      <td class="c-kn hide-able${cls("kn")}" data-l="ಕನ್ನಡ"${scoreable("kn") ? ` data-k="${key}" data-lg="kn"` : ""}>${cell("kn", r[2], null, sec.noRead)}${scoreable("kn") ? JUDGE : ""}</td>
      <td class="c-ta hide-able${cls("ta")}" data-l="தமிழ்"${scoreable("ta") ? ` data-k="${key}" data-lg="ta"` : ""}>${cell("ta", r[3], r[4], sec.noRead)}${scoreable("ta") ? JUDGE : ""}</td>
    </tr>`;
  }).join("");
  return `<div class="tablewrap"><table class="cmp">${head}<tbody>${body}</tbody></table></div>`;
}

function sectionHTML(pageId) {
  return (sec, i) => `<section class="sec" id="s${i}">
    <h2>${esc(sec.h)}</h2>
    ${sec.p ? `<p class="lede">${sec.p}</p>` : ""}
    ${table(sec, pageId, i)}
    ${sec.tip ? `<aside class="tip"><span class="tip-k">Telugu shortcut</span><p>${sec.tip}</p></aside>` : ""}
  </section>`;
}

const GROUPS = [
  { name: "Reading the script", ids: ["alphabet", "vowel-signs", "clusters"] },
  { name: "First sentences", ids: ["imperative", "pronouns", "nouns", "verbless"] },
  { name: "Tenses", ids: ["present", "past", "future"] },
  { name: "Building longer sentences", ids: ["cases", "participles", "adjectives", "numerals"] },
  { name: "Verb power-ups", ids: ["causative", "modal", "questions"] },
  { name: "Real-world use", ids: ["spoken"] }
];
const LANGS = { kn: "Kannada", ta: "Tamil" };
const STATUS = ["Not started", "Learning", "Done"];

/* ---------- On-device memory ---------- */
// Uses the native Preferences store inside the iOS/Android app, and browser storage on the web.
const KV = (() => {
  const P = () => { try { return window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.Preferences; } catch (e) { return null; } };
  const KEY = "sb_state";
  return {
    async load() {
      try { const p = P(); if (p) { const r = await p.get({ key: KEY }); if (r && r.value) return JSON.parse(r.value); } } catch (e) {}
      try { const v = localStorage.getItem(KEY); return v ? JSON.parse(v) : null; } catch (e) { return null; }
    },
    save(obj) {
      const s = JSON.stringify(obj);
      try { localStorage.setItem(KEY, s); } catch (e) {}
      try { const p = P(); if (p) p.set({ key: KEY, value: s }); } catch (e) {}
    }
  };
})();

const blank = () => ({ v: 2, status: {}, scores: {}, notes: {}, days: {}, prefs: { lang: "both", read: true, practice: false }, last: null, lastPath: "home" });
let S = blank();
let saveTimer = null;
function save(now) {
  clearTimeout(saveTimer);
  if (now) KV.save(S); else saveTimer = setTimeout(() => KV.save(S), 250);
}
function legacy() {
  // carry over "done" marks from the first version of the site
  try {
    const d = JSON.parse(localStorage.getItem("sb_done") || "{}");
    for (const k in d) if (d[k]) S.status[k] = { kn: 2, ta: 2 };
    const lang = JSON.parse(localStorage.getItem("sb_lang") || "null"); if (lang) S.prefs.lang = lang;
  } catch (e) {}
}
const today = (d = new Date()) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
function activity(n = 1) { const t = today(); S.days[t] = (S.days[t] || 0) + n; save(); }
function streak() {
  let n = 0; const d = new Date();
  if (!S.days[today(d)]) d.setDate(d.getDate() - 1); // a streak survives until the end of today
  while (S.days[today(d)]) { n++; d.setDate(d.getDate() - 1); }
  return n;
}
const st = (id, l) => (S.status[id] && S.status[id][l]) || 0;
function setStatus(id, l, v) { S.status[id] = S.status[id] || { kn: 0, ta: 0 }; S.status[id][l] = v; activity(); }
function rowTotal(m, l) { let n = 0; m.sections.forEach(s => s.rows.forEach(r => { if (r[l === "kn" ? 2 : 3] !== "—") n++; })); return n; }
function scoreOf(id, l) {
  const sc = S.scores[id] || {}; let ok = 0, no = 0;
  for (const k in sc) { if (sc[k][l] === 1) ok++; else if (sc[k][l] === -1) no++; }
  return { ok, no, seen: ok + no };
}

/* ---------- Preferences ---------- */
const root = document.documentElement;
function applyPrefs() {
  const p = S.prefs;
  root.dataset.lang = p.lang;
  root.dataset.read = p.read ? "on" : "off";
  root.dataset.practice = p.practice ? "on" : "off";
  document.querySelectorAll("[data-set-lang]").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.setLang === p.lang)));
  document.getElementById("t-read").checked = p.read;
  document.getElementById("t-practice").checked = p.practice;
}

/* ---------- Views ---------- */
const view = document.getElementById("view");
const dots = id => `<span class="dots" aria-label="Kannada ${STATUS[st(id, "kn")]}, Tamil ${STATUS[st(id, "ta")]}"><i class="d d-kn s${st(id, "kn")}"></i><i class="d d-ta s${st(id, "ta")}"></i></span>`;

// The learning path: one straight line. Every page has exactly one Back and one Next.
const PATH = ["home"].concat(MODULES.map(m => m.id), ["sounds"]);
const OFF = { progress: "My Progress", tool: "Script Converter", map: "Learning Path" };
function pageName(id) {
  if (id === "home") return "Start";
  if (id === "sounds") return "Sound Shortcuts";
  const m = MODULES.find(m => m.id === id); return m ? m.en : OFF[id] || "";
}
function counts() {
  const r = { kn: 0, ta: 0 };
  for (const m of MODULES) for (const l of ["kn", "ta"]) if (st(m.id, l) === 2) r[l]++;
  return r;
}
function renderFlow(active) {
  const bar = document.getElementById("flow");
  let back = null, next = null;
  const i = PATH.indexOf(active);
  if (i >= 0) {
    if (i > 0) back = PATH[i - 1];
    next = i < PATH.length - 1 ? PATH[i + 1] : "progress";
  } else {
    back = S.lastPath || "home"; // off-path pages return to where you were
  }
  const a = (id, dir) => id ? `<a class="fl fl-${dir}" href="#${id}"><small>${dir === "back" ? "← Back" : "Next →"}</small><span>${esc(pageName(id))}</span></a>` : `<span class="fl fl-${dir} fl-none" aria-hidden="true"></span>`;
  bar.innerHTML = `${a(back, "back")}
    <a class="fl-map${active === "map" ? " on" : ""}" href="#map" aria-label="Learning path map"><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><circle cx="6" cy="5" r="2.4"/><circle cx="18" cy="12" r="2.4"/><circle cx="6" cy="19" r="2.4"/><path d="M8 6.2 15.8 10.8M15.8 13.2 8 17.8" fill="none" stroke-width="1.8"/></svg><span>Path</span></a>
    ${a(next, "next")}`;
  const c = counts();
  document.getElementById("mini").innerHTML = `<span class="pk">ಕನ್ನಡ ${c.kn}/${MODULES.length}</span><span class="pt">தமிழ் ${c.ta}/${MODULES.length}</span><span class="ps">${streak()}-day streak</span>`;
}

function renderMap() {
  const here = S.lastPath || "home";
  // nodes in path order, with a stage header before each group
  const items = [{ t: "node", id: "home", n: "▶", title: "Start here", sub: "How the course works" }];
  GROUPS.forEach(g => {
    items.push({ t: "stage", label: g.name });
    g.ids.forEach(id => { const i = MODULES.findIndex(m => m.id === id), m = MODULES[i]; items.push({ t: "node", id, n: String(i + 1).padStart(2, "0"), title: m.en, sub: m.kn + "  ·  " + m.ta, mod: true }); });
  });
  items.push({ t: "stage", label: "Bonus" });
  items.push({ t: "node", id: "sounds", n: "★", title: "Sound Shortcuts", sub: "Guess words from Telugu" });
  items.push({ t: "node", id: "progress", n: "✓", title: "Finish: My Progress", sub: "Review what you missed" });
  const W = 360, X = 30, NH = 58, GAP = 30, SH = 30;
  let y = 14, svg = "", pos = [];
  for (const it of items) {
    if (it.t === "stage") { svg += `<text class="g-stage" x="${X + 30}" y="${y + 20}">${esc(it.label.toUpperCase())}</text>`; y += SH; continue; }
    pos.push({ it, y }); y += NH + GAP;
  }
  const H = y - GAP + 14;
  // edges first, so nodes draw on top
  let edges = "";
  for (let k = 0; k < pos.length - 1; k++) {
    const y1 = pos[k].y + NH / 2 + 15, y2 = pos[k + 1].y + NH / 2 - 17;
    const done = pos[k].it.mod ? (st(pos[k].it.id, "kn") === 2 && st(pos[k].it.id, "ta") === 2) : false;
    edges += `<line class="g-edge${done ? " g-done" : ""}" x1="${X}" y1="${y1}" x2="${X}" y2="${y2}" marker-end="url(#arr)"/>`;
  }
  let nodes = "";
  for (const { it, y } of pos) {
    const cy = y + NH / 2, isHere = it.id === here;
    const sk = it.mod ? st(it.id, "kn") : -1, stt = it.mod ? st(it.id, "ta") : -1;
    const both = sk === 2 && stt === 2;
    const stateTxt = it.mod ? `Kannada ${STATUS[sk]}, Tamil ${STATUS[stt]}` : "";
    nodes += `<a href="#${it.id}" class="g-node${isHere ? " here" : ""}${both ? " done" : ""}" aria-label="${esc(it.title)}${stateTxt ? ". " + stateTxt : ""}${isHere ? ". You are here" : ""}">
      <rect class="g-card" x="${X + 26}" y="${y}" width="${W - X - 34}" height="${NH}" rx="10"/>
      <circle class="g-dot" cx="${X}" cy="${cy}" r="15"/>
      <text class="g-num" x="${X}" y="${cy + 4.5}" text-anchor="middle">${both ? "✓" : esc(it.n)}</text>
      <text class="g-title" x="${X + 40}" y="${y + 24}">${esc(it.title)}</text>
      <text class="g-sub" x="${X + 40}" y="${y + 43}">${esc(it.sub)}</text>
      ${it.mod ? `<circle class="g-s g-kn s${sk}" cx="${W - 34}" cy="${y + 19}" r="5"/><circle class="g-s g-ta s${stt}" cx="${W - 20}" cy="${y + 19}" r="5"/>` : ""}
      ${isHere ? `<text class="g-here" x="${W - 14}" y="${y + 47}" text-anchor="end">YOU ARE HERE</text>` : ""}
    </a>`;
  }
  view.innerHTML = `<article class="mod map">
    <header class="mod-h"><p class="eyebrow">Learning path</p><h1>Your route through the course</h1>
      <p class="lede">Follow the arrows from top to bottom. Tap any step to jump straight to it. The two small dots on each step show your <span class="c-kn">Kannada</span> and <span class="c-ta">Tamil</span> status: hollow = not started, half = learning, filled = done.</p></header>
    <div class="map-tools"><a class="btn" href="#${here === "home" ? "alphabet" : here}">${here === "home" ? "Start module 1" : "Continue: " + esc(pageName(here))}</a><a class="btn btn-2" href="#progress">My Progress</a><a class="btn btn-2" href="#tool">Script Converter</a></div>
    <div class="graph"><svg viewBox="0 0 ${W} ${H}" width="100%" role="img" aria-label="Learning path: ${pos.length} steps in order">
      <defs><marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 10 5 0 10z" class="g-arrow"/></marker></defs>
      ${svg}${edges}${nodes}</svg></div>
  </article>`;
  const h = view.querySelector(".g-node.here");
  if (h) setTimeout(() => { const r = h.getBoundingClientRect(); window.scrollTo(0, Math.max(0, window.scrollY + r.top - window.innerHeight / 3)); }, 30);
}

function titleTrio(m) {
  return `<div class="trio"><span class="pill p-te">${esc(m.te)}</span><span class="pill p-kn">${esc(m.kn)}</span><span class="pill p-ta">${esc(m.ta)}</span></div>`;
}

function statusPanel(id, m) {
  const seg = l => `<div class="stat stat-${l}"><span class="stat-l">${l === "kn" ? "ಕನ್ನಡ" : "தமிழ்"} <small>${LANGS[l]}</small></span>
    <div class="seg seg-s" role="group" aria-label="${LANGS[l]} status">${STATUS.map((s, v) => `<button type="button" data-st="${l}" data-v="${v}" aria-pressed="${st(id, l) === v}">${s}</button>`).join("")}</div>
    ${scoreLine(id, m, l)}</div>`;
  return `<div class="panel" id="status-panel"><h2 class="panel-h">Your progress on this module</h2>${seg("kn")}${seg("ta")}</div>`;
}
function scoreLine(id, m, l) {
  const s = scoreOf(id, l), t = rowTotal(m, l);
  return `<p class="score">Practice: <b>${s.ok}</b> known, <b>${s.no}</b> missed, ${t - s.seen} not tried yet</p>`;
}

function practiceBar(id) {
  return `<div class="pbar" id="pbar"><p><b>Practice mode is on.</b> Tap a blurred Kannada or Tamil cell to reveal it, then mark whether you knew it. Your marks are saved on this device.</p>
    <button type="button" class="link-btn" id="clear-practice">Clear practice marks for this module</button></div>`;
}

function renderModule(id) {
  const i = MODULES.findIndex(m => m.id === id);
  const m = MODULES[i];
  const g = GROUPS.find(g => g.ids.includes(id));
  if (S.last !== id) { S.last = id; activity(); }
  view.innerHTML = `<article class="mod">
    <header class="mod-h">
      <p class="eyebrow">Module ${i + 1} of ${MODULES.length} · ${esc(g.name)}</p>
      <h1>${esc(m.en)}</h1>
      ${titleTrio(m)}
    </header>
    <div class="big"><span class="big-k">The big idea</span><p>${m.big}</p></div>
    ${S.prefs.practice ? practiceBar(id) : ""}
    ${m.sections.map(sectionHTML(id)).join("")}
    <footer class="mod-f">
      ${statusPanel(id, m)}
      <div class="panel"><label class="panel-h" for="note">My notes</label>
        <textarea id="note" rows="4" placeholder="Words to remember, tricky forms, questions for a native speaker…">${esc(S.notes[id] || "")}</textarea>
        <p class="hint" id="note-state">Saved on this device as you type.</p></div>
      <p class="src">Lesson sequence and Kannada examples follow <a href="${m.src}" target="_blank" rel="noopener">Kannada Kalike: ${esc(m.kn)}</a>. Telugu and Tamil equivalents added here.</p>
    </footer>
  </article>`;
  wireModule(id, m);
}

function wireModule(id, m) {
  document.querySelectorAll("[data-st]").forEach(b => b.onclick = () => {
    setStatus(id, b.dataset.st, +b.dataset.v);
    document.getElementById("status-panel").outerHTML = statusPanel(id, m);
    wireModule(id, m); refresh();
  });
  const note = document.getElementById("note");
  if (note && !note.dataset.wired) {
    note.dataset.wired = "1";
    let t;
    note.oninput = () => {
      S.notes[id] = note.value; save();
      clearTimeout(t); t = setTimeout(() => { activity(); document.getElementById("note-state").textContent = "Saved."; }, 800);
    };
  }
  const clr = document.getElementById("clear-practice");
  if (clr) clr.onclick = () => { delete S.scores[id]; save(); renderModule(id); };
}

function renderSounds() {
  const m = SOUNDS;
  view.innerHTML = `<article class="mod">
    <header class="mod-h"><p class="eyebrow">Bonus · Pattern spotting</p><h1>${esc(m.en)}</h1>${titleTrio(m)}</header>
    <div class="big"><span class="big-k">The big idea</span><p>${m.big}</p></div>
    ${S.prefs.practice ? practiceBar("sounds") : ""}
    ${m.sections.map(sectionHTML("sounds")).join("")}
  </article>`;
  const clr = document.getElementById("clear-practice");
  if (clr) clr.onclick = () => { delete S.scores.sounds; save(); renderSounds(); };
}

function calendarHTML() {
  // 12 weeks, columns = weeks, rows = Mon..Sun, ending this week
  const end = new Date(); const dow = (end.getDay() + 6) % 7;
  const start = new Date(end); start.setDate(end.getDate() - dow - 7 * 11);
  let cells = "";
  for (let w = 0; w < 12; w++) for (let d = 0; d < 7; d++) {
    const day = new Date(start); day.setDate(start.getDate() + w * 7 + d);
    const k = today(day), n = S.days[k] || 0, future = day > end;
    const lv = future ? "f" : n === 0 ? 0 : n < 3 ? 1 : n < 8 ? 2 : n < 20 ? 3 : 4;
    cells += `<i class="cal-c l${lv}" style="grid-column:${w + 1};grid-row:${d + 1}" title="${k}: ${n} activit${n === 1 ? "y" : "ies"}"></i>`;
  }
  const active = Object.keys(S.days).filter(k => S.days[k]).length;
  return `<div class="cal" aria-label="Study activity over the last 12 weeks">${cells}</div>
    <div class="cal-key"><span>Less</span><i class="cal-c l0"></i><i class="cal-c l1"></i><i class="cal-c l2"></i><i class="cal-c l3"></i><i class="cal-c l4"></i><span>More</span><span class="cal-tot">${active} day${active === 1 ? "" : "s"} studied in total</span></div>`;
}

function reviewList() {
  const items = [];
  for (const m of MODULES.concat([SOUNDS])) {
    const sc = S.scores[m.id]; if (!sc) continue;
    for (const k in sc) for (const l of ["kn", "ta"]) if (sc[k][l] === -1) {
      const [si, ri] = k.split(".").map(Number); const r = m.sections[si] && m.sections[si].rows[ri]; if (!r) continue;
      items.push({ m, l, r });
    }
  }
  if (!items.length) return `<p class="empty">Nothing to review yet. Turn on <b>Practice</b>, open a module, reveal cells and mark the ones you missed. They will collect here.</p>`;
  return `<ul class="rev">${items.slice(0, 40).map(x => `<li><a href="#${x.m.id}" class="rev-m">${esc(x.m.en)}</a>
     <span class="rev-en">${esc(x.r[0])}</span><span class="rev-te">${esc(x.r[1])}</span>
     <span class="rev-a rev-${x.l}">${esc(clean(x.r[x.l === "kn" ? 2 : 3]))}<small>${x.l === "kn" ? esc(knToTe(x.r[2])) : zha(x.r[4] || taToTe(x.r[3]))}</small></span></li>`).join("")}</ul>
     ${items.length > 40 ? `<p class="hint">Showing 40 of ${items.length}.</p>` : ""}`;
}

function renderProgress() {
  const c = counts(), N = MODULES.length;
  let ok = { kn: 0, ta: 0 }, seen = { kn: 0, ta: 0 };
  MODULES.forEach(m => ["kn", "ta"].forEach(l => { const s = scoreOf(m.id, l); ok[l] += s.ok; seen[l] += s.seen; }));
  const pct = l => seen[l] ? Math.round(ok[l] / seen[l] * 100) + "%" : "–";
  const learning = l => MODULES.filter(m => st(m.id, l) === 1).length;
  const nextUp = MODULES.find(m => st(m.id, "kn") < 2 || st(m.id, "ta") < 2);
  const rows = MODULES.map((m, i) => {
    const sk = scoreOf(m.id, "kn"), stt = scoreOf(m.id, "ta");
    const chip = l => `<span class="chip-s c-${l} s${st(m.id, l)}">${STATUS[st(m.id, l)]}</span>`;
    const sc = s => s.seen ? `${s.ok}/${s.seen}` : "–";
    return `<tr><td class="pt-n">${String(i + 1).padStart(2, "0")}</td><td class="pt-m"><a href="#${m.id}">${esc(m.en)}</a>${S.notes[m.id] ? ' <span class="has-note" title="Has notes">✎</span>' : ""}</td>
      <td class="pt-kn">${chip("kn")}<small>${sc(sk)}</small></td><td class="pt-ta">${chip("ta")}<small>${sc(stt)}</small></td></tr>`;
  }).join("");
  view.innerHTML = `<article class="mod prog">
    <header class="mod-h"><p class="eyebrow">Saved on this device</p><h1>My Progress</h1>
      <div class="trio"><span class="pill p-te">నా ప్రగతి</span><span class="pill p-kn">ನನ್ನ ಪ್ರಗತಿ</span><span class="pill p-ta">என் முன்னேற்றம்</span></div></header>
    <div class="tiles">
      <div class="tile t-kn"><span class="tile-k">Kannada</span><span class="tile-v">${c.kn}<small>/${N}</small></span><span class="tile-s">modules done · ${learning("kn")} in progress</span><div class="bar"><i style="--p:${c.kn / N * 100}%"></i></div></div>
      <div class="tile t-ta"><span class="tile-k">Tamil</span><span class="tile-v">${c.ta}<small>/${N}</small></span><span class="tile-s">modules done · ${learning("ta")} in progress</span><div class="bar"><i style="--p:${c.ta / N * 100}%"></i></div></div>
      <div class="tile t-st"><span class="tile-k">Study streak</span><span class="tile-v">${streak()}<small> day${streak() === 1 ? "" : "s"}</small></span><span class="tile-s">${S.days[today()] ? "You studied today." : "Open a module today to keep it going."}</span></div>
      <div class="tile t-pr"><span class="tile-k">Practice accuracy</span><span class="tile-v pr-v"><span class="c-kn">${pct("kn")}</span><span class="c-ta">${pct("ta")}</span></span><span class="tile-s">Kannada · Tamil, from ${seen.kn + seen.ta} marked answers</span></div>
    </div>
    ${nextUp ? `<a class="next-up" href="#${nextUp.id}"><small>Up next</small>${esc(nextUp.en)} <span>${esc(nextUp.kn)} · ${esc(nextUp.ta)}</span></a>` : `<p class="next-up done-all">All 18 modules are done in both languages. Keep practising with the review list below.</p>`}
    <section class="sec"><h2>Activity</h2>${calendarHTML()}</section>
    <section class="sec"><h2>Every module</h2>
      <div class="tablewrap"><table class="ptab"><thead><tr><th></th><th>Module</th><th class="c-kn">ಕನ್ನಡ</th><th class="c-ta">தமிழ்</th></tr></thead><tbody>${rows}</tbody></table></div>
      <p class="hint">Numbers under each status are practice answers known out of marked.</p></section>
    <section class="sec"><h2>Review list</h2><p class="lede">Answers you marked as missed. Go back to the module and practise them again; marking one “Knew it” removes it from this list.</p>${reviewList()}</section>
    <section class="sec"><h2>Backup</h2>
      <p class="lede">Your progress lives only on this device. To move it to another phone or browser, copy the backup code here and paste it there.</p>
      <div class="bk">
        <button type="button" class="btn" id="bk-copy">Copy backup code</button>
        <label class="tl" for="bk-in">Restore from a backup code</label>
        <textarea id="bk-in" rows="3" placeholder="Paste a backup code here"></textarea>
        <div class="bk-row"><button type="button" class="btn btn-2" id="bk-restore">Restore</button><button type="button" class="link-btn danger" id="bk-reset">Reset all progress</button></div>
        <p class="hint" id="bk-msg" aria-live="polite"></p>
      </div></section>
  </article>`;
  const msg = t => document.getElementById("bk-msg").textContent = t;
  document.getElementById("bk-copy").onclick = async () => {
    const code = JSON.stringify(S);
    try { await navigator.clipboard.writeText(code); msg("Backup code copied. Paste it into My Progress on your other device."); }
    catch (e) { const ta = document.getElementById("bk-in"); ta.value = code; ta.focus(); ta.select(); msg("Copying isn’t allowed here, so the code is selected in the box. Copy it from there."); }
  };
  document.getElementById("bk-restore").onclick = () => {
    try {
      const o = JSON.parse(document.getElementById("bk-in").value.trim());
      if (!o || o.v !== 2 || typeof o.status !== "object") throw 0;
      S = Object.assign(blank(), o); save(true); applyPrefs(); renderProgress(); refresh();
      document.getElementById("bk-msg").textContent = "Progress restored.";
    } catch (e) { msg("That doesn’t look like a Kannada Learning backup code. Copy the whole code and try again."); }
  };
  let armed = false;
  document.getElementById("bk-reset").onclick = e => {
    if (!armed) { armed = true; e.target.textContent = "Tap again to erase everything"; setTimeout(() => { armed = false; if (e.target.isConnected) e.target.textContent = "Reset all progress"; }, 4000); return; }
    const prefs = S.prefs; S = blank(); S.prefs = prefs; save(true); renderProgress(); refresh(); msg("All progress erased.");
  };
}

function renderTool() {
  view.innerHTML = `<article class="mod">
    <header class="mod-h"><p class="eyebrow">Tool</p><h1>Script Converter</h1>
      <div class="trio"><span class="pill p-te">లిపి మార్పిడి</span><span class="pill p-kn">ಲಿಪಿ ಪರಿವರ್ತಕ</span><span class="pill p-ta">எழுத்து மாற்றி</span></div></header>
    <div class="big"><span class="big-k">How it works</span><p>Type or paste in any of the three scripts. Telugu becomes Kannada letter for letter, which is exact because the two alphabets match. Telugu to Tamil is approximate, since Tamil has fewer letters. Kannada or Tamil text is shown back in Telugu script so you can read it aloud.</p></div>
    <label class="tl" for="tool-in">Your text</label>
    <textarea id="tool-in" rows="3" spellcheck="false">నేను రేపు మీ ఇంటికి వస్తాను</textarea>
    <div class="chips" role="group" aria-label="Examples">
      <button type="button" class="chip" data-ex="నేను రేపు మీ ఇంటికి వస్తాను">Telugu sample</button>
      <button type="button" class="chip" data-ex="ನಾನು ನಾಳೆ ನಿಮ್ಮ ಮನೆಗೆ ಬರುತ್ತೇನೆ">Kannada sample</button>
      <button type="button" class="chip" data-ex="நான் நாளை உங்கள் வீட்டுக்கு வருவேன்">Tamil sample</button>
    </div>
    <div class="out" id="tool-out" aria-live="polite"></div>
  </article>`;
  const inp = document.getElementById("tool-in"), out = document.getElementById("tool-out");
  const run = () => {
    const s = inp.value;
    const hasTe = /[ఀ-౿]/.test(s), hasKn = /[ಀ-೿]/.test(s), hasTa = /[஀-௿]/.test(s);
    let h = "";
    if (hasTe) {
      h += `<div class="o o-kn"><span class="o-k">Kannada script (exact)</span><p class="o-v">${esc(teToKn(s))}</p></div>`;
      h += `<div class="o o-ta"><span class="o-k">Tamil letters (approximate)</span><p class="o-v">${esc(teToTa(s))}</p><p class="o-n">Letter-for-letter only. Real Tamil words often differ: the Telugu ఇంటికి is வீட்டுக்கு in Tamil.</p></div>`;
    }
    if (hasKn) h += `<div class="o o-kn"><span class="o-k">Kannada read in Telugu script</span><p class="o-v">${esc(knToTe(s))}</p></div>`;
    if (hasTa) h += `<div class="o o-ta"><span class="o-k">Tamil read in Telugu script</span><p class="o-v">${zha(taToTe(s))}</p><p class="o-n">Applies Tamil’s k/g, t/d, p/b rules. An underlined <span class="zha">ళ</span> is Tamil ழ.</p></div>`;
    if (!h) h = `<p class="o-n">Type something in Telugu, Kannada or Tamil script to see it converted.</p>`;
    out.innerHTML = h;
  };
  inp.addEventListener("input", run);
  document.querySelectorAll("[data-ex]").forEach(b => b.onclick = () => { inp.value = b.dataset.ex; run(); });
  run();
}

function renderHome() {
  const groups = GROUPS.map(g => `<div class="hg"><h3>${esc(g.name)}</h3><ol class="hl">${g.ids.map(id => {
    const i = MODULES.findIndex(m => m.id === id), m = MODULES[i];
    return `<li><a href="#${id}"><span class="hl-n">${String(i + 1).padStart(2, "0")}</span><span class="hl-t">${esc(m.en)}<small>${esc(m.te)} · ${esc(m.kn)} · ${esc(m.ta)}</small></span>${dots(id)}</a></li>`;
  }).join("")}</ol></div>`).join("");
  const last = S.last && MODULES.find(m => m.id === S.last);
  const c = counts();
  const resume = last ? `<a class="resume" href="#${last.id}"><span class="resume-k">Continue where you left off</span><span class="resume-t">${esc(last.en)}</span>
      <span class="resume-s">ಕನ್ನಡ ${c.kn}/${MODULES.length} · தமிழ் ${c.ta}/${MODULES.length} · ${streak()}-day streak</span></a>` : "";
  view.innerHTML = `<article class="home">
    ${resume}
    <section class="hero">
      <p class="eyebrow">For people who already speak Telugu</p>
      <h1>Learn Kannada and Tamil through the Telugu you already know.</h1>
      <div class="bridge" aria-label="The word milk in three languages">
        <div class="b b-te"><span class="b-w">పాలు</span><span class="b-l">Telugu</span></div>
        <div class="b b-kn"><span class="b-w">ಹಾಲು</span><span class="b-r">హాలు</span><span class="b-l">Kannada</span></div>
        <div class="b b-ta"><span class="b-w">பால்</span><span class="b-r">పాల్</span><span class="b-l">Tamil</span></div>
      </div>
      <p class="hero-p">All three are Dravidian sisters. Each of the 18 grammar modules below puts a Telugu pattern next to its Kannada and Tamil equivalents, in native script with a Telugu-script reading underneath, so you can say every word before you can read the new letters.</p>
      <div class="cta"><a class="btn" href="#${last ? last.id : "alphabet"}">${last ? "Continue learning" : "Start with the alphabet"}</a></div>
    </section>
    <section class="howto">
      <h2>How to read the tables</h2>
      <div class="demo">${table({ rows: [["I came.", "నేను వచ్చాను.", "ನಾನು ಬಂದೆ.", "நான் வந்தேன்."]] }, null, 0)}</div>
      <ul class="keys">
        <li><b>Big letters</b> show how the word is spelled in Kannada or Tamil.</li>
        <li><b>Small Telugu letters</b> underneath show how to say it. Turn them off once you can read the script.</li>
        <li><b>Practice mode</b> hides the answers. Tap a cell to reveal it, then mark “Knew it” or “Missed”. Missed answers collect in My Progress.</li>
        <li><b>Your progress stays on this device:</b> module status for each language, practice marks, notes and your daily streak.</li>
      </ul>
    </section>
    <section class="mods"><h2>Your learning path</h2><p class="lede">The course is one straight path: the alphabet first, then 18 grammar modules in six stages, then a bonus page. Use <b>Next</b> at the bottom of each page to move forward and <b>Back</b> to go back one step. To jump anywhere, open the <b>Path</b> map in the middle of the bottom bar.</p>
      <ol class="stages">${GROUPS.map((g, k) => `<li><span class="stg-n">${k + 1}</span><span class="stg-t">${esc(g.name)}<small>${g.ids.length} module${g.ids.length > 1 ? "s" : ""}</small></span></li>`).join('<li class="stg-arr" aria-hidden="true">↓</li>')}</ol>
      <a class="btn btn-2" href="#map">Open the learning path map</a></section>
    <p class="src">The grammar sequence and Kannada examples follow the 18 “Learn Basics” modules of <a href="https://kannadakalike.org/grammar-modules.php" target="_blank" rel="noopener">Kannada Kalike</a> (Kannada Language Chair, JNU). Telugu equivalents, Tamil equivalents and the Telugu-script readings were added for this course.</p>
  </article>`;
}

function route() {
  const id = (location.hash || "#home").slice(1);
  let active = "home";
  if (MODULES.some(m => m.id === id)) { renderModule(id); active = id; }
  else if (id === "sounds") { renderSounds(); active = "sounds"; }
  else if (id === "tool") { renderTool(); active = "tool"; }
  else if (id === "progress") { renderProgress(); active = "progress"; }
  else if (id === "map") { renderMap(); active = "map"; }
  else renderHome();
  if (PATH.includes(active) && S.lastPath !== active) { S.lastPath = active; save(); }
  renderFlow(active);
  if (active !== "map") window.scrollTo(0, 0);
}
function refresh() { const id = (location.hash || "#home").slice(1); renderFlow(PATH.includes(id) || OFF[id] ? id : "home"); }

/* ---------- Wiring ---------- */
document.querySelectorAll("[data-set-lang]").forEach(b => b.onclick = () => { S.prefs.lang = b.dataset.setLang; save(); applyPrefs(); });
document.getElementById("t-read").onchange = e => { S.prefs.read = e.target.checked; save(); applyPrefs(); };
document.getElementById("t-practice").onchange = e => { S.prefs.practice = e.target.checked; save(); applyPrefs(); const y = window.scrollY; route(); window.scrollTo(0, y); };

view.addEventListener("click", e => {
  const j = e.target.closest(".judge button");
  if (j) {
    const td = j.closest("td"), id = (location.hash || "#home").slice(1), k = td.dataset.k, l = td.dataset.lg, v = +j.dataset.j;
    S.scores[id] = S.scores[id] || {}; S.scores[id][k] = S.scores[id][k] || {};
    if (S.scores[id][k][l] === v) delete S.scores[id][k][l]; else S.scores[id][k][l] = v;
    if (MODULES.some(m => m.id === id) && st(id, l) === 0) setStatus(id, l, 1);
    activity();
    td.classList.toggle("k-ok", S.scores[id][k][l] === 1);
    td.classList.toggle("k-no", S.scores[id][k][l] === -1);
    const m = MODULES.find(m => m.id === id);
    if (m) { document.getElementById("status-panel").outerHTML = statusPanel(id, m); wireModule(id, m); }
    refresh();
    return;
  }
  const td = e.target.closest("td.hide-able");
  if (td && root.dataset.practice === "on") td.classList.toggle("revealed");
});
window.addEventListener("hashchange", route);
document.addEventListener("visibilitychange", () => { if (document.visibilityState === "hidden") save(true); });
window.addEventListener("pagehide", () => save(true));

(async () => {
  const saved = await KV.load();
  if (saved && saved.v === 2) S = Object.assign(blank(), saved); else { legacy(); save(); }
  applyPrefs();
  route();
})();
