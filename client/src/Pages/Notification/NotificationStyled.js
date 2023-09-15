import styled from "styled-components";

export const H4 = styled.h4`
  color: ${(props) => props.theme.theme.primaryTextColor};
  font-size: 2rem;
  font-weight: 900;
`;

export const Div = styled.div`
  padding: 0.9rem;
  color: currentColor;
  border-radius: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.4s;
  &:hover {
    background-color: ${(props) => props.theme.theme.hoverColor};
  }
`;

export const DivHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: ${(props) => props.theme.theme.bgprimaryColor};
  color: ${(props) => props.theme.buttonTheme.color};
`;

export const DivNoti = styled.div`
  border-right: 1px solid rgba(204, 204, 204, 0.2);
  min-height: 100vh;
  cursor: pointer;
  overflow: hidden;

  @media (max-width: 700px) {
    width: auto;
  }
`;

export const Border = styled.div`
  border-bottom: 1px solid rgba(204, 204, 204, 0.2);
`;
