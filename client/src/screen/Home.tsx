import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import PageTitle from "../components/PageTitle";
import Video from "../components/Video";
import { IVideo } from "../type";

const Home: React.FC = () => {
  const history = useHistory();
  const [videos, setVideos] = useState([]);
  const [name, setName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const fetchDate = async () => {
      const res = await axios.get("http://localhost:5000");
      if (res.status) {
        setVideos(res.data.videos);
        setIsLoggedIn(res.data.loggedIn);
        if (res.data.user.loggedIn) {
          setName(res.data.user.username);
        }
      }
    };
    fetchDate();
  }, []);

  const logoutHandler = () => {
    history.push("/logout");
  };

  const loginHandler = () => {
    history.push("/login");
  };

  return (
    <div>
      <PageTitle title="Home" />
      {isLoggedIn ? (
        <>
          <h1>Hi {name}, Welcome to Utube</h1>
          <button onClick={logoutHandler}>Logout</button>
        </>
      ) : (
        <>
          <h1>Welcome to Utube, please login</h1>
          <button onClick={loginHandler}>Login</button>
        </>
      )}
      {videos.map((video: IVideo) => (
        <Video {...video} />
      ))}
    </div>
  );
};

export default Home;
