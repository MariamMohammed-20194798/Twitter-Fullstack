import { React } from "react";
import defaultCover from "./../../imgs/defaultCover.jpg";
import defaultImg from "./../../imgs/default.jpeg";
import { FiCamera } from "react-icons/fi";

import {
  DivCover,
  CoverImg,
  DivPhoto,
  Img,
  Button,
  DivUsername,
  P,
  Bio,
  Border,
  Lable,
  CameraIcon,
  Input,
  DivInput,
  Image,
} from "./ProfileStyled";
const Profile = {
  Default: (props) => {
    return (
      <div>
        <DivCover>
          <CoverImg alt="CoverTmg" src={defaultCover} />
        </DivCover>
        <DivPhoto>
          <div>
            <Img src={defaultImg} alt="user" />
          </div>
          <div>
            <Button trans onClick={props.editProfileHandler}>
              Edit Profile
            </Button>
          </div>
        </DivPhoto>
        <DivUsername>
          <P>{props.name}</P>
          <P secondary>@{props.username}</P>
          <Bio>{props.bio}</Bio>
        </DivUsername>
        <Border />
      </div>
    );
  },
  Edit: (props) => {
    return (
      <div>
        <DivCover>
          <input id="coverImage" type="file" hidden />
          <Lable htmlFor="coverImage">
            <Image>
              <FiCamera />
            </Image>
            <CoverImg src={defaultCover} alt="user cover" />
          </Lable>
        </DivCover>
        <DivPhoto>
          <div>
            <input id="userImage" type="file" hidden />
            <Lable htmlFor="userImage">
              <CameraIcon>
                <FiCamera />
              </CameraIcon>
              <Img src={defaultImg} alt="user" />
            </Lable>
          </div>
          <div>
            <Button trans margin onClick={props.closeEdit}>
              Cancel
            </Button>
            <Button>Save</Button>
          </div>
        </DivPhoto>
        <DivInput>
          <Input
            value={props.name}
            type="text"
            placeholder="Your Name"
            name="name"
            defaultValue="Mariam"
          />
          <Input
            value={props.email}
            type="text"
            placeholder="Your email"
            name="email"
            defaultValue="mariam272"
          />
          <Input
            value={props.bio}
            type="text"
            placeholder="Your Bio"
            name="Bio"
            defaultValue="Welocme To My Profile"
          />
        </DivInput>
      </div>
    );
  },
};

export default Profile;
