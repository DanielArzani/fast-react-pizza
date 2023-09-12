import React from 'react';
import Header from '../../components/Header';
import PizzaList from '../../components/PizzaList';
import Main from '../../components/Main';
import Footer from '../../components/Footer';

/**
 * MenuPage Component:
 * This component represents the menu page of the application,
 * where users can browse through a list of pizzas available.
 * It consists of a Header, Main section housing a list of pizzas,
 * and a Footer to display additional information or links.
 */

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
