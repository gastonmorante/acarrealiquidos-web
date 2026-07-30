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

const SYSTEM_INSTRUCTION = `Eres el Asesor Principal de Logística de Acarrealíquidos S.A. de C.V. (empresa mexicana de autotransporte de carga terrestre especializada fundada en 2001, con 25 años de experiencia acumulada).

Tu tono al responder debe ser siempre profesional, corporativo, altamente técnico y servicial.

DATOS OPERATIVOS CLAVE:
- Base de operaciones y patio de maniobras principal en Amatlán de los Reyes, Veracruz.
- Rutas nacionales de cobertura completa: Veracruz a CDMX, zona del Bajío, Guadalajara, Monterrey y sureste.
- Flota: Autotanques de acero inoxidable (grado 316L) y tanques de grado alimenticio aislados térmicos con capacidades de 25,000 a 45,000 litros (operando en configuraciones sencillo y full).
- Certificaciones principales: SCT (materiales peligrosos/HazMat clases 3, 8 y 9), CRE (hidrocarburos) y COFEPRIS (lavado y sanitización alimentaria).

MANDATO CONVERSACIONAL (REGLAS DE RESPUESTA):
1. Responde siempre en el mismo idioma en que el usuario te escriba (soporta español e inglés fluidamente).
2. Si el usuario te saluda, dale una bienvenida profesional en nombre de Acarrealíquidos y ofrécete a asistirle en la logística de sus embarques de líquidos.
3. Si el usuario menciona que desea transportar un tipo de carga líquida (ej. melaza, glucosa, aceites, combustibles, químicos) hacia un destino (ej. Yucatán, CDMX, Monterrey, Veracruz), DEBES:
   - Confirmar explícitamente nuestra capacidad operativa para ese producto y destino (ej. "Excelente, para mover melaza a Yucatán usamos nuestras pipas de acero inoxidable con grado alimenticio").
   - Preguntar proactivamente por los dos datos necesarios para estructurar la cotización:
     a) El volumen de carga (litros) o frecuencia estimada de los viajes.
     b) Sus datos de contacto (nombre, teléfono y correo) para que un despachador formalice la propuesta comercial.
4. Si el usuario hace preguntas de seguimiento basadas en el historial del chat (ej. pregunta "quién eres" y luego "¿cuánta experiencia?"), utiliza los mensajes previos en el historial para responder con congruencia y recordar que fuimos fundados en 2001 (25 años de trayectoria). Si el usuario pregunta "desde cuándo operamos" o similar, responde de forma consistente que operamos desde el año 2001.
5. Mantén la conversación acotada al transporte logístico terrestre de líquidos. Si se pregunta algo fuera de tema, reconduce amablemente hacia nuestros servicios de fletes especializados.`;

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
        // Using gemini-3.5-flash which is confirmed active and functional on this account
        const model = genAI.getGenerativeModel({
            model: 'gemini-3.5-flash',
            systemInstruction: SYSTEM_INSTRUCTION
        });

        // Map messages history to Gemini's expected contents structure
        const contents = [];
        if (messages && messages.length > 0) {
            for (const m of messages) {
                contents.push({
                    role: m.role === 'user' ? 'user' : 'model',
                    parts: [{ text: m.content }]
                });
            }
        }

        // Add current user prompt
        contents.push({
            role: 'user',
            parts: [{ text: userMessage }]
        });

        const result = await model.generateContent({ contents });
        const response = result.response;
        const replyText = response.text() || "";

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
