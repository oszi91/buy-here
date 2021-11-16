import { cartActions } from '../cart/cartSlice';
import { messagesActions } from '../messages/messagesSlice';

export const addToCartWithMessage = productInfo => {
	return dispatch => {
		dispatch(cartActions.addToCart(productInfo));
		dispatch(
			messagesActions.showMessage({
				status: 'success',
				title: `Item was added to cart.`,
			})
		);
		setTimeout(() => {
			dispatch(messagesActions.hideMessage());
		}, 500);
	};
};

export const removeCartWithMessage = id => {
	return dispatch => {
		dispatch(cartActions.removeFromCart(id));
		dispatch(
			messagesActions.showMessage({
				status: 'success',
				title: `Item was removed from cart.`,
			})
		);
		setTimeout(() => {
			dispatch(messagesActions.hideMessage());
		}, 500);
	};
};
