import React from "react";
import Slide from "./Slide";

const slidesData = [
  {
    title: "WEBOVÝ VÝVOJ",
    text: "V Occamy se specializujeme na vývoj webů, webových aplikací a tvorbu rozsáhlých webových portálů. Dáváme silný důraz na kvalitu, agilitu, zabezpečení webu a nadčasový design. Naše řešení dokáže skvěle nakopnout i vaší marketingovou strategii.",
    icon1: "Rychlost",
    icon2: "Bezpečnost",
    icon3: "Spolehlivost",
    icon4: "Agilita",
    slideImage: "Slide1",
    link: "web"
  },
  {
    title: "GRAFICKÝ DESIGN",
    text: "Sledujeme nejnovější trendy a snažíme se predikovat i ty nadcházející. Proto vyhráváme umělecké soutěže a naše weby budou moderní i za desetiletí. Součástí našich služeb je i výzkum trhu, či dokumentace k dílu.",
    icon1: "Funkčnost",
    icon2: "Kreativita",
    icon3: "Estetika",
    icon4: "Nadčasovost",
    slideImage: "Slide2",
    link: "grafic"
  },
  {
    title: "DIGITÁLNÍ MARKETING",
    text: "S námi nešlápnete vedle ani v marketingu. Dokážeme vám nastartovat komplexní omnichannel strategii. PPC, SEO, e-maililing nebo sociální sítě. Společně s vámi najdeme to správné publikum a zodpovědně rozvrhneme optimální kampaň.",
    icon1: "Jasný cíl",
    icon2: "Inovace",
    icon3: "Výkonnost",
    icon4: "Autenticita",
    slideImage: "Slide3",
    link: "marketing"
  }
];

function Slider() {
  return (
    <section id="slider" className="py-32 px-16 md:px-32 relative bg-extreme-blue min-h-screen">
      <div className="mx-auto max-w-xxl h-full">
        <input type="radio" name="slider" id="slide1" className="hidden" defaultChecked />
        <input type="radio" name="slider" id="slide2" className="hidden"/>
        <input type="radio" name="slider" id="slide3" className="hidden"/>
        
        <div id="slides" className="relative">
            <div className="relative w-full overflow-hidden">
                <div className="inner">
                {/* Generate Slide components dynamically */}
                {slidesData.map((slide, index) => (
                    <div key={index} className={`slide slide_${index + 1}`}>
                    <Slide
                        title={slide.title}
                        text={slide.text}
                        icon1={slide.icon1}
                        icon2={slide.icon2}
                        icon3={slide.icon3}
                        icon4={slide.icon4}
                        slideImage={slide.slideImage}
                        link={slide.link}
                    />
                    </div>
                ))}
                </div>
            </div>
        </div>
          
        <div id="controls">
            <label htmlFor="slide1" className="cursor-pointer no-underline hover:opacity-100"></label>
            <label htmlFor="slide2" className="cursor-pointer no-underline hover:opacity-100"></label>
            <label htmlFor="slide3" className="cursor-pointer no-underline hover:opacity-100"></label>
        </div>
        
        <div id="bullets" className="text-center mt-5">
            <label htmlFor="slide1" className="cursor-pointer no-underline"></label>
            <label htmlFor="slide2" className="cursor-pointer no-underline"></label>
            <label htmlFor="slide3" className="cursor-pointer no-underline"></label>
        </div>
      </div>
    </section>
  );
}  

export default Slider;