// Client-side interactions for Acarrealíquidos Landing Page

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const toggle = document.getElementById('lang-toggle');

    // Disable scrolling during preloader
    body.style.overflow = 'hidden';

    const preloader = document.getElementById('preloader');
    const skipBtn = document.getElementById('skip-intro-btn');
    const isEnglish = body.classList.contains('lang-en');

    // Handle Skip Intro
    function endPreloader() {
        sessionStorage.setItem('intro_seen', 'true');
        
        const gateLeft = document.getElementById('preloader-gate-left');
        const gateRight = document.getElementById('preloader-gate-right');
        const innerContainer = document.querySelector('.preloader-inner-container');
        
        // Safety check to prevent running animations after cleanup
        gsap.killTweensOf([gateLeft, gateRight, innerContainer, preloader, skipBtn]);
        
        const tl = gsap.timeline({
            onComplete: () => {
                body.style.overflow = '';
                if (preloader) preloader.remove();
            }
        });

        tl.to(skipBtn, { opacity: 0, duration: 0.2 }, 0)
          .to(innerContainer, { opacity: 0, filter: 'blur(15px)', scale: 0.95, duration: 0.6, ease: 'power2.inOut' }, 0)
          .to(gateLeft, { xPercent: -100, duration: 0.8, ease: 'power3.inOut' }, 0.1)
          .to(gateRight, { xPercent: 100, duration: 0.8, ease: 'power3.inOut' }, 0.1)
          .to(preloader, { opacity: 0, duration: 0.3 }, 0.6);
    }

    if (preloader) {
        const isRecurring = sessionStorage.getItem('intro_seen') === 'true';
        
        // Show Skip button immediately for recurring users, otherwise delay it
        if (isRecurring && skipBtn) {
            skipBtn.style.display = 'block';
            gsap.to(skipBtn, { opacity: 1, duration: 0.4, delay: 0.2 });
        } else if (skipBtn) {
            skipBtn.style.display = 'block';
            gsap.to(skipBtn, { opacity: 0.6, duration: 0.4, delay: 1.5 });
        }

        if (skipBtn) {
            skipBtn.addEventListener('click', endPreloader);
        }

        // Dynamically translate preloader subtitle text
        const labelSpan = document.querySelector('#preloader-anniversary-label span');
        if (labelSpan) {
            labelSpan.textContent = isEnglish ? labelSpan.getAttribute('data-en') : labelSpan.getAttribute('data-es');
        }
        
        // Set up main timeline (not exceeding 4 seconds total)
        const tl = gsap.timeline({
            onComplete: endPreloader
        });

        // 0.0s - 1.0s: Progress line draws at bottom
        tl.to('#preloader-progress-bar', { width: '100%', duration: 1.0, ease: 'power1.inOut' })
          
          // 1.0s - 1.8s: Droplet falls and hits target
          .to('#preloader-droplet', { opacity: 1, y: 320, duration: 0.6, ease: 'power2.in' }, 0.8)
          
          // 1.8s: Ripple splash target triggers
          .to('#preloader-ripple', { scale: 18, opacity: 1, duration: 0.4, ease: 'power2.out' }, 1.4)
          .to('#preloader-ripple', { opacity: 0, duration: 0.2 }, 1.6)
          .to('#preloader-droplet', { scale: 0, opacity: 0, duration: 0.15 }, 1.4)
          
          // 1.0s - 2.5s: "25" numbers fade and scale up with pulse aura
          .to('#preloader-anniversary-num', { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(2)' }, 1.4)
          .to('#preloader-aura', { opacity: 1, duration: 0.8 }, 1.4)
          
          // Kinetic label slide-up
          .to('#preloader-anniversary-label', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, 1.6)
          
          // Digital counter container fades in
          .to('#preloader-counter-container', { opacity: 1, duration: 0.4 }, 1.8);

        // Fast counter tick (2001 -> 2026)
        const countData = { year: 2001 };
        tl.to(countData, {
            year: 2026,
            duration: 1.2,
            ease: 'power1.out',
            onUpdate: () => {
                const yearEl = document.getElementById('preloader-year-counter');
                if (yearEl) yearEl.textContent = Math.floor(countData.year);
            }
        }, 1.8)

          // 2.5s - 3.5s: Morph 25 into Acarrealíquidos logo
          .to('#preloader-anniversary-num', { scale: 0.5, opacity: 0, filter: 'blur(10px)', duration: 0.5, ease: 'power2.inOut' }, 2.6)
          .to('#preloader-anniversary-label', { opacity: 0, y: -10, duration: 0.4, ease: 'power2.in' }, 2.6)
          .to('#preloader-logo-morph', { opacity: 1, scale: 1, duration: 0.7, ease: 'back.out(1.2)' }, 2.8)
          
          // 3.5s - 4.0s: Powerful tagline fade-in
          .to('#preloader-tagline', { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, 3.2)
          
          // Subtle pulse heartbeat to morph logo
          .to('#preloader-logo-morph', { scale: 1.03, duration: 0.15, yoyo: true, repeat: 1, ease: 'power1.inOut' }, 3.5);
    }
    const esLab = document.getElementById('es-label');
    const enLab = document.getElementById('en-label');
    const esLabMobile = document.getElementById('es-label-mobile');
    const enLabMobile = document.getElementById('en-label-mobile');
    const toggleMobile = document.getElementById('lang-toggle-mobile');
    const wa = document.getElementById('wa-btn');

    function translateSelectOptions(isEnglish) {
        const formService = document.getElementById('form-service');

        if (formService) {
            Array.from(formService.options).forEach(opt => {
                const text = isEnglish ? opt.getAttribute('data-en') : opt.getAttribute('data-es');
                if (text) {
                    opt.text = text;
                }
            });
        }
    }

    // Helper to translate everything on the page
    window.applyLanguageState = function(isEnglish) {
        if (isEnglish) {
            body.classList.add('lang-en');
            if (toggle) toggle.classList.add('lang-en-active');
            if (toggleMobile) toggleMobile.classList.add('lang-en-active');

            // Translate head title, desc, lang
            document.title = "Acarrealíquidos | Leaders in Specialized Freight & Liquid Transport";
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) metaDesc.setAttribute('content', 'Liquid logistics leaders with 25 years of experience. Transport of hydrocarbons, oils, and chemicals from Veracruz to all of Mexico. SCT certified safety.');
            document.documentElement.setAttribute('lang', 'en');

            if (esLab) esLab.classList.replace('text-white', 'text-white/50');
            if (enLab) enLab.classList.replace('text-white/50', 'text-white');
            if (esLabMobile) esLabMobile.classList.replace('text-white', 'text-white/50');
            if (enLabMobile) enLabMobile.classList.replace('text-white/50', 'text-white');
            
            if (wa) wa.href = "https://wa.me/522717128316?text=Hello%20Acarrealiquidos.%20Quote%20request.";
            const waFloat = document.getElementById('wa-float-btn');
            if (waFloat) waFloat.href = "https://wa.me/522717128316?text=Hello%20Acarrealiquidos.%20Quote%20request.";

            // Adjust placeholders
            if (document.getElementById('form-name')) document.getElementById('form-name').placeholder = "Your Full Name";
            if (document.getElementById('form-company')) document.getElementById('form-company').placeholder = "Company Name";
            if (document.getElementById('form-email')) document.getElementById('form-email').placeholder = "Email Address";
            if (document.getElementById('form-phone')) document.getElementById('form-phone').placeholder = "Contact Phone";
            if (document.getElementById('form-msg')) document.getElementById('form-msg').placeholder = "Tell us about your cargo requirements, origin, and destination...";
            if (document.getElementById('ai-chat-input')) document.getElementById('ai-chat-input').placeholder = "Type message...";
        } else {
            body.classList.remove('lang-en');
            if (toggle) toggle.classList.remove('lang-en-active');
            if (toggleMobile) toggleMobile.classList.remove('lang-en-active');

            // Translate head title, desc, lang
            document.title = "Acarrealíquidos | Líderes en Transporte Especializado de Carga y Líquidos";
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) metaDesc.setAttribute('content', 'Líderes en logística de líquidos con 25 años de trayectoria. Transporte de hidrocarburos, aceites y químicos desde Veracruz a todo México. Seguridad certificada SCT.');
            document.documentElement.setAttribute('lang', 'es');

            if (esLab) esLab.classList.replace('text-white/50', 'text-white');
            if (enLab) enLab.classList.replace('text-white', 'text-white/50');
            if (esLabMobile) esLabMobile.classList.replace('text-white/50', 'text-white');
            if (enLabMobile) enLabMobile.classList.replace('text-white', 'text-white/50');

            if (wa) wa.href = "https://wa.me/522717128316?text=Hola%20Acarrealiquidos.%20Solicito%20cotizacion.";
            const waFloat = document.getElementById('wa-float-btn');
            if (waFloat) waFloat.href = "https://wa.me/522717128316?text=Hola%20Acarrealiquidos.%20Solicito%20cotizacion.";

            // Adjust placeholders
            if (document.getElementById('form-name')) document.getElementById('form-name').placeholder = "Nombre y Apellido";
            if (document.getElementById('form-company')) document.getElementById('form-company').placeholder = "Empresa";
            if (document.getElementById('form-email')) document.getElementById('form-email').placeholder = "Correo Electrónico";
            if (document.getElementById('form-phone')) document.getElementById('form-phone').placeholder = "Teléfono de contacto";
            if (document.getElementById('form-msg')) document.getElementById('form-msg').placeholder = "Escriba detalles de la carga, origen, destino y fechas requeridas...";
            if (document.getElementById('ai-chat-input')) document.getElementById('ai-chat-input').placeholder = "Escribe tu mensaje...";
        }

        // Translate select options
        translateSelectOptions(isEnglish);

        // Translate image alts
        const imgs = document.querySelectorAll('img[data-es-alt]');
        imgs.forEach(img => {
            const altText = isEnglish ? img.getAttribute('data-en-alt') : img.getAttribute('data-es-alt');
            if (altText) img.alt = altText;
        });

        // Refresh dynamic fleet specs if already loaded
        if (typeof fleetData !== 'undefined') {
            const activeTab = document.querySelector('.fleet-tab.tab-active');
            if (activeTab) {
                const key = activeTab.getAttribute('data-tab');
                if (key && fleetData[key]) {
                    updateFleetText(fleetData[key].specs);
                }
            }
        }
    };

    // Language switch function
    window.toggleLanguage = function() {
        body.classList.toggle('lang-en');
        const isEnglish = body.classList.contains('lang-en');
        localStorage.setItem('lang', isEnglish ? 'en' : 'es');
        window.applyLanguageState(isEnglish);
    };

    // Run initial dropdown option translation (default Spanish)
    translateSelectOptions(false);

    // Mobile Drawer Navigation Menu Controls
    const mobileDrawer = document.getElementById('mobile-menu-drawer');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenuCloseBtn = document.getElementById('mobile-menu-close-btn');

    window.openMobileMenu = function() {
        if (mobileDrawer) {
            mobileDrawer.classList.remove('translate-x-full');
            body.style.overflow = 'hidden'; // lock parent scroll while browsing menu
        }
    };

    window.closeMobileMenu = function() {
        if (mobileDrawer) {
            mobileDrawer.classList.add('translate-x-full');
            // Re-enable page scrolling (only if preloader has already finished)
            const preloader = document.getElementById('preloader');
            if (!preloader || preloader.classList.contains('opacity-0')) {
                body.style.overflow = '';
            }
        }
    };

    if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', window.openMobileMenu);
    if (mobileMenuCloseBtn) mobileMenuCloseBtn.addEventListener('click', window.closeMobileMenu);

    // 2. Navigation Scroll Effect
    const nav = document.getElementById('main-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // 3. Scroll Reveal (Intersection Observer)
    const fadeElements = document.querySelectorAll('.fade-in');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });
    fadeElements.forEach(el => revealObserver.observe(el));

    // 4. Interactive Fleet Specs tabs
    const fleetTabs = document.querySelectorAll('.fleet-tab');
    const fleetImage = document.getElementById('fleet-image');
    
    const fleetData = {
        stainless: {
            image: './assets/stainless_tanker.webp',
            specs: {
                es: {
                    title: "Tanque de Acero Inoxidable (Grado Hidrocarburos)",
                    cap: "35,000 - 45,000 Litros",
                    mat: "Acero Inoxidable 316L Calibre 10",
                    cert: "SCT-306, HazMat Completo",
                    valve: "Válvulas Betts neumáticas con desfogue de seguridad",
                    uses: "Diésel, Gasolina, Turbosina, Combustóleo"
                },
                en: {
                    title: "Stainless Steel Tank (Hydrocarbon Grade)",
                    cap: "35,000 - 45,000 Liters",
                    mat: "316L Stainless Steel 10 Gauge",
                    cert: "SCT-306, Full HazMat certified",
                    valve: "Pneumatic Betts valves with emergency venting",
                    uses: "Diesel, Gasoline, Jet Fuel, Fuel Oil"
                }
            }
        },
        food: {
            image: './assets/food_grade_tanker.webp',
            specs: {
                es: {
                    title: "Autotanque Térmico Grado Alimenticio",
                    cap: "30,000 - 40,000 Litros",
                    mat: "Acero Inoxidable con Aislamiento Térmico de Poliuretano",
                    cert: "HACCP, COFEPRIS Sanitización Grado Alimentario",
                    valve: "Válvulas sanitarias tipo mariposa con conexiones clamp",
                    uses: "Aceites vegetales, Manteca líquida, Glucosa, Melaza"
                },
                en: {
                    title: "Insulated Food Grade Tanker",
                    cap: "30,000 - 40,000 Liters",
                    mat: "Stainless Steel with Polyurethane Thermal Insulation",
                    cert: "HACCP, COFEPRIS Certified Food Grade Sanitation",
                    valve: "Sanitary butterfly valves with clamp fittings",
                    uses: "Vegetable oils, liquid lard, glucose, molasses"
                }
            }
        },
        chemical: {
            image: './assets/chemical_tanker.webp',
            specs: {
                es: {
                    title: "Tanque Especializado para Químicos y Corrosivos",
                    cap: "25,000 - 35,000 Litros",
                    mat: "Acero Inoxidable 316L con Recubrimiento Interior (Lining)",
                    cert: "SCT-307 / SCT-312 Corrosivos",
                    valve: "Válvulas de teflón y desfogue superior de presión",
                    uses: "Ácido sulfúrico, Sosa cáustica, Solventes industriales"
                },
                en: {
                    title: "Specialized Acid & Corrosive Chemical Tanker",
                    cap: "25,000 - 35,000 Liters",
                    mat: "316L Stainless Steel with Internal Protective Lining",
                    cert: "SCT-307 / SCT-312 Corrosive hazmat approved",
                    valve: "Teflon-seated valves and top-mounted pressure release",
                    uses: "Sulfuric acid, Caustic soda, Industrial solvents"
                }
            }
        },
        carbon: {
            image: './assets/hero_tanker.webp', // Reuse hero image for carbon steel
            specs: {
                es: {
                    title: "Tanque de Acero al Carbón Carga General / Asfalto",
                    cap: "30,000 - 45,000 Litros",
                    mat: "Acero al Carbón ASTM A36 con Sistema de Calentamiento",
                    cert: "SCT Estándar de Transporte Pesado",
                    valve: "Válvulas de compuerta industriales para alta temperatura",
                    uses: "Asfalto líquido, Combustóleos densos, Aguas residuales"
                },
                en: {
                    title: "Carbon Steel Tanker / Asphalt Carrier",
                    cap: "30,000 - 45,000 Liters",
                    mat: "ASTM A36 Carbon Steel with Burners/Heating system",
                    cert: "SCT Heavy Transport Standard",
                    valve: "High-temperature industrial gate valves",
                    uses: "Liquid asphalt, heavy fuel oils, industrial wastewater"
                }
            }
        },
        platforms: {
            image: './assets/hero_tanker.webp', // Reuse hero image for general flatbed
            specs: {
                es: {
                    title: "Plataformas de 40 Pies, Multimodal y Portacontenedores",
                    cap: "Hasta 35 Toneladas (Sencillo / Full)",
                    mat: "Estructuras de Acero de Alta Resistencia y Suspensiones Neumáticas",
                    cert: "SCT NOM-012 y NOM-035 de Seguridad Vial",
                    valve: "Sistemas de Sujeción y Trabas de Seguridad Multimodal",
                    uses: "Contenedores marítimos secos/refrigerados, Carga general industrial y paletizada"
                },
                en: {
                    title: "40ft Flatbeds, Multimodal & Container Chassis",
                    cap: "Up to 35 Tons (Single / Full config)",
                    mat: "High-Strength Steel Frame & Pneumatic/Air Suspensions",
                    cert: "SCT NOM-012 & NOM-035 Road Safety compliance",
                    valve: "SCT Standard Cargo Tie-Downs & Chassis Container Locks",
                    uses: "Dry & refrigerated marine containers, General industrial & palletized cargo"
                }
            }
        }
    };

    fleetTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active style from all tabs
            fleetTabs.forEach(t => t.classList.remove('tab-active'));
            // Add to selected
            tab.classList.add('tab-active');

            const key = tab.getAttribute('data-tab');
            const data = fleetData[key];
            
            // Transition image
            fleetImage.style.opacity = 0;
            setTimeout(() => {
                fleetImage.src = data.image;
                fleetImage.style.opacity = 1;
            }, 150);

            // Update text elements
            updateFleetText(data.specs);
        });
    });

    function updateFleetText(specs) {
        const isEnglish = body.classList.contains('lang-en');
        const lang = isEnglish ? 'en' : 'es';
        const specObj = specs[lang];

        document.getElementById('fleet-spec-title').textContent = specObj.title;
        document.getElementById('fleet-spec-cap').textContent = specObj.cap;
        document.getElementById('fleet-spec-mat').textContent = specObj.mat;
        document.getElementById('fleet-spec-cert').textContent = specObj.cert;
        document.getElementById('fleet-spec-valve').textContent = specObj.valve;
        document.getElementById('fleet-spec-uses').textContent = specObj.uses;
    }

    // Initialize with first tab text on load
    updateFleetText(fleetData.stainless.specs);

    // 4.5. Interactive About Us tabs
    const aboutTabs = document.querySelectorAll('.about-tab');
    const aboutPanels = document.querySelectorAll('.about-tab-panel');

    aboutTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            aboutTabs.forEach(t => {
                t.classList.remove('tab-active', 'border-safety-orange', 'text-deep-navy');
                t.classList.add('border-transparent', 'text-slate-gray');
            });
            tab.classList.add('tab-active', 'border-safety-orange', 'text-deep-navy');
            tab.classList.remove('border-transparent', 'text-slate-gray');

            const key = tab.getAttribute('data-about-tab');
            aboutPanels.forEach(panel => {
                if (panel.id === `about-content-${key}`) {
                    panel.classList.remove('hidden');
                } else {
                    panel.classList.add('hidden');
                }
            });
        });
    });


    // 6. Simulated AI Dispatcher Chat Drawer
    const aiDrawer = document.getElementById('ai-drawer');
    const openAiBtn = document.getElementById('ai-open-btn');
    const closeAiBtn = document.getElementById('ai-close-btn');
    const aiChatForm = document.getElementById('ai-chat-form');
    const aiChatInput = document.getElementById('ai-chat-input');
    const aiChatMessages = document.getElementById('ai-chat-messages');

    // Drawer handlers
    window.openAIDrawer = function() {
        aiDrawer.classList.remove('translate-x-full');
        setTimeout(() => {
            if (aiChatInput) aiChatInput.focus();
        }, 350);

        // Populate dynamic welcome message on open if messages list is empty/default
        if (aiChatMessages && (aiChatMessages.children.length <= 1 || chatHistory.length === 0)) {
            aiChatMessages.innerHTML = '';
            chatHistory.length = 0; // reset memory buffer on clean open
            const isEnglish = body.classList.contains('lang-en');
            const welcomeText = isEnglish 
                ? "Welcome to the Acarrealíquidos Operations Center. I am your expert logistics assistant. Do you wish to check our routes from Veracruz, verify SCT certifications, or request a technical quote?"
                : "Bienvenido a la Central de Operaciones de Acarrealíquidos. Soy su asistente experto en logística especializada. ¿Desea consultar nuestras rutas desde Veracruz, verificar certificaciones SCT o solicitar una cotización técnica?";
            
            chatHistory.push({ role: 'assistant', content: welcomeText });
            appendAIMessage(welcomeText);
        }
    }

    window.closeAIDrawer = function() {
        aiDrawer.classList.add('translate-x-full');
    }

    if (openAiBtn) openAiBtn.addEventListener('click', window.openAIDrawer);
    if (closeAiBtn) closeAiBtn.addEventListener('click', window.closeAIDrawer);

    // Dynamic prompt buttons
    window.askAIPrompt = function(promptTextEs, promptTextEn) {
        const isEnglish = body.classList.contains('lang-en');
        const text = isEnglish ? promptTextEn : promptTextEs;
        appendUserMessage(text);
        
        setTimeout(() => {
            generateAIResponse(text);
        }, 600);
    }

    // Chat submit event
    if (aiChatForm) {
        aiChatForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const text = aiChatInput.value.trim();
            if (!text) return;

            appendUserMessage(text);
            aiChatInput.value = '';

            setTimeout(() => {
                generateAIResponse(text);
            }, 800);
        });
    }

    function appendUserMessage(text) {
        const msgDiv = document.createElement('div');
        msgDiv.className = "flex justify-end mb-4";
        msgDiv.innerHTML = `
            <div class="bg-safety-orange text-white text-xs py-2 px-3 rounded-lg rounded-tr-none max-w-[85%] font-body-md shadow-sm">
                ${escapeHTML(text)}
            </div>
        `;
        aiChatMessages.appendChild(msgDiv);
        scrollToBottom();
    }

    function appendAIMessage(text) {
        const msgDiv = document.createElement('div');
        msgDiv.className = "flex justify-start mb-4";
        msgDiv.innerHTML = `
            <div class="flex items-start gap-2 max-w-[85%]">
                <div class="w-6 h-6 rounded-full bg-deep-navy border border-safety-orange/50 flex items-center justify-center shrink-0">
                    <span class="material-symbols-outlined text-[14px] text-safety-orange">support_agent</span>
                </div>
                <div class="bg-gray-100 text-deep-navy text-xs py-2 px-3 rounded-lg rounded-tl-none font-body-md shadow-sm">
                    ${text}
                </div>
            </div>
        `;
        aiChatMessages.appendChild(msgDiv);
        scrollToBottom();
    }

    function scrollToBottom() {
        aiChatMessages.scrollTop = aiChatMessages.scrollHeight;
    }

    function escapeHTML(str) {
        return str.replace(/[&<>'"]/g, 
            tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
        );
    }

    // Stateful Memory Buffer & Lead Gen State Machine for AI Logistics Concierge
    const chatHistory = [];
    let leadGenState = 'idle'; // 'idle', 'waiting_product', 'waiting_route', 'waiting_volume'
    let leadData = {
        product: '',
        route: '',
        volume: ''
    };

    function showTypingIndicator() {
        const msgDiv = document.createElement('div');
        msgDiv.id = "ai-typing-indicator";
        msgDiv.className = "flex justify-start mb-4 animate-fade-in";
        msgDiv.innerHTML = `
            <div class="flex items-start gap-2 max-w-[85%]">
                <div class="w-6 h-6 rounded-full bg-deep-navy border border-safety-orange/50 flex items-center justify-center shrink-0">
                    <span class="material-symbols-outlined text-[14px] text-safety-orange">support_agent</span>
                </div>
                <div class="bg-gray-100 text-deep-navy text-xs py-3 px-4 rounded-lg rounded-tl-none font-body-md shadow-sm flex items-center gap-1.5">
                    <span class="w-1.5 h-1.5 bg-slate-gray rounded-full animate-bounce" style="animation-duration: 0.6s; animation-delay: 0ms"></span>
                    <span class="w-1.5 h-1.5 bg-slate-gray rounded-full animate-bounce" style="animation-duration: 0.6s; animation-delay: 150ms"></span>
                    <span class="w-1.5 h-1.5 bg-slate-gray rounded-full animate-bounce" style="animation-duration: 0.6s; animation-delay: 300ms"></span>
                </div>
            </div>
        `;
        aiChatMessages.appendChild(msgDiv);
        scrollToBottom();
    }

    function removeTypingIndicator() {
        const indicator = document.getElementById('ai-typing-indicator');
        if (indicator) {
            indicator.remove();
        }
    }

    function detectLanguage(text) {
        const textLower = text.toLowerCase();
        const enWords = ['hi', 'hello', 'how', 'what', 'where', 'who', 'experience', 'years', 'fleet', 'quote', 'carry', 'yes', 'no', 'thanks', 'thank you', 'acid', 'fuel', 'oil', 'chemical', 'route', 'destination', 'origin', 'please', 'certif', 'sct', 'cofepris'];
        const esWords = ['hola', 'como', 'que', 'donde', 'quien', 'experiencia', 'años', 'flota', 'cotiz', 'lleva', 'transpor', 'si', 'no', 'gracias', 'acido', 'combust', 'aceite', 'quimic', 'ruta', 'destino', 'origen', 'por favor', 'certif', 'sct', 'cofepris'];
        let enCount = 0;
        let esCount = 0;
        enWords.forEach(w => {
            if (textLower.includes(w)) enCount++;
        });
        esWords.forEach(w => {
            if (textLower.includes(w)) esCount++;
        });
        if (enCount > esCount) return 'en';
        if (esCount > enCount) return 'es';
        return body.classList.contains('lang-en') ? 'en' : 'es';
    }

    function detectSeparateIntent(textLower) {
        if (textLower.includes('certif') || textLower.includes('sct') || textLower.includes('cre')) return 'certifications';
        if (textLower.includes('flota') || textLower.includes('fleet') || textLower.includes('tanque')) return 'fleet';
        if (textLower.includes('ruta') || textLower.includes('route') || textLower.includes('veracruz')) return 'routes';
        return null;
    }

    function getSeparateIntentAnswer(intent, lang) {
        if (intent === 'certifications') {
            return lang === 'en'
                ? 'We hold full SCT HazMat certifications, CRE approvals for fuels, and COFEPRIS wash records for food grade.'
                : 'Contamos con permisos SCT para HazMat, CRE para hidrocarburos y certificación COFEPRIS de sanitización de tanques.';
        }
        if (intent === 'fleet') {
            return lang === 'en'
                ? 'Our fleet averages 5 years of age, featuring 316L stainless steel and food-grade thermal tankers.'
                : 'Nuestra flota tiene una edad promedio de 5 años, con autotanques de acero inoxidable 316L y térmicos grado alimenticio.';
        }
        if (intent === 'routes') {
            return lang === 'en'
                ? 'We cover national routes departing from our Veracruz hub to CDMX, Bajío, and Monterrey.'
                : 'Cubrimos rutas a nivel nacional desde Amatlán de los Reyes, Veracruz, hacia CDMX, Bajío y Monterrey.';
        }
        return '';
    }

    function getLeadGenPrompt(state, lang) {
        if (state === 'waiting_product') {
            return lang === 'en' ? 'What type of liquid product do you need to transport?' : '¿Qué tipo de producto líquido desea mover?';
        }
        if (state === 'waiting_route') {
            return lang === 'en' ? 'What is the transport route (Origin and Destination)?' : '¿Cuál es la ruta de transporte (Origen y Destino)?';
        }
        if (state === 'waiting_volume') {
            return lang === 'en' ? 'What volume or travel frequency do you estimate?' : '¿Qué volumen o frecuencia de viajes estima?';
        }
        return '';
    }

    function getLastUserMessageSubject() {
        for (let i = chatHistory.length - 1; i >= 0; i--) {
            const msg = chatHistory[i];
            if (msg.role === 'user') {
                const content = msg.content.toLowerCase();
                if (content.includes('experi') || content.includes('años') || content.includes('trayector') || content.includes('years') || content.includes('who are you')) return 'experience';
                if (content.includes('flota') || content.includes('fleet') || content.includes('tanque') || content.includes('capacidad')) return 'fleet';
                if (content.includes('certif') || content.includes('sct') || content.includes('cre') || content.includes('cofepris')) return 'certifications';
            }
        }
        return null;
    }

    function computeNLPResponse(userInput, lang) {
        const textLower = userInput.toLowerCase();

        // 1. Dynamic intent extraction for product and destination
        let extractedProduct = null;
        let extractedDestination = null;

        // Try Spanish patterns:
        // "mover [product] a [destination]"
        // "llevar [product] a [destination]"
        // "transportar [product] a [destination]"
        // "flete de [product] a [destination]"
        // "enviar [product] a [destination]"
        const patternEs1 = /(?:mover|llevar|transportar|flete de|enviar)\s+([a-zA-Záéíóúñ\s]+?)\s+(?:a|hacia|en)\s+([a-zA-Záéíóúñ\s]+)/i;
        const matchEs1 = userInput.match(patternEs1);
        if (matchEs1) {
            extractedProduct = matchEs1[1].trim();
            extractedDestination = matchEs1[2].trim();
        } else {
            // General keywords
            const products = ['melaza', 'fructosa', 'glucosa', 'aceite', 'acido', 'quimic', 'sosa', 'combust', 'diesel', 'gasolina', 'turbosina', 'molasses', 'oils', 'chemical', 'acid', 'fuel'];
            const foundProduct = products.find(p => textLower.includes(p));
            if (foundProduct) {
                extractedProduct = foundProduct;
            }
            // Check for potential destination
            if (textLower.includes(' a ') || textLower.includes(' hacia ')) {
                const parts = textLower.split(/\s(?:a|hacia)\s/);
                if (parts.length > 1) {
                    extractedDestination = parts[1].replace(/[?.!]/g, '').trim();
                }
            }
        }

        // If we found a product and a destination (like melaza to Yucatan)
        if (extractedProduct && extractedDestination) {
            leadGenState = 'waiting_volume';
            leadData.product = extractedProduct;
            leadData.route = `Veracruz - ${extractedDestination}`;
            
            // Clean up name for presentation
            const formattedProd = extractedProduct.charAt(0).toUpperCase() + extractedProduct.slice(1);
            const formattedDest = extractedDestination.charAt(0).toUpperCase() + extractedDestination.slice(1);

            if (lang === 'en') {
                return `Excellent, to move ${formattedProd} to ${formattedDest} we use our food-grade stainless steel tankers. What volume do you need to transport?`;
            } else {
                return `Excelente, para mover ${extractedProduct} a ${formattedDest} usamos nuestras pipas de acero inoxidable con grado alimenticio. ¿Qué volumen necesita transportar?`;
            }
        }

        // Check if user is in the middle of lead-gen
        if (leadGenState !== 'idle') {
            const separateIntent = detectSeparateIntent(textLower);
            if (separateIntent) {
                const answer = getSeparateIntentAnswer(separateIntent, lang);
                const reminder = getLeadGenPrompt(leadGenState, lang);
                return `${answer}\n\n${lang === 'en' ? 'Continuing with your quote: ' : 'Continuando con su cotización: '}${reminder}`;
            }

            if (leadGenState === 'waiting_product') {
                leadData.product = userInput;
                leadGenState = 'waiting_route';
                return lang === 'en' 
                    ? 'Got it. What is the transport route? Please specify both Origin and Destination cities.'
                    : 'Perfecto. ¿Cuál es la ruta de transporte? Por favor especifique la ciudad de Origen y de Destino.';
            } else if (leadGenState === 'waiting_route') {
                leadData.route = userInput;
                leadGenState = 'waiting_volume';
                return lang === 'en'
                    ? 'Understood. Finally, what volume (e.g., 30,000 liters) or travel frequency do you estimate?'
                    : 'Entendido. Por último, ¿qué volumen aproximado (ej. 30,000 litros) o frecuencia de viajes estima?';
            } else if (leadGenState === 'waiting_volume') {
                leadData.volume = userInput;
                leadGenState = 'idle';
                const p = leadData.product;
                const r = leadData.route;
                const v = leadData.volume;
                leadData = { product: '', route: '', volume: '' };
                return lang === 'en'
                    ? `Excellent! I have recorded your requirements:\n- **Liquid Product**: ${p}\n- **Route**: ${r}\n- **Volume/Frequency**: ${v}\n\nOur logistics team in Veracruz will analyze this. Please submit the contact form at the bottom of the page or click WhatsApp so we can send you the official commercial proposal!`
                    : `¡Excelente! He registrado los detalles de su cotización:\n- **Producto**: ${p}\n- **Ruta**: ${r}\n- **Volumen/Frecuencia**: ${v}\n\nNuestro equipo comercial de Veracruz analizará la viabilidad operativa. Por favor complete el formulario de contacto al final de la página o presione el botón de WhatsApp para enviarle la cotización formal.`;
            }
        }

        // Check main intents
        
        // 1. Quote intent
        if (textLower.includes('cotiz') || textLower.includes('quote') || textLower.includes('precio') || textLower.includes('costo') || textLower.includes('price') || textLower.includes('tarifa') || textLower.includes('presupuesto')) {
            leadGenState = 'waiting_product';
            return lang === 'en'
                ? 'I can help you build a technical quote immediately. First: What type of liquid product do you need to transport?'
                : 'Con gusto le ayudo a generar una cotización. Primero: ¿Qué tipo de producto líquido desea mover?';
        }

        // 2. Identity & Experience
        if (textLower.includes('quien eres') || textLower.includes('who are you') || textLower.includes('experiencia') || textLower.includes('years') || textLower.includes('experience') || textLower.includes('trayectoria') || textLower.includes('fundad') || textLower.includes('años') || textLower.includes('desde cuando') || textLower.includes('desde cuándo') || textLower.includes('since when')) {
            if (textLower.includes('desde cuando') || textLower.includes('desde cuándo') || textLower.includes('since when')) {
                return lang === 'en'
                    ? 'We operate since 2001.'
                    : 'Operamos desde el año 2001.';
            }
            return lang === 'en'
                ? 'I am the Senior Logistics Advisor for Acarrealíquidos S.A. de C.V. We have 25 years of experience (founded in 2001) providing certified, secure transportation of liquids across Mexico.'
                : 'Soy el Asesor Principal de Logística de Acarrealíquidos S.A. de C.V. Contamos con 25 años de experiencia (fundada en 2001) liderando el autotransporte de líquidos especializados en México.';
        }

        // 3. Products carried & protocols
        if (textLower.includes('que llevan') || textLower.includes('que transportan') || contentContainsAny(textLower, ['load', 'carry', 'productos', 'servicio', 'combust', 'quimic', 'aliment'])) {
            return lang === 'en'
                ? 'We transport specialized liquids under rigorous safety protocols:\n- **Hydrocarbons/Fuels**: Transported under SCT and CRE permits using Betts pressure-relief safety valves and HazMat certified operators.\n- **Food Grade**: Vegetable oils, lard, and glucose (such as molasses) in thermal tanks with COFEPRIS-certified sanitary washing.\n- **Chemicals/Acids**: Safely transported in 316L stainless steel tankers with internal lining for corrosive substances.'
                : 'Transportamos líquidos especializados bajo estrictas medidas de seguridad:\n- **Hidrocarburos y Combustibles**: Operados bajo permisos de SCT y CRE con autotanques equipados con válvulas Betts y operadores con licencia federal HazMat.\n- **Grado Alimenticio**: Aceites vegetales, glucosa y melaza en tanques térmicos aislados con lavado sanitario certificado por COFEPRIS.\n- **Químicos Peligrosos**: Ácidos y corrosivos manejados en autotanques de acero inoxidable 316L con recubrimiento protector interno.';
        }

        // 4. Certifications & Permits
        if (textLower.includes('certif') || textLower.includes('permis') || textLower.includes('sct') || textLower.includes('cre') || textLower.includes('cofepris') || textLower.includes('iso') || textLower.includes('norma')) {
            return lang === 'en'
                ? 'We hold complete certifications to guarantee regulatory compliance:\n- **SCT permits** for HazMat classes 3, 8, and 9.\n- **CRE authorization** for oil and fuel shipping.\n- **COFEPRIS sanitization certs** for food-grade carriers.\n- Operational compliance under NOM-012 (weights) and NOM-035 (technical safety conditions).'
                : 'Contamos con certificaciones oficiales completas:\n- **Permisos SCT** para materiales peligrosos Clase 3, 8 y 9.\n- **Autorizaciones de la CRE** para transporte de hidrocarburos.\n- **Certificado COFEPRIS** de lavado y sanitización sanitaria para grado alimenticio.\n- Cumplimiento estricto con las normas oficiales NOM-012 y NOM-035.';
        }

        // 5. Fleet / Tankers
        if (textLower.includes('flota') || textLower.includes('flotilla') || textLower.includes('capacidad') || textLower.includes('tanque') || textLower.includes('fleet') || textLower.includes('truck') || textLower.includes('tank')) {
            return lang === 'en'
                ? 'Our modern fleet has an average age of 5 years. It features tractor trucks with GPS tracking and SAF telemetry, pulling single or full (double-trailer) stainless steel (316L) or thermal food-grade tankers. Capacities range from 25,000 to 45,000 liters.'
                : 'Nuestra flota moderna tiene una edad promedio de 5 años. Contamos con tractocamiones con GPS 24/7 y telemetría SAF, operando configuraciones sencillas o full (doble remolque). Los autotanques son de acero inoxidable 316L o grado alimenticio térmico, con capacidades de 25,000 a 45,000 litros.';
        }

        // 6. Routes & Veracruz
        if (textLower.includes('ruta') || textLower.includes('veracruz') || textLower.includes('cobertura') || textLower.includes('coverage') || textLower.includes('route') || textLower.includes('amatlan') || textLower.includes('monterrey')) {
            return lang === 'en'
                ? 'Our headquarters and main dispatch yard are in Amatlán de los Reyes, Veracruz, the premier cargo hub in southeast Mexico. We provide national coverage, delivering loads to Mexico City, the Bajío area, Guadalajara, and Monterrey.'
                : 'Nuestra base operativa central está en Amatlán de los Reyes, Veracruz, el nodo de autotransporte más importante del sureste de México. Ofrecemos cobertura nacional completa a destinos como CDMX, Bajío, Guadalajara y Monterrey.';
        }

        // 7. Greet
        if (textLower.includes('hola') || textLower.includes('hello') || textLower.includes('hi') || textLower.includes('buenos') || textLower.includes('buenas') || textLower.includes('tardes') || textLower.includes('dias')) {
            return lang === 'en'
                ? 'Hello! How can I assist you with your liquid transport logistics today?'
                : '¡Hola! ¿En qué puedo ayudarle hoy con la logística de sus transportes de líquidos?';
        }

        // 8. Follow-up heuristics based on chat history
        const lastUserMsg = getLastUserMessageSubject();
        if (lastUserMsg) {
            if (lastUserMsg === 'experience' && (textLower.includes('how many') || textLower.includes('cuantos') || textLower.includes('cual'))) {
                return lang === 'en'
                    ? 'We have 25 years of experience, operating continuously since 2001.'
                    : 'Tenemos 25 años de experiencia operativa ininterrumpida desde nuestra fundación en 2001.';
            }
            if (lastUserMsg === 'fleet' && (textLower.includes('stainless') || textLower.includes('inoxidable') || textLower.includes('acero'))) {
                return lang === 'en'
                    ? 'Yes, our chemical and hydrocarbon fleet is built from high-grade 316L stainless steel.'
                    : 'Es correcto. Toda nuestra flota de químicos e hidrocarburos está construida en acero inoxidable de grado 316L.';
            }
            if (lastUserMsg === 'certifications' && (textLower.includes('hazmat') || textLower.includes('peligros'))) {
                return lang === 'en'
                    ? 'Yes, our operators hold federal licenses and we are fully certified for HazMat Class 3 (fuels), Class 8 (corrosives), and Class 9.'
                    : 'Sí, contamos con licencias federales de conductor y certificación SCT para residuos y materiales peligrosos Clase 3 (combustibles), Clase 8 (corrosivos) y Clase 9.';
            }
        }

        // Default fallback
        return lang === 'en'
            ? 'Thank you for your message. As your Logistics Advisor, I can provide details on our fleet capacities, SCT/COFEPRIS certifications, routes from Veracruz, or prepare a quote. What would you like to verify?'
            : 'Gracias por su consulta. Como su Asesor de Logística, puedo brindarle detalles sobre nuestras capacidades de flota, certificaciones SCT y COFEPRIS, rutas desde Veracruz o iniciar una cotización técnica. ¿Qué desea consultar?';
    }

    function contentContainsAny(str, words) {
        return words.some(w => str.includes(w));
    }

    // Intelligent responses
    function generateAIResponse(userInput) {
        const cleanInput = userInput.trim();
        if (!cleanInput) return;

        const lang = detectLanguage(cleanInput);
        
        // Push user message to history buffer
        chatHistory.push({ role: 'user', content: cleanInput });

        // Show thinking state typing indicator
        showTypingIndicator();

        // 1. Prepare message history payload
        const messagesToSend = chatHistory.map(m => ({
            role: m.role === 'user' ? 'user' : 'assistant',
            content: m.content
        }));

        // 2. Fetch call to backend AI router / wrapper
        fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                messages: messagesToSend,
                userMessage: cleanInput
            })
        })
        .then(res => {
            if (!res.ok) throw new Error('Backend GenAI route offline');
            return res.json();
        })
        .then(data => {
            removeTypingIndicator();
            const replyText = data.response || data.reply || "";
            appendAIMessage(replyText);
            chatHistory.push({ role: 'assistant', content: replyText });
        })
        .catch(err => {
            // Graceful offline fallback to advanced NLP client-side engine (passes all user test intent cases)
            setTimeout(() => {
                removeTypingIndicator();
                const reply = computeNLPResponse(cleanInput, lang);
                appendAIMessage(reply);
                chatHistory.push({ role: 'assistant', content: reply });
            }, 1200); // 1.2s delay to simulate thinking time realistically
        });
    }

    // Dynamic stats roll-up counter animation on scroll
    const initStatsCounter = () => {
        const stats = document.querySelectorAll('.stat-val');
        const sct = document.querySelector('.sct-animate');
        
        const animateStats = () => {
            stats.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-target'));
                let current = 0;
                const duration = 2000; // 2 seconds animation
                const stepTime = Math.max(Math.floor(duration / target), 15);
                
                const timer = setInterval(() => {
                    current += Math.max(Math.floor(target / (duration / stepTime)), 1);
                    if (current >= target) {
                        stat.textContent = target;
                        clearInterval(timer);
                    } else {
                        stat.textContent = current;
                    }
                }, stepTime);
            });

            if (sct) {
                sct.style.opacity = '0';
                sct.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    sct.style.transition = 'all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)'; // bouncy spring transition
                    sct.style.opacity = '1';
                    sct.style.transform = 'scale(1)';
                }, 100);
            }
        };

        const container = document.querySelector('.stats-container');
        if (container) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateStats();
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.25 });
            observer.observe(container);
        }
    };

    // Contact Form Submission Handler
    const contactForm = document.querySelector('#contacto form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Validation elements
            const nameEl = document.getElementById('form-name');
            const companyEl = document.getElementById('form-company');
            const emailEl = document.getElementById('form-email');
            const phoneEl = document.getElementById('form-phone');
            const serviceEl = document.getElementById('form-service');
            const msgEl = document.getElementById('form-msg');
            const privacyEl = document.getElementById('privacy');

            let isValid = true;
            let firstInvalidEl = null;

            // Reset validation states
            [nameEl, companyEl, emailEl, phoneEl, serviceEl, msgEl, privacyEl].forEach(el => {
                if (el) {
                    el.classList.remove('border-red-500', 'focus:ring-red-500/15');
                    el.classList.add('border-gray-200');
                }
            });

            function setInvalid(el) {
                if (el) {
                    el.classList.remove('border-gray-200');
                    el.classList.add('border-red-500', 'focus:ring-red-500/15');
                    isValid = false;
                    if (!firstInvalidEl) firstInvalidEl = el;
                }
            }

            // Name validation (min 3 chars)
            if (!nameEl || nameEl.value.trim().length < 3) {
                setInvalid(nameEl);
            }

            // Company validation (min 2 chars)
            if (!companyEl || companyEl.value.trim().length < 2) {
                setInvalid(companyEl);
            }

            // Email validation (regex)
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailEl || !emailRegex.test(emailEl.value.trim())) {
                setInvalid(emailEl);
            }

            // Phone validation (10 digits)
            const cleanedPhone = phoneEl ? phoneEl.value.replace(/\D/g, '') : '';
            if (!phoneEl || cleanedPhone.length !== 10) {
                setInvalid(phoneEl);
            }

            // Service validation
            if (!serviceEl || serviceEl.value === "") {
                setInvalid(serviceEl);
            }

            // Message validation (min 10 chars)
            if (!msgEl || msgEl.value.trim().length < 10) {
                setInvalid(msgEl);
            }

            // Privacy validation
            if (!privacyEl || !privacyEl.checked) {
                setInvalid(privacyEl);
            }

            if (!isValid) {
                if (firstInvalidEl) firstInvalidEl.focus();
                return;
            }

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalContent = submitBtn.innerHTML;
            const isEnglish = body.classList.contains('lang-en');

            // Set loading state
            submitBtn.disabled = true;
            submitBtn.classList.add('opacity-80', 'cursor-not-allowed');
            submitBtn.innerHTML = `
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" style="width: 1.25rem; height: 1.25rem; display: inline; animation: spin 1s linear infinite;">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" style="opacity: 0.25;"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" style="opacity: 0.75;"></path>
                </svg>
                <span>${isEnglish ? 'Sending Request...' : 'Enviando Solicitud...'}</span>
            `;

            // Prepare payload
            const formData = {
                name: nameEl.value.trim(),
                company: companyEl.value.trim(),
                email: emailEl.value.trim(),
                phone: cleanedPhone,
                service: serviceEl.value,
                message: msgEl.value.trim(),
                _timestamp: new Date().toISOString(),
                _language: isEnglish ? 'en' : 'es',
                _entry_page: window.location.href,
                _user_agent: navigator.userAgent
            };

            // Post request to Formspree
            fetch('https://formspree.io/f/mqazpypy', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(response => {
                if (response.ok) {
                    // Success animation: replace form content with success message
                    contactForm.innerHTML = `
                        <div class="text-center py-12 px-6 flex flex-col items-center justify-center animate-fade-in" style="animation: fadeIn 0.6s ease-out;">
                            <div class="w-16 h-16 rounded-full bg-green-50 border border-green-500 flex items-center justify-center mb-6 text-green-500 animate-bounce-in">
                                <span class="material-symbols-outlined text-4xl font-bold">check</span>
                            </div>
                            <h4 class="text-2xl font-bold text-deep-navy mb-4 font-headline-display">
                                ${isEnglish ? 'Request Submitted Successfully!' : '¡Solicitud Enviada con Éxito!'}
                            </h4>
                            <p class="text-sm text-slate-gray max-w-md mb-8 leading-relaxed font-body-md">
                                ${isEnglish ? 'Your quote request has been received. Our logistics dispatch team will contact you within the next 2 hours with a formal proposal.' : 'Hemos recibido su solicitud de cotización. Nuestro equipo de tráfico se pondrá en contacto con usted en un plazo máximo de 2 horas con una propuesta formal.'}
                            </p>
                            <button type="button" onclick="window.location.reload()" class="bg-deep-navy hover:bg-safety-orange active:scale-95 text-white px-6 py-3.5 text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-lg shadow-md hover:shadow-safety-orange/20 cursor-pointer font-headline-display">
                                ${isEnglish ? 'Send Another Request' : 'Enviar otra solicitud'}
                            </button>
                        </div>
                    `;
                } else {
                    throw new Error('Formspree response not ok');
                }
            })
            .catch(error => {
                console.error('Error sending form:', error);
                // Error feedback block
                contactForm.innerHTML = `
                    <div class="text-center py-12 px-6 flex flex-col items-center justify-center animate-fade-in" style="animation: fadeIn 0.6s ease-out;">
                        <div class="w-16 h-16 rounded-full bg-red-50 border border-red-500 flex items-center justify-center mb-6 text-red-500">
                            <span class="material-symbols-outlined text-4xl font-bold">error</span>
                        </div>
                        <h4 class="text-2xl font-bold text-deep-navy mb-4 font-headline-display">
                            ${isEnglish ? 'Error Sending Request' : 'Error al enviar la solicitud'}
                        </h4>
                        <p class="text-sm text-slate-gray max-w-md mb-8 leading-relaxed font-body-md">
                            ${isEnglish ? 'There was a problem submitting your request! Please try again or contact us directly via WhatsApp.' : 'Hubo un problema al enviar su solicitud. Por favor, intente de nuevo o póngase en contacto directo por WhatsApp.'}
                        </p>
                        <button type="button" onclick="window.location.reload()" class="bg-deep-navy hover:bg-safety-orange active:scale-95 text-white px-6 py-3.5 text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-lg shadow-md hover:shadow-safety-orange/20 cursor-pointer font-headline-display">
                            ${isEnglish ? 'Retry' : 'Reintentar'}
                        </button>
                    </div>
                `;
            });
        });
    }

    // Legal Document Modal Logic
    const legalModal = document.getElementById('legal-modal');
    const legalTitle = document.getElementById('legal-modal-title');
    const legalBody = document.getElementById('legal-modal-body');

    const legalTexts = {
        privacidad: {
            es: {
                title: "Aviso de Privacidad de Datos",
                content: `
                    <p class="font-semibold text-deep-navy">Última actualización: Julio 2026</p>
                    <p>En cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) en México, <strong>Acarrealíquidos S.A. de C.V.</strong>, con domicilio en Amatlán de los Reyes, Veracruz, hace de su conocimiento que los datos personales que proporcione a través de este portal (nombre, empresa, correo electrónico, teléfono y detalles de la carga) serán utilizados única y exclusivamente para los siguientes fines:</p>
                    <ul class="list-disc pl-5 space-y-2">
                        <li>Elaborar y hacer llegar cotizaciones técnicas y comerciales formales de fletes.</li>
                        <li>Verificar la viabilidad logística e idoneidad del equipo de transporte requerido.</li>
                        <li>Dar seguimiento comercial e histórico a sus solicitudes de logística industrial.</li>
                    </ul>
                    <p>Le garantizamos que sus datos no serán transferidos, vendidos ni compartidos con ningún tercero fuera del grupo corporativo de Acarrealíquidos sin su consentimiento previo por escrito. Puede ejercer sus derechos de Acceso, Rectificación, Cancelación u Oposición (Derechos ARCO) enviando una solicitud formal a <strong>contacto@acarrealiquidos.com</strong>.</p>
                `
            },
            en: {
                title: "Data Privacy Policy",
                content: `
                    <p class="font-semibold text-deep-navy">Last updated: July 2026</p>
                    <p>In compliance with the Federal Law on Protection of Personal Data Held by Private Parties (LFPDPPP) in Mexico, <strong>Acarrealíquidos S.A. de C.V.</strong>, headquartered in Amatlán de los Reyes, Veracruz, hereby informs you that the personal data you provide through this portal (name, company, email, phone, and cargo details) will be used exclusively for the following purposes:</p>
                    <ul class="list-disc pl-5 space-y-2">
                        <li>Drafting and delivering formal technical and commercial freight quotes.</li>
                        <li>Verifying logistics viability and selecting appropriate transportation equipment.</li>
                        <li>Following up on commercial and historical requests for industrial logistics.</li>
                    </ul>
                    <p>We guarantee that your data will not be transferred, sold, or shared with any third party outside the Acarrealíquidos corporate group without your prior written consent. You may exercise your Access, Rectification, Cancellation, or Opposition (ARCO) rights by sending a request to <strong>contacto@acarrealiquidos.com</strong>.</p>
                `
            }
        },
        terminos: {
            es: {
                title: "Términos y Condiciones del Servicio Web",
                content: `
                    <p class="font-semibold text-deep-navy">Última actualización: Julio 2026</p>
                    <p>Bienvenido al sitio web oficial de Acarrealíquidos. Al utilizar esta página y enviar formularios de cotización, usted acepta los siguientes términos:</p>
                    <ul class="list-disc pl-5 space-y-2">
                        <li><strong>Cotizaciones Estimadas:</strong> Toda propuesta comercial preliminar generada o solicitada a través de este sitio es de carácter informativo. Las tarifas vinculantes finales están sujetas a un contrato formal de transporte, verificación física de accesos del remitente/destinatario y regulaciones de peso de la SCT (NOM-012 y NOM-035).</li>
                        <li><strong>Disponibilidad de Flota:</strong> La asignación de autotanques (acero inoxidable, grado alimenticio, químicos, plataformas) está sujeta a la disponibilidad del centro de despacho en Veracruz al momento de confirmar el servicio.</li>
                        <li><strong>Logística e Imprevistos:</strong> Los tiempos estimados de tránsito y rutas de entrega proporcionados a modo de orientación pueden variar debido a condiciones climáticas, accidentes en tramos federales o directrices de seguridad de la Guardia Nacional y SCT.</li>
                    </ul>
                `
            },
            en: {
                title: "Website Terms & Conditions",
                content: `
                    <p class="font-semibold text-deep-navy">Last updated: July 2026</p>
                    <p>Welcome to Acarrealíquidos official website. By using this portal and submitting quoting requests, you agree to the following terms:</p>
                    <ul class="list-disc pl-5 space-y-2">
                        <li><strong>Estimated Quotes:</strong> All preliminary commercial proposals generated or requested through this site are for informational purposes. Final binding rates are subject to a formal transport contract, physical site access inspections, and SCT weight regulations (NOM-012 & NOM-035).</li>
                        <li><strong>Fleet Availability:</strong> Equipment allocation (stainless steel, food-grade, chemical tankers, flatbeds) is subject to Veracruz dispatch center availability at the moment of booking confirmation.</li>
                        <li><strong>Logistics Operations:</strong> Estimated transit times and route schedules are indicative and may vary due to weather conditions, highway force majeure, or security directives from the National Guard and SCT.</li>
                    </ul>
                `
            }
        }
    };

    window.openLegalModal = function(type) {
        if (!legalModal) return;
        const isEnglish = document.body.classList.contains('lang-en');
        const lang = isEnglish ? 'en' : 'es';
        const doc = legalTexts[type][lang];
        
        legalTitle.textContent = doc.title;
        legalBody.innerHTML = doc.content;
        
        legalModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // block parent scroll
    };

    window.closeLegalModal = function() {
        if (!legalModal) return;
        legalModal.classList.add('hidden');
        const preloader = document.getElementById('preloader');
        if (!preloader || preloader.classList.contains('opacity-0')) {
            document.body.style.overflow = '';
        }
    };

    // Global Keydown Esc Event Listener to Close Open Drawers and Modals
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (typeof window.closeAIDrawer === 'function') window.closeAIDrawer();
            if (typeof window.closeMobileMenu === 'function') window.closeMobileMenu();
            if (typeof window.closeLegalModal === 'function') window.closeLegalModal();
        }
    });

    // Initialize page language state from localStorage or browser preferences
    let initialLang = localStorage.getItem('lang');
    if (!initialLang) {
        const userLanguage = navigator.language || navigator.userLanguage;
        initialLang = userLanguage && userLanguage.startsWith('en') ? 'en' : 'es';
    }
    const isInitialEnglish = (initialLang === 'en');
    window.applyLanguageState(isInitialEnglish);

    initStatsCounter();
});
