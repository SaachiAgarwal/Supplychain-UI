import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';
import './index.css';
import App from './App';
import AppUser from './AppUser';
import registerServiceWorker from './registerServiceWorker';
import Edit from './components/Edit';
import Create from './components/Create';
import Show from './components/Show';
import EditUser from './components/EditUser';
import CreateUser from './components/CreateUser';
import ShowUser from './components/ShowUser';
import CreateAsset from './components/CreateAsset';



ReactDOM.render(
  <Router>
      <div>
        <Route exact path='/' component={App} />
	<Route exact path='/' component={AppUser} />
        <Route path='/edit/:id' component={Edit} />
        <Route path='/create' component={Create} />
        <Route path='/show/:id' component={Show} />
	<Route path='/edituser/:id' component={EditUser} />
        <Route path='/createuser' component={CreateUser} />
        <Route path='/showuser/:id' component={ShowUser} />
 	<Route path='/createasset' component={CreateAsset} />
	
      </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
