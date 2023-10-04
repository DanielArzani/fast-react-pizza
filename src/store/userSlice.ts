// import { getAddress } from '../services/apiGeocoding';

import { createSlice } from '@reduxjs/toolkit';

// /**
//  * Represents a geographical position with latitude and longitude properties
//  */
// type Position = {
//   latitude: number;
//   longitude: number;
// };

// /**
//  * Represents the address object structure that the getAddress function returns
//  */
// type AddressObj = {
//   locality?: string;
//   city?: string;
//   postcode?: string;
//   countryName?: string;
// };

// /**
//  * Returns a Promise that resolves with the user's current geographical position.
//  * Utilizes the navigator.geolocation.getCurrentPosition Web API.
//  *
//  * @returns {Promise<GeolocationPosition>} - A promise that resolves with the GeolocationPosition object.
//  */
// function getPosition(): Promise<GeolocationPosition> {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// }

// /**
//  * Asynchronously fetches the address description based on the user's current geographical position.
//  * It first retrieves the user's position, then it fetches the address description from a geocoding API,
//  * and finally formats and returns an object containing the essential data.
//  *
//  * @returns {Promise<{position: Position; address: string}>} - A promise that resolves with an object containing the position data and the formatted address string.
//  */
// async function fetchAddress(): Promise<{
//   position: Position;
//   address: string;
// }> {
//   // 1) We get the user's geolocation position
//   const positionObj = await getPosition();
//   const position: Position = {
//     latitude: positionObj.coords.latitude,
//     longitude: positionObj.coords.longitude,
//   };

//   // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it in the order form, so that the user can correct it if wrong
//   const addressObj: AddressObj = await getAddress(position);
//   const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

//   // 3) Then we return an object with the data that we are interested in
//   return { position, address };
// }

//! -------------------------------------------------------------------------------
//! -------------------------------------------------------------------------------
//! -------------------------------------------------------------------------------

type Init = {
  username: string;
};

const initialState: Init = {
  username: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
  },
});

export const { updateName } = userSlice.actions;

export default userSlice.reducer;
