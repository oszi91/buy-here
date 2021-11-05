import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';

const App = () => {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path="/" component={Products} />
				<Route path="/cart" component={Cart} />
			</Switch>
			<Footer />
		</Router>
	);
};

export default App;
