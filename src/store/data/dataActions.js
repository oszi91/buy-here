import { dataActions } from './dataSlice';
import { messagesActions } from '../messages/messagesSlice';
import { API_OPTIONS } from '../../API/API';

export const dataToFetch = updateQuantityProducts => {
	return async (dispatch, getState) => {
		if (updateQuantityProducts) {
			dispatch(dataActions.updateProductsToFetch(updateQuantityProducts));
		}

		const getData = async () => {
			const productsToFetch = getState().data.productsToFetch;
			const response = await fetch(`${API_OPTIONS.limit}=${productsToFetch}`);

			if (!response.ok) {
				throw new Error(`Can't fetch data!`);
			}

			const data = await response.json();
			return data;
		};

		dispatch(dataActions.loadingData());
		try {
			const data = await getData();
			dispatch(dataActions.fetchData(data));
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

export const fetchSingleProduct = id => {
	return async dispatch => {
		const getProduct = async () => {
			const response = await fetch(`${API_OPTIONS.product}/${id}`);

			if (!response.ok) {
				throw new Error(`Can't fetch data!`);
			}

			const data = await response.json();
			return data;
		};

		dispatch(dataActions.loadingData());
		try {
			const product = await getProduct();
			dispatch(dataActions.fetchSingleProduct(product));
		} catch (error) {
			dispatch(
				messagesActions.showMessage({
					status: 'error',
					title: `Ups. We can't fetch that product.`,
				})
			);
		}
	};
};
