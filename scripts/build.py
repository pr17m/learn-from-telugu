#!/usr/bin/env python3
"""Build Sodara Bhashalu from src/.

Outputs:
  www/                      offline web app (PWA). Also the webDir that Capacitor copies into the Android and iOS apps.
  dist/sodara-bhashalu.html single-file page that loads fonts from Google Fonts (the claude.ai artifact version).

Needs: python3, and `npm install` run once (fonts come from the @fontsource packages).
Usage: npm run build    (or: python3 scripts/build.py)
"""
import hashlib, json, pathlib, re, shutil

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC, WWW, DIST = ROOT / "src", ROOT / "www", ROOT / "dist"
FONTSOURCE = ROOT / "node_modules" / "@fontsource"
DATA_FILES = sorted((SRC / "data").glob("*.js"))


def page(head_html=None):
    """Assemble the page body (no doctype). head_html replaces the Google Fonts links."""
    s = (SRC / "shell.html").read_text(encoding="utf-8")
    s = s.replace("/*STYLE*/", (SRC / "style.css").read_text(encoding="utf-8"))
    s = s.replace("/*DATA*/", "\n".join(f.read_text(encoding="utf-8") for f in DATA_FILES))
    s = s.replace("/*CONVERT*/", (SRC / "convert.js").read_text(encoding="utf-8"))
    s = s.replace("/*UI*/", (SRC / "ui.js").read_text(encoding="utf-8"))
    if head_html is not None:
        a = s.index('<link rel="preconnect" href="https://fonts.googleapis.com">')
        b = s.index("<style>")
        s = s[:a] + head_html + s[b:]
    return s


def local_fonts():
    """Copy the needed woff2 subsets into www/fonts and return @font-face CSS."""
    if not FONTSOURCE.exists():
        raise SystemExit("Fonts missing: run `npm install` first.")
    want = {"anek-telugu": ["telugu", "latin"], "anek-kannada": ["kannada"], "anek-tamil": ["tamil"],
            "anek-latin": ["latin"], "source-serif-4": ["latin"]}
    out = WWW / "fonts"
    shutil.rmtree(out, ignore_errors=True)
    out.mkdir(parents=True)
    faces = []
    for pkg, subsets in want.items():
        for w in ["400", "600", "700"]:
            if pkg == "source-serif-4" and w == "700":
                continue
            css = (FONTSOURCE / pkg / f"{w}.css").read_text()
            for block in re.findall(r"/\*[^*]*\*/\s*@font-face\s*\{[^}]*\}", css):
                m = re.search(r"/\* ([\w-]+) \*/", block)
                sub = m.group(1)[len(pkg) + 1:-len(f"-{w}-normal")] if m else ""
                if sub not in subsets:
                    continue
                f = re.search(r"files/([\w.-]+\.woff2)", block).group(1)
                shutil.copy(FONTSOURCE / pkg / "files" / f, out / f)
                fam = re.search(r"font-family:\s*'([^']+)'", block).group(1)
                ur = re.search(r"unicode-range:\s*([^;]+);", block).group(1)
                faces.append(f"@font-face{{font-family:'{fam}';font-style:normal;font-display:swap;"
                             f"font-weight:{w};src:url(fonts/{f}) format('woff2');unicode-range:{ur};}}")
    return "\n".join(faces)


def build_www():
    head = ('<link rel="manifest" href="manifest.webmanifest">\n'
            '<link rel="apple-touch-icon" href="icons/apple-touch-icon.png">\n'
            '<link rel="icon" href="icons/icon-192.png">\n'
            f"<style>{local_fonts()}</style>\n")
    reset = ("html{color-scheme:light;-webkit-text-size-adjust:100%}"
             "body{margin:0;font:14px system-ui,sans-serif;padding-top:env(safe-area-inset-top,0px);-webkit-tap-highlight-color:transparent}"
             "img{max-width:100%}[hidden]{display:none!important}")
    doc = ('<!doctype html><html lang="en"><head><meta charset="utf-8">'
           '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">'
           '<meta name="theme-color" content="#3443B0"><meta name="apple-mobile-web-app-capable" content="yes">'
           '<meta name="mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="default">'
           '<meta name="apple-mobile-web-app-title" content="Kannada">'
           f"<style>{reset}</style></head><body>" + page(head) +
           '<script>if("serviceWorker" in navigator && location.protocol.startsWith("http")) navigator.serviceWorker.register("sw.js").catch(()=>{});</script>'
           "</body></html>")
    (WWW / "index.html").write_text(doc, encoding="utf-8")

    # static pages (privacy policy etc.)
    for f in (SRC / "static").glob("*"):
        shutil.copy(f, WWW / f.name)

    # icons come from assets/
    icons = WWW / "icons"
    icons.mkdir(exist_ok=True)
    try:
        from PIL import Image
        src = Image.open(ROOT / "assets" / "icon-only.png").convert("RGB")
        mask = Image.open(ROOT / "assets" / "icon-foreground.png").convert("RGB")
        src.resize((192, 192), Image.LANCZOS).save(icons / "icon-192.png")
        src.resize((512, 512), Image.LANCZOS).save(icons / "icon-512.png")
        src.resize((180, 180), Image.LANCZOS).save(icons / "apple-touch-icon.png")
        mask.resize((512, 512), Image.LANCZOS).save(icons / "maskable-512.png")
    except ImportError:
        print("Pillow not installed: keeping the existing www/icons/*.png")

    manifest = {
        "name": "Kannada Learning: Kannada, Tamil, Spanish, Italian & French for Telugu speakers", "short_name": "Kannada",
        "start_url": "./index.html", "scope": "./", "display": "standalone",
        "background_color": "#F4F5F7", "theme_color": "#3443B0", "lang": "en",
        "description": "Learn Kannada, Tamil, Spanish, Italian and French through Telugu, with progress tracking on your device.",
        "icons": [{"src": "icons/icon-192.png", "sizes": "192x192", "type": "image/png"},
                  {"src": "icons/icon-512.png", "sizes": "512x512", "type": "image/png"},
                  {"src": "icons/maskable-512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable"}]}
    (WWW / "manifest.webmanifest").write_text(json.dumps(manifest, indent=2), encoding="utf-8")

    files = ["./", "index.html", "manifest.webmanifest", "privacy.html"] + \
            sorted("icons/" + p.name for p in icons.glob("*.png")) + \
            sorted("fonts/" + p.name for p in (WWW / "fonts").glob("*.woff2"))
    ver = hashlib.sha1(doc.encode()).hexdigest()[:10]
    sw = f"""// Generated by scripts/build.py. Cache-first so the app works offline.
const CACHE='sodara-{ver}';
const FILES={json.dumps(files)};
self.addEventListener('install',e=>{{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()));}});
self.addEventListener('activate',e=>{{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));}});
self.addEventListener('fetch',e=>{{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request,{{ignoreSearch:true}}).then(r=>r||fetch(e.request)));}});
"""
    (WWW / "sw.js").write_text(sw, encoding="utf-8")
    print(f"www/ built: index.html {len(doc)//1024} KB, cache {ver}")


def build_dist():
    DIST.mkdir(exist_ok=True)
    (DIST / "sodara-bhashalu.html").write_text(page(None), encoding="utf-8")
    print("dist/sodara-bhashalu.html built")


if __name__ == "__main__":
    WWW.mkdir(exist_ok=True)
    build_www()
    build_dist()
