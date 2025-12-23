// src/components/Footer/Footer.tsx
import { Link } from "react-router-dom";
import { Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { name: "About Us", path: "/about/our-story" },
        { name: "Contact", path: "/about/contact-us" },
        { name: "Programs", path: "/explore-cohorts" },
        { name: "Why Us", path: "/why-us" },
      ],
    },
    {
      title: "Our Community",
      links: [
        { name: "Learners", path: "/ourcommunity/learners" },
        { name: "Educators", path: "/ourcommunity/educators" },
        { name: "Industry Partners", path: "/ourcommunity/industry-partners" },
        { name: "Mentors", path: "/ourcommunity/mentors" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blogs", path: "/resources/blogs" },
        { name: "News", path: "/resources/news" },
        { name: "Career", path: "/about/career" },
      ],
    },
  ];

  return (
    <footer className="bg-[#526B61] w-full text-[#f6f5ec] px-6 md:px-16 py-10">
      {/* Top CTA Section */}
      <div className="bg-[#a5b6ae] py-12 shadow-2xl shadow-[#8d9d95]/20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-[#6A1F1B] font-bold text-2xl md:text-3xl leading-tight">
            Let’s build the future of learning together
          </h3>

          <p className="mt-4 text-[#6A1F1B] font-semibold text-lg md:text-xl opacity-90">
            Whether you're a learner, educator, mentor, or industry partner -
            <br className="hidden sm:inline" /> we’d love to connect with you.
          </p>

          {/* Updated Button: Rectangular with rounded corners (matches site style) */}
          <div className="mt-8 flex flex-col sm:flex-row gap-5 items-center justify-center">
            <a
              href="https://forms.gle/4taMerBY4pG1herR7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#6A1F1B] text-[#f6f5ec] font-bold py-3.5 px-10 rounded-lg hover:bg-[#8B2E24] transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <span>Fill the Form</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>

            <a
              href="mailto:contact@v18hub.in"
              className="inline-flex items-center gap-2.5 text-[#6A1F1B] font-bold text-lg underline underline-offset-4 hover:no-underline transition"
            >
              contact@v18hub.in
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 pt-10">
        {/* Brand */}
        <div className="flex flex-col">
          <Link to="/" className="mb-4">
            <img
              src="/logo/logo_v18hub_footer.png"
              alt="v18hub"
              className="h-10 w-auto"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.nextElementSibling?.classList.remove("hidden");
              }}
            />
            <span className="hidden text-white text-3xl font-bold">v18hub</span>
          </Link>
          <p className="text-[#f6f5ec]/90 text-sm leading-relaxed">
            Advancing a collaborative ecosystem where talent, ideas, and industry come together to create meaningful impact.
          </p>

          <div className="flex gap-4 mt-6">
            <a href="https://www.instagram.com/v18hub/" target="_blank" rel="noopener noreferrer" className="text-[#f6f5ec] hover:text-white transition-colors" aria-label="Instagram">
              <Instagram size={28} strokeWidth={1.8} />
            </a>
            <a href="https://www.linkedin.com/company/v18hub" target="_blank" rel="noopener noreferrer" className="text-[#f6f5ec] hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin size={28} strokeWidth={1.8} />
            </a>
          </div>
        </div>

        {/* Footer Columns */}
        {footerSections.map((section, i) => (
          <div key={i}>
            <h3 className="text-[#f6f5ec] font-semibold mb-4 text-xl">
              {section.title}
            </h3>
            <ul className="space-y-2 text-sm">
              {section.links.map((link, j) => (
                <li key={j}>
                  <Link
                    to={link.path}
                    className="text-[#f6f5ec]/80 hover:text-white transition-colors duration-200 block text-[0.95rem]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#f6f5ec]/30 mt-10 pt-6 text-xs text-[#f6f5ec]/80 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} v18hub. All rights reserved.</p>
        <div className="flex gap-6 text-xs">
          <Link to="/terms" className="hover:text-white transition">Terms & Privacy</Link>
          <span className="text-[#f6f5ec]/60">•</span>
          <Link to="/credits" className="hover:text-white transition">Image Credits</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;