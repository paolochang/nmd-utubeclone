import React from "react";
import NavigationBar from "./NavigationBar";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <div>
        <NavigationBar />
      </div>
      {children}
      <footer>&copy; {new Date().getFullYear()} Utube</footer>
    </div>
  );
};

export default Layout;
