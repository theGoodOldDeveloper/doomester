"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type Category = "Összes" | "Általános" | "Telepítés & Eszközök" | "Árképzés" | "Próbaidőszak";

interface FAQItem {
  question: string;
  answer: string;
  category: Exclude<Category, "Összes">;
}

const faqs: FAQItem[] = [
  // Általános
  {
    category: "Általános",
    question: `Ez biztos nagyon bonyolult — én nem értek a számítógépekhez. Nekem való ez egyáltalán?`,
    answer: `Pont ezért létezik a DOOMester. Te semmit nem konfigurálsz, semmit nem programozol — én elvégzem az egészet. Amit te kapsz: egy letisztult felületet a telefonodon, ahol gombokkal és magyar hangutasításokkal vezérelhetsz mindent. Ha tudod használni az okostelefont, tudod használni az okosotthont is.`,
  },
  {
    category: "Általános",
    question: `A párom is tudja majd használni? Nem akarok én lenni az egyetlen "mérnök" a háznál.`,
    answer: `Ez az egyik legfontosabb tervezési elv. Minden egyes rendszert úgy állítok be, hogy a legkevésbé tech-barátos családtag is kényelmesen tudja használni. Külön felhasználói fiókok, egyszerű felület, és — ami talán a legfontosabb — a fizikai kapcsolók sem tűnnek el. Ha lefagy valami (ami ritka, de előfordulhat), a hagyományos kapcsoló ugyanúgy működik.`,
  },
  {
    category: "Általános",
    question: `Mennyibe kerül havonta? Vannak rejtett költségek?`,
    answer: `A Home Assistant szoftver ingyenes — örökre. Nincs havidíj, nincs előfizetés, nincs prémium csomag. Csak az eszközökért fizetsz (izzók, érzékelők, kapumodul), és opcionálisan a Nabu Casa felhőszolgáltatásért (~3 000 Ft/hó), ami a kényelmes távoli elérést biztosítja. Nélküle is minden működik — csak távolról nem éred el. A DOOMester egyszeri telepítési díjért elvégez mindent, a karbantartás pedig igény szerinti csomag.`,
  },
  // Telepítés & Eszközök
  {
    category: "Telepítés & Eszközök",
    question: `Mennyi ideig tart a beüzemelés? Napokra megbénítja a lakást?`,
    answer: `Egy átlagos rendszer (10–15 eszköz) telepítése 1–2 nap. A meglévő kapcsolóid, eszközeid az egész idő alatt működnek — az okosítás fokozatos, nem kell leállítani az életet. Az alap rendszer maga 15–30 perc alatt feláll, a többi az eszközök és az automatizálások beállítása.`,
  },
  {
    category: "Telepítés & Eszközök",
    question: `Működik a meglévő okoseszközeimmel? Vagy mindent újat kell vennem?`,
    answer: `Szinte biztosan igen. Ahogy szokták mondani: „Amelyik eszköz nem integrálható a HA-ba, az nem is létezik." A Home Assistant több ezer gyártó eszközét ismeri. Ha van okosizzód, okosklímád, okos kapunyitód — az szinte biztosan integrálható. Én felmérem a meglévő eszközparkodat, és megmondom mi használható és mi nem — mielőtt bármit vennénk.`,
  },
  {
    category: "Telepítés & Eszközök",
    question: `Miért jobb ez mint az Alexa vagy a Google Home? Azok egyszerűbbnek tűnnek.`,
    answer: `Az Alexa és Google Home remek belépőszint. DE: (1) mindent feltöltenek a felhőbe, (2) internet nélkül nem működnek, (3) csak töredéknyi eszközt kezelnek — a HA-ba integrálható eszközök száma nagyságrendekkel több, mint a Google, Alexa, vagy Siri által ismertekéé, (4) ha a gyártó megszünteti a terméket, az eszközöd kuka, (5) összetett automatizálásokat nem tudsz csinálni bennük. A HA-ban ezek a korlátok nem léteznek. Ráadásul tökéletesen működik magyarul is.`,
  },
  // Árképzés
  {
    category: "Árképzés",
    question: `Tudok vele pénzt megtakarítani? Mennyit?`,
    answer: `Igen. Az okos fűtésvezérlés önmagában 10–25%-os fűtésszámla csökkentést hozhat. A locsolásvezérlés, automatikus villanylekapcsolás, bojler-optimalizálás mind tovább adnak hozzá. Egy átlagos családi háznál ez évi 30 000–80 000 Ft között mozog — ami több évre elosztva visszahozza a rendszer árát.`,
  },
  {
    category: "Árképzés",
    question: `Meddig tart egy ilyen rendszer? Nem avul el 2–3 év alatt mint egy telefon?`,
    answer: `A Home Assistant pontosan az ellenkezője a tervezett elavulásnak. A szoftver nyílt forráskódú és havonta frissül — senki nem tudja lekapcsolni vagy megszüntetni a támogatását. A hardver 5–10+ évig üzemel. Az eszközök akkor cserélődnek, ha fizikailag tönkremennek — nem mert a gyártó döntött úgy.`,
  },
  {
    category: "Árképzés",
    question: `Mi van ha elromlik valami? Ki javítja meg?`,
    answer: `A DOOMester szolgáltatás tartalmazza a folyamatos figyelést és karbantartást. Én távolról monitorozom a rendszert, és ha valami hibát észlelek, jelzem és megoldom — sokszor mielőtt te észrevennéd. A legtöbb problémát percek alatt meg lehet oldani távolról.`,
  },
  // Próbaidőszak
  {
    category: "Próbaidőszak",
    question: `Biztonságos ez? Nem fogják feltörni a házamat a hackerek?`,
    answer: `A HA alapértelmezésben nem látszik az internetről. A távoli elérés titkosított VPN-kapcsolaton vagy a Nabu Casa felhőn keresztül működik. Összehasonlításképp: az Alexa és Google Home eszközök folyamatosan, kétirányúan kommunikálnak külső szerverekkel. A HA csak akkor kommunikál kifelé, ha te engeded. Az összes forráskód nyilvános — több ezer fejlesztő ellenőrzi folyamatosan.`,
  },
  {
    category: "Próbaidőszak",
    question: `Mi van ha elmegy az internet? Akkor megáll az élet?`,
    answer: `Pont ellenkezőleg — ez az egyik legnagyobb előnye. A HA helyben fut, nem a felhőben. Ha kimegy a net, a villanykapcsolás, fűtésvezérlés, kapunyitás, összes automatizálás tovább működik. Csak a távolról elérés és az internetes szolgáltatások (időjárás) állnak le. A gyári felhős megoldások ilyenkor teljesen megbénulnak.`,
  },
  {
    category: "Próbaidőszak",
    question: `Mi van áramszünet esetén?`,
    answer: `Kérésre egy kis szünetmentes tápegység is telepíthető. Ha elmegy az áram, ez átveszi és szabályosan leállítja a rendszert. Ami talán még fontosabb: áramszünet esetén a HA automatikusan lekapcsol minden potenciálisan veszélyes eszközt (vasaló, hajsütővas), hogy amikor visszajön az áram, ne kapcsoljanak be veszélyesen. Opcionálisan a kapu és az ajtók órákon át is működtethetők az akkumulátorról.`,
  },
];

