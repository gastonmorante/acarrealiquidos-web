"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  Truck, 
  ShieldCheck, 
  RefreshCw,
  MessageSquare
} from "lucide-react";
import { Badge } from "@/components/atoms/Badge";
import { Button } from "@/components/atoms/Button";

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
        "Hola, soy el Consultor de Estrategia Logística de Acarrealíquidos S.A. de C.V. (45 años de liderazgo en autotransporte de líquidos, fundada en 1981). ¿En qué puedo apoyarte hoy? Puedes consultarme sobre nuestras rutas, flota de autotanques 304/316L, certificaciones SCT/COFEPRIS o solicitar una cotización inmediata.",
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
    "¿Qué capacidad tienen sus autotanques?",
    "¿Tienen permisos SCT para materiales peligrosos?",
    "¿Cómo transportan melaza y aceites comestibles?",
  ];

  return (
    <>
      {/* Floating Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-20 md:bottom-6 right-6 z-40 p-3.5 rounded-full bg-safety-orange text-white shadow-glow hover:shadow-glow-lg flex items-center gap-2 border border-white/20 select-none"
        aria-label="Abrir Asistente de IA"
      >
        <Sparkles className="w-5 h-5 animate-pulse" />
        <span className="hidden sm:inline text-xs font-mono font-bold">
          Consultor IA
        </span>
      </motion.button>

      {/* Floating Chat Drawer Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 md:bottom-6 right-4 sm:right-6 w-[92vw] sm:w-[420px] h-[550px] max-h-[80vh] z-50 glass-card rounded-3xl border border-white/15 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Drawer Header */}
            <div className="p-4 bg-slate-950/90 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-orange-500/20 text-safety-orange border border-orange-500/30">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white font-sans">
                    Consultor de Logística IA
                  </h4>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Gemini 1.5 Flash · 45 Años</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-4 h-4" />
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
                    className={`max-w-[85%] p-3.5 rounded-2xl leading-relaxed whitespace-pre-wrap ${
                      m.role === "user"
                        ? "bg-safety-orange text-white rounded-tr-none font-medium shadow-md"
                        : "bg-slate-900/90 text-slate-200 border border-white/10 rounded-tl-none"
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="p-3 rounded-2xl bg-slate-900/90 border border-white/10 text-slate-400 flex items-center gap-2 font-mono text-[11px]">
                    <RefreshCw className="w-3.5 h-3.5 animate-spin text-safety-orange" />
                    <span>Consultando base operativa...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestion Chips */}
            <div className="p-2 px-3 bg-slate-950/60 border-t border-white/5 flex gap-1.5 overflow-x-auto no-scrollbar">
              {quickQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(q)}
                  disabled={isLoading}
                  className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-[10px] font-mono text-slate-300 whitespace-nowrap transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input & Send Area */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 bg-slate-950 border-t border-white/10 flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe tu consulta de logística..."
                disabled={isLoading}
                className="flex-1 bg-slate-900 text-white placeholder:text-slate-500 text-xs px-3.5 py-2.5 rounded-xl border border-white/10 focus:border-safety-orange focus:outline-none"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="p-2.5 rounded-xl bg-safety-orange text-white hover:bg-orange-500 disabled:opacity-50 transition-colors shadow-glow"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
