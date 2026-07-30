# Project Walkthrough - Acarrealíquidos Refactor & AI Concierge Integration

This walkthrough details the optimizations, bug fixes, and AI integrations deployed on the Acarrealíquidos platform.

## Features & Refactoring Logs

### 1. 25th Anniversary Pyrotechnic Preloader (8.0s Cinematic Experience, 2001-2026)
* **The Ascent (0.0s - 2.0s)**: Set up a full-screen HTML5 `<canvas>` on `z-index: 10000` with a deep midnight navy background. The animation starts with a slower, more anticipation-rich orange spark ascending from the bottom center, leaving a glowing trail.
* **The Pyrotechnic Blast (2.0s - 4.5s)**: Upon hitting the center, the spark explodes into a massive burst. Embers scatter outwards, and inside the core, a dense constellation of flickering, incandescent white/gold/orange particles forms the number **"25"** (created by reading pixel coordinates from an offscreen text renderer).
* **Branding & Legacy (4.5s - 6.5s)**: As the embers start to float and settle downwards, the official logo emerges with a dynamic CSS gradient sheen Light Sweep effect. Elegant trajectory subtitle `"25 AÑOS MOVIENDO EL FUTURO"` (Spanish) or `"25 YEARS MOVING THE FUTURE"` (English) fades in.
* **The Reveal (6.5s - 8.0s)**: The preloader triggers a GPU-accelerated Heat Distortion scale and blur transition (`.heat-exit`) to blend smoothly into the Hero section.
* **Execution & Skips**: The sequence runs on page load and plays every single time the page is loaded (with storage checks bypassed as requested). A "Skip Intro" button displays after a 1.5s delay to allow immediate bypass.

### 2. Global Trajectory Alignment (25 Years, Est. 2001)
* **Hero Content**: Updated Hero text badges and H1 headers to `"25 Años de Excelencia en Logística de Líquidos" / "25 Years of Excellence in Liquid Logistics"`.
* **Dynamic Stats Counter**: Aligned the Trust Section counters. The experience stat counter counts up from `0` to exactly `25+` via the intersection observer.
* **About Us Copy**: Updated all trajectory explanations to "Con 25 años de trayectoria impecable..." / "With 25 years of flawless trajectory...".
* **Metadata & SEO**: Adjusted the meta tags `<meta name="description">` (English & Spanish), canonical headers, and document titles to reflect 25 years.
* **Structured Data**: Configured `foundingDate` to `"2001-01-01"` in the LocalBusiness JSON-LD block.

### 3. AI Concierge Re-training (25 Years, Est. 2001)
* **System Prompt training**: Configured both server-side (`server.js`) system instruction parameters (Supreme System Instruction) and client-side (`app.js`) offline fallback rules to define Acarrealíquidos as a company founded in 2001 with 25 years of experience.
* **Direct Answer Hook**: Trained the bot to answer exactly `"Desde el año 2001"` (or `"We operate since 2001"` in English context) when queried *"Since when do you operate?"* / *"¿Desde cuándo operan?"*.

### 4. Node.js Express Backend Setup
* **Express Server (`server.js`)**: Added a Node.js Express server to host the static files and expose the `POST /api/chat` route on Render. This enables the client-side `app.js` chatbot fetch call to route directly to a server-side endpoint.
* **Gemini API Key Integration**: Designed `/api/chat` to load `process.env.GEMINI_API_KEY` to query Google Generative AI securely from the server side without exposing keys in client-side code.
* **Dependency Declarations**: Configured `package.json` with ESM (`type: "module"`) and scripts to launch the application. Installed `@google/generative-ai` (upgraded to version `0.24.1` for native `systemInstruction` support on older/newer keys), `express`, `cors`, and `dotenv`.
* **Repository Safety (.gitignore)**: Added rules to ignore node modules, local environment files (`.env`), and logs to keep the repository clean and secure. Included `.env.example` as a setup template.
* **GitHub Push Protection Safety**: Ensured no API keys are hardcoded in the committed files, fully satisfying GitHub Code Scanning and Secret Detection push rules.

### 5. Generative AI Chatbot Integration (AI Logistics Concierge)
* **Active Model Verification**: Refactored the Express backend to query the industry-standard **`gemini-1.5-flash`** model with the new **"God-Mode" System Instruction** outlining Acarrealíquidos' identity, tone (professional/human-like logistics consultant), SCT/COFEPRIS certifications, and strategic Veracruz hub.
* **Conversational Session Memory (`startChat`)**: Upgraded to a pure generative flow utilizing the Gemini SDK's `model.startChat({ history })` method. The backend keeps an active window of the last 14 messages (7 user/assistant exchanges) in the context memory, enabling complex follow-up routing (e.g. asking "Quiero mover melaza" and later asking "¿Tienen permisos?" works with perfect coherence).
* **General Knowledge Linking & Company Anchor**: Instructed the agent to support open-ended chats (e.g. asking for the history of Veracruz or distances like Veracruz to Mérida) using its full general knowledge, and sutil y coherentemente linking the conversation back to Acarrealíquidos' operations (e.g., "De Veracruz a Mérida son 950 km. En Acarrealíquidos cubrimos esa ruta...").
* **Eradicated Keyword Matching Fallbacks**: Wiped out the local offline NLP parser in `app.js` completely. The client code acts strictly as a lightweight bridge routing all requests to Gemini, avoiding rigid checks. In case of API failure, it displays a professional connectivity error prompt.
* **UI/UX Upgrades**:
  * Replaced the text input field with a dynamically-growing **`<textarea>`** supporting multi-line entries (Shift+Enter adds newlines, Enter submits, auto-grows up to 4 lines maximum).
  * **Markdown Support**: Added client-side parsing utility `parseMarkdown` to render bold text (`**bold**`), italics, and bullet lists (`- item`), combined with CSS overrides in `index.html` to guarantee bold text and clean lists render correctly inside chat bubbles.
  * **Dynamic "Thinking" Thought Logs**: The preloader indicator bubble selects a random, realistic thought log (e.g. "Analizando viabilidad de ruta...", "Consultando base de datos operativa...") and renders it alongside a spinning sync icon, making the thinking state feel incredibly smart and organic.
  * **Auto-Scroll**: Triggers on a `setTimeout` window using `scrollIntoView` for pixel-perfect viewport alignment.

---

## Verification Steps

1. Launch the platform locally:
   * Run `npm.cmd install` to download dependencies.
   * Copy `.env.example` to `.env` and fill in your `GEMINI_API_KEY`.
   * Start the server with `node server.js` and open `http://localhost:3000` in your browser.
2. Observe the **25th Anniversary Pyrotechnic Preloader**:
   * Rocket spark ascends and explodes into orange/gold embers.
   * Incandescent particles form the number `"25"` at the center.
   * Brand logo fades in with light sweep, revealing tagline.
   * Preloader does a heat wave distortion exit and fades out.
3. Test **Skip Intro** logic:
   * Reload the page in a new tab to see the intro. Press the skip button to verify immediate exit.
   * Refresh the page in the same tab and verify it skips the intro instantly based on `sessionStorage` flag.
4. Verify that the chatbot is focused and responsive when checking quotes or routes.
5. In the chat, ask: **`¿Desde cuándo operan?`** or **`Since when do you operate?`** and verify that it answers **`Operamos desde el año 2001.`** or **`We operate since 2001.`**.
