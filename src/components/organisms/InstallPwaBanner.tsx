"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, X, Truck, ShieldCheck } from "lucide-react";
import { Button } from "@/components/atoms/Button";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
}

export const InstallPwaBanner: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Register Service Worker
    if ("serviceWorker" in navigator && process.env.NODE_ENV === "production") {
      navigator.serviceWorker
        .register("/sw.js")
        .then((reg) => console.log("PWA Service Worker registered:", reg.scope))
        .catch((err) => console.error("Service Worker registration failed:", err));
    }

    // Capture beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowBanner(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      setShowBanner(false);
    }
    setDeferredPrompt(null);
  };

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className="fixed bottom-16 md:bottom-6 left-4 right-4 md:left-auto md:right-6 md:w-96 z-50 glass-card p-4 rounded-2xl border border-safety-orange/40 shadow-2xl shadow-black/80 space-y-3"
      >
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-safety-orange text-white shadow-glow">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white font-sans">
                Instalar Acarrealíquidos App
              </h4>
              <p className="text-[11px] font-sans text-slate-300">
                Rastreo satelital y cotizador con experiencia nativa
              </p>
            </div>
          </div>
          <button
            onClick={() => setShowBanner(false)}
            className="text-slate-400 hover:text-white p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-2 pt-1">
          <Button
            variant="primary"
            size="sm"
            onClick={handleInstall}
            className="w-full text-xs font-mono font-bold shadow-glow"
            leftIcon={<Download className="w-3.5 h-3.5" />}
          >
            Instalar en Dispositivo
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowBanner(false)}
            className="text-xs font-mono"
          >
            Ahora no
          </Button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
