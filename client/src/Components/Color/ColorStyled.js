import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 1024px) {
    width: 33.333%;
  }
`;
export const Input = styled.input`
  display: none;
`;

export const Span = styled.span`
  height: 4.5rem;
  width: 4.5rem;
  background-color: ${({ id }) => {
    switch (id) {
      case "blue":
        return "rgb(29, 161,242)";
      case "yellow":
        return "rgb(255, 172, 51)";
      case "pink":
        return "rgb(224, 36, 94)";
      case "purple":
        return "rgb(121, 75, 196)";
      case "orange":
        return "rgb(244, 93, 34)";
      case "green":
        return "rgb(23, 191, 99)";
      default:
        return;
    }
  }};
  border-radius: 50%;
  display: inline-block;
  transition: all 0.1s;
  ${({ checked }) =>
    !checked
      ? `
          &:hover {
              transform: scale(1.1);
          }
           `
      : "transform: scale(0.9);"}
`;

export const Label = styled.label`
  cursor: pointer;
  position: relative;
`;
export const DivIcon = styled.div`
  position: absolute;
  font-size: 3rem;
  top: 7px;
  left: 10px;
  color: rgb(255, 255, 255);
`;
export const Img = styled.img`
  margin-top: 0.5rem;
  width: 2.5rem;
  height: 2.5rem;
`;
