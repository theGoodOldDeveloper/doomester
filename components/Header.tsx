"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="lg:bg-gradient-to-r lg:from-accent-light lg:to-primary-50 lg:backdrop-blur-md lg:bg-opacity-90 bg-transparent shadow-soft overflow-hidden"
    >
      {/* Mobil és tablet: csak logo teljes szélességben */}
      <div className="lg:hidden relative w-full h-48">
        <Image
          src="/images/doomlogo.png"
          alt="DOOMester Logo"
          fill
          className="object-cover"
          unoptimized
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
          }}
        />
      </div>
      
      {/* Desktop: logo + szöveg */}
      <div className="hidden lg:block container-custom py-0">
        <div className="flex items-center justify-between gap-4">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative w-48 h-48 flex items-center justify-center flex-shrink-0"
          >
            <Image
              src="/images/doomlogo.png"
              alt="DOOMester Logo"
              width={192}
              height={192}
              className="rounded-2xl"
              unoptimized
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
              }}
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold gradient-text text-right flex-1"
          >
            Digitális Okos Otthon Mester
          </motion.h1>
        </div>
      </div>
    </motion.header>
  );
}
