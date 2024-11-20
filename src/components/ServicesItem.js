import React from "react";

function ServicesItem({service}){
    return(
        <div className="text-black w-full rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-lg bg-customBlue hover:bg-blue-900 hover:text-white transition-all duration-150 ease-in-out group overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 border border-slate-500 group-hover:border-slate-100 rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 transition-all duration-150 ease-in-out">
                {service.image !== "" && 
                    <div className="relative w-full lg:w-1/3 flex justify-center items-center">
                        <img src={`./images/serviceImages/${service.image}.webp`} alt={service.image} className="object-contain"></img>
                    </div>}
                <div className={`flex flex-col justify-center w-full ${service.image === "" ? "w-full" : "lg:w-2/3"} justify-center gap-4 md:gap-6 lg:gap-8`}>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase">{service.title}</h3>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl">{service.description}</p>
                </div>
            </div>
        </div>
    );
}

export default ServicesItem;