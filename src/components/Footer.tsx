import { Youtube, Instagram, Facebook, Heart } from "lucide-react";

const socialLinks = [
  { name: "YouTube", icon: Youtube, href: "https://youtube.com" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/sankalpavidya?igsh=MWxsZ2h6bnVoNm9rNw%3D%3D" },
  { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
];

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Books", href: "#books" },
  { name: "Videos", href: "#videos" },
  { name: "Blog", href: "#blog" },
  { name: "Support", href: "#support" },
  { name: "Contact", href: "#contact" },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-charcoal text-cream">
      <div className="container-width section-padding !py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-semibold mb-4">
              Sankalpa Vidya
            </h3>
            <p className="text-cream/70 text-sm leading-relaxed mb-6">
              Guiding souls on their journey to inner peace, 
              spiritual growth, and conscious living through 
              ancient wisdom and modern practices.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-primary hover:text-charcoal transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="text-cream/70 hover:text-primary text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">
              Stay Connected
            </h4>
            <p className="text-cream/70 text-sm mb-4">
              Subscribe for spiritual insights, new book releases, and wellness tips.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-md bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/50 text-sm focus:outline-none focus:border-primary transition-colors"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-primary text-charcoal rounded-md text-sm font-medium hover:bg-gold-light transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-cream/60">
          <p>© {new Date().getFullYear()} Sankalpa Vidya. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-primary" fill="currentColor" /> for spiritual seekers
          </p>
        </div>
      </div>
    </footer>
  );
}
