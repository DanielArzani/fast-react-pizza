import React from 'react';

import tempImage from '../../assets/cat-image.jpeg';

function Pizza() {
  return (
    <li className='flex gap-4 py-2'>
      <div>
        <img src={tempImage} alt='Kitty' height='96px' width='96px' />
      </div>

      <div className='flex grow flex-col pt-0.5'>
        <h2 className='font-medium'>Margherita</h2>
        <p className='Tomato, Mozzarella, Basil'></p>

        <div className='mt-auto flex items-center justify-between'>
          <p className='text-sm'>€12.00</p>
          <button className='inline-block rounded-full bg-yellow-400 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed md:px-5 md:py-2.5'>
            Add to cart
          </button>
        </div>
      </div>
    </li>
  );
}

export default Pizza;
