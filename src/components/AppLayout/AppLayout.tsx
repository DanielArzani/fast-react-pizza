import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Main from '../Main';
import { Outlet, useNavigation } from 'react-router-dom';
import Loader from '../Loader';

/**
 * This is the AppLayout component, which serves as a layout template for the application.
 * It contains the Header, Main, and Footer components, creating a consistent layout
 * structure across various pages in the application.
 *
 * The Outlet component from 'react-router-dom' is used here to dynamically load the
 * different pages at the specified routes, making it a crucial part of the routing system.
 */
function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <>
      {isLoading && <Loader />}

      <Header />

      <Main>
        <Outlet />
      </Main>

      <Footer />
    </>
  );
}

export default AppLayout;
