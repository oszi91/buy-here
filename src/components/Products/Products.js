import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { dataToFetch } from '../../store/data/dataActions';

import Loading from '../Loading/Loading';
import LoadMoreBtn from './subcomponents/LoadMoreBtn/LoadMoreBtn';
import OneProductOnList from './subcomponents/OneProductOnList/OneProductOnList';

const Products = () => {
	const dispatch = useDispatch();

	const data = useSelector(state => state.data.data);
	const loading = useSelector(state => state.data.loading);
	const productsToFetch = useSelector(state => state.data.productsToFetch);

	const showBtn = productsToFetch <= data.length;

	const updateProducts = () => {
		dispatch(dataToFetch(6));
	};

	return (
		<div className="container">
			<main className="productsContainer">
				<ul className="productsList">
					{data.map(product => {
						return <OneProductOnList key={product.id} {...product} />;
					})}
					{loading && <Loading />}
				</ul>
			</main>
				<LoadMoreBtn
				updateProducts={() => dispatch(updateProducts)}
				showBtn={showBtn}
			/>
		</div>
	);
};

export default Products;
