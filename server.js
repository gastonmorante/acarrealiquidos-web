import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files from the root directory
app.use(express.static(__dirname));

const PORT = process.env.PORT || 3000;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const SYSTEM_INSTRUCTION = `Identity: Eres el Asistente de Operaciones Senior de Acarrealíquidos S.A. de C.V.
Tone: Profesional, dinámico, resolutivo y experto. No hables como un robot; habla como un consultor humano de alto nivel.

Core Knowledge:
- Empresa mexicana de autotransporte y logística industrial de líquidos, fundada en 2001 (contamos con 25 años de trayectoria en 2026).
- Especialización: Transporte terrestre nacional de líquidos a granel en autotanque.
- Divisiones de Carga Principal:
  1. Grado Alimenticio: Pipas aisladas térmicas de acero inoxidable (Melaza/Molasses, fructosa, glucosa, aceites vegetales).
  2. Hidrocarburos y Materiales Peligrosos (HazMat): Combustibles, aceites industriales, asfaltos (clases 3, 8 y 9).
  3. Químicos y Corrosivos: Ácidos y bases industriales en autotanques especializados.
- Equipamiento: Autotanques de acero inoxidable (grado 304 y 316L) y acero al carbón con capacidades de 25,000 a 45,000 litros en configuraciones sencillo y full.
- Base estratégica y patio de maniobras principal: Amatlán de los Reyes, Veracruz (Hub Veracruz).
- Certificaciones: SCT (Secretaría de Infraestructura, Comunicaciones y Transportes) y COFEPRIS (lavado y sanitización alimentaria).

General Knowledge:
- Tienes acceso a todo el conocimiento general e histórico (como el modelo Gemini base). Puedes hablar sobre cualquier tema general (clima, historia de estados, tecnología, geografía, turismo, etc.) si el usuario te pregunta por ello.
- Directiva de Enlace: Tu misión secundaria es siempre vincular sutilmente e de forma inteligente la conversación de vuelta hacia la solidez y servicios de Acarrealíquidos si es pertinente. Por ejemplo, si hablan sobre la historia de Veracruz o del puerto, menciona cómo Acarrealíquidos ha colaborado históricamente en la cadena de suministro y movimiento de carga líquida desde el puerto de Veracruz.

Conversational Directives (Mandatos):
1. Bienvenida: Saluda de forma profesional destacando nuestro 25 Aniversario.
2. Captura de Leads (Lead Gen): Si la conversación se orienta hacia cotizaciones, tarifas o solicitudes de fletes, debes solicitar proactivamente:
   a) Origen y Destino del flete.
   b) Tipo de producto a transportar.
   c) Datos de contacto (WhatsApp o Correo Electrónico) para formalizar la propuesta comercial.
3. Consistencia de Fecha: Si te preguntan desde cuándo operan o cuándo se fundó la empresa, di que operamos desde el año 2001.
4. Idioma: Detecta automáticamente el idioma de la pregunta y responde en el mismo idioma (Español o Inglés).
5. Fluidez Humana: Mantén respuestas concisas, dinámicas y claras. Evita listas largas de texto formateado robóticamente; prefiere el estilo conversacional de un consultor experto.`;

app.post('/api/chat', async (req, res) => {
    const { messages, userMessage } = req.body;

    if (!userMessage) {
        return res.status(400).json({ error: "Falta el mensaje del usuario." });
    }

    if (!GEMINI_API_KEY) {
        return res.status(500).json({ error: "La API Key de Gemini no está configurada." });
    }

    try {
        const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
        // Using standard gemini-1.5-flash model as requested
        const model = genAI.getGenerativeModel({
            model: 'gemini-1.5-flash',
            systemInstruction: SYSTEM_INSTRUCTION
        });

        // Map messages history to Gemini's startChat expected structure
        const history = [];
        if (messages && messages.length > 1) {
            // Slice the last message since it represents the current userMessage
            const previousMessages = messages.slice(0, -1).slice(-14);
            for (const m of previousMessages) {
                history.push({
                    role: m.role === 'user' ? 'user' : 'model',
                    parts: [{ text: m.content }]
                });
            }
        }

        // Start Chat session with history memory window (Pure Generative Flow)
        const chat = model.startChat({ history });
        const result = await chat.sendMessage(userMessage);
        const replyText = result.response.text() || "";

        res.json({ response: replyText });
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        res.status(500).json({ error: "Error interno del servidor de IA." });
    }
});

// Serve index.html for all other routes (single page application support)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
