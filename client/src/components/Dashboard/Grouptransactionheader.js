import React from "react";
import { connect } from "react-redux";
import "../../styles/Dashboard.css";
import {Link} from 'react-router-dom';
import { serverIp, serverPort } from '../config';
import axios from 'axios';
import {
  Card, Modal, Image,
} from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AddExpense from './popups/AddExpense';

 class Grouptransactionheader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            exp : 0,
            registeredStudents: [],
            showExp :false
        };

        
        this.Leavegroup = this.Leavegroup.bind(this);
       this.showExpense = this.showExpense.bind(this);
      }
    

      showExpense(e){
        console.log("in showexp group function");
        this.setState({...this.state,showExp: !this.state.showExp});
        console.log(this.state.showExp);
    }  

   Leavegroup(e)
   {
  e.preventDefault();
  console.log("in leave group function");
  const data= {
    groupname : this.props.match.params.groupname.slice(1),
     email :localStorage.getItem('email_current')
  }
  axios.post(`${serverIp}:${serverPort}/leavgroup`, data)
  // axios.post(`${serverIp}:${serverPort}/gettransactionsdata`)
     .then((response) => {
       console.log('Response data in componentDidMount');
       console.log(response.data);
       if (response.data === 'Clear you dues') {
        window.alert('Clear you dues');
      }
       
   
     }).catch((err) => {
       console.log(`Error in componentDidMount of fetchdata: ${err}`);
       window.alert('Error in connecting to server');
     });
   }

render(){
    console.log(this.props.match.params.groupname);
        var res = this.props.match.params.groupname.slice(1);
       
         
   return (
    <nav className = "DashboardNav ">
     {/* {calculate(props)} */}
      <div>
      
        <div className="DashHeader">
          <h3>Dashboard</h3>
         
          
          {/* <button className = "logoutbtn">
            Add an expense
          </button> */}
       <button onClick={this.Leavegroup} className = "logoutbtn">  Leave</button>
         
       <button  onClick={this.showExpense}>
            Add an expense
          </button>
{/* <AddExpense groupname = {res} friend = {this.showExpense.bind(this)}/>} */}
          {this.state.showExp && <AddExpense groupname = {res} friend = {this.showExpense.bind(this)}/>}
        </div>

       </div>
     
    </nav>
    


  );
   }
   
}
    
 export default Grouptransactionheader;
 

 