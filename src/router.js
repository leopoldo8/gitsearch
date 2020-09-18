import React from 'react';
import styled from 'styled-components';
import {
  Switch,
  Route
} from "react-router-dom";

import Home from '@components/pages/Home';
import NotFound from '@components/pages/NotFound';

import { White } from '@assets/styles/colors';

const PagesContainer = styled.div`
  width: 100%;
  background: ${White};
`;

const RouterConfig = () => (
  <PagesContainer>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route component={NotFound} />
    </Switch>
  </PagesContainer>
);

export default RouterConfig;
