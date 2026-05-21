"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";

interface Slide {
  badge: string;
  situation: string;
  solution: string;
  result: string;
}

const slides: Slide[] = [
  {
    badge: "🏡 Kisgyermekes família · Gyöngyös",
    situation: `Reggel mindenki rohan, senki nem tudja kinek mi a feladata. A gyerekek iskolába, apa munkába, anya egyszerre mindenütt. Közben valaki nyitva hagyta a kaput, a fürdőszobai lámpa ég, és a „bezártad a kocsit?" kérdés még autóból is elhangzik.`,
    solution: `Reggeli rutin automatizálás: 6:30-kor a HA felemeli a fűtést, 7:00-kor bekapcsol a fürdőszobában a fűtés. Ha a gyerek hazaér az iskolából, telefon értesítés: „Bence hazaért." A kaput? Telefonról 2 másodperc alatt megnézheted.`,
    result: `Az anya az első héten azt mondta: „Miért nem csináltuk ezt meg korábban?" A reggeli rutin azóta 15 perccel rövidebb lett.`,
  },
  {
    badge: "🏖️ Nyaraló dilemma · 1 hetes távollét",
    situation: `Egész évben tervezi az ember, majd az egész vakáción azon rágja az agyát: „Biztosan bezártam?" „Mindent lekapcsoltam?" A strandolás ott, az aggódás itt.`,
    solution: `Távollét mód — ami nem kell, nem üzemel. Este véletlenszerűen kapcsolgatnak a villanyok, mintha otthon lennél. Hazainduláskor egy kattintás a telefonon: az élet visszaáll a régi kerékvágásba — mire megérkezel, minden a helyén van.`,
    result: `„A következő nyaralón csak a strandot néztem, nem a telefont. Na jó, egyszer azért megnéztem — de csak mert akartam, nem mert kellett."`,
  },
  {
    badge: "🚗 A felesleges visszafordulás",
    situation: `Mindenki ismeri. Félúton az autóban felvillan: a hajsütővas! Megfordulsz, visszamész, és persze ki volt kapcsolva. Évente 6–8 felesleges visszafordulás, stressz, elveszett idő.`,
    solution: `A HA figyeli a konnektort. Ha nem kapcsolod ki indulás előtt, 5 perccel később értesítés jön. Ha nem reagálsz — távolról lekapcsolja. Nincs visszafordulás, nincs aggódás.`,
    result: `„Évi kb. 8 visszafordulástól szabadultam meg. Már az időmegtakarítás is megérte."`,
  },
  {
    badge: "🏠 Kiadó lakás · Eger",
    situation: `Airbnb-s lakás: minden vendégváltásnál ott kell lenni kulccsal. Ha a vendég elkésik, az ember vár. Ha a bérbeadó nem ér rá, szervezési rémálom.`,
    solution: `Okos zár + HA. Minden vendégnek egyedi, időkorlátozott kód a foglalás idejére. Megérkezéskor értesítés, távozáskor automatikusan törlődik a kód. A fűtés 2 órával a foglalás előtt beindul.`,
    result: `A bérbeadó azóta kulcs nélkül üzemelteti a lakást. „Legutóbb Görögországból adtam ki egy hétvégét. Semmi gond nem volt."`,
  },
  {
    badge: "👴 Gondoskodó gyerek · Hatvan",
    situation: `Szülők 70+ évesek, egyedül laknak. A gyerek aggódik, de nem tud minden nap odamenni. Rendben van-e Anya? Felkelt-e? Nem esett-e el?`,
    solution: `Mozgásérzékelők a lakásban. Ha délelőtt 10-ig nincs mozgás, automatikus üzenet a gyereknek. Ráadásul van egy egyszerű „Jól vagyok" gomb, amit a szülő minden reggel megnyom.`,
    result: `„Apa büszke, hogy okosotthonban lakik. Én meg végre tudok aludni."`,
  },
  {
    badge: "🌿 Sok app, nulla kényelem · Újépítésű ház",
    situation: `Új ház, okos eszközök — de 5 különböző appban szétszórva. Klíma itt, fűtés ott, villanyok amott. Fizet az ember a kényelemért, aztán ugyanolyan kényelmetlenül él.`,
    solution: `A HA összefogja az összeset. Klíma leáll ha nyitva marad az ablak. Locsoló nem indul ha esett. Fűtés lejjebb megy ha mindenki elment. Minden eszköz egy képernyőn, egymással kommunikálva.`,
    result: `Első télen akár 20–25%-os fűtésmegtakarítás — a tényleges összeg a ház méretétől függ. „A rendszer néhány év alatt kijön magából — utána csak spórolok."`,
  },
];

export default function UseCasesCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(next, 5000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, next]);

  const slide = slides[current];

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
              Felhasználói esetek
            </h2>
          </div>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div className="overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-3xl shadow-medium p-8 md:p-12"
              >
                {/* Location badge */}
                <span className="bg-primary-50 text-primary-600 rounded-full px-4 py-1 text-sm font-semibold inline-block mb-6">
                  {slide.badge}
                </span>

                <div className="space-y-4">
                  <div className="border-l-4 border-primary-400 pl-4">
                    <p className="font-semibold text-gray-800 mb-1">A helyzet:</p>
                    <p className="text-gray-600">{slide.situation}</p>
                  </div>
                  <div className="border-l-4 border-cyan-400 pl-4">
                    <p className="font-semibold text-gray-800 mb-1">A megoldás:</p>
                    <p className="text-gray-600">{slide.solution}</p>
                  </div>
                  <div className="border-l-4 border-green-400 pl-4">
                    <p className="font-semibold text-gray-800 mb-1">Az eredmény:</p>
                    <p className="text-gray-600">{slide.result}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              aria-label="Előző"
              className="rounded-full bg-white shadow-medium w-12 h-12 flex items-center justify-center hover:shadow-large transition-all"
            >
              <svg
                className="w-5 h-5 text-primary-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div className="flex gap-2 items-center">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`${i + 1}. eset`}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 h-3 bg-primary-500"
                      : "w-3 h-3 bg-gray-300 hover:bg-primary-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Következő"
              className="rounded-full bg-white shadow-medium w-12 h-12 flex items-center justify-center hover:shadow-large transition-all"
            >
              <svg
                className="w-5 h-5 text-primary-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
