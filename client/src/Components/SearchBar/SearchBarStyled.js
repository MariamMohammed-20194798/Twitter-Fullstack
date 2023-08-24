import styled from "styled-components";

export const Form = styled.div`
  width: 28rem;
  position: fixed;
  padding: 1rem;
`;
export const DivSearch = styled.div`
  display: flex;
  position: relative;
  left: -25px;
  top: 0;
  align-items: center;
`;
export const DivIcon = styled.div`
  color: ${({ theme }) => theme.theme.secondaryTextColor};
  position: relative;
  left: 32px;
  top: 3px;
  font-size: 2rem;
`;

export const Input = styled.input`
  width: 100%;
  background-color: ${({ theme }) => theme.theme.bgsecondaryColor};
  padding: 1.1rem;
  border: none;
  border-radius: 2rem;
  outline: none;
  color: ${({ theme }) => theme.theme.primaryTextColor};
  font-size: 1.3rem;
  padding-left: 3rem;
  &:focus {
    border: 1px solid ${({ theme }) => theme.buttonTheme.color};
  }
`;
