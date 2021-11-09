import React from 'react';
import { useDispatch } from 'react-redux';

import { cutTextIfToLong } from '../../../../helpers/cutTextIfToLong';

import { cartActions } from '../../../../store/cart/cartSlice';

const OneProduct = ({ id, image, title, price }) => {
	const dispatch = useDispatch();

	const shorterName = cutTextIfToLong(title, 25);

	const productDataToCart = {id, image, title, price, quantity: 0}

	const addToCartHandle = () => {
		dispatch(cartActions.addToCart(productDataToCart));
	};

	return (
		<li className="productsList__item">
			<div className="product">
				<div className="product__photo">
					<img className="product__photo__img" src={image} />
				</div>
				<h2 className="product__name">{shorterName}</h2>
				<h3 className="product__price">{price} EUR</h3>
				<h4 className="product__cart">
					<button className="product__cart__btn" onClick={addToCartHandle}>
						Add <i className="fas fa-plus-circle"></i>
					</button>
				</h4>
			</div>
		</li>
	);
};

export default OneProduct;
