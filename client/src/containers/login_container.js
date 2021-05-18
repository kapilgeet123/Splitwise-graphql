import React from "react";
//import { Login } from '../components/login';
import axios from "axios";
import { serverIp, serverPort } from "../components/config";
import { instance } from "../utils/AxiosConfig";
import { withRouter } from "react-router-dom";
import { Header } from "../components/Header";
import setAuthorizationToken from "../utils/AxiosConfig";
import SweetAlert from 'react-bootstrap-sweetalert';
import { Mutation } from "react-apollo";
import { userloginmutation } from "../mutations/signup";
class Login_smart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailId: "",
      password: "",
      username: "",
      alert: null,
      message: "",
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

  onLoginSubmit(data) { 
    console.log("Inside login module");
    //   e.preventDefault();
    //  const data = {
    //       emailId: this.state.emailId.toLowerCase(),
    //       password: this.state.password,
    //     };
    //     axios.defaults.withCredentials = true;
    //     axios.post(`${serverIp}:${serverPort}/login`, data)
    //       .then((response) => {
    //         console.log('Login Response Data');
    //         console.log(response.data);
    //         if (response.data === 'User Not Present') {
    //           window.alert('Given username not present.');
    //         } else if (response.data === 'Wrong Password') {
    //           window.alert('Wrong Password given');
    //         } else if (response.data === 'Error') {
    //           window.alert('Error in Connecting to Database');
    //         } else {
    //           localStorage.setItem('username', response.data.username);
    //           localStorage.setItem('email_current', response.data.emailId);
    //           localStorage.setItem('password', response.data.password);
    //           localStorage.setItem('timezone', response.data.timezone);
    //           localStorage.setItem('contact_phone', response.data.phonenumber);
    //           localStorage.setItem('currency', response.data.currency);
    //           localStorage.setItem('language', response.data.language);
    //           localStorage.setItem('profilepicture', response.data.profilepicture);
    //           window.location.href = '/Dashboard';
    //        }
    //       }).catch((err) => {
    //         console.log(`In catch of axios post call to login api ${err}`);
    //         window.alert('Error in Login API axios Post call');
    //       });

    const { cookie1, cookie2, cookie3, message,password,timezone,contact_phone,currency,language,profilepicture,status} = data.userlogin;
    localStorage.clear();
    localStorage.setItem("cookie1", cookie1);
    localStorage.setItem("email_current", cookie2);
    localStorage.setItem("username", cookie3);
    localStorage.setItem("password", password);
    localStorage.setItem("timezone", timezone);
    localStorage.setItem("contact_phone", contact_phone);
    localStorage.setItem("currency", currency);
    localStorage.setItem("language", language);
    localStorage.setItem("profilepicture", profilepicture);
    if (status === 200) {
      console.log("status is 200")
      const getAlert = () => (
        <SweetAlert
          success
          title="Success!!"
          onConfirm={() => (window.location = "/Dashboard")}
        >
           Login successfully
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
    
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container signup">
          <div className="signup-logo">
            <img src={require("../images/logo.png")} alt="" />
          </div>

          <div className="signup-form">
            <h3>WELCOME TO SPLITWISE</h3>
            {/* <form onSubmit={this.onLoginSubmit}> */}
            <label htmlFor="">Email address</label>
            <input
              id="email"
              onChange={this.onChangeEmailHandler}
              className="form-control"
              type="text"
            />

            <label htmlFor="">Password</label>
            <input
              id="password"
              onChange={this.onChangePasswordHandler}
              className="form-control"
              type="text"
            />
            {/* <button type="submit" className="btn">
              Log In
            </button> */}
            <div>
              <Mutation
                mutation={userloginmutation}
                variables={{ emailId: this.state.emailId, password: this.state.password }}
                // variables={{ emailId: "joker@gmail.com", password: "123"}}
                onCompleted={(data) => this.onLoginSubmit(data)}
              >
                {(mutation) => (
                  <button
                    onClick={mutation}
                    className="btn"
                   
                  >
                    Log In
                  </button>
                )}
              </Mutation>
              {this.state.alert}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login_smart);
