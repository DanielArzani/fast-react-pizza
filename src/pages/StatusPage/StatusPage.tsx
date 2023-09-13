import React from 'react';
import { OrderType } from '../../types/OrderType';
// import { calcMinutesLeft } from '../../utils/helpers';

// const order = {
//   id: 'ABCDEF',
//   customer: 'Jonas',
//   phone: '123456789',
//   address: 'Arroios, Lisbon , Portugal',
//   priority: true,
//   estimatedDelivery: '2027-04-25T10:00:00',
//   cart: [
//     {
//       pizzaId: 7,
//       name: 'Napoli',
//       quantity: 3,
//       unitPrice: 16,
//       totalPrice: 48,
//     },
//     {
//       pizzaId: 5,
//       name: 'Diavola',
//       quantity: 2,
//       unitPrice: 16,
//       totalPrice: 32,
//     },
//     {
//       pizzaId: 3,
//       name: 'Romana',
//       quantity: 1,
//       unitPrice: 15,
//       totalPrice: 15,
//     },
//   ],
//   position: '-9.000,38.000',
//   orderPrice: 95,
//   priorityPrice: 19,
// };

type StatusPageProps = {
  newOrder: OrderType;
};

/**
 * StatusPage Component:
 * This component is designed to display the status of a specific order.
 * Users can view details like order number, status, time left for delivery,
 * items in the order, and the total amount to be paid.
 * It also offers an option to make the order a priority.
 */

function StatusPage({ newOrder }: StatusPageProps) {
  // const deliveryIn = calcMinutesLeft(newOrder.estimatedDelivery);

  return (
    <div className='space-y-8 px-4 py-6'>
      {/* title */}
      <div className='flex flex-wrap items-center justify-between gap-2'>
        <h2 className='text-xl font-semibold'>Order #CT9585 status</h2>
        <div className='space-x-2'>
          <span className='rounded-full bg-green-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-green-50'>
            Preparing order
          </span>
        </div>
      </div>

      {/* time to delivery */}
      <div className='flex flex-wrap items-center justify-between gap-2 bg-stone-200 px-6 py-5'>
        <p className='font-medium'>Only 26 minutes left 😃</p>
        <p className='text-xs text-stone-500'>
          (Estimated delivery: Sep 12, 03:21 AM)
        </p>
      </div>

      {/* order */}
      <ul className='dive-stone-200 divide-y border-b border-t'>
        <li className='space-y-1 py-3'>
          <div className='flex items-center justify-between gap-4 text-sm'>
            <p>
              <span className='font-bold'>1×</span> Margherita
            </p>
            <p className='font-bold'>€12.00</p>
          </div>
          <p className='text-sm capitalize italic text-stone-500'>
            tomato, mozzarella, basil
          </p>
        </li>
      </ul>

      {/* payment price */}
      <div className='space-y-2 bg-stone-200 px-6 py-5'>
        <p className='text-sm font-medium text-stone-600'>
          Price pizza: €12.00
        </p>
        <p className='font-bold'>To pay on delivery: €12.00</p>
      </div>

      {/* make priority */}
      <form className='text-right'>
        <button className='inline-block rounded-full bg-yellow-400 px-4 py-3 text-sm font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed md:px-6 md:py-4'>
          Make priority
        </button>
      </form>
    </div>
  );
}

export default StatusPage;
