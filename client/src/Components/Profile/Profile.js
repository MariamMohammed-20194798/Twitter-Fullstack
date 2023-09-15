import { React } from "react";
import { useUsernameStore } from "../../styledComponents/useUsernameStore";
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
} from "./ProfileStyled";
const Profile = {
  Default: (props) => {
    const username = useUsernameStore((state) => state.username);
    return (
      <div>
        <DivCover>
          <CoverImg src={props.cover} alt="userCover" />
        </DivCover>
        <DivPhoto>
          <div>
            <Img src={props.photo} alt="user" />
          </div>
          {/* {props.userName === username.username ? (
            <div>
              <Button btn onClick={props.editProfileHandler}>
                Edit Profile
              </Button>
            </div>
          ) : (
            ""
          )} */}
          <div>
            <Button btn onClick={props.editProfileHandler}>
              Edit Profile
            </Button>
          </div>
        </DivPhoto>
        <DivUserInfo>
          <P>{props.name}</P>
          <P secondary>{props.email}</P>
          <Bio>{props.bio}</Bio>
        </DivUserInfo>
        <Border />
      </div>
    );
  },

  Edit: (props) => {
    return (
      <div>
        <DivCover>
          <input
            id="coverImage"
            type="file"
            onChange={props.coverChangeHandler}
            hidden
          />
          <Lable for="coverImage">
            <Image>
              <FiCamera />
            </Image>
            <CoverImg src={props.cover} alt="userCover" />
          </Lable>
        </DivCover>
        <DivPhoto>
          <div>
            <input
              id="userImage"
              type="file"
              onChange={props.photoChangeHandler}
              hidden
            />
            <Lable for="userImage">
              <CameraIcon>
                <FiCamera />
              </CameraIcon>
              <Img src={props.photo} alt="user" />
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
  },
};

export default Profile;
