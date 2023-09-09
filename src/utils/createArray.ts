/**
 * Creates an array with a specified number of indexes.
 *
 * @param num - The number of indexes in the array.
 */
export default function createArray(num: number): number[] | string {
  if (typeof num !== 'number' || num < 0) {
    return 'Invalid input';
  }

  return Array.from({ length: num }, (_, index) => index);
}
