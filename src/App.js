// NPM and others

import React from 'react';
import { Route } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo';

// Components

import { getApolloClient } from './helpers/getApolloClient'

import './App.css';

import HomePage from './modules/HomePage.jsx';

const client = getApolloClient()

export default () => {
  return (
    <ApolloProvider client={client}>
      <Route to="/" component={HomePage} />
    </ApolloProvider>)
}


