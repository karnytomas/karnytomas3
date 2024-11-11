import React from "react";

function TransparentButton({link, text, textColor}){
    return(
        <a href={`/${link}`}>
            <button className={`${textColor} transparent px-8 py-4 rounded-2xl border-2 font-extrabold text-lg border-blue-500 hover:bg-blue-500/10`}>
                {text}
                <span className="arrow translate-x-1">→</span>
            </button>
        </a>
    );
}

export default TransparentButton;