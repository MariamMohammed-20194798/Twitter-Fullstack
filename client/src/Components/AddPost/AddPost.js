import React, { useRef, useState } from "react";
import { Button } from "../Button/Button";
import axios from "axios";
import instance from "../../axios";
import userImg from "./../../imgs/default.jpeg";
import { FiImage, FiSmile, FiCalendar } from "react-icons/fi";

import {
  Div,
  DivImg,
  Img,
  Img2,
  Input,
  MdGifNew,
  FiBarChart,
  DivTweet,
  TextArea,
  DivAddImg,
  TweetButton,
  DivRightTweet,
  DivRightTweetIcon,
} from "./AddpostStyled";

const AddPost = () => {
  const textareaRef = useRef(null);
  const [img, setImg] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const sendTweet = async () => {
    const text = textareaRef.current.value;
    try {
      if (text || img) {
        let res = await instance.post("users/addTweet", { text });
        if (img) res = await instance.post("users/addTweet", { img });
        sendTweet(res);
        setPreviewImage(null);
        setImg(null);
      }
    } catch (error) {
      console.error("Error sending tweet:", error);
    }
  };

  /*  const handleSendTweet = () => {
    const text = textareaRef.current.value;
    if (text || tweetImage) {
      const formData = new FormData();
      if (tweetImage)
        formData.append("tweetPhoto", tweetImage, tweetImage.name);
      formData.append("text", text);
      sendTweet(formData);
      setPreviewImage(null);
      setTweetImage(null);
    }
  }; */

  const getTweetImage = async (e) => {
    let file = e.target.files[0];
    setImg(file);
    let reader = new FileReader();
    reader.onload = (e) => {
      setPreviewImage(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <Div>
      <DivImg>
        <Img src={userImg} alt="user" />
      </DivImg>
      <DivTweet>
        <TextArea
          ref={textareaRef}
          placeholder="What's Happening"
          onKeyDown={(e) => {
            if (e.keyCode === 13 && !e.shiftKey) {
              e.preventDefault();
              return sendTweet();
            }
          }}
        />
        {previewImage && (
          <DivAddImg>
            <Img2 src={previewImage} alt="preview" />
          </DivAddImg>
        )}

        <DivRightTweet>
          <DivRightTweetIcon>
            <Input type="file" id="img" onChange={getTweetImage} />
            <label htmlFor="img">
              <Button>
                <FiImage />
              </Button>
            </label>
            <Button>
              <MdGifNew />
            </Button>
            <Button>
              <FiBarChart />
            </Button>
            <Button>
              <FiSmile />
            </Button>
            <Button>
              <FiCalendar />
            </Button>
          </DivRightTweetIcon>
          <DivRightTweet>
            <TweetButton type="button" onClick={sendTweet}>
              Tweet
            </TweetButton>
          </DivRightTweet>
        </DivRightTweet>
      </DivTweet>
    </Div>
  );
};
export default AddPost;
