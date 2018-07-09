import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

//const API = 'https://hn.algolia.com/api/v1/search?query=';
//const DEFAULT_QUERY = 'redux';
const API = 'http://localhost:3001/api/asset/root/';

function stringifyFormData(fd) {
  const data = {};
	for (let key of fd.keys()) {
  	data[key] = fd.get(key);
  }
  return JSON.stringify(data, null, 2);
}

class Create extends Component {
  constructor(props) {
    super(props);
 this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      parent_key: [],
      isLoading: false,
      error: null,
    };
  }
componentDidMount() {
    this.setState({ isLoading: true });

    fetch(API)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => this.setState({ parent_key: data.parent_key, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

 handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

   /*this.setState({
      res: stringifyFormData(data),
    });*/
    var data1 = stringifyFormData(data);

   // alert(this.state.res);
   // alert(document.forms["myform"]);
    //var data1;
    //data1 = document.forms["myform"].serialize();
    //alert(data1);
    
//alert(data["carat"].value);
   /* fetch('http://localhost:3000/createquery', {
      method: 'POST',
      mode: 'CORS',
      //header :{'Content-Type': 'application/json','Accept': 'application/json'},	
      body: data1,
    }).then(res => {
        return res;
    }).catch(err => err);*/

			(async () => {
		  const rawResponse = await fetch('http://localhost:3000/createquery', {
		    method: 'POST',
		    headers: {
		      'Accept': 'application/json',
		      'Content-Type': 'application/json'
		    },
		    body: data1//JSON.stringify({a: 1, b: 'Textual content'})
		  });
		  const content = await rawResponse.json();

		  console.log(content);
		})();

}

 render() {
    const { parent_key, isLoading, error } = this.state;

    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <p>Loading ...</p>;
    }

    return (
		<div class="container">
      	<div  class="panel panel-default">
	<div class="panel-heading">
	  <h3 class="panel-title">
		      ADD ASSET DETAILS 
	 </h3>
	</div>
	<form id="myform" onSubmit={this.handleSubmit}>
	<div  class="panel-body">
		{parent_key.map(parent_key =>
		  <div key={parent_key.type}>

		 
		<div class="form-group">
	  	<label>
		 {parent_key.type} , 
	   	 {parent_key.field_id} : 
		</label>
	    	<input type="text" id={parent_key.field_id}  class="form-control" name={parent_key.field_id} />
		</div>         
		  </div>

		)

		 } 
	 </div>
	<button>Send data!</button>
	</form>
	      </div>
	
 
	</div>
	 

	
 	   );
	 }
}
export default Create;

