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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          Példák az automatizálásra
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {examples.map((example, index) => (
            <motion.div
              key={example.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
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

