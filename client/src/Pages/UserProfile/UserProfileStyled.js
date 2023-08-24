import styled from "styled-components";

export const Div = styled.div`
  border-right: 1px solid rgba(204, 204, 204, 0.2);
  min-height: 100vh;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const Header = styled.div`
  padding: 0.8rem;
  display: flex;
  align-items: center;
`;

export const DivArrow = styled.div`
  margin-right: 1rem;
`;
export const DivSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid rgba(204, 204, 204, 0.2);
  min-height: 100vh;
`;
export const Border = styled.div`
  border-bottom: 1px solid rgba(204, 204, 204, 0.2);
`;

export const P = styled.p`
  color: ${(props) =>
    props.secondary
      ? props.theme.theme.secondaryTextColor
      : props.theme.theme.primaryTextColor};
  font-size: ${(el) => (el.secondary ? "1.5rem" : "2rem")};
  font-weight: ${(el) => (el.secondary ? "400" : "700")};
  margin-top: ${(el) => (el.secondary ? ".4rem" : "")};
`;
