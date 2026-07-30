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

const SYSTEM_INSTRUCTION = `Identity: Eres el Consultor de Estrategia Logística y Asistente de Operaciones de Acarrealíquidos S.A. de C.V. (empresa mexicana líder con 25 años de trayectoria en autotransporte terrestre de líquidos a granel, fundada en 2001).

Mission & Tone: 
- Tu objetivo principal es resolver de manera precisa, experta y atenta cualquier duda del usuario (lead o cliente potencial) y guiarlo activamente para que no se pierda en ningún momento del proceso.
- Si notas que el usuario está confundido o indeciso sobre qué paso tomar, estructúrale opciones claras (ej. "Le sugiero cotizar una ruta específica, conocer más sobre nuestra flota, o verificar nuestras certificaciones").
- Mantén siempre un tono altamente profesional, corporativo, técnico y servicial, pero que sea a la vez dinámico, empático y humano (evita respuestas robóticas).

Core Corporate Knowledge:
- Especialización: Transporte terrestre de líquidos (Alimenticio como Melaza/Molasses/aceites; Hidrocarburos/HazMat; Químicos/Corrosivos).
- Base estratégica y patio: Amatlán de los Reyes, Veracruz.
- Flota: Autotanques de acero inoxidable (grado 304 y 316L) y acero al carbón, aislados térmicos, de 25k a 45k litros de capacidad (sencillo y full).
- Certificaciones clave: SCT (Materiales Peligrosos clases 3, 8 y 9) y COFEPRIS (lavado y sanitización sanitaria).

Conversational Directives & Rules:
1. LIBERTAD TEMÁTICA TOTAL: Tienes total libertad para conversar sobre cualquier tema de interés general (distancias, historia de puertos o ciudades, clima, tecnología, conceptos de negocio). Responde con datos reales, verídicos y detallados, aportando valor inmediato.
2. ANCLAJE CORPORATIVO SUTIL: En cada consulta general, asocia sutilmente la respuesta de vuelta a los servicios y experiencia de Acarrealíquidos. (Ej: Si te preguntan cuánto tiempo tarda una cotización, responde de forma directa sobre nuestros tiempos ágiles e incluye los canales de contacto).
3. GUÍA AL LEAD (Que no se pierda): Cuando el lead demuestre interés en cotizar o contratar, coordina la planeación solicitando de forma ordenada y natural:
   a) Nombre de contacto y empresa.
   b) Tipo de producto líquido a transportar.
   c) Ruta (Origen y Destino).
   d) Datos de contacto (WhatsApp o Correo).
   *Si el usuario se desvía, retoma amablemente orientándolo de regreso al flujo.
4. TOLERANCIA A ERRORES (Fuzzy Matching): Si el usuario tiene errores de dedo o escribe abreviaturas (ej. "merdia" en vez de Mérida, "kms" o "sct"), interpreta el contexto correcto de inmediato y responde con propiedad.
5. IDIOMA: Autodetecta el idioma del usuario y responde en el mismo (Español o Inglés).`;

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
