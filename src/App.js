import React, { useEffect } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { dataToFetch } from './store/data/dataActions';

import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import OneProductBigView from './components/Products/subcomponents/OneProductBigView/OneProductBigView';
import Products from './components/Products/Products';
import ScrollToTop from './helpers/ScrollToTop';
import Favorites from './components/Products/subcomponents/Favorites/Favorites';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(dataToFetch());
	}, [dispatch]);

	return (
		<Router>
			<ScrollToTop>
				<Header />
				<Switch>
					<Route exact path="/" component={Products} />
					<Route exact path="/cart" component={Cart} />
					<Route exact path="/favorites" component={Favorites} />
					<Route exact path="/checkout" component={Checkout} />
					<Route path="/:id" component={OneProductBigView} />
				</Switch>
				<Footer />
			</ScrollToTop>
		</Router>
	);
};

export default App;
