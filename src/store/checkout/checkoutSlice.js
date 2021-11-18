import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	userInfo: {
		email: '',
		name: '',
		surname: '',
		phoneNumber: '',
		street: '',
		streetNumber: '',
		postCode: '',
		city: '',
	},
	errors: {},
};

const checkoutSlice = createSlice({
	name: 'checkout',
	initialState,
	reducers: {
		checkoutHandle(state, action) {
			state.userInfo[action.payload.fieldName] = action.payload.userData;
		},
		checkoutErrors(state, action) {
			state.errors = action.payload;
		},
		reset(){
			return initialState;
		}
	},
});

export const checkoutActions = checkoutSlice.actions;

export default checkoutSlice.reducer;
