import React from 'react';
import OneCart from './subcomponents/OneCart/OneCart';

const Cart = () => {
	return (
		<div className="container">
			<div className="cartContainer">
				<h1 className="cartHeader">YOUR CART</h1>
				<ul className="cartList">
					<OneCart
						img={'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'}
						name={'Plecak Janette'}
						price={'150'}
					/>
				</ul>
			</div>
		</div>
	);
};

export default Cart;
