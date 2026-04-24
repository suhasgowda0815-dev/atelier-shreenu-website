"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

// Each image should showcase a DIFFERENT quality of the practice.
// Add more entries for a richer scroll — the carousel loops seamlessly.
const textures = [
  { src: "/images/texture/01.jpg", alt: "Material — weathered wood detail", label: "Material" },
  { src: "/images/texture/02.jpg", alt: "Light — morning through a courtyard", label: "Light" },
  { src: "/images/texture/03.jpg", alt: "Craft — hand-finished ceramic", label: "Craft" },
  { src: "/images/texture/04.jpg", alt: "Texture — handwoven linen", label: "Texture" },
  { src: "/images/texture/05.jpg", alt: "Structure — stone and shadow", label: "Structure" },
];

export function MaterialStrip() {
  const [paused, setPaused] = useState(false);
  // Duplicate the array so the loop feels infinite
  const loop = [...textures, ...textures];

  return (
    <section className="overflow-hidden bg-ink py-20 text-bone md:py-28">
      <Container>
        <FadeIn>
          <div className="mb-12 flex items-center gap-4">
            <div className="h-px w-12 bg-bone/40" />
            <span className="text-micro text-bone/70">Material & Detail</span>
          </div>
        </FadeIn>
      </Container>

      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <motion.div
          className="flex gap-3 md:gap-4"
          animate={{ x: paused ? undefined : ["0%", "-50%"] }}
          transition={{
            duration: 45,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {loop.map((t, i) => (
            <div
              key={i}
              className="group relative aspect-[3/4] w-[65vw] shrink-0 overflow-hidden md:w-[28vw] lg:w-[22vw]"
            >
              <Image
                src={t.src}
                alt={t.alt}
                fill
                className="object-cover transition-transform duration-[1200ms] ease-soft-out group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 65vw, 28vw"
              />
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/70 to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="text-micro text-bone">{t.label}</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Soft fade at edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink to-transparent" />
      </div>
    </section>
  );
}