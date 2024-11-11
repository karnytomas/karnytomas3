import React from "react";
import Marquee from "./Marquee";


const marquees = [
    [{name: 'Figma', image: 'Figma.svg'}, {name: 'MongoDB', image: 'MongoDB.svg'}, {name: 'React', image: 'React.svg'}, {name: 'Next.js', image: 'Next.svg'}, {name: 'Node.js', image: 'Node.svg'}, {name: 'Tailwind', image: 'Tailwind.svg'}],
    [{name: 'Bedna', image: 'swag.svg'}, {name: 'Jéňa', image: 'trollface.svg'}, {name: 'Filip', image: 'Filip.png'}, {name: 'Adam', image: 'Adam.png'}, {name: 'Jan', image: 'boy-face.png'}, {name: 'Valentina', image: 'Girl.png'}],
    [{name: 'MongoDB', image: 'MongoDB.svg'}, {name: 'Figma', image: 'Figma.svg'}, {name: 'React', image: 'React.svg'}, {name: 'Next.js', image: 'Next.svg'}, {name: 'Node.js', image: 'Node.svg'}, {name: 'Tailwind', image: 'Tailwind.svg'}]
  ];

function MarqueeSection(){
    return(
        <section className="relative bg-zinc-900 max-w-xxl mx-auto p-12 lg:p-28" style={{maxWidth: '1536px'}}>
            <div className="flex flex-col text-center text-4xl lg:text-7xl font-black uppercase p-2 md:p-8 lg:p-16">
                <span className="text-white">
                    Používáme ty nejlepší
                </span>

                <span className="text-extra-blue">
                    technologie
                </span>
            </div>
            <p className="text-2xl text-white mt-16 mb-16">
                Snažíme se být oproti konkurenci vždy o krůček napřed. Proto investujeme spoustu času a úsilí do nejvýhodnějšího řešení pro vás. U nás dinosauří a nevýhodné technologie nehledejte.
            </p>
            {marquees.map((marquee, index) => (
                <Marquee key={index} icons={marquee} direction={index % 2 === 0 ? 'left' : 'right'}/>
            ))}
        </section>
    );
}

export default MarqueeSection;