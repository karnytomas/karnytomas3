import React from 'react';

const contactData = [
    {title: "Email", link: "mailto:info@occamy.cz", linkData: "info@occamy.cz"},
    {title: "Telefon", link: "tel:+420775297565", linkData: "+420 775 297 565"}
];

function ContactForm(){
  return (
    <section className="container mx-auto p-2 sm:p-6 md:p-12 lg:p-16">
        <div className="flex flex-col lg:flex-row items-start gap-8 p-2 sm:p-6 md:p-12 p-16">
            <div className="flex flex-col items-start w-full lg:w-1/2 space-y-4">
                <h2 className="flex flex-col text-4xl lg:text-7xl text-gray-900">
                    <span className='font-bold'>POJĎME TO</span>
                    <span className='font-black'>PROBRAT</span>
                </h2>
                
                <div className='flex flex-col lg:flex-row w-full mt-8 lg:mt-12 gap-8 lg:gap-x-8'>
                    <div className='space-y-2'>
                        <span>Jednatel, OCCAMY</span>
                        <img src="./images/Bedna.webp" alt="Contact Person" className="rounded-lg w-full lg:w-64"></img>
                    </div>
                    <div className='flex flex-col gap-y-4 w-full'>
                        {contactData.map((contact, index) => (
                            <div className="space-y-2 overflow-hidden w-full" key={index}>
                                <span>{contact.title}</span>
                                <div className='p-4 bg-customBlue hover:bg-blue-700 rounded-lg hover:text-white transition-all duration-150 ease-in-out group w-full'>
                                    <div className='relative border border-slate-500 group-hover:border-white rounded-lg w-full'>
                                        <a href={contact.link} className="block px-6 py-4  text-sm md:text-lg lg:text-2xl font-bold peer w-full">
                                            {contact.linkData}
                                        </a>
                                        <div className="absolute -top-[1px] -right-[1px] bg-customBlue group-hover:bg-blue-700 border border-t-0 border-r-0 border-slate-500 rounded-bl-lg group-hover:rounded-lg group-hover:translate-x-20 group-hover:-translate-y-8 transition-all duration-300 ease-in-out" bis_skin_checked="1">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 lg:w-12 h-4 lg:h-6 py-1">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-full lg:w-1/2 space-y-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <input type="text" placeholder="Jméno" className="p-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"></input>
                    <input type="text" placeholder="Společnost" className="p-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"></input>
                    <input type="email" placeholder="E-mail" className="p-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"></input>
                    <input type="tel" placeholder="Telefon" className="p-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"></input>
                </div>
                <textarea 
                    placeholder="Řekněte nám něco o Vašem projektu (rozsah, časová osa, rozpočet)" 
                    className="w-full p-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    rows="10">
                </textarea>
            
                <button className="px-8 py-4 bg-blue-700 text-white font-semibold rounded-2xl shadow hover:bg-blue-900 transition duration-200 group">
                    ODESLAT <span className="arrow translate-x-1">→</span>
                </button>
            </div>
        </div>
    </section>
  );
};

export default ContactForm;