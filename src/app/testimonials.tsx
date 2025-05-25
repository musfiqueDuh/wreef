import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image"; // <--- ADDED: Import Image component

const testimonials = [
  {
    name: "Sara Malik",
    role: "Founder, Bloom AI",
    stars: 5,
    quote:
      "Absolutely loved working with this team. The design output is clean, effective, and most importantly, it sells.",
    featured: true,
    avatar: "/undraw_a-woman-avatar_ifsl.svg"
  },
  {
    name: "Devon Lee",
    role: "Head of Product, Flowlab",
    stars: 4,
    quote:
      "We launched with confidence thanks to the decks and landing pages. Fast, strategic, and pixel-perfect.",
    avatar: "/undraw_a-woman-avatar_ifsl.svg"
  },
  {
    name: "Angela Reyes",
    role: "Creator & Coach",
    stars: 5,
    quote:
      "Every reel, thumbnail and banner is on-brand and conversion-focused. It feels like having an in-house designer.",
    avatar: "/undraw_a-woman-avatar_ifsl.svg"
  }
];

export default function WhatYouGetSection() {
  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 bg-background text-foreground">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3"
        >
          What People Say
        </motion.h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
          Trusted by creators, founders, and growth teams around the world.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative bg-muted border border-border rounded-2xl p-6 sm:p-8 shadow-lg h-full ${t.featured ? "ring-2 ring-primary" : ""}`}
          >
            <div className="absolute top-4 right-4 text-muted-foreground opacity-30">
              <Quote className="w-6 h-6" />
            </div>

            <div className="flex items-center gap-2 mb-3">
              {Array.from({ length: t.stars }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
                >
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                </motion.div>
              ))}
            </div>

            {/* FIX 1: Use HTML entity for the quote mark */}
            <p className="text-muted-foreground text-sm sm:text-base mb-4">
              &quot;{t.quote}&quot;
            </p>

            <div className="flex items-center gap-3 text-left">
              {/* FIX 2: Use Next.js Image component */}
              <Image
                src={t.avatar}
                alt={t.name}
                width={40} // Added explicit width (matching w-10 class)
                height={40} // Added explicit height (matching h-10 class)
                className="w-10 h-10 rounded-full object-cover border"
              />
              <div>
                <p className="font-semibold text-sm leading-tight">{t.name}</p>
                <p className="text-xs text-muted-foreground leading-none">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}