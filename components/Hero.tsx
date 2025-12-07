"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="container-custom py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, type: "spring", stiffness: 100 }}
          whileHover={{ scale: 1.02, y: -5 }}
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
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl lg:text-3xl font-normal text-white leading-relaxed italic"
              style={{
                fontFamily: 'var(--font-playfair), serif',
                textShadow: '2px 2px 8px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 255, 255, 0.2)',
                letterSpacing: '0.02em',
                WebkitTextStroke: '1px rgba(0, 0, 0, 0.3)',
                paintOrder: 'stroke fill'
              }}
            >
              Az otthonod végre rád figyel, és úgy működik, ahogy mindig is szeretted volna:{" "}
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
                láthatatlan kényelem, összehangolt rendszerek és modern harmónia.
              </span>
            </motion.p>
          </div>
        </motion.div>
        
        {/* Hero kép */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex justify-center mt-8"
        >
          <div className="relative w-[75vw] max-w-5xl">
            <Image
              src="/images/heroimage1.jpg"
              alt="DOOMester Hero"
              width={1200}
              height={600}
              className="rounded-3xl border-4 border-white shadow-large"
              unoptimized
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

