import { PizzaType } from '../types/PizzaType';

const API_URL = 'https://react-fast-pizza-api.onrender.com/api';

type NewOrder = {
  [key: string]: any;
};

/**
 * Fetches the menu data from the API.
 *
 * @returns {Promise<PizzaType[]>} The menu data as a promise.
 * @throws Will throw an error if the response from the API is not okay.
 */
export async function getMenu(): Promise<PizzaType[]> {
  const res = await fetch(`${API_URL}/menu`);
  if (!res.ok) throw Error('Failed getting menu');

  const { data } = await res.json();
  return data;
}

/**
 * Fetches the order data for a given id from the API.
 *
 * @param {string} id - The id of the order to fetch.
 * @returns {Promise<PizzaType>} The order data as a promise.
 * @throws Will throw an error if the order cannot be found or if the response from the API is not okay.
 */
export async function getOrder(id: string): Promise<PizzaType> {
  const res = await fetch(`${API_URL}/order/${id}`);
  if (!res.ok) throw Error(`Couldn't find order #${id}`);

  const { data } = await res.json();
  return data;
}

/**
 * Creates a new order on the API.
 *
 * @param {Object} newOrder - The new order data to post to the API.
 * @returns {Promise<PizzaType>} The created order data as a promise.
 * @throws Will throw an error if the order creation fails.
 */
export async function createOrder(newOrder: NewOrder): Promise<PizzaType> {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: 'POST',
      body: JSON.stringify(newOrder),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw Error();
    const { data } = await res.json();
    return data;
  } catch {
    throw Error('Failed creating your order');
  }
}

/**
 * Updates an existing order with a given id and update object.
 *
 * @param {string} id - The id of the order to update.
 * @param {Object} updateObj - The object containing the updated order data.
 * @returns {Promise<void>}
 * @throws Will throw an error if the order update fails.
 */
export async function updateOrder(
  id: string,
  updateObj: NewOrder
): Promise<void> {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updateObj),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw Error();
  } catch (err) {
    throw Error('Failed updating your order');
  }
}
