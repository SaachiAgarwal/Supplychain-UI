import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios.get('/api/user')
      .then(res => {
        this.setState({ users: res.data });
        console.log(this.state.users);
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              USER CATALOG
            </h3>
          </div>
          <div class="panel-body">
	    
	   
            
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users.map(user =>
                  <tr>
                    <td><Link to={`/showuser/${user._id}`}>{user.name}</Link></td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
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
