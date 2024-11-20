import React from "react";
import ServicesItem from "./ServicesItem";

function Services({servicesData}){
    return(
        <section className="p-8 sm:p-16 md:p-24 lg:p-28 mx-auto w-full md:w-5/6 space-y-14 relative overflow-hidden mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">{servicesData.title}</h2>

            <div className="flex flex-col lg:flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 h-full w-full max-w-xxl mx-auto -scroll-mt-20">
                {servicesData.services.map((service, index) => (
                    <ServicesItem key={index} service={service}/>
                ))}
            </div>
        </section>
    );
}

export default Services;