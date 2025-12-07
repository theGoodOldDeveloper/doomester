"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ExampleCard from "./ExampleCard";
import ExampleModal from "./ExampleModal";

interface Example {
  id: number;
  name: string;
  description: string;
  image: string;
  modalImage: string;
  modalDescription: string;
}

export default function Examples() {
  const [examples, setExamples] = useState<Example[]>([]);
  const [selectedExample, setSelectedExample] = useState<Example | null>(null);

  useEffect(() => {
    // Dinamikusan betöltjük az example fájlokat az API-ról
    const loadExamples = async () => {
      try {
        const response = await fetch("/api/examples");
        if (response.ok) {
          const data = await response.json();
          setExamples(data);
        }
      } catch (error) {
        console.error("Error loading examples:", error);
      }
    };

    loadExamples();
  }, []);

  return (
    <section className="container-custom py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          whileHover={{ scale: 1.02, y: -5 }}
          className="relative bg-gradient-to-br from-primary-500 via-cyan-500 to-primary-600 rounded-3xl p-8 md:p-12 shadow-large overflow-hidden mb-12 max-w-4xl mx-auto"
        >
          {/* Animated background gradient overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear"
            }}
          />
          
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-400/20 via-cyan-400/30 to-primary-400/20 blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
              Példák az automatizálásra
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {examples.map((example, index) => (
            <motion.div
              key={example.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="h-full"
            >
              <ExampleCard
                example={example}
                onClick={() => setSelectedExample(example)}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedExample && (
          <ExampleModal
            example={selectedExample}
            onClose={() => setSelectedExample(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

