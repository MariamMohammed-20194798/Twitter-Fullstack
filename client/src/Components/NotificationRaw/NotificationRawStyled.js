import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";
import { MdNotifications } from "react-icons/md";
export const Div = styled.div`
  background-color: transparent;
  &:hover {
    background-color: ${(props) => props.theme.theme.hoverColor};
  }
  padding: 1rem 1.5rem;
  transition: all 0.4s;
  display: flex;
`;
export const P = styled.p`
  color: ${(props) =>
    props.secondry
      ? props.theme.textSecondry
      : props.theme.theme.primaryTextColor};
  font-size: 1.3rem;
  margin-bottom: ${(props) => (props.text ? "0.5rem" : "")};
`;
export const Span = styled.span`
  color: ${(props) => props.theme.theme.primaryTextColor};
  font-size: 1.5rem;
  font-weight: 700;
`;
export const Span2 = styled.span`
  color: ${(props) => props.theme.theme.secondaryTextColor};
  font-size: 1.3rem;
`;

export const DivIcons = styled.div`
  margin-right: 0.8rem;
  font-size: 3.1rem;
`;

export const AiFillHeartIcon = styled(AiFillHeart)`
  color: #e0245e;
`;
export const MdNotificationsIcon = styled(MdNotifications)`
  color: #1da1f2;
`;
export const DivRight = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;
export const DivImg = styled.div`
  margin-bottom: 0.8rem;
`;

export const Img = styled.img`
  width: 4.6rem;
  height: 4.6rem;
  border-radius: 50%;
  margin-right: 1rem;
`;
export const DivTitle = styled.div`
  margin-bottom: 0.8rem;
`;

export const Border = styled.div`
  border-bottom: 1px solid rgba(204, 204, 204, 0.2);
`;
