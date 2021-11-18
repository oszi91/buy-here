import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { sumPrice } from '../../helpers/sumPrice';

import OneCart from './subcomponents/OneCart/OneCart';

const Cart = () => {
	const cartData = useSelector(state => state.cart.cartData);
	const totalPrice = sumPrice(cartData).toFixed(2);

	return (
		<div className="container">
			<div className="cartContainer">
				<h1 className="cartContainer__header">YOUR CART</h1>
				{cartData.length ? (
					<>
						<div className="cartContainer__cart">
							<ul className="cartList">
								{cartData.map(product => {
									return <OneCart key={product.id} {...product} />;
								})}
							</ul>
							<div className="cartSum">
								<p className="cartSum__head">Summary</p>
								<p className="cartSum__totalPrice">{totalPrice} EUR</p>
							</div>
						</div>
						<div className="cartContainer__btns">
							<Link to="/checkout" className="cartContainer__btns__btn">Checkout</Link>
						</div>
					</>
				) : (
					<div className="cartContainer__empty">Ups. It's empty. <i className="far fa-frown"></i></div>
				)}
			</div>
		</div>
	);
};

export default Cart;
