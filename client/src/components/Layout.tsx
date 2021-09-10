import React from "react";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      {children}
      <footer>&copy; {new Date().getFullYear()} Utube</footer>
    </div>
  );
};

export default Layout;
