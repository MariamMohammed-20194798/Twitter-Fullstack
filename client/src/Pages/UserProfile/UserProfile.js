import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import instance from "../../axios";
import Tweet from "../../Components/Tweet/Tweet";
import { MdArrowBack } from "react-icons/md";
import { Spinner } from "./../../Components/Spinner/Spinner";
import Profile from "../../Components/Profile/Profile";
import {
  Div,
  DivArrow,
  Header,
  Border,
  P,
  DivSpinner,
} from "./UserProfileStyled";
import { Button } from "./../../Components/Button/Button";
const UserProfile = () => {
  const { userName } = useParams();
  const [bio, setBio] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tweets, setTweets] = useState([]);
  const [photo, setPhoto] = useState("photo");
  const [cover, setCover] = useState("cover");
  const [reload, setReload] = useState(false);
  const [tweetsNum, setTweetsnum] = useState();
  const [loading, setLoading] = useState(true);
  const [editProf, setEditProf] = useState(false);

  const isReload = () => {
    setReload((prev) => !prev);
  };

  useEffect(() => {
    (async () => {
      setLoading(false);
      try {
        const res = await instance.get(`users/${userName}`);
        setName(res.data.data.data.name);
        setEmail(res.data.data.data.email);
        setBio(res.data.data.data.Bio);
        setPhoto(res.data.data.data.photo);
        setCover(res.data.data.data.cover);
        const userTweets = await instance.get(`users/${userName}/tweets/`);
        setTweets(userTweets.data.data.data);
        setTweetsnum(userTweets.data.results);
      } catch (err) {
        setLoading(false);
      }
    })();
  }, [userName]);

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const bioChangeHandler = (e) => {
    setBio(e.target.value);
  };
  const photoChangeHandler = (e) => {
    setPhoto(e.target.files[0]);
    if (e.target.files && e.target.files[0]) {
      setPhoto(URL.createObjectURL(e.target.files[0]));
    }
  };
  const coverChangeHandler = (e) => {
    setCover(e.target.files[0]);
    if (e.target.files && e.target.files[0]) {
      setCover(URL.createObjectURL(e.target.files[0]));
    }
  };

  const editProfileHandler = () => {
    setEditProf(true);
  };

  const saveProfileEdit = async () => {
    try {
      let formdata = new FormData();
      formdata.append("name", name);
      formdata.append("email", email);
      formdata.append("bio", bio);
      formdata.append("photo", photo);
      formdata.append("cover", cover);
      await instance.patch(`users/updateMe`, formdata);
      isReload();
      setEditProf(false);
    } catch (err) {
      console.log(err);
    }
  };

  const closeProfileEdit = () => {
    setEditProf(false);
    setPhoto(null);
    setCover(null);
  };

  return (
    <Div>
      <Header>
        <DivArrow>
          <NavLink to="/Home">
            <Button>
              <MdArrowBack />
            </Button>
          </NavLink>
        </DivArrow>
        <div>
          <P>{name}</P>
          <P secondary>{tweetsNum} Tweets</P>
        </div>
      </Header>
      <Border />
      {loading ? (
        <DivSpinner>
          <Spinner />
        </DivSpinner>
      ) : (
        <div>
          {" "}
          {editProf ? (
            <Profile.Edit
              bio={bio}
              name={name}
              email={email}
              photo={photo}
              cover={cover}
              userName={userName}
              photoChangeHandler={photoChangeHandler}
              coverChangeHandler={coverChangeHandler}
              nameChangeHandler={nameChangeHandler}
              emailChangeHandler={emailChangeHandler}
              bioChangeHandler={bioChangeHandler}
              closeProfileEdit={closeProfileEdit}
              saveProfileEdit={saveProfileEdit}
            />
          ) : (
            <Profile.Default
              bio={bio}
              name={name}
              email={email}
              photo={photo}
              cover={cover}
              userName={userName}
              editProfileHandler={editProfileHandler}
            />
          )}
        </div>
      )}
      <Border />
      {tweets.map((tweet) => (
        <div key={tweet._id}>
          <Tweet text={tweet.text} user={tweet.user} tweetImg={tweet.photo} />
        </div>
      ))}
    </Div>
  );
};
export default UserProfile;
