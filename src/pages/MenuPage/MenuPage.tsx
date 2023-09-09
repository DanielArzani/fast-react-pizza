import React from 'react';
import Header from '../../components/Header';
import PizzaList from '../../components/PizzaList';

function MenuPage() {
  return (
    <div>
      <Header />
      <main>
        <PizzaList />
      </main>
    </div>
  );
}

export default MenuPage;
