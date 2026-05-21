"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
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

interface AutomationItem {
  icon: string;
  title: string;
  description: string;
}

const automations: AutomationItem[] = [
  {
    icon: "🎬",
    title: `A "Mozizunk" parancs`,
    description: `Egyetlen gomb vagy hangutasítás: a redőny lassan lehúzódik, a nappali lámpa elhalványul 20%-ra, a TV bekapcsol. Film vége után fordítva: felmegy a lámpa, feltekeredik a redőny. Három távirányító helyett egy mondat.`,
  },
  {
    icon: "🌅",
    title: "Kelő nap ébresztő",
    description: `Az ébresztő szól → a HA 10 perc alatt, fokozatosan emeli a fényerőt a hálószobában, mint egy kelő nap. Egyidejűleg beindul a fürdőszobában a fűtés. Nem kell dermesztő csempén ébredni — és hangos csipogó sem kell.`,
  },
  {
    icon: "🌧️",
    title: "Esős nap = nem locsolunk",
    description: `Ha az előző 24 órában esett, a locsolórendszer nem indul el — még ha a programban "kedd, 7:00" szerepel is. Talajnedvesség-érzékelővel még pontosabb. Vége a felesleges öntözésnek.`,
  },
  {
    icon: "🪟",
    title: "Nyitott ablak + fűtés = logikátlan",
    description: `Télen kinyitod az ablakot szellőztetni és elfelejted a radiátort. A HA 5 perc után lekapcsolja a fűtést az adott szobában. Ha becsuktad az ablakot, visszakapcsolja. Nem kell rá gondolni.`,
  },
  {
    icon: "🚪",
    title: "A kapu jelzőlámpa rendszere",
    description: `A bejáratnál egy kis színes izzó: zöld = kapu zárva. Sárga = 2 perce nyitva. Piros = 5 perce nyitva + értesítés. 10 perc után hangüzenet: „Figyu, már 10 perce nyitva a kapu." Nem kell kérdezgetni, látod.`,
  },
  {
    icon: "🌙",
    title: `"Jó éjszakát" — és kész`,
    description: `Hangszóróba mondod: „Jó éjszakát." A HA lekapcsol minden villanyt, a klímát éjszakai módba teszi, leellenőrzi a kaput. Ha nyitva van, szól. Ha minden rendben — csend. 10 gombnyomás helyett egyetlen mondat.`,
  },
  {
    icon: "📦",
    title: "Futár a kapunál — te meg máshol vagy",
    description: `A kamera mozgást érzékel a kapunál → értesítés a telefonra. Távolról megnyitod a kaput, a kamerán figyeled hogy belerakja a csomagot, majd bezárod. Nincs többé „nem voltam otthon" cédula.`,
  },
  {
    icon: "🧺",
    title: "Mosógép kész — ne feledd áttenni",
    description: `A HA figyeli a mosógép áramfogyasztását. Amikor befejezi (leesik a fogyasztás), értesítés: „A mosás kész — tedd át, mielőtt megkeseredik!" Vége az ázó-savanyodó ruháknak a gépben.`,
  },
  {
    icon: "🌓",
    title: "Naplemente = kerti lámpa be",
    description: `A kerti lámpa pontosan 15 perccel naplemente után kapcsol be — és ez minden nap más-más időpontra esik. Éjfélkor lekapcsol. Sosem kell azon gondolkodni: égve hagytam-e a kertet?`,
  },
  {
    icon: "👥",
    title: "Mindenki elment = takarékos mód",
    description: `Ha az utolsó okostelefon is elhagyta az otthont, a HA lekapcsol minden felesleges villanyt, a klímát takarékos módba teszi. Az első telefon visszaér → minden visszaáll. Mire bemész az ajtón, már meleg van és világít.`,
  },
  {
    icon: "💧",
    title: "Vízszivárgás — azonnal, nem másnap",
    description: `A mosógép, a bojler, a mosogatógép alá kerül egy kis érzékelő (apró és olcsó). Ha vizet érzékel: azonnali telefon értesítés. Nem kell „majd megnézem estére" — azonnal jelzi, mielőtt komolyabb kár keletkezne.`,
  },
  {
    icon: "🌈",
    title: "Jelzőfény riasztási fokozatok",
    description: `Egy egyszerű okosizzó jelzőfényként: zöld = minden oké. Sárga = valami figyelmet igényel (pl. nyitva egy ablak). Piros villogás = azonnali figyelmeztetés. Éjszaka is tudod a kapu állapotát — anélkül, hogy telefonra kellene nyúlni.`,
  },
];

export default function Examples() {
  const [examples, setExamples] = useState<Example[]>([]);
  const [selectedExample, setSelectedExample] = useState<Example | null>(null);

  useEffect(() => {
    fetch("/api/examples")
      .then((res) => res.json())
      .then((data) => setExamples(data))
      .catch(() => {});
  }, []);

  return (
    <section className="container-custom py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
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
              Példák az automatizálásra
            </h2>
          </div>
        </motion.div>

        {examples.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {examples.map((example) => (
              <ExampleCard
                key={example.id}
                example={example}
                onClick={() => setSelectedExample(example)}
              />
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {automations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-3xl shadow-medium p-8 flex flex-col cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center text-3xl mb-4 mx-auto flex-shrink-0">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold gradient-text mb-3 text-center">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed flex-grow">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {selectedExample && (
        <ExampleModal
          example={selectedExample}
          onClose={() => setSelectedExample(null)}
        />
      )}
    </section>
  );
}
