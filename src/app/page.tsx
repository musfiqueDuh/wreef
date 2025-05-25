
"use client";

import Image from "next/image";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";
import WYGSection from '../app/wyg';

export default function Home() {
  return (
    <>
      <section className="min-h-screen flex flex-col-reverse sm:flex-row items-center justify-between px-6 sm:px-12 py-24 gap-12 bg-background text-foreground">
        {/* LEFT TEXT BLOCK */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl text-center sm:text-left"
        >
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
            Design Systems That Sell.
          </h1>
          <p className="text-muted-foreground text-lg mb-6">
            I help founders grow with strategic visuals — from pitch decks and brand kits to short-form videos that convert.
          </p>
          <Button size="lg" className="text-base">
            Book a Free Strategy Call
          </Button>
        </motion.div>

        {/* RIGHT VISUAL BLOCK */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image
            src="/undraw_creative-flow_t3kz.svg"
            alt="Visual System Preview"
            width={520}
            height={420}
            className="rounded-2xl shadow-2xl border border-border"
          />
        </motion.div>
      </section>

      {/* Render the WYGSection component here */}
      <WYGSection />
    </>
  );
}