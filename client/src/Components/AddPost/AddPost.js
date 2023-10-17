import React, { useRef, useState, useEffect } from "react";
import { Button } from "../Button/Button";
import instance from "../../axios";
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

const AddPost = ({ setTweetData, tweetData }) => {
  const textareaRef = useRef(null);
  const [tweetImage, setTweetImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [userPhoto, setUserPhoto] = useState();

  useEffect(() => {
    (async () => {
      try {
        const res = await instance.get(`users/me`);
        setUserPhoto(res.data.data.data.photo);
      } catch (err) {
        console.log("error", err.response.data.message);
      }
    })();
  }, []);

  const sendTweet = async () => {
    let formdata = new FormData();
    const text = textareaRef.current.value;
    if (tweetImage) {
      console.log(tweetImage);
      formdata.append("photo", tweetImage);
    } else {
      formdata.append("text", text);
      textareaRef.current.value = "";
    }

    const res = await instance.post("users/addTweet", formdata);
    const data = res.data.data;
    //setTweetData((prev) => [data, ...prev]);
    setPreviewImage(null);
    setTweetImage(null);
  };

  const getTweetImage = async (e) => {
    let file = e.target.files[0];
    setTweetImage(file);
    let reader = new FileReader();
    reader.onload = (e) => {
      setPreviewImage(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <Div>
      <DivImg>
        <Img src={userPhoto} alt="user" />
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
