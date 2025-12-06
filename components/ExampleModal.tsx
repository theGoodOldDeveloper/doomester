"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import { useState } from "react";

interface ExampleModalProps {
  example: {
    id: number;
    name: string;
    modalImage: string;
    modalDescription: string;
  };
  onClose: () => void;
}

export default function ExampleModal({ example, onClose }: ExampleModalProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-large"
        >
          <div className="relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-medium hover:bg-gray-100 transition-colors"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>
            <div className="relative h-64 md:h-96 w-full bg-gradient-to-br from-primary-100 to-cyan-100 flex items-center justify-center rounded-t-3xl">
              {!imageError ? (
                <Image
                  src={example.modalImage}
                  alt={example.name}
                  fill
                  className="object-cover rounded-t-3xl"
                  unoptimized
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🏠</div>
                  <p className="text-gray-700 text-xl font-semibold">{example.name}</p>
                </div>
              )}
            </div>
          </div>
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-4 gradient-text">{example.name}</h2>
            <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
              {example.modalDescription}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

