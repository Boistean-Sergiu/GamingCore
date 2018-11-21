// NPM and others

import React, { Component } from 'react';
import {ConnectedRouter} from 'react-router-redux'
import {Route} from 'react-router-dom'
import { ApolloProvider } from 'react-apollo';

// Components

import configureStore, {history} from './store/configureStore'
import {getApolloClient} from './helpers/getApolloClient'

import './App.css';

import HomePage from './modules/HomePage';

const store = configureStore()

class App extends Component {
  render() {
    return <ApolloProvider client={getApolloClient()} store={store}>
      <ConnectedRouter history={history}>
          <Route to="/" component={HomePage}/>
      </ConnectedRouter>
    </ApolloProvider>
  }
}

export default App;
