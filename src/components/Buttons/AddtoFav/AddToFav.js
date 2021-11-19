import React from 'react';
import { useSelector } from 'react-redux';

const AddToFav = ({ addOrDelete, id }) => {
	const isProductFavorite = useSelector(state =>
		state.favorites.favorites.find(product => product.id === id)
	);

	let favIconStatus = 'far fa-star';
	favIconStatus = isProductFavorite ? 'fas fa-star' : 'far fa-star';

	return (
		<>
			<button className="addToFav" onClick={addOrDelete}>
				<i className={favIconStatus}></i>
			</button>
		</>
	);
};

export default AddToFav;
