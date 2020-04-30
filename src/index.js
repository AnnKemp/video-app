import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
    Route,
    NavLink,
    BrowserRouter as Router,
    Switch,
} from 'react-router-dom'
import Upcoming from "./components/upcoming/Upcoming";
import Contact from "./contact";
import Notfound from './notfound';

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <div>
              <ul>
                  <li>
                      <NavLink activeClassName="active" to="/">Home</NavLink>
                  </li>
                  <li>
                      <NavLink activeClassName="active" to="/components/upcoming/Upcoming">Upcoming</NavLink>
                  </li>
                  <li>
                      <NavLink activeClassName="active" to="/contact">Contact</NavLink>
                  </li>
              </ul>
              <Switch>
              <Route exact path="/" component={App} />
              <Route path="/components/upcoming/Upcoming" component={Upcoming} />
              <Route path="/contact" component={Contact} />
              <Route component={Notfound} />
              </Switch>
          </div>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
