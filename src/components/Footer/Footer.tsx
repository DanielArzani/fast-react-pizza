import React from 'react';

function Footer() {
  return (
    <footer className='absolute bottom-0 flex w-full items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base'>
      <p className='space-x-4 font-semibold text-stone-300 sm:space-x-6'>
        <span>1 Pizza</span>
        <span>€12.00</span>
      </p>

      <a href='/'>Open Cart →</a>
    </footer>
  );
}

export default Footer;
