import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function CallToActionSection() {
  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-24 bg-primary text-primary-foreground text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Ready to Build Something That Converts?
        </h2>
        <p className="text-base sm:text-lg mb-8">
          Let’s turn your vision into visuals that drive results. Book your free strategy call now.
        </p>
        <Button size="lg" className="bg-destructive text-base font-medium">
          Book a Free Strategy Call
        </Button>
      </motion.div>
    </section>
  );
}
