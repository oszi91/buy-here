import React from 'react';
import { useSelector } from 'react-redux';
import OneCart from './subcomponents/OneCart/OneCart';

const Cart = () => {
	const cartData = useSelector(state => state.cart.cartData);

	console.log(cartData)

	return (
		<div className="container">
			<div className="cartContainer">
				<h1 className="cartHeader">YOUR CART</h1>
				<ul className="cartList">
					{cartData.map(product => {
						return (
							<OneCart
								key={product.id}
								{...product}
							/>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Cart;
