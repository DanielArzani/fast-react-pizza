import React from 'react';
import createArray from '../../utils/createArray';
import Pizza from '../Pizza/Pizza';

const tempArray = createArray(4) as number[];

function PizzaList() {
  return (
    <div className='mx-auto max-w-3xl'>
      <ul className='divide-y divide-stone-200 px-2'>
        {tempArray.map((_, i) => {
          return <Pizza key={i} />;
        })}
      </ul>
    </div>
  );
}

export default PizzaList;
