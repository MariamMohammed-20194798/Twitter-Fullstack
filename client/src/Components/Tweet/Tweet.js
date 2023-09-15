import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FiMessageSquare, FiRepeat, FiHeart, FiShare } from "react-icons/fi";
import instance from "../../axios";
import {
  P,
  Img,
  Div,
  Span,
  DivImg,
  FiDiv,
  Border,
  BoxDiv,
  DivText,
  DivTweet,
  DivPhotoModal,
  DivRightTweet,
} from "./TweetStyled";
import UserProfile from "../../Pages/UserProfile/UserProfile";

const Tweet = ({ text, tweetImg, user }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "1.5px solid #000",
    borderRadius: "1.5rem",
    boxShadow: 24,
    p: 5,
  };

  const [userInfo, setUserInfo] = useState([]);
  const [openPhoto, setOpenPhoto] = useState(false);
  const handleOpenPhoto = () => setOpenPhoto(true);
  const handleClosePhoto = () => setOpenPhoto(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await instance.get(`users/${user.username}`);
        setUserInfo(res.data.data.data);
        console.log(res.data.data.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <Div>
      <DivTweet>
        <Img src={user.photo} alt="User Image" />
        <DivRightTweet>
          <DivText>
            <Link
              to={`/user/${userInfo.username}`}
              style={{ textDecoration: "none" }}
            >
              <P>
                {user.name}
                <Span>@{user.username}</Span>
              </P>
            </Link>
            <P>{text}</P>
          </DivText>
          {tweetImg && (
            <DivImg imageUrl={tweetImg} onClick={handleOpenPhoto}></DivImg>
          )}
          <Modal
            open={openPhoto}
            onClose={handleClosePhoto}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <BoxDiv>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <DivPhotoModal src={tweetImg} />
              </Typography>
            </BoxDiv>
          </Modal>
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
