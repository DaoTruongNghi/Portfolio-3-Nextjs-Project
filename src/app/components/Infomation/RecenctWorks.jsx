import React from "react";
import MySlider from "../SliderCard/MySlider";
import { Hind } from "next/font/google";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const RecenctWorks = () => {
  return (
    <div
      id="portfolio"
      className="mt-0 pt-5 -mb-40"
      style={{
        backgroundImage:
          "linear-gradient(-62deg, #EEF7FB 0 45%, white 0% 100%)",
        width: "100%",
      }}
    >
      <div className="container m-auto">
        <p
          className="text-[300px] text-[#F7FBFD] md:pl-[50px] px-5 max-w-[750px] w-[100%] overflow-hidden"
          style={{ transform: "translate(0px, -20px)" }}
        >
          portfolio
        </p>
        <div style={{ transform: "translate(0px, -250px)" }}>
          <p className="text-[#48AFDE] md:pl-[80px] px-5 font-extrabold text-5xl ">
            Recent Works
          </p>
          <p
            className={`max-w-2xl md:pl-[80px] px-5 text-[16px] text-[#47626d] leading-8 mt-5 ${hind.className}`}
          >
            Here are a few of my most recent work. As a web designer and
            fullstack developer, i constantly prioritise 100% client
            satisfaction. I always enjoy working on my projects, so each one i a
            new adventure for me. While looking on each new project, i attempt
            to learn news things. As a result, my paintings are always current
            and one-of-a-kind.
          </p>
        </div>
      </div>
      <div style={{ transform: "translate(0px, -170px)" }}>
        <MySlider />
      </div>
    </div>
  );
};

export default RecenctWorks;
