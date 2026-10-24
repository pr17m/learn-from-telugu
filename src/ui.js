/* ---------- Languages and courses ---------- */
// Telugu is always the base. The learner picks any of these targets at the top of every page.
const LANG = {
  kn: { en: "Kannada", nat: "ಕನ್ನಡ" },
  ta: { en: "Tamil", nat: "தமிழ்" },
  es: { en: "Spanish", nat: "Español" },
  it: { en: "Italian", nat: "Italiano" },
  fr: { en: "French", nat: "Français" }
};
const ALL = Object.keys(LANG);

const GROUPS = [
  { name: "Reading the script", ids: ["alphabet", "vowel-signs", "clusters"] },
  { name: "First sentences", ids: ["imperative", "pronouns", "nouns", "verbless"] },
  { name: "Tenses", ids: ["present", "past", "future"] },
  { name: "Building longer sentences", ids: ["cases", "participles", "adjectives", "numerals"] },
  { name: "Verb power-ups", ids: ["causative", "modal", "questions"] },
  { name: "Real-world use", ids: ["spoken"] }
];
// One path per language family. Each path is shown when at least one of its languages is on.
const COURSES = [
  { key: "dr", langs: ["kn", "ta"], modules: MODULES, groups: GROUPS, bonus: SOUNDS, bonusSub: "Guess words from Telugu" },
  { key: "eu", langs: ["es", "it", "fr"], modules: EU_MODULES, groups: EU_GROUPS, bonus: EU_BONUS, bonusSub: "Guess words you half know" }
];
const MOD = {}; // id -> module, with .course and .bonus set
COURSES.forEach(c => {
  c.ordered = c.groups.flatMap(g => g.ids.map(id => c.modules.find(m => m.id === id)));
  c.modules.forEach(m => { m.course = c; MOD[m.id] = m; });
  c.bonus.course = c; c.bonus.bonus = true; MOD[c.bonus.id] = c.bonus;
});
const STATUS = ["Not started", "Learning", "Done"];

const on = l => S.prefs.langs.includes(l);
const act = c => c.langs.filter(on);                 // languages of a course that are switched on
const activeCourses = () => COURSES.filter(c => act(c).length);
const ON_ALL = { langs: ALL };                       // pseudo-course spanning every language
const list = a => a.length < 2 ? a.join("") : a.slice(0, -1).join(", ") + " and " + a[a.length - 1];
const names = c => list(act(c).map(l => LANG[l].en));

/* ---------- Rendering helpers ---------- */
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;" }[c]));
const zha = s => esc(s).replace(/ఴ/g, '<span class="zha" title="Tamil ழ (zh)">ళ</span>');
const clean = s => s.replace(/\|/g, "");

