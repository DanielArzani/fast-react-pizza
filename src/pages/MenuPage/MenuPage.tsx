import React from 'react';
import Header from '../../components/Header';
import PizzaList from '../../components/PizzaList';

function MenuPage() {
  return (
    <>
      <Header />
      <main className='center'>
        <PizzaList />
      </main>
    </>
  );
}

export default MenuPage;
