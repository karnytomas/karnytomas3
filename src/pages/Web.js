import React from 'react';
import SectionLast from '../components/SectionLast';
import OurValues from '../components/OurValues';
import Services from '../components/Services';
import WhyUsSection from '../components/WhyUsSection';
import Presentation from '../components/Presentation';

const servicesData = {
  title: "Služby - Webový vývoj", 
  services: [
  {image: "PREZENTAČNÍ WEB", title: "PREZENTAČNÍ WEB", description: "Profesionální internetový obchod na míru plně plnící vaše přání. Taktéž jak u prezenčního webu je zdarma zahrnut grafický návrh, web hosting na jeden rok, verze pro mobily a ostatní zařízení a SEO optimalizace. K tomu navíc emailová schránka s neomezeným úložištěm, sleva při výběru naší partnerské platební brány a rádi vám k tomu všemu vytvoříme reklamní banner, či příspěvek pro vaše socialní sítě."},
  {image: "E-SHOP", title: "E-SHOP", description: "Profesionální internetový obchod na míru plně plnící vaše přání. Taktéž jak u prezenčního webu je zdarma zahrnut grafický návrh, web hosting na jeden rok, verze pro mobily a ostatní zařízení a SEO optimalizace. K tomu navíc emailová schránka s neomezeným úložištěm, sleva při výběru naší partnerské platební brány a rádi vám k tomu všemu vytvoříme reklamní banner, či příspěvek pro vaše socialní sítě."},
  {image: "WEBOVÉ APLIKACE", title: "WEBOVÉ APLIKACE", description: "Profesionální internetový obchod na míru plně plnící vaše přání. Taktéž jak u prezenčního webu je zdarma zahrnut grafický návrh, web hosting na jeden rok, verze pro mobily a ostatní zařízení a SEO optimalizace. K tomu navíc emailová schránka s neomezeným úložištěm, sleva při výběru naší partnerské platební brány a rádi vám k tomu všemu vytvoříme reklamní banner, či příspěvek pro vaše socialní sítě."},
  {image: "REDESIGN", title: "REDESIGN", description: "Profesionální internetový obchod na míru plně plnící vaše přání. Taktéž jak u prezenčního webu je zdarma zahrnut grafický návrh, web hosting na jeden rok, verze pro mobily a ostatní zařízení a SEO optimalizace. K tomu navíc emailová schránka s neomezeným úložištěm, sleva při výběru naší partnerské platební brány a rádi vám k tomu všemu vytvoříme reklamní banner, či příspěvek pro vaše socialní sítě."}
]};

function Web() {
  return (
    <>
      <Services servicesData={servicesData} />
      <WhyUsSection/>
      <OurValues/>
      <Presentation />
      <SectionLast/>
    </>
  );
}

export default Web;