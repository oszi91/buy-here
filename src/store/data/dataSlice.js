import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	data: [],
	productsToFetch: 6,
	loading: false,
	currProduct: {}
};

const dataSlice = createSlice({
	name: 'data',
	initialState,
	reducers: {
		fetchData(state, action) {
			state.data = action.payload;
			state.loading = false;
		},
		fetchSingleProduct(state,action){
			state.currProduct = action.payload;
			state.loading = false;
		},
		updateProductsToFetch(state, action){
			state.productsToFetch = state.productsToFetch + action.payload
		},
		loadingData(state) {
			state.loading = true;
		}
	},
});

export const dataActions = dataSlice.actions;

export default dataSlice.reducer;
