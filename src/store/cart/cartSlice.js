import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	cartQuantity: 0,
	cartData: [],
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart(state, action) {
			state.cartQuantity++;

			const newProduct = action.payload;
			const existingProduct = state.cartData.find(
				product => product.id === newProduct.id
			);

			if (!existingProduct) {
				state.cartData = [...state.cartData, { ...newProduct, quantity: 1 }];
			} else {
				existingProduct.quantity++;
			}
		},
		removeFromCart(state, action) {
			state.cartQuantity--;

			const id = action.payload;
			const existingProduct = state.cartData.find(product => product.id === id);

			if (existingProduct.quantity === 1) {
				state.cartData = state.cartData.filter(product => product.id !== id);
			} else {
				existingProduct.quantity--;
			}
		},
	},
});



export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
