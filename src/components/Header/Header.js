import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Messages from '../Messages/Messages';

const Header = () => {
	const quantity = useSelector(state => state.cart.cartQuantity);
	const message = useSelector(state => state.message.message);

	const areProductsInCart = quantity !== 0 && (
		<>
			<p className="cart__placeholder"></p>
			<p className="cart__quantity">{quantity}</p>
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
					<div className="cart">
						<Link to="/cart">
							<i className="fas fa-shopping-cart"></i>
							{areProductsInCart}
						</Link>
					</div>
				</div>
			</div>
			{message && <Messages />}
		</header>
	);
};

export default Header;
