import React from 'react';
import { useSelector } from 'react-redux';
import { StoreState } from '../../types/StoreType';

function Username() {
  const username = useSelector((state: StoreState) => state.user.username);

  if (username === '') return null;

  return <p className='text-sm font-semibold uppercase'>{username}</p>;
}

export default Username;
