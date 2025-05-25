import { Facebook, Twitter, Instagram } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="bg-background border-t border-border pt-12 pb-6 px-6 sm:px-12 text-foreground">
      {/* Newsletter Bar */}
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h4 className="text-xl font-semibold mb-2">Stay in the loop</h4>
        <p className="text-sm text-muted-foreground mb-4">
          Get design tips, project updates, and early access to new services.
        </p>
        <form className="flex flex-col sm:flex-row gap-3 justify-center">
          <input
            type="email"
            placeholder="you@example.com"
            className="px-4 py-2 rounded-md border border-border bg-background text-sm w-full sm:w-auto focus:outline-none focus:ring focus:ring-primary"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90"
          >
            Subscribe
          </button>
        </form>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Logo + tagline */}
        <div>
          <div className="text-2xl font-bold mb-2">wreef</div>
          <p className="text-sm text-muted-foreground max-w-sm">
            Strategic visuals crafted to grow your brand, systemize your message, and sell your offer.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-sm uppercase text-muted-foreground mb-2">
            Links
          </span>
          <a href="#" className="hover:underline text-sm">Home</a>
          <a href="#" className="hover:underline text-sm">Work</a>
          <a href="#" className="hover:underline text-sm">About</a>
          <a href="#" className="hover:underline text-sm">Contact</a>
        </div>

        {/* Socials */}
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-sm uppercase text-muted-foreground mb-2">
            Connect
          </span>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook" className="hover:text-primary">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-primary">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-primary">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} wreefX. All rights reserved.
      </div>
    </footer>
  );
}
