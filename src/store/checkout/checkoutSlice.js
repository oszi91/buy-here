import { createSlice } from '@reduxjs/toolkit';

const initialState = {
        email: '',
        name: '',
        surname: '',
        phoneNumber: '',
        street: '',
        streetNumber: '',
        postCode: '',
        city: '',
};

const checkoutSlice = createSlice({
	name: 'checkout',
	initialState,
	reducers: {
		checkoutHandle(state, action) {
            state[action.payload.fieldName] = action.payload.userData
        },
	},
});

export const checkoutActions = checkoutSlice.actions;

export default checkoutSlice.reducer;
