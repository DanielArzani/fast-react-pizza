import React from 'react';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Intro from '../../components/Intro';
import SignupForm from '../../components/SignupForm';
import HomepageButton from '../../components/HomepageButton';

/**
 * HomePage Component:
 * This component serves as the landing page of the application.
 * It consists of a Header, Main section with introductory content,
 * a signup form, and a button to redirect to the homepage.
 */

function HomePage() {
  return (
    <>
      <Header />
      <Main>
        <div className='my-10 px-4 text-center sm:my-16'>
          <Intro />
          <SignupForm />
          <HomepageButton />
        </div>
      </Main>
    </>
  );
}

export default HomePage;
