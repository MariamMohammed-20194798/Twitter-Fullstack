import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { WiStars } from "react-icons/wi";
export const DivHome = styled.div`
  border-right: 1px solid rgba(204, 204, 204, 0.2);
  width: 100%;
  min-height: 100vh;
  @media (max-width: 700px) {
    width: auto;
  }
`;

export const Header = styled.div`
  display: flex;
  color: ${({ theme }) => theme.buttonTheme.color};
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  justify-content: space-between;
  align-items: center;
`;
export const DivNavLink = styled(NavLink)`
  text-decoration: none;
  padding: 0.3rem 1.5rem;
  font-size: 2rem;
`;
export const P = styled.p`
  text-decoration: none;
  font-family: "Roboto";
  font-size: 2.5rem;
  font-weight: 900;
  color: ${({ theme }) => theme.theme.primaryTextColor};
  padding: 0.3rem 1.5rem;
`;
export const Border = styled.div`
  border-bottom: 1px solid rgba(204, 204, 204, 0.2);
`;
export const DivSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid rgba(204, 204, 204, 0.2);
  min-height: 11vh;
`;
export const WiStarsIcon = styled(WiStars)`
  font-size: 4rem;
`;
