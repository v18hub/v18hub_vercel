// src/components/Navbar/Navbar.tsx
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const toSlug = (s: string) =>
  s.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "");

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

  const menuItems: [string, string[]?][] = [
    ["OurCommunity", ["Learners", "Educators", "Industry-Partners", "Mentors"]],
    ["Why-Us?"],
    ["Programs", ["Industry Cohorts", "Applied Cohorts", "Foundational Cohorts", "Webinars"]],
    ["Resources", ["Blogs", "News"]],
    ["About", ["Our-Story", "Career", "Contact-Us"]],
  ];

  useEffect(() => {
    const currentPath = location.pathname.toLowerCase().replace(/\/+$/, "");

    if (currentPath.startsWith("/registration/")) {
      setClickSelected("OurCommunity");
      setHoverSelected(null);
      setDrawerOpen(false);
      return;
    }

    const match = menuItems.find(([title, subs]) => {
      const slug = toSlug(title);
      const parentPath = `/${slug}`;

      // Exact match on parent path
      if (currentPath === parentPath) return true;

      // Special case: highlight "Programs" on /explore-cohorts (with or without ?section)
      if (title === "Programs" && currentPath === "/explore-cohorts") {
        return true;
      }

      // Submenu items
      if (subs && subs.length) {
        return subs.some((sub) => {
          const subSlug = toSlug(sub);
          return currentPath.startsWith(`/${slug}/${subSlug}`);
        });
      }

      return false;
    });

    setClickSelected(match ? match[0] : null);
    setHoverSelected(null);
    setDrawerOpen(false);
  }, [location.pathname]);

  return (
    <div className="cursor-pointer px-[1.5rem] flex lg:justify-stretch lg:gap-[21vw] justify-between items-center h-[72px] w-full relative z-[1000] bg-white">
      {/* LOGO */}
      <Link
        to="/"
        onClick={() => setClickSelected(null)}
        className="flex items-center hover:opacity-90 transition-opacity"
      >
        <img
          src="/logo/logo_v18hub_header.png"
          alt="v18hub logo"
          className="h-14 w-auto object-contain drop-shadow-sm"
        />
      </Link>

      {/* DESKTOP MENU */}
      <div className="hidden lg:flex items-center justify-center gap-[2rem] text-[1.1rem] p-2 relative">
        {menuItems.map(([title, subItems]) => {
          const hasSubmenu = Array.isArray(subItems) && subItems.length > 0;
          const slug = toSlug(title);
          const isPrograms = title === "Programs";
          const mainPath = isPrograms && hasSubmenu ? "/explore-cohorts" : `/${slug}`;

          return (
            <div
              key={title}
              className="relative flex flex-col items-center"
              onMouseEnter={() => setHoverSelected(title)}
              onMouseLeave={() => setHoverSelected(null)}
            >
              <Link
                to={mainPath}
                onClick={() => handleNavClick(title)}
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

              {hasSubmenu && hoverSelected === title && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-2xl py-4 w-[13rem] flex flex-col items-stretch z-50">
                  {subItems!.map((sub) => {
                    const sectionSlug = toSlug(sub);
                    const targetPath = isPrograms
                      ? `/explore-cohorts?section=${sectionSlug}`
                      : `/${slug}/${sectionSlug}`;

                    return (
                      <Link
                        key={sub}
                        to={targetPath}
                        onClick={(e) => {
                          handleNavClick(title);

                          // If already on this exact URL → force scroll to section
                          const currentFullPath = location.pathname + location.search;
                          if (currentFullPath === targetPath) {
                            e.preventDefault();
                            const targetId = `section-${sectionSlug}`;
                            const el = document.getElementById(targetId);
                            if (el) {
                              el.scrollIntoView({ behavior: "smooth", block: "start" });
                              // Optional: adjust for fixed navbar height if needed
                              // window.scrollBy(0, -80);
                            }
                          }
                        }}
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

      {/* MOBILE DRAWER */}
      <div className="lg:hidden block">
        <Menu size={28} className="cursor-pointer" onClick={() => setDrawerOpen(true)} />

        {drawerOpen && (
          <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setDrawerOpen(false)} />
        )}

        <div
          className={`fixed top-0 left-0 h-screen w-[80vw] max-w-[320px] bg-white z-50 shadow-lg transform transition-transform duration-300 ${
            drawerOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-4 border-b border-[#294b3c]">
            <div className="font-extrabold text-lg text-black">v18hub</div>
            <X size={26} className="cursor-pointer text-black" onClick={() => setDrawerOpen(false)} />
          </div>

          <div className="flex flex-col p-4 space-y-2">
            {menuItems.map(([title, subItems]) => {
              const hasSubmenu = Array.isArray(subItems) && subItems.length > 0;
              const slug = toSlug(title);
              const isPrograms = title === "Programs";
              const mainPath = isPrograms && hasSubmenu ? "/explore-cohorts" : `/${slug}`;

              return (
                <div key={title}>
                  <Link
                    to={mainPath}
                    onClick={() => handleNavClick(title)}
                    className={`p-2 cursor-pointer font-[650] block ${
                      clickSelected === title ? "text-[#294b3c]" : "text-[#a5b6ae]"
                    }`}
                  >
                    {title}
                  </Link>

                  {hasSubmenu && (
                    <div className="mt-1 flex flex-col gap-1 pl-6">
                      {subItems!.map((sub) => {
                        const sectionSlug = toSlug(sub);
                        const targetPath = isPrograms
                          ? `/explore-cohorts?section=${sectionSlug}`
                          : `/${slug}/${sectionSlug}`;

                        return (
                          <Link
                            key={sub}
                            to={targetPath}
                            onClick={(e) => {
                              handleNavClick(title);

                              // If already on this exact URL → force scroll to section
                              const currentFullPath = location.pathname + location.search;
                              if (currentFullPath === targetPath) {
                                e.preventDefault();
                                const targetId = `section-${sectionSlug}`;
                                const el = document.getElementById(targetId);
                                if (el) {
                                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                                  // Optional: adjust for fixed navbar height if needed
                                  // window.scrollBy(0, -80);
                                }
                              }
                            }}
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
    </div>
  );
};

export default Navbar;