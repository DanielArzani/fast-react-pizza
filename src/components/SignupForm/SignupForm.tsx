import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateName } from '../../store/userSlice';
import { StoreState } from '../../types/StoreType';
import Button from '../Button';
import { Link, useNavigate } from 'react-router-dom';

/**
 * The signup form on the Homepage
 */
function SignupForm() {
  const [name, setName] = useState<string>('');

  const navigate = useNavigate();

  const username = useSelector((state: StoreState) => state.user.username);

  const dispatch = useDispatch();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (!name) return;

    dispatch(updateName(name));

    navigate('menu');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col items-center justify-center gap-2'
    >
      <p className='mb-4 text-sm text-stone-600 md:text-base'>
        👋 Welcome! Please start by telling us your name:
      </p>

      {/* Render the input field only if there's no username in the state */}
      {!username && (
        <>
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
        </>
      )}

      {/* Render the "Start Ordering" button only if the name has been entered but the username isn't in the state yet */}
      {name && !username && <Button type='submit'>Start Ordering</Button>}

      {/* Render the "Continue Ordering" button only if there's a username in the state */}
      {username && (
        <Link to='menu'>
          <Button type='button'>Continue Ordering {username}</Button>
        </Link>
      )}
    </form>
  );
}

export default SignupForm;
