import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const NavigationBar: React.FC = () => {
  return (
    <NavContainer>
      <Link to="/">Home</Link>
      <SearchBar />
      <Link to="/signup">Sign up</Link>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export default NavigationBar;
