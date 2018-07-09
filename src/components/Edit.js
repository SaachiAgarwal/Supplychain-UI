import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Edit extends Component {

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

  onChange = (e) => {
    const state = this.state.asset
    state[e.target.name] = e.target.value;
    this.setState({asset:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { type, field_id, field_name, data_type, description, index } = this.state.asset;

    axios.put('/api/asset/'+this.props.match.params.id, { type, field_id, field_name, data_type, description, index })
      .then((result) => {
        this.props.history.push("/show/"+this.props.match.params.id)
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              EDIT ASSET
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to={`/show/${this.state.asset._id}`}><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Asset List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="type">Type:</label>
                <input type="text" class="form-control" name="type" value={this.state.asset.type} onChange={this.onChange} placeholder="Type" />
              </div>
              <div class="form-group">
                <label for="field_id">Field_Id:</label>
                <input type="text" class="form-control" name="field_id" value={this.state.asset.field_id} onChange={this.onChange} placeholder="Field_Id" />
              </div>
              <div class="form-group">
                <label for="field_name">Field_Name:</label>
                <input type="text" class="form-control" name="field_name" value={this.state.asset.field_name} onChange={this.onChange} placeholder="Field_Name" />
              </div>
              <div class="form-group">
                <label for="data_type">Data_Type:</label>
                <input type="text" class="form-control" name="data_type" value={this.state.asset.data_type} onChange={this.onChange} placeholder="Data_Type" />
              </div>
              <div class="form-group">
                <label for="description">Description:</label>
                <input type="text" class="form-control" name="Description" value={this.state.asset.description} onChange={this.onChange} placeholder="Description" />
              </div>
              <div class="form-group">
                <label for="index">Index:</label>
                <input type="text" class="form-control" name="index" value={this.state.asset.index} onChange={this.onChange} placeholder="Index" />
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
