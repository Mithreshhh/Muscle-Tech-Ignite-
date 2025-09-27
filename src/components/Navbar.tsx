import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Membership", href: "#membership" },
    { name: "Trainers", href: "#trainers" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-black/95 backdrop-blur-md shadow-2xl border-b border-primary/30"
            : "bg-black/90 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3 group cursor-pointer z-10">
              <div className="group-hover:scale-110 transition-transform duration-300">
                <img 
                  src="/images (1).png" 
                  alt="Muscle Tech Fitness Logo" 
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-power text-white drop-shadow-lg tracking-wide">
                  <span className="text-primary">MUSCLE</span> TECH
                </span>
              </div>
            </div>

            {/* Desktop Navigation - Centered */}
            <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 z-20 opacity-100">
              <div className="flex items-center space-x-6 bg-black/80 backdrop-blur-md px-8 py-3 rounded-full border border-white/20 shadow-xl">
                {navItems.map((item, index) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-white hover:text-primary transition-all duration-300 font-bold text-base relative group py-2 px-3 opacity-100"
                    style={{
                      textShadow: '2px 2px 8px rgba(0,0,0,1)',
                      filter: 'contrast(1.2)'
                    }}
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-full rounded-full shadow-lg"></span>
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block z-10">
              <Button
                variant="hero"
                size="sm"
                className="hover:scale-105 transition-all duration-300 shadow-lg font-bold text-white"
                onClick={() => scrollToSection("#contact")}
              >
                START FREE TRIAL
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden z-10">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-primary transition-colors duration-300 p-2 bg-black/50 rounded-lg backdrop-blur-sm"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-500 overflow-hidden ${
            isMobileMenuOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pt-4 pb-6 space-y-3 bg-black/95 backdrop-blur-md border-t border-primary/20">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block px-4 py-3 text-white hover:text-primary transition-colors duration-300 font-semibold w-full text-left hover:bg-primary/10 rounded-lg"
              >
                {item.name}
              </button>
            ))}
            <div className="pt-4">
              <Button
                variant="hero"
                size="sm"
                className="w-full font-bold"
                onClick={() => scrollToSection("#contact")}
              >
                START FREE TRIAL
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
