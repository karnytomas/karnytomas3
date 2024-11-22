import React, { useState, useEffect, useRef } from "react";
import TimelineContent from "./TimelineContent";

const timelineData = [
    { image: "zacatky.jfif", title: "Začátky nebyly vůbec jednoduché.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada libero vel sapien lacinia, sit amet vestibulum eros tincidunt. Donec dapibus, risus at luctus vulputate, turpis nunc vestibulum felis, id elementum lorem justo vel sem. Fusce quis orci eget nisl fermentum volutpat. Phasellus bibendum velit vel justo tempor, in vehicula massa vehicula. Sed efficitur augue in augue condimentum, non molestie lectus scelerisque. Suspendisse potenti. Nam id ipsum id lectus scelerisque fringilla. Aliquam erat volutpat. Nulla facilisi." },
    { image: "rozvoj1.jfif", title: "Lorem ipsum dolor sit amet.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada libero vel sapien lacinia, sit amet vestibulum eros tincidunt. Donec dapibus, risus at luctus vulputate, turpis nunc vestibulum felis, id elementum lorem justo vel sem. Fusce quis orci eget nisl fermentum volutpat. Phasellus bibendum velit vel justo tempor, in vehicula massa vehicula. Sed efficitur augue in augue condimentum, non molestie lectus scelerisque. Suspendisse potenti. Nam id ipsum id lectus scelerisque fringilla. Aliquam erat volutpat. Nulla facilisi. " },
    { image: "rozvoj2.jfif", title: "Lorem ipsum dolor sit amet.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada libero vel sapien lacinia, sit amet vestibulum eros tincidunt. Donec dapibus, risus at luctus vulputate, turpis nunc vestibulum felis, id elementum lorem justo vel sem. Fusce quis orci eget nisl fermentum volutpat. Phasellus bibendum velit vel justo tempor, in vehicula massa vehicula. Sed efficitur augue in augue condimentum, non molestie lectus scelerisque. Suspendisse potenti. Nam id ipsum id lectus scelerisque fringilla. Aliquam erat volutpat. Nulla facilisi. " },
    { image: "konec.jfif", title: "Lorem ipsum dolor sit amet.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada libero vel sapien lacinia, sit amet vestibulum eros tincidunt. Donec dapibus, risus at luctus vulputate, turpis nunc vestibulum felis, id elementum lorem justo vel sem. Fusce quis orci eget nisl fermentum volutpat. Phasellus bibendum velit vel justo tempor, in vehicula massa vehicula. Sed efficitur augue in augue condimentum, non molestie lectus scelerisque. Suspendisse potenti. Nam id ipsum id lectus scelerisque fringilla. Aliquam erat volutpat. Nulla facilisi. " }
];

function Timeline() {
    const ScrollSection = () => {
        const [scrollPosition, setScrollPosition] = useState(0);
        const [year, setYear] = useState(2014);
        const divRef = useRef(null);

        useEffect(() => {
            const handleScroll = () => {
                if (divRef.current) 
                {
                    const rect = divRef.current.getBoundingClientRect(); //Získá informace o rozměrech a pozici div vzhledem k viewportu.
                    const windowHeight = window.innerHeight; //Výška viditelné oblasti okna pro porovnání s pozicí div.

                    // Kontroluje, zda střed okna (poloha windowHeight / 2) spadá mezi horní (rect.top) a spodní (rect.bottom) část div.
                    if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) 
                    {
                        const maxScroll = Math.min(rect.height - 100, (windowHeight / 2 - rect.top)); //Zajišťuje, že nepřekročí výšku div sníženou o 100 px.
                        const visiblePercentage = Math.max(0, maxScroll / rect.height); //Jak daleko je střed okna od horní hrany div.

                        // Interpolace pro zjemnění změny scroll pozice
                        const smoothedScrollPosition = scrollPosition + (visiblePercentage - scrollPosition) * 0.1; //Interpolace postupně aktualizuje scrollPosition, aby přechod byl plynulý.
                        setScrollPosition(smoothedScrollPosition);

                        const newYear = 2014 + Math.floor(smoothedScrollPosition * 10); //Rok se pohybuje mezi 2014 (scroll position = 0) a 2024 (scroll position = 1) podle interpolovaného posunu.
                        setYear(newYear);
                    } 
                    else if (rect.top > windowHeight / 2) 
                    {
                        setScrollPosition(0);
                        setYear(2014);
                    } 
                    else if (rect.bottom < windowHeight / 2) 
                    {
                        setScrollPosition(1);
                        setYear(2024);
                    }
                }
            };

            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }, [scrollPosition]);

        return (
            <section className="relative px-4 sm:px-12 md:px-24 lg:px-28 py-16 min-w-screen bg-black text-white text-lg font-bold">
                <h2 className="text-center font-extrabold text-6xl mb-8">
                    TIMELINE MK2
                </h2>
                <div className='absolute w-full h-full'>
                    <img src='./images/logo_big.svg' alt='Occamy' className="w-full h-auto object-cover" />
                </div>
                <div className="relative z-10 grid grid-cols-12 gap-4">
                    <div className="relative col-span-3 md:col-span-4 lg:col-span-6 mt-32 mb-56" ref={divRef}>
                        <div
                            className="absolute left-0 top-0 transition-transform w-full flex justify-center"
                            style={{
                                top: `${scrollPosition * (divRef.current ? divRef.current.clientHeight - 100 : 0)}px`,
                                height: "100%",
                            }}
                        >
                            <div className="relative">
                                {/* První p element */}
                                <span 
                                    className="text-vertical-horizontal relative px-2 z-10 text-extra-blue text-6xl font-bold md:bg-black text-center"
                                    style={{
                                        fontFamily: "sans-serif",
                                        textShadow: "0 0 10px #380EC6, 0 0 20px #380EC6, 0 0 40px #380EC6, 0 0 80px #380EC6"
                                    }}>
                                    {year}
                                </span>
                                
                                {/* Druhý p element se stejným textem */}
                                <span
                                    className="absolute px-2 top-[26px] hidden md:block text-6xl font-bold text-white text-center"
                                    style={{
                                        WebkitTextFillColor: "transparent",
                                        WebkitTextStroke: "1px white",
                                        fontFamily: "sans-serif"
                                    }}
                                >
                                    {year}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="h-full col-span-9 md:col-span-8 lg:col-span-6 flex flex-col gap-16">
                        {timelineData.map((item, index) => (
                            <TimelineContent key={index} image={item.image} title={item.title} description={item.description} />
                        ))}
                    </div>
                </div>
            </section>
        );
    };

    return <ScrollSection />;
}

export default Timeline;
