import React from "react";

function AccordionIcon({ folder, name }) {
  return (
    <div className="icon flex flex-col space-y-2 justify-center items-center content-center">
      {/* Zaoblené pozadí s gradientem */}
      <div className="rounded-xl bg-gradient-to-b from-blue-700 to-blue-900 p-4 w-12 h-12 sm:w-14 sm:h-14 flex justify-center items-center">
        {/* Ikona */}
        <img
          src={`./images/${folder}/${name}.svg`}
          alt={name}
          className="w-8 h-8"
        />
      </div>
      {/* Text pod ikonou */}
      <span className="text-center text-sm">{name}</span>
    </div>
  );
}

export default AccordionIcon;
