import React from "react";

function TimelineContent({image, title, description}){
    return(
        <div className="flex flex-col gap-2 TimelineContent">
            <img src={`./images/timeline/${image}`} className="w-full h-full rounded-lg"></img>
            <div>
                <h3 className="mb-2 text-3xl xl:text-4xl 2xl:text-6xl">{title}</h3>
                <p className="text-sm xl:text-lg 2xl:text-xl font-normal">{description}</p>
            </div>
        </div>
    );
}

export default TimelineContent;