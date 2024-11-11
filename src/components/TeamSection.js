// TeamSection.js
import React from 'react';

const teamMembers = [
    {
        name: 'MARTIN BEDNÁŘ',
        position: 'Playboy',
        image: 'Bedna',
    },
    {
        name: 'JAN PLECHATÝ',
        position: 'Hračkář',
        image: 'Junek',
    },
    {
        name: 'FILIP TOMÍN',
        position: 'Vývojář předku',
        image: 'FT',
    },
    {
        name: 'ADAM PETŘÍČEK',
        position: 'Vývojář zadku',
        image: 'AP',
    },
    {
        name: 'JAN KOŠEK',
        position: 'Únosce dětí',
        image: 'JKošek',
    },
    {
        name: 'JAN KOCHÁNEK',
        position: 'Předák',
        image: 'JKochánek',
    },
    {
        name: 'VALENTINA BESTOVÁ',
        position: 'Svačinářka',
        image: 'VB',
    },
    {
        name: 'LUCIE FAITOVÁ',
        position: 'Uklízečka',
        image: 'LF',
    },
    {
        name: 'JAN CHODORA',
        position: 'Toaletář',
        image: 'JChodora',
    },
    {
        name: 'BARBORA DUŠATKOVÁ',
        position: 'Správkyně kanceláře',
        image: 'Woman',
    },
    {
        name: 'PATRIK PLUHAŘ',
        position: 'Otrok',
        image: 'Man',
    },
    {
        name: 'ZUZANA KRATOCHVÍLOVÁ',
        position: 'Návrhářka',
        image: 'Woman',
    },
    {
        name: 'MATĚJ HRABAL',
        position: 'Otrok',
        image: 'Man',
    },
    {
        name: 'KRYŠTOF HIREŠ',
        position: 'Designér',
        image: 'Man',
    },
    {
        name: 'ADRIANA KADLECOVÁ',
        position: 'Fotografka',
        image: 'Woman',
    }
];

function TeamSection() {
    return (
        <section className="px-8 md:px-16 lg:px-28 py-10">
            <div className="border border-blue-500 rounded-3xl p-6 md:p-8 lg:p-10 ">
                <p className="text-lg md:text-xl lg:text-2xl font-bold">
                Occamova břitva nám připomíná, že nejjednodušší řešení bývá často to nejlepší. 
                Na této filozofii zakládáme naši práci a vždy se snažíme najít nejefektivnější cestu pro váš projekt.
                </p>
            </div>

            <h2 className="text-3xl font-bold my-10 ">Náš tým</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
                {teamMembers.map((member, index) => (
                    <div key={index} className="relative bg-white rounded-3xl overflow-hidden shadow-lg group">
                        <img
                            src={`./images/slaves/${member.image}.webp`}
                            alt={member.name}
                            className="w-full h-96 object-cover"
                        />
                        {member.name === 'MARTIN BEDNÁŘ' && 
                            <img
                            className="hidden lg:block absolute left-[25%] top-[1%] w-36 h-36 bg-transparent opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 group-hover:animate-rotate-360"
                            src='./images/slaves/JednaBedna.png'
                            alt='Jedna Bedna'
                            />
                        }
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 text-white p-4 text-center">
                            <h3 className="text-lg font-semibold">{member.name}</h3>
                            <p className="text-sm">{member.position}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default TeamSection;
