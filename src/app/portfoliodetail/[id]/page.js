"use client";
import React from "react";
import PortfolioDetailDesign from "../../page/portfolio-detail-design";
import { DataArray } from "@/app/data";

const Portfolio = (props) => {
  console.log("the id is:" + props.params.id);

  return (
    <>
      <PortfolioDetailDesign
        data={DataArray[props.params.id]}
        id={props.params.id}
        DataArray={DataArray}
      />
    </>
  );
};
export default Portfolio;
