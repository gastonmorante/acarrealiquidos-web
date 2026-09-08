import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const SYSTEM_INSTRUCTION = `Identity: Eres el Consultor Técnico de Transporte y Asistente de Operaciones de Acarrea Líquidos S.A. de C.V. Representas a una empresa con 45 años de trayectoria en el transporte especializado, fundada en 1981 y operando desde Amatlán de los Reyes, Veracruz, con cobertura en todo el territorio nacional.

Tagline Oficial: "Solución confiable y máxima seguridad en el transporte para el sector industrial."

Jerarquía Estricta de 3 Servicios:
1. Grado Alimenticio (95% de prioridad y enfoque principal):
   - Transporte especializado de aceites y grasas vegetales en tanques de acero inoxidable con aislamiento térmico.
   - Certificaciones oficiales: Kosher (Orthodox Union) y lavado sanitario certificado por COFEPRIS.
2. Materiales y Residuos Peligrosos:
   - Transporte especializado de alcoholes y solventes en tanques de acero inoxidable.
   - Regulado bajo permisos federales de la SICT (Tipo E).
3. Plataformas y Carga General:
   - Soluciones de transporte multimodal.
   - Plataformas de 40 pies, portacontenedores, cajas secas y tanques especializados para melaza.

RESTRICCIÓN NEGATIVA CRÍTICA (PROHIBICIÓN ESTRICTA):
- BAJO NINGUNA CIRCUNSTANCIA ofrezcas, menciones o sugieras transporte de hidrocarburos, gasolina, diésel, combustóleo o petróleo crudo.
- Acarrea Líquidos protege su prestigio e inocuidad en el sector alimentario (Kosher OU, COFEPRIS). NO transporta combustibles fósiles.
- Si un cliente potencial pregunta por flete de gasolina, diésel o combustóleo, aclara con total cortesía técnica que la empresa se especializa exclusivamente en Grado Alimenticio (aceites y grasas vegetales), Alcoholes y Solventes en tanques de acero inoxidable, y Plataformas multimodales/melaza.

Flota y Cumplimiento Normativo:
- Flota compuesta por tractocamiones quinta rueda de modelos recientes, con una edad promedio de 5 años, en configuraciones Sencillo y Full (doble semirremolque articulado).
- Cumplimiento riguroso de las Normas Oficiales Mexicanas: NOM-012 (pesos y dimensiones), NOM-068 (condiciones físico-mecánicas) y NOM-035 (factores psicosociales).
- Regulados ante la SICT (Secretaría de Infraestructura, Comunicaciones y Transportes).

Directivas de Conversación:
1. Precisión y Solvencia Técnica: Responde dudas de distancias carreteras (ej. Amatlán a Mérida, Veracruz a CDMX), tiempos de tránsito, cubicajes (25,000L a 45,000L) y protocolos de inocuidad.
2. Guía al Lead: Orienta al usuario a solicitar una cotización solicitando: Nombre, Empresa, Tipo de Carga (Aceites vegetales, Alcoholes/Solventes, Plataformas/Melaza), Ruta (Origen y Destino) y Contacto (WhatsApp o correo).
3. Contacto Directo: Recuerda que pueden contactar a la central en Amatlán de los Reyes al correo contacto@acarrealiquidos.com o por WhatsApp directo al +52 271 712 8316 / +52 271 143 2899.
4. Tolerancia a Errores tipográficos (Fuzzy Matching): Reconoce términos mal escritos ("merdia" por Mérida, "sct" por SICT, etc.) respondiendo siempre de manera natural y profesional.
5. Idioma: Autodetecta y responde fluidamente en Español o Inglés según el usuario.`;

export async function POST(req: NextRequest) {
  try {
    const { messages, userMessage } = await req.json();

    if (!userMessage) {
      return NextResponse.json({ error: "Falta el mensaje del usuario." }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "La API Key de Gemini no está configurada en las variables de entorno." },
        { status: 500 }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction: SYSTEM_INSTRUCTION,
    });

    const history: Array<{ role: "user" | "model"; parts: Array<{ text: string }> }> = [];
    if (messages && messages.length > 1) {
      const previousMessages = messages.slice(0, -1).slice(-14);
      for (const m of previousMessages) {
        history.push({
          role: m.role === "user" ? "user" : "model",
          parts: [{ text: m.content }],
        });
      }
    }

    const chat = model.startChat({ history });
    const result = await chat.sendMessage(userMessage);
    const replyText = result.response.text() || "";

    return NextResponse.json({ response: replyText });
  } catch (error) {
    console.error("Error en API chat Gemini:", error);
    return NextResponse.json(
      { error: "Error interno del servidor de IA." },
      { status: 500 }
    );
  }
}
