import { GeocodingApiResponse } from '../types/GeocodingApiType';

interface Coordinates {
  latitude: number;
  longitude: number;
}

/**
 * Fetches address data from the BigDataCloud API using the given latitude and longitude.
 *
 * @param {Object} coordinates - An object containing latitude and longitude properties.
 * @param {number} coordinates.latitude - The latitude coordinate.
 * @param {number} coordinates.longitude - The longitude coordinate.
 * @returns {Promise<any>} The address data as a promise.
 * @throws Will throw an error if the response from the API is not okay.
 */
export async function getAddress({
  latitude,
  longitude,
}: Coordinates): Promise<GeocodingApiResponse> {
  const res = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
  );
  if (!res.ok) throw Error('Failed getting address');

  const data = await res.json();
  return data;
}
