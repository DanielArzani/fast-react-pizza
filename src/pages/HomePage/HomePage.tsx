import React from 'react';
import Header from '../../components/Header';
import Main from '../../components/Main';

/**
 * The initial page a user will see, also doubles as the sign in page
 */
function HomePage() {
  return (
    <div className='center'>
      <Header />
      <Main />
    </div>
  );
}

export default HomePage;
