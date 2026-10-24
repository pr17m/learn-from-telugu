/* ---------- Script conversion ---------- */
// Kannada -> Telugu script: the two Unicode blocks are aligned, so this is exact.
function knToTe(s) {
  let o = "";
  for (const ch of s) {
    const c = ch.codePointAt(0);
    o += (c >= 0x0C80 && c <= 0x0CFF) ? String.fromCodePoint(c - 0x80) : ch;
  }
  return o;
}
function teToKn(s) {
  let o = "";
  for (const ch of s) {
    const c = ch.codePointAt(0);
    o += (c >= 0x0C00 && c <= 0x0C7F) ? String.fromCodePoint(c + 0x80) : ch;
  }
  return o;
}

// Tamil -> Telugu-script pronunciation, applying Tamil voicing rules.
const TA_V = { "அ":"అ","ஆ":"ఆ","இ":"ఇ","ஈ":"ఈ","உ":"ఉ","ஊ":"ఊ","எ":"ఎ","ஏ":"ఏ","ஐ":"ఐ","ஒ":"ఒ","ஓ":"ఓ","ஔ":"ఔ" };
const TA_S = { "ா":"ా","ி":"ి","ீ":"ీ","ு":"ు","ூ":"ూ","ெ":"ె","ே":"ే","ை":"ై","ொ":"ొ","ோ":"ో","ௌ":"ౌ","்":"్" };
const TA_C = { "ங":"ఙ","ஞ":"ఞ","ண":"ణ","ந":"న","ன":"న","ம":"మ","ய":"య","ர":"ర","ல":"ల","வ":"వ","ள":"ళ","ழ":"ఴ","ஜ":"జ","ஶ":"శ","ஷ":"ష","ஸ":"స","ஹ":"హ","ற":"ఱ" };
const TA_STOP = { "க":["క","గ","క"], "ச":["స","స","చ","జ"], "ட":["ట","డ","ట"], "த":["త","ద","త"], "ப":["ప","బ","ప"] };
const TA_NASAL = new Set(["ங","ஞ","ண","ந","ன","ம"]);
const TA_HARD = new Set(["க","ச","ட","த","ப","ற","ஷ","ஸ","ஶ"]);
const TA_HOMORG = { "ங":"க", "ஞ":"ச", "ண":"ட", "ந":"த", "ம":"ப", "ன":"ற" };
const TA_WORDS = { "சென்னை":"చెన్నై", "சென்னையை":"చెన్నైయై", "சின்ன":"చిన్న", "சின்னது":"చిన్నదు", "காபி":"కాపి", "அஃறிணை":"అహ్ఱిణై", "சீக்கிரம்":"సీక్కిరమ్" };

function taUnits(word) {
  const u = [];
  const chars = [...word];
  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i];
    if (TA_STOP[ch] || TA_C[ch] || ch === "க") {
      let sign = "";
      if (TA_S[chars[i + 1]]) { sign = chars[i + 1]; i++; }
      u.push({ t: "c", c: ch, s: sign });
    } else if (TA_V[ch]) u.push({ t: "v", v: ch });
    else if (ch === "ஃ") u.push({ t: "x", raw: "హ్" });
    else u.push({ t: "x", raw: ch });
  }
  return u;
}

function taWord(word, prevWordEnd) {
  if (TA_WORDS[word]) return TA_WORDS[word];
  const u = taUnits(word);
  let out = "";
  for (let i = 0; i < u.length; i++) {
    const x = u[i], prev = u[i - 1] || null, next = u[i + 1] || null;
    if (x.t === "v") { out += TA_V[x.v]; continue; }
    if (x.t === "x") { out += x.raw; continue; }
    const pulli = x.s === "்";
    // nasal + homorganic stop -> anusvara
    if (pulli && TA_NASAL.has(x.c) && next && next.t === "c" && TA_HOMORG[x.c] === next.c && !(prev && prev.t === "c" && prev.s === "்")) { out += "ం"; continue; }
    let base;
    if (TA_STOP[x.c]) {
      const m = TA_STOP[x.c];
      let mode; // 0 initial, 1 soft, 2 hard (geminate), 3 voiced after nasal
      if (pulli) mode = 2; // a stop with no vowel is always voiceless (க்க, ட்க, final ட்)
      else if (!prev) mode = (prevWordEnd && prevWordEnd.c === x.c && prevWordEnd.s === "்") ? 2 : 0;
      else if (prev.t === "c" && prev.s === "்") {
        if (prev.c === x.c) mode = 2;
        else if (TA_NASAL.has(prev.c)) mode = 3;
        else if (TA_HARD.has(prev.c)) mode = 2;
        else mode = 1;
      } else mode = 1;
      if (x.c === "ச") base = mode === 0 ? "స" : mode === 1 ? "స" : mode === 2 ? "చ" : "జ";
      else base = mode === 0 || mode === 2 ? m[0] : m[1];
    } else if (x.c === "ற") {
      if (prev && prev.t === "c" && prev.s === "்" && prev.c === "ன") base = "డ్ర";
      else if (prev && prev.t === "c" && prev.s === "்" && prev.c === "ற") base = "ర";
      else if (pulli && next && next.t === "c" && next.c === "ற") { out += "ట్"; continue; }
      else if (pulli && next && next.t === "c") { out += "ర్"; continue; }
      else base = "ఱ";
    } else base = TA_C[x.c];
    out += base + (x.s ? TA_S[x.s] : "");
  }
  return out;
}

