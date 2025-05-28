// app/about/page.jsx
"use client"; // REQUIRED: This directive makes the component a Client Component, necessary for Framer Motion

// REMOVED: import Image from "next/image"; // No longer needed for icons
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionContainer from "@/components/SectionContainer";

// IMPORT REACT ICONS
// You'll need to choose specific icons. Here are examples from different libraries within react-icons:
import { FaLaptopCode, FaSmileBeam, FaUsers, FaChartLine } from 'react-icons/fa'; // Example: Font Awesome icons
// Or if you prefer another style, e.g., Material Design Icons:
// import { MdOutlineWork, MdOutlineSentimentSatisfiedAlt, MdPeopleOutline, MdTrendingUp } from 'react-icons/md';


// --- Reusable Framer Motion Variants (no changes here) ---
const fadeInDown = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const fadeInParagraph = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay: 0.2 },
};

const slideInFromBottom = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { delay, duration: 0.6 },
});

// --- Testimonial Data (no changes here) ---
const testimonials = [
  {
    quote: "Working with Musfique was a turning point for our brand. His insights transformed our scattered visuals into a strong, cohesive identity that resonates with our audience.",
    client: "[Client A]",
    role: "Startup Founder"
  },
  {
    quote: "WreefX didn’t just deliver great design—they helped us rediscover our brand’s voice and stand out in a crowded market.",
    client: "[Client B]",
    role: "Small Business Owner"
  },
  {
    quote: "We saw an immediate improvement in customer engagement after our new website launched. The design was clean, strategic, and beautifully executed.",
    client: "[Client C]",
    role: "eCommerce Manager"
  },
];

// --- Metrics Data (UPDATED to use imported React Icon components) ---
const metrics = [
  {
    icon: FaLaptopCode, // Replaced string path with imported React Icon component
    alt: "Projects",
    value: "200+",
    label: "Projects Completed"
  },
  {
    icon: FaSmileBeam, // Replaced string path with imported React Icon component
    alt: "Satisfaction",
    value: "98%",
    label: "Client Satisfaction"
  },
  {
    icon: FaUsers, // Replaced string path with imported React Icon component
    alt: "Clients",
    value: "75%",
    label: "Repeat Clients"
  },
  {
    icon: FaChartLine, // Replaced string path with imported React Icon component
    alt: "Growth",
    value: "3%",
    label: "Engagement Growth"
  },
];

