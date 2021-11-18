import React from 'react';
import { useSelector } from 'react-redux';
import ListOfProducts from '../ListOfProducts/ListOfProducts';

const Favorites = () => {
	const favorites = useSelector(state => state.favorites.favorites);

	return (
		<div className="container">
			{favorites.length ? (
				<ListOfProducts data={favorites} />
			) : (
				<div className="favoritesEmptyContainer">
					<div className="favoritesEmpty">
						You don't have any favorite products.{' '}
						<i className="far fa-frown"></i>
					</div>
				</div>
			)}
		</div>
	);
};

export default Favorites;
