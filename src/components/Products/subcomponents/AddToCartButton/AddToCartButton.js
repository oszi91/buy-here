import React from 'react';

const AddToCartButton = ({ addToCartHandle }) => {
	return (
		<>
		<button className="productBtn" onClick={addToCartHandle}>
			Add <i className="fas fa-plus-circle"></i>
		</button>
		</>
	);
};

export default AddToCartButton;
