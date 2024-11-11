import React from "react";
import Icon from "./Icon";
import TransparentButton from "../TransparentButton";

function Slide({ title, text, icon1, icon2, icon3, icon4, slideImage, link }) {
  return (
    <div className="relative h-full w-full bg-extreme-blue text-white flex justify-center items-center">
      <div className="relative h-full w-full w-[75rem]">
        
        {/* Left Section: Text */}
        <div className="left-part relative text-content flex flex-col justify-center z-20">
          <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8">
            <h1 className="text-white text-5xl md:text-8xl font-black uppercase leading-tight md:leading-none">
              {title}
            </h1>
            <p className="text-white text-lg md:text-2xl">
              {text}
            </p>
          </div>

          {/* Icons with labels and button */}
          <div className="flex flex-wrap justify-between items-end w-full mt-10">
            {/* Icons */}
            <div className="flex flex-wrap justify-between gap-6 md:gap-20">
              <Icon name={icon1} folder={"icons"}/>
              <Icon name={icon2} folder={"icons"}/>
              <Icon name={icon3} folder={"icons"}/>
              <Icon name={icon4} folder={"icons"}/>
            </div>

            {/* Button */}
            <div className="mr-8 md:mr-16 mt-4 z-30">
              <TransparentButton link={link} text={"PŘEČÍST VÍCE"} textColor={"text-white"}/>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="absolute bottom-[20%] right-0 w-1/2 h-full z-10 flex justify-end items-end overflow-hidden">
          <img
            src={`images/slides/${slideImage}.webp`}
            alt={title}
            className="hidden lg:block rounded-3xl object-contain max-w-full max-h-full transform"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Slide;
