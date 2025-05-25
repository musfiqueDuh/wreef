import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const services = [
  {
    title: "Brand Systems",
    description:
      "Cohesive logos, kits, and design assets built for consistency and scale.",
  },
  {
    title: "Landing Pages That Convert",
    description:
      "Beautiful, fast, and strategic — designed to turn visitors into buyers.",
  },
  {
    title: "Short-Form Video Content",
    description:
      "Scroll-stopping edits optimized for virality and lead capture.",
  },
  {
    title: "Pitch Decks that Win Deals",
    description:
      "Investor-ready decks that balance story, data, and visual flow.",
  },
  {
    title: "Content Strategy Design",
    description:
      "Templates and visuals tailored to your content calendar and goals.",
  },
  {
    title: "Launch Visuals + Campaign Kits",
    description:
      "From product drops to course launches — graphics that drive hype and clicks.",
  },
];

export default function WhatYouGetSection() {
  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-24 bg-muted/20 text-foreground">
      <div className="max-w-7xl mx-auto text-center mb-12 sm:mb-16 px-2">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
        >
          What You Get
        </motion.h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
          These aren’t just services. These are systems designed to grow revenue, build trust, and scale your brand with precision.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-background border border-border p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-lg transition"
          >
            <div className="flex items-start gap-3 mb-3">
              <CheckCircle className="w-5 h-5 text-primary mt-1" />
              <h3 className="text-base sm:text-lg font-semibold leading-tight">
                {service.title}
              </h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
