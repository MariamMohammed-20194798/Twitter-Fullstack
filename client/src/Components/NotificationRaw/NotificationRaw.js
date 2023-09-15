import React from "react";
import {
  Div,
  Span,
  P,
  Span2,
  DivIcons,
  DivRight,
  DivImg,
  Img,
  DivTitle,
  Border,
  AiFillHeartIcon,
  MdNotificationsIcon,
} from "./NotificationRawStyled";
export const NotificationRaw = (props) => {
  return (
    <React.Fragment>
      <Div>
        <DivIcons>
          {props.icon === "heart" ? (
            <AiFillHeartIcon />
          ) : (
            <MdNotificationsIcon />
          )}
        </DivIcons>
        <DivRight>
          <DivImg>
            <Img src={props.src} alt="user" />
          </DivImg>
          <DivTitle>
            <P text>
              {props.title}
              <Span>{props.handle}</Span>
            </P>
          </DivTitle>
          {props.children && (
            <P>
              <Span2>{props.children}</Span2>
            </P>
          )}
        </DivRight>
      </Div>
      <Border />
    </React.Fragment>
  );
};
