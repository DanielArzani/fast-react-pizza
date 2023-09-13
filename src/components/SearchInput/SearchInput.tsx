import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchInput() {
  const [query, setQuery] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (!query) return;

    navigate(`/order/${query}`);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='search_order' className='sr-only'>
        Search order #
      </label>

      <input
        className=' w-28 rounded-full bg-yellow-100 py-2 px-4 text-sm duration-300 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72'
        type='search'
        name='search_order'
        id='search_order'
        placeholder='Search order #'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchInput;
