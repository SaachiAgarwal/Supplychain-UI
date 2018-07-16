import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      asset: {}
    };
  }

  componentDidMount() {
    axios.get('/api/asset/'+this.props.match.params.id)
      .then(res => {
        this.setState({ asset: res.data });
        console.log(this.state.asset);
      });
  }

  delete(id){
    console.log(id);
    axios.delete('/api/asset/'+id)
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
              {this.state.asset.field_name}
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/viewassets"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Asset List</Link></h4>
            <dl>
              <dt>Type:</dt>
              <dd>{this.state.asset.type}</dd>
              <dt>Field_Id:</dt>
              <dd>{this.state.asset.field_id}</dd>
              <dt>Data_Type:</dt>
              <dd>{this.state.asset.data_type}</dd>
              <dt>Description:</dt>
              <dd>{this.state.asset.description}</dd>
              <dt>Index:</dt>
              <dd>{this.state.asset.index}</dd>
            </dl>
            <Link to={`/edit/${this.state.asset._id}`} class="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.asset._id)} class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;
