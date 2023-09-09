import React from 'react';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Intro from '../../components/Intro';
import SignupForm from '../../components/SignupForm';
import HomepageButton from '../../components/HomepageButton';

/**
 * The initial page a user will see, also doubles as the sign in page
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
