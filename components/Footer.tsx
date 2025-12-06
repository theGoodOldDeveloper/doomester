"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white mt-16">
      <div className="container-custom py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl p-8 md:p-10 mb-8 shadow-large backdrop-blur-md"
            style={{ backgroundColor: '#161021' }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500 bg-clip-text text-transparent">
              Kapcsolat
            </h3>
            <div className="space-y-5 text-gray-200 text-center">
              <motion.div
                whileHover={{ x: 5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center justify-center gap-3"
              >
                <span className="text-2xl">🌐</span>
                <Link
                  href="https://thegoodolddeveloper.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors text-lg"
                >
                  thegoodolddeveloper.com
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ x: 5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center justify-center gap-3"
              >
                <span className="text-2xl">📧</span>
                <Link
                  href="mailto:thegoodolddeveloper@gmail.com"
                  className="hover:text-white transition-colors text-lg"
                >
                  thegoodolddeveloper@gmail.com
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ x: 5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center justify-center gap-3"
              >
                <span className="text-2xl">📞</span>
                <Link
                  href="tel:+36309283653"
                  className="hover:text-white transition-colors text-lg"
                >
                  +36 30 9283 653
                </Link>
              </motion.div>
            </div>
          </motion.div>
          <div className="text-center text-gray-400">
            <p>
              © 2025 The Good Old Developer. Minden jog fenntartva. Minden sor kód mögött egy kávé ☕
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

