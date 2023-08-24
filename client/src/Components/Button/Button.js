import React from "react";
import { IconButton } from "./ButtonStyled";

export const Button = (props) => {
  return (
    <IconButton className={props.className} onClick={props.onClick}>
      {props.children}
    </IconButton>
  );
};
