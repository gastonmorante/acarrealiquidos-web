// Client-side interactions for Acarrealíquidos Landing Page

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const toggle = document.getElementById('lang-toggle');

    // Disable scrolling during preloader
    body.style.overflow = 'hidden';

    const preloader = document.getElementById('preloader');
    const preloaderBar = document.getElementById('preloader-bar');
    const preloaderLogo = document.getElementById('preloader-logo-wrap');
    const emitter = document.getElementById('splash-emitter');

    if (preloader) {
        // Step 1: Start loading line loader
        setTimeout(() => {
            if (preloaderBar) preloaderBar.style.width = '100%';
        }, 100);

        // Step 2: Fade-in and scale up the logo elegantly
        setTimeout(() => {
            if (preloaderLogo) {
                preloaderLogo.style.opacity = '1';
                preloaderLogo.style.transform = 'scale(1)';
            }
        }, 1200);

        // Step 3: Trigger the splash particle reveal (salpicadura)
        setTimeout(() => {
            const emitter = document.getElementById('splash-emitter');
            if (emitter) {
                // Emitting particles directly inside the absolute emitter element
                // This ensures they align with the visual drop 100% of the time, regardless of parent height or zoom.
                const colors = ['#FF6B00', '#051024', '#ff8533', '#25D366', '#00d2ff'];
                const count = 38; // High particle count for detailed salpicadura

                for (let i = 0; i < count; i++) {
                    const particle = document.createElement('div');
                    const size = Math.random() * 5 + 3; // Smaller, more elegant size: 3px to 8px
                    const isOrange = Math.random() > 0.35; // mostly brand safety orange
                    
                    particle.className = 'splash-droplet';
                    particle.style.width = `${size}px`;
                    particle.style.height = `${size}px`;
                    particle.style.backgroundColor = isOrange ? '#FF6B00' : colors[Math.floor(Math.random() * colors.length)];
                    
                    // Position at the exact center of the absolute emitter div
                    particle.style.left = '50%';
                    particle.style.top = '50%';
                    
                    // Controlled elegant velocity (lower spread distance to look centered and not scattered)
                    const angle = Math.random() * Math.PI * 2;
                    const velocity = Math.random() * 55 + 15; // travel distance
                    const dx = Math.cos(angle) * velocity;
                    const dy = Math.sin(angle) * velocity;

                    emitter.appendChild(particle);

                    // Trigger animation
                    requestAnimationFrame(() => {
                        setTimeout(() => {
                            particle.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(0)`;
                            particle.style.opacity = '0';
                        }, 50);
                    });
                }
            }
        }, 4900); // Trigger right as logo is fully revealed and bar is 100%

        // Step 4: Fade out preloader and enable scrolling
        setTimeout(() => {
            preloader.style.opacity = '0';
            preloader.style.pointerEvents = 'none';
            body.style.overflow = '';
        }, 5800);

        // Step 5: Completely remove preloader from DOM
        setTimeout(() => {
            preloader.remove();
        }, 6800);
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
            const options = formService.options;
            if (isEnglish) {
                options[0].text = "Select Service";
                options[1].text = "Fuels / Hydrocarbons";
                options[2].text = "Oils / Food Grade Liquids";
                options[3].text = "Chemicals / Dangerous HazMat";
                options[4].text = "ISOTanks / General Flatbed";
            } else {
                options[0].text = "Seleccione Servicio";
                options[1].text = "Combustibles / Hidrocarburos";
                options[2].text = "Aceites / Glucosa Grado Alimenticio";
                options[3].text = "Químicos / Ácidos Corrosivos (HazMat)";
                options[4].text = "Isocontenedores / Plataformas";
            }
        }
    }

    // Language switch function
    window.toggleLanguage = function() {
        body.classList.toggle('lang-en');
        if (toggle) toggle.classList.toggle('lang-en-active');
        if (toggleMobile) toggleMobile.classList.toggle('lang-en-active');

        const isEnglish = body.classList.contains('lang-en');

        if(isEnglish) {
            if (esLab) esLab.classList.replace('text-white', 'text-white/50');
            if (enLab) enLab.classList.replace('text-white/50', 'text-white');
            if (esLabMobile) esLabMobile.classList.replace('text-white', 'text-white/50');
            if (enLabMobile) enLabMobile.classList.replace('text-white/50', 'text-white');
            if (wa) wa.href = "https://wa.me/522717128316?text=Hello%20Acarrealiquidos.%20Quote%20request.";
            
            // Adjust input placeholders
            if (document.getElementById('form-name')) document.getElementById('form-name').placeholder = "Your Full Name";
            if (document.getElementById('form-company')) document.getElementById('form-company').placeholder = "Company Name";
            if (document.getElementById('form-email')) document.getElementById('form-email').placeholder = "Email Address";
            if (document.getElementById('form-phone')) document.getElementById('form-phone').placeholder = "Contact Phone";
            if (document.getElementById('form-msg')) document.getElementById('form-msg').placeholder = "Tell us about your cargo requirements, origin, and destination...";
            if (document.getElementById('ai-chat-input')) document.getElementById('ai-chat-input').placeholder = "Type message...";
            
            const waFloat = document.getElementById('wa-float-btn');
            if (waFloat) waFloat.href = "https://wa.me/522717128316?text=Hello%20Acarrealiquidos.%20Quote%20request.";
            
            // Translate dropdowns
            translateSelectOptions(true);
        } else {
            if (esLab) esLab.classList.replace('text-white/50', 'text-white');
            if (enLab) enLab.classList.replace('text-white', 'text-white/50');
            if (esLabMobile) esLabMobile.classList.replace('text-white/50', 'text-white');
            if (enLabMobile) enLabMobile.classList.replace('text-white', 'text-white/50');
            if (wa) wa.href = "https://wa.me/522717128316?text=Hola%20Acarrealiquidos.%20Solicito%20cotizacion.";
            
            // Adjust input placeholders
            if (document.getElementById('form-name')) document.getElementById('form-name').placeholder = "Nombre y Apellido";
            if (document.getElementById('form-company')) document.getElementById('form-company').placeholder = "Empresa";
            if (document.getElementById('form-email')) document.getElementById('form-email').placeholder = "Correo Electrónico";
            if (document.getElementById('form-phone')) document.getElementById('form-phone').placeholder = "Teléfono de contacto";
            if (document.getElementById('form-msg')) document.getElementById('form-msg').placeholder = "Escriba detalles de la carga, origen, destino y fechas requeridas...";
            if (document.getElementById('ai-chat-input')) document.getElementById('ai-chat-input').placeholder = "Escribe tu mensaje...";
            
            const waFloat = document.getElementById('wa-float-btn');
            if (waFloat) waFloat.href = "https://wa.me/522717128316?text=Hola%20Acarrealiquidos.%20Solicito%20cotizacion.";
            
            // Translate dropdowns
            translateSelectOptions(false);
        }
    }

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

    // Intelligent responses
    function generateAIResponse(userInput) {
        const isEnglish = body.classList.contains('lang-en');
        const cleanInput = userInput.toLowerCase();
        let reply = '';

        if (isEnglish) {
            if (cleanInput.includes('certif') || cleanInput.includes('sct') || cleanInput.includes('iso')) {
                reply = "Acarrealíquidos is fully certified by the <strong>SCT</strong> (Secretaría de Infraestructura, Comunicaciones y Transportes) for HazMat transport (Class 3, 8, and 9). We operate under <strong>ISO 9001:2015</strong> quality guidelines and follow strict safety procedures.";
            } else if (cleanInput.includes('quote') || cleanInput.includes('cost') || cleanInput.includes('price') || cleanInput.includes('cotiz')) {
                reply = "To receive a formal technical quote, please submit the quote request form at the bottom of this page. Our logistics dispatch team will contact you within the next 2 hours. You can also click the WhatsApp button in the footer to chat directly with us!";
            } else if (cleanInput.includes('fleet') || cleanInput.includes('truck') || cleanInput.includes('capacity') || cleanInput.includes('tank')) {
                reply = "Our fleet contains carbon steel, stainless steel (316L), and insulated food-grade tankers. Capacities range from 25,000 to 45,000 Liters, with modern double-trailer (full) and single configurations monitored 24/7 via GPS.";
            } else if (cleanInput.includes('time') || cleanInput.includes('speed') || cleanInput.includes('urgent')) {
                reply = "For standard routes (e.g., Veracruz to Central Mexico), transit time is 12 to 24 hours. All deliveries feature double drivers (on request) and real-time tracking checkpoints for safety and efficiency.";
            } else if (cleanInput.includes('maintenance') || cleanInput.includes('workshop') || cleanInput.includes('safety') || cleanInput.includes('accident')) {
                reply = "Our operations are backed by strict preventive maintenance in our own workshops and full broad-coverage insurance policies (including environmental coverage). Our operators go through rigorous checks, maintaining a zero accident record.";
            } else {
                reply = "Thank you for contacting Acarrealíquidos dispatcher. We specialize in specialized logistics for hydrocarbons, chemicals, and food-grade liquids. How can I help you today? You can ask about our fleet, SCT certifications, or transit times.";
            }
        } else {
            // Spanish
            if (cleanInput.includes('certif') || cleanInput.includes('sct') || cleanInput.includes('iso') || cleanInput.includes('permis')) {
                reply = "Acarrealíquidos cuenta con todas las certificaciones de la <strong>SCT</strong> (Secretaría de Infraestructura, Comunicaciones y Transportes) para el transporte de materiales peligrosos (HazMat clases 3, 8 y 9). Operamos bajo directrices de calidad <strong>ISO 9001:2015</strong>.";
            } else if (cleanInput.includes('cotiz') || cleanInput.includes('costo') || cleanInput.includes('precio') || cleanInput.includes('presupuesto')) {
                reply = "Para recibir una cotización técnica formal, le sugerimos completar el formulario de solicitud al final de esta página. Nuestro equipo de tráfico le responderá en menos de 2 horas con una propuesta formal. También puede contactar directamente a ventas por WhatsApp usando el botón en el footer.";
            } else if (cleanInput.includes('flota') || cleanInput.includes('tanque') || cleanInput.includes('capacidad') || cleanInput.includes('camion')) {
                reply = "Contamos con autotanques de acero inoxidable (316L), grado alimenticio térmico y acero al carbón. Capacidades desde 25,000 hasta 45,000 Litros, configurados en sencillo y full, monitoreados 24/7 mediante satélite.";
            } else if (cleanInput.includes('tiempo') || cleanInput.includes('entrega') || cleanInput.includes('urgente') || cleanInput.includes('ruta')) {
                reply = "Para rutas recurrentes (ej. Veracruz a la Ciudad de México y zona del Bajío), el tiempo estimado es de 12 a 24 horas. Todos los servicios incluyen operador certificado y reporte de posición en tiempo real.";
            } else if (cleanInput.includes('mantenimiento') || cleanInput.includes('taller') || cleanInput.includes('seguridad') || cleanInput.includes('siniestr')) {
                reply = "Nuestras operaciones se respaldan en un riguroso programa de mantenimiento preventivo en talleres propios y pólizas de cobertura amplia con responsabilidad ecológica. La rigurosa selección de operadores nos permite mantener un récord de siniestralidad casi nulo.";
            } else {
                reply = "Gracias por escribir al despacho automatizado de Acarrealíquidos. Nos especializamos en la logística segura de hidrocarburos, aceites y químicos. ¿En qué puedo ayudarle? Puede preguntar por nuestra flota, permisos SCT o tiempos de entrega.";
            }
        }

        appendAIMessage(reply);
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

            // Simulate server request
            setTimeout(() => {
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
            }, 1800);
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

    initStatsCounter();
});
