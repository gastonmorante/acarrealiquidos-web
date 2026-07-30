# Project Walkthrough - Acarrealíquidos Refactor & AI Concierge Integration

This walkthrough details the optimizations, bug fixes, and AI integrations deployed on the Acarrealíquidos platform.

## Features & Refactoring Logs

### 1. 25th Anniversary Cinematic Preloader ("Silver Edition", 2001-2026)
* **Drop & Splash Mechanics**: Implemented an SVG gooey filter (`#goo-filter`) which dynamically renders a simulated silver liquid droplet falling from the top. When it hits the center, it triggers a custom radial ripple (`#preloader-ripple`) and reveals a glowing, silver-shadowed anniversary number `25` (`#preloader-anniversary-num`).
* **Silver/Metallic Aesthetic**: Replaced the golden styling with a high-end chrome-silver linear gradient (`bg-gradient-to-r from-[#D1D5DB] via-[#F9FAFB] via-[#9CA3AF] via-[#F9FAFB] to-[#D1D5DB]`) and matching metallic dropdown glow shadow (`drop-shadow-[0_0_20px_rgba(255,255,255,0.45)]`).
* **Digital Timeline Counter**: Synchronized a rapid years counter using a numeric GSAP tween. When the droplet strikes, the years tick sequentially starting at foundation year `2001` and accelerating to target year `2026`.
* **Dynamic Language Reveal**: Leveraged kinetic typography slide-ups. The subtitle reveals `"25 AÑOS"` (Spanish) o `"25 YEARS"` (English) based on the browser's active page language context.
* **Liquid Morphing & Morphing Logo**: The silver `25` liquid-morphs into the official Acarrealíquidos logo, followed by a tagline fade-in and a subtle heartbeat pulsing animation.
* **Vertical Split Exit (Gates)**: Left and right panels (`#preloader-gate-left`, `#preloader-gate-right`) slide in opposite directions while the inner container blurs out (`filter: blur(15px)`), resolving into the Hero section.
* **Performance & Skip Controls**: The entire sequence plays in under 4 seconds. Uses `sessionStorage` visits tracking: recurring users receive an immediate "Skip Intro" option, while new visits trigger the button after a slight delay.

### 2. Global Trajectory Alignment (25 Years, Est. 2001)
* **Hero Content**: Updated Hero text badges and H1 headers to `"25 Años de Excelencia en Logística de Líquidos" / "25 Years of Excellence in Liquid Logistics"`.
* **Dynamic Stats Counter**: Aligned the Trust Section counters. The experience stat counter counts up from `0` to exactly `25+` via the intersection observer.
* **About Us Copy**: Updated all trajectory explanations to "Con 25 años de trayectoria impecable..." / "With 25 years of flawless trajectory...".
* **Metadata & SEO**: Adjusted the meta tags `<meta name="description">` (English & Spanish), canonical headers, and document titles to reflect 25 years.
* **Structured Data**: Configured `foundingDate` to `"2001-01-01"` in the LocalBusiness JSON-LD block.

### 3. AI Concierge Re-training (25 Years, Est. 2001)
* **System Prompt training**: Configured both server-side (`server.js`) system instruction parameters and client-side (`app.js`) offline fallback rules to define Acarrealíquidos as a company founded in 2001 with 25 years of experience.
* **Direct Answer Hook**: Trained the bot to answer exactly `"Desde el año 2001"` (or `"We operate since 2001"` in English context) when queried *"Since when do you operate?"* / *"¿Desde cuándo operan?"*.

### 4. Node.js Express Backend Setup
* **Express Server (`server.js`)**: Added a Node.js Express server to host the static files and expose the `POST /api/chat` route on Render. This enables the client-side `app.js` chatbot fetch call to route directly to a server-side endpoint.
* **Gemini API Key Integration**: Designed `/api/chat` to load `process.env.GEMINI_API_KEY` to query Google Generative AI securely from the server side without exposing keys in client-side code.
* **Dependency Declarations**: Configured `package.json` with ESM (`type: "module"`) and scripts to launch the application. Installed `@google/generative-ai`, `express`, `cors`, and `dotenv`.
* **Repository Safety (.gitignore)**: Added rules to ignore node modules, local environment files (`.env`), and logs to keep the repository clean and secure. Included `.env.example` as a setup template.
* **GitHub Push Protection Safety**: Ensured no API keys are hardcoded in the committed files, fully satisfying GitHub Code Scanning and Secret Detection push rules.

### 5. Generative AI Chatbot Integration (AI Logistics Concierge)
* **Active Model Verification**: Verified the available Gemini model lineup via test scripts. Configured the Express backend to use `gemini-3.5-flash` (confirmed active and functional with Google API key credentials).
* **Conversational Session Memory**: Maintained via a persistent `chatHistory` array that captures and submits user/model context history. The bot now retains contextual knowledge across subsequent responses.
* **Smart Offline NLP Fallback**: To ensure a flawless client-side demonstration, the chat features a robust fallback parser in `app.js`. If the backend `/api/chat` route is unavailable, the fallback engine utilizes regular expressions and semantic parsing to extract product types and route destinations (e.g. "melaza a Yucatán") dynamically.
* **Thinking Indicator Bubble**: Renders a pulsing typing animation bubble while processing the prompt to improve UX.
* **Auto-Scroll Behavior**: Automatically aligns the view to the bottom of the chat container upon message addition.
* **Dynamic Welcome Greeting**: Detects the browser's active page language upon drawer opening and triggers a localized dispatcher welcome prompt.

---

## Verification Steps

1. Launch the platform locally:
   * Run `npm.cmd install` to download dependencies.
   * Copy `.env.example` to `.env` and fill in your `GEMINI_API_KEY`.
   * Start the server with `node server.js` and open `http://localhost:3000` in your browser.
2. Observe the **25th Anniversary Preloader**:
   * Silver drop falls and splashes on impact.
   * Digital years climb rapidly from `2001` to `2026`.
   * Double panel gates slide split-vertically to reveal the main page.
3. Test **Skip Intro** logic:
   * Play the intro once, reload, and verify that the "Skip Intro" option is displayed instantly. Clicking it must immediately split the gates and clear the overlay.
4. Verify that the chatbot is focused and responsive when checking quotes or routes.
5. In the chat, ask: **`¿Desde cuándo operan?`** or **`Since when do you operate?`** and verify that it answers **`Operamos desde el año 2001.`** or **`We operate since 2001.`**.
