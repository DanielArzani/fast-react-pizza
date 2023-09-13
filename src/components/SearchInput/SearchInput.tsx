import React from 'react';

function SearchInput() {
  return (
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
  );
}

export default SearchInput;
