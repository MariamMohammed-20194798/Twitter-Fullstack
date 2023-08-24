import styled from "styled-components";
export const Div = styled.div`
  background-color: ${({ theme }) => theme.theme.bgsecondaryColor};
  border-radius: 1.5rem;
  color: ${(props) => (props.header ? props.theme.buttonTheme.color : "")};
  padding: ${(props) => (props.header ? "1rem" : "")};
`;
export const SvgDiv = styled.i`
  margin-right: 2rem;
  font-size: 1.4rem;
  display: flex;
  transition: all 0.4s;
  color: ${({ theme }) => theme.buttonTheme.color};
`;
export const DivButton = styled.div`
  color: ${({ theme }) => theme.buttonTheme.color};
  background-color: transparent;
  cursor: pointer;
  transition: all 0.4s;
  padding: 0.7rem 1.3em;
  button {
    color: currentColor;
    outline: none;
    border: none;
    background: none;
    font-size: 1.3rem;
    cursor: pointer;
  }
`;

export const DivTrands = styled.div`
  padding: 0.8rem 0.5rem;
  position: fixed;
  width: 25.5rem;
  margin-top: 5rem;
`;
export const DivHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const H4 = styled.h4`
  padding: 1rem;
  font-size: 1.9rem;
  font-weight: bold;
  color: ${({ theme }) => theme.theme.primaryTextColor};
`;
export const Border = styled.div`
  border-bottom: 1px solid rgba(204, 204, 204, 0.2);
`;
