import React from "react";
import PageTitle from "../components/PageTitle";

const Watch: React.FC = () => {
  return (
    <div>
      <PageTitle title="Watch" />
      <h1>Watch Utube video</h1>
      <footer>&copy; {new Date().getFullYear()} Utube</footer>
    </div>
  );
};

export default Watch;
