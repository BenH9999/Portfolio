import React, { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-screen-2xl md:max-w-screen-4xl mx-auto px-4">
        <div className="flex justify-between items-center text-2xl h-16 md:h-18">
          <a href="#home" className="font-mono whitespace-nowrap sm:text-xl md:text-4xl font-bold text-white">
            {""}
            ben-houghton<span className="text-blue-500">.com</span>
          </a>

          <div className="w-9 h-9 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors hover:-translate-y-0.5">
              {" "}Home{" "}
            </a>

            <a href="#about" className="text-gray-300 hover:text-white transition-colors hover:-translate-y-0.5">
              {" "}About{" "}
            </a>

            <a href="#projects" className="text-gray-300 hover:text-white transition-colors hover:-translate-y-0.5">
              {" "}Projects{" "}
            </a>

            <a href="#contact" className="text-gray-300 hover:text-white transition-colors hover:-translate-y-0.5">
              {" "}Contact{" "}
            </a>
          </div>
        </div>
      </div>
    </nav >
  );
};
