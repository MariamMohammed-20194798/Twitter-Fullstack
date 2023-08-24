import styled from "styled-components";
import { MdGif } from "react-icons/md";
import { FiBarChart2 } from "react-icons/fi";

export const Div = styled.div`
  display: flex;
  padding: 1.5rem;
  margin-top: -1.5rem;
  color: ${({ theme }) =>
    theme.bottom ? theme.buttonTheme.color : theme.theme.primaryTextColor};
  border-bottom: 12px solid rgba(204, 204, 204, 0.2);
`;
export const DivImg = styled.div`
  margin-right: 1rem;
`;
export const Img = styled.img`
  width: 6rem;
  height: 6rem;
  margin-top: 1.5rem;
  border-radius: 50%;
  @media (min-width: 1281px) {
    width: 4.5rem;
    height: 4.5rem;
  }
`;
export const DivTweet = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const TextArea = styled.textarea`
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 2.5rem;
  margin-top: 2.5rem;
  margin-bottom: -1rem;
  font-family: inherit;
  overflow: hidden;
  color: ${({ theme }) => theme.theme.primaryTextColor};
  &::placeholder {
    color: ${({ theme }) => theme.theme.secondaryTextColor};
  }
  @media (min-width: 1281px) {
    font-size: 1.5rem;
  }
`;
export const DivAddImg = styled.div`
  width: 10rem;
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;
export const Img2 = styled.img`
  width: 12rem;
  height: 9rem;
  margin-left: 3rem;
  margin-top: -2.5rem;
`;
export const DivRightTweet = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const DivRightTweetIcon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Input = styled.input`
  display: none;
`;

export const TweetButton = styled.button`
  color: #fff;
  background-color: ${({ theme }) => theme.buttonTheme.color};
  border: none;
  font-weight: bold;
  padding: 0.8rem 1.8rem;
  border-radius: 3rem;
  font-size: 1.9rem;
  margin-left: 0.8rem;
  @media (min-width: 1281px) {
    font-size: 1rem;
  }
`;
export const MdGifNew = styled(MdGif)`
  border: 1px solid ${({ theme }) => theme.buttonTheme.color};
  border-radius: 3px;
`;
export const FiBarChart = styled(FiBarChart2)`
  border-bottom: 1px solid ${({ theme }) => theme.buttonTheme.color};
  transform: rotate(90deg);
`;
