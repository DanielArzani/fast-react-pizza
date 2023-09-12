import React from 'react';
import { Link } from 'react-router-dom';

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

      <form>
        <label htmlFor='search_order' className='sr-only'>
          Search order #
        </label>

        <input
          className=' w-28 rounded-full bg-yellow-100 py-2 px-4 text-sm duration-300 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72'
          type='search'
          name='search_order'
          id='search_order'
          placeholder='Search order #'
        />
      </form>

      <p className='text-sm font-semibold uppercase'>Daniel</p>
    </header>
  );
}

export default Header;
