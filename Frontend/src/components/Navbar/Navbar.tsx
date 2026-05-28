// src/components/Navbar/Navbar.tsx
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const toSlug = (s: string) =>
  s.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "");

/**
 * PROGRAMS submenu config — single source of truth.
 */
export const PROGRAM_TYPES: { label: string; slug: string }[] = [
  { label: "Workshops",       slug: "workshops"       },
  { label: "Bootcamps",       slug: "bootcamps"       },
  { label: "Preview Cohorts", slug: "preview-cohorts" },
  { label: "Cohorts",         slug: "cohorts"         },
  { label: "Webinars",        slug: "webinars"        },
];

const Navbar = () => {
  const [hoverSelected, setHoverSelected] = useState<string | null>(null);
  const [clickSelected, setClickSelected] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const location = useLocation();

  const handleNavClick = (title: string) => {
    setClickSelected(title);
    setHoverSelected(null);
    setDrawerOpen(false);
  };

  /**
   * Menu structure
   */
  const menuItems: [string, string[]?][] = [
    ["Our Community", ["Learners", "Educators", "Industry-Partners", "Mentors"]],
    ["Why-Us?"],
    ["Programs", PROGRAM_TYPES.map((p) => p.label)],
    ["Our Mentors"],
    ["Resources", ["Blogs", "News"]],
    ["About", ["Our-Story", "Career", "Contact-Us"]],
  ];

  // Active menu highlighting
  useEffect(() => {
    const currentPath = location.pathname.toLowerCase().replace(/\/+$/, "");

    const match = menuItems.find(([title, subs]) => {
      if (title === "Our Community") {
        return currentPath.startsWith("/our-community");
      }

      if (title === "Programs" && currentPath.startsWith("/programs")) {
        return true;
      }

      if (title === "Our Mentors" && currentPath === "/our-mentors") {
        return true;
      }

      if (title === "About") {
        return currentPath.startsWith("/about");
      }

      if (title === "Resources") {
        return currentPath.startsWith("/resources");
      }

      const slug = toSlug(title);
      const parentPath = `/${slug}`;

      if (currentPath === parentPath) return true;

      if (subs && subs.length) {
        return subs.some((sub) => {
          const subSlug = toSlug(sub);
          return currentPath.startsWith(`/${slug}/${subSlug}`);
        });
      }

      return false;
    });

    setClickSelected(match ? match[0] : null);
  }, [location.pathname]);

  return (
    <nav
      aria-label="Main navigation"
      className="cursor-pointer px-[1.5rem] flex lg:justify-stretch lg:gap-[21vw] justify-between items-center h-[72px] w-full relative z-[1000] bg-white"
    >
      {/* LOGO */}
      <Link
        to="/"
        onClick={() => setClickSelected(null)}
        aria-label="v18hub — go to homepage"
        className="flex items-center hover:opacity-90 transition-opacity"
      >
        <img
          src="/logo/logo_v18hub_header.png"
          alt="v18hub logo"
          className="h-14 w-auto object-contain drop-shadow-sm"
        />
      </Link>

      {/* ====================== DESKTOP MENU ====================== */}
      <div className="hidden lg:flex items-center justify-center gap-[2rem] text-[1.1rem] p-2 relative">
        {menuItems.map(([title, subItems]) => {
          const hasSubmenu = Array.isArray(subItems) && subItems.length > 0;
          const isPrograms = title === "Programs";
          const isOurCommunity = title === "Our Community";
          const isAbout = title === "About";
          const isResources = title === "Resources";
        
          const mainPath = isOurCommunity || isAbout || isResources
            ? "#" 
            : isPrograms ? "/programs" 
            : `/${toSlug(title)}`;

          return (
            <div
              key={title}
              className="relative flex flex-col items-center"
              onMouseEnter={() => setHoverSelected(title)}
              onMouseLeave={() => setHoverSelected(null)}
            >
              <Link
                to={mainPath}
                onClick={(e) => {
                  if (isOurCommunity || isAbout || isResources) e.preventDefault();
                  handleNavClick(title);
                }}
                aria-current={clickSelected === title ? "page" : undefined}
                className={`flex flex-col items-center p-2 font-[700] transition-colors ${
                  clickSelected === title ? "text-[#294b3c]" : "text-[#a5b6ae]"
                }`}
              >
                <span className="leading-none">{title}</span>
                <div
                  className={`h-[2px] w-full mt-1 transition-all duration-300 ${
                    hoverSelected === title ? "bg-[#294b3c] rounded-2xl" : "bg-transparent"
                  }`}
                />
              </Link>

              {/* Submenu Dropdown */}
              {hasSubmenu && hoverSelected === title && (
                <div
                  role="menu"
                  aria-label={`${title} submenu`}
                  className="absolute top-full left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-2xl py-4 w-[13rem] flex flex-col items-stretch z-50"
                >
                  {subItems!.map((sub) => {
                    const subSlug = isPrograms
                      ? (PROGRAM_TYPES.find((p) => p.label === sub)?.slug ?? toSlug(sub))
                      : toSlug(sub);

                    const targetPath = isPrograms
                      ? `/programs/${subSlug}`
                      : isAbout
                      ? `/about/${subSlug}`
                      : isResources
                      ? `/resources/${subSlug}`
                      : `/our-community/${subSlug}`;

                    return (
                      <Link
                        key={sub}
                        to={targetPath}
                        role="menuitem"
                        onClick={() => handleNavClick(title)}
                        className="font-medium px-4 py-2 hover:bg-[#294b3c] hover:text-[#f6f5ec] cursor-pointer whitespace-nowrap transition-colors duration-200"
                      >
                        {sub}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ====================== MOBILE MENU ====================== */}
      <div className="lg:hidden block">
        <button
          aria-label="Open navigation menu"
          aria-expanded={drawerOpen}
          aria-controls="mobile-drawer"
          onClick={() => setDrawerOpen(true)}
        >
          <Menu size={28} className="cursor-pointer" />
        </button>

        {/* Backdrop */}
        {drawerOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40"
            aria-hidden="true"
            onClick={() => setDrawerOpen(false)}
          />
        )}

        {/* Drawer */}
        <div
          id="mobile-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className={`fixed top-0 left-0 h-screen w-[80vw] max-w-[320px] bg-white z-50 shadow-lg transform transition-transform duration-300 ${
            drawerOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-4 border-b border-[#294b3c]">
            <div className="font-extrabold text-lg text-black">v18hub</div>
            <button
              aria-label="Close navigation menu"
              onClick={() => setDrawerOpen(false)}
            >
              <X size={26} className="cursor-pointer text-black" />
            </button>
          </div>

          <div className="flex flex-col p-4 space-y-2">
            {menuItems.map(([title, subItems]) => {
              const hasSubmenu = Array.isArray(subItems) && subItems.length > 0;
              const isPrograms = title === "Programs";
              const isOurCommunity = title === "Our Community";
              const isAbout = title === "About";
              const isResources = title === "Resources";

              const mainPath = isOurCommunity || isAbout || isResources
                ? "#" 
                : isPrograms ? "/programs" 
                : `/${toSlug(title)}`;

              return (
                <div key={title}>
                  <Link
                    to={mainPath}
                    onClick={(e) => {
                      if (isOurCommunity || isAbout || isResources) e.preventDefault();
                      handleNavClick(title);
                    }}
                    className={`p-2 cursor-pointer font-[650] block ${
                      clickSelected === title ? "text-[#294b3c]" : "text-[#a5b6ae]"
                    }`}
                  >
                    {title}
                  </Link>

                  {hasSubmenu && (
                    <div className="mt-1 flex flex-col gap-1 pl-6">
                      {subItems!.map((sub) => {
                        const subSlug = isPrograms
                          ? (PROGRAM_TYPES.find((p) => p.label === sub)?.slug ?? toSlug(sub))
                          : toSlug(sub);

                        const targetPath = isPrograms
                          ? `/programs/${subSlug}`
                          : isAbout
                          ? `/about/${subSlug}`
                          : isResources
                          ? `/resources/${subSlug}`
                          : `/our-community/${subSlug}`;

                        return (
                          <Link
                            key={sub}
                            to={targetPath}
                            onClick={() => handleNavClick(title)}
                            className="px-2 py-1 font-medium text-sm text-[#294b3c] hover:text-[#f6f5ec] hover:bg-[#294b3c] rounded transition-colors duration-200"
                          >
                            {sub}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;