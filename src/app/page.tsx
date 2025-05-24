"use client";

import Image from "next/image";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col-reverse sm:flex-row items-center justify-center px-6 sm:px-12 py-12 gap-12 bg-background text-foreground">
      
      {/* TEXT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl text-center sm:text-left"
      >
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
          Designs that Speak. <br /> Results that Sell.
        </h1>
        <p className="text-muted-foreground text-lg mb-6">
          I craft high-converting visuals for modern brands—from pitch decks to product interfaces—with strategy baked in.
        </p>
        <Button size="lg">Let’s Work Together</Button>
      </motion.div>

      {/* IMAGE SIDE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Image
          src="/hero.png"
          alt="Portfolio showcase"
          width={500}
          height={400}
          className="rounded-2xl shadow-xl"
        />
      </motion.div>
    </section>
  );
}
