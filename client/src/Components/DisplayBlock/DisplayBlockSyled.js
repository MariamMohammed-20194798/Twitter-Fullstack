import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  z-index: 50;
`;
export const Div = styled.div`
  background-color: ${(props) =>
    props.secondry
      ? props.theme.theme.bgsecondaryColor
      : props.theme.theme.bgprimaryColor};
  z-index: 300;
  width: 65rem;
  margin-bottom: 1rem;
  position: fixed;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 2rem;
  overflow: hidden;
  @media only screen and (max-width: 1024px) {
    width: 100%;
    height: 100%;
    padding: 4rem;
  }
`;
export const DivBlock = styled.div`
  background-color: ${(props) =>
    props.secondry
      ? props.theme.theme.bgsecondaryColor
      : props.theme.theme.bgprimaryColor};
  z-index: 300;
  width: ${(props) => (props.secondry ? "" : "65rem")};
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  justify-content: space-between;
`;
export const Header = styled.div`
  text-align: center;
`;
export const H4 = styled.h4`
  color: ${({ theme }) => theme.theme.primaryTextColor};
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;
export const P = styled.p`
  color: ${({ theme }) => theme.theme.secondaryTextColor};
  font-size: ${(props) => (props.title ? "1.5rem" : "1.8rem")};
  font-weight: ${(props) => (props.title ? "900" : "400")};
  margin-bottom: 1rem;
`;
export const DivDisplay = styled.div`
  width: 70%;
  margin-botton: 1rem;
  align-self: center;
`;
export const Div2 = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Form = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media only screen and (max-width: 1024px) {
    & > :first-child {
      margin-bottom: 2rem;
    }
  }
`;
export const Form2 = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    :nth-child(1) {
      margin-bottom: 1rem;
    }
    :nth-child(2) {
      margin-bottom: 1rem;
    }
    :nth-child(3) {
      margin-bottom: 1rem;
    }
  }
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.buttonTheme.color};
  color: #fff;
  font-size: 1.7rem;
  font-weight: 700;
  padding: 1rem 1.8rem;
  outline: none;
  border: none;
  cursor: pointer;
  align-self: center;
  border-radius: 3rem;
`;

export const Navlink = styled(NavLink)`
  justify-content: center;
  text-align: center;
  align-items: center;
`;
