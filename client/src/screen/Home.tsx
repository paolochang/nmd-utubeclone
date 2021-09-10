import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import PageTitle from "../components/PageTitle";

const Home: React.FC = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const fetchDate = async () => {
      const res = await axios.get("http://localhost:5000");
      if (res.status) {
        setIsLoggedIn(res.data.loggedIn);
        if (res.data.loggedIn) {
          setName(res.data.username);
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
    </div>
  );
};

export default Home;
