import React, { useState } from 'react';

/**
 * The signup form on the Homepage
 */
function SignupForm() {
  const [name, setName] = useState<string>('');

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
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
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </form>
  );
}

export default SignupForm;
