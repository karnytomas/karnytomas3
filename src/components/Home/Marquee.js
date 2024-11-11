import React from "react";
import MarqueeIcon from "./MarqueeIcon";

function Marquee({ icons, direction }) {
    return (
        <div className="relative overflow-hidden py-4">
            {/* Posuvná část */}
            <div className="relative flex marquee-wrapper">
                {icons.map((icon, index) => (
                    <MarqueeIcon key={index} icon={icon} index={index} direction={direction} />
                ))}
            </div>
        </div>
    );
}


export default Marquee;