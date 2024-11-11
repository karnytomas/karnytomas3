import React, { useState } from "react";
import WhyUsButton from "./WhyUsButton";

const data = [
  { title: "UI/UX Design", description: "Vytváříme atraktivní a intuitivní design, který zaujme uživatele a usnadní jejich interakci s aplikací. Naším cílem je skvělý uživatelský zážitek, který podpoří spokojenost a efektivitu uživatelů." },
  { title: "Analýza", description: "Detailně zkoumáme vaše cíle a potřeby, abychom pochopili tržní požadavky a technické možnosti. Tato analýza nám umožňuje vypracovat efektivní strategii a plán pro úspěšný vývoj aplikace." },
  { title: "Vývoj", description: "Převádíme návrhy do funkční aplikace s důrazem na kvalitu kódu, bezpečnost a maximální výkon. Používáme nejmodernější technologie, aby aplikace byla robustní, rychlá a splnila vaše specifikace a požadavky." },
  { title: "Spuštění a rozvoj", description: "Po uvedení aplikace do provozu pokračujeme v jejím rozvoji a optimalizaci. Sledujeme výkon, implementujeme nové funkce a reagujeme na zpětnou vazbu, aby aplikace stále splňovala aktuální potřeby a standardy." }
];

function WhyUsSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-zinc-900 py-8 sm:py-16 md:py-24 lg:py-28 WhyUsSection">
      <div className="w-full max-w-xxl flex flex-col lg:flex-row lg:space-x-18 space-y-8 lg:space-y-0 text-white justify-between mx-auto px-4 sm:px-8 md:px-16 lg:px-28">
        {/* Levá strana */}
        <div>
          <h2 className="flex flex-col text-7xl font-bold uppercase">
            PROČ <br />
            PRÁVĚ
            <span className="text-extra-blue font-black">MY?</span>
          </h2>
        </div>

        {/* Pravá strana */}
        <div className="lg:w-2/3">
          <ul className="space-y-4">
            {data.map((item, index) => (
              <WhyUsButton
                key={index}
                item={item}
                index={index}
                activeIndex={activeIndex}
                handleToggle={handleToggle}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default WhyUsSection;
