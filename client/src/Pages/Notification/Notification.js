import React from "react";
import { Div, DivHeader, H4, DivNoti, Border } from "./NotificationStyled";
import { FiSettings } from "react-icons/fi";
import { NotificationRaw } from "../../Components/NotificationRaw/NotificationRaw";

import jim from "./../../imgs/jim.jpeg";
import dwight from "./../../imgs/dwight.jpg";
import michael from "./../../imgs/MichaelScott.png";
export const Notifications = (props) => {
  return (
    <DivNoti>
      <DivHeader>
        <div>
          <H4>Notifications</H4>
        </div>
        <Div>
          <FiSettings size={25} />
        </Div>
      </DivHeader>
      <Border />
      <div>
        <NotificationRaw
          title={"Recent Tweet from "}
          handle={"Jim halpert"}
          src={jim}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          repellat, ipsum sed neque aliquam tempora hic voluptatibus
        </NotificationRaw>
        <NotificationRaw
          title={"your tweet is liked from "}
          handle={"michael scott"}
          src={michael}
          icon="heart"
        />
        <NotificationRaw
          title={"your tweet is liked from "}
          handle={"dwight shrute"}
          src={dwight}
          icon="heart"
        />

        <NotificationRaw
          title={"Recent Tweet from "}
          handle={"Jim halpert"}
          src={jim}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          repellat, ipsum sed neque aliquam tempora hic voluptatibus magni eos
          similiqu
        </NotificationRaw>
        <NotificationRaw
          title={"your tweet is liked from "}
          handle={"Jim halpert"}
          src={jim}
          icon="heart"
        >
          Lorem, ipsum dolor sit amet consectetur ,
        </NotificationRaw>
        <NotificationRaw
          title={"your tweet is liked from "}
          handle={"dwight shrute"}
          src={dwight}
          icon="heart"
        />
        <NotificationRaw
          title={"Recent Tweet from "}
          handle={"Jim halpert"}
          src={jim}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          repellat, ipsum sed neque aliquam tempora hic voluptatibus magni eos
          similique blanditiis
        </NotificationRaw>
        <NotificationRaw
          title={"your tweet is liked from "}
          handle={"michael scott"}
          src={michael}
          icon="heart"
        />
        <NotificationRaw
          title={"Recent Tweet from "}
          handle={"Jim halpert"}
          src={jim}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          repellat, ipsum sed
        </NotificationRaw>
        <NotificationRaw
          title={"Recent Tweet from "}
          handle={"Jim halpert"}
          src={jim}
        >
          tempora hic voluptatibus magni eos similique blanditiis
        </NotificationRaw>
        <NotificationRaw
          title={"your tweet is liked from "}
          handle={"Jim halpert"}
          src={jim}
          icon="heart"
        >
          Lorem, ipsum dolor sit amet consectetur ,
        </NotificationRaw>
      </div>
    </DivNoti>
  );
};
