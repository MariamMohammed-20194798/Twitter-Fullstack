import styled from "styled-components";
export const IconButton = styled.div`
  padding: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.buttonTheme.Hover};
    border-radius: 10rem;
  }
  svg {
    color: ${({ theme }) => theme.buttonTheme.color};
    font-size: 2.7rem;
  }
  @media (min-width: 1281px) {
    svg {
      font-size: 1.7rem;
    }
  }
`;
