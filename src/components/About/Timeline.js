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
                if (divRef.current) {
                    const rect = divRef.current.getBoundingClientRect();
                    const windowHeight = window.innerHeight;

                    // Vypočítáme maximální viditelný posun v rámci kontejneru
                    if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
                        const maxScroll = Math.min(rect.height - 100, (windowHeight / 2 - rect.top));
                        const visiblePercentage = Math.max(0, maxScroll / rect.height);

                        // Interpolace pro zjemnění změny scroll pozice
                        const smoothedScrollPosition = scrollPosition + (visiblePercentage - scrollPosition) * 0.1;
                        setScrollPosition(smoothedScrollPosition);

                        const newYear = 2014 + Math.floor(smoothedScrollPosition * 10);
                        setYear(newYear);
                    } else if (rect.top > windowHeight / 2) {
                        setScrollPosition(0);
                        setYear(2014);
                    } else if (rect.bottom < windowHeight / 2) {
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
                <div className='absolute w-full h-full'>
                    <img src='./images/logo_big.svg' alt='Occamy' className="w-full h-auto object-cover" />
                </div>
                <div className="relative z-10 grid grid-cols-12 gap-4">
                    <div className="relative col-span-3 md:col-span-4 lg:col-span-6 mt-32 mb-56" ref={divRef}>
                        <div
                            className="absolute left-0 top-0 transition-transform w-full flex justify-center"
                            style={{
                                transform: `translateY(${scrollPosition * (divRef.current ? divRef.current.clientHeight - 100 : 0)}px)`,
                                height: "100%",
                            }}
                        >
                            <div className="relative">
                                {/* První p element */}
                                <p 
                                    className="text-vertical-horizontal relative px-2 z-10 text-extra-blue text-6xl font-bold md:bg-black text-center transition-all duration-100 ease-out"
                                    style={{
                                        fontFamily: "sans-serif",
                                        textShadow: "0 0 10px #380EC6, 0 0 20px #380EC6, 0 0 40px #380EC6, 0 0 80px #380EC6"
                                    }}>
                                    {year}
                                </p>
                                
                                {/* Druhý p element se stejným textem */}
                                <p
                                    className="absolute px-2 top-[26px] hidden md:block text-6xl font-bold text-white text-center"
                                    style={{
                                        WebkitTextFillColor: "transparent",
                                        WebkitTextStroke: "1px white",
                                        fontFamily: "sans-serif"
                                    }}
                                >
                                    {year}
                                </p>
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
