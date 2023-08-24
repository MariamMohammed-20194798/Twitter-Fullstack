import React from "react";
import { DivFollow, Border, Div, DivButton, H4 } from "./FollowStyled";
import { FollowItem } from "../FollowItem/FollowItem";
import pic1 from "./../../imgs/pic1.jpeg";
import pic2 from "./../../imgs/pic2.jpeg";
import pic3 from "./../../imgs/pic3.jpeg";
export const Follow = () => {
  return (
    <DivFollow>
      <Div>
        <Div header>
          <H4>Who to follow</H4>
        </Div>
        <Border />
        <div>
          <FollowItem
            userImage={pic1}
            handle={"@GÖRKEM_SEVİN"}
            name={"gorkem"}
          />
          <FollowItem userImage={pic2} handle={"@Maro_Muhamed"} name={"maro"} />
          <FollowItem
            userImage={pic3}
            handle={"@Tolga_Saritast"}
            name={"tolga"}
          />
        </div>
        <DivButton>
          <button>Show more</button>
        </DivButton>
      </Div>
    </DivFollow>
  );
};
