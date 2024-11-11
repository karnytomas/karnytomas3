import React from "react";

function WhyUsButton({ item, index, activeIndex, handleToggle }) {
  return (
    <li className="border-b border-zinc-600/50 transition-all duration-700 ease-in">
      <button
        onClick={() => handleToggle(index)}
        className="flex items-center justify-between text-left py-4 w-full transition-all duration-700 ease-in"
      >
        <p
          className={`text-lg sm:text-2xl md:text-3xl font-bold transition-all duration-300 ease-in ${
            activeIndex === index ? "text-extra-blue" : "text-white"
          }`}
        >
          {item.title}
        </p>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth="1.5" 
          stroke="currentColor" 
          className={`ml-4 w-6 h-6 sm:w-8 sm:h-8 transition-all duration-300 ease-in-out ${activeIndex === index ? "text-extra-blue" : "text-white"}`}
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d={`${activeIndex === index ? "M5 12h14" : "M12 4.5v15m7.5-7.5h-15"}`} 
          />
        </svg>
      </button>
      <div className={`overflow-hidden transition-[max-height] ease-in-out ${activeIndex === index ? "max-h-96" : "max-h-0"} duration-500`}>
        <div className="px-4 pb-4 sm:px-6 sm:pb-6">
          <span className="text-zinc-400">{item.description}</span>
        </div>
      </div>
    </li>
  );
}

export default WhyUsButton;
