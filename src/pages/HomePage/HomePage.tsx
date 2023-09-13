import React from 'react';
import Intro from '../../components/Intro';
import SignupForm from '../../components/SignupForm';
import Button from '../../components/Button/Button';

/**
 * HomePage Component:
 * This component serves as the landing page of the application.
 * It consists of a Header, Main section with introductory content,
 * a signup form, and a button to redirect to the homepage.
 */

function HomePage() {
  return (
    <div className='my-10 px-4 text-center sm:my-16'>
      <Intro />
      <SignupForm />
      <Button type='button'>Start Ordering</Button>
    </div>
  );
}

export default HomePage;
