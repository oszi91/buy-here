import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Messages from '../Messages/Messages';

const Header = () => {
	const quantity = useSelector(state => state.cart.cartQuantity);
	const message = useSelector(state => state.message.message);
	const favorites = useSelector(state => state.favorites.favorites);

	const areProductsInCart = quantity !== 0 && (
		<>
			<p className="headerItem__placeholder"></p>
			<p className="headerItem__quantity">{quantity}</p>
		</>
	);

	const areFavoritesOnList = favorites.length !== 0 && (
		<>
			<p className="headerItem__placeholder"></p>
			<p className="headerItem__quantity">{favorites.length}</p>
		</>
	);

	return (
		<header className="header">
			<div className="container">
				<div className="headerContainer">
					<div className="logo">
						<Link className="logo__txt" to="/">
							buy
							<span className="logo__txt--color">Here</span>!
						</Link>
					</div>
					<div className="headerContainer">
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
					</div>
				</div>
			</div>
			{message && <Messages />}
		</header>
	);
};

export default Header;
