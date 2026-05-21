"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface SectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function SectionModal({ isOpen, onClose, title, children }: SectionModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl shadow-large max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Modal header */}
            <div className="relative bg-gradient-to-br from-primary-500 via-cyan-500 to-primary-600 rounded-t-3xl p-8 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400/20 via-cyan-400/30 to-primary-400/20 blur-3xl" />
              <div className="relative z-10 pr-10">
                <h3 className="text-xl md:text-2xl font-bold text-white text-center">{title}</h3>
              </div>
              <button
                onClick={onClose}
                aria-label="Bezárás"
                className="absolute top-4 right-4 z-10 rounded-full bg-white/20 text-white w-8 h-8 flex items-center justify-center hover:bg-white/30 font-bold text-lg transition-colors"
              >
                ×
              </button>
            </div>

            {/* Modal body */}
            <div className="p-8 text-gray-700 leading-relaxed space-y-4">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
