"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react"; // Import useCallback
import { motion, AnimatePresence } from "framer-motion";

// Define a type for a single case study item
interface CaseStudyItem {
  src: string;
  caption: string;
}

// Define a type for a single project
interface Project {
  title: string;
  category: string;
  image: string;
  caseStudies: CaseStudyItem[];
}

const projects: Project[] = [
  {
    title: "Orbit SaaS Redesign",
    category: "UI/UX Design",
    image: "/portfolio/orbit.jpg",
    caseStudies: [
      { src: "/portfolio/orbit-case-1.jpg", caption: "Home dashboard redesign" },
      { src: "/portfolio/orbit-case-2.jpg", caption: "User onboarding UI" },
      { src: "/portfolio/orbit-case-3.jpg", caption: "Analytics view" }
    ],
  },
  {
    title: "Nova Deck for Fintech",
    category: "Pitch Deck",
    image: "/portfolio/nova.jpg",
    caseStudies: [
      { src: "/portfolio/nova-case-1.jpg", caption: "Intro slide" },
      { src: "/portfolio/nova-case-2.jpg", caption: "Market Opportunity" }
    ],
  },
  {
    title: "Astro Brand System",
    category: "Branding",
    image: "/portfolio/astro.jpg",
    caseStudies: [
      { src: "/portfolio/astro-case-1.jpg", caption: "Logo and color scheme" }
    ],
  },
];

export default function PortfolioSection() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [index, setIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Memoize the next function
  const next = useCallback(() => {
    if (!selected) return;
    setIndex((i) => (i + 1) % selected.caseStudies.length);
  }, [selected]); // Dependency: selected

  // Memoize the prev function
  const prev = useCallback(() => {
    if (!selected) return;
    setIndex((i) => (i - 1 + selected.caseStudies.length) % selected.caseStudies.length);
  }, [selected]); // Dependency: selected

  useEffect(() => {
    // Clear any existing timer before setting a new one
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    if (selected) {
      timerRef.current = setInterval(() => {
        // Use the functional update form of setIndex when depending on 'index'
        // to avoid putting 'index' in the dependency array of the effect.
        setIndex((i) => (i + 1) % selected.caseStudies.length);
      }, 5000);
    } else {
      // When selected is null, clear the timer
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null; // Reset ref
      }
    }

    // Cleanup function for useEffect to clear the interval
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [selected]); // Removed 'next' here as 'setIndex' functional update doesn't depend on it

  useEffect(() => {
    const handler = (e: TouchEvent) => {
      if (!selected) return;
      if (e.touches.length === 1) {
        const start = e.touches[0].clientX;
        const handleEnd = (endEvent: TouchEvent) => {
          const end = endEvent.changedTouches[0].clientX;
          if (start - end > 50) next();
          else if (end - start > 50) prev();
        };
        window.addEventListener("touchend", handleEnd, { once: true });
      }
    };
    window.addEventListener("touchstart", handler);
    return () => window.removeEventListener("touchstart", handler);
  }, [selected, next, prev]); // Keep next and prev here as they are memoized functions

  return (
    <section className="py-24 px-4 sm:px-6 md:px-8 lg:px-12 bg-background text-foreground">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">Selected Work</h2>
        <p className="text-muted-foreground text-base max-w-xl mx-auto">
          A curated collection of high-impact visuals crafted for founders, SaaS teams, and digital brands.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.button
            key={i}
            onClick={() => { setSelected(project); setIndex(0); }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="group block w-full text-left rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-shadow"
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-sm text-white font-medium">View Case Study</span>
              </div>
            </div>
            <div className="px-4 py-4">
              <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
              <p className="text-sm text-muted-foreground">{project.category}</p>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ y: 40, scale: 0.98 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 40, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-background rounded-xl overflow-hidden shadow-xl max-w-3xl w-full max-h-[90vh] flex flex-col"
            >
              <div className="relative flex-grow flex-shrink-0 overflow-hidden">
                <Image
                  src={selected.caseStudies[index].src}
                  alt={selected.title + ` slide ${index + 1}`}
                  width={1200}
                  height={800}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-sm text-muted-foreground text-center px-4 py-2 bg-muted flex-shrink-0">
                {selected.caseStudies[index].caption}
              </p>
              <div className="flex justify-center gap-2 py-3 flex-shrink-0">
                {selected.caseStudies.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`w-3 h-3 rounded-full border ${
                      i === index ? "bg-primary" : "bg-muted-foreground/20"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
              <div className="absolute top-2 right-2 flex gap-2">
                <button
                  onClick={prev}
                  className="bg-muted text-muted-foreground px-3 py-1 rounded-md text-sm hover:bg-muted/80"
                >
                  Prev
                </button>
                <button
                  onClick={next}
                  className="bg-muted text-muted-foreground px-3 py-1 rounded-md text-sm hover:bg-muted/80"
                >
                  Next
                </button>
                <button
                  onClick={() => setSelected(null)}
                  className="bg-muted text-muted-foreground px-3 py-1 rounded-md text-sm hover:bg-muted/80"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}