import { Div } from "./ContainerStyled";
import React from "react";
const Container = (props) => {
  return <Div>{props.children}</Div>;
};
export default Container;
