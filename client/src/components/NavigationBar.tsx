import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const NavigationBar: React.FC = () => {
  return (
    <NavContainer>
      <StyledLink to="/">Home</StyledLink>
      <SearchBar />
      <StyledLink to="/signup">Sign up</StyledLink>
      <StyledLink to="/signin">Sign in</StyledLink>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  font-weight: 600;
  margin: 0.5em 1em;
`;

export default NavigationBar;
