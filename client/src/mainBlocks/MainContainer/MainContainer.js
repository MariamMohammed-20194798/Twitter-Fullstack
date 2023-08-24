import React from "react";
import { Container } from "./MainContainerStyled";

const MainContainer = (props) => {
  return <Container>{props.children}</Container>;
};

export default MainContainer;
