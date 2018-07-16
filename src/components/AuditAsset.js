import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

var content = [];
var results = [];




class AuditAsset extends React.Component {



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

     children.push(<td>{value1}</td>)
	 children.push(<td>{value2}</td>)



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

  
    var data3 = {'id':this.props.match.params.id  };
	
 		(async () => {
		  const rawResponse = await fetch('http://localhost:3000/auditquery', {
		    method: 'POST',
		    headers: {
		      'Accept': 'application/json',
		      'Content-Type': 'application/json'
		    },
		    body: (JSON.stringify(data3))
	  });
		  const content = await rawResponse.json();
			this.setState({ asset1: content });
		  console.log(content);
		})()
  }


  render() {
 
    return (
      <div class="container">

        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Audit History
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
	


	  </div>        	    </div>


            );
          }
        }

export default AuditAsset;


