// NPM and others

import React, { Component } from 'react';
import styled from 'styled-components';

// Common components

import Tabs from './Tabs';

// Styled components

const Head = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
`;

// Class

class Header extends Component {
  render() {
    return (
      <Head>
        <div>Header</div>
        <Tabs />
      </Head>
    );
  }
}

export default Header;
