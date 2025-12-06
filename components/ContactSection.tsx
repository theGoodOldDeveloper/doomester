"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="container-custom py-16">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Kapcsolatfelvételi űrlap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-medium"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">
            Vegyél fel velem a kapcsolatot
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Kérdezz bátran bármit az okos otthon automatizálásról! Küldj egy üzenetet, 
            és hamarosan válaszolok. Együtt találjuk meg a legjobb megoldást az otthonod számára.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-primary-600 to-cyan-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-medium hover:shadow-glow transition-all duration-300"
            >
              Kapcsolatfelvételi űrlap megnyitása →
            </Link>
          </motion.div>
        </motion.div>

        {/* Időpontfoglaló */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-primary-500 to-cyan-500 rounded-3xl p-8 md:p-12 shadow-large text-white"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ingyenes 15 perces konzultáció
          </h2>
          <p className="mb-6 leading-relaxed opacity-95">
            Foglalj időpontot egy ingyenes, 15 perces konzultációra, ahol együtt átbeszéljük 
            az otthonod igényeit, és készítünk egy személyre szabott ajánlatot. Nincs kötelezettség, 
            csak egy baráti beszélgetés az okos otthon lehetőségeiről.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/booking"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-2xl font-semibold shadow-medium hover:shadow-large transition-all duration-300"
            >
              Időpont foglalása →
            </Link>
          </motion.div>
        </motion.div>

        {/* Záró mondat */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 100 }}
          whileHover={{ scale: 1.02, y: -5 }}
          className="text-center py-8"
        >
          <motion.div
            className="relative bg-gradient-to-br from-primary-500 via-cyan-500 to-primary-600 rounded-3xl p-8 md:p-12 shadow-large overflow-hidden max-w-4xl mx-auto"
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
                  textStroke: '1px rgba(0, 0, 0, 0.3)',
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
                    textStroke: '1.5px rgba(0, 0, 0, 0.4)',
                    paintOrder: 'stroke fill'
                  }}
                >
                  „Ez jó mulatság, férfi munka volt!"
                </span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

