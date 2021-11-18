import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const ScrollToTop = ({ children, location: { pathname } }) => {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
		});
	}, [pathname]);

	return children || null;
};

export const ScrollToTopS = () => window.scrollTo(0, 0);

export default withRouter(ScrollToTop);
