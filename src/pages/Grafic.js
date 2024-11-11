import React from 'react';
import SectionLast from '../components/SectionLast';
import OurValues from '../components/OurValues';
import Services from '../components/Services';
import WhyUsSection from '../components/WhyUsSection';

const servicesData = {
    title: "Služby - Grafický design", 
    services: [
    {image: "", title: "LOGO", description: "Vytvoříme pro vás jedinečné logo, které bude odrážet podstatu vaší značky a zanechá nezapomenutelný dojem."},
    {image: "", title: "VIZITKA", description: "Navrhneme elegantní a profesionální vizitky, které vám pomohou udělat skvělý první dojem."},
    {image: "", title: "PLAKÁT", description: "Plakáty na míru, které zaujmou na první pohled a efektivně předají vaši zprávu."},
    {image: "", title: "NÁVRH WEBU", description: "Vytvoříme moderní a vizuálně atraktivní návrh webu, který kombinuje funkčnost s estetikou."},
    {image: "", title: "OBSAHOVÁ GRAFIKA", description: "Grafika pro sociální sítě, weby nebo tiskoviny, která zvýší viditelnost vaší značky."},
    {image: "", title: "ILUSTRACE", description: "Na míru kreslené ilustrace, které přidají kreativitu a originalitu vašim projektům."},
    {image: "", title: "FIREMNÍ IDENTITA", description: "Komplexní řešení pro vytvoření jednotné a silné firemní identity, která posílí vaši značku na trhu."}
  ]};

function Grafic() {
  return (
    <>
      <Services servicesData={servicesData} />
      <WhyUsSection/>
      <OurValues/>
      <SectionLast/>
    </>
  );
}

export default Grafic;