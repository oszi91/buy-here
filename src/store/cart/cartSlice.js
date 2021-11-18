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
			const { id, removeCompletely } = action.payload;
			const existingProduct = state.cartData.find(product => product.id === id);

			if (removeCompletely) {
				state.cartQuantity = state.cartQuantity - existingProduct.quantity;
			} else {
				state.cartQuantity--;
			}

			if (existingProduct.quantity === 1 || removeCompletely) {
				state.cartData = state.cartData.filter(product => product.id !== id);
			} else {
				existingProduct.quantity--;
			}
		},
		reset() {
			return initialState;
		},
	},
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
