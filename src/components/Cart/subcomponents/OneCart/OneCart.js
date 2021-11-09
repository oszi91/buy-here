import React from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../../store/cart/cartSlice';

const OneCart = ({ id, image, title, price, quantity }) => {
	const dispatch = useDispatch();

	const addToCartHandle = () => {
		dispatch(cartActions.addToCart({ id }));
	};

	const removeFromCartHandle = () => {
		dispatch(cartActions.removeFromCart(id));
	};

	return (
		<li className="cartList__item">
			<div className="userCart">
				<div className="userCart__photo">
					<img className="userCart__photo__img" src={image} />
				</div>
				<p className="userCart__name">{title}</p>
				<div className="userCart__quantity">
					<button
						className="userCart__quantity__minus"
						value="minus"
						onClick={removeFromCartHandle}
					>
						-
					</button>
					<p className="userCart__quantity__number">{quantity}</p>
					<button
						className="userCart__quantity__add"
						value="plus"
						onClick={addToCartHandle}
					>
						+
					</button>
				</div>
				<div className="userCart__data">
					<p className="userCart__price">
						<span className="userCart__price__total">
							{' '}
							{(price * quantity).toFixed(2)} EUR
						</span>{' '}
						<span className="userCart__price__oneItem">
							({price} EUR / item)
						</span>
					</p>
				</div>
			</div>
		</li>
	);
};

export default OneCart;
