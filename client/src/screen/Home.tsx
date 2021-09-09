import React, { useEffect, useState } from "react";

const Home: React.FC = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      fetch("http://localhost:5000/api")
        .then((res) => res.json())
        .then((data) => setName(data.username));
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Hi {name}, Welcome to Utube</h1>
      <footer>&copy; {new Date().getFullYear()} Utube</footer>
    </div>
  );
};

export default Home;
