import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';


import Mainpage from './FormComponents/Mainpage';
import Cartpage from './FormComponents/Cartpage';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
            <Route exact path="/" component={Mainpage} />
	        <Route exact path="/cart" component={Cartpage} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;