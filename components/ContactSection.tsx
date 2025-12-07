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
          <h2 className="text-2xl md:text-3xl font-bold mb-4 gradient-text text-center">
            Vedd fel velem a kapcsolatot
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Kérdezz bátran bármit az okos otthon automatizálásról! Küldj egy üzenetet, 
            és hamarosan válaszolok. Együtt találjuk meg a legjobb megoldást az otthonod számára.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="text-center">
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
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
            Ingyenes 15 perces konzultáció
          </h2>
          <p className="mb-6 leading-relaxed opacity-95">
            Foglalj időpontot egy ingyenes, 15 perces konzultációra, ahol együtt átbeszéljük 
            az otthonod igényeit, és készítünk egy személyre szabott ajánlatot. Nincs kötelezettség, 
            csak egy baráti beszélgetés az okos otthon lehetőségeiről.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="text-center">
            <a
              href="https://cal.com/tibor-vegh-xy710g/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-2xl font-semibold shadow-medium hover:shadow-large transition-all duration-300"
            >
              Időpont foglalása →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

