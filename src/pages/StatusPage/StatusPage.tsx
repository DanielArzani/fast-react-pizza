import React from 'react';
import { OrderType } from '../../types/OrderType';
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from '../../utils/helpers';
import { useLoaderData } from 'react-router-dom';

// Test ID: IIDSAT

/**
 * StatusPage Component:
 * This component is designed to display the status of a specific order.
 * Users can view details like order number, status, time left for delivery,
 * items in the order, and the total amount to be paid.
 * It also offers an option to make the order a priority.
 */

function StatusPage() {
  const newOrder = useLoaderData() as OrderType;

  const deliveryIn = calcMinutesLeft(newOrder.estimatedDelivery);
  const estimatedDeliveryDate = formatDate(newOrder.estimatedDelivery);

  return (
    <div className='space-y-8 px-4 py-6'>
      {/* title */}
      <div className='flex flex-wrap items-center justify-between gap-2'>
        <h2 className='text-xl font-semibold'>Order #{newOrder.id} status</h2>
        <div className='space-x-2'>
          <span className='rounded-full bg-green-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-green-50'>
            Preparing order
          </span>
        </div>
      </div>

      {/* time to delivery */}
      <div className='flex flex-wrap items-center justify-between gap-2 bg-stone-200 px-6 py-5'>
        {deliveryIn > 0 && (
          <p className='font-medium'>Only {deliveryIn} minutes left 😃</p>
        )}
        {deliveryIn < 0 && (
          <p className='font-medium'>Order should have arrived</p>
        )}

        <p className='text-xs text-stone-500'>
          (Estimated delivery: {estimatedDeliveryDate})
        </p>
      </div>

      {/* order */}
      <ul className='dive-stone-200 divide-y border-b border-t'>
        {newOrder.cart.map((item, index) => (
          <li key={index} className='space-y-1 py-3'>
            <div className='flex items-center justify-between gap-4 text-sm'>
              <p>
                <span className='font-bold'>{item.quantity}×</span> {item.name}
              </p>
              <p className='font-bold'>{formatCurrency(item.totalPrice)}</p>
            </div>
          </li>
        ))}
      </ul>

      {/* payment price */}
      <div className='space-y-2 bg-stone-200 px-6 py-5'>
        <p className='text-sm font-medium text-stone-600'>
          Price pizza: {formatCurrency(newOrder.orderPrice)}
        </p>
        <p className='font-bold'>
          To pay on delivery:{' '}
          {formatCurrency(newOrder.orderPrice + newOrder.priorityPrice)}
        </p>
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
