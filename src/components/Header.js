import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import DropdownNavbar from './DropdownNavbar';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 0) 
    {
      setScrolled(true);
    } 
    else 
    {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); //Když se komponenta odstraní z DOM, tak at tam ten event nezůstane
    };
  }, []);

  return (
    <header className={`fixed w-full z-50 p-6 duration-1000 ease-in-out ${scrolled ? 'navbar-scrolled bg-extreme-blue shadow-2xl' : 'bg-transparent'}`}>
      <div className='w-5/6 max-w-6xl mx-auto text-white flex justify-between items-center'>
        <Logo/>
        <nav className="hidden lg:flex space-x-6">
          <div className="relative space-y-2">
            <button onClick={toggleDropdown} className="flex items-center space-x-2">
              <span className='text-lg hover:font-semibold'>Služby</span>
              <svg
                className={`w-4 h-4 transition-transform transform ${isOpen ? 'rotate-180' : ''} duration-500`}
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`absolute rounded shadow-lg bg-blue-700 overflow-hidden transition-[max-height] ease-in-out ${isOpen ? "max-h-[500px]" : "max-h-0"} duration-500`}>
              <div className='p-2'>
                <a href="/web" className="block rounded-lg text-white px-4 py-2 whitespace-nowrap hover:bg-blue-900">Webový vývoj</a>
                <a href="/grafic" className="block rounded-lg text-white px-4 py-2 whitespace-nowrap hover:bg-blue-900">Grafický design</a>
                <a href="/marketing" className="block rounded-lg text-white px-4 py-2 whitespace-nowrap hover:bg-blue-900">Digitální marketing</a>
              </div>
            </div>
          </div>
          <a href="/reference" className="text-lg hover:font-semibold">Reference</a>
          <a href="/o-nas" className="text-lg hover:font-semibold">O nás</a>
          <a href="/kontakt" className="text-lg hover:font-semibold">Kontakt</a>
        </nav>
        <DropdownNavbar/>
      </div>
    </header>
  );
}

export default Header;

