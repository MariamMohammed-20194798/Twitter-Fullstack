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
  const [tweetData, setTweetData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await instance.get("users/getTweets");
        if (res.data.status === "success") {
          const data = await res.data.data.data;
          console.log(data);
          setTweetData(data);
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
      <AddPost setTweetData={setTweetData} />
      <div>
        {tweetData.map((tweet) => (
          <div key={tweet._id}>
            <Tweet
              id={tweet._id}
              text={tweet.text}
              likes={tweet.likes}
              user={tweet.user}
              tweetImg={tweet.photo}
            />
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
