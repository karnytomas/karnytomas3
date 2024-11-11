import React from "react";

function MarqueeIcon({ icon, index, direction }) {
  return (
    <div style={{width: '200px', height: '150px'}} className={`group absolute flex flex-col items-center justify-center gap-4 animate-marquee-${direction} marquee-icon${index}`}>
        <img style={{width: '200px', height: '80px'}} src={`./images/marqueeIcons/${icon.image}`} alt={icon.name} className="transparent object-contain group-hover:scale-110 transition-scale duration-300 brightness-50 group-hover:brightness-100" />
        <p className="text-white text-sm text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">{icon.name}</p>
    </div>
  );
}

export default MarqueeIcon;