function taToTe(s) {
  // "|" marks a compound boundary; split into words while keeping separators
  const parts = s.split(/([\s|.,?!;:()\/·→—“”"'-]+)/);
  let out = "", lastUnits = null;
  for (const p of parts) {
    if (!p) continue;
    if (/^[\s|.,?!;:()\/·→—“”"'-]+$/.test(p)) {
      out += p.replace(/\|/g, "");
      if (/[^\s|]/.test(p.replace(/\|/g, ""))) lastUnits = null; // punctuation breaks gemination
      continue;
    }
    if (!/[஀-௿]/.test(p)) { out += p; lastUnits = null; continue; }
    const prevEnd = lastUnits && lastUnits.length ? lastUnits[lastUnits.length - 1] : null;
    out += taWord(p, prevEnd && prevEnd.t === "c" ? prevEnd : null);
    lastUnits = taUnits(p);
  }
  return out;
}

// Telugu -> Tamil letters (approximate, letter by letter) for the converter tool
const TE_TA_C = { "క":"க","ఖ":"க","గ":"க","ఘ":"க","ఙ":"ங","చ":"ச","ఛ":"ச","జ":"ஜ","ఝ":"ஜ","ఞ":"ஞ","ట":"ட","ఠ":"ட","డ":"ட","ఢ":"ட","ణ":"ண","త":"த","థ":"த","ద":"த","ధ":"த","న":"ந","ప":"ப","ఫ":"ப","బ":"ப","భ":"ப","మ":"ம","య":"ய","ర":"ர","ఱ":"ற","ల":"ல","వ":"வ","శ":"ஶ","ష":"ஷ","స":"ஸ","హ":"ஹ","ళ":"ள","ఴ":"ழ" };
const TE_ROW = c => "కఖగఘఙ".includes(c) ? "ங்" : "చఛజఝఞ".includes(c) ? "ஞ்" : "టఠడఢణ".includes(c) ? "ண்" : "తథదధన".includes(c) ? "ந்" : "ம்";
function teToTa(s) {
  const ch = [...s]; let o = "";
  for (let i = 0; i < ch.length; i++) {
    const c = ch[i], cp = c.codePointAt(0);
    if (TE_TA_C[c]) {
      let t = TE_TA_C[c];
      if (c === "న") {
        const prevIsLetter = i > 0 && /[ఀ-౿]/.test(ch[i - 1]);
        const nextCons = ch[i + 1] === "్" ? ch[i + 2] : null;
        if (prevIsLetter && !(nextCons && "తథదధ".includes(nextCons))) t = "ன";
      }
      o += t;
    } else if (c === "ం") o += TE_ROW(ch[i + 1] || "");
    else if (c === "ః") o += "ஃ";
    else if (c === "ఋ") o += "ரு";
    else if (c === "ృ") o += "்ரு";
    else if (cp >= 0x0C05 && cp <= 0x0C14) o += String.fromCodePoint(cp - 0x80);
    else if (cp >= 0x0C3E && cp <= 0x0C4D) o += String.fromCodePoint(cp - 0x80);
    else if (cp >= 0x0C66 && cp <= 0x0C6F) o += String.fromCodePoint(cp - 0x80);
    else o += c;
  }
  return o;
}


/* ---------- Spanish / Italian -> Telugu-script reading ---------- */
// Both spellings are regular enough to read by rule. Vowels use the long Telugu forms (a ā, e ē, o ō),
// which is how a Telugu speaker hears the open Spanish/Italian vowels. Cells can override with [text, reading].
const TE_VOW = { a: ["ఆ", "ా"], e: ["ఏ", "ే"], i: ["ఇ", "ి"], o: ["ఓ", "ో"], u: ["ఉ", "ు"], au: ["ఔ", "ౌ"] };
const LAT_C = { b: "బ", d: "ద", f: "ఫ", k: "క", l: "ల", m: "మ", n: "న", p: "ప", r: "ర", s: "స", t: "త", v: "వ", w: "వ" };
const isV = c => c && "aeiou".includes(c);

function teSyllables(units) {
  // units: {c: consonant(s)} | {v: "a".."u"} | {x: raw}
  let o = "";
  for (let i = 0; i < units.length; i++) {
    const u = units[i], n = units[i + 1];
    if (u.x !== undefined) o += u.x;
    else if (u.v) o += TE_VOW[u.v][0];
    else if (n && n.v) { o += u.c + TE_VOW[n.v][1]; i++; }
    else if ((u.c === "న" || u.c === "మ") && n && n.c && n.c !== u.c) o += "ం"; // n/m before another consonant: anusvara
    else o += u.c + "్";
  }
  return o;
}

function latUnits(word, lang) {
  const w = word.toLowerCase().replace(/ñ/g, "\u0001").replace(/ü/g, "\u0002").normalize("NFD").replace(/[\u0300-\u036f'’]/g, ""); // drops accents and apostrophes: c'è → చే
  const u = [];
  for (let i = 0; i < w.length; i++) {
    const c = w[i], n = w[i + 1], n2 = w[i + 2], front = n === "e" || n === "i";
    if (isV(c)) {
      const pu = u[u.length - 1];
      // i / u between a consonant and a vowel is a glide: పియానో, బువేనో, లుయి
      if ((c === "i" || c === "u") && isV(n) && pu && pu.c) { u.push({ v: c }); u.push({ c: c === "i" || n === "i" ? "య" : "వ" }); continue; }
      // between two vowels it is just a consonant: aiutare → ఆయుతారే
      if ((c === "i" || c === "u") && isV(n) && pu && pu.v) { u.push({ c: c === "i" ? "య" : "వ" }); continue; }
      if (c === "u" && pu && pu.v === "a" && !isV(n)) { pu.v = "au"; continue; } // autobús → ఔతోబుస్
      if (c === "i" && pu && pu.v && "aeo".includes(pu.v) && !isV(n)) { u.push({ c: "య" }); continue; } // hay, hoy → ఆయ్
      const pv = u.length && u[u.length - 1].v;
      if (pv === "i" || pv === "u") u.push({ c: pv === "i" ? "య" : "వ" }); // io → ఇయో, tuo → తువో
      u.push({ v: c }); continue;
    }
    if (c === "\u0001") { u.push({ c: "న్య" }); continue; }
    if (c === "\u0002") { u.push({ c: "వ" }); continue; }
    if (c === "h") continue;
    if (lang === "es") {
      if (c === "c" && n === "h") { u.push({ c: "చ" }); i++; continue; }
      if (c === "l" && n === "l") { u.push({ c: "య" }); i++; continue; }
      if (c === "r" && n === "r") { u.push({ c: "ర" }); i++; continue; }
      if (c === "q" && n === "u") { u.push({ c: "క" }); i++; continue; }
      if (c === "g" && n === "u" && (n2 === "e" || n2 === "i")) { u.push({ c: "గ" }); i++; continue; }
      if (c === "c") { u.push({ c: front ? "స" : "క" }); continue; }
      if (c === "g") { u.push({ c: front ? "హ" : "గ" }); continue; }
      if (c === "j") { u.push({ c: "హ" }); continue; }
      if (c === "z") { u.push({ c: "స" }); continue; }
      if (c === "v") { u.push({ c: "బ" }); continue; }
      if (c === "x") { u.push({ c: "క్స" }); continue; }
      if (c === "y") { if (isV(n)) u.push({ c: "య" }); else if (u.length && u[u.length - 1].v) u.push({ c: "య" }); else u.push({ v: "i" }); continue; }
    } else {
      const dbl = n === c;
      if (c === "g" && n === "l" && n2 === "i") { u.push({ c: "ల్య" }); i += isV(w[i + 3]) ? 2 : 1; continue; }
      if (c === "g" && n === "n") { u.push({ c: "న్య" }); i++; continue; }
      if (c === "s" && n === "c" && n2 === "h") { u.push({ c: "స్క" }); i += 2; continue; }
      if (c === "s" && n === "c" && (n2 === "e" || n2 === "i")) { u.push({ c: "ష" }); i++; if (n2 === "i" && isV(w[i + 2])) i++; continue; }
      if (c === "c" || c === "g") {
        const look = dbl ? n2 : n, frontL = look === "e" || look === "i";
        const hard = look === "h", base = c === "c" ? (frontL && !hard ? "చ" : "క") : (frontL && !hard ? "జ" : "గ");
        if (dbl) { u.push({ c: base }); i++; }
        u.push({ c: base });
        if (w[i + 1] === "h") i++;
        else if (frontL && w[i + 1] === "i" && isV(w[i + 2])) i++; // cia, gio: the i only softens
        continue;
      }
      if (c === "q" && n === "u") { u.push({ c: "క్వ" }); i++; continue; }
      if (c === "z") { u.push({ c: "ట్స" }); if (dbl) i++; continue; }
      if (c === "j" || c === "y") { u.push({ c: "య" }); continue; }
      if (c === "x") { u.push({ c: "క్స" }); continue; }
    }
    if (LAT_C[c]) { u.push({ c: LAT_C[c] }); continue; }
    u.push({ x: c });
  }
  return u;
}

function latToTe(s, lang) {
  return s.split(/([^A-Za-zÀ-ÿ'’]+)/).map(p => /[A-Za-zÀ-ÿ]/.test(p) ? teSyllables(latUnits(p, lang)) : p).join("");
}
const esToTe = s => latToTe(s, "es");
const itToTe = s => latToTe(s, "it");
