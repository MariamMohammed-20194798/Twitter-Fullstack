import React from "react";
import { FiCheck } from "react-icons/fi";
import { useThemeStore } from "../../styledComponents/themesStorage";
import { Div, Span, Input, Label, DivIcon, Img } from "./ColorStyled";

const ColorInput = (props) => {
  const changeButton = useThemeStore((state) => state.changeButton);
  const handleClick = () => {
    changeButton(`${props.id}`);
    props.onHandle();
  };
  return (
    <Div>
      <Input type="radio" id={props.id} name="color" />
      <Label htmlFor={props.id}>
        <Span
          id={props.id}
          checked={props.checked}
          onClick={handleClick}
        ></Span>
        {props.checked ? (
          <DivIcon>
            <FiCheck />
          </DivIcon>
        ) : null}
      </Label>
      <Img src={props.img} alt={props.id} />
    </Div>
  );
};
export default ColorInput;
