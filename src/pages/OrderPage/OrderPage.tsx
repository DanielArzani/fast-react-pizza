import React, { useState } from 'react';
import Button from '../../components/Button';
import { createOrder, getOrder } from '../../services/apiRestaurant';
import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import { CartItem } from '../../types/OrderType';

type Errors = {
  phone?: string;
};

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str: string) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

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

  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  const formErrors = useActionData() as Errors;

  const cart: CartItem[] = fakeCart;

  return (
    <div className='px-4 py-6'>
      <h2 className='mb-8 text-xl font-semibold'>
        Ready to order? Let&apos;s go!
      </h2>

      <Form method='POST'>
        <div className='mb-5 flex flex-col gap-2 sm:flex-row sm:items-center'>
          <label className=' sm:basis-40' htmlFor='firstName'>
            First Name
          </label>

          <input
            value={firstName}
            id={firstName}
            name='customer'
            onChange={(e) => setFirstName(e.target.value)}
            className='input grow'
          />
        </div>

        <div className='mb-5 flex flex-col gap-2 sm:flex-row sm:items-center'>
          <Input
            value={phoneNumber}
            onChange={setPhoneNumber}
            labelText='Phone Number'
            name='phone'
          />
        </div>
        {formErrors?.phone && (
          <p className='text-red-500'>{formErrors.phone}</p>
        )}

        <div className='relative mb-5 flex flex-col gap-2 sm:flex-row sm:items-center'>
          <Input
            value={address}
            onChange={setAddress}
            labelText='Address'
            name='address'
          />
          <Button type='button' padding='0.5rem 1rem' fontSizeXS={true}>
            Get Position
          </Button>
        </div>

        <div className='mb-12 flex items-center gap-5'>
          <input
            type='checkbox'
            id='givePriority'
            name='priority'
            checked={givePriority}
            onChange={(e) => setGivePriority(e.target.checked)}
            className='h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2'
          />
          <label className='font-medium' htmlFor='givePriority'>
            Want to give your order priority?
          </label>
        </div>

        <div>
          <input type='hidden' name='cart' value={JSON.stringify(cart)} />
          <button
            disabled={isSubmitting}
            className='inline-block rounded-full bg-yellow-400 px-4 py-3 text-sm font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed md:px-6 md:py-4'
          >
            {isSubmitting ? 'Placing order...' : 'Order now'}
          </button>
        </div>
      </Form>
    </div>
  );
}

type InputProps = {
  value: string;
  onChange: (value: string) => void;
  labelText: string;
  name: string;
};

function Input({ value, onChange, labelText, name }: InputProps) {
  return (
    <>
      <label className=' sm:basis-40' htmlFor={value}>
        {labelText}
      </label>

      <input
        value={value}
        id={value}
        name={name}
        onChange={(e) => onChange(e.target.value)}
        className='input grow'
      />
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
export async function action({ request }) {
  const formData = await request.formData();

  // eslint-disable-next-line
  const data: any = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    givePriority: data.priority === 'on',
  };

  // ERROR HANDLING
  const errors: Errors = {};
  if (!isValidPhone(order.phone)) {
    errors.phone =
      'Please give us your correct phone number. We might need it in order to contact you';
  }
  if (Object.keys(errors).length > 0) return errors;

  // IF NO ERRORS
  const newOrder = await createOrder(order);

  return redirect(`/order/${newOrder.id}`);
}

export default OrderPage;
