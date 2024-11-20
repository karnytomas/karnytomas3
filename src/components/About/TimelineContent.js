import React from "react";

function TimelineContent({image, title, description}){
    return(
        <div className="flex flex-col gap-4 lg:gap-8 TimelineContent">
            <img src={`./images/timeline/${image}`} className="w-full h-full rounded-lg"></img>
            <div>
                <h3 className="mb-2 lg:mb-4 text-3xl">{title}</h3>
                <p className="text-sm font-normal">{description}</p>
            </div>
        </div>
    );
}

export default TimelineContent;