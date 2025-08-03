"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";


const useActiveSection = (sectionIds) => {
  const [activeSection, setActiveSection] = useState(null);


  const sectionRefs = sectionIds.reduce((acc, id) => {
    const { ref, inView } = useInView({ threshold: 0.5 });
    acc[id] = { ref, inView };
    return acc;
  }, {});

  useEffect(() => {
    for (const id in sectionRefs) {
      if (sectionRefs[id].inView) {
        setActiveSection(id);
        break;
      }
    }
  }, [sectionRefs]);

  return { activeSection, sectionRefs };
};

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sections = [
    { id: "home", title: "Home" },
    { id: "about", title: "About" },
    { id: "makhana-journey", title: "Journey of Makhana" },
    { id: "products", title: "Products" },
    { id: "contact", title: "Contact" },
  ];

 
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const top = element.offsetTop - 100; // Offset to account for fixed navbar
          const bottom = top + element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-80 transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
     
        <Link
          href="#home"
          className="text-3xl font-extrabold text-cyan-700 font-inter"
        >
          Organic Mithila
        </Link>

    
        <div className="hidden md:flex space-x-6">
          {sections.map((section) => (
            <Link
              key={section.id}
              href={`#${section.id}`}
              className={`font-medium text-lg hover:text-cyan-800 transition-colors duration-300 ${
                activeSection === section.id
                  ? "text-cyan-700 font-extrabold"
                  : "text-cyan-500 font-bold"
              }`}
            >
              {section.title}
            </Link>
          ))}
        </div>

        
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-600 hover:text-cyan-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

     
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-inner pb-4">
          <div className="flex flex-col space-y-2 px-6">
            {sections.map((section) => (
              <Link
                key={section.id}
                href={`#${section.id}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-lg py-2 transition-colors duration-300 ${
                  activeSection === section.id
                    ? "text-cyan-700 font-bold"
                    : "text-gray-600 hover:text-cyan-600"
                }`}
              >
                {section.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
