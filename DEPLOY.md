# Deployment playbook for an AI coding assistant

> **How to use this file:** open a terminal in this repository and start your LLM CLI (Claude Code, Codex, Gemini CLI or similar). Then say:
> *"Read DEPLOY.md and walk me through it, one phase at a time."*

---

## Instructions for the assistant

You are helping the owner of this repository publish **Sodara Bhashalu**, an app that teaches Kannada and Tamil to Telugu speakers. There are four goals, in this order:

1. Push the code to GitHub.
2. Deploy the **web app** (installable on Android and iPhone home screens).
3. Publish the **Android app** on Google Play.
4. Publish the **iOS app** on the Apple App Store.

### Rules
- **Go one phase at a time.** Start each phase by saying what it achieves and what the user needs ready. End it by confirming the result works.
- **Before every command, say in one plain sentence what it does.** Run read-only checks yourself. Ask before anything that creates accounts or repositories, publishes, spends money, or can't be undone.
- **Never ask for passwords or paste secrets into chat.** The user types passwords into the prompts themselves.
- **Never commit secrets:** keystores (`*.jks`, `*.keystore`), `android/keystore.properties`, API keys, certificates. They are already in `.gitignore`. Check `git status` before every commit.
- **Store rules change.** When a step depends on a current requirement (fees, testers, screenshot sizes, target API level, review rules), tell the user to confirm it in the official console. Use web search if you have it.
- **The user may be new to this.** Explain store jargon the first time it comes up (AAB, keystore, bundle ID, TestFlight, track). Keep each message short.
- **If a step fails,** read the error, explain it simply, and fix the cause. Don't retry blindly.
- **Track progress** by ticking the checkboxes in `DEPLOY-PROGRESS.md` (create it from the checklist at the end of this file in Phase 0).

### Project facts
| Item | Value |
|---|---|
| App name | Sodara Bhashalu |
| App / bundle ID | `com.sodarabhashalu.app` (in `capacitor.config.json`; change it **before** the first store upload, never after) |
| Web app | `www/`, a static PWA with `manifest.webmanifest` and `sw.js`, works offline |
| Native wrapper | Capacitor 8 (`android/`, `ios/`) using `www/` as `webDir` |
| Content sources | `src/` (data in `src/data/*.js`), built by `scripts/build.py` → `www/` and `dist/` |
| Data / privacy | No accounts, analytics or network calls. Progress is stored on the device (Capacitor Preferences / localStorage). Privacy policy: `www/privacy.html` |
| Min OS | Android 7.0 (API 24), iOS 15 |
| CI | `.github/workflows/pages.yml` (web deploy), `.github/workflows/android-apk.yml` (debug APK) |

---

## Phase 0: Check the machine

**Goal:** know which tools are present before starting.

1. Run these checks and report a short table of what is installed and what is missing:
   ```bash
   git --version; node --version; npm --version; python3 --version
   gh --version && gh auth status
   java -version            # Android builds need JDK 21
   uname -s                 # "Darwin" = macOS (required for the App Store phase)
   xcodebuild -version      # macOS only
   ```
2. Explain what each phase needs:
   - **Phases 1–3** (GitHub, web app, APK) need git and a GitHub account. Everything else runs in GitHub's cloud.
   - **Phase 4** (Play Store) needs Android Studio, or JDK 21 plus the Android SDK, and a Google Play developer account.
   - **Phase 5** (App Store) needs a Mac with Xcode and a paid Apple Developer membership.
3. Install what is missing with the user's agreement: GitHub CLI (`brew install gh` on macOS, see cli.github.com for other systems), then Node 22+.
4. Run `npm install` and then `npm run build`. Confirm `www/index.html` was rebuilt and `git status` shows no unexpected changes.
5. Create `DEPLOY-PROGRESS.md` from the checklist at the bottom of this file.

---

## Phase 1: Push the code to GitHub

**Goal:** the repository is on GitHub, which every later phase uses.

1. Run `gh auth login` if not logged in (browser login, HTTPS). Let the user complete it.
2. Ask the user:
   - The repository name. Suggest `sodara-bhashalu`.
   - Public or private. GitHub Pages on a private repository needs a paid GitHub plan, so suggest public unless they have one.
3. Make sure the work is committed: `git status`, then commit any changes with a clear message.
4. Create the repository and push:
   ```bash
   gh repo create <name> --source=. --remote=origin --<public|private> --push
   ```
5. Confirm with `gh repo view --web` (opens it in the browser) or by printing the URL.

---

## Phase 2: Deploy the web app (installable on Android and iPhone)

**Goal:** a public HTTPS link that opens the app and can be added to the home screen.

