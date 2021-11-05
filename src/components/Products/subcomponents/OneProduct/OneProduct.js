import React from 'react';

const OneProduct = ({img, name, price}) => {
	return (
		<li className="productsList__item">
			<div className="product">
				<div className="product__photo">
					<img
						className="product__photo__img"
						src={img}
					/>
				</div>
				<h2 className="product__name">{name}</h2>
				<h3 className="product__price">{price} PLN</h3>
				<h4 className="product__cart">
					Add <i class="fas fa-plus-circle"></i>
				</h4>
			</div>
		</li>
	);
};

export default OneProduct;
