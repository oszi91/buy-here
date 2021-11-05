import React from 'react';

const OneCart = ({ img, name, price }) => {
	return (
		<li className="cartList__item">
			<div className="userCart">
				<div className="userCart__photo">
					<img
						className="userCart__photo__img"
						src={img}
					/>
				</div>
				<p className="userCart__name">{name}</p>
				<div className="userCart__quantity">
					<button className="userCart__quantity__minus" value="minus">
						-
					</button>
					<p className="userCart__quantity__number">0</p>
					<button className="userCart__quantity__add" value="plus">
						+
					</button>
				</div>
				<div className="userCart__data">
					<p className="userCart__price">
						<span className="userCart__price__total"> {price} PLN</span>{' '}
						<span className="userCart__price__oneItem">({price} PLN / item)</span>
					</p>
				</div>
			</div>
		</li>
	);
};

export default OneCart;
