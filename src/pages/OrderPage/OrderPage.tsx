import React, { useState } from 'react';
import Button from '../../components/Button';

/**
 * OrderPage Component:
 * This component facilitates the order placement process.
 * Users can provide their details and preferences for the order.
 * It features a form with input fields for details such as name,
 * phone number, address, and an option to prioritize the order.
 */

function OrderPage() {
  const [firstName, setFirstName] = useState<string>('Daniel');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [givePriority, setGivePriority] = useState<boolean>(false);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  return (
    <div className='px-4 py-6'>
      <h2 className='mb-8 text-xl font-semibold'>
        Ready to order? Let&apos;s go!
      </h2>

      <form onSubmit={handleSubmit}>
        <div className='mb-5 flex flex-col gap-2 sm:flex-row sm:items-center'>
          <Input
            value={firstName}
            onChange={setFirstName}
            labelText='First Name'
          />
        </div>

        <div className='mb-5 flex flex-col gap-2 sm:flex-row sm:items-center'>
          <Input
            value={phoneNumber}
            onChange={setPhoneNumber}
            labelText='Phone Number'
          />
        </div>

        <div className='relative mb-5 flex flex-col gap-2 sm:flex-row sm:items-center'>
          <Input value={address} onChange={setAddress} labelText='Address' />
          <Button type='button' padding='0.5rem 1rem' fontSizeXS={true}>
            Get Position
          </Button>
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
          <Button type='submit'>Order now from €12.00</Button>
        </div>
      </form>
    </div>
  );
}

type InputProps = {
  value: string;
  onChange: (value: string) => void;
  labelText: string;
};

function Input({ value, onChange, labelText }: InputProps) {
  return (
    <>
      <label className=' sm:basis-40' htmlFor={value}>
        {labelText}
      </label>

      <input
        value={value}
        id={value}
        name={value}
        onChange={(e) => onChange(e.target.value)}
        className='input grow'
      />
    </>
  );
}

export default OrderPage;
