import React from 'react';
import { useSelector } from 'react-redux';

import OneProductOnList from '../OneProductOnList/OneProductOnList';

const CheckAlsoProducts = ({ id }) => {
	const data = useSelector(state => state.data.data);

	const randomProducts = data
		.filter(prod => prod.id !== id)
		.map(prod => ({
			sort: Math.random(),
			value: prod,
		}))
		.sort((a, b) => a.sort - b.sort)
		.map(a => a.value)
		.slice(0, 3);

	return (
		<div className="container">
			<div className="checkAlsoProducts">
				<h1 className="checkAlsoProducts__header">
					CHECK ALSO <i className="fas fa-chevron-circle-down"></i>
				</h1>
				<ul className="productsList">
					{randomProducts.map(product => {
						return <OneProductOnList key={product.id} {...product} />;
					})}
				</ul>
			</div>
		</div>
	);
};
export default CheckAlsoProducts;
