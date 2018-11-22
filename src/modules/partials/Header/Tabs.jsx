// NPM and others

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// Styled components

const SubHeader = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Nav = styled.nav``;

class Tabs extends Component {
  render() {
    return (
      <SubHeader>
        <Nav>
          <NavLink to="/games">Games</NavLink>
          <NavLink to="/games">Community</NavLink>
          <NavLink to="/games">News</NavLink>
        </Nav>
        <span>Search</span>
        {/* <Search /> */}
      </SubHeader>
    );
  }
}

export default Tabs;
