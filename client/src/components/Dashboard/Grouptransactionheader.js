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
import AddExpense from '../../components/Dashboard/popups/addExpense';

 class Grouptransactionheader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            exp : 0,
            registeredStudents: [],
            
        };

        this.state = {showExp:true}
        this.Leavegroup = this.Leavegroup.bind(this);
       
      }
    

      showExpense(){
        this.setState({...this.state,showExp: !this.state.showExp});
        console.log(this.state.showExp);
    }  

   Leavegroup(e)
   {
  e.preventDefault();
  const data= {
    groupname : this.props.match.params.groupname.slice(1),
     email :localStorage.getItem('email_current')
  }
  axios.post(`${serverIp}:${serverPort}/leavgroup`, data)
  // axios.post(`${serverIp}:${serverPort}/gettransactionsdata`)
     .then((response) => {
       console.log('Response data in componentDidMount');
       console.log(response.data);
       
       this.setState({
         registeredStudents: response.data,
       });
      // console.log(this.state.registeredStudents);
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
         
          
          <button className = "logoutbtn">
            Add an expense
          </button>
       <button onClick={this.Leavegroup} className = "logoutbtn">  Leave</button>
         
          
          
          {this.state.showExp && <AddExpense groupname = {res} friend = {this.showExpense.bind(this)}/>}
        </div>

       </div>
     
    </nav>
    


  );
   }
   
}
    
 export default Grouptransactionheader;
 

 