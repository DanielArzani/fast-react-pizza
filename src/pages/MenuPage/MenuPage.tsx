import React from 'react';
import { getMenu } from '../../services/apiRestaurant';
import { useLoaderData } from 'react-router-dom';
import { PizzaType } from '../../types/PizzaType';
import Pizza from '../../components/Pizza';

/**
 * MenuPage Component:
 * This component represents the menu page of the application,
 * where users can browse through a list of pizzas available.
 * It consists of a Header, Main section housing a list of pizzas,
 * and a Footer to display additional information or links.
 */

function MenuPage() {
  const menu = useLoaderData() as PizzaType[];

  return (
    <ul className='divide-y divide-stone-200 px-2'>
      {menu.map((item) => {
        return <Pizza menuItem={item} key={item.id} />;
      })}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default MenuPage;
