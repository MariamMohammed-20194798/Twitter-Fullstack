import React from "react";
import {
  Div,
  DivImg,
  Img,
  Span,
  H4,
  P,
  DivContent,
  DivText,
} from "./TweetPreviewStyled";

const TweetPreview = (props) => {
  return (
    <Div>
      <DivImg>
        <Img src={props.userimg} alt="preview" />
      </DivImg>
      <div>
        <DivContent>
          <H4>
            {props.name}
            <Span>@{props.handle}</Span>
          </H4>
        </DivContent>
        <DivText>
          <P>{props.children}</P>
        </DivText>
      </div>
    </Div>
  );
};
export default TweetPreview;
