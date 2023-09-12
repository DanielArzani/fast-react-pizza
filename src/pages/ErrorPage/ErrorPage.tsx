import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { ErrorResponseType } from '../../types/ErrorResponseType';

function ErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError() as ErrorResponseType;

  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-gray-100'>
      <h2 className='mb-4 text-2xl font-bold text-red-500'>
        Something went wrong 😢
      </h2>
      <p className='mb-2 text-lg text-gray-700'>Error Details: {error.data}</p>
      <p className='mb-4 text-lg text-gray-700'>Message: {error.message}</p>

      <button
        onClick={() => navigate(-1)}
        className='rounded-lg bg-blue-500 px-4 py-2 text-white shadow-lg transition duration-300 ease-in-out hover:bg-blue-400'
      >
        &larr; Go Back
      </button>
    </div>
  );
}

export default ErrorPage;
