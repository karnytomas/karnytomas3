import React from "react";

function Logo(){
    return(
        <a href="/">
            <div className="text-xl font-bold flex justify-center items-center gap-2">
                <img src="./images/logo.png" title="Occamy" alt="OccamyLogo" className="w-10 h-auto"></img>
                <p className="uppercase text-center font-black text-xl tracking-wide">Occamy</p>
            </div>
        </a>
    );
};

export default Logo;