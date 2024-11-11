import React from "react";

function Icon({ folder, name }) {
  return (
    <div className="icon flex flex-col flex-1 space-y-2 justify-center items-center content-center">
      {/* Zaoblené pozadí s gradientem */}
      <div className="rounded-xl bg-gradient-to-b from-blue-700 to-blue-900 p-4 w-20 h-20 flex justify-center items-center">
        {/* Ikona */}
        <img
          src={`./images/${folder}/${name}.svg`}
          alt={name}
          className="w-12 h-12"
        />
      </div>
      {/* Text pod ikonou */}
      <span className="mt-2 text-lg font-black text-white text-center">{name}</span>
    </div>
  );
}

export default Icon;
