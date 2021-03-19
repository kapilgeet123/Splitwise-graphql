import React from 'react';
//import { Login } from '../components/login';
import axios from 'axios';
import { serverIp, serverPort } from '../components/config';
import {instance} from '../utils/AxiosConfig';
import { withRouter } from "react-router-dom";
import { Header } from '../components/Header';
import setAuthorizationToken from "../utils/AxiosConfig";
 class Login_smart extends React.Component{
    constructor(props){       
            super(props);
            this.state = {
              emailId: '',
              password: '',
              username: '',             
            };
    this.onChangePasswordHandler = this.onChangePasswordHandler.bind(this);
      this.onChangeEmailHandler = this.onChangeEmailHandler.bind(this);
      this.onLoginSubmit = this.onLoginSubmit.bind(this);
    
    }
    onChangePasswordHandler(e) {
        this.setState({
          password: e.target.value,
        });
      }
      onChangeEmailHandler(e) {
        this.setState({
          emailId: e.target.value,
        });
      }

      onLoginSubmit(e) {
        e.preventDefault();
       const data = {
            emailId: this.state.emailId.toLowerCase(),
            password: this.state.password,          
          };
          axios.defaults.withCredentials = true;
          axios.post(`${serverIp}:${serverPort}/login`, data)
            .then((response) => {
              console.log('Login Response Data');
              console.log(response.data);
              if (response.data === 'User Not Present') {
                window.alert('Given username not present.');
              } else if (response.data === 'Wrong Password') {
                window.alert('Wrong Password given');
              } else if (response.data === 'Error') {
                window.alert('Error in Connecting to Database');
              } else {
                localStorage.setItem('username', response.data.username);
                localStorage.setItem('email_current', response.data.emailId);
                localStorage.setItem('password', response.data.password);
                localStorage.setItem('timezone', response.data.timezone);
                localStorage.setItem('contact_phone', response.data.phonenumber);
                localStorage.setItem('currency', response.data.currency);
                localStorage.setItem('language', response.data.language);
                localStorage.setItem('profilepicture', response.data.profilepicture);
                window.location.href = '/Dashboard';
             }
            }).catch((err) => {
              console.log(`In catch of axios post call to login api ${err}`);
              window.alert('Error in Login API axios Post call');
            });
        }
      
    
    render(){
        return(
            <div>
            <Header/>
        <div className = "container signup">
      
        <div className = "signup-logo">
      <img  src={require("../images/logo.png")} alt="" />
      </div>
    
    
      <div className = "signup-form">
        <h3>WELCOME TO SPLITWISE</h3>
        <form onSubmit={this.onLoginSubmit}>
        <label htmlFor="">Email address</label>
        <input id = "email" onChange = {this.onChangeEmailHandler} className = "form-control" type="text"/>
    
        <label htmlFor="">Password</label>
        <input id = "password" onChange = {this.onChangePasswordHandler} className = "form-control" type="text"/>     
       <button type="submit" className = "btn">Log In</button>
       </form>
     </div>
     </div>
     </div>
        );
    }
}

export default withRouter(Login_smart);


