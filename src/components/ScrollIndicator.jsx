import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

export const ScrollIndicator = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 20) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`
        absolute w-full flex justify-center
        transition-opacity duration-300
        ${hidden ? "opacity-0" : "opacity-100"}
        bottom-24 md:bottom-5
      `}
    >
      <FaChevronDown className="text-white text-2xl md:text-4xl animate-bounce" />
    </div>
  );
};