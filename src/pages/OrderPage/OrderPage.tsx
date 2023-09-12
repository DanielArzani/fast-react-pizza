import React, { useState } from 'react';
import Header from '../../components/Header';
import Main from '../../components/Main';

function OrderPage() {
  const [firstName, setFirstName] = useState<string>('Daniel');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [givePriority, setGivePriority] = useState<boolean>(false);

  return (
    <>
      <Header />
      <Main>
        <div className='px-4 py-6'>
          <h2 className='mb-8 text-xl font-semibold'>
            Ready to order? Let&apos;s go!
          </h2>

          <form>
            <div className='mb-5 flex flex-col gap-2 sm:flex-row sm:items-center'>
              <label htmlFor='firstName' className=' sm:basis-40'>
                First Name
              </label>
              <input
                type='text'
                id='firstName'
                name='firstName'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className='input grow'
              />
            </div>

            <div className='mb-5 flex flex-col gap-2 sm:flex-row sm:items-center'>
              <label className=' sm:basis-40' htmlFor='phoneNumber'>
                Phone Number
              </label>
              <input
                type='text'
                id='phoneNumber'
                name='phoneNumber'
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className='input grow'
              />
            </div>

            <div className='relative mb-5 flex flex-col gap-2 sm:flex-row sm:items-center'>
              <label className=' sm:basis-40' htmlFor='address'>
                Address
              </label>
              <input
                type='text'
                id='address'
                name='address'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className='input grow'
              />
              <button
                type='button'
                className='inline-block rounded-full bg-yellow-400 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed md:px-5 md:py-2.5'
              >
                Get Position
              </button>
            </div>

            <div className='mb-12 flex items-center gap-5'>
              <input
                type='checkbox'
                id='givePriority'
                name='givePriority'
                checked={givePriority}
                onChange={(e) => setGivePriority(e.target.checked)}
                className='h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2'
              />
              <label className='font-medium' htmlFor='givePriority'>
                Want to give your order priority?
              </label>
            </div>

            <div>
              <button
                type='submit'
                className='inline-block rounded-full bg-yellow-400 px-4 py-3 text-sm font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed md:px-6 md:py-4'
              >
                Order now from €12.00
              </button>
            </div>
          </form>
        </div>
      </Main>
    </>
  );
}

export default OrderPage;
