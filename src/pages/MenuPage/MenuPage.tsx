import React from 'react';
import PizzaList from '../../components/PizzaList';

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
      <PizzaList />
    </>
  );
}

export default MenuPage;