1. Turn on GitHub Pages with GitHub Actions as the source:
   ```bash
   gh api -X POST repos/{owner}/{repo}/pages -f build_type=workflow
   ```
   (If it already exists, use `-X PUT`.)
2. Run the deploy workflow and watch it finish:
   ```bash
   gh workflow run "Deploy web app to GitHub Pages"
   gh run watch
   ```
3. Get the URL: `gh api repos/{owner}/{repo}/pages --jq .html_url` (usually `https://<user>.github.io/<repo>/`).
4. Check it from the terminal:
   ```bash
   curl -sI <url>index.html | head -1
   curl -s <url>manifest.webmanifest
   curl -sI <url>sw.js | head -1
   ```
5. Ask the user to test on a phone:
   - **Android (Chrome):** open the link, then **⋮ → Install app** (or "Add to Home screen"). Open it from the new icon, turn on airplane mode and confirm it still opens.
   - **iPhone (Safari):** open the link, then **Share → Add to Home Screen**.
6. Put the live URL in `README.md`. Replace the placeholders in `src/static/privacy.html` (date, contact email), rebuild, commit and push. The stores need this privacy URL: `<url>privacy.html`.

**Updating later:** edit `src/`, run `npm run build`, commit, push. The workflow redeploys automatically.

---

## Phase 3: Android APK for direct install (optional, free, no store)

**Goal:** an `.apk` file that friends and testers can install directly.

1. Run the cloud build: `gh workflow run "Build Android APK"`, then `gh run watch`.
2. Download it: `gh run download --name sodara-bhashalu-debug-apk`.
3. The user sends `app-debug.apk` to their phone and opens it. Android will ask them to allow "Install unknown apps" for that source.
4. Explain that this is a *debug* build, fine for testing but not for the Play Store. Phase 4 makes the store version.

---

## Phase 4: Google Play Store

**Goal:** the app is live on Google Play.

### 4.1 Account (user action)
- Sign up at **play.google.com/console**. There is a one-time US$25 registration fee, plus identity verification, which can take a few days.
- **Personal accounts created after Nov 2023** must run a **closed test with at least 12 testers for 14 days in a row** before they can publish to production. Tell the user this early so they can line up testers (friends and family with Android phones). Organization accounts (which need a D-U-N-S number) are exempt. Confirm the current rule in the Console.

### 4.2 Build tools
- Option A (easiest): install **Android Studio**. It brings the SDK and JDK.
- Option B: JDK 21 plus Android command-line tools. Set `ANDROID_HOME` and accept the licences with `sdkmanager --licenses`.
- Test with `npm run apk`. It should produce `android/app/build/outputs/apk/debug/app-debug.apk`.

### 4.3 Upload key (keystore)
Explain first: this key proves future updates come from the same developer. **If it is lost, the app can never be updated under the same listing** (Play App Signing can reset the upload key, but only after a support process). Store it outside the repository and back it up, for example in a password manager.
```bash
mkdir -p ~/keys && keytool -genkeypair -v -keystore ~/keys/sodara-upload.jks \
  -alias upload -keyalg RSA -keysize 2048 -validity 10000
```
The user types the passwords. Then create `android/keystore.properties`. It is git-ignored; confirm with `git check-ignore android/keystore.properties`.
```properties
storeFile=/Users/<user>/keys/sodara-upload.jks
storePassword=<typed by user>
keyAlias=upload
keyPassword=<typed by user>
```
`android/app/build.gradle` already reads this file for release builds.

### 4.4 Version and build
- For each upload, increase `versionCode` (an integer: 1, 2, 3…) and set `versionName` (e.g. "1.0.0") in `android/app/build.gradle`.
- Check that `targetSdkVersion` in `android/variables.gradle` meets Google's current target-API requirement (it is 36 now).
- Build the store bundle: `npm run aab`. This produces `android/app/build/outputs/bundle/release/app-release.aab`. An AAB is the file format Google Play wants.

