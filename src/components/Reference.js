import React from "react";

function Reference({index , title, tags, image, link, bgColorFrom, bgColorTo}){
    return(
        <a href={`https://${link}`} target="_blank" rel="noreferrer">
            <div key={index} className={`OnScroll relative h-full rounded-2xl p-8 text-white bg-gradient-to-b ${bgColorFrom} ${bgColorTo} ${index % 2 === 1 ? 'md:bottom-16' : ''} hover:scale-[1.05] transition-transform duration-300`}>
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">{title}</h3>
                    <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-8">
                        {tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-2xl w-auto">
                            {tag}
                        </span>
                        ))}
                    </div>
                </div>
                <img className="rounded-lg max-w-full" src={`./images/references/${image}.webp`} alt={title} />
            </div>
        </a>
    );
}

export default Reference;