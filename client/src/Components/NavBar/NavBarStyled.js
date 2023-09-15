import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const Div = styled.div`
  padding: 2rem;
  margin-left: 30rem;
  height: 100vh;
  position: fixed;
  @media (max-width: 1281px) {
    margin-left: 2rem;
  }
`;
export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Img = styled.img`
  width: 2rem;
  height: 2rem;
  font-size: 2.3rem;
  border-radius: 50%;

  @media (max-width: 1024px) {
    width: 3.3rem;
    height: 3.3rem;
    margin-left: 0.4rem;
    border-radius: 50%;
  }
`;
export const Navlink = styled(NavLink)`
  list-style: none;
  font-size: 2.3rem;
  text-decoration: none;
  color: currentColor;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1024px) {
    font-size: 3.6rem;
    margin-top: -2rem;
    margin-bottom: 3.9rem;
  }
`;

export const P = styled.p`
  font-size: 1.3rem;
  margin-left: 1.5rem;
  @media (max-width: 1024px) {
    display: none;
  }
`;
export const Btn = styled.button`
  color: ${({ theme }) => theme.buttonTheme.color};
  font-size: 3rem;
  display: flex;
  align-items: center;
  background: none;
  border: none;
  font-weight: 900;
  cursor: pointer;
  @media (max-width: 1024px) {
    margin-bottom: 5rem;
    margin-left: 0.5rem;
    margin-top: -2rem;
  }
  &:hover {
    color: #1da1f2;
  }
`;
export const Button = styled.button`
  color: #fff;
  background-color: ${({ theme }) => theme.buttonTheme.color};
  outline: none;
  border: none;
  padding: 1rem 6rem;
  border-radius: 3.5rem;
  -webkit-touch-callout: none;
  cursor: pointer;
  h3 {
    font-size: 1.3rem;
    font-weight: 700;
  }
  svg {
    display: none;
  }
  @media (max-width: 1024px) {
    position: relative;
    padding: 1rem 1rem;
    margin-top: -3rem;
    border-radius: 50%;
    h3 {
      display: none;
    }
    svg {
      display: block;
      font-size: 3rem;
    }
  }
`;
