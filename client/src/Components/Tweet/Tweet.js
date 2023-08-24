import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "./../../imgs/default.jpeg";
import { FiMessageSquare, FiRepeat, FiHeart, FiShare } from "react-icons/fi";

import {
  P,
  Img,
  Div,
  Span,
  Image,
  FiDiv,
  Border,
  DivText,
  DivTweet,
  DivRightTweet,
} from "./TweetStyled";
export let imagePath = "";
export let userprofile = "";
const Tweet = ({ text, user }, props) => {
  //imagePath = require(`./../../imgs/${user.photo}`);
  return (
    <Div>
      <DivTweet>
        <Link to="/UserProfile">
          <Img alt="user" src={defaultImg} />
        </Link>
        <DivRightTweet>
          <DivText>
            <P>
              {user.name}
              <Span>@{user.username}</Span>
            </P>
            <P>{text}</P>
          </DivText>
          {props.img && (
            <Link
              exact
              to={{
                state: {
                  img: props.img,
                },
              }}
            >
              <Image
                style={{
                  backgroundImage: `url(${props.img})`,
                }}
              ></Image>
            </Link>
          )}
          <FiDiv>
            <FiMessageSquare />
            <FiRepeat />
            <FiHeart />
            <FiShare />
          </FiDiv>
        </DivRightTweet>
      </DivTweet>
      <Border />
    </Div>
  );
};

export default Tweet;
