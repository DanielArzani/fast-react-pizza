import React from 'react';
import Header from '../../components/Header';
import PizzaList from '../../components/PizzaList';
import Main from '../../components/Main';
import Footer from '../../components/Footer';

function MenuPage() {
  return (
    <>
      <Header />
      <Main>
        <PizzaList />
      </Main>
      <Footer />
    </>
  );
}

export default MenuPage;
