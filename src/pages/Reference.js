import React from 'react';
import CaseStudies from '../components/CaseStudies';
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
  {
    title: "RebornK",
    image: "RebornK",
    tags: ["Prezenční web", "UI/UX", "Video tvorba"],
    link: "rebornk.com/cs",
    bgColorFrom: "from-green-700",
    bgColorTo: "to-green-500"
  },
  {
    title: "Life4Water",
    image: "Life4Water",
    tags: ["Kontaktní formulář", "Prezenční web", "UI/UX"],
    link: "life4water.cz",
    bgColorFrom: "from-blue-800",
    bgColorTo: "to-blue-600"
  },
  {
    title: "AKZlatohlávková",
    image: "AKZlatohlávková",
    tags: ["UI/UX", "Blog", "Kontaktní formulář", "Prezenční web"],
    link: "akzlatohlavkova.cz",
    bgColorFrom: "from-emerald-950",
    bgColorTo: "to-emerald-800"
  },
  {
    title: "Sára Šlachtovská",
    image: "saraslachtovska",
    tags: ["Newsletter", "Blog", "Prezenční web"],
    link: "saraslachtovska.cz",
    bgColorFrom: "from-beige-200",
    bgColorTo: "to-beige-100"
  }
];

function Reference() {
  return (
    <>
      <CaseStudies studiesData={studiesData} includeButton={false}/>
      <SectionLast/>
    </>
  );
}

export default Reference;