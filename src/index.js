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
import MyForm from "./components/Search";
import Register from "./components/contact/Register";
import Notfound from './components/notfound';

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <div>
          <nav>
              <ul>
                  <li>
                      <NavLink activeClassName="active" to="/video-app">Home</NavLink>
                  </li>
                  <li>
                      <NavLink activeClassName="active" to="/components/upcoming/Upcoming">Upcoming</NavLink>
                  </li>

                <MyForm />
              </ul>
              <Switch>
                  <Route exact path="/video-app" component={App} />
              <Route path="/components/upcoming/Upcoming" component={Upcoming} />
              <Route path="/components/contact/Register" component={Register} />
              <Route path="/components/notfound" component={Notfound} />
              </Switch>
          </nav>
          </div>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
/*  <li>
   <NavLink activeClassName="active" to="/components/contact/Register">Register</NavLink> // voor als ik dat formulier terug ga bijvoegen
   </li> */

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
