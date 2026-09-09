"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  RefreshCw,
} from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export const AiConciergeDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hola, soy el Consultor Técnico de Acarrea Líquidos S.A. de C.V. (Transporte especializado de líquidos, fundada en 1981). ¿En qué puedo apoyarte hoy? Puedes consultarme sobre transporte de grado alimenticio (Kosher/Cofepris), alcoholes y solventes en acero inoxidable, o solicitar una cotización técnica inmediata.",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (textToSend?: string) => {
    const userMsg = textToSend || input.trim();
    if (!userMsg || isLoading) return;

    const newMessages: Message[] = [...messages, { role: "user", content: userMsg }];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userMessage: userMsg,
          messages: newMessages.map((m) => ({
            role: m.role === "assistant" ? "model" : "user",
            content: m.content,
          })),
        }),
      });

      const data = await res.json();
      if (data.response) {
        setMessages([...newMessages, { role: "assistant", content: data.response }]);
      } else {
        setMessages([
          ...newMessages,
          {
            role: "assistant",
            content:
              "Disculpa, tuvimos una intermitencia de enlace con la central. Puedes contactarnos de inmediato por WhatsApp al +52 (271) 712-8316 para atención prioritaria.",
          },
        ]);
      }
    } catch (err) {
      console.error(err);
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content:
            "No pudimos conectar con el servicio en este momento. Por favor contáctanos al +52 (271) 712-8316 o intenta de nuevo.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const quickQuestions = [
    "¿Qué certificaciones tienen para transporte grado alimenticio?",
    "¿Cómo transportan alcoholes y solventes en acero inoxidable?",
    "¿Cuál es la cobertura desde Amatlán de los Reyes, Veracruz?",
  ];

  return (
    <>
      {/* Floating Trigger Button (Positioned above mobile bar on phone, bottom-right on desktop) */}
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="animate-float-reverse fixed bottom-[74px] md:bottom-6 right-3 sm:right-6 z-40 inline-flex items-center gap-2 rounded-full bg-[#ED2B2C] hover:bg-[#D81B1C] text-white px-3.5 py-2.5 sm:px-4 sm:py-3 shadow-[0_4px_20px_rgba(237,43,44,0.4)] hover:shadow-[0_6px_25px_rgba(237,43,44,0.55)] transition-all border border-white/20 select-none cursor-pointer active:scale-95"
        aria-label="Abrir Asistente de IA"
      >
        <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse shrink-0" />
        <span className="inline-block font-mono text-xs font-bold tracking-wide">
          Consultor IA
        </span>
      </motion.button>

      {/* Floating Chat Drawer / Native Mobile Bottom Sheet */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop overlay for mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 sm:hidden"
            />

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="fixed inset-x-0 bottom-0 sm:bottom-6 sm:right-6 sm:left-auto sm:inset-x-auto w-full sm:w-[420px] h-[85vh] sm:h-[560px] max-h-[90vh] z-50 bg-slate-950/98 sm:glass-card rounded-t-[28px] sm:rounded-3xl border-t sm:border border-white/15 shadow-2xl flex flex-col overflow-hidden pb-[max(0.5rem,env(safe-area-inset-bottom))] sm:pb-0"
            >
              {/* Native Mobile Drag Handle */}
              <div className="w-12 h-1.5 rounded-full bg-slate-600/80 mx-auto mt-2.5 mb-1 sm:hidden shrink-0" />

              {/* Drawer Header */}
              <div className="p-4 bg-slate-950/90 border-b border-white/10 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-orange-500/20 text-[#ED2B2C] border border-orange-500/30">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white font-sans">
                      Consultor de Logística IA
                    </h4>
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Gemini 1.5 Flash · Central Amatlán</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Cerrar chat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Messages Scroll Area */}
              <div className="flex-1 p-4 overflow-y-auto space-y-3 font-sans text-xs">
                {messages.map((m, idx) => (
                  <div
                    key={idx}
                    className={`flex ${
                      m.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[85%] p-3.5 rounded-2xl leading-relaxed whitespace-pre-wrap text-sm sm:text-xs ${
                        m.role === "user"
                          ? "bg-[#ED2B2C] text-white rounded-tr-none font-medium shadow-md"
                          : "bg-slate-900/90 text-slate-200 border border-white/10 rounded-tl-none"
                      }`}
                    >
                      {m.content}
                    </div>
                  </div>
                ))}

                {isLoading && (
                  <div className="flex justify-start">
                    <div className="p-3 rounded-2xl bg-slate-900/90 border border-white/10 text-slate-400 flex items-center gap-2 font-mono text-xs">
                      <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#ED2B2C]" />
                      <span>Consultando base operativa...</span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Suggestion Chips */}
              <div className="p-2 px-3 bg-slate-950/60 border-t border-white/5 flex gap-1.5 overflow-x-auto no-scrollbar shrink-0">
                {quickQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(q)}
                    disabled={isLoading}
                    className="min-h-[36px] px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs sm:text-[10px] font-mono text-slate-300 whitespace-nowrap transition-colors active:scale-95"
                  >
                    {q}
                  </button>
                ))}
              </div>

              {/* Input & Send Area (16px base font on mobile to prevent iOS Safari auto-zoom) */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="p-3 bg-slate-950 border-t border-white/10 flex items-center gap-2 shrink-0"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Escribe tu consulta de logística..."
                  disabled={isLoading}
                  className="flex-1 bg-slate-900 text-white placeholder:text-slate-500 text-base sm:text-xs px-4 py-3 min-h-[46px] rounded-xl border border-white/10 focus:border-[#ED2B2C] focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="min-h-[46px] min-w-[46px] p-3 rounded-xl bg-[#ED2B2C] text-white hover:bg-red-700 disabled:opacity-50 transition-colors shadow-md flex items-center justify-center active:scale-95"
                  aria-label="Enviar mensaje"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
