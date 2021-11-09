import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OneProduct from './subcomponents/OneProduct/OneProduct';
import { getCartData } from './../../store/cart/cartActions';
import Loading from '../Loading/Loading';
import Messages from '../Messages/Messages';

const Products = () => {
	const dispatch = useDispatch();
	const data = useSelector(state => state.cart.data);

	useEffect(() => {
		dispatch(getCartData());
	}, [dispatch]);

	return (
		<div className="container">
			<main className="productsContainer">
				<ul className="productsList">
					{data.length ? (
						data.map(product => {
							return <OneProduct key={product.id} {...product} />;
						})
					) : (
						<Loading />
					)}
				</ul>
			</main>
		</div>
	);
};

export default Products;
