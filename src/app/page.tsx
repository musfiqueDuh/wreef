"use client";

import Image from "next/image";
import { Button } from "../components/ui/button";
import { motion, useAnimation } from "framer-motion"; // Import useAnimation

export default function Home() {
  // We'll manage the glow animation separately
  const glowControls = useAnimation();

  // Define the glow's gradient colors
  const gradientColors = {
    on: "linear-gradient(to right, #a78bfa30, #ec489930, #ef444430)", // Glowing state gradient
    off: "linear-gradient(to right, transparent, transparent)", // Transparent when not glowing
  };

  // Function to start the glow animation
  const startGlow = () => {
    glowControls.start({
      background: gradientColors.on,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    });
  };

  // Function to stop the glow animation
  const stopGlow = () => {
    glowControls.start({
      background: gradientColors.off, // Animate back to transparent
      opacity: 0, // Ensure it becomes fully transparent
      transition: { duration: 0.3, ease: "easeOut" },
    });
  };


  return (
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
          I help founders grow with strategic visuals — from pitch decks and
          brand kits to short-form videos that convert.
        </p>
        <Button size="lg" className="text-base">
          Book a Free Strategy Call
        </Button>
      </motion.div>

      {/* RIGHT VISUAL BLOCK */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        whileHover={{ scale: 1.02, rotateZ: 1 }} // Keep the image hover effect for desktop
        whileTap={{ scale: 1.02, rotateZ: 1 }} // Apply same visual effect on tap for mobile
        onMouseEnter={startGlow} // Start glow on mouse enter (desktop)
        onMouseLeave={stopGlow}  // Stop glow on mouse leave (desktop)
        onTouchStart={startGlow} // Start glow on touch start (mobile)
        onTouchEnd={stopGlow}    // Stop glow on touch end (mobile)
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="relative"
      >
        {/* Glow Blur - MODIFIED for controlled animation */}
        <motion.div
          className="absolute -inset-4 blur-2xl rounded-2xl z-[-1]"
          initial={{ background: gradientColors.off, opacity: 0 }} // Start invisible
          animate={glowControls} // Control this div with glowControls
        ></motion.div>

        {/* Optional floating badge */}
        <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-full shadow-sm">
          Live Visual Preview
        </div>

        <Image
          src="/undraw_creative-flow_t3kz.svg"
          alt="Placeholder design system"
          width={520}
          height={420}
          className="rounded-2xl shadow-2xl border border-border object-cover"
          priority
        />
      </motion.div>
    </section>
  );
}