# Kannada Learning · కన్నడ నేర్చుకోండి

Learn **Kannada**, **Tamil**, **Spanish**, **Italian** and **French** through the **Telugu** you already know. There are two paths:

- **Kannada & Tamil:** 18 grammar modules following the Kannada Kalike "Learn Basics" sequence, plus Sound Shortcuts.
- **Spanish, Italian & French:** 14 modules (sounds, greetings, pronouns, nouns, verbs and tenses, questions, prepositions, numbers, everyday phrases), plus Word Shortcuts.

Each module puts Telugu side by side with the other languages, in their own script with a Telugu-script reading so you can pronounce every word. Pick the languages you want with the buttons at the top; the choice applies to every page, and a language that is switched off is not mentioned anywhere.

- One guided path: every page has a single **Back** and **Next**, and a **Path** map (a directed graph of all steps) lets you jump anywhere.
- Practice mode (hide answers, mark "Knew it" / "Missed"), module status per language, study streak, notes and a review list.
- Works offline. Progress stays on the device: no account, no tracking.
- Ships as a web app (PWA), an Android app and an iOS app from the same code.

**Try it:** https://pr17m.github.io/learn-from-telugu/ (on Android choose *Install app*; on iPhone use *Share → Add to Home Screen*). Privacy policy: https://pr17m.github.io/learn-from-telugu/privacy.html

## Repository layout
```
src/                 course source
  data/01-03*.js     Kannada & Tamil path: 18 modules + Sound Shortcuts (rows: meaning, Telugu, Kannada, Tamil)
  data/04-06*.js     Spanish, Italian & French path: 14 modules + Word Shortcuts (rows: meaning, Telugu, es, it, fr)
                     04-europe.js documents the ⟦…⟧ markup that makes prose depend on the chosen languages
  convert.js         script conversion (Kannada→Telugu exact; Tamil, Spanish, Italian→Telugu-script reading)
  ui.js              app: path navigation, map, practice, progress tracking
  style.css, shell.html, static/privacy.html
scripts/build.py     builds www/ (offline PWA) and dist/sodara-bhashalu.html (single-file page)
www/                 built web app; also the Capacitor webDir
android/  ios/       native projects (Capacitor 8)
assets/              icon sources (npm run icons regenerates native icons)
.github/workflows/   pages.yml (deploy web app) · android-apk.yml (debug APK)
DEPLOY.md            step-by-step publishing playbook (feed it to an AI coding CLI)
```

## Develop
```bash
npm install          # Capacitor + bundled fonts
npm run build        # src/ → www/ and dist/
npm run serve        # http://localhost:8080
npm run android      # build, sync and open Android Studio
npm run ios          # build, sync and open Xcode (macOS)
```

## Publish
Follow **[DEPLOY.md](DEPLOY.md)**. Open a terminal here, start your LLM CLI, and say: *"Read DEPLOY.md and walk me through it, one phase at a time."*

## Credits
The grammar sequence and Kannada examples follow the 18 modules of [Kannada Kalike](https://kannadakalike.org/grammar-modules.php) (Kannada Language Chair, JNU). Telugu and Tamil equivalents and the Telugu-script readings were added for this course. Have native speakers review the content before a wide release.
