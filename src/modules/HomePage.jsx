// NPM and others

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Component, Suspense, lazy } from 'react';
import styled from 'styled-components';

// Common components

import Header from './partials/Header/Header';

// Styled Components

const PageContent = styled.div`
  width: 100%;
  height: 100%;
`;

const HomeComponent = lazy(() => import('./home/HomePage'));
const UserComponent = lazy(() => import('./user/UserPage'));

class HomePage extends Component {
  render() {
    return (
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <PageContent>
            <Router>
              <div>
                <Header />
                <Switch>
                  <Route exact path="/" Component={HomeComponent} />
                  <Route path="/user" Component={UserComponent} />
                </Switch>
              </div>
            </Router>
          </PageContent>
        </Suspense>
      </div>
    );
  }
}

export default HomePage;
