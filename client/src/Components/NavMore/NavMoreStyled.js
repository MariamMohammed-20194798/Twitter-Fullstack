import styled from "styled-components";

export const Form = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;

  @media (min-width: 960px) {
    position: fixed;
    padding-left: 16rem;
  }
  @media (min-width: 1020px) {
    position: fixed;
    padding-left: 29rem;
  }
`;

export const Div = styled.div`
  width: 24rem;
  border-radius: 0.9rem;
  position: relative;
  z-index: 8000;
  background-color: ${({ theme }) => theme.theme.bgprimaryColor};
  box-shadow: ${({ theme }) => `4px 3px 20px 5px ${theme.theme.ShadowColor}`};
  @media (min-width: 1020px) {
    position: fixed;
    width: 20rem;
  }
`;
export const DivImg = styled.div`
  padding: 1.8rem;
`;
export const Img = styled.img`
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
  margin-bottom: 0.5rem;
`;
export const P = styled.p`
  color: ${(props) =>
    props.primary
      ? props.theme.theme.primaryTextColor
      : props.theme.theme.secondaryTextColor};
  margin-top: ${({ theme }) => (theme.topics ? "0" : "0.5rem")};
  font-size: ${({ theme }) => (theme.primary ? "1.7rem" : "1.6rem")};
  margin-left: ${(el) => (el.topics ? "1.3rem" : "0")};
  font-family: "Roboto", "sans-serif";
  @media (min-width: 960px) {
    font-size: ${({ theme }) => (theme.primary ? "1.7rem" : "1.5rem")};
  }
`;
export const A = styled.a`
  color: ${({ theme }) => theme.theme.secondaryTextColor};
  font-size: 3rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: "Cairo", "sans-serif";
  cursor: pointer;
  padding: 1.7rem 1.5rem;
  transition: all 0.3s;
  overflow: hidden;
  &:hover {
    background-color: ${({ theme }) => theme.theme.hoverColor};
  }

  @media (min-width: 960px) {
    &:hover {
      background-color: ${({ theme }) => theme.theme.hoverColor};
    }
    font-size: 2.5rem;
    padding: 1rem 1.5rem;
  }
`;
export const Border = styled.div`
  border-bottom: 1px solid rgba(204, 204, 204, 0.2);
  @media (min-width: 960px) {
    margin-top: -0.1rem;
  }
`;