const categories: Category[] = [
  "Összes",
  "Általános",
  "Telepítés & Eszközök",
  "Árképzés",
  "Próbaidőszak",
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<Category>("Összes");
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const filtered = faqs.filter(
    (item) => activeCategory === "Összes" || item.category === activeCategory
  );

  const toggle = (i: number) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  const handleCategoryChange = (cat: Category) => {
    setActiveCategory(cat);
    setOpenItems(new Set());
  };

  return (
    <section className="container-custom py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          whileHover={{ scale: 1.02, y: -5 }}
          className="relative bg-gradient-to-br from-primary-500 via-cyan-500 to-primary-600 rounded-3xl p-8 md:p-12 shadow-large overflow-hidden mb-12 max-w-4xl mx-auto"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "loop", ease: "linear" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-400/20 via-cyan-400/30 to-primary-400/20 blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
              Gyakran Ismételt Kérdések
            </h2>
          </div>
        </motion.div>

        {/* Category filter pills */}
        <div className="flex gap-3 overflow-x-auto pb-2 justify-start lg:justify-center mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`whitespace-nowrap px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-primary-600 to-cyan-600 text-white shadow-medium"
                  : "bg-white text-gray-600 border border-gray-200 hover:bg-primary-50 font-medium"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion list */}
        <div className="max-w-3xl mx-auto space-y-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => {
              const isOpen = openItems.has(i);
              return (
                <motion.div
                  key={`${activeCategory}-${i}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, delay: i * 0.04 }}
                  className="bg-white rounded-2xl shadow-soft overflow-hidden"
                >
                  <button
                    onClick={() => toggle(i)}
                    className={`w-full flex items-center justify-between p-6 cursor-pointer text-left transition-colors ${
                      isOpen ? "bg-primary-50" : "hover:bg-primary-50"
                    }`}
                  >
                    <span className="font-semibold text-gray-800 text-lg pr-4">
                      {item.question}
                    </span>
                    <span
                      className={`text-primary-500 flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </button>

                  <motion.div
                    initial={false}
                    animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100">
                      {item.answer}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* CTA nudge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 max-w-lg mx-auto"
        >
          <div className="relative bg-gradient-to-br from-primary-50 via-cyan-50 to-primary-50 rounded-3xl p-8 text-center overflow-hidden border border-primary-100 shadow-soft">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400/5 via-cyan-400/10 to-primary-400/5 blur-2xl" />
            <div className="relative z-10">
              <p className="text-gray-800 font-bold text-xl mb-2">Nem találtad meg a választ?</p>
              <p className="text-gray-500 text-sm mb-6">Tedd fel kérdésedet — válaszolok.</p>
              <a
                href="/contact"
                className="inline-block bg-gradient-to-r from-primary-600 to-cyan-600 text-white px-8 py-3 rounded-xl font-semibold shadow-medium hover:shadow-glow transition-all duration-300"
              >
                Kérdezz bátran! →
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
