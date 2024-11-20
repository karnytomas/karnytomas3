import React from "react";
import Reference from "./Reference";
import TransparentButton from "./TransparentButton";

function CaseStudies({studiesData, includeButton}){
    return(
        <section className="max-w-7xl mx-auto p-4 md:p-8 lg:p-16">
            <h2 className="text-3xl font-bold mb-8 text-center md:text-left">Vybrané případové studie</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {studiesData.map((caseStudy, index) => (
                    <Reference
                        index={index}  // Předáváme jako normální prop
                        key={index} // Speciální React prop, jen pro optimalizaci vykreslování
                        title={caseStudy.title}
                        tags={caseStudy.tags}
                        image={caseStudy.image}
                        link={caseStudy.link}
                        bgColorFrom={caseStudy.bgColorFrom}
                        bgColorTo={caseStudy.bgColorTo}
                    />
                ))}
            </div>
            
            {includeButton && (
                <div className="mt-8 text-right">
                    <TransparentButton link={"reference"} text={"VÍCE REFERENCÍ"} textColor={"text-black"} />
                </div>
            )}
        </section>
    );
}

export default CaseStudies;