import React from 'react';

const billingData = [
    {title: "IČO", data: "10866591"},
    {title: "DIČ", data: "CZ10866591"},
    {title: "Bankovní účet", data: "6010712359/0800"},
    {title: "Datová schránka", data: "33jvw7x"}
];

function BillingInfo(){
  return (
    <section className="px-8 md:px-16 lg:px-28 py-16 lg:py-24 bg-black text-white">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold md:text-6xl lg:text-7xl lg:font-extrabold font-black">
          FAKTURAČNÍ <span className="text-extra-blue">ÚDAJE</span>
        </h1>
        <p className="text-lg mt-4">Occamy s.r.o. Táborská 357/7, 460 08, Liberec 8</p>
      </div>

      <div className="space-y-6">
        {billingData.map((row, index) => (
            <div className="text-sm sm:text-base md:text-xl lg:text-4xl font-bold border-b border-gray-700 pb-6 cursor-pointer" key={index}>
                <p><span className='hover:brightness-50 transition duration-300 ease-in-out'>{row.title}:   {row.data}</span></p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BillingInfo;