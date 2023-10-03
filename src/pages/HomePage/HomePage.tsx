import React from 'react';
import Intro from '../../components/Intro';
import SignupForm from '../../components/SignupForm';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';

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
      <Link to='menu'>
        <Button type='button'>Start Ordering</Button>
      </Link>
    </div>
  );
}

export default HomePage;