// Resolve the ⟦cond|text⟧ / ⟦#langs⟧ prose markup (documented in data/04-europe.js) for the current languages.
function T(s, c) {
  if (s == null) return "";
  const a = act(c);
  const ok = cond => cond.trim().split(/\s+/).every(t => t === "one" ? a.length === 1 : t === "many" ? a.length > 1 : t[0] === "!" ? !on(t.slice(1)) : on(t));
  return String(s)
    .replace(/⟦#langs\+te⟧/g, () => list(["Telugu"].concat(a.map(l => LANG[l].en))))
    .replace(/⟦#langs⟧/g, () => list(a.map(l => LANG[l].en)))
    .replace(/⟦([^|⟧]*)\|([^⟧]*)⟧/g, (_, cond, t) => ok(cond) ? t : "")
    .replace(/\s+([.,;:])/g, "$1").trim();
}
const holds = (cond, c) => !cond || T(`⟦${cond}|x⟧`, c) === "x";

// A row's cell for language l: { text, reading } or null when the row has no such column.
function cellOf(c, r, l) {
  const i = c.langs.indexOf(l);
  if (i < 0) return null;
  const v = r[2 + i];
  if (v == null) return null;
  if (Array.isArray(v)) return { text: v[0], reading: v[1] };
  return { text: v, reading: c.key === "dr" && l === "ta" && typeof r[4] === "string" ? r[4] : null };
}
const rowOpt = r => r.find(x => x && typeof x === "object" && !Array.isArray(x)) || {};
const hasCell = (c, r, l) => { const x = cellOf(c, r, l); return !!x && x.text !== "—"; };
const rowShown = (c, r) => holds(rowOpt(r).only, c) && act(c).some(l => hasCell(c, r, l));
const secShown = (c, sec) => holds(sec.only, c) && sec.rows.some(r => rowShown(c, r));

function reading(l, x) {
  if (x.reading) return l === "ta" ? zha(x.reading) : esc(x.reading);
  if (l === "kn") return esc(knToTe(x.text));
  if (l === "ta") return zha(taToTe(x.text));
  if (l === "es") return esc(esToTe(x.text));
  if (l === "it") return esc(itToTe(x.text));
  return ""; // French readings are always written by hand
}
function cell(l, x, noRead) {
  const native = `<span class="nat">${esc(clean(x.text))}</span>`;
  if (noRead || x.text === "—") return native;
  const rd = reading(l, x);
  return rd ? `${native}<span class="rd" aria-label="Telugu reading">${rd}</span>` : native;
}

const JUDGE = `<span class="judge" role="group" aria-label="How did you do?"><button type="button" class="j-ok" data-j="1">✓ Knew it</button><button type="button" class="j-no" data-j="-1">✗ Missed</button></span>`;

function table(sec, pageId, si, c) {
  const ls = act(c), cols = sec.cols || [];
  const label = l => T(cols[2 + c.langs.indexOf(l)], c) || LANG[l].nat;
  const sc = (pageId && S.scores[pageId]) || {};
  const head = `<thead><tr><th class="c-en" scope="col">${esc(T(cols[0], c) || "Meaning")}</th><th class="c-te" scope="col">${esc(T(cols[1], c) || "తెలుగు")}</th>${ls.map(l => `<th class="c-l lc-${l}" scope="col">${esc(label(l))}</th>`).join("")}</tr></thead>`;
  const body = sec.rows.map((r, ri) => {
    if (!rowShown(c, r)) return "";
    const key = si + "." + ri, mark = sc[key] || {};
    const td = l => {
      const x = cellOf(c, r, l) || { text: "—" }, scoreable = pageId && x.text !== "—";
      const cls = mark[l] === 1 ? " k-ok" : mark[l] === -1 ? " k-no" : "";
      return `<td class="c-l lc-${l} hide-able${cls}" data-l="${esc(LANG[l].nat)}"${scoreable ? ` data-k="${key}" data-lg="${l}"` : ""}>${cell(l, x, sec.noRead)}${scoreable ? JUDGE : ""}</td>`;
    };
    return `<tr>
      <td class="c-en" data-l="Meaning">${esc(T(r[0], c))}</td>
      <td class="c-te" data-l="తెలుగు"><span class="nat">${esc(r[1])}</span></td>
      ${ls.map(td).join("")}
    </tr>`;
  }).join("");
  return `<div class="tablewrap"><table class="cmp">${head}<tbody>${body}</tbody></table></div>`;
}

function sectionHTML(pageId, c) {
  return (sec, i) => {
    if (!secShown(c, sec)) return "";
    const p = T(sec.p, c), tip = T(sec.tip, c);
    return `<section class="sec" id="s${i}">
    <h2>${esc(T(sec.h, c))}</h2>
    ${p ? `<p class="lede">${p}</p>` : ""}
    ${table(sec, pageId, i, c)}
    ${tip ? `<aside class="tip"><span class="tip-k">Telugu shortcut</span><p>${tip}</p></aside>` : ""}
  </section>`;
  };
}

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

const blank = () => ({ v: 2, status: {}, scores: {}, notes: {}, days: {}, prefs: { langs: ["kn", "ta"], read: true, practice: false }, last: null, lastPath: "home" });
let S = blank();
function adopt(o) {
  S = Object.assign(blank(), o);
  S.prefs = Object.assign(blank().prefs, S.prefs);
  // earlier versions stored one choice: "both", "kn" or "ta"
  if (S.prefs.lang) { S.prefs.langs = S.prefs.lang === "both" ? ["kn", "ta"] : [S.prefs.lang]; delete S.prefs.lang; }
  S.prefs.langs = ALL.filter(l => S.prefs.langs.includes(l));
  if (!S.prefs.langs.length) S.prefs.langs = ["kn"];
}
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
    const lang = JSON.parse(localStorage.getItem("sb_lang") || "null"); if (lang) S.prefs.langs = lang === "both" ? ["kn", "ta"] : [lang];
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
function setStatus(id, l, v) { S.status[id] = S.status[id] || {}; S.status[id][l] = v; activity(); }
function rowTotal(m, l) { let n = 0; m.sections.forEach(s => { if (secShown(m.course, s)) s.rows.forEach(r => { if (rowShown(m.course, r) && hasCell(m.course, r, l)) n++; }); }); return n; }
function scoreOf(id, l) {
  const sc = S.scores[id] || {}; let ok = 0, no = 0;
  for (const k in sc) { if (sc[k][l] === 1) ok++; else if (sc[k][l] === -1) no++; }
  return { ok, no, seen: ok + no };
}

/* ---------- Preferences ---------- */
const root = document.documentElement;
function applyPrefs() {
  const p = S.prefs;
  root.dataset.read = p.read ? "on" : "off";
  root.dataset.practice = p.practice ? "on" : "off";
  document.querySelectorAll("[data-lg-toggle]").forEach(b => b.setAttribute("aria-pressed", String(on(b.dataset.lgToggle))));
  document.getElementById("t-read").checked = p.read;
  document.getElementById("t-practice").checked = p.practice;
  document.getElementById("brand-sub").textContent = ["తెలుగు ద్వారా"].concat(p.langs.map(l => LANG[l].nat)).join(" · ");
}

/* ---------- Views ---------- */
const view = document.getElementById("view");
const titles = m => act(m.course).map(l => m[l]).join(" · ");

// The learning path: one straight line through every active course. Every page has one Back and one Next.
const path = () => ["home"].concat(activeCourses().flatMap(c => c.ordered.map(m => m.id).concat([c.bonus.id])));
const OFF = { progress: "My Progress", tool: "Script Converter", map: "Learning Path" };
function pageName(id) {
  if (id === "home") return "Start";
  return MOD[id] ? MOD[id].en : OFF[id] || "";
}
function counts() {
  const r = {};
  for (const c of activeCourses()) for (const l of act(c)) r[l] = c.modules.filter(m => st(m.id, l) === 2).length;
  return r;
}
const total = l => COURSES.find(c => c.langs.includes(l)).modules.length;
const moduleDone = m => act(m.course).every(l => st(m.id, l) === 2);

function renderFlow(active) {
  const bar = document.getElementById("flow"), P = path();
  let back = null, next = null;
  const i = P.indexOf(active);
  if (i >= 0) {
    if (i > 0) back = P[i - 1];
    next = i < P.length - 1 ? P[i + 1] : "progress";
  } else {
    back = P.includes(S.lastPath) ? S.lastPath : "home"; // off-path pages return to where you were
  }
  const a = (id, dir) => id ? `<a class="fl fl-${dir}" href="#${id}"><small>${dir === "back" ? "← Back" : "Next →"}</small><span>${esc(pageName(id))}</span></a>` : `<span class="fl fl-${dir} fl-none" aria-hidden="true"></span>`;
  bar.innerHTML = `${a(back, "back")}
    <a class="fl-map${active === "map" ? " on" : ""}" href="#map" aria-label="Learning path map"><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><circle cx="6" cy="5" r="2.4"/><circle cx="18" cy="12" r="2.4"/><circle cx="6" cy="19" r="2.4"/><path d="M8 6.2 15.8 10.8M15.8 13.2 8 17.8" fill="none" stroke-width="1.8"/></svg><span>Path</span></a>
    ${a(next, "next")}`;
  const c = counts();
  document.getElementById("mini").innerHTML = S.prefs.langs.map(l => `<span class="pk lc-${l}">${esc(LANG[l].nat)} ${c[l]}/${total(l)}</span>`).join("") + `<span class="ps">${streak()}-day streak</span>`;
}

function renderMap() {
  const P = path(), here = P.includes(S.lastPath) ? S.lastPath : "home";
  // nodes in path order, with a stage header before each group
  const items = [{ t: "node", id: "home", n: "▶", title: "Start here", sub: "How the course works" }];
  const many = activeCourses().length > 1;
  activeCourses().forEach(c => {
    if (many) items.push({ t: "stage", label: names(c) + " path", course: true });
    c.groups.forEach(g => {
      items.push({ t: "stage", label: g.name });
      g.ids.forEach(id => { const m = MOD[id]; items.push({ t: "node", id, n: String(c.ordered.indexOf(m) + 1).padStart(2, "0"), title: m.en, sub: titles(m), m }); });
    });
    items.push({ t: "stage", label: "Bonus" });
    items.push({ t: "node", id: c.bonus.id, n: "★", title: c.bonus.en, sub: c.bonusSub });
  });
  items.push({ t: "node", id: "progress", n: "✓", title: "Finish: My Progress", sub: "Review what you missed" });
  const W = 360, X = 30, NH = 58, GAP = 30, SH = 30;
  let y = 14, svg = "", pos = [];
  for (const it of items) {
    if (it.t === "stage") { svg += `<text class="g-stage${it.course ? " g-course" : ""}" x="${X + 30}" y="${y + 20}">${esc(it.label.toUpperCase())}</text>`; y += SH; continue; }
    pos.push({ it, y }); y += NH + GAP;
  }
  const H = y - GAP + 14;
  // edges first, so nodes draw on top
  let edges = "";
  for (let k = 0; k < pos.length - 1; k++) {
    const y1 = pos[k].y + NH / 2 + 15, y2 = pos[k + 1].y + NH / 2 - 17;
    const done = pos[k].it.m ? moduleDone(pos[k].it.m) : false;
    edges += `<line class="g-edge${done ? " g-done" : ""}" x1="${X}" y1="${y1}" x2="${X}" y2="${y2}" marker-end="url(#arr)"/>`;
  }
  let nodes = "";
  for (const { it, y } of pos) {
    const cy = y + NH / 2, isHere = it.id === here, m = it.m;
    const ls = m ? act(m.course) : [];
    const done = m ? moduleDone(m) : false;
    const stateTxt = ls.map(l => `${LANG[l].en} ${STATUS[st(it.id, l)]}`).join(", ");
    nodes += `<a href="#${it.id}" class="g-node${isHere ? " here" : ""}${done ? " done" : ""}" aria-label="${esc(it.title)}${stateTxt ? ". " + stateTxt : ""}${isHere ? ". You are here" : ""}">
      <rect class="g-card" x="${X + 26}" y="${y}" width="${W - X - 34}" height="${NH}" rx="10"/>
      <circle class="g-dot" cx="${X}" cy="${cy}" r="15"/>
      <text class="g-num" x="${X}" y="${cy + 4.5}" text-anchor="middle">${done ? "✓" : esc(it.n)}</text>
      <text class="g-title" x="${X + 40}" y="${y + 24}">${esc(it.title)}</text>
      <text class="g-sub" x="${X + 40}" y="${y + 43}">${esc(it.sub)}</text>
      ${ls.map((l, k) => `<circle class="g-s lc-${l} s${st(it.id, l)}" cx="${W - 20 - 14 * (ls.length - 1 - k)}" cy="${y + 19}" r="5"/>`).join("")}
      ${isHere ? `<text class="g-here" x="${W - 14}" y="${y + 47}" text-anchor="end">YOU ARE HERE</text>` : ""}
    </a>`;
  }
  const first = activeCourses()[0].ordered[0].id;
  view.innerHTML = `<article class="mod map">
    <header class="mod-h"><p class="eyebrow">Learning path</p><h1>Your route through the course</h1>
      <p class="lede">Follow the arrows from top to bottom. Tap any step to jump straight to it. The small dots on each step show your status in ${S.prefs.langs.map(l => `<span class="c-l lc-${l}">${LANG[l].en}</span>`).join(S.prefs.langs.length > 2 ? ", " : " and ")}: hollow = not started, half = learning, filled = done.</p></header>
    <div class="map-tools"><a class="btn" href="#${here === "home" ? first : here}">${here === "home" ? "Start module 1" : "Continue: " + esc(pageName(here))}</a><a class="btn btn-2" href="#progress">My Progress</a><a class="btn btn-2" href="#tool">Script Converter</a></div>
    <div class="graph"><svg viewBox="0 0 ${W} ${H}" width="100%" role="img" aria-label="Learning path: ${pos.length} steps in order">
      <defs><marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 10 5 0 10z" class="g-arrow"/></marker></defs>
      ${svg}${edges}${nodes}</svg></div>
  </article>`;
  const h = view.querySelector(".g-node.here");
  if (h) setTimeout(() => { const r = h.getBoundingClientRect(); window.scrollTo(0, Math.max(0, window.scrollY + r.top - window.innerHeight / 3)); }, 30);
}

// Title pills: Telugu plus each language that is on. t maps language code -> text.
const trio = t => `<div class="trio"><span class="pill lc-te">${esc(t.te)}</span>${S.prefs.langs.filter(l => t[l]).map(l => `<span class="pill lc-${l}">${esc(t[l])}</span>`).join("")}</div>`;
const titleTrio = m => `<div class="trio"><span class="pill lc-te">${esc(m.te)}</span>${act(m.course).map(l => `<span class="pill lc-${l}">${esc(m[l])}</span>`).join("")}</div>`;

function statusPanel(id, m) {
  const seg = l => `<div class="stat lc-${l}"><span class="stat-l">${LANG[l].nat} <small>${LANG[l].en}</small></span>
    <div class="seg seg-s" role="group" aria-label="${LANG[l].en} status">${STATUS.map((s, v) => `<button type="button" data-st="${l}" data-v="${v}" aria-pressed="${st(id, l) === v}">${s}</button>`).join("")}</div>
    ${scoreLine(id, m, l)}</div>`;
  return `<div class="panel" id="status-panel"><h2 class="panel-h">Your progress on this module</h2>${act(m.course).map(seg).join("")}</div>`;
}
function scoreLine(id, m, l) {
  const s = scoreOf(id, l), t = rowTotal(m, l);
  return `<p class="score">Practice: <b>${s.ok}</b> known, <b>${s.no}</b> missed, ${Math.max(0, t - s.seen)} not tried yet</p>`;
}

function practiceBar() {
  return `<div class="pbar" id="pbar"><p><b>Practice mode is on.</b> Tap a blurred ${list(S.prefs.langs.map(l => LANG[l].en)).replace(" and ", " or ")} cell to reveal it, then mark whether you knew it. Your marks are saved on this device.</p>
    <button type="button" class="link-btn" id="clear-practice">Clear practice marks for this page</button></div>`;
}

function renderModule(id) {
  const m = MOD[id], c = m.course;
  // a module whose languages are all switched off: go to the start instead
  if (!act(c).length) { location.replace("#home"); return false; }
  if (m.bonus) return renderBonus(m);
  const i = c.ordered.indexOf(m);
  const g = c.groups.find(g => g.ids.includes(id));
  if (S.last !== id) { S.last = id; activity(); }
  view.innerHTML = `<article class="mod">
    <header class="mod-h">
      <p class="eyebrow">${esc(names(c))} · Module ${i + 1} of ${c.ordered.length} · ${esc(g.name)}</p>
      <h1>${esc(m.en)}</h1>
      ${titleTrio(m)}
    </header>
    <div class="big"><span class="big-k">The big idea</span><p>${T(m.big, c)}</p></div>
    ${S.prefs.practice ? practiceBar() : ""}
    ${m.sections.map(sectionHTML(id, c)).join("")}
    <footer class="mod-f">
      ${statusPanel(id, m)}
      <div class="panel"><label class="panel-h" for="note">My notes</label>
        <textarea id="note" rows="4" placeholder="Words to remember, tricky forms, questions for a native speaker…">${esc(S.notes[id] || "")}</textarea>
        <p class="hint" id="note-state">Saved on this device as you type.</p></div>
      ${m.src && on("kn") ? `<p class="src">Lesson sequence and Kannada examples follow <a href="${m.src}" target="_blank" rel="noopener">Kannada Kalike: ${esc(m.kn)}</a>. Telugu${on("ta") ? " and Tamil" : ""} equivalents added here.</p>` : ""}
    </footer>
  </article>`;
  wireModule(id, m);
  return true;
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

function renderBonus(m) {
  const c = m.course;
  view.innerHTML = `<article class="mod">
    <header class="mod-h"><p class="eyebrow">${esc(names(c))} · Bonus · Pattern spotting</p><h1>${esc(m.en)}</h1>${titleTrio(m)}</header>
    <div class="big"><span class="big-k">The big idea</span><p>${T(m.big, c)}</p></div>
    ${S.prefs.practice ? practiceBar() : ""}
    ${m.sections.map(sectionHTML(m.id, c)).join("")}
  </article>`;
  const clr = document.getElementById("clear-practice");
  if (clr) clr.onclick = () => { delete S.scores[m.id]; save(); renderBonus(m); };
  return true;
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
  for (const c of activeCourses()) for (const m of c.ordered.concat([c.bonus])) {
    const sc = S.scores[m.id]; if (!sc) continue;
    for (const k in sc) for (const l of act(c)) if (sc[k][l] === -1) {
      const [si, ri] = k.split(".").map(Number); const r = m.sections[si] && m.sections[si].rows[ri];
      if (!r || !hasCell(c, r, l)) continue;
      items.push({ m, l, r, x: cellOf(c, r, l) });
    }
  }
  if (!items.length) return `<p class="empty">Nothing to review yet. Turn on <b>Practice</b>, open a module, reveal cells and mark the ones you missed. They will collect here.</p>`;
  return `<ul class="rev">${items.slice(0, 40).map(i => `<li><a href="#${i.m.id}" class="rev-m">${esc(i.m.en)}</a>
     <span class="rev-en">${esc(T(i.r[0], i.m.course))}</span><span class="rev-te">${esc(i.r[1])}</span>
     <span class="rev-a lc-${i.l}">${esc(clean(i.x.text))}<small>${reading(i.l, i.x)}</small></span></li>`).join("")}</ul>
     ${items.length > 40 ? `<p class="hint">Showing 40 of ${items.length}.</p>` : ""}`;
}

function renderProgress() {
  const c = counts(), langs = S.prefs.langs;
  const ok = {}, seen = {};
  langs.forEach(l => { ok[l] = 0; seen[l] = 0; COURSES.find(k => k.langs.includes(l)).modules.forEach(m => { const s = scoreOf(m.id, l); ok[l] += s.ok; seen[l] += s.seen; }); });
  const pct = l => seen[l] ? Math.round(ok[l] / seen[l] * 100) + "%" : "–";
  const learning = l => COURSES.find(k => k.langs.includes(l)).modules.filter(m => st(m.id, l) === 1).length;
  const nextUp = activeCourses().flatMap(k => k.ordered).find(m => !moduleDone(m));
  const seenAll = langs.reduce((n, l) => n + seen[l], 0);
  const tables = activeCourses().map(k => {
    const ls = act(k);
    const rows = k.ordered.map((m, i) => {
      const chip = l => `<span class="chip-s lc-${l} s${st(m.id, l)}">${STATUS[st(m.id, l)]}</span>`;
      const sc = s => s.seen ? `${s.ok}/${s.seen}` : "–";
      return `<tr><td class="pt-n">${String(i + 1).padStart(2, "0")}</td><td class="pt-m"><a href="#${m.id}">${esc(m.en)}</a>${S.notes[m.id] ? ' <span class="has-note" title="Has notes">✎</span>' : ""}</td>
        ${ls.map(l => `<td class="pt-l">${chip(l)}<small>${sc(scoreOf(m.id, l))}</small></td>`).join("")}</tr>`;
    }).join("");
    return `${activeCourses().length > 1 ? `<h3 class="pt-h">${esc(names(k))}</h3>` : ""}<div class="tablewrap"><table class="ptab"><thead><tr><th></th><th>Module</th>${ls.map(l => `<th class="c-l lc-${l}">${LANG[l].nat}</th>`).join("")}</tr></thead><tbody>${rows}</tbody></table></div>`;
  }).join("");
  view.innerHTML = `<article class="mod prog">
    <header class="mod-h"><p class="eyebrow">Saved on this device</p><h1>My Progress</h1>
      ${trio({ te: "నా ప్రగతి", kn: "ನನ್ನ ಪ್ರಗತಿ", ta: "என் முன்னேற்றம்", es: "Mi progreso", it: "I miei progressi", fr: "Mes progrès" })}</header>
    <div class="tiles">
      ${langs.map(l => `<div class="tile lc-${l}"><span class="tile-k">${LANG[l].en}</span><span class="tile-v">${c[l]}<small>/${total(l)}</small></span><span class="tile-s">modules done · ${learning(l)} in progress</span><div class="bar"><i style="--p:${c[l] / total(l) * 100}%"></i></div></div>`).join("")}
      <div class="tile t-st"><span class="tile-k">Study streak</span><span class="tile-v">${streak()}<small> day${streak() === 1 ? "" : "s"}</small></span><span class="tile-s">${S.days[today()] ? "You studied today." : "Open a module today to keep it going."}</span></div>
      <div class="tile t-pr"><span class="tile-k">Practice accuracy</span><span class="tile-v pr-v">${langs.map(l => `<span class="c-l lc-${l}">${pct(l)}</span>`).join("")}</span><span class="tile-s">${langs.map(l => LANG[l].en).join(" · ")}, from ${seenAll} marked answers</span></div>
    </div>
    ${nextUp ? `<a class="next-up" href="#${nextUp.id}"><small>Up next</small>${esc(nextUp.en)} <span>${esc(titles(nextUp))}</span></a>` : `<p class="next-up done-all">Every module is done in ${esc(list(langs.map(l => LANG[l].en)))}. Keep practising with the review list below.</p>`}
    <section class="sec"><h2>Activity</h2>${calendarHTML()}</section>
    <section class="sec"><h2>Every module</h2>${tables}
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
      adopt(o); save(true); applyPrefs(); renderProgress(); refresh();
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
  const lat = ["es", "it"].filter(on), samples = [{ l: "te", label: "Telugu sample", t: "నేను రేపు మీ ఇంటికి వస్తాను" }].concat([
    { l: "kn", t: "ನಾನು ನಾಳೆ ನಿಮ್ಮ ಮನೆಗೆ ಬರುತ್ತೇನೆ" }, { l: "ta", t: "நான் நாளை உங்கள் வீட்டுக்கு வருவேன்" },
    { l: "es", t: "Mañana voy a tu casa" }, { l: "it", t: "Domani vengo a casa tua" }
  ].filter(x => on(x.l)).map(x => Object.assign(x, { label: LANG[x.l].en + " sample" })));
  const how = [];
  if (on("kn")) how.push("Telugu becomes Kannada letter for letter, which is exact because the two alphabets match.");
  if (on("ta")) how.push("Telugu to Tamil is approximate, since Tamil has fewer letters.");
  const back = ["kn", "ta"].filter(on).map(l => LANG[l].en).concat(lat.map(l => LANG[l].en));
  if (back.length) how.push(`${list(back)} text is shown in Telugu script so you can read it aloud.`);
  if (on("fr")) how.push("French spelling has too many silent letters to read by rule, so French readings appear only in the lessons.");
  view.innerHTML = `<article class="mod">
    <header class="mod-h"><p class="eyebrow">Tool</p><h1>Script Converter</h1>
      ${trio({ te: "లిపి మార్పిడి", kn: "ಲಿಪಿ ಪರಿವರ್ತಕ", ta: "எழுத்து மாற்றி", es: "Conversor de escritura", it: "Convertitore di scrittura" })}</header>
    <div class="big"><span class="big-k">How it works</span><p>Type or paste text. ${how.join(" ")}</p></div>
    <label class="tl" for="tool-in">Your text</label>
    <textarea id="tool-in" rows="3" spellcheck="false">${esc(samples[1] ? samples[1].t : samples[0].t)}</textarea>
    <div class="chips" role="group" aria-label="Examples">
      ${samples.map(x => `<button type="button" class="chip" data-ex="${esc(x.t)}">${x.label}</button>`).join("")}
    </div>
    <div class="out" id="tool-out" aria-live="polite"></div>
  </article>`;
  const inp = document.getElementById("tool-in"), out = document.getElementById("tool-out");
  const run = () => {
    const s = inp.value;
    const hasTe = /[ఀ-౿]/.test(s), hasKn = /[ಀ-೿]/.test(s), hasTa = /[஀-௿]/.test(s), hasLat = /[A-Za-zÀ-ÿ]/.test(s);
    const box = (l, k, v, n) => `<div class="o lc-${l}"><span class="o-k">${k}</span><p class="o-v">${v}</p>${n ? `<p class="o-n">${n}</p>` : ""}</div>`;
    let h = "";
    if (hasTe && on("kn")) h += box("kn", "Kannada script (exact)", esc(teToKn(s)));
    if (hasTe && on("ta")) h += box("ta", "Tamil letters (approximate)", esc(teToTa(s)), "Letter-for-letter only. Real Tamil words often differ: the Telugu ఇంటికి is வீட்டுக்கு in Tamil.");
    if (hasKn && on("kn")) h += box("kn", "Kannada read in Telugu script", esc(knToTe(s)));
    if (hasTa && on("ta")) h += box("ta", "Tamil read in Telugu script", zha(taToTe(s)), "Applies Tamil’s k/g, t/d, p/b rules. An underlined <span class=\"zha\">ళ</span> is Tamil ழ.");
    if (hasLat && on("es")) h += box("es", "Read as Spanish, in Telugu script", esc(esToTe(s)));
    if (hasLat && on("it")) h += box("it", "Read as Italian, in Telugu script", esc(itToTe(s)));
    if (!h) h = `<p class="o-n">Type something in ${list(["Telugu"].concat(["kn", "ta"].filter(on).map(l => LANG[l].en), lat.length ? ["Latin letters"] : []))} to see it converted.</p>`;
    out.innerHTML = h;
  };
  inp.addEventListener("input", run);
  document.querySelectorAll("[data-ex]").forEach(b => b.onclick = () => { inp.value = b.dataset.ex; run(); });
  run();
}

// Demo row for "How to read the tables" and the word in the hero, one cell per language.
const DEMO = { te: "నేను వచ్చాను.", kn: "ನಾನು ಬಂದೆ.", ta: "நான் வந்தேன்.", es: "Vine.", it: "Sono venuto.", fr: ["Je suis venu.", "జ్ స్వీ వ్నూ."] };
const MILK = { te: ["పాలు"], kn: ["ಹಾಲು", "హాలు"], ta: ["பால்", "పాల్"], es: ["leche", "లేచే"], it: ["latte", "లాత్తే"], fr: ["lait", "లే"] };

function renderHome() {
  const cs = activeCourses(), langs = S.prefs.langs, all = names(ON_ALL);
  const P = path();
  const stages = cs.map(c => `${cs.length > 1 ? `<h3 class="hc">${esc(names(c))}</h3>` : ""}
      <ol class="stages">${c.groups.map((g, k) => `<li><span class="stg-n">${k + 1}</span><span class="stg-t">${esc(g.name)}<small>${g.ids.length} module${g.ids.length > 1 ? "s" : ""}</small></span></li>`).join('<li class="stg-arr" aria-hidden="true">↓</li>')}</ol>`).join("");
  const last = S.last && MOD[S.last] && P.includes(S.last) ? MOD[S.last] : null;
  const c = counts();
  const resume = last ? `<a class="resume" href="#${last.id}"><span class="resume-k">Continue where you left off</span><span class="resume-t">${esc(last.en)}</span>
      <span class="resume-s">${langs.map(l => `${LANG[l].nat} ${c[l]}/${total(l)}`).join(" · ")} · ${streak()}-day streak</span></a>` : "";
  const dr = act(COURSES[0]), eu = act(COURSES[1]);
  const why = [];
  if (dr.length) why.push(`${dr.length > 1 ? "Kannada and Tamil are" : LANG[dr[0]].en + " is"} Telugu’s Dravidian sister${dr.length > 1 ? "s" : ""}: ${COURSES[0].ordered.length} grammar modules put each Telugu pattern next to its ${names(COURSES[0])} equivalent${dr.length > 1 ? "s" : ""}.`);
  if (eu.length) why.push(`${names(COURSES[1])} ${eu.length > 1 ? "are" : "is"} not related to Telugu, but ${eu.length > 1 ? "they mark" : "it marks"} the person on the verb just as Telugu does, and ${COURSES[1].ordered.length} modules show each pattern side by side with Telugu.`);
  const first = cs[0].ordered[0];
  view.innerHTML = `<article class="home">
    ${resume}
    <section class="hero">
      <p class="eyebrow">For people who already speak Telugu</p>
      <h1>Learn ${esc(all)} through the Telugu you already know.</h1>
      <div class="bridge" aria-label="The word milk in ${langs.length + 1} languages">
        <div class="b lc-te"><span class="b-w">${MILK.te[0]}</span><span class="b-l">Telugu</span></div>
        ${langs.map(l => `<div class="b lc-${l}"><span class="b-w">${MILK[l][0]}</span><span class="b-r">${MILK[l][1]}</span><span class="b-l">${LANG[l].en}</span></div>`).join("")}
      </div>
      <p class="hero-p">${why.join(" ")} Every word is shown in its own script with a Telugu-script reading underneath, so you can say it before you can read it.</p>
      <div class="cta"><a class="btn" href="#${last ? last.id : first.id}">${last ? "Continue learning" : "Start with " + esc(first.en.toLowerCase())}</a></div>
    </section>
    <section class="howto">
      <h2>How to read the tables</h2>
      <div class="demo">${table({ rows: [["I came."].concat([DEMO.te], ALL.map(l => DEMO[l]))] }, null, 0, ON_ALL)}</div>
      <ul class="keys">
        <li><b>Big letters</b> show how the word is spelled in ${esc(all)}.</li>
        <li><b>Small Telugu letters</b> underneath show how to say it. Turn them off once you can read the ${langs.length > 1 ? "scripts" : "script"}.</li>
        <li><b>Choose your languages</b> with the buttons at the top. Every page shows only the languages you pick.</li>
        <li><b>Practice mode</b> hides the answers. Tap a cell to reveal it, then mark “Knew it” or “Missed”. Missed answers collect in My Progress.</li>
        <li><b>Your progress stays on this device:</b> module status for each language, practice marks, notes and your daily streak.</li>
      </ul>
    </section>
    <section class="mods"><h2>Your learning path</h2><p class="lede">The course is one straight path${cs.length > 1 ? `: first ${esc(names(cs[0]))}, then ${esc(names(cs[1]))}, each ending with a bonus page` : ", the alphabet and sounds first, ending with a bonus page"}. Use <b>Next</b> at the bottom of each page to move forward and <b>Back</b> to go back one step. To jump anywhere, open the <b>Path</b> map in the middle of the bottom bar.</p>
      ${stages}
      <a class="btn btn-2" href="#map">Open the learning path map</a></section>
    ${on("kn") ? `<p class="src">The grammar sequence and Kannada examples follow the 18 “Learn Basics” modules of <a href="https://kannadakalike.org/grammar-modules.php" target="_blank" rel="noopener">Kannada Kalike</a> (Kannada Language Chair, JNU). Telugu equivalents${on("ta") ? ", Tamil equivalents" : ""} and the Telugu-script readings were added for this course.</p>` : ""}
  </article>`;
}

function route() {
  const id = (location.hash || "#home").slice(1);
  let active = "home";
  if (MOD[id]) { if (!renderModule(id)) return; active = id; }
  else if (id === "tool") { renderTool(); active = "tool"; }
  else if (id === "progress") { renderProgress(); active = "progress"; }
  else if (id === "map") { renderMap(); active = "map"; }
  else renderHome();
  if (path().includes(active) && S.lastPath !== active) { S.lastPath = active; save(); }
  renderFlow(active);
  if (active !== "map") window.scrollTo(0, 0);
}
function refresh() { const id = (location.hash || "#home").slice(1); renderFlow(MOD[id] || OFF[id] ? id : "home"); }

/* ---------- Wiring ---------- */
document.getElementById("langs").innerHTML = ALL.map(l => `<button type="button" class="lg lc-${l}" data-lg-toggle="${l}" aria-pressed="false" title="${LANG[l].en}">${LANG[l].nat}</button>`).join("");
document.querySelectorAll("[data-lg-toggle]").forEach(b => b.onclick = () => {
  const l = b.dataset.lgToggle;
  if (on(l) && S.prefs.langs.length === 1) return; // keep at least one language
  S.prefs.langs = ALL.filter(x => x === l ? !on(x) : on(x));
  save(); applyPrefs();
  const y = window.scrollY; route(); window.scrollTo(0, y);
});
document.getElementById("t-read").onchange = e => { S.prefs.read = e.target.checked; save(); applyPrefs(); };
document.getElementById("t-practice").onchange = e => { S.prefs.practice = e.target.checked; save(); applyPrefs(); const y = window.scrollY; route(); window.scrollTo(0, y); };

view.addEventListener("click", e => {
  const j = e.target.closest(".judge button");
  if (j) {
    const td = j.closest("td"), id = (location.hash || "#home").slice(1), k = td.dataset.k, l = td.dataset.lg, v = +j.dataset.j;
    S.scores[id] = S.scores[id] || {}; S.scores[id][k] = S.scores[id][k] || {};
    if (S.scores[id][k][l] === v) delete S.scores[id][k][l]; else S.scores[id][k][l] = v;
    const m = MOD[id];
    if (m && !m.bonus && st(id, l) === 0) setStatus(id, l, 1);
    activity();
    td.classList.toggle("k-ok", S.scores[id][k][l] === 1);
    td.classList.toggle("k-no", S.scores[id][k][l] === -1);
    if (m && !m.bonus) { document.getElementById("status-panel").outerHTML = statusPanel(id, m); wireModule(id, m); }
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
  if (saved && saved.v === 2) adopt(saved); else { legacy(); save(); }
  applyPrefs();
  route();
})();
