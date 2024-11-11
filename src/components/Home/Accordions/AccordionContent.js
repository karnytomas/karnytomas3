// AccordionContent.js
import React from "react";
import { accordionData } from "./AccordionData";
import AccordionIcon from "./AccordionIcon";

function AccordionContent({ switcher }) {
    const activeItem = accordionData.find((item) => item.id === switcher);

    if (!activeItem) 
    {
        return null; // nebo můžete vrátit prvek jako <div> nebo <p> s nějakou zprávou
    }

    return (
        <div key={switcher} className="space-y-6 pl-4 md:pl-16 fade-in-up">
            <p className="text-3xl sm:text-4xl md:text-5xl">{activeItem.title}</p>
            <p className="text-xl sm:text-2xl">{activeItem.content}</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 sm:mt-0">
                <AccordionIcon folder={"accordionIcons"} name={activeItem.icon1}/>
                <AccordionIcon folder={"accordionIcons"} name={activeItem.icon2}/>
                <AccordionIcon folder={"accordionIcons"} name={activeItem.icon3}/>
                <AccordionIcon folder={"accordionIcons"} name={activeItem.icon4}/>
            </div>
        </div>
    );
}

export default AccordionContent;
