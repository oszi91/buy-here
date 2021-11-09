import { configureStore } from '@reduxjs/toolkit';
import cart from './cart/cartSlice';
import message from './messages/messagesSlice';

const store = configureStore({
    reducer: {cart, message }
})

export default store;