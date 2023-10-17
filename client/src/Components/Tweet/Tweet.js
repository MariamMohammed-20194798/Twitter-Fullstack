import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "@mui/material/Modal";

import Typography from "@mui/material/Typography";
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
const Tweet = ({ text, tweetImg, user, id, numOfLikes, numOfComments }) => {
  const defaultNumOfLikes = numOfLikes.length;
  const [userInfo, setUserInfo] = useState([]);
  const [likes, setLikes] = useState(defaultNumOfLikes);
  const [comments, setComments] = useState(numOfComments);
  const [openPhoto, setOpenPhoto] = useState(false);
  const handleOpenPhoto = () => setOpenPhoto(true);
  const handleClosePhoto = () => setOpenPhoto(false);

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

  const handleLikes = async () => {
    const likesRes = await instance.post(`users/${id}/like`);
    setLikes(likesRes.data.likes.length);
  };

  const handlelComments = async () => {
    const commentsRes = await instance.post(`users/${id}/comments`);
    setComments(commentsRes.data.comments);
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
            {comments ? (
              <>
                <p
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                  }}
                >
                  {comments}
                  <FiMessageSquare
                    style={{ color: "#1da1f2" }}
                    onClick={handlelComments}
                  />
                </p>
              </>
            ) : (
              <FiMessageSquare onClick={handlelComments} />
            )}

            <FiRepeat />
            {likes ? (
              <>
                <p
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                  }}
                >
                  {likes}
                  <FiHeart style={{ color: "#e0245e" }} onClick={handleLikes} />
                </p>
              </>
            ) : (
              <FiHeart onClick={handleLikes} />
            )}

            <FiShare />
          </FiDiv>
        </DivRightTweet>
      </DivTweet>
      <Border />
    </Div>
  );
};

export default Tweet;
