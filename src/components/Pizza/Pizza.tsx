import React from 'react';

import { PizzaType } from '../../types/PizzaType';
import { formatCurrency } from '../../utils/helpers';

type PizzaProps = {
  menuItem: PizzaType;
};

/**
 * The pizza item and its relevant data that will be displayed on the menu
 */
function Pizza({ menuItem }: PizzaProps) {
  return (
    <li className='flex gap-4 py-2'>
      <div>
        <img
          src={menuItem.imageUrl}
          alt={menuItem.name}
          height='96px'
          width='96px'
        />
      </div>

      <div className='flex grow flex-col pt-0.5'>
        <h2 className='font-medium'>{menuItem.name}</h2>
        <p>{menuItem.ingredients.join(', ')}</p>

        <div className='mt-auto flex items-center justify-between'>
          {!menuItem.soldOut ? (
            <p className='text-sm'>{formatCurrency(menuItem.unitPrice)}</p>
          ) : (
            <p>Sold Out</p>
          )}
          <button className='inline-block rounded-full bg-yellow-400 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed md:px-5 md:py-2.5'>
            Add to cart
          </button>
        </div>
      </div>
    </li>
  );
}

export default Pizza;
