import React from "react";
import { FiSettings } from "react-icons/fi";
import { TrendsTitle } from "../TrendTitle.js/TrendTitle";
import {
  Div,
  SvgDiv,
  DivButton,
  DivTrands,
  DivHeader,
  H4,
  Border,
} from "./TrandsStyled";

const Trends = () => {
  return (
    <DivTrands>
      <Div>
        <DivHeader>
          <H4>Trends For You</H4>
          <SvgDiv>
            <FiSettings />
          </SvgDiv>
        </DivHeader>
        <Border />
        <div>
          <TrendsTitle
            header={"1.Trending"}
            text={"#ريال_مدريد"}
            numbers={"325K Tweets"}
          />
          <TrendsTitle
            header={"2.Trending"}
            text={"#SöZ"}
            numbers={"488K Tweets"}
          />
          <TrendsTitle
            header={"3.Trending"}
            text={"#PAM_BEESLEY"}
            numbers={"22.7K Tweets"}
          />
          <TrendsTitle
            header={"4.Trending"}
            text={"#مطار_القاهره"}
            numbers={"598 Tweets"}
          />
          <TrendsTitle
            header={"5.Trending"}
            text={"#DWIGHT_SHRUTE"}
            numbers={"71K Tweets"}
          />
        </div>
        <DivButton>
          <button>Show more</button>
        </DivButton>
      </Div>
    </DivTrands>
  );
};

export default Trends;
