import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const HeaderItems = () => {
    const quantity = useSelector(state => state.cart.cartQuantity);
	const favorites = useSelector(state => state.favorites.favorites);

    const areProductsInCart = quantity !== 0 && (
		<>
			<div className="headerItem__circle">{quantity}</div>
		</>
	);

	const areFavoritesOnList = favorites.length !== 0 && (
		<>
			<div className="headerItem__circle">{favorites.length}</div>
		</>
	);

	return (
		<>
			<div className="headerItem">
				<Link className="headerItem__link" to="/favorites">
					<i className="fas fa-star"></i>
					{areFavoritesOnList}
				</Link>
			</div>
			<div className="headerItem">
				<Link className="headerItem__link" to="/cart">
					<i className="fas fa-shopping-cart"></i>
					{areProductsInCart}
				</Link>
			</div>
		</>
	);
};

export default HeaderItems;
