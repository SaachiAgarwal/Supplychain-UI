	import React, { Component } from 'react';
	import ReactDOM from 'react-dom';
	import axios from 'axios';
	import { Link } from 'react-router-dom';

	class Create extends Component {

	  constructor() {
	    super();
	    this.state = {
	      type: '',
	      field_id: '',
	      field_name: '',
	      data_type: '',
	      description: '',
	      index: ''
	    };
	  }
	  onChange = (e) => {
	    const state = this.state
	    state[e.target.name] = e.target.value;
	    this.setState(state);
	  }

	  onSubmit = (e) => {
	    e.preventDefault();

	    const { type, field_id, field_name, data_type, description, index } = this.state;

	    axios.post('/api/asset', { type, field_id, field_name, data_type, description, index })
	      .then((result) => {
		this.props.history.push("/")
	      });
	  }

	  render() {
	    const { type, field_id, field_name, data_type, description, index } = this.state;
	    return (
	      <div class="container">
		<div class="panel panel-default">
		  <div class="panel-heading">
		    <h3 class="panel-title">
		      ADD ASSET FIELDS 
		    </h3>
		  </div>
		  <div class="panel-body">
		    <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Asset List</Link></h4>
		    <form onSubmit={this.onSubmit}>
		      <div class="form-group">
		        <label for="type">Type:</label>
		        <input type="text" class="form-control" name="type" value={type} onChange={this.onChange} placeholder="Type" />
		      </div>
		      <div class="form-group">
		        <label for="field_id">Field_Id:</label>
		        <input type="text" class="form-control" name="field_id" value={field_id} onChange={this.onChange} placeholder="Field_Id" />
		      </div>
		      <div class="form-group">
		        <label for="field_name">Field_Name:</label>
		        <input type="text" class="form-control" name="field_name" value={field_name} onChange={this.onChange} placeholder="Field_Name" />
		      </div>
		      <div class="form-group">
		        <label for="data_type">Data_Type:</label>
		        <textArea class="form-control" name="data_type" onChange={this.onChange} placeholder="data_type" cols="80" rows="3">{data_type}</textArea>
		      </div>
		      <div class="form-group">
		        <label for="description">Description:</label>
		        <input type="text" class="form-control" name="description" value={description} onChange={this.onChange} placeholder="Description" />
		      </div>
		      <div class="form-group">
		        <label for="index">Index:</label>
		        <input type="text" class="form-control" name="index" value={index} onChange={this.onChange} placeholder="Index" />
		      </div>
		      <button type="submit" class="btn btn-default">Submit</button>
		    </form>
		  </div>
		</div>
	      </div>
	    );
	  }
	}

	export default Create;
