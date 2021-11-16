import React from 'react';
import { useSelector } from 'react-redux';

import { sumPrice } from '../../helpers/sumPrice';

import OneCart from './subcomponents/OneCart/OneCart';

const Cart = () => {
	const cartData = useSelector(state => state.cart.cartData);
	const totalPrice = sumPrice(cartData);

	return (
		<div className="container">
			<div className="cartContainer">
				<h1 className="cartHeader">YOUR CART</h1>
				{cartData.length ? (
					<>
						<ul className="cartList">
							{cartData.map(product => {
								return <OneCart key={product.id} {...product} />;
							})}
						</ul>
						<div className="cartSum">
							<p>Summary</p>
							<p>{totalPrice}</p>
						</div>
					</>
				) : (
					<div className="cartContainer__empty">Ups. It's empty.</div>
				)}
			</div>
		</div>
	);
};

export default Cart;
