import styled from "styled-components";

export const Span = styled.span`
  color: ${({ theme }) => theme.theme.secondaryTextColor};
  font-weight: 300;
  margin-left: 1rem;
`;
export const H4 = styled.h4`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.theme.primaryTextColor};
`;
export const P = styled.p`
  color: ${({ theme }) => theme.theme.primaryTextColor};
  font-family: "Roboto";
  font-size: 1.4rem;
`;

export const Div = styled.div`
  background-color: transparent;
  border-radius: 1rem;
  border: 1px solid rgba(204, 204, 204, 0.2);
  display: flex;
  align-items: flex-start;
  padding: 1rem 2rem;
  height: auto;
`;
export const DivImg = styled.div`
  display: flex;
  align-items: flex-start;
  margin-right: 1rem;
`;
export const Img = styled.img`
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
`;
export const DivContent = styled.div`
  margin-bottom: 0.5rem;
`;
export const DivText = styled.div`
  font-weight: 300;
`;
