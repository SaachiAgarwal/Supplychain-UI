import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
var QRCode = require('../QR.js');

var content = [];
var results = [];

function stringifyFormData(fd) {
  const data = {};
    for (let key of fd.keys()) {
      data[key] = fd.get(key);
  }
  return JSON.stringify(data, null, 2);
}



class ViewAsset extends React.Component {



  listKeys (){

   

    console.log(this.state.asset1);      



    var i = 0;

    var keyValue = {};

    var temp = [];

    var value;

    var keyPer;

        {this.state.asset1.map(items => {                               

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

         })}

 

    this.state.asset1 = temp;

    console.log(this.state.asset1);



 

  }

 

   createTable = () => {

    let table = []

 

    // Outer loop to create parent

    for (let i = 0; i < this.state.asset1.length; i++) {

      let children = []

      var value1 = this.state.asset1[i]['keyPer'];

    

        var value2 = this.state.asset1[i]['value'];


	if(value1 == 'Key'){
          children.push(<td>{value1}</td>)
		
          children.push(<td>{<Link to={`/viewsingleasset/${value2}`} class="btn btn-success">{value2}</Link>}</td>)
children.push(<td><dt>QR:</dt>
              <dt><QRCode class='qrcode' value={this.state.asset1.Key}
                    size={40}
                    fgColor='purple'
                    bgColor='white'
                /></dt></td>)
	}else{
	  children.push(<td>{value1}</td>)
	 children.push(<td>{value2}</td>)
	}



      table.push(<tr>{children}</tr>)

    }

    return table

  }
 

  constructor(props) {
    super(props);
 
    this.state = {
      asset1: [],

 isLoading: false,
    };
  }

	componentWillMount() {
     this.setState({ isLoading: true });

 

    (async () => {
          const rawResponse = await fetch('http://localhost:3000/getquery', {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          });

          content = await rawResponse.json();

          this.setState({ asset1: content });
           console.log(content);
      
        })().then(data => this.setState({ isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
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
              View Asset 
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

               </div>
            </div>

	<div>
	
	
	  </div>        	    </div>


            );
          }
        }

export default ViewAsset;


