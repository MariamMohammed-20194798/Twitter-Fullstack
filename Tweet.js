import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { FiMessageSquare, FiRepeat, FiShare } from "react-icons/fi";
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

const Tweet = ({ text, tweetImg, user, id, likes }) => {
  const [userInfo, setUserInfo] = useState([]);
  const [openPhoto, setOpenPhoto] = useState(false);
  const handleOpenPhoto = () => setOpenPhoto(true);
  const handleClosePhoto = () => setOpenPhoto(false);
  const [liked, setLiked] = useState(likes.includes(user._id));

  useEffect(() => {
    (async () => {
      try {
        const res = await instance.get(`users/${user.username}`);
        setUserInfo(res.data.data.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [user.username]);

  const handleLikeDislike = async () => {
    try {
      const newLikedStatus = !liked;
      await instance.post(`users/${id}/like`, {
        params: { liked: newLikedStatus },
      });
      setLiked(newLikedStatus);
    } catch (error) {
      console.error("Error liking/disliking tweet:", error);
    }
  };

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
            <DivImg $imageurl={tweetImg} onClick={handleOpenPhoto}></DivImg>
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
            <FavoriteBorderIcon
              onClick={handleLikeDislike}
              style={{ color: liked ? "#e0245e" : "" }}
            ></FavoriteBorderIcon>

            <FiShare />
          </FiDiv>
        </DivRightTweet>
      </DivTweet>
      <Border />
    </Div>
  );
};

export default Tweet;
