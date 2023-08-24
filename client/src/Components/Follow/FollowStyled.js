import styled from "styled-components";

export const DivFollow = styled.div`
  padding: 0.8rem 0.5rem;
  position: fixed;
  width: 25.5rem;
  margin-top: 49rem;
`;
export const Border = styled.div`
  border-bottom: 1px solid rgba(204, 204, 204, 0.2);
`;
export const Div = styled.div`
  background-color: ${({ theme }) => theme.theme.bgsecondaryColor};
  border-radius: 1.5rem;
  color: ${(props) => (props.header ? props.theme.buttonTheme.color : "")};
  margin-bottom: 0.5rem;
  padding: 0.3rem 1rem;
`;
export const H4 = styled.h4`
  color: ${({ theme }) => theme.theme.primaryTextColor};
  font-weight: 900;
  font-size: 1.8rem;
`;
export const DivButton = styled.div`
  color: ${({ theme }) => theme.buttonTheme.color};
  background-color: transparent;
  cursor: pointer;
  transition: all 0.4s;
  padding: 0.5rem 1rem;
  button {
    color: currentColor;
    outline: none;
    border: none;
    background: none;
    font-size: 1.3rem;
    cursor: pointer;
  }
`;
