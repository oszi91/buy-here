import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { cutTextIfToLong } from '../../../../helpers/cutTextIfToLong';
import { addToCartWithMessage } from '../../../../store/cart/cartActions';

import AddToCartButton from '../AddToCartButton/AddToCartButton';
import OneProductView from '../OneProductView/OneProductView';

const OneProductOnList = ({ id, image, title, price, }) => {
	const dispatch = useDispatch();

	const shorterName = cutTextIfToLong(title, 25);
	const productDataToCart = { id, image, title, price, quantity: 0 };

	const addToCartHandle = () => {
		dispatch(addToCartWithMessage(productDataToCart))
	};

	return (
		<li className="productsList__item">
			<Link to={`/${id}`}>
				<OneProductView image={image} title={shorterName} price={price} />
			</Link>
			<AddToCartButton addToCartHandle={addToCartHandle} />
		</li>
	);
};

export default OneProductOnList;
