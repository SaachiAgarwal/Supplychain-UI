import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      assets: []
    };
  }

  componentDidMount() {
    axios.get('/api/asset')
      .then(res => {
console.log(res);
        this.setState({ assets: res.data });
        console.log(this.state.assets);
      });
  }

  render() {
    return (
     
 <div class="container">
<div class="topnav">
  <a class="active" href="/home">Home</a>
  <a href="/defineasset">Define Asset</a>
  <a href="/createasset">Create Asset</a>
  <a href="/viewassets">View Assets</a>
 <a href="/createuser">Create User</a>
</div>
        <div class="panel panel-default">
          <div class="panel-heading">
           

 <h3 class="panel-title">
              ASSET CATALOG
            </h3>
          </div>
          <div class="panel-body">
	   
           
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Field_Id</th>
                  <th>Field_Name</th>
                </tr>
              </thead>
              <tbody>
                {this.state.assets.map(asset =>
                  <tr>
                    <td><Link to={`/show/${asset._id}`}>{asset.type}</Link></td>
                    <td>{asset.field_id}</td>
                    <td>{asset.field_name}</td>
                  </tr>
                )}
              </tbody>

            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
