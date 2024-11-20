import React, { useState } from "react";

function DropdownNavbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavDropdown = () => setIsNavOpen(!isNavOpen);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="lg:hidden">
      {/* Toggle button for mobile view */}
      <button
        onClick={toggleNavDropdown}
        className="lg:hidden text-white focus:outline-none z-50 relative"
        aria-label="Toggle navigation"
      >
        <svg
          className="w-6 h-6 fixed top-4 right-4" // Pozicováno fixně, takže se bude pohybovat s oknem
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          style={{ zIndex: 50 }} // Nejvyšší z-index, aby byl nad ostatními prvky
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isNavOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      <nav className={`flex flex-col transition-all ease-in-out ${isNavOpen ? "scale-100" : "scale-0"} duration-500 lg:hidden items-center justify-center bg-blue-600 p-4 rounded-lg shadow-lg absolute left-0 top-0 w-full`}>
        <div className="relative flex flex-col items-center justify-center overflow-hidden">
          <button
            onClick={toggleDropdown}
            className="flex items-center space-x-2 text-white text-lg hover:font-semibold focus:outline-none"
          >
            <span>Služby</span>
            <svg
              className={`w-4 h-4 transition-transform transform ${isOpen ? "rotate-180" : ""} duration-500`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Dropdown submenu */}
          <div
            className={`w-full mt-2 rounded-lg shadow-lg bg-blue-700 overflow-hidden transition-[max-height] ease-in-out ${isOpen ? "max-h-[500px]" : "max-h-0"} duration-500`}>
            <a
              href="/web"
              className="block rounded-lg text-white px-4 py-2 hover:bg-blue-800 transition-colors duration-200"
            >
              Webový vývoj
            </a>
            <a
              href="/grafic"
              className="block rounded-lg text-white px-4 py-2 hover:bg-blue-800 transition-colors duration-200"
            >
              Grafický design
            </a>
            <a
              href="/marketing"
              className="block rounded-lg text-white px-4 py-2 hover:bg-blue-800 transition-colors duration-200"
            >
              Digitální marketing
            </a>
          </div>
        </div>


        {/* Other navigation links */}
        <a href="/reference" className="text-white text-lg mt-2 hover:font-semibold hover:text-blue-300 transition duration-200">
          Reference
        </a>
        <a href="/o-nas" className="text-white text-lg mt-2 hover:font-semibold hover:text-blue-300 transition duration-200">
          O nás
        </a>
        <a href="/kontakt" className="text-white text-lg mt-2 hover:font-semibold hover:text-blue-300 transition duration-200">
          Kontakt
        </a>
      </nav>
    </div>
  );
}

export default DropdownNavbar;
