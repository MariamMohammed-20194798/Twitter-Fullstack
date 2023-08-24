import styled from "styled-components";
export const Div = styled.div`
  width: 120rem;
  margin-left: 2rem;
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

/* export const P = styled.p`
  color: ${({ theme }) => theme.textSecondry};
  font-size: 1.2rem;
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.textSecondry};
  }
`; */
