import React from "react";
import "../styles/signup.css";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { serverIp, serverPort } from "../components/config";
import { usersignupmutation } from '../mutations/signup';
import SweetAlert from 'react-bootstrap-sweetalert';
import { Mutation } from 'react-apollo';
var obj = {};
class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "", // name corresponds to student name for student role and company name for company role
      emailId: "",
      password: "",
      alert: null,
      message: "",
    };

    this.onChangeUserNameHandler = this.onChangeUserNameHandler.bind(this);
    this.onChangePasswordHandler = this.onChangePasswordHandler.bind(this);
    this.onChangeEmailHandler = this.onChangeEmailHandler.bind(this);
    this.onSignUpSubmit = this.onSignUpSubmit.bind(this);
  }
  // both company name and student name change will call this handler

  onChangeUserNameHandler(e) {
    this.setState({
      username: e.target.value,
    });
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
  onSignUpSubmit(data1) {
   //e.preventDefault();
   console.log("inside onsignupsubmit")
    const data = {
      emailId: this.state.emailId.toLowerCase(),
      password: this.state.password,
      username: this.state.username,
    };

    // axios.defaults.withCredentials = true;
    // axios.post(`${serverIp}:${serverPort}/signup`, data)
    //   .then((response) => {
    //     console.log('SignUp Response Data');
    //     console.log(response.data);
    //     if (response.data === 'Exists') {
    //       window.alert('User already exists in the database. Try another username');
    //     } else if (response.data === 'Error') {
    //       window.alert('Error while querying the Database');
    //     } else {
    //       window.alert('Successfully Registered');
    //       localStorage.setItem('username', response.data.username);
    //             localStorage.setItem('email_current', response.data.emailId);
    //             localStorage.setItem('password', response.data.password);
    //             localStorage.setItem('timezone', response.data.timezone);
    //             localStorage.setItem('contact_phone', response.data.phonenumber);
    //             localStorage.setItem('currency', response.data.currency);
    //             localStorage.setItem('language', response.data.language);
    //             localStorage.setItem('profilepicture', response.data.profilepicture);

    //     window.location.href = '/Dashboard';
    //   }
    // }).catch((err) => {
    //   console.log(`In catch of axios post call to signup api ${err}`);
    //   window.alert('Error in SignUp API axios Post call');
    // });

   // if (this.handleValidation()) {
      const { cookie1, cookie2, cookie3, status, message,password } =
        data1.usersignup;
      sessionStorage.clear();
      sessionStorage.setItem("cookie1", cookie1);
      sessionStorage.setItem("email_current", cookie2);
      sessionStorage.setItem("username", cookie3);
      sessionStorage.setItem("password", password);
      if (status === 200) {
        const getAlert = () => (
          <SweetAlert
            success
            title="Success!!"
            onConfirm={() => (window.location = "/Dashboard")}
          >
            User profile created!
          </SweetAlert>
        );

        this.setState({
          alert: getAlert(),
        });
      } else {
        this.setState({
          submitted: true,
          message: message,
        });
      }
   // }
  }

  render() {
    return (
      <div className="container signup">
        <div className="signup-logo">
          <img src={require("../images/logo.png")} alt="" />
        </div>

        <div className="signup-form">
          <h3>INTRODUCE YOURSELF</h3>
          <label htmlFor="">Hi there! My name is</label>
          {/* <form onSubmit={this.onSignUpSubmit}> */}
            <input
              id="username"
              onChange={this.onChangeUserNameHandler}
              className="form-control"
              type="text"
              required
            />

            <label htmlFor="">Here’s my email address: </label>

            <input
              id="email"
              onChange={this.onChangeEmailHandler}
              className="form-control"
              type="text"
              required
            />

            <label htmlFor="">And here’s my password: </label>

            <input
              id="password"
              onChange={this.onChangePasswordHandler}
              className="form-control"
              type="text"
              required
            />
           
            <div>
              <Mutation
                mutation={usersignupmutation}
                variables={{
                  username: this.state.username,
                  emailId: this.state.emailId.toLowerCase(),
                  password: this.state.password,
                 //username : "jdshfjd",
                  //emailId :"uaysdaudyausd@gmail.com",
                 

                }}
                onCompleted={(data1) => this.onSignUpSubmit(data1)}
              >
                {(mutation) => (
                  <button
                    onClick={mutation}
                    className="btn btn-warning"
                    style={{ width: "100%" }}
                  >
                    Sign me Up
                  </button>
                )}
              </Mutation>
              {this.state.alert}
            </div>
          {/* </form> */}
        </div>
      </div>
    );
  }
}
export default SignUp;
