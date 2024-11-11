// AccordionButton.js
import React from "react";

function AccordionButton({ name, title, isActive, onSwitch }) {
    return (
        <button
            name={name}
            onClick={() => onSwitch(name)}
            className="py-8 w-full flex items-start justify-between text-left border-b border-slate-500/50"
        >
            <span
                className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-1 transition duration-300 ease-in-out 
                    ${isActive ? "text-blue-600" : "text-slate-500 opacity-50 hover:opacity-75"}`}
            >
                {title}
            </span>



            <svg 
                xmlns="http://www.w3.org/2000/svg"
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth="1.5" 
                stroke="currentColor" 
                className="ml-4 w-6 h-6 sm:w-8 sm:h-8 text-royal-blue-500 lg:hidden"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d={`${isActive ? "M5 12h14" : "M12 4.5v15m7.5-7.5h-15"}`}>
                </path>
            </svg>
        </button>
    );
}

export default AccordionButton;
