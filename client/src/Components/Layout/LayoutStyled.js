import styled from "styled-components";

export const Div = styled.div`
  background-color: ${({ theme }) => theme.theme.bgprimaryColor};
  min-height: 100vh;
`;
export const Main = styled.main`
  margin-left: 50rem;
  border-left: 1px solid rgba(204, 204, 204, 0.2);
  display: flex;
  justify-content: space-between;
  @media (max-width: 1024px) {
    margin-left: 13rem;
  }
`;
export const DivIn = styled.div`
  width: 155rem;
`;
