// NPM and others

import React, { Component } from 'react';
import styled from 'styled-components';

// Styled components

const Head = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
`;

// Class

class Header extends Component {
  render() {
    return <Head>{this.props.children}</Head>;
  }
}

export default Header;
