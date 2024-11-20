// Accordion.js
import React, { useState, useEffect } from "react";
import { accordionData } from "./AccordionData";
import AccordionButton from "./AccordionButton";
import AccordionContent from "./AccordionContent";
import AccordionContentSmall from "./AccordionContentSmall";

function Accordion() {
    const [switcher, setSwitcher] = useState(window.innerWidth >= 1024 ? "button1" : "button0");

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024 && switcher === "button0")
            {
                setSwitcher("button1");
            }
        };

        // Nastavení počáteční hodnoty podle velikosti okna
        handleResize();

        // Přidání event listeneru pro změnu velikosti okna
        window.addEventListener("resize", handleResize);

        // Vyčištění při unmount
        return () => window.removeEventListener("resize", handleResize);
    }, [switcher]);

    const handleSwitch = (name) => {
        if (window.innerWidth < 1024 && switcher === name) 
        {
            setSwitcher("button0");
        }
        else 
        {
            setSwitcher(name);
        }
    };

    return (
        <section className="w-full py-8 sm:py-16 md:py-24 lg:py-28 px-4 sm:px-8 md:px-16 lg:px-28">
            <div className="w-full flex flex-col lg:flex-row lg:space-x-18 space-y-10 lg:space-y-0">
                <div className="lg:w-1/2">
                    {accordionData.map((item) => (
                        <React.Fragment key={item.id}>
                            <AccordionButton
                                name={item.id}
                                title={item.title}
                                isActive={switcher === item.id}
                                onSwitch={handleSwitch}
                            />
                            
                            {/* Render AccordionContentSmall only if screen size is < lg and switcher is active */}
                            {switcher === item.id && (
                                <AccordionContentSmall key={`${item.id}-content`} switcher={switcher} />
                            )}
                        </React.Fragment>
                    ))}
                </div>
                <div className="hidden lg:block lg:w-1/2">
                    <AccordionContent switcher={switcher} />
                </div>
            </div>
        </section>
    );
}

export default Accordion;
