import { React, useState, useEffect } from "react";
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
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [username, setUsername] = useState([]);
  const [bio, setBio] = useState([]);
  const [tweetsNum, setTweetsnum] = useState();
  const [editProf, setEditProf] = useState(false);
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await instance.get("users/me");
        setName(res.data.data.data.name);
        setEmail(res.data.data.data.email);
        setUsername(res.data.data.data.username);
        setBio(res.data.data.data.Bio);
        const userTweets = await instance.get(`users/${username}/tweets/`);
        setTweets(userTweets.data.data.data);
        setTweetsnum(userTweets.data.results);
      } catch (err) {
        setLoading(false);
      }
    })();
  }, [username]);

  const editProfileHandler = () => {
    setEditProf(true);
  };

  const closeEdit = () => {
    setEditProf(false);
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
              name={name}
              email={email}
              bio={bio}
              username={username}
              closeEdit={closeEdit}
            />
          ) : (
            <Profile.Default
              bio={bio}
              username={username}
              editProfileHandler={editProfileHandler}
            />
          )}
        </div>
      )}
      <Border />
      {tweets.map((tweet) => (
        <div key={tweet._id}>
          <Tweet text={tweet.text} user={tweet.user} />
        </div>
      ))}
    </Div>
  );
};
export default UserProfile;
