import React from 'react';
import Slider from '../components/Home/Slider';
import CaseStudies from '../components/CaseStudies';
import MarqueeSection from '../components/Home/MarqueeSection';
import Accordion from '../components/Home/Accordions/Accordion';
import SectionLast from '../components/SectionLast';

const studiesData = [
  {
      title: "SchoolJob",
      image: "SchoolJob",
      tags: ["Webový vývoj", "Platební brána", "Aplikace", "Databáze", "Uživatelské rozhraní", "UI/UX", "Analýza"],
      link: "schooljob.cz",
      bgColorFrom: "from-blue-800",
      bgColorTo: "to-blue-600"
  },
  {
      title: "Melior Invest",
      image: "meliorinvest",
      tags: ["Webový vývoj", "Kontaktní formulář", "Kalkulačka"],
      link: "meliorinvest.cz/cs",
      bgColorFrom: "from-stone-600",
      bgColorTo: "to-stone-400"
  },
  {
      title: "SVAC.CZ",
      image: "SVAC.CZ",
      tags: ["Webový vývoj", "Platební brána", "Aplikace", "Databáze", "Uživatelské rozhraní", "Dotykačka"],
      link: "svac.cz",
      bgColorFrom: "from-orange-600",
      bgColorTo: "to-orange-400"
  },
  {
      title: "Human Design",
      image: "humandesign",
      tags: ["Newsletter", "Kontaktní formulář", "Blog", "Prezenční web"],
      link: "humandesignprofirmy.cz",
      bgColorFrom: "from-zinc-900",
      bgColorTo: "to-zinc-700"
  },
];

function Home() {
  return (
    <>
      <Slider/>
      <CaseStudies studiesData={studiesData} includeButton={true}/>
      <MarqueeSection/>
      <Accordion/>
      <SectionLast/>
    </>
  );
}

export default Home;