import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateName } from '../../store/userSlice';

/**
 * The signup form on the Homepage
 */
function SignupForm() {
  const [name, setName] = useState<string>('');
  const dispatch = useDispatch();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (!name) return;

    dispatch(updateName(name));
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
