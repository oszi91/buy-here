import React from 'react';
import Cart from '../Cart/Cart';
import OneProduct from './subcomponents/OneProduct/OneProduct';

const Products = () => {
	return (
		<div className="container">
			<main className="productsContainer">
				<ul className="productsList">
					<OneProduct
						img={'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'}
						name={'Plecak Janette'}
						price={'150'}
					/>
				</ul>
			</main>
		</div>
	);
};

export default Products;
