# Project Walkthrough - Acarrealíquidos Refactor & AI Concierge Integration

This walkthrough details the optimizations, bug fixes, and AI integrations deployed on the Acarrealíquidos platform.

## Features & Refactoring Logs

### 1. 45th Anniversary Cinematic Preloader ("The Golden Fluid Legacy")
* **Drop & Splash Mechanics**: Implemented an SVG gooey filter (`#goo-filter`) which dynamically renders a simulated golden liquid droplet falling from the top. When it hits the center, it triggers a custom radial ripple (`#preloader-ripple`) and reveals a glowing, safety orange-shadowed anniversary number `45` (`#preloader-anniversary-num`).
* **Digital Timeline Counter**: Synchronized a rapid years counter using a numeric GSAP tween. When the droplet strikes, the years tick sequentially from `1984` to `2029`.
* **Dynamic Language Reveal**: Leveraged kinetic typography slide-ups. The subtitle reveals `"45 AÑOS"` (Spanish) or `"45 YEARS"` (English) based on the browser's active page language context.
* **Liquid Morphing & Morphing Logo**: The gold `45` liquid-morphs into the official Acarrealíquidos logo, followed by a tagline fade-in and a subtle heartbeat pulsing animation.
* **Vertical Split Exit (Gates)**: Left and right panels (`#preloader-gate-left`, `#preloader-gate-right`) slide in opposite directions while the inner container blurs out (`filter: blur(15px)`), resolving into the Hero section.
* **Performance & Skip Controls**: The entire sequence plays in under 4 seconds. Uses `sessionStorage` visits tracking: recurring users receive an immediate "Skip Intro" option, while new visits trigger the button after a slight delay.

### 2. Node.js Express Backend Setup
* **Express Server (`server.js`)**: Added a Node.js Express server to host the static files and expose the `POST /api/chat` route on Render. This enables the client-side `app.js` chatbot fetch call to route directly to a server-side endpoint.
* **Gemini API Key Integration**: Designed `/api/chat` to load `process.env.GEMINI_API_KEY` to query Google Generative AI securely from the server side without exposing keys in client-side code.
* **Dependency Declarations**: Configured `package.json` with ESM (`type: "module"`) and scripts to launch the application. Installed `@google/generative-ai`, `express`, `cors`, and `dotenv`.
* **Repository Safety (.gitignore)**: Added rules to ignore node modules, local environment files (`.env`), and logs to keep the repository clean and secure. Included `.env.example` as a setup template.
* **GitHub Push Protection Safety**: Ensured no API keys are hardcoded in the committed files, fully satisfying GitHub Code Scanning and Secret Detection push rules.

### 3. Generative AI Chatbot Integration (AI Logistics Concierge)
* **Active Model Verification**: Verified the available Gemini model lineup via test scripts. Configured the Express backend to use `gemini-3.5-flash` (confirmed active and functional with Google API key credentials).
* **Conversational Session Memory**: Maintained via a persistent `chatHistory` array that captures and submits user/model context history. The bot now retains contextual knowledge across subsequent responses.
* **Smart Offline NLP Fallback**: To ensure a flawless client-side demonstration, the chat features a robust fallback parser in `app.js`. If the backend `/api/chat` route is unavailable, the fallback engine utilizes regular expressions and semantic parsing to extract product types and route destinations (e.g. "melaza a Yucatán") dynamically.
* **Thinking Indicator Bubble**: Renders a pulsing typing animation bubble while processing the prompt to improve UX.
* **Auto-Scroll Behavior**: Automatically aligns the view to the bottom of the chat container upon message addition.
* **Dynamic Welcome Greeting**: Detects the browser's active page language upon drawer opening and triggers a localized dispatcher welcome prompt.

### 4. Bilingual Engine 2.0 & SEO Compliance
* **Bilingual State Persistence**: Saved language preferences to `localStorage` to persist language settings across navigation and page refreshes.
* **Dynamic Tag Replacements**: On language toggle, the engine updates the document title, meta descriptions, HTML `lang` attributes, form placeholders, and image `alt` attributes based on corresponding translation keys (`data-es-alt` / `data-en-alt`).
* **Correct Canonical Domains**: Fixed canonical domains to `https://acarrealiquidos.com.mx/` across all meta tags, social share objects, JSON-LD schemas, and copy links.

### 5. Lead Capture & Form Enhancements
* **Formspree AJAX Fetch integration**: Connected the lead capture form to Formspree endpoint (`https://formspree.io/f/mqazpypy`) using Fetch. Appended operational metadata to payloads (`_timestamp`, `_language`, `_entry_page`, `_user_agent`).
* **Strict Validation Rules**: Enforced pattern rules for names (min 3 chars), company name (min 2 chars), email matches, and phone lengths (exact 10 digits). Invalid states add red styling borders and auto-focus the first error field.

### 6. Code and Graphic Performance Optimizations
* **Render Pipeline**: Enforced `will-change: opacity, transform;` on animated layers to enable GPU-accelerated compositing.
* **Mobile Fluidity**: Purged horizontal scroll, hidden overlays on small screens, and optimized mobile drawer widths.
* **Select Option Readability**: Cleaned options markup and overrode select style declarations to prevent dark mode/light mode high contrast rendering issues.

---

## Verification Steps

1. Launch the platform locally:
   * Run `npm.cmd install` to download dependencies.
   * Copy `.env.example` to `.env` and fill in your `GEMINI_API_KEY`.
   * Start the server with `node server.js` and open `http://localhost:3000` in your browser.
2. Observe the **45th Anniversary Preloader**:
   * Golden drop falls and splashes on impact.
   * Digital years climb rapidly from `1984` to `2029`.
   * Double panel gates slide split-vertically to reveal the main page.
3. Test **Skip Intro** logic:
   * Play the intro once, reload, and verify that the "Skip Intro" option is displayed instantly. Clicking it must immediately split the gates and clear the overlay.
4. Verify that the chatbot is focused and responsive when checking quotes or routes.
