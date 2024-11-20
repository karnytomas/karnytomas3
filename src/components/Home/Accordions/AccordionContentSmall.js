// AccordionContent.js
import React from "react";
import { accordionData } from "./AccordionData";
import AccordionIcon from "./AccordionIcon";

function AccordionContentSmall({ switcher }) {
    const activeItem = accordionData.find((item) => item.id === switcher);

    if (!activeItem) 
    {
        return null; // nebo můžete vrátit prvek jako <div> nebo <p> s nějakou zprávou
    }

    return (
        <div key={switcher} className={`text-zinc-400 space-y-6 pl-4 md:pl-16 fade-in-up ${switcher === activeItem.id ? "block" : "hidden"} lg:hidden`}>
            <p>{activeItem.content}</p>
            <div className="flex gap-4 justify-center items-center">
                <AccordionIcon folder={"accordionIcons"} name={activeItem.icon1}/>
                <AccordionIcon folder={"accordionIcons"} name={activeItem.icon2}/>
                <AccordionIcon folder={"accordionIcons"} name={activeItem.icon3}/>
                <AccordionIcon folder={"accordionIcons"} name={activeItem.icon4}/>
            </div>
        </div>
    );
}

export default AccordionContentSmall;
