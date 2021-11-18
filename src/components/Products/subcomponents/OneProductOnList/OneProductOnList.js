import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { cutTextIfToLong } from '../../../../helpers/cutTextIfToLong';
import { addToCartWithMessage } from '../../../../store/cart/cartActions';
import { favoritesActions } from '../../../../store/favorites/favoritesSlice';

import AddToCartButton from '../AddToCartButton/AddToCartButton';
import AddToFav from '../AddtoFav/AddToFav';
import OneProductView from '../OneProductView/OneProductView';

const OneProductOnList = ({ id, image, title, price }) => {
	const dispatch = useDispatch();

	const shorterName = cutTextIfToLong(title, 25);
	const productDataToCart = { id, image, title, price, quantity: 0 };

	const addToCartHandle = () => {
		dispatch(addToCartWithMessage(productDataToCart));
	};

	const addOrDeleteFavHandle = () => {
		dispatch(favoritesActions.addOrDelete(productDataToCart));
	};

	return (
		<li className="productsList__item">
			<Link to={`/${id}`}>
				<OneProductView image={image} title={shorterName} price={price} />
			</Link>
			<AddToCartButton addToCartHandle={addToCartHandle} />
			<AddToFav addOrDelete={addOrDeleteFavHandle} id={id} />
		</li>
	);
};

export default OneProductOnList;
