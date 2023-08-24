import styled from "styled-components";

export const Div = styled.div`
  background-color: transparent;
  cursor: pointer;
  transition: all 0.4s;
  padding: 0.3rem;
  align-items: center;
  &:hover {
    background-color: ${({ theme }) => theme.theme.hoverColor};
  }
  color: ${(props) =>
    props.Header
      ? props.theme.theme.secondaryTextColor
      : props.theme.theme.primaryTextColor};
  padding: ${(props) => (props.Header ? "0.5rem" : "")};
  border-radius: ${(props) => (props.Header ? "3rem" : "")};
  display: flex;

  &:hover {
    color: ${(props) => (props.Header ? props.theme.buttonTheme.color : "")};
    background-color: ${(props) =>
      props.Header ? props.theme.buttonTheme.Hover : ""};
  }
`;

export const P = styled.p`
  color: ${(props) =>
    props.secondry
      ? props.theme.theme.secondaryTextColor
      : props.theme.theme.primaryTextColor};
  font-size: ${(props) => (props.secondry ? "1.1rem" : "1.5rem")};
  margin-bottom: ${(props) => (props.secondry ? "" : "0.5rem")};
`;

export const Button = styled.button`
  border: 1px solid ${({ theme }) => theme.buttonTheme.color};
  outline: none;
  background: transparent;
  border-radius: 3rem;
  padding: 0.4rem 1.5rem;
  color: ${({ theme }) => theme.buttonTheme.color};
  cursor: pointer;
  font-weight: 900;

  &:hover {
    background: ${({ theme }) => theme.buttonTheme.Hover};
  }
`;

export const DivImg = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  margin-right: 1rem;
`;

export const Border = styled.div`
  border-bottom: 1px solid rgba(204, 204, 204, 0.2);
`;
