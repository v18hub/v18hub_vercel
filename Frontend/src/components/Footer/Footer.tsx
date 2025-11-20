import { Link } from "react-router-dom";
import { Instagram, Linkedin } from "lucide-react"; // lucide-react icons

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
    <footer className="bg-[#526B61] w-full text-gray-300 px-6 md:px-16 py-10">
      {/* Footer Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div className="flex flex-col">
          <h2 className="text-white text-3xl font-bold mb-4">v18hub</h2>
          <p className="text-[#F6F5ED] text-sm leading-relaxed">
            Advancing a collaborative ecosystem where talent, ideas, and industry come together to create meaningful impact.
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://www.instagram.com/v18hub/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-200"
              aria-label="v18hub on Instagram"
            >
              <Instagram size={28} strokeWidth={1.8} />
            </a>
            <a
              href="https://www.linkedin.com/company/v18hub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-200"
              aria-label="v18hub on LinkedIn"
            >
              <Linkedin size={28} strokeWidth={1.8} />
            </a>
          </div>
        </div>

        {/* Dynamic Sections */}
        {footerSections.map((section, i) => (
          <div key={i}>
            <h3 className="text-white font-semibold mb-4 text-xl">
              {section.title}
            </h3>
            <ul className="space-y-2 text-sm">
              {section.links.map((link, j) => (
                <li key={j}>
                  <Link
                    to={link.path}
                    className="text-[1rem] font-[450] hover:text-white text-gray-300 transition-colors duration-200 block"
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
      <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-[#F6F5ED] flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} v18hub. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/terms" className="hover:text-white transition">
            Terms & Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;