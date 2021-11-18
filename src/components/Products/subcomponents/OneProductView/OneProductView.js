import React from 'react';

const OneProductView = ({image, title, price, description}) => {
	return (
		<div className="product">
			<div className="product__photo">
				<img className="product__photo__img" src={image} alt={title} />
			</div>
			<h2 className="product__name">{title}</h2>
			{description && <h3 className="product__desc">{description}</h3>}
			<h4 className="product__price">{price} EUR</h4>
		</div>
	);
};

export default OneProductView;
