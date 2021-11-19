import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { dataToFetch } from '../../store/data/dataActions';

import ListOfProducts from './subcomponents/ListOfProducts/ListOfProducts';
import LoadMoreBtn from '../Buttons/LoadMoreBtn/LoadMoreBtn';

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
			<ListOfProducts data={data} loading={loading} />
			<LoadMoreBtn
				updateProducts={() => dispatch(updateProducts)}
				showBtn={showBtn}
			/>
		</div>
	);
};

export default Products;
