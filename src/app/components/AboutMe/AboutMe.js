"use client";

import React, { useState } from "react";
import { Hind } from "next/font/google";

import { AboutData } from "@/app/data";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function AboutMe() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFaded, setIsFaded] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mapData, setMapData] = useState(AboutData[0]);

  const myFunctions = (data) => {
    setIsFlipped(false);
    setIsFaded(false);
    setMapData(data);
  };

  const handleCardClick = (data, index) => {
    setIsFlipped(true);
    setIsFaded(true);
    setSelectedIndex(index);

    setTimeout(() => myFunctions(data), 600);
  };

  const HandleNext = () => {
    if (selectedIndex < 5) {
      handleCardClick(AboutData[selectedIndex + 1], selectedIndex + 1);
    } else {
      handleCardClick(AboutData[0], 0);
    }
  };
  const HandlePrev = () => {
    if (selectedIndex !== 0) {
      handleCardClick(AboutData[selectedIndex - 1], selectedIndex - 1);
    } else {
      handleCardClick(AboutData[5], 5);
    }
  };

  return (
    <>
      <div
        id="about-me-component"
        className="bg-[#E0F3FD] pt-[250px] mt-10 pb-[100px] lg:pb[600px] relative lg:h-[800px]"
      >
        <div className="container m-auto">
          <h1 className="text-[240px] w-[80%] overflow-hidden absolute lg:left-40 md:left-30 top-[-50px] text-[#EAF7FC]">
            About Me
          </h1>
          <h2 className="relative font-recoletaBlack text-5xl text-[#48AFDE] mb-5 -mt-40 md:px-24 px-5">
            About My Self
          </h2>
          <h4 className="relative w-full font-[300] md:w-3/4 lg:w-2/3 xl:w-1/2 font-recoleta text-[#223740] text-2xl mb-10 px-5 md:px-24">
            Knack of building application with front-end operation
          </h4>
          <section className="relative flex flex-col lg:flex-row md:px-24">
            <p
              className={`w-full lg:w-1/3 text-[#223740] mr-0 mb-5 lg:mr-4 ${hind.className}`}
            >
              My name is Dao Truong Nghi. A professional and enthusiastic
              front-end developer and designer. However, i am more than just
              your average programer of designer. I'm very fluid and never stop
              learning and adapting to new situations.
            </p>
            <p
              className={`w-full lg:w-1/3 text-[#223740] mr-0 mb-5 lg:mr-4 ${hind.className}`}
            >
              This attitude propelled me on an endiess journey to learn a
              varitety of skills, including teaching skill, UI/UX, design,
              front-end and back-end development, SEO and optiomisations, server
              management, product design.
            </p>
            <p
              className={`w-full lg:w-1/3 text-[#223740] mr-0 mb-5 lg:mr-4 ${hind.className}`}
            >
              When i encounter a new problem, i uauslly conduct entensive
              research oon it in oder to comprehend it and discover cutting-edge
              and innovatie approaches for dealing with similar problems in the
              future. As a result, it's not unexpected that i've listed a lot of
              abilities here:
            </p>
          </section>
        </div>
      </div>

      <div
        style={{
          backgroundImage: "linear-gradient(45deg, #EAF7FC 70%, #48AFDE 30%)",
          width: "100%",
        }}
        className="lg:-mt-60"
      >
        <section className="container flex flex-col m-auto sm:flex-row px-5 md:px-24 mt-[50px sm:mt-0] transform translate-y-[-100px]">
          <div className=" sm:fex w-full sm:w-1/2 lg:w-7/12">
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 mr-0 lg:mr-10">
              {AboutData.map((item, index) => (
                <a
                  onClick={() => handleCardClick(item, index)}
                  style={{ boxShadow: "#48AFDE -5px 10px 20px 0px" }}
                  className={`relative cursor-pointer transition-all transform duration-300 
                    group rounded-xl center p-6 lg:p-10 flex flex-col justify-center items-center
                    ${
                      selectedIndex == index
                        ? "-translate-y-2 bg-[#476571]"
                        : "hover:bg-[#476571] hover:shadow-xl hover:-translate-y-2 bg-white"
                    }`}
                >
                  <div className="w-16 h-16 sm:w-10 sm:h-10 lg:w-16 lg:h-16">
                    <img src={item.img} />
                  </div>
                  <h4
                    className={`text-center text-sm lg:text-xl font-recoletaBold transition-color duration-500 group-hover:text-white text-[#47626D] mt-3 
                  ${selectedIndex === index ? "text-white" : ""}`}
                  >
                    {item.title}
                  </h4>
                  <div
                    className={`absolute -top-2 -right-2 transform transition-all duration-500 
                    opacity-0 group-hover:opacity-100 shadow-xl w-12 h-12 rounded-lg bg-[#476571]
                    flex justify-center items-center font-bold text-white font-recoletaBold text-xl
                    ${
                      selectedIndex === index
                        ? "opacity-100 rotate-12"
                        : "group-hover:rotate-12"
                    }
                    `}
                  >
                    {item.count}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
