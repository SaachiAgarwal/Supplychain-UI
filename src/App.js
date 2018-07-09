import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
        this.setState({ assets: res.data });
        console.log(this.state.assets);
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              ASSET CATALOG
            </h3>
          </div>
          <div class="panel-body">
	   
            <h4><Link to="/create"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add Asset Fields</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Field_Id</th>
                  <th>Field_Name</th>
                </tr>
              </thead>
              <tbody>
                {this.state.assets.	map(asset =>
                  <tr>
                    <td><Link to={`/show/${asset._id}`}>{asset.type}</Link></td>
                    <td>{asset.field_id}</td>
                    <td>{asset.field_name}</td>
                  </tr>
                )}
              </tbody>
<h4><Link to="/createasset"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Create Asset</Link></h4>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
