import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      password: '',
      email: '',
      role: ''
          };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { name , password , email , role } = this.state;

    axios.post('/api/user', {  name , password , email , role })
      .then((result) => {
        this.props.history.push("/home")
      });
  }

  render() {
    const {  name , password , email , role } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              ADD USER
            </h3>
          </div>
          <div class="panel-body">
           
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" name="name" value={name} onChange={this.onChange} placeholder="Name" />
              </div>
              <div class="form-group">
                <label for="password">Password:</label>
                <input type="text" class="form-control" name="password" value={password} onChange={this.onChange} placeholder="Password" />
              </div>
              <div class="form-group">
                <label for="email">Email:</label>
                <input type="text" class="form-control" name="email" value={email} onChange={this.onChange} placeholder="Email" />
              </div>
              <div class="form-group">
                <label for="role">Role:</label>
                <textArea class="form-control" name="role" onChange={this.onChange} placeholder="role" cols="80" rows="3">{role}</textArea>
              </div>
             
              <button type="submit" class="btn btn-success">Create User</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