export default function AboutPage() {
  return (
    <section className="py-24 px-4 sm:px-6 md:px-8 lg:px-12 bg-background text-foreground space-y-20">
      {/* Hero Section */}
      <SectionContainer size="lg" className="text-center">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold mb-4"
          {...fadeInDown}
        >
          From Passion to Purpose: The Story Behind WreefX
        </motion.h1>
        <motion.p
          className="text-muted-foreground text-base sm:text-lg"
          {...fadeInParagraph}
        >
          I’m Musfique, and design has been my second language for over 7 years. What started as a hobby quickly grew into a deep passion—one that led me through late nights of experimenting, freelance gigs that challenged me, and client stories that reminded me why creativity matters.
        </motion.p>
      </SectionContainer>

      {/* Narrative Section */}
      <SectionContainer size="md" className="space-y-6">
        <motion.p {...slideInFromBottom(0.1)}>
          My journey as a freelancer wasn’t always linear, but it was deeply rewarding. I collaborated with clients across industries, delivered impactful results, and earned appreciation from people, mentees, and organizations alike. Along the way, I also mentored university club members, further shaping my understanding of design's role in storytelling and transformation.
        </motion.p>
        <motion.p {...slideInFromBottom(0.2)}>
          But freelancing also came with its limits—too solitary, too scattered, and not enough structure to scale the impact I wanted to create. That’s why I founded WreefX—a place where creativity meets strategy, and where we, as a team, bring clarity, consistency, and bold visual identity to every project.
        </motion.p>
      </SectionContainer>

      {/* What Makes WreefX Different */}
      <SectionContainer size="lg">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold mb-4 text-center"
          {...slideInFromBottom()}
        >
          What Makes WreefX Different
        </motion.h2>
        <motion.p className="text-muted-foreground mb-4" {...slideInFromBottom(0.1)}>
          At WreefX, we do more than just design—we align vision with visuals. Whether it’s a fresh brand identity for a startup, motion design for a campaign, or strategic UI/UX for a growing business, we bring strategic thinking, compelling storytelling, and handcrafted design to the table.
        </motion.p>
        <motion.p className="text-muted-foreground" {...slideInFromBottom(0.2)}>
          Our ideal clients are ambitious founders, small business owners, and growing brands who are tired of guesswork and crave a consistent, engaging, and professional presence. We help them stand out with clarity, confidence, and creativity. When you work with us, you don’t just get a design—you get a design partner.
        </motion.p>
      </SectionContainer>

      {/* Core Values */}
      <SectionContainer size="lg">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold mb-4 text-center"
          {...slideInFromBottom()}
        >
          Our Foundational Principles
        </motion.h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          {[
            'Clarity & Purpose: Every design choice we make is intentional and grounded in your goals.',
            'Collaborative Partnership: We listen deeply, co-create freely, and treat every project as a joint mission.',
            'Impactful Innovation: We blend creativity with strategy to craft designs that move people and grow brands.',
            'Integrity & Trust: Transparency, honesty, and reliability are baked into every stage of our process.',
            'Continual Growth: We stay curious, evolve with trends, and invest in our craft to serve you better.'
          ].map((valueText, i) => {
            const [title, description] = valueText.split(':');
            return (
              <motion.li key={i} {...slideInFromBottom(i * 0.05 + 0.1)}>
                <strong>{title}:</strong> {description}
              </motion.li>
            );
          })}
        </ul>
      </SectionContainer>

      {/* Mission & Vision */}
      <SectionContainer size="md" className="space-y-12 text-center">
        <motion.div {...slideInFromBottom()}>
          <h3 className="text-xl font-semibold mb-1">Mission Statement</h3>
          <p className="text-muted-foreground">
            Our mission is to empower startups, small businesses, and growing brands with purposeful design that drives recognition, trust, and growth.
          </p>
        </motion.div>
        <motion.div {...slideInFromBottom(0.2)}>
          <h3 className="text-xl font-semibold mb-1">Vision Statement</h3>
          <p className="text-muted-foreground">
            We envision a future where bold ideas meet beautiful design—and where our clients thrive through visual storytelling that inspires, connects, and endures.
          </p>
        </motion.div>
      </SectionContainer>

      {/* Metrics Section - Now with React Icons! */}
      <SectionContainer size="xl" className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center bg-muted p-8 rounded-2xl shadow-lg">
        {metrics.map((metric, i) => {
          const IconComponent = metric.icon; // Get the React Icon component
          return (
            <motion.div key={i} {...slideInFromBottom(i * 0.1)}>
              {/* Render the icon component directly */}
              <IconComponent className="mx-auto mb-2 text-primary" size={40} /> {/* Added text-primary for color */}
              <h3 className="text-4xl font-bold text-primary">{metric.value}</h3>
              <p className="text-muted-foreground text-sm">{metric.label}</p>
            </motion.div>
          );
        })}
      </SectionContainer>

      {/* Client Testimonials */}
      <SectionContainer size="lg" className="space-y-6">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold mb-4 text-center"
          {...slideInFromBottom()}
        >
          Trusted by Clients. Proven by Results.
        </motion.h2>
        {testimonials.map((t, i) => (
          <motion.blockquote
            key={i}
            className="border-l-4 pl-4 italic text-muted-foreground"
            {...slideInFromBottom(i * 0.1 + 0.1)}
          >
            “{t.quote}”
            <footer className="block font-semibold mt-2 text-sm not-italic">
              — {t.client}, {t.role}
            </footer>
          </motion.blockquote>
        ))}
      </SectionContainer>

      {/* CTA */}
      <SectionContainer size="sm" className="text-center">
        <motion.h3
          className="text-2xl font-bold mb-4"
          {...slideInFromBottom()}
        >
          Ready to Elevate Your Brand?
        </motion.h3>
        <motion.p className="text-muted-foreground mb-6" {...slideInFromBottom(0.1)}>
          WreefX isn’t just a design service—it’s a creative ally on your brand journey. Let’s build something meaningful, powerful, and visually unforgettable—together.
        </motion.p>
        <Button size="lg" className="text-base">
          Let’s Create Something Amazing Together
        </Button>
      </SectionContainer>
    </section>
  );
}