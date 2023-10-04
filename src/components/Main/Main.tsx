import React from 'react';

type MainProps = {
  children: React.ReactNode;
};

/**
 * The <main> element for the pages in the app
 * @param children The components that will go into main
 */
function Main({ children }: MainProps) {
  return <main className='mx-auto max-w-3xl flex-grow'>{children}</main>;
}

export default Main;
