import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
	return (
		<div className="logo">
			<Link className="logo__txt" to="/">
				buy
				<span className="logo__txt--color">Here</span>!
			</Link>
		</div>
	);
};

export default Logo;
