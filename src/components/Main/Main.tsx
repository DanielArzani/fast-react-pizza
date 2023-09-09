import React from 'react';

function Main() {
  return (
    <main className='mx-auto max-w-3xl'>
      <div className='my-10 px-4 text-center sm:my-16'>
        <h2 className='mb-8 text-xl font-semibold md:text-3xl'>
          The best pizza.
          <br />
          <span className='text-yellow-500'>
            Straight out of the oven, straight to you.
          </span>
        </h2>

        <form>
          <p className='mb-4 text-sm text-stone-600 md:text-base'>
            👋 Welcome! Please start by telling us your name:
          </p>

          <label htmlFor='name' className='sr-only'>
            Full Name
          </label>
          <input
            className='input mb-8 w-72'
            type='text'
            id='name'
            name='name'
            placeholder='Your full name'
          />
        </form>

        <button className='inline-block rounded-full bg-yellow-400 px-4 py-3 text-sm font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed md:px-6 md:py-4'>
          Start Ordering
        </button>
      </div>
    </main>
  );
}

export default Main;
