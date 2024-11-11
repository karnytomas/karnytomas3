// ValuesSection.js
import React from 'react';
import { FaPalette, FaBolt, FaBuilding } from 'react-icons/fa';

function ValuesSection() {
    const valuesData = [
        {
            icon: <FaPalette size={40} className="text-blue-800" />,
            title: "Design, který mluví",
            description:
                "Zaměřujeme se na kreativitu a prvotřídní kvalitu. Věříme v jednoduchost, inovaci a uživatelskou přívětivost. Naším cílem je vytvářet elegantní, efektivní a vizuálně ohromující řešení, která posunou váš projekt na novou úroveň."
        },
        {
            icon: <FaBolt size={40} className="text-blue-800" />,
            title: "Inovativní přístup",
            description:
                "Dokonalý kód, inovativní design a trvalý úspěch. Spojujeme precizní technické řešení s estetickou brilantností a vytváříme projekty, které nejen uspokojí, ale i překonají vaše očekávání."
        },
        {
            icon: <FaBuilding size={40} className="text-blue-800" />,
            title: "Vhodná platforma",
            description:
                "Výběr a implementaci vhodné platformy pro každý projekt. Analyzujeme vaše potřeby, abychom zajistili, že zvolíme optimální technologii, která podpoří efektivní, škálovatelné a úspěšné výsledky."
        }
    ];

    return (
        <section className="px-4 py-8 sm:px-8 sm:py-16 lg:px-28 lg:py-28 space-y-14">
            <h2 className="text-2xl sm:text-4xl font-bold">Naše hodnoty</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {valuesData.map((value, index) => (
                    <div
                        key={index}
                        className="p-8 sm:p-10 flex flex-col gap-6 sm:gap-8 border border-blue-500 rounded-3xl"
                    >
                        <div>
                            {value.icon}
                        </div>
                        <h3 className="text-blue-900 text-xl sm:text-2xl font-bold">
                            {value.title}
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg">
                            {value.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ValuesSection;
