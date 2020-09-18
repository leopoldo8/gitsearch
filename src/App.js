import React from 'react';

import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Router from './router';

import { UserProvider } from '@contexts/userContext';

import GlobalStyles from '@modules/globalStyles';

const GitSearch = () => {

  return (
    <>
      <GlobalStyles />
      <ToastContainer transition={Slide} />
      <UserProvider>
        <Router />
      </UserProvider>
    </>
  );
};

export default GitSearch;
