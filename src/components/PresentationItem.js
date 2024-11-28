import React from "react";

function PresentationItem({image, colorFrom, colorTo}){
    return(
        <div 
            className={`flex justify-center items-center bg-gradient-to-b ${colorFrom} ${colorTo} p-4 lg:p-8 w-[196px] sm:w-[312px] md:w-full rounded-2xl PresentationItem`}
        >
            <img
                src={`./images/Presentation/${image}`}
                alt={image}
                className="rounded-2xl max-w-full max-h-full"
            >
            </img>
        </div>
    );
}

export default PresentationItem;