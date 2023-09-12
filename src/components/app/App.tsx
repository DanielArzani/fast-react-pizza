import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import HomePage from '../../pages/HomePage';
import MenuPage, { loader as menuLoader } from '../../pages/MenuPage';
import CartPage from '../../pages/CartPage';
import OrderPage from '../../pages/OrderPage';
import StatusPage from '../../pages/StatusPage';
import AppLayout from '../AppLayout';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/menu',
        element: <MenuPage />,
        loader: menuLoader,
      },
      {
        path: '/cart',
        element: <CartPage />,
      },
      {
        path: '/order/new',
        element: <OrderPage />,
      },
      {
        path: '/order/:orderId',
        element: <StatusPage />,
      },
    ],
  },
]);

/**
 * A pizza ordering application
 */
function App() {
  return (
    <div className='center relative min-h-full'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
