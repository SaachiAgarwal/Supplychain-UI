import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    axios.get('/api/user/'+this.props.match.params.id)
      .then(res => {
        this.setState({ user: res.data });
        console.log(this.state.user);
      });
  }

  onChange = (e) => {
    const state = this.state.user
    state[e.target.name] = e.target.value;
    this.setState({user:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { name , password , email , role } = this.state.user;

    axios.put('/api/user/'+this.props.match.params.id, { name , password , email , role })
      .then((result) => {
        this.props.history.push("/showuser/"+this.props.match.params.id)
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              EDIT USER
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to={`/showuser/${this.state.user._id}`}><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> User List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" name="name" value={this.state.user.name} onChange={this.onChange} placeholder="Name" />
              </div>
              <div class="form-group">
                <label for="password">Passwod:</label>
                <input type="text" class="form-control" name="password" value={this.state.user.password} onChange={this.onChange} placeholder="Passwod" />
              </div>
              <div class="form-group">
                <label for="email">Email:</label>
                <input type="text" class="form-control" name="email" value={this.state.user.email} onChange={this.onChange} placeholder="Email" />
              </div>
              <div class="form-group">
                <label for="role">Role:</label>
                <input type="text" class="form-control" name="role" value={this.state.user.role} onChange={this.onChange} placeholder="Role" />
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;
