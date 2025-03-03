'use client';
import { useState, useEffect } from "react";

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    setActiveLink(window.location.pathname);
    
    // Add scroll listener to change header style on scroll
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" }
  ];
  
  return (
    <header className={`flex items-center justify-center w-full fixed top-0 z-50 transition-all duration-500 ${
      isVisible ? "opacity-100" : "opacity-0"
    } ${isScrolled ? "h-16 backdrop-blur-md bg-slate-900/60" : "h-20 bg-transparent"}`}>
      <div className="w-full max-w-7xl mx-auto px-6">
        <nav className="relative py-3">
          <ul className="flex justify-center gap-8">
            {navLinks.map((link, index) => (
              <li 
                key={link.href}
                className={`transition-all duration-500 transform ${
                  isVisible ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <a href={link.href}>
                  <div 
                    className={`relative px-5 py-2 cursor-pointer overflow-hidden group transition-all duration-300 
                      hover:scale-105 rounded-md ${
                        activeLink === link.href 
                          ? "bg-gradient-to-r from-amber-700 to-gray-800" 
                          : ""
                      }`}
                    style={{
                      color: activeLink === link.href ? "var(--background)" : "var(--foreground)",
                      backgroundColor: activeLink === link.href ? "var(--foreground)" : "transparent",
                    }}
                  >
                    <span className="relative z-10">{link.label}</span>
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-600 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
                    <div className="absolute inset-0 z-0 bg-gradient-to-r from-amber-700/80 to-gray-800/80 
                      opacity-0 transition-all duration-500 group-hover:opacity-100 rounded-md"></div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
