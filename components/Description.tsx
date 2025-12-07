"use client";

import { motion } from "framer-motion";

export default function Description() {
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
                    Képzeld el, hogy hazamész, és a lakásod pontosan tudja, mire van szükséged
                  </h3>
                </div>
              </motion.div>
              <p>
                – anélkül, hogy egyetlen gombot megnyomnál. Felkapcsolnak a megfelelő lámpák, kellemes a hőmérséklet, nem zúg feleslegesen semmi, és ha bármi gyanús történik, a telefonod szól helyetted is figyel. Röviden: a lakás dolgozik, te pedig élsz benne kényelmesen.
              </p>
            </div>
            
            <p>
              Ezt tudja a Home Assistant-alapú okosotthon: <strong>összefogja az összes eszközödet egy helyre</strong>, és egyszerű, érthető szabályok szerint „összehangolja" őket. Nem kell értened a technikai varázsszavakhoz – elég, ha azt meg tudod fogalmazni, mit szeretnél:  
              <br />
              „Ha besötétedik, kapcsoljanak fel a lámpák."  
              <br />
              „Ha elmegyek otthonról, kapcsoljon ki minden, ami felesleges."  
              <br />
              „Ha mozgást érzékel a rendszer, jelezzen a telefonomra."
            </p>
            
            <p>
              Az okosotthon <strong>nem kütyügyűjtemény</strong>, hanem egy láthatatlan háttérrendszer, ami:
            </p>
            
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>növeli a kényelmet (kevesebb kapcsolgatás, több automatizmus),</li>
              <li>pénzt spórol (fűtés, világítás, fogyasztás figyelése),</li>
              <li>biztonságot ad (értesítések ajtóról, ablakról, mozgásról),</li>
              <li>és mindezt úgy, hogy te döntöd el, mi történjen.</li>
            </ul>
            
            <p>
              A DOOMester abban segít, hogy ebből ne káosz, hanem <strong>józanul felépített, átlátható rendszer</strong> legyen. Felmérjük, mire van szükséged, megtervezzük, beállítjuk, elmagyarázzuk emberi nyelven, és nem hagyunk magadra a technikával. Az eredmény? Egy olyan otthon, ami alkalmazkodik hozzád – nem fordítva. És amikor először átéled, általában csak ennyit mondasz:  
              <br />
              „Miért nem így működött ez eddig is?"
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

