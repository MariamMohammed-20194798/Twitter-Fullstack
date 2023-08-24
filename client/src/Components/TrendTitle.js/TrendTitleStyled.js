import styled from "styled-components";

export const Div = styled.div`
  background-color: transparent;
  cursor: pointer;
  transition: all 0.4s;
  &:hover {
    background-color: ${({ theme }) => theme.theme.bgHover};
  }
  color: ${(props) =>
    props.Header
      ? props.theme.theme.secondaryTextColor
      : props.theme.theme.primaryTextColor};
  padding: ${(props) => (props.Header ? "0.5rem" : "")};
  border-radius: ${(props) => (props.Header ? "3rem" : "")};
  display: ${(props) => (props.Header ? "flex" : "")};

  &:hover {
    color: ${(props) => (props.Header ? props.theme.theme.color : "")};
    background-color: ${(props) =>
      props.Header ? props.theme.theme.hover : ""};
  }
`;

export const P = styled.p`
  color: ${(props) =>
    props.Secondry
      ? props.theme.theme.secondaryTextColor
      : props.theme.theme.primaryTextColor};
  font-size: ${(props) => (props.Secondry ? "1.1rem" : "1.4rem")};
  font-weight: 700;
`;

export const DivTrend = styled.div`
  padding: 0.5rem 1.5rem;
`;
export const DivHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DivText = styled.div`
  margin-bottom: 0.5rem;
`;
export const Border = styled.div`
  border-bottom: 1px solid rgba(204, 204, 204, 0.2);
`;
