# Deploy progress
## Phase 0: Machine
- [x] Tools checked (git, node, python3, gh, JDK, Xcode) — 2026-10-24: git 2.50, node 25.8, npm 11.11, python 3.9, gh 2.103 present; 2026-10-25: JDK 21 (brew openjdk@21) and Android SDK (brew android-commandlinetools, platform 36) installed; Xcode still missing (Phase 5)
- [x] npm install && npm run build OK
## Phase 1: GitHub
- [ ] Logged in with gh (personal account pr17m) — pushed over SSH instead; gh still needed for Pages/workflows
- [x] Repository created and pushed: https://github.com/pr17m/learn-from-telugu (public, SSH remote)
## Phase 2: Web app
- [x] GitHub Pages enabled, workflow green
- [x] Live URL: https://pr17m.github.io/learn-from-telugu/ (privacy: https://pr17m.github.io/learn-from-telugu/privacy.html)
- [ ] Installed on Android home screen and works offline
- [x] Added to iPhone home screen (tested 2026-10-24, works)
- [x] privacy.html placeholders filled (date 24 October 2026, contact prudhvi05madhu@gmail.com)
## Phase 3: APK
- [ ] Debug APK built and installed on a phone (built locally 2026-10-25 with `npm run apk`; not yet installed)
## Phase 4: Google Play
- [ ] Developer account verified
- [ ] Upload keystore created and backed up (outside the repo)
- [ ] Signed .aab built
- [ ] Listing, data safety, content rating done (assets + text ready in `store/play/`)
- [ ] Closed test running (12 testers × 14 days if required), started on: <date>
- [ ] Production release submitted / live
## Phase 5: App Store
- [ ] Apple Developer membership active
- [ ] Signed build runs on a real iPhone
- [ ] App Store Connect record, privacy, screenshots done
- [ ] TestFlight build tested
- [ ] Submitted for review / live
