import axios from "axios";
import Tweet from "../../Components/Tweet/Tweet";
import { React, useState, useEffect } from "react";
import AddPost from "../../Components/AddPost/AddPost";
import { Spinner } from "./../../Components/Spinner/Spinner";
import instance from "../../axios";
import {
  DivHome,
  Header,
  DivNavLink,
  P,
  Border,
  DivSpinner,
  WiStarsIcon,
} from "./HomeStyled";
const Home = () => {
  const [tweets, setTweets] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await instance.get("users/getTweets");
        if (res.data.status === "success") {
          setTweets(res.data.data.data);
        }
      } catch (err) {
        console.log("error", err.response.data.message);
      }
      setLoading(false);
    })();
  }, []);

  return (
    <DivHome>
      <Header>
        <DivNavLink to="/Home">
          <P>Home</P>
        </DivNavLink>
        <WiStarsIcon />
      </Header>
      <Border />
      <AddPost setTweetData={setTweets} tweetData={tweets} />
      <div>
        {tweets.map((tweet) => (
          <div key={tweet._id}>
            <Tweet text={tweet.text} user={tweet.user} tweetImg={tweet.photo} />
          </div>
        ))}
      </div>
      {isLoading ? (
        <DivSpinner>
          <Spinner />
        </DivSpinner>
      ) : null}
    </DivHome>
  );
};

export default Home;
