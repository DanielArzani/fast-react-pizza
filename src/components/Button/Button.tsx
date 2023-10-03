import React from 'react';

type ButtonProps = {
  type: 'submit' | 'button' | 'reset' | undefined;
  children: React.ReactNode;
  padding?: string;
  fontSizeXS?: boolean;
};

/**
 * The sign up button on the Homepage
 */
function Button({ type, children, padding, fontSizeXS = false }: ButtonProps) {
  return (
    <button
      style={{ padding, fontSize: fontSizeXS ? '0.75rem' : '' }}
      type={type}
      className='inline-block rounded-full bg-yellow-400 px-4 py-3 text-sm font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed md:px-6 md:py-4'
    >
      {children}
    </button>
  );
}

export default Button;
