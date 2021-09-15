import React from "react";
import { Link } from "react-router-dom";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
      </div>
      {children}
      <footer>&copy; {new Date().getFullYear()} Utube</footer>
    </div>
  );
};

export default Layout;
