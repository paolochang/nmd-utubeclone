import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
        <SearchBar />
      </div>
      {children}
      <footer>&copy; {new Date().getFullYear()} Utube</footer>
    </div>
  );
};

export default Layout;
