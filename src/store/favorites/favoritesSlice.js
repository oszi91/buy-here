import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	favorites: [],
};

const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		addOrDelete(state, action) {
			const newProduct = action.payload;
			const existingProduct = state.favorites.find(
				product => product.id === newProduct.id
			);

			if (existingProduct) {
				state.favorites = state.favorites.filter(
					product => product.id !== newProduct.id
				);
			} else {
				state.favorites = [...state.favorites, action.payload];
			}
		},
	},
});

export const favoritesActions = favoritesSlice.actions;

export default favoritesSlice.reducer;
