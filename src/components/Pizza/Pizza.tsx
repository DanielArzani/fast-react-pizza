import React from 'react';

import { PizzaType } from '../../types/PizzaType';
import { formatCurrency } from '../../utils/helpers';
import Button from '../Button';

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
          <Button type='button' padding='0.5rem 1rem' fontSizeXS={true}>
            Add to cart
          </Button>
        </div>
      </div>
    </li>
  );
}

export default Pizza;
