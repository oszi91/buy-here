import { configureStore } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import cart from './cart/cartSlice';
import data from './data/dataSlice';
import message from './messages/messagesSlice';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart']
};

const reducers = combineReducers({
	cart,
	message,
	data
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
