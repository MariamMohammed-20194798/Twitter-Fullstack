import styled from "styled-components";

export const Label = styled.label`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  min-width: 16rem;
  width: 100%;
  cursor: pointer;
  position: relative;
  font-weight: 500;
  font-size: 1.3rem;
  ${({ id }) => {
    switch (id) {
      case "LightMode":
        return "background-color:rgb(255, 255, 255);color:rgb(20, 23, 26);";
      case "DimMode":
        return "background-color:rgb(21, 32, 43);color:rgb(255, 255, 255);";
      case "DarkMode":
        return "background-color:rgb(0,0,0);color:rgb(217, 217, 217);";
      default:
        return;
    }
  }}
  border-radius: 0.5rem;
  border: 2px solid rgba(204, 204, 204, 0.2);
  ${({ theme, checked }) =>
    checked && `border: 2px solid ${theme.buttonTheme.color};`}
`;

export const Span = styled.span`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  display: inline-block;
  transition: all 0.1s;
  border: 2.5px solid rgba(204, 204, 204, 0.2);
  ${({ theme, checked }) =>
    checked &&
    `border: 2.5px solid ${theme.buttonTheme.color};background-color:${theme.buttonTheme.color} !important;`}

  @media only screen and (max-width: 1024px) {
    position: absolute;
    top: 7px;
  }
`;

export const Div = styled.div`
  display: inline-block;
  height: 6rem;
  display: flex;
`;

export const Input = styled.input`
  display: none;
`;
export const DivIcon = styled.div`
  @media only screen and (max-width: 1024px) {
    width: 15%;
  }
`;

export const P = styled.p`
  width: 75%;
  text-align: center;
  margin-left: 0.2rem;
`;
