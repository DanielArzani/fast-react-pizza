import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='flex w-full items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base'>
      <p className='space-x-4 font-semibold text-stone-300 sm:space-x-6'>
        <span>1 Pizza</span>
        <span>€12.00</span>
      </p>

      <Link to='cart'>Open Cart →</Link>
    </footer>
  );
}

export default Footer;
