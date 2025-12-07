"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface ExampleCardProps {
  example: {
    id: number;
    name: string;
    description: string;
    image: string;
  };
  onClick: () => void;
}

export default function ExampleCard({ example, onClick }: ExampleCardProps) {
  const [imageError, setImageError] = useState(false);

  // A name-et feldaraboljuk kötőjel mentén (- vagy –)
  const splitName = example.name.split(/[–-]/).map(part => part.trim());
  const name = splitName[0] || example.name;
  const subname = splitName[1] || "";

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="bg-white rounded-3xl overflow-hidden shadow-medium cursor-pointer card-hover group h-full flex flex-col"
    >
      <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-primary-100 to-cyan-100 flex items-center justify-center flex-shrink-0">
        {!imageError ? (
          <Image
            src={example.image}
            alt={example.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            unoptimized
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="text-center p-4">
            <div className="text-4xl mb-2">🏠</div>
            <p className="text-gray-600 text-sm font-medium">{example.name}</p>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="text-center mb-3">
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary-600 transition-colors">
            {name}
          </h3>
          {subname && (
            <p className="text-xl font-normal text-gray-800 group-hover:text-primary-600 transition-colors">
              {subname}
            </p>
          )}
        </div>
        <p className="text-gray-600 text-sm leading-relaxed flex-grow">
          {example.description}
        </p>
      </div>
    </motion.div>
  );
}

