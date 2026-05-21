"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import SectionModal from "./SectionModal";

interface Tab {
  id: string;
  label: string;
  icon: string;
  title: string;
  intro: string;
  features: string[];
  modalContent: React.ReactNode;
}

const tabs: Tab[] = [
  {
    id: "nyugalom",
    label: "Nyugalom 😌",
    icon: "😌",
    title: "A legnagyobb ajándék: nem kell aggódnod",
    intro: `Lekapcsoltam a vasalót? Bezártam a kaput? Megvan a gyerek? Egy pillantás, és tudod. Vagy a HA maga szól, ha valami nincs rendben.`,
    features: [
      `Értesítés ha a kapu nyitva marad — és hangosan is szól, ha 10 perce nem csukják be`,
      `Automatikus lekapcsolás ha mindenki elhagyta az otthont`,
      `„Gyerek hazaért" értesítés a telefonra`,
      `Vasaló, hajsütővas — távolról is lekapcsolható`,
      `Kamera live nézet a telefonon, bárhonnan`,
    ],
    modalContent: (
      <>
        <p>
          A legtöbb okosotthon-megrendelő ezzel az érzéssel indul: szeretnék végre tudni, mi
          történik otthon, amikor nem vagyok ott. Ez pontosan az, amit a rendszer megold.
        </p>
        <p>
          Nem kell visszafordulni az autóval. Nem kell a sógornőt felhívni, hogy menjen el
          ellenőrizni. Nem kell az egész nyaralás alatt azon rágódni, hogy bezártam-e a kaput.
          A HA figyeli az egészet — és csak akkor szól, amikor valóban szükséges. Nem minden
          5 másodpercben riadóztat, hanem emberséges logikával: figyelmeztet, majd ha nem
          reagálsz, hangosan szól.
        </p>
      </>
    ),
  },
  {
    id: "sporalas",
    label: "Spórolás ⚡",
    icon: "⚡",
    title: "Havonta több ezer forint — automatikusan",
    intro: `Az okosotthon nem csak kényelmet hoz — visszahozza a befektetést is. Teljesen automatikusan, anélkül, hogy gondolni kellene rá.`,
    features: [
      `Fűtés csak ott fűt, ahol valóban tartózkodtok — üres szobát nem`,
      `Klíma és fűtés leáll, ha nyitva felejtitek az ablakot`,
      `Locsoló nem indul el, ha az előző nap esett`,
      `Bojler csak akkor melegít, amikor valóban szükség van rá`,
      `Minden villany automatikusan lekapcsol, ha mindenki elmegy`,
    ],
    modalContent: (
      <>
        <p>
          Egy átlagos háztartásban a fűtés- és áramköltség 10–25%-a felesleges — fűt ahol
          senki nincs, égnek villanyok ahol senki nem tartózkodik, a bojler egész nap meleg
          vizet tart mert hátha kell. A HA ezt a pazarlást szünteti meg, csendben, a háttérből.
        </p>
        <p>
          Az első tél után az ügyfeleim jellemzően 30 000–80 000 forintos fűtésszámla-csökkentésről
          számolnak be — ami több évre elosztva visszahozza a rendszer árát.
        </p>
      </>
    ),
  },
  {
    id: "biztonsag",
    label: "Biztonság 🔒",
    icon: "🔒",
    title: "Nem csak kényelmes — biztonságos is",
    intro: `Füst a konyhában, víz a mosógép alatt, nyitott ablak éjszaka — a HA nem csak azt intézi, hogy kényelmes legyen az élet. Azt is, hogy biztonságos legyen.`,
    features: [
      `Vízszivárgás érzékelő a mosógép, bojler, mosogatógép alatt — azonnal értesít`,
      `Füstjelző ami értesítést küld a telefonra ÉS felkapcsolja a villanyokat`,
      `Mozgásérzékelő kertben, garázsnál — értesítés ismeretlen mozgásra`,
      `Ajtó és ablak nyitás jelzése — éjszaka se marad nyitva észrevétlenül`,
      `Ha reggel 10-ig nincs mozgás idős szülőnél, üzenet megy a gyereknek`,
    ],
    modalContent: (
      <>
        <p>
          A biztonság az az okosotthon-funkció, amit az emberek általában nem az első helyen
          emlegetnek — de utólag ez az, amiért a leghálásabbak.
        </p>
        <p>
          Egy vízszivárgás érzékelő a mosógép alatt évente egyszer élesedik be — de az a egy
          alkalom milliós kárt előzhet meg. A füstérzékelő nem csak sipol a szomszédok
          bosszantására: a HA értesíti a telefonodat, felkapcsolja a villanyokat hogy lásd a
          menekülési utat, és leállítja a klímát hogy ne terjessze a füstöt. Ez a különbség a
          boltban kapható érzékelő és egy okos, összehangolt rendszer között.
        </p>
      </>
    ),
  },
  {
    id: "hangvezerles",
    label: "Hangvezérlés 🎙️",
    icon: "🎙️",
    title: "Egy mondat — és a HA elvégzi a többit",
    intro: `"Jó éjszakát." Egyetlen mondat — és a HA elvégzi azt, ami egyébként 10 gombnyomás lenne. Magyarul, az összes eszközödhöz, egyszerre.`,
    features: [
      `„Mozizunk" — redőny le, lámpa 20%-ra, TV be. Egyetlen mondat`,
      `„Jó éjszakát" — minden villany le, klíma éjszakai mód, kapu ellenőrzés`,
      `„Hazaindulok" — fűtés fel, bejárati lámpa be, mire hazaérsz kész van`,
      `Nem kell angolul erőltetni — az anyanyelveden értelmezi`,
      `Hangszórón keresztül figyelmeztet, ha valami nincs rendben`,
    ],
    modalContent: (
      <>
        <p>
          A hangvezérlés az a funkció, amit az ügyfeleim általában utoljára próbálnak ki — és
          aztán nem tudnak meglenni nélküle. A titka az, hogy nem egy eszközt vezérel, hanem az
          összes eszközt egyszerre, összehangolva.
        </p>
        <p>
          Az este van parancsra a HA tudja, hogy mit jelent ez a te otthonodban: lekapcsol
          mindent ahol már nem tartózkodtok, a hálószobában elhalványítja a lámpát, a klímát
          éjszakai módba teszi. Ezt nem kell programozni — én beállítom a te igényeid szerint.
        </p>
      </>
    ),
  },
  {
    id: "tavolrol",
    label: "Bárhonnan 📱",
    icon: "📱",
    title: "Londonból is kinyitod a kaput",
    intro: `Hazaindulás előtt egyetlen kattintással váltod az otthont távollét módból otthonlétre — a fűtés, hűtés, bojler azonnal beindul. Mire a küszöbön átlépsz, minden a helyén van.`,
    features: [
      `Kapu nyitása távolról — kamerával figyelsz, aztán bezárod`,
      `Fűtés beindítása hazaút közben — mire megérkezel, meleg van`,
      `Bojler kikapcsolva nyaralás alatt, egy kattintással visszakapcsolva`,
      `Véletlenszerű villanykasználat nyaraláskor — mintha otthon lennél`,
      `Minden eszköz állapota egy képernyőn, bárhonnan a világból`,
    ],
    modalContent: (
      <>
        <p>
          A távolról vezérlés az a funkció, aminek az értékét legjobban az első alkalom mutatja
          meg — amikor a reptéren állsz, és rájössz hogy a futár 10 perc múlva ott lesz a
          kapunál, te meg egy hétre elutaztál.
        </p>
        <p>
          A HA-val: távolról megnyitod a kaput, a kamerán figyeled ahogy a futár beteszi a
          csomagot a fedett tárolóba, majd bezárod a kaput. Kész. Ez nem sci-fi — ez a valóság,
          amit én az ügyfeleim számára beállítok.
        </p>
      </>
    ),
  },
];

export default function WhatHAGivesYou() {
  const [activeTab, setActiveTab] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const current = tabs[activeTab];

  return (
    <>
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
                Mit ad neked a Home Assistant?
              </h2>
            </div>
          </motion.div>

          {/* Tab bar */}
          <div className="flex gap-3 overflow-x-auto pb-2 justify-start lg:justify-center mb-6">
            {tabs.map((tab, i) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(i)}
                className={`whitespace-nowrap px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === i
                    ? "bg-gradient-to-r from-primary-600 to-cyan-600 text-white shadow-medium"
                    : "bg-white text-gray-600 border border-gray-200 hover:bg-primary-50 font-medium"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl shadow-medium p-8 md:p-12"
            >
              <h3 className="gradient-text text-2xl font-bold mb-4">
                {current.icon} {current.title}
              </h3>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {current.intro}
              </p>

              <ul className="space-y-3 mb-8">
                {current.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-primary-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-semibold shadow-medium hover:shadow-glow transition-all duration-300"
              >
                Bővebben →
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </section>

      <SectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={current.title}
      >
        {current.modalContent}
      </SectionModal>
    </>
  );
}
