import React, { useEffect } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import OneProductBigView from './components/Products/subcomponents/OneProductBigView/OneProductBigView';
import { dataToFetch } from './store/data/dataActions';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(dataToFetch());
	}, [dispatch]);

	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path="/" component={Products} />
				<Route exact path="/cart" component={Cart} />
				<Route exact path="/checkout" component={Checkout} />
				<Route path="/:id" component={OneProductBigView} />
			</Switch>
			<Footer />
		</Router>
	);
};

export default App;
