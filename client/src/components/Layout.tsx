import React from "react";
import styled from "styled-components";
import NavigationBar from "./NavigationBar";

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Header>
        <NavigationBar />
      </Header>
      <Body>{children}</Body>
      <Footer>&copy; {new Date().getFullYear()} Utube</Footer>
    </Container>
  );
};

const Container = styled.div``;
const Header = styled.div`
  background-color: #404040;
  height: 40px;
  color: #ffffff;
`;
const Body = styled.div`
  overflow: hidden;
  min-height: calc(100vh - 100px);
  background-color: #d3d3d3;
`;
const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  background-color: #404040;
  color: #ffffff;
`;

export default Layout;
