import React from "react";

function SocialIcon({title, link}){
    return(
        <a href={link} className="hover:scale-110 duration-200" target="_blank" rel="noreferrer">
            <img src={`./images/SocialIcons/${title}.svg`}  alt={title} className="w-10" />
        </a>
    );
}

export default SocialIcon;