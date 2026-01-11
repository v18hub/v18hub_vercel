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

  const handleNavClick = (title: string, hasSubmenu: boolean) => {
    if (!hasSubmenu) {
      setClickSelected(title);
      setHoverSelected(null);
      setDrawerOpen(false);
    }
  };

  const menuItems: [string, string[]?][] = [
    ["OurCommunity", ["Learners", "Educators", "Industry-Partners", "Mentors"]],
    ["Why-Us?"],
    ["Programs", ["Industry Cohorts", "Applied Cohorts", "Foundational Cohorts", "Webinars"]],
    ["Resources", ["Blogs", "News"]],
    ["About", ["Our-Story", "Career", "Contact-Us"]],
  ];

  useEffect(() => {
    const current = location.pathname.toLowerCase().replace(/\/+$/, "");
    if (current.startsWith("/registration/")) {
      setClickSelected("OurCommunity");
      setHoverSelected(null);
      setDrawerOpen(false);
      return;
    }

    const match = menuItems.find(([title, subs]) => {
      const parent = `/${toSlug(title)}`;
      if (subs && subs.length) {
        if (current === parent || current.startsWith(parent + "/")) return true;
        return subs.some((sub) => current.startsWith(`/${toSlug(title)}/${toSlug(sub)}`));
      }
      return current === parent;
    });

    setClickSelected(match ? match[0] : null);
    setHoverSelected(null);
    setDrawerOpen(false);
  }, [location.pathname]);

  return (
    <div className="cursor-pointer px-[1.5rem] flex lg:justify-stretch lg:gap-[21vw] justify-between items-center h-[72px] w-full relative z-[1000] bg-white">
      
      {/* LOGO — Slightly bigger & more visible (from h-10 → h-14) */}
      <Link
        to="/"
        onClick={() => setClickSelected(null)}
        className="flex items-center hover:opacity-90 transition-opacity"
      >
        <img
          src="/logo/logo_v18hub_header.png"
          alt="v18hub logo"
          className="h-14 w-auto object-contain drop-shadow-sm"
          // ↑ h-14 = ~40% bigger than original h-10
          // drop-shadow-sm adds subtle depth → instantly more premium & visible
        />
      </Link>

      {/* DESKTOP MENU — 100% unchanged */}
      <div className="hidden lg:flex items-center justify-center gap-[2rem] text-[1.1rem] p-2 relative">
        {menuItems.map(([title, subItems]) => {
          const hasSubmenu = Array.isArray(subItems) && subItems.length > 0;
          const slug = toSlug(title);
          const path = `/${slug}`;

          return (
            <div
              key={title}
              className="relative flex flex-col items-center"
              onMouseEnter={() => setHoverSelected(title)}
              onMouseLeave={() => setHoverSelected(null)}
            >
              {hasSubmenu ? (
                <div
                  className={`flex flex-col items-center p-2 font-[700] transition-colors ${
                    clickSelected === title ? "text-[#537367]" : "text-[#B2B2B2]"
                  }`}
                >
                  <span className="leading-none">{title}</span>
                  <div
                    className={`h-[2px] w-full mt-1 transition-all duration-300 ${
                      hoverSelected === title ? "bg-[#537367] rounded-2xl" : "bg-transparent"
                    }`}
                  />
                </div>
              ) : (
                <Link
                  to={path}
                  onClick={() => handleNavClick(title, hasSubmenu)}
                  className={`flex flex-col items-center p-2 font-[700] transition-colors ${
                    clickSelected === title ? "text-[#537367]" : "text-[#B2B2B2]"
                  }`}
                >
                  <span className="leading-none">{title}</span>
                  <div
                    className={`h-[2px] w-full mt-1 transition-all duration-300 ${
                      hoverSelected === title ? "bg-[#537367] rounded-2xl" : "bg-transparent"
                    }`}
                  />
                </Link>
              )}

              {hasSubmenu && hoverSelected === title && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-2xl py-4 w-[13rem] flex flex-col items-stretch z-50">
                  {subItems!.map((sub) => {
                    let subPath = `/${toSlug(title)}/${toSlug(sub)}`;
                    if (title === "Programs") {
                      const sectionSlug = toSlug(sub);
                      subPath = `/explore-cohorts#${sectionSlug}`;
                    }
                    return (
                      <Link
                        key={sub}
                        to={subPath}
                        onClick={() => {
                          setClickSelected(title);
                          setHoverSelected(null);
                        }}
                      >
                        <div className="font-medium px-4 py-2 hover:bg-[#385248] cursor-pointer whitespace-nowrap">
                          {sub}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* MOBILE DRAWER — unchanged */}
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
          <div className="flex justify-between items-center p-4 border-b border-[#537367]">
            <div className="font-extrabold text-lg text-black">v18hub</div>
            <X size={26} className="cursor-pointer text-black" onClick={() => setDrawerOpen(false)} />
          </div>

          <div className="flex flex-col p-4 space-y-2">
            {menuItems.map(([title, subItems]) => {
              const hasSubmenu = Array.isArray(subItems) && subItems.length > 0;
              const path = `/${toSlug(title)}`;

              return (
                <div key={title}>
                  <div
                    onClick={() => {
                      if (hasSubmenu) {
                        setHoverSelected(hoverSelected === title ? null : title);
                      } else {
                        handleNavClick(title, hasSubmenu);
                        setDrawerOpen(false);
                      }
                    }}
                    className={`p-2 cursor-pointer font-[650] ${
                      clickSelected === title ? "text-[#25473A]" : "text-[#B2B2B2]"
                    }`}
                  >
                    {hasSubmenu ? title : <Link to={path}>{title}</Link>}
                  </div>

                  {hasSubmenu && hoverSelected === title && (
                    <div className="mt-1 flex flex-col gap-1">
                      {subItems!.map((sub) => {
                        let subPath = `/${toSlug(title)}/${toSlug(sub)}`;
                        if (title === "Programs") {
                          const sectionSlug = toSlug(sub);
                          subPath = `/explore-cohorts#${sectionSlug}`;
                        }
                        return (
                          <Link
                            key={sub}
                            to={subPath}
                            onClick={() => {
                              setClickSelected(title);
                              setHoverSelected(null);
                              setDrawerOpen(false);
                            }}
                          >
                            <div className="px-2 py-1 font-medium text-sm text-[#6B6B6B] hover:text-[#25473A]">
                              {sub}
                            </div>
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