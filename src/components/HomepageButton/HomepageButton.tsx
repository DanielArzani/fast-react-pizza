import React from 'react';

/**
 * The sign up button on the Homepage
 */
function HomepageButton() {
  return (
    <button className='inline-block rounded-full bg-yellow-400 px-4 py-3 text-sm font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed md:px-6 md:py-4'>
      Start Ordering
    </button>
  );
}

export default HomepageButton;
