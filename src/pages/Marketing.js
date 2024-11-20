import React from 'react';
import SectionLast from '../components/SectionLast';
import OurValues from '../components/OurValues';
import Services from '../components/Services';
import WhyUsSection from '../components/WhyUsSection';

const servicesData = {
  title: "Služby - Grafický design", 
  services: [
  {image: "", title: "DATOVÁ ANALÝZA", description: "Pomůžeme vám porozumět vašim zákazníkům prostřednictvím hloubkové datové analýzy, která odhalí skryté příležitosti a optimalizuje vaše marketingové strategie."},
  {image: "", title: "PPC", description: "Zvýšíme návštěvnost a konverze vašich stránek pomocí efektivních PPC kampaní, které cílí na správné publikum."},
  {image: "", title: "SEO", description: "Zlepšíme vaši viditelnost ve vyhledávačích díky pokročilé SEO optimalizaci, která přivede více organického provozu na váš web."},
  {image: "", title: "SPRÁVA SOCIÁLNÍCH SÍTÍ", description: "Tvorba virálních videí: Vytvoříme poutavá a sdílená videa, která zvýší váš dosah na sociálních sítích a zaujmou široké publikum."},
  {image: "", title: "E-MAILING", description: "Navrhneme a realizujeme e-mailové kampaně, které zvýší zapojení vašich zákazníků a podpoří prodej."}
]};

function Marketing() {
  return (
    <>
      <Services servicesData={servicesData} />
      <WhyUsSection/>
      <OurValues/>
      <SectionLast/>
    </>
  );
}

export default Marketing;