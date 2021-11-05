import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<div className="headerContainer">
					<div className="logo">
						<Link className="logo__txt" to="/">
							buy
							<span className="logo__txt--color">Here</span>
                            !
						</Link>
					</div>
					<div className="cart">
						<Link to="/cart">
						<i class="fas fa-shopping-cart"></i>
                        <p className="cart__placeholder"></p>
						<p className="cart__quantity">1</p>
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
