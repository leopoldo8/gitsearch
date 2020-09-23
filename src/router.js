import React from 'react';
import styled from 'styled-components';
import {
  Switch,
  Route
} from "react-router-dom";

import Home from '@components/pages/Home';
import User from '@components/pages/User';
import UsersList from '@components/pages/UsersList';
import NotFound from '@components/pages/NotFound';
import RateLimitExceeded from '@components/pages/RateLimitExceeded';

const PagesContainer = styled.div`
  width: 100%;
`;

const RouterConfig = () => (
  <PagesContainer>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/users">
        <UsersList />
      </Route>
      <Route exact path="/user/:username">
        <User />
      </Route>
      <Route exact path="/rate-limit-exceeded">
        <RateLimitExceeded />
      </Route>
      <Route component={NotFound} />
    </Switch>
  </PagesContainer>
);

export default RouterConfig;
