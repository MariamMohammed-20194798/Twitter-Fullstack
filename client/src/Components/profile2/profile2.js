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
  DivUserInfo,
  P,
  Bio,
  Border,
  Lable,
  CameraIcon,
  Input,
  DivInput,
  Image,
} from "./profile2Styled";
const Profile2 = (props) => {
  return (
    <div>
      <DivCover>
        <input id="coverImage" type="file" hidden />
        <Lable>
          <Image>
            <FiCamera />
          </Image>
          <CoverImg src={defaultCover} alt="user cover" />
        </Lable>
      </DivCover>
      <DivPhoto>
        <div>
          <input id="userImage" type="file" hidden />
          <Lable>
            <CameraIcon>
              <FiCamera />
            </CameraIcon>
            <Img src={defaultImg} alt="user" />
          </Lable>
        </div>
        <div>
          <Button btn margin onClick={props.closeProfileEdit}>
            Cancel
          </Button>
          <Button onClick={props.saveProfileEdit}>Save</Button>
        </div>
      </DivPhoto>
      <DivInput>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          defaultValue={props.name}
          onChange={props.nameChangeHandler}
        />
        <Input
          type="text"
          name="email"
          placeholder="Your Email"
          defaultValue={props.email}
          onChange={props.emailChangeHandler}
        />
        <Input
          type="text"
          name="bio"
          placeholder="Your Bio"
          defaultValue={props.bio}
          onChange={props.bioChangeHandler}
        />
      </DivInput>
    </div>
  );
};

export default Profile2;
