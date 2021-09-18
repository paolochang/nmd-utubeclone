import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import Preview from "../components/Preview";
import { IVideo } from "../type";

const Home: React.FC = () => {
  const history = useHistory();
  const [videos, setVideos] = useState([]);
  const name = useState("")[0];
  const isLoggedIn = useState(false)[0];

  useEffect(() => {
    const fetchDate = async () => {
      const res = await axios.get("http://localhost:5000");
      if (res.status) {
        setVideos(res.data.videos);
        // setIsLoggedIn(res.data.user.loggedIn);
        // if (res.data.user.loggedIn) {
        //   setName(res.data.user.username);
        // }
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
          <Link to="/upload">
            <button>Upload</button>
          </Link>
        </>
      ) : (
        <>
          <h1>Welcome to Utube, please login</h1>
          <button onClick={loginHandler}>Login</button>
        </>
      )}
      {videos.length > 0 ? (
        videos.map((video: IVideo) => <Preview key={video._id} {...video} />)
      ) : (
        <li>Sorry nothing found.</li>
      )}
    </div>
  );
};

export default Home;
