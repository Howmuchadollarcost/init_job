import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './pages/Home'
import WatchListComponents from './pages/WatchListComponents';
import MovieDetailsComponent from './pages/MovieDetailsComponent';

export default function MovieApp() {
	return (
		<Router>
			<div className=" bg-black">
				<NavBar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/watchlist" component={WatchListComponents} />
					<Route path="/movie/:id" exact={true} children={<MovieDetailsComponent />} />
				</Switch>
			</div>
		</Router>
	)
}

