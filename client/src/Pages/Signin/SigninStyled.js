import styled from "styled-components";
import { FaTwitter } from "react-icons/fa";

export const Div = styled.div`
  text-align: center;
  align-self: center;
`;

export const FaTwitterIcon = styled(FaTwitter)`
  color: rgb(29, 155, 240);
`;
export const Title = styled.div`
  padding-top: 2rem;
  padding-bottom: 3rem;
  text-align: center;
  font-size: 2.5rem;
`;

export const BtnBox = styled.div`
  text-align: center;
  align-self: center;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const BtnLogin = styled.button`
  padding: 1rem 7.5rem;
  text-decoration: none;
  color: #ffffff;
  font-size: 1.5rem;
  border: none;
  border-radius: 5rem;
  background-color: #0f1419;
  &:hover {
    background-color: #3d3d3d;
  }
`;

export const P = styled.p`
  color: red;
  margin-right: 9rem;
  font-weight: bold;
  text-align: center;
  align-self: center;
`;
