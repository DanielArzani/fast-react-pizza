import React from 'react';
import { Link } from 'react-router-dom';
import SearchInput from '../SearchInput';

/**
 * Common header which will show the currently signed in user (if any) and allow them to search through their orders
 */
function Header() {
  return (
    <header className='flex flex-wrap items-center justify-between bg-yellow-400 p-4'>
      <h1>
        <Link className='uppercase tracking-[.1em]' to='/'>
          FAST REACT PIZZA CO.
        </Link>
      </h1>

      <SearchInput />

      <p className='text-sm font-semibold uppercase'>Daniel</p>
    </header>
  );
}

export default Header;
