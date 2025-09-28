/**
 * Modern footer component with enhanced design and social media links
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Facebook", href: "#", icon: "📘" },
    { name: "Twitter", href: "#", icon: "🐦" },
    { name: "Instagram", href: "#", icon: "📷" },
    { name: "LinkedIn", href: "#", icon: "💼" },
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Vanilla Info", href: "/vanilla" },
    { name: "Survey", href: "/survey" },
    { name: "Contact", href: "/contact" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ];

  return (
    <footer
      className="text-vanilla-cream relative overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom right, #5C4033, rgba(92, 64, 51, 0.95), #5C4033)",
      }}
      role="contentinfo"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(250,243,224,0.3)_1px,transparent_0)] bg-[length:30px_30px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3 group">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                style={{
                  background:
                    "linear-gradient(to bottom right, #6B8E23, #FAF3E0)",
                }}
              >
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <div>
                <span className="font-serif font-bold text-2xl text-vanilla-cream">
                  Vanilla Experts
                </span>
                <p className="text-vanilla-cream/60 text-sm">Premium Quality</p>
              </div>
            </div>

            <p className="text-vanilla-cream/80 leading-relaxed max-w-md">
              Dedicated to sharing knowledge about vanilla cultivation and
              quality. We're passionate about bringing you the finest vanilla
              experiences.
            </p>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-vanilla-cream">Stay Updated</h4>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-vanilla-cream/10 border border-vanilla-cream/20 text-vanilla-cream placeholder-vanilla-cream/60 focus:outline-none focus:ring-2 focus:ring-vanilla-green focus:border-transparent"
                />
                <button className="px-6 py-2 bg-vanilla-green hover:bg-vanilla-cream text-vanilla-brown hover:text-vanilla-brown rounded-lg font-medium transition-all duration-300 hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-serif font-semibold text-xl text-vanilla-cream">
              Quick Links
            </h3>
            <nav
              className="space-y-3"
              role="navigation"
              aria-label="Footer navigation"
            >
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-vanilla-cream/80 hover:text-vanilla-green transition-all duration-300 hover:translate-x-1 group"
                >
                  <span className="group-hover:mr-2 transition-all duration-300">
                    →
                  </span>
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="space-y-6">
            <h3 className="font-serif font-semibold text-xl text-vanilla-cream">
              Connect
            </h3>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:info@vanillaexperts.com"
                className="block text-vanilla-cream/80 hover:text-vanilla-green transition-colors duration-300 group"
              >
                <span className="mr-2">📧</span>
                info@vanillaexperts.com
              </a>
              <p className="text-vanilla-cream/80 group">
                <span className="mr-2">📍</span>
                We'd love to hear from you!
              </p>
            </div>

            {/* Social Media */}
            <div className="space-y-3">
              <h4 className="font-medium text-vanilla-cream">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-vanilla-cream/10 hover:bg-vanilla-green rounded-lg flex items-center justify-center text-vanilla-cream hover:text-vanilla-brown transition-all duration-300 hover:scale-110 hover:rotate-6"
                    aria-label={social.name}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-vanilla-cream/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-vanilla-cream/60">
              © {currentYear} Vanilla Experts. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              {legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-vanilla-cream/60 hover:text-vanilla-green transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
