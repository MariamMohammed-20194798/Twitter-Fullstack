import React from "react";
import { InputText } from "./InputStyled";

const Input = ({ type, id, placeholder, value, onChange }) => {
  return (
    <InputText
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
