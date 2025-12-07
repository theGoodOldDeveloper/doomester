"use client";

import { motion } from "framer-motion";

export default function Testimonial() {
  return (
    <section className="container-custom py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 100 }}
        whileHover={{ scale: 1.02, y: -5 }}
        className="text-center py-8 max-w-4xl mx-auto"
      >
        <motion.div
          className="relative bg-gradient-to-br from-primary-500 via-cyan-500 to-primary-600 rounded-3xl p-8 md:p-12 shadow-large overflow-hidden"
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
            <p 
              className="text-xl md:text-2xl font-normal text-white italic"
              style={{
                fontFamily: 'var(--font-playfair), serif',
                textShadow: '2px 2px 8px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 255, 255, 0.2)',
                letterSpacing: '0.02em',
                WebkitTextStroke: '1px rgba(0, 0, 0, 0.3)',
                paintOrder: 'stroke fill'
              }}
            >
              És akik már használják, azok az első nap végén rendszerint ezt mondják:{" "}
              <span 
                className="font-semibold"
                style={{
                  fontFamily: 'var(--font-playfair), serif',
                  textShadow: '2px 2px 10px rgba(0, 0, 0, 0.4), 0 0 30px rgba(255, 255, 255, 0.3)',
                  letterSpacing: '0.03em',
                  color: '#ffffff',
                  WebkitTextStroke: '1.5px rgba(0, 0, 0, 0.4)',
                  paintOrder: 'stroke fill'
                }}
              >
                „Ez jó mulatság, férfi munka volt!"
              </span>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

