import React from "react";
import { connect } from "react-redux";
import "../../styles/Dashboard.css";
var exp = 0;
var owe = [];
var owed = [];
function calculate(props){
   exp = 0;
   owe = [];
   owed = [];
   if(props.user.expensis){
     console.log("****************************m kitni barri hu *********************************");
   props.user.expensis.forEach(element => {
if(element.data){
  exp += parseInt(element.data.ammount);
  //someone has to give you 
      if(element.data.ammount>0){
        
        console.log("element.data.ammount>0")
        owed.push(element);
        console.log(owed);
      }//u need to give
      else if(element.data.ammount<0){
        console.log("element.data.ammount<0");
        // element.data.ammount = -(element.data.ammount);
        owe.push(element);
        // owe[owe.length].data.ammount = -( owe[owe.length].data.ammount );
        console.log(owe);
      }
    }
   });
  }
  // return exp;
}

 const Middle = props => {
  return (
    <div className="Middle">
      {calculate(props)}
      
      <div className="MidDash">
        <div className="DashHeader">
          <h3>Dashboard</h3>
         
          
          <button className="btn float-right expense" onClick={props.friend}>
            Add an expense
          </button>
          <button className="btn float-right settle" onClick={props.settle}>
            Leave
          </button>
          <button className="btn float-right settle" onClick={props.settle}>
            Group profile
          </button>
          
        </div>

       

     
           
            
         
  );
};

