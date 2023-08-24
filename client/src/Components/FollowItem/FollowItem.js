import React from "react";
import { Div, P, Button, Border, DivImg } from "./FollowItemStyled";

export const FollowItem = (props) => {
  return (
    <div>
      <Div>
        <div>
          <DivImg alt="user" src={props.userImage} />
        </div>
        <div style={{ width: "100%" }}>
          <P>{props.name}</P>
          <P secondry>{props.handle}</P>
        </div>
        <div>
          <Button>Follow</Button>
        </div>
      </Div>
      <Border />
    </div>
  );
};
