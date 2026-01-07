import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 150) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", href: "#home" },
    { name: "À propos", href: "#about" },
    { name: "Projets", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50",
          "bg-white shadow-md",
          "md:bg-gradient-to-r md:from-neon-blue md:via-neon-pink md:to-neon-purple md:shadow-lg"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* LOGO */}
          <a
            href="#home"
            className="text-2xl font-bold text-neon-blue md:text-white"
          >
            Portfolio
          </a>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "font-medium transition-colors",
                  activeSection === link.href.replace("#", "")
                    ? "text-neon-purple"
                    : "text-white hover:text-neon-purple"
                )}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* MOBILE TOGGLE */}
          <button
            className=" md:hidden text-neon-blue"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="fixed top-16 left-0 w-full bg-white z-40 shadow-lg md:hidden">
          <nav className="flex flex-col items-center py-6 space-y-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-neon-blue hover:text-neon-purple"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