### 4.5 Store listing assets
Help the user prepare these. You can generate screenshots with Playwright or a browser at phone size from `npm run serve`.
- App icon 512×512 PNG: `www/icons/icon-512.png`.
- Feature graphic 1024×500 PNG (make one in the app's colours: indigo `#3443B0`, Kannada red `#B0261C`, Tamil teal `#0A7466`).
- At least 2 phone screenshots, e.g. the learning-path map, a module table, practice mode and My Progress.
- Short description (≤80 chars): *Learn Kannada and Tamil through Telugu, with side-by-side grammar.*
- Full description: write it from `README.md`.
- Privacy policy URL from Phase 2.

### 4.6 Console steps (user action, you guide)
1. **Create app:** name, default language, App, Free.
2. **App content:**
   - Privacy policy URL.
   - **Data safety:** "No data collected or shared". This is true because everything stays on the device.
   - Ads: no.
   - Content rating questionnaire (Education, no sensitive content).
   - Target audience.
   - Government app: no.
3. **Testing → Closed testing:** create a track, add testers' emails (or a Google Group), upload the `.aab`, and roll it out. Share the opt-in link. Wait the 14 days if the rule applies.
4. **Production:** create a release with the same or a newer `.aab` and submit for review. Reviews usually take from a few hours to a few days.
5. Accept **Play App Signing** when offered (Google holds the final signing key; your keystore becomes the upload key).

---

## Phase 5: Apple App Store

**Goal:** the app is live on the App Store. **This needs a Mac.** If the user has none, explain the options: borrow one, rent a cloud Mac, or use a CI service with macOS runners and signing (for example Codemagic or GitHub Actions macOS runners with fastlane). Ask which they prefer.

### 5.1 Account (user action)
- Enrol in the **Apple Developer Program** (US$99 a year) at developer.apple.com. Approval can take 1–2 days, longer for organisations.

### 5.2 Open and sign the project
```bash
npm install && npm run ios      # builds www, syncs and opens Xcode
```
In Xcode, select the **App** target, then **Signing & Capabilities**:
- Tick "Automatically manage signing" and pick the user's Team.
- Confirm the Bundle Identifier (`com.sodarabhashalu.app`, or the user's own reverse domain).
- Under **General**, set Version (e.g. 1.0.0) and Build (1, 2, 3… increase for every upload).
- Run it on a simulator, then on the user's iPhone over USB. Check that the top bar clears the notch and the bottom bar clears the home indicator.

### 5.3 App Store Connect (user action, you guide)
1. **appstoreconnect.apple.com → My Apps → +:** name, primary language, bundle ID, SKU (e.g. `sodara-001`).
2. **App Privacy:** "Data Not Collected". Add the privacy policy URL.
3. **Pricing:** Free. Choose availability countries.
4. **Screenshots:** iPhone 6.9-inch (1320×2868) is the required set. Confirm the current list in App Store Connect. Also add iPad screenshots if iPad support stays enabled. To keep the app iPhone-only, set Devices to iPhone in Xcode first.
5. **Description, keywords** (e.g. kannada, tamil, telugu, learn, grammar), support URL (the GitHub Pages site works), category: Education. Age rating questionnaire.

### 5.4 Upload and review
1. In Xcode, choose **Any iOS Device**, then **Product → Archive**, then **Distribute App → App Store Connect → Upload**.
2. The build appears in App Store Connect after processing (10–30 minutes). Use **TestFlight** to install it on the user's phone first.
3. Attach the build to the version and **Submit for Review**. It usually takes 1–3 days.
4. **Review risk:** Apple guideline 4.2 ("minimum functionality") can reject apps that are just a website in a wrapper. In the review notes, point out what this app offers: it works fully offline with bundled content, stores progress on the device, has interactive practice and a learning-path map, and loads no remote website. If it is rejected, read the message with the user and suggest concrete native additions, such as a daily study reminder with local notifications (`@capacitor/local-notifications`) or haptics.

---

## Phase 6: Releasing updates

1. Edit content in `src/`, then run `npm run build`. Check it locally with `npm run serve`.
2. Commit and push. The web app redeploys by itself.
3. Android: bump `versionCode`/`versionName`, run `npm run aab`, upload in Play Console.
4. iOS: bump Version/Build in Xcode, archive and upload, then submit.

---

## Progress checklist (copy into DEPLOY-PROGRESS.md)

```markdown
# Deploy progress
## Phase 0: Machine
- [ ] Tools checked (git, node, python3, gh, JDK, Xcode)
- [ ] npm install && npm run build OK
## Phase 1: GitHub
- [ ] Logged in with gh
- [ ] Repository created and pushed: <url>
## Phase 2: Web app
- [ ] GitHub Pages enabled, workflow green
- [ ] Live URL: <url>
- [ ] Installed on Android home screen and works offline
- [ ] Added to iPhone home screen
- [ ] privacy.html placeholders filled
## Phase 3: APK
- [ ] Debug APK built and installed on a phone
## Phase 4: Google Play
- [ ] Developer account verified
- [ ] Upload keystore created and backed up (outside the repo)
- [ ] Signed .aab built
- [ ] Listing, data safety, content rating done
- [ ] Closed test running (12 testers × 14 days if required), started on: <date>
- [ ] Production release submitted / live
## Phase 5: App Store
- [ ] Apple Developer membership active
- [ ] Signed build runs on a real iPhone
- [ ] App Store Connect record, privacy, screenshots done
- [ ] TestFlight build tested
- [ ] Submitted for review / live
```
