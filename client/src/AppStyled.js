import styled from "styled-components";

export const Div = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
  background-color: ${({ theme }) => theme.theme.bgprimaryColor};
`;
