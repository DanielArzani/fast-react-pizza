/**
 * Formats a number as a currency string in EUR.
 *
 * @param {number} value - The number to format.
 * @returns {string} The formatted currency string.
 */
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'EUR',
  }).format(value);
}

/**
 * Formats a date string into a more human-readable format.
 *
 * @param {string} dateStr - The date string to format.
 * @returns {string} The formatted date string.
 */
export function formatDate(dateStr: string): string {
  return new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(dateStr));
}

/**
 * Calculates the number of minutes left from the current time to the time represented by the given date string.
 *
 * @param {string} dateStr - The date string representing the end time.
 * @returns {number} The number of minutes left.
 */
export function calcMinutesLeft(dateStr: string): number {
  const d1 = new Date().getTime();
  const d2 = new Date(dateStr).getTime();
  return Math.round((d2 - d1) / 60000);
}
