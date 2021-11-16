import React, {useEffect} from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
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
				<Route path="/:id" component={OneProductBigView} />
			</Switch>
			<Footer />
		</Router>
	);
};

export default App;
