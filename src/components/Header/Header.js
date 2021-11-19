import React from 'react';
import { useSelector } from 'react-redux';

import HeaderItems from './subcomponents/HeaderItems/HeaderItems';
import Logo from './subcomponents/Logo/Logo';
import Messages from '../Messages/Messages';

const Header = () => {
	const message = useSelector(state => state.message.message);

	return (
		<header className="header">
			<div className="container">
				<div className="headerContainer">
					<Logo />
					<div className="headerContainer">
						<HeaderItems />
					</div>
				</div>
			</div>
			{message && <Messages />}
		</header>
	);
};

export default Header;
