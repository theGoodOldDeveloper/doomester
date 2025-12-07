"use client";

import { motion } from "framer-motion";

export default function Description2() {
  return (
    <section className="container-custom py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-medium">
          <div className="text-gray-700 leading-relaxed text-lg space-y-4">
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative bg-gradient-to-br from-primary-500 via-cyan-500 to-primary-600 rounded-3xl p-8 md:p-12 shadow-large overflow-hidden mb-4"
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
                  <h3 className="text-2xl md:text-3xl font-bold text-white text-center">
                    De ha bármi informatikai gond adódik otthon – számíthatsz rám.
                  </h3>
                </div>
              </motion.div>
              <p>
                Nem csak az okosotthonok világában segítek. Ha bármilyen informatikai probléma felbukkan otthon – lassú a gép, nem működik a wifi, rakoncátlankodik a laptop, nyomtató, router, vagy egyszerűen csak „nem azt csinálja, amit kéne" – nyugodtan szólj. Full stack fejlesztőként és DevOps szakemberként jól ismerem a teljes hátteret, a hálózattól a szerverig, a szoftvertől a hardverig. Célom, hogy otthonod technikája ne idegesítsen, hanem gond nélkül működjön. Segítek, akármi is a baj.
              </p>
            </div>
            
          </div>
        </div>
      </motion.div>
    </section>
  );
}

