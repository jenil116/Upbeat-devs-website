"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:max-w-sm z-50 bg-secondary dark:bg-card border border-white/10 dark:border-border rounded-2xl shadow-2xl p-5"
        >
          <button
            onClick={decline}
            className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 bg-primary-600/20 rounded-lg flex items-center justify-center shrink-0">
              <Cookie className="w-5 h-5 text-primary-400" />
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm mb-1">
                Cookie Preferences
              </h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                We use cookies to enhance your browsing experience and analyze
                our traffic. By clicking &ldquo;Accept&rdquo;, you consent to our use of cookies.
              </p>
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <Button
              variant="outline"
              size="sm"
              onClick={decline}
              className="flex-1 border-white/20 text-white hover:bg-white/10 hover:text-white"
            >
              Decline
            </Button>
            <Button size="sm" onClick={accept} className="flex-1">
              Accept All
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
