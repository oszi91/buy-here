import React from 'react';
import { useDispatch } from 'react-redux';

import {
	addToCartWithMessage,
	removeCartWithMessage,
} from '../../../../store/cart/cartActions';

import { cutTextIfToLong } from '../../../../helpers/cutTextIfToLong';

const OneCart = ({ id, image, title, price, quantity }) => {
	const dispatch = useDispatch();

	const addToCartHandle = () => {
		dispatch(addToCartWithMessage({ id }));
	};
	const removeOneItemFromCartHandle = () => {
		dispatch(removeCartWithMessage({id, removeCompletely: false}));
	};

	const removeCompletelyItemFromCartHandle = () => {
		dispatch(removeCartWithMessage({id, removeCompletely: true}));
	};

	const shorterName = cutTextIfToLong(title, 25);

	return (
		<li className="cartList__item">
			<div className="userCart">
				<div className="userCart__photo">
					<img className="userCart__photo__img" src={image} alt={title} />
				</div>
				<p className="userCart__name">{shorterName}</p>
				<div className="userCart__quantity">
					<button
						className="userCart__quantity__minus"
						value="minus"
						onClick={removeOneItemFromCartHandle}
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
				<div className="userCart__price">
					<span className="userCart__price__total">
						{(price * quantity).toFixed(2)} EUR
					</span>
					<span className="userCart__price__oneItem">({price} EUR / item)</span>
				</div>
				<div className="userCart__trash" onClick={removeCompletelyItemFromCartHandle}>
					<i className="fas fa-trash"></i>
				</div>
			</div>
		</li>
	);
};

export default OneCart;
