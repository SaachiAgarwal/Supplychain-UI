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
import DefineAsset from './components/DefineAsset';
import Show from './components/Show';
import EditUser from './components/EditUser';
import CreateUser from './components/CreateUser';
import ShowUser from './components/ShowUser';
import CreateAsset from './components/CreateAsset';
import Login from "./components/Login";
import ViewAssets from './components/ViewAssets';
import AuditAsset from './components/AuditAsset';
import ViewSingleAsset from './components/ViewSingleAsset';
import ScanAsset from './components/ScanAsset';
ReactDOM.render(
  <Router>
      <div>

  <Route exact path='/home' component={App} />
	<Route exact path='/home' component={AppUser} />
  <Route path='/edit/:id' component={Edit} />
  <Route path='/defineasset' component={DefineAsset} />
  <Route path='/show/:id' component={Show} />
	<Route path='/edituser/:id' component={EditUser} />
  <Route path='/createuser' component={CreateUser} />	
  <Route path='/showuser/:id' component={ShowUser} />
 	<Route path='/createasset' component={CreateAsset} />
	<Route path='/viewassets' component={ViewAssets} />
	<Route path='/auditasset/:id' component={AuditAsset} />
	<Route path='/viewsingleasset/:id' component={ViewSingleAsset} />
	<Route exact path='/' component={Login}/>
  <Route path='/scanasset' component={ScanAsset} />   
	
      </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
