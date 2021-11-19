import React from 'react';

import Loading from '../../../Loading/Loading';
import OneProductOnList from '../OneProductOnList/OneProductOnList';

const ListOfProducts = ({ data, loading }) => {
	return (
		<main className="productsContainer">
			<ul className="productsList">
				{data.map(product => {
					return <OneProductOnList key={product.id} {...product} />;
				})}
				{loading && <Loading />}
			</ul>
		</main>
	);
};

export default ListOfProducts;
