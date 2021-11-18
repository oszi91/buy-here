import { configureStore } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import cart from './cart/cartSlice';
import checkout from './checkout/checkoutSlice';
import data from './data/dataSlice';
import favorites from './favorites/favoritesSlice';
import message from './messages/messagesSlice';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart', 'favorites'],
};

const reducers = combineReducers({
	cart,
	checkout,
	message,
	data,
	favorites,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
