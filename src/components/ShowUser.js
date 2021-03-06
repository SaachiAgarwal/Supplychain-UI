import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Show extends Component {

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

  delete(id){
    console.log(id);
    axios.delete('/api/user/'+id)
      .then((result) => {
        this.props.history.push("/home")
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              {this.state.user.name}
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/home"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> User List</Link></h4>
            <dl>
              <dt>Email:</dt>
              <dd>{this.state.user.email}</dd>
              <dt>Role:</dt>
              <dd>{this.state.user.role}</dd>
             
            </dl>
            <Link to={`/edituser/${this.state.user._id}`} class="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.user._id)} class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;
