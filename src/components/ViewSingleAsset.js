import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

var content = [];
var results = [];
function ChangeOwner(key) { 
  

	var selectedowner = document.getElementById("changeowner");
	var Val = selectedowner.options[selectedowner.selectedIndex].value; 
	var txt = selectedowner.options[selectedowner.selectedIndex].text; 
	
	
       
        
	 var data2 = {'id':key , 
	'owner' :  Val};

	
	
	(async () => { console.log("in update");
		  const rawResponse = await fetch('http://localhost:3000/updatequery', {
		    method: 'PUT',
		    headers: {
		      'Accept': 'application/json',
		      'Content-Type': 'application/json'
		    },
		    body: (JSON.stringify(data2))//JSON.stringify({a: 1, b: 'Textual content'})
		  });
		  const content = await rawResponse.json();
		          console.log("new content");
	console.log(content);
		//  console.log(content);
		})().then(data => this.setState({ isLoading: false }))
	      .catch(error => this.setState({ isLoading: false }));

} 

function stringifyFormData(fd) {
  const data = {};
    for (let key of fd.keys()) {
      data[key] = fd.get(key);
  }
  return JSON.stringify(data, null, 2);
}

class ViewSingleAsset extends React.Component {



  listKeys (){

   

    console.log(this.state.asset1);      



    var i = 0;

    var keyValue = {};

    var temp = [];

    var value;

    var keyPer;

   console.log(Object.keys(this.state.asset1));

                                      
   var items = this.state.asset1;

                  {Object.keys(items).map((key) => {

                      console.log(key, items[key]);

                      if( !(items[key] instanceof Object)){

                        keyValue = {};

                      

                        value = items[key];

                        keyPer = key;

                       keyValue = {keyPer,value};

                        temp.push(keyValue);

                      } 

                      if(items[key] instanceof Object){

                      

                                {Object.keys(items[key]).map((key1) => {

                                    console.log(key1, items[key][key1]);

                                    keyValue = {};

                                  

                                     keyPer = key1;

                                     value = items[key][key1];

                                     keyValue = {keyPer,value};

                                     temp.push(keyValue);

                                })}

                       

                      }

 

                  })}

        

 

    this.state.asset2 = temp;

    console.log(this.state.asset2);



 

  }

 

   createTable = () => {

    let table = []

 

    // Outer loop to create parent

    for (let i = 0; i < this.state.asset2.length; i++) {

      let children = []

      var value1 = this.state.asset2[i]['keyPer'];

    

        var value2 = this.state.asset2[i]['value'];


	
	  children.push(<td>{value1}</td>)
	 children.push(<td>{value2}</td>)
	


      table.push(<tr>{children}</tr>)

    }

    return table

  }
 

  constructor(props) {
    super(props);
 
    this.state = {
      asset1: {},
      asset2: [],
      isLoading: false,


    };
  }

	componentWillMount() {
     this.setState({ isLoading: true });

 

 	   var data3 = {'id':this.props.match.params.id };

    (async () => {
          const rawResponse = await fetch('http://localhost:3000/getsinglequery', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
	     body: (JSON.stringify(data3))
          });

          content = await rawResponse.json();

          this.setState({ asset1: content });
           console.log(content);
      
        })().then(data => this.setState({ isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }
 


 onChange = (e) => {
    const state = this.state.asset
    state[e.target.name] = e.target.value;
    this.setState({asset:state});
  }

  onSubmit = (e) => {      
   var key =  this.props.match.params.id;

 ChangeOwner(key);
}
 
  render() {
 const {  isLoading} = this.state;
 if (isLoading) {
      return <p>Loading ...</p>;
    }


    return (
      <div class="container">

        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              View Asset Details
            </h3>
          </div>
          <div class="panel-body">
           
		{this.listKeys()}
		<table class="table table-stripe">

		  <thead>
                <tr>
                  <th>Field Name</th>
                  <th>Value</th>
                 </tr>
              </thead>
		<tbody>
		{this.createTable()}
		</tbody>
		</table>
          <dl>
    	
           </dl>
               </div>
            </div>

	<div>
	<form  onSubmit={this.onSubmit}>  <select id="changeowner" > 
<option value="Manufacturer">Manufacturer</option> 
<option value="Logistics" selected="selected">Logistics</option> 
<option value="Distributor">Distributor</option>
 <option value="Retailer">Retailer</option> 
<option value="Wholesaler">Wholesaler</option> 
 
</select>  <button type="submit" class="btn btn-success">Change Owner</button> </form>


	 <Link to={`/auditasset/${this.props.match.params.id}`} class="btn btn-success">Audit</Link>
	
	  </div>        	    </div>


            );
          }
        }

export default ViewSingleAsset;


