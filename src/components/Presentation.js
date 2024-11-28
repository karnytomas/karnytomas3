import React, { useEffect, useRef } from "react";
import PresentationItem from "./PresentationItem";

const presentationItemsLeft = [
    {image: "cat1.png", colorFrom: "from-red-300", colorTo: "to-red-600"},
    {image: "cat2.png", colorFrom: "from-orange-300", colorTo: "to-orange-600"},
    {image: "cat3.png", colorFrom: "from-purple-300", colorTo: "to-purple-700"}
];

const presentationItemsRight = [
    {image: "cat4.png", colorFrom: "from-green-500", colorTo: "to-green-700"},
    {image: "cat5.png", colorFrom: "from-yellow-400", colorTo: "to-yellow-800"},
    {image: "cat6.png", colorFrom: "from-blue-300", colorTo: "to-blue-600"}
];

function Presentation() {
    const sectionRef = useRef(null);
    const presentationFirstRef = useRef(null);
    const presentationSecondRef = useRef(null);

    const scrollLeftFirst = () => {
        scrollLeft(presentationFirstRef);
    }

    const scrollLeftSecond = () => {
        scrollLeft(presentationSecondRef);
    }

    function scrollLeft(container){
        if (container.current)
        {
            const itemWidth = container.current.firstChild.getBoundingClientRect().width;
            container.current.scrollBy({
                left: -itemWidth, // Posun vlevo o šířku jednoho prvku
                behavior: "smooth", // Hladký scroll
            });
        }
    };


    const scrollRightFirst = () => {
        scrollRight(presentationFirstRef);
    }

    const scrollRightSecond = () => {
        scrollRight(presentationSecondRef);
    }

    function scrollRight(container){
        if (container.current)
        {
            const itemWidth = container.current.firstChild.getBoundingClientRect().width;
            container.current.scrollBy({
                left: itemWidth, // Posun vpravo o šířku jednoho prvku
                behavior: "smooth", // Hladký scroll
            });
        }
    };

    useEffect(() => {
        const section = sectionRef.current;

        const observerOptions = {
            threshold: Array.from({ length: 21 }, (_, i) => i * 0.05), // Plynulé sledování
        };

        const animationStart = 0.3; // Začátek animace při 30% viditelnosti
        const animationRange = 0.4; // Animace skončí při 70% viditelnosti
        const animationEnd = Math.min(animationStart + animationRange, 1);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.target === section)
                {
                    const progress = Math.min(
                        Math.max((entry.intersectionRatio - animationStart) / (animationEnd - animationStart), 0),
                        1
                    );
                    section.style.setProperty("--progress", progress);
                }
            });
        }, observerOptions);

        if (section)
        {
            observer.observe(section);
        }

        return () => {
            if (section)
            {
                observer.unobserve(section);
            }
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="flex flex-col gap-4 px-2 lg:px-4 py-36 min-w-screen"
        >
            <div>
                <div className="flex flex-row gap-4 h-32 md:h-46 lg:h-64 Presentation PresentationFirst" ref={presentationFirstRef}>
                    {presentationItemsLeft.map((item, index) => (
                        <PresentationItem key={index} image={item.image} colorFrom={item.colorFrom} colorTo={item.colorTo}/>
                    ))}
                </div>

                <div className="flex justify-between mb-8 mt-1 px-2 md:hidden">
                    <button
                        onClick={scrollLeftFirst}
                        className="px-4 py-2 bg-gray-500 text-white rounded-md"
                    >
                        &lt;
                    </button>
                    <button
                        onClick={scrollRightFirst}
                        className="px-4 py-2 bg-gray-500 text-white rounded-md"
                    >
                        &gt;
                    </button>
                </div>
            </div>

            <div>
                <div className="flex flex-row gap-4 h-32 md:h-46 lg:h-64 Presentation PresentationSecond" ref={presentationSecondRef}>
                    {presentationItemsRight.map((item, index) => (
                        <PresentationItem key={index} image={item.image} colorFrom={item.colorFrom} colorTo={item.colorTo}/>
                    ))}
                </div>

                <div className="flex justify-between mb-8 mt-1 px-2 md:hidden">
                    <button
                        onClick={scrollLeftSecond}
                        className="px-4 py-2 bg-gray-500 text-white rounded-md"
                    >
                        &lt;
                    </button>
                    <button
                        onClick={scrollRightSecond}
                        className="px-4 py-2 bg-gray-500 text-white rounded-md"
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Presentation;
