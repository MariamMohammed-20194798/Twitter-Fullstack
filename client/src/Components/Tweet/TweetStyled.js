import styled from "styled-components";
export const P = styled.p`
  color: ${({ theme }) => theme.theme.primaryTextColor};
  font-weight: ${(props) => (props.paragraph ? "400" : "700")};
  font-family: "Roboto";
  margin-top: 0.5rem;
  font-size: 1.4rem;
  a {
    color: ${({ theme }) => theme.buttonTheme.color};
  }
`;
export const Span = styled.span`
  color: ${({ theme }) => theme.theme.secondaryTextColor};
  font-weight: 400;
  margin-left: 0.5rem;
`;
export const Div = styled.div`
  color: ${({ theme }) => theme.theme.secondaryTextColor};
  transition: all 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.theme.hoverColor};
  }
`;
export const DivTweet = styled.div`
  display: flex;
  background-color: transparent;
  align-items: flex-start;
  padding: 1.4rem;
  word-break: break-all;
`;
export const Img = styled.img`
  cursor: pointer;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  margin-right: 1rem;
  @media (min-width: 1281px) {
    width: 4.5rem;
    height: 4.5rem;
  }
`;
export const DivRightTweet = styled.div`
  flex-direction: column;
  width: 100%;
`;
export const DivText = styled.div`
  margin-bottom: 2rem;
  width: auto;
`;

export const FiDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
  align-item: center;
  padding: 0rem 2rem;
  margin-left: -2.5rem;

  svg {
    cursor: pointer;
    font-size: 2.4rem;
    transition: all 0.3s;
  }
  @media (min-width: 1281px) {
    svg {
      font-size: 1.7rem;
    }
  }
  svg:nth-child(1) {
    &:hover {
      color: #1da1f2;
      border-radius:50%
      background-color: rgba(29, 161, 242, 0.07);
    }
  }
  svg:nth-child(2) {
    &:hover {
      color: #17bf63;
      border-radius:50%
      background-color: rgba(23, 191, 99, 0.07);
    }
  }
  svg:nth-child(3) {
    &:hover {
      color: #e0245e;
      border-radius:50%
      background-color: rgba(224, 36, 94, 0.07);
    }
  }
  svg:nth-child(4) {
    &:hover {
      color: yellow;
      border-radius:50%
      background-color: rgba(29, 161, 242, 0.07);
    }
  }
`;

export const Border = styled.div`
  border-bottom: 1px solid rgba(204, 204, 204, 0.2);
`;

export const Image = styled.div`
  width: auto;
  height: 30rem;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 1rem;
`;
