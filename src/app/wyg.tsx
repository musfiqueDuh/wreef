import Image from 'next/image';
import { motion } from "framer-motion";
import { CheckCircle, Target } from "lucide-react";

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

const portfolio = [
  {
    image: "/portfolio-1.jpg",
    title: "Modern SaaS Branding",
    result: "+28% conversion after redesign",
  },
  {
    image: "/portfolio-2.jpg",
    title: "Fitness Funnel Landing Page",
    result: "Launched to 15K+ visitors in 3 days",
  },
  {
    image: "/portfolio-3.jpg",
    title: "Instagram Reels Campaign",
    result: "1.2M organic reach in 7 days",
  },
];

const targetClients = [
  "Founders building premium product brands",
  "Agencies that need design systems on autopilot",
  "Creators and course sellers scaling content",
  "Startups preparing for funding rounds",
  "Marketers needing brand-consistent assets",
  "Anyone tired of generic templates that don’t convert",
];

export default function WhatYouGetSection() {
  return (
    <>
      {/* What You Get */}
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
              transition={{ duration: 0.5, delay: 0.1 * index }}
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

      {/* Portfolio Section */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-24 bg-background text-foreground">
        <div className="max-w-7xl mx-auto text-center mb-12 px-2">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
          >
            Real Work. Real Results.
          </motion.h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Here’s a glimpse of what my clients launch with.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {portfolio.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="overflow-hidden rounded-2xl shadow-md border border-border bg-muted group relative"
            >
              <Image
  src="/path/to/image.jpg"
  alt="Description"
  width={500} // IMPORTANT: You MUST provide width and height or use `fill` prop
  height={300} // based on the actual dimensions of your image or desired layout
/>
              <div className="p-5 relative z-10">
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground relative inline-block px-3 py-1 rounded-lg border bg-background backdrop-blur-md animate-pulse-border">
                  {/* The text remains static inside */}
                  {item.result}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 sm:py-28 bg-muted/10 text-foreground">
        <div className="max-w-4xl mx-auto text-center mb-12 px-2">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
          >
            Who This Is For
          </motion.h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            You’ll get the most out of this if you see your brand as a business — not just an aesthetic.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {targetClients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-start gap-3 bg-background border border-border rounded-xl p-4 shadow-sm"
            >
              <Target className="text-primary w-5 h-5 mt-1" />
              <p className="text-sm sm:text-base text-foreground leading-relaxed">
                {client}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}