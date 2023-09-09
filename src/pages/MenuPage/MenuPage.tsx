import React from 'react';
import Header from '../../components/Header';
import PizzaList from '../../components/PizzaList';
import Main from '../../components/Main';

function MenuPage() {
  return (
    <>
      <Header />
      <Main>
        <PizzaList />
      </Main>
    </>
  );
}

export default MenuPage;
