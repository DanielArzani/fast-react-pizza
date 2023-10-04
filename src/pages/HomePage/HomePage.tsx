import React from 'react';
import Intro from '../../components/Intro';
import SignupForm from '../../components/SignupForm';

/**
 * HomePage Component:
 * This component serves as the landing page of the application.
 */

function HomePage() {
  return (
    <div className='my-10 px-4 text-center sm:my-16'>
      <Intro />
      <SignupForm />
    </div>
  );
}

export default HomePage;
