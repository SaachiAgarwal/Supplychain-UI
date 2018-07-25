import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Audit.css';
import img from './arrow.png';  
class AuditAsset extends React.Component {


listKeys (){

    var keyValue = {};

    var temp = [];

    var value;

    var keyPer;

        {this.state.asset1.map(items => {                               

                  {Object.keys(items).map((key) => {                      

                      if( !(items[key] instanceof Object)){

                        keyValue = {};

                      

                        value = items[key];

                        keyPer = key;

                       keyValue = {keyPer,value};

                        temp.push(keyValue);

                      } 

                      if(items[key] instanceof Object){

                      

                                {Object.keys(items[key]).map((key1) => {

                                    //console.log(key1, items[key][key1]);

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
   
    let table = [];
   
   
    // Outer loop to create parent

    for (let i = 0; i < this.state.asset1.length; i++) {

      let children = []
 var value = this.state.asset1[i]['keyPer']; 
    
   while ( value != 'docType' ){
 
  var value1 = this.state.asset1[i]['keyPer'];
        var value2 = this.state.asset1[i]['value'];
        if(value1=='txId'){
         children.push(<td></td>)
         children.push(<td><img src={img} alt="" border='3' height='40' width='40' /></td>)          
        }
          children.push(<tr></tr>)
    children.push(<td>{value1}:</td>)
  children.push(<td>{value2}</td>)
        
  i++;

       value1 = this.state.asset1[i]['keyPer'];

  if ( value1 == 'docType' ){

  var value1 = this.state.asset1[i]['keyPer']; 

        var value2 = this.state.asset1[i]['value'];
    children.push (<tr> </tr>)
    children.push(<td>{value1}:</td>)
    children.push(<td>{value2}</td>)
 
table.push(<td>{children}</td>)
}

value = this.state.asset1[i]['keyPer']; 

}

     


    }
   // console.log(table);
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
      const rawResponse = await fetch('http://192.168.22.96:3000/auditquery', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: (JSON.stringify(data3))
    });
      const content = await rawResponse.json();
      this.setState({ asset1: content });
    //  console.log(content);
    })()
  }


  render() {
 
    return (
      
<div>
        
            <h3 >
              Audit History
            </h3>
         

    
<table class="table table-stripe"> 
<tbody>
    {this.listKeys()}
    {this.createTable()}
    </tbody>
    </table>
      
      

  </div>      


            );
          }
        }

export default AuditAsset;
