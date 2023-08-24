import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import Trends from "../Trends/Trends";
import { Follow } from "../Follow/Follow";
import { Div } from "./RightSideStyled";
export const RightSide = () => {
  return (
    <Div>
      <SearchBar />
      <Trends />
      <Follow />
    </Div>
  );
};
