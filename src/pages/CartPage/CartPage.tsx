import React from 'react';
import { useSelector } from 'react-redux';
import { StoreState } from '../../types/StoreType';
import { Link } from 'react-router-dom';

function CartPage() {
  const username = useSelector((state: StoreState) => state.user.username);

  return (
    <>
      <div className='px-4 py-3'>
        <a
          className='text-sm text-blue-500 hover:text-blue-600 hover:underline'
          href='/menu'
        >
          ← Back to menu
        </a>
        <h2 className='mt-7 text-xl font-semibold'>Your cart, {username}</h2>
        <ul className='mt-3 divide-y divide-stone-200 border-b'>
          <li className='py-3 sm:flex sm:items-center sm:justify-between'>
            <p className='mb-1 sm:mb-0'>1× Margherita</p>
            <div className='flex items-center justify-between sm:gap-6'>
              <p className='text-sm font-bold'>€12.00</p>
              <div className='flex items-center gap-2 md:gap-3'>
                <button className='inline-block rounded-full bg-yellow-400 px-2.5 py-1  text-sm font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed md:px-3.5 md:py-2'>
                  -
                </button>
                <span className='text-sm font-medium'>1</span>
                <button className='inline-block rounded-full bg-yellow-400 px-2.5 py-1 text-sm font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed md:px-3.5 md:py-2'>
                  +
                </button>
              </div>
              <button className='inline-block rounded-full bg-yellow-400 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed md:px-5 md:py-2.5'>
                Delete
              </button>
            </div>
          </li>
        </ul>
        <div className='mt-6 space-x-2'>
          <Link
            className='inline-block rounded-full bg-yellow-400 px-4 py-3 text-sm font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed md:px-6 md:py-4'
            to='/order/new'
          >
            Order pizzas
          </Link>
          <button className='inline-block rounded-full border-2 border-stone-300 px-4 py-2.5 text-sm font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed md:px-6 md:py-3.5'>
            Clear cart
          </button>
        </div>
      </div>
    </>
  );
}

export default CartPage;
