import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App';
import Header from './components/Header';

export default class Routes extends React.Component {
  	<main>
	    <Switch>
	      	<Route exact path='/' component={App}/>
	      	<Route path='/news/:news' component={Header}/>
	    </Switch>
  	</main>
}

export default Routes;