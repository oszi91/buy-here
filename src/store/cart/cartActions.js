import { messagesActions } from '../messages/messagesSlice';
import { cartActions } from './cartSlice';

export const getCartData = () => {
	return async dispatch => {
		const getData = async () => {
			const response = await fetch('https://fakestoreapi.com/products');

			if (!response.ok) {
				throw new Error(`Can't fetch data!`);
			}

			const data = await response.json();
			return data;
		};

		try {
			const cartData = await getData();
			dispatch(cartActions.fetchData(cartData));
		} catch (error) {
			dispatch(
				messagesActions.showMessage({
					status: 'error',
					title: `Ups. We can't fetch data.`,
				})
			);
		}
	};
};
