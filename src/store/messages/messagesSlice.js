import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	message: null
};

const messagesSlice = createSlice({
	name: 'messages',
	initialState,
	reducers: {
		showMessage(state, action) {
            const {status, title} = action.payload;
            state.message = {status, title}
        },
		hideMessage(state){
			state.message = null;
		}
	},
});

export const messagesActions = messagesSlice.actions;

export default messagesSlice.reducer;
