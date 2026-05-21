"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SectionModal from "./SectionModal";

interface Card {
  emoji: string;
  title: string;
  bullets: string[];
  modalContent: React.ReactNode;
}

const cards: Card[] = [
  {
    emoji: "📱",
    title: "5 app helyett 1 — végre.",
    bullets: [
      `Okosizzó, klíma, kapu, kamera — mind külön appban él a telefonodon`,
      `Ha elmegy a net, az összes gyári "okos" cucc azonnal ostobává válik`,
      `A DOOMester rendszer mindet egyetlen felületre hozza — internettel és anélkül is`,
    ],
    modalContent: (
      <>
        <p>
          Emlékszel a régi videózós napokra? VHS, DVD, műholdvevő, HI-FI torony — 5 távirányító
          a dohányzóasztalon. Az okosotthon-ipar ezt a fejlődést hozta el: izzó app, klíma app,
          kapu app, kamera app, locsoló app... és ha épp nem tölt a telefon, az ember áll és bámul.
        </p>
        <p>
          A DOOMester rendszer ezt az ipart söpri le az asztalról. Egyetlen alkalmazás, ahol az
          összes eszközöd egymással is kommunikál — és ami a legfontosabb: teljesen önállóan
          működik az internet kiesése esetén is. A villany kapcsol, a kapu nyit, az automatizálások
          futnak. Mert a rendszer nem valahol egy felhőben lakik, hanem a te otthonodban, egy kis dobozban.
        </p>
      </>
    ),
  },
  {
    emoji: "🤝",
    title: "Én elvégzek mindent — Te csak élvezed",
    bullets: [
      `Tervezés, telepítés, beállítás, automatizálások — az én feladatom, nem a tiéd`,
      `Egy letisztult felületet kapsz, amit a párod is örömmel használ (tesztelve! 😄)`,
      `Utána sem hagylak magadra: távolról figyelem, ha valami nem stimmel, jelzem`,
    ],
    modalContent: (
      <>
        <p>
          A DOOMester nem egy csináld-magad készlet. Tudom, hogy az okosotthon fogalma sokakban
          azt a képet kelti, hogy hónapokig kell YouTube-videókat nézni, és minden második hétvégén
          valami nem működik. Ez a fordítottja annak, amit én kínálok.
        </p>
        <p>
          A folyamat egyszerű: felmérjük az igényeidet, megtervezzük a rendszert, én beüzemelem
          — a rendszer méretétől függően néhány nap alatt — te pedig másnap reggel arra ébredsz,
          hogy a fűtés már kellemes meleg, mire a fürdőszobába érsz. Onnantól én figyelem a rendszert távolról, és ha valami elromlik
          vagy bővíteni szeretnéd, szólok. Referencia otthon is van: nálam minden eszköz élesben
          fut, nem dobozból mutatom meg, hanem saját bőrömön tapasztalva ajánlom.
        </p>
      </>
    ),
  },
  {
    emoji: "🔒",
    title: "Az adataid itthon maradnak",
    bullets: [
      `Az Amazon Alexa, Google Home minden szokásodat feltölti a saját szervereikre`,
      `A DOOMester rendszer a te otthonodban fut — senki nem elemez, senki nem figyel`,
      `Nincs felhő amitől függsz, nincs gyártó aki lekapcsolhatja az eszközödet`,
    ],
    modalContent: (
      <>
        <p>
          Gondoltál már bele, hogy az Alexa vagy a Google Home pontosan tudja mikor kelsz fel,
          mikor mész el otthonról, mikor fekszel le, hány fokra állítod be a klímát, és mit mondasz
          a hangszóróba? Ez az adat nem enyészik el — feldolgozzák, elemzik, és felhasználják.
        </p>
        <p>
          A Home Assistant rendszer ezzel szemben helyi rendszer: minden adat, minden parancs,
          minden automatizálás a te otthonodban marad. Nincs gyártói szerver amelyiktől függsz,
          nincs „a cég csődbe ment, az eszközöd mostantól kuka" forgatókönyv. A Nabu Casa
          felhőszolgáltatás — amit én is ajánlok a kényelmes táveléréshez — titkosított és
          opcionális. Nélküle is tökéletesen működik minden.
        </p>
      </>
    ),
  },
  {
    emoji: "💰",
    title: "Nincs havidíj, nincs fogság",
    bullets: [
      `A Home Assistant szoftver ingyenes — nem havonta, hanem örökre`,
      `Csak az eszközökért fizetsz, amiket meg is tapogathatsz`,
      `Opcionálisan Nabu Casa felhő (~3 000 Ft/hó) — ha szeretnéd, de nem kötelező`,
    ],
    modalContent: (
      <>
        <p>
          Az okosotthon-ipar egyik kedvenc trükkje az előfizetéses modell. Veszed az eszközt,
          aztán kiderül, hogy a prémium funkciókhoz havi előfizetés kell, a felhőszolgáltatás
          nélkül meg félig működik.
        </p>
        <p>
          A Home Assistant ezt a modellt gyűlöli — és én is. A szoftver nyílt forráskódú és
          teljesen ingyenes. Nincs alap- és prémium csomag, nincs reklám, nincs 30 napos próba
          utáni fizetés. Az egyetlen opcionális költség a Nabu Casa felhőszolgáltatás, ami a
          kényelmes távoli elérést és a hangasszisztenssel való összekötést biztosítja — ez kb.
          annyi mint egy kávé havonta. A DOOMester szolgáltatásban az egyszeri telepítési díj
          tartalmazza a teljes beüzemelést, a karbantartás pedig igény szerint választható.
        </p>
      </>
    ),
  },
  {
    emoji: "🇭🇺",
    title: "Magyarul parancsol — és megérti",
    bullets: [
      `„Kapcsold fel a nappalit!" — és felkapcsolja. Nem angolul, nem félve a kiejtéstől`,
      `Az Alexa és Google Home nem tud magyarul — és nagyságrendekkel kevesebb eszközt kezel, mint a HA`,
      `A DOOMester rendszerben az összes eszközöd anyanyelveden engedelmeskedik`,
    ],
    modalContent: (
      <>
        <p>
          Az egyik leggyakoribb visszajelzés az okosotthon-témában: nem tetszik, hogy angolul
          kell parancsolni. Ez jogos. Az Amazon Alexa és a Google Home egyszerűen nem tud
          magyarul — és az általuk kezelt eszközök száma nagyságrendekkel kevesebb, mint a HA-é.
        </p>
        <p>
          A DOOMester rendszerben a Home Assistant Voice Preview Edition-t használom, ami
          kifejezetten a teljes körű, akár offline magyar hangvezérlésre lett tervezve.
          „Jó éjszakát" — és a HA lekapcsol minden villanyt, a klímát éjszakai módba teszi, és
          ellenőrzi a kaput. Nincs kiejtési fogás, nincs „sorry, I didn't understand that".
          Anyanyelveden, az összes eszközödhöz.
        </p>
      </>
    ),
  },
  {
    emoji: "🤖",
    title: "Pluszban: egy AI ügynök is figyel",
    bullets: [
      `Igény szerint egy MI-alapú ügynök is felügyeli a rendszeredet`,
      `Ha hibát észlel jelzi — ha új automatizálást szeretnél, megcsinálja`,
      `A főnök azért én maradok — nehogy öntudatra ébredjen 😄`,
    ],
    modalContent: (
      <>
        <p>
          Ez az a rész, ahol egy kicsit a jövőbe tekintünk — de ez már a jelen. Igény szerint egy
          saját fejlesztésű MI-ügynök is csatlakozhat a rendszeredhez, amely folyamatosan figyeli
          az okosotthonodat. Ha valami hibát észlel (pl. egy érzékelő nem küld adatot, egy eszköz
          eltűnt), azonnal jelzi. Ha új automatizálást szeretnél, megcsinálja — csak leírod
          magyarul, hogy mit szeretnél.
        </p>
        <p>
          Azt azért hozzáteszem: a döntési jogkört én nem adom át neki. Én tanítom be, én
          felügyelem. Ha kíváncsi vagy arra, hogy miért nem kell az AI-tól félni (és miért nem
          fog öntudatra ébredni), olvasd el az erről szóló ebookomat — közérthetően, szakzsargon
          nélkül.
        </p>
        <div className="pt-4">
          <a
            href="https://preview.mailerlite.io/forms/1669220/160082065423861690/share"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-primary-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-semibold shadow-medium hover:shadow-glow transition-all duration-300"
          >
            Elolvasom az ebookot →
          </a>
        </div>
      </>
    ),
  },
];

export default function WhyDoYouNeedThis() {
  const [modalIndex, setModalIndex] = useState<number | null>(null);

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
                Miért van szükséged a szolgáltatásaimra?
              </h2>
            </div>
          </motion.div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-3xl shadow-medium p-8 flex flex-col"
              >
                {/* Icon circle */}
                <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center text-3xl mb-4 mx-auto flex-shrink-0">
                  {card.emoji}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold gradient-text mb-3 text-center">
                  {card.title}
                </h3>

                {/* Bullets */}
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm flex-grow mb-6">
                  {card.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setModalIndex(i)}
                  className="bg-gradient-to-r from-primary-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-semibold shadow-medium hover:shadow-glow transition-all duration-300 text-center w-full"
                >
                  Részletek →
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {modalIndex !== null && (
        <SectionModal
          isOpen
          onClose={() => setModalIndex(null)}
          title={cards[modalIndex].title}
        >
          {cards[modalIndex].modalContent}
        </SectionModal>
      )}
    </>
  );
}
