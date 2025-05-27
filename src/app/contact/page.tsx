

import Image from "next/image";

export default function ContactPage() {
  return (
    <section className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-stretch rounded-3xl overflow-hidden shadow-xl">
        {/* Left Form Block */}
        <div className="w-full lg:w-1/2 bg-muted px-6 sm:px-12 py-16 flex flex-col justify-center">
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              We’ll get your business set up in less than 24 hours.
            </h2>
            <p className="text-muted-foreground mb-8 text-sm sm:text-base">
              Sounds impossible, right? Wait until you see how easy it is to run your business on Wreef.
            </p>

            <form className="space-y-5">
              <div>
                <label className="block text-sm mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-3 py-2 border border-border rounded-md bg-background"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-3 py-2 border border-border rounded-md bg-background"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Phone</label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-3 py-2 border border-border rounded-md bg-background"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">How can we help?</label>
                <textarea
                  rows={4}
                  placeholder="Describe your project..."
                  className="w-full px-3 py-2 border border-border rounded-md bg-background"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
              >
                Get started
              </button>
            </form>

            <p className="mt-6 text-xs text-muted-foreground">
              Prefer email? <a href="mailto:hello@wreef.com" className="underline">hello@wreef.com</a>
            </p>
          </div>
        </div>

        {/* Right Image/Testimonial */}
        <div className="w-full lg:w-1/2 relative">
          <Image
            src="/contact-hero.jpg"
            alt="Happy customer"
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <blockquote className="text-lg sm:text-xl font-semibold">
              “Wreef has everything we need on one platform. Now I can just focus on growing my business.”
            </blockquote>
            <div className="mt-2 text-sm">
              <span className="font-medium">Jessica Nightingale</span>, Owner, Chibi Nursery
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
