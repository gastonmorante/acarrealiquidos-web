export type Language = 'es' | 'en';

type DeepString<T> = { [K in keyof T]: T[K] extends readonly (infer U)[] ? readonly string[] : T[K] extends object ? DeepString<T[K]> : string; };

export type Translations = DeepString<typeof rawTranslations.es>;

const rawTranslations = {
  "es": {
    "nav": {
      "home": "Inicio",
      "certifications": "Certificaciones",
      "services": "Servicios",
      "fleet": "Equipo",
      "compliance": "Cumplimiento",
      "news": "Noticias",
      "contact": "Contacto",
      "callCentral": "Llamar a Central",
      "requestQuote": "Cotizar Servicio"
    },
    "hero": {
      "headlinePre": "Solución confiable y máxima seguridad en el transporte para el",
      "headlineHighlight": "sector industrial",
      "headlinePost": ".",
      "locationSub": "Operando desde",
      "locationCity": "Amatlán de los Reyes, Veracruz",
      "ctaQuote": "Solicitar Cotización Inmediata",
      "ctaFleet": "Ver Equipo Especializado",
      "telemetryTitle": "Torre Amatlán · Despacho 24/7",
      "telemetryRoute": "Ruta: Veracruz → Bajío",
      "telemetryCert": "Sanitizado Kosher Activo",
      "telemetryCapacity": "Capacidad: 45,000 L"
    },
    "kpis": {
      "yearsLabel": "Años de Trayectoria",
      "yearsSub": "Desde 1981 en el autotransporte federal",
      "trackingLabel": "Supervisión Satelital",
      "trackingSub": "Telemetría activa 24/7 en tiempo real",
      "foodGradeLabel": "Flota Grado Alimenticio",
      "foodGradeSub": "Autotanques de acero inoxidable T304/T316",
      "capacityLabel": "Capacidad por Unidad",
      "capacitySub": "Configuraciones sencillas y fulles"
    },
    "trust": {
      "badge": "ACREDITACIONES Y AUDITORÍAS",
      "title": "Respaldo Institucional y Certificaciones",
      "subtitle": "Garantizamos cumplimiento total ante organismos reguladores y normas oficiales mexicanas.",
      "kosherBadge": "MÁXIMA INOCUIDAD AGROALIMENTARIA",
      "kosherTitle": "Garantía Total",
      "kosherHighlight": "Kosher Orthodox Union (OU)",
      "kosherDesc": "Nuestra flota de autotanques térmicos de acero inoxidable cuenta con supervisión rabínica permanente y protocolo de sanitización grado alimenticio, erradicando cualquier riesgo de contaminación cruzada para aceites vegetales, jarabes, melazas y alcohol potable.",
      "guarantees": [
        "Autotanques dedicados de acero inoxidable",
        "Protocolo de vapor presurizado certificado",
        "Cero riesgo de contaminación cruzada",
        "Emisión de constancia sanitaria por viaje"
      ],
      "kosherCta": "Solicitar Protocolo Kosher",
      "kosherCardTitle": "Orthodox Union",
      "kosherCardSub": "Sello Certificado OU",
      "kosherCardPill": "Inocuidad 95% de Flota",
      "cards": {
        "sict": {
          "tag": "NORMATIVA FEDERAL",
          "title": "Permiso Federal SICT",
          "desc": "Unidades y operadores avalados bajo los más rigurosos estándares de la Secretaría de Infraestructura, Comunicaciones y Transportes.",
          "validation": "NOM-012 · NOM-068 · NOM-035",
          "cta": "Validar para tu empresa"
        },
        "food": {
          "tag": "SALUBRIDAD SANITARIA",
          "title": "Protocolo Grado Alimenticio",
          "desc": "Lavado sanitario avalado bajo estándares Cofepris con registro microbiológico previo a cada carga.",
          "validation": "Cero Contaminación Cruzada",
          "cta": "Validar para tu empresa"
        },
        "hazardous": {
          "tag": "MATERIALES Y RESIDUOS",
          "title": "Materiales Peligrosos",
          "desc": "Transporte seguro de alcoholes, químicos y solventes con operadores certificados y póliza de cobertura amplia.",
          "validation": "Licencia Federal E Especializada",
          "cta": "Validar para tu empresa"
        },
        "multimodal": {
          "tag": "LOGÍSTICA PESADA",
          "title": "Plataformas Multimodales",
          "desc": "Plataformas de 40 pies para contenedores marítimos y carga seca con amarre certificado de alta resistencia.",
          "validation": "Conexión Puerto Veracruz",
          "cta": "Validar para tu empresa"
        }
      }
    },
    "about": {
      "badge": "CULTURA OPERATIVA Y RIGOR NORMATIVO",
      "title": "Gobernanza y Cumplimiento Normativo",
      "desc1": "En Acarrealíquidos, la seguridad no es una variable negociable: es el cimiento de cada viaje. Nuestras operaciones se apegan puntualmente a las Normas Oficiales Mexicanas, garantizando el blindaje jurídico y patrimonial de cada cliente.",
      "desc2": "Desde la inspección previa al viaje hasta la telemetría en tiempo real y el descanso programado de nuestros operadores, minimizamos riesgos y aseguramos la continuidad de su cadena de suministro.",
      "quoteTitle": "Filosofía Corporativa",
      "quoteBody": "La excelencia en el transporte se mide en toneladas entregadas en tiempo y forma, y en la certeza total de que su producto viaja protegido bajo los más altos estándares de la industria.",
      "quoteAuthor": "Dirección General de Operaciones"
    },
    "specialties": {
      "badge": "CAPACIDAD INTEGRAL",
      "title": "Especialidades de Transporte",
      "subtitle": "Equipamiento de punta para líquidos grado alimenticio, materiales peligrosos y carga en plataforma.",
      "items": {
        "food": {
          "title": "Líquidos Grado Alimenticio",
          "desc": "Aceites vegetales, glucosa, jarabes de maíz, melazas, jugos concentrados y alcohol potable en autotanques térmicos con certificación Kosher OU.",
          "tag": "Acero Inoxidable T304 / T316"
        },
        "hazardous": {
          "title": "Alcoholes, Químicos y Solventes",
          "desc": "Transporte seguro bajo estricta normativa de materiales peligrosos, con operadores capacitados en manejo defensivo y control de contingencias.",
          "tag": "Materiales Peligrosos"
        },
        "multimodal": {
          "title": "Plataformas de 40 Pies",
          "desc": "Movilización de contenedores marítimos, maquinaria y carga sobredimensionada con enlace directo al Puerto de Veracruz y principales corredores industriales.",
          "tag": "Carga General y Contenedores"
        },
        "dedicated": {
          "title": "Esquemas de Flota Dedicada",
          "desc": "Asignación exclusiva de tractocamiones y autotanques para clientes con altos volúmenes y rutas recurrentes, garantizando disponibilidad inmediata.",
          "tag": "Logística a la Medida"
        }
      }
    },
    "fleet": {
      "badge": "PARQUE VEHICULAR MODERNO",
      "title": "Flota e Ingeniería de Transporte",
      "subtitle": "Unidades de última generación con mantenimiento preventivo riguroso y monitoreo en tiempo real.",
      "tractor": {
        "type": "Tractocamión Kenworth T680",
        "model": "Motor Cummins X15 · Transmisión Automatizada",
        "specs": [
          "Frenos antibloqueo ABS / EBS",
          "Control de estabilidad ESP",
          "Cámaras perimetrales y GPS dual",
          "Mantenimiento certificado cada 15,000 km"
        ]
      },
      "tanker": {
        "type": "Autotanque Térmico de Acero Inoxidable",
        "model": "Capacidad 25,000 a 45,000 L · Grado Alimenticio / Químico",
        "specs": [
          "Aislamiento térmico de poliuretano",
          "Válvulas sanitarias de fondo de 3 pulgadas",
          "Supervisión Kosher OU",
          "Lavado con vapor a presión y sanitizado"
        ]
      },
      "flatbed": {
        "type": "Plataforma de 40 Pies Multimodal",
        "model": "Estructura de Alta Resistencia · Seguro Twist-Lock",
        "specs": [
          "Capacidad hasta 32 toneladas",
          "Trincas y fajas de sujeción certificadas",
          "Suspensión neumática para protección de carga",
          "Inspección físico-mecánica NOM-068"
        ]
      }
    },
    "infrastructure": {
      "badge": "CAPILARIDAD ESTRATÉGICA",
      "title": "Infraestructura y Rutas de Cobertura",
      "subtitle": "Ubicación neurálgica en el corredor Córdoba-Orizaba con acceso inmediato a las principales autopistas del país.",
      "cards": {
        "card1": {
          "title": "Base Operativa Central en Amatlán",
          "desc": "Patio de maniobras de alta capacidad, taller mecánico propio y bahías de lavado sanitario en el Km. 2 Carretera Córdoba a Potrero."
        },
        "card2": {
          "title": "Torre de Control Satelital 24/7/365",
          "desc": "Monitoreo ininterrumpido con redundancia de señal celular y satelital, geocercas activas y botón de pánico en cabina."
        },
        "card3": {
          "title": "Corredores Logísticos Nacionales",
          "desc": "Rutas consolidadas hacia el Altiplano Central, Bajío, Occidente, Norte y enlace ágil al Puerto de Veracruz."
        },
        "card4": {
          "title": "Mantenimiento Preventivo Certificado",
          "desc": "Programa estricto de revisión físico-mecánica conforme a la NOM-068, garantizando 0 fallas imprevistas en trayecto."
        },
        "card5": {
          "title": "Operadores Calificados y Certificados",
          "desc": "Conductores con licencia federal SICT vigente, exámenes toxicológicos periódicos y capacitación continua en manejo defensivo."
        }
      }
    },
    "testimonials": {
      "badge": "CASOS DE ÉXITO",
      "title": "La Confianza de Líderes Industriales",
      "subtitle": "Empresas agroindustriales, químicas y alimentarias respaldan nuestro compromiso con la puntualidad y la inocuidad.",
      "stat1Label": "Viajes anuales completados",
      "stat2Label": "Índice de entrega en tiempo",
      "stat3Label": "Cero mermas por contaminación"
    },
    "blog": {
      "badge": "ACTUALIDAD SECTORIAL",
      "title": "Noticias y Novedades del Autotransporte",
      "subtitle": "Información relevante del transporte de carga en México sincronizada con Revista Transporte y Turismo (TyT).",
      "liveBadge": "EN VIVO TYT",
      "readMore": "Leer Artículo Completo",
      "sourceNotice": "Fuente oficial: Revista Transporte y Turismo (TyT)"
    },
    "quote": {
      "badge": "ATENCIÓN INMEDIATA",
      "title": "Solicite una Cotización Técnica Formal",
      "subtitle": "Nuestros asesores logísticos responderán en menos de 30 minutos con especificaciones y tarifas claras.",
      "calcTitle": "Calculadora de Parámetros de Carga",
      "calcSub": "Ajuste el volumen y las especificaciones requeridas para su flete.",
      "cargoType": "Tipo de Producto / Carga",
      "volumeLabel": "Volumen Estimado (Litros o Toneladas)",
      "originLabel": "Origen del Servicio",
      "destinationLabel": "Destino de Entrega",
      "originPlaceholder": "Ej. Córdoba, Ver. / Amatlán",
      "destPlaceholder": "Ej. Ciudad de México / Guadalajara",
      "nameLabel": "Nombre y Apellido",
      "emailLabel": "Correo Electrónico Corporativo",
      "phoneLabel": "Teléfono / WhatsApp de Contacto",
      "companyLabel": "Empresa / Razón Social",
      "submitBtn": "Enviar Requerimiento para Cotización",
      "sending": "Procesando cotización...",
      "successMsg": "¡Cotización recibida con éxito! Un asesor se comunicará a la brevedad.",
      "instantCallNotice": "¿Urgencia operativa? Comuníquese directamente a nuestra Central:",
      "options": {
        "foodGrade": "Líquidos Grado Alimenticio (Kosher OU)",
        "chemical": "Alcoholes, Químicos y Solventes (Mat-Pel)",
        "flatbed": "Carga en Plataforma 40 Pies / Contenedores"
      }
    },
    "footer": {
      "tagline": "Transporte en Autotanques",
      "description": "Solución confiable y máxima seguridad en el transporte para el sector industrial. Operando desde Amatlán de los Reyes, Veracruz, con cobertura estratégica en territorio nacional.",
      "regulatedSict": "SICT REGULADO",
      "kosherOu": "KOSHER OU",
      "cofepris": "COFEPRIS",
      "navTitle": "Navegación",
      "baseTitle": "Base Operativa Central",
      "baseAddress": "Km. 2 Carretera Córdoba a Potrero, Amatlán de los Reyes, Veracruz, México",
      "immediateTitle": "Atención Inmediata",
      "immediateDesc": "Canal directo con nuestra torre de control para cotizaciones y requerimientos de transporte.",
      "whatsappBtn": "WhatsApp Torre de Control",
      "languageSelect": "Seleccionar Idioma / Language:",
      "privacy": "Aviso de Privacidad",
      "terms": "Términos y Condiciones",
      "allRights": "Todos los derechos reservados. Acarrealíquidos S.A. de C.V."
    }
  },
  "en": {
    "nav": {
      "home": "Home",
      "certifications": "Certifications",
      "services": "Services",
      "fleet": "Fleet",
      "compliance": "Compliance",
      "news": "News",
      "contact": "Contact",
      "callCentral": "Call Central",
      "requestQuote": "Request Quote"
    },
    "hero": {
      "headlinePre": "Reliable solutions and maximum transport safety for the",
      "headlineHighlight": "industrial sector",
      "headlinePost": ".",
      "locationSub": "Operating from",
      "locationCity": "Amatlán de los Reyes, Veracruz, Mexico",
      "ctaQuote": "Request Instant Quote",
      "ctaFleet": "View Tanker Fleet",
      "telemetryTitle": "Amatlán Tower · 24/7 Dispatch",
      "telemetryRoute": "Route: Veracruz → Bajío",
      "telemetryCert": "Kosher Sanitized Active",
      "telemetryCapacity": "Capacity: 45,000 L"
    },
    "kpis": {
      "yearsLabel": "Years of Experience",
      "yearsSub": "Delivering industrial freight since 1981",
      "trackingLabel": "Satellite Tracking",
      "trackingSub": "24/7 active real-time telemetry",
      "foodGradeLabel": "Food-Grade Fleet",
      "foodGradeSub": "T304 / T316 stainless steel insulated tankers",
      "capacityLabel": "Capacity per Unit",
      "capacitySub": "Single and double trailer combinations"
    },
    "trust": {
      "badge": "OFFICIAL ACCREDITATIONS & AUDITS",
      "title": "Institutional Backing & Certifications",
      "subtitle": "We guarantee 100% compliance with federal regulatory agencies and international standards.",
      "kosherBadge": "HIGHEST AGRO-FOOD SANITATION",
      "kosherTitle": "Total Warranty",
      "kosherHighlight": "Kosher Orthodox Union (OU)",
      "kosherDesc": "Our stainless steel insulated tanker fleet operates with permanent rabbinical supervision and certified food-grade sanitization protocols, completely eliminating cross-contamination risks for vegetable oils, syrups, molasses, and potable alcohol.",
      "guarantees": [
        "Dedicated stainless steel insulated tankers",
        "Certified pressurized steam wash protocol",
        "Zero cross-contamination risk",
        "Per-trip official sanitary certificate"
      ],
      "kosherCta": "Request Kosher Protocol",
      "kosherCardTitle": "Orthodox Union",
      "kosherCardSub": "OU Certified Seal",
      "kosherCardPill": "Food Safety 95% of Fleet",
      "cards": {
        "sict": {
          "tag": "FEDERAL REGULATION",
          "title": "SICT Federal License",
          "desc": "Tractors and drivers certified under strict safety and mechanical standards issued by the Mexican Ministry of Infrastructure.",
          "validation": "NOM-012 · NOM-068 · NOM-035",
          "cta": "Verify for your enterprise"
        },
        "food": {
          "tag": "HEALTH & SANITATION",
          "title": "Food-Grade Protocol",
          "desc": "Cofepris-approved sanitary washing process with microbiological testing verification before every single loading.",
          "validation": "Zero Cross-Contamination",
          "cta": "Verify for your enterprise"
        },
        "hazardous": {
          "tag": "HAZARDOUS MATERIALS",
          "title": "Chemicals & Solvents",
          "desc": "Safe transport of alcohols, chemicals, and solvents with HazMat-certified drivers and comprehensive liability insurance.",
          "validation": "Specialized Class E Federal License",
          "cta": "Verify for your enterprise"
        },
        "multimodal": {
          "tag": "HEAVY HAUL",
          "title": "Multimodal Flatbeds",
          "desc": "40-foot flatbeds for maritime intermodal containers and dry freight with certified high-tensile securing systems.",
          "validation": "Port of Veracruz Connection",
          "cta": "Verify for your enterprise"
        }
      }
    },
    "about": {
      "badge": "OPERATIONAL EXCELLENCE & REGULATORY RIGOR",
      "title": "Corporate Governance & Compliance",
      "desc1": "At Acarrealíquidos, safety is non-negotiable: it is the core foundation of every single trip. Our operations strictly comply with Mexican Federal Transportation Standards, protecting our clients' corporate reputation and assets.",
      "desc2": "From pre-trip mechanical checkups to 24/7 GPS satellite telemetry and mandatory rest schedules for operators, we mitigate operational risks and ensure seamless supply chain continuity.",
      "quoteTitle": "Corporate Philosophy",
      "quoteBody": "Excellence in freight transportation is measured in tons delivered punctually and safely, with the absolute peace of mind that your cargo travels protected under the industry's highest standards.",
      "quoteAuthor": "Director of Operations"
    },
    "specialties": {
      "badge": "COMPREHENSIVE FLEET CAPABILITY",
      "title": "Transportation Specialties",
      "subtitle": "Cutting-edge equipment engineered for food-grade liquids, hazardous chemicals, and flatbed freight.",
      "items": {
        "food": {
          "title": "Food-Grade Bulk Liquids",
          "desc": "Vegetable oils, glucose, corn syrup, molasses, fruit juice concentrates, and potable alcohol in insulated tankers with Kosher OU certification.",
          "tag": "Stainless Steel T304 / T316"
        },
        "hazardous": {
          "title": "Alcohols, Chemicals & Solvents",
          "desc": "Safe transportation strictly adhering to HazMat hazardous material regulations, with drivers trained in defensive driving and chemical spills control.",
          "tag": "Hazardous Materials (HazMat)"
        },
        "multimodal": {
          "title": "40-Foot Multimodal Flatbeds",
          "desc": "Transport of ocean shipping containers, heavy machinery, and dry freight connecting the Port of Veracruz directly to central Mexico's industrial hubs.",
          "tag": "General Freight & Containers"
        },
        "dedicated": {
          "title": "Dedicated Fleet Programs",
          "desc": "Exclusive assignment of tractors and tankers for corporate clients with high-volume recurring shipments, ensuring on-demand capacity.",
          "tag": "Tailored Logistics"
        }
      }
    },
    "fleet": {
      "badge": "MODERN INDUSTRIAL FLEET",
      "title": "Fleet Engineering & Technology",
      "subtitle": "Next-generation tractors with rigorous preventive maintenance programs and real-time telemetry.",
      "tractor": {
        "type": "Kenworth T680 Heavy-Duty Tractor",
        "model": "Cummins X15 Engine · Automated Transmission",
        "specs": [
          "ABS / EBS anti-lock braking system",
          "ESP electronic stability program",
          "Perimeter safety cameras & dual GPS",
          "Certified scheduled maintenance every 15,000 km"
        ]
      },
      "tanker": {
        "type": "Insulated Stainless Steel Tanker",
        "model": "Capacity: 25,000 to 45,000 L · Food & Chemical Grade",
        "specs": [
          "Polyurethane thermal insulation jacket",
          "3-inch sanitary bottom discharge valves",
          "Kosher OU rabbinical supervision",
          "Pressurized steam wash and sanitization"
        ]
      },
      "flatbed": {
        "type": "40-Foot Multimodal Flatbed",
        "model": "High-Tensile Steel Frame · Twist-Lock System",
        "specs": [
          "Payload capacity up to 32 metric tons",
          "Certified heavy-duty cargo tie-downs",
          "Air suspension for sensitive cargo protection",
          "Full NOM-068 mechanical safety inspection"
        ]
      }
    },
    "infrastructure": {
      "badge": "STRATEGIC COVERAGE",
      "title": "Infrastructure & Operating Corridors",
      "subtitle": "Strategic logistics hub in the Córdoba-Orizaba corridor with instant highway access to Mexico's industrial heartland.",
      "cards": {
        "card1": {
          "title": "Central Logistics Hub in Amatlán",
          "desc": "Heavy-duty truck yard, on-site maintenance shop, and certified sanitary tanker wash bays located at Km 2 Córdoba-Potrero Highway."
        },
        "card2": {
          "title": "24/7/365 Satellite Control Tower",
          "desc": "Uninterrupted vehicle tracking with redundant cellular and satellite telemetry, active geofencing, and cabin panic button alerts."
        },
        "card3": {
          "title": "National Strategic Corridors",
          "desc": "Established high-frequency corridors to Central Mexico, Bajío, Western Mexico, Northern borders, and Port of Veracruz."
        },
        "card4": {
          "title": "Certified Preventive Maintenance",
          "desc": "Strict mechanical maintenance program meeting NOM-068 standards, guaranteeing zero unexpected breakdowns in transit."
        },
        "card5": {
          "title": "Certified Professional Drivers",
          "desc": "Operators holding valid SICT federal licenses, subject to routine drug testing and continuous defensive driving safety programs."
        }
      }
    },
    "testimonials": {
      "badge": "PROVEN TRACK RECORD",
      "title": "Trusted by Mexico's Industry Leaders",
      "subtitle": "Agribusiness, food & beverage, and chemical manufacturers endorse our dedication to punctuality and safety.",
      "stat1Label": "Annual freight trips completed",
      "stat2Label": "On-time delivery performance",
      "stat3Label": "Zero contamination cargo losses"
    },
    "blog": {
      "badge": "INDUSTRY INSIGHTS",
      "title": "Freight Transport News & Updates",
      "subtitle": "Timely news and regulatory insights from Mexico's transportation industry synchronized with Revista TyT.",
      "liveBadge": "LIVE TYT NEWS",
      "readMore": "Read Full Article",
      "sourceNotice": "Official source: Revista Transporte y Turismo (TyT)"
    },
    "quote": {
      "badge": "EXPEDITE SERVICE",
      "title": "Request a Formal Technical Freight Quote",
      "subtitle": "Our logistics dispatch engineers will respond in less than 30 minutes with clear rates and tanker availability.",
      "calcTitle": "Cargo Parameter Calculator",
      "calcSub": "Select your freight requirements and cargo volume for a precise quote.",
      "cargoType": "Cargo / Product Classification",
      "volumeLabel": "Estimated Volume (Liters or Tons)",
      "originLabel": "Origin Location",
      "destinationLabel": "Destination Location",
      "originPlaceholder": "e.g. Córdoba, Veracruz / Amatlán",
      "destPlaceholder": "e.g. Mexico City / Guadalajara / Monterrey",
      "nameLabel": "Full Name",
      "emailLabel": "Corporate Email Address",
      "phoneLabel": "Phone / WhatsApp Number",
      "companyLabel": "Company / Corporate Name",
      "submitBtn": "Submit Freight Quote Request",
      "sending": "Submitting request...",
      "successMsg": "Quote request successfully submitted! An advisor will reach out shortly.",
      "instantCallNotice": "Immediate shipment dispatch? Contact our central operations:",
      "options": {
        "foodGrade": "Food-Grade Bulk Liquids (Kosher OU)",
        "chemical": "Alcohols, Chemicals & Solvents (HazMat)",
        "flatbed": "40-Foot Flatbed / Shipping Containers"
      }
    },
    "footer": {
      "tagline": "Industrial Tanker Transport",
      "description": "Reliable solutions and maximum safety in bulk transportation for the industrial sector. Operating from Amatlán de los Reyes, Veracruz, with nationwide coverage.",
      "regulatedSict": "SICT REGULATED",
      "kosherOu": "KOSHER OU",
      "cofepris": "COFEPRIS",
      "navTitle": "Navigation",
      "baseTitle": "Central Operations Base",
      "baseAddress": "Km. 2 Córdoba to Potrero Highway, Amatlán de los Reyes, Veracruz, Mexico",
      "immediateTitle": "Immediate Assistance",
      "immediateDesc": "Direct communication with our central control tower for freight quotes and tanker dispatch.",
      "whatsappBtn": "WhatsApp Control Tower",
      "languageSelect": "Seleccionar Idioma / Language:",
      "privacy": "Privacy Policy",
      "terms": "Terms & Conditions",
      "allRights": "All rights reserved. Acarrealíquidos S.A. de C.V."
    }
  }
} ;

export const translations: Record<Language, Translations> = rawTranslations;
