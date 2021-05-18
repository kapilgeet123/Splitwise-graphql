import React from 'react';
import '../styles/viewprofile.css';
import DashHeader from './DashHeader';
import { withRouter } from "react-router-dom";
import axios from 'axios';
import { serverIp, serverPort } from '../components/config';
import {
  Col, Button, FormGroup, Label, Input, FormText,Form
} from 'reactstrap';
import { Mutation } from 'react-apollo';
import { editviewprofile } from '../mutations/signup';
import SweetAlert from 'react-bootstrap-sweetalert';
class VProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userdata: [],
     
      email : localStorage.getItem('email_current'),
     username : localStorage.getItem('username'),
     contactphone : localStorage.getItem('contactphone'),
     password : localStorage.getItem("password"),
    currency : localStorage.getItem("currency"),
    timezone :localStorage.getItem("timezone"),
   language : localStorage.getItem("language"),
   profile_picture_url: localStorage.getItem('profile_picture_url'),
   selectedFile: null,  
    };
    this.editProfileHandlerSubmit = this.editProfileHandlerSubmit.bind(this);
    this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
    this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
    this.contactEmailChangeHandler = this.contactEmailChangeHandler.bind(this);   
    this.languageChangeHandler = this.languageChangeHandler.bind(this);
    this.currencyChangeHandler = this.currencyChangeHandler.bind(this);
    this.timezoneChangeHandler = this.timezoneChangeHandler.bind(this);
    this.contactPhoneChangeHandler = this.contactPhoneChangeHandler.bind(this);
    this.profileFileUploadHandler = this.profileFileUploadHandler.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
  }
  usernameChangeHandler(e) {
    console.log("Inside username");
    console.log(e.target.value);
   
    this.setState( {  
      username: e.target.value
    } );
     console.log(this.state.username);
  } 
 
  contactPhoneChangeHandler(e) {
    this.setState( {   
      contactphone:e.target.value
    } );
   
  } 
  passwordChangeHandler(e) {
    this.setState({
    
      password: e.target.value
    } );
 
  } 
  contactEmailChangeHandler(e) {
    this.setState( {
     
      email: e.target.value
    } );
   
  } 
  languageChangeHandler(e) {
    this.setState( {
      
      language: e.target.value
    } );
   
  } 
  currencyChangeHandler(e) {
    this.setState( {
    
     currency: e.target.value
    } );
   
  } 
  timezoneChangeHandler(e) {
    this.setState( {
     
     timezone: e.target.value
    } );
   
  } 
  
  profileFileUploadHandler(e) {
    this.setState({
      selectedFile: e.target.files[0],
    }, () => {
      console.log(this.state.selectedFile);
    });
  }


  defaultcurrency(currency)
  {
    console.log("indside default cuurecy")
    let Data     = ["USD", "KWD", "BHD", "GBP", "EUR", "CAD"];
    var index = Data.indexOf(currency);
    console.log(currency);
    console.log(index);
    if (index > -1) {
       Data.splice(index, 1);
}
    console.log(Data);
  
return Data;
    };
  

    defaultlanguage(language)
  {
    console.log("indside default language")
    let Data     = ["Deutsch", "Español", "Français", "Bahasa Indonesia", "Italiano", "Nederlands"];
    var index = Data.indexOf(language);
    
    console.log(index);
    if (index > -1) {
       Data.splice(index, 1);
}
    console.log(Data);
  
return Data;
    };


    defaulttimezone(timezone)
  {
    console.log("indside default timezone")
    let Data     = ["(GMT-11:00) American Samoa", "(GMT-11:00) Midway Island", "(GMT-10:00) Hawaii", "(GMT-09:00) Alaska", "(GMT-08:00) Tijuana", "(GMT-07:00) Arizona"];
    var index = Data.indexOf(timezone);
  
    console.log(index);
    if (index > -1) {
       Data.splice(index, 1);
}
    console.log(Data);
  
return Data;
    };


  editProfileHandlerSubmit(data) {
 
  //e.preventDefault();
  // const fd = new FormData();
  // const config = { headers: { 'Content-Type': 'multipart/form-data' } };

//  console.log(this.state.language);
//   const data=
//   {
//     emailId : localStorage.getItem('email_current'),
//     username :this.state.username,
//     password :this.state.password,
//     email :this.state.email,
//     language: this.state.language,
//     currency:this.state.currency,
//     timezone:this.state.timezone,
//     file : this.state.selectedFile.name,
//     contactphone :this.state.contactphone,
//   }
//   console.log(data);
  // fd.append('username', this.state.username);
  // fd.append('password', this.state.password);
  // fd.append('contactEmail', this.state.contactEmail);
  // fd.append('language', this.state.language);
  // fd.append('currency', this.state.currency);
  // fd.append('timezone', this.state.timezone);
  // fd.append('file', this.state.selectedFile);
  // console.log(fd.username);
  // console.log(fd);
  // console.log(this.state.username);
  
  // axios.post(`${serverIp}:${serverPort}/updateeditvalues`,data)
  // // axios.post(`${serverIp}:${serverPort}/gettransactionsdata`)
  //    .then((response) => {
  //     console.log('UpdateUserProfile Response Data');
  //     console.log(response.data);
  //     if (response.data === 'Error') {
  //       window.alert('Error in Connecting to Database while updating company details');
  //     } else {
  //       window.alert('Profile Updated Successfully');
  //       axios.post(`${serverIp}:${serverPort}/getUserData`, { emailId: this.state.email  })
  //         .then((resp) => {
  //           console.log("Inside resposnse");
  //           console.log(resp.data);
  //           // if (resp === 'Error') {
  //           //   window.alert('Error in Connecting to Database while getting Company Details');
  //           // } else {
  //             console.log(resp.data);
  //             localStorage.setItem('username', resp.data.username);
  //             localStorage.setItem('password', resp.data.password);
  //             localStorage.setItem('contactEmail', resp.data.contactEmail);
  //             localStorage.setItem('language', resp.data.language);
  //             localStorage.setItem('currency', resp.data.timezone);
  //             localStorage.setItem('profile_picture_url', resp.data.profilepicture_url);
  //             localStorage.setItem('timezone', resp.data.timezone);
  //             localStorage.setItem('description', resp.data.description);
  //             // window.location.href = '/UserProfile';
  //           // }
  //         }).catch((error) => {
  //           console.log(`In catch of axios post call to getCompanyDetails  api ${error}`);
  //           window.alert('Error in Profile component of Company while Getting company Details axios Post call');
  //         });
  //     }
  //   }).catch((err) => {
  //     console.log(`In catch of axios post call to updateCompanyProfile  api ${err}`);
  //     window.alert('Error in Profile component of Company axios Post call');
  //   });

  const { cookie1, cookie2, cookie3, status, message,password,timezone,contact_phone,currency } =
  data.editviewprofile;
localStorage.clear();
localStorage.setItem("cookie1", cookie1);
localStorage.setItem("email_current", cookie2);
localStorage.setItem("username", cookie3);
localStorage.setItem("password", password);
localStorage.setItem("timezone", timezone);
localStorage.setItem("contact_phone", contact_phone);
localStorage.setItem("currency", currency);
//localStorage.setItem("language", language;

if (status === 200) {
  const getAlert = () => (
    <SweetAlert
      success
      title="Success!!"
      onConfirm={() => (window.location = "/Dashboard")}
    >
      User profile updated!
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


     handleValidation(error){
      
      error.graphQLErrors.map( errorMessage => {
          console.log(errorMessage.message)
          this.setState({
              message:  errorMessage.message
          })
      })
 }
     
  // componentDidMount() {
    
  //  return(

    
   
  //   console.log("in componenetdid mount")
  //   axios.post(`${serverIp}:${serverPort}/getUserData`, { emailID: localStorage.getItem('emailId') })
  //     .then((response) => {
  //       //username,phone number,currency,time zone,language
  //       console.log(response.data);
  //       this.setState({
  //         userdata: response.data,
  //       });
  //     }).catch((err) => {
  //       console.log(`In catch of axios post call to updateuserdata  api ${err}`);
  //       window.alert('Error in viewprofile component axios Post call');
  //     });
  // }

  render(){  
  const array =  this.defaultcurrency(this.currency);
  const array1 =  this.defaultlanguage(this.language);
  const array2 = this.defaulttimezone(this.timezone);
 console.log(array);
 if (!localStorage.getItem('email_current')) {
  window.localStorage.clear();
  window.sessionStorage.clear();
  window.location.href = '/login';
}
 console.log(this.props.event);
 const values = [];
 //{colour} = this.props.match.params;
//  this.props.event.map((eachEvent) => {
//     values.push({eachEvent});
//  }); 
 console.log(values);
   return(
    <div>
     <div>
       <DashHeader/>
       <h1>Your Account</h1>
       {/* <Form onSubmit={this.editProfileHandlerSubmit}> */}
       <FormGroup row>
              <Label for="profilePicture" sm={2}>Profile Picture</Label>
              <Col sm={10}>
                <Input type="file" name="profilePicture" id="profilePicture" accept="image/*" onChange={this.profileFileUploadHandler} required />
                <FormText color="muted">
                  Upload new Profile Picture. Leave it to keep the previous one.
                </FormText>
              </Col>
            </FormGroup>
       
            <FormGroup row>
              <Label for="username" sm={2}>Your Name</Label>
              <Col sm={6}>
                <Input type="text" name="username" id="username" value={this.state.username} onChange={this.usernameChangeHandler} required />
              </Col>
            </FormGroup>
            <br/>
            <FormGroup row>
              <Label for="contactEmail" sm={2}>Contact Email</Label>
              <Col sm={3}>
                <Input type="email" name="email" id="email" value={this.state.email} onChange={this.contactEmailChangeHandler} required />
              </Col>
              <Label for="contactPhone" sm={2}>Contact Phone</Label>
              <Col sm={3}>
                <Input type="number" name="contactphone" id="contactphone" value={this.state.contactphone} onChange={this.contactPhoneChangeHandler} required />
              </Col>
            </FormGroup>
            <br/>
            <FormGroup row>
              <Label for="city" sm={1}>Password</Label>
              <Col sm={2}>
                <Input type="text" name="password" id="password" value={this.state.password} onChange={this.passwordChangeHandler} required />
              </Col>
              <Label for="currency" sm={1}>Currency</Label>
              <Col sm={2}>
                <Input type="select" name="currency" id="currency" value={this.state.currnecy} onChange={this.currencyChangeHandler} required >
                {array.map((text) => (
                <option value={text}>
                    {text}
                </option>
            ))}


                </Input>
              </Col>
              <Label for="langauge" sm={1}>Language</Label>
              <Col sm={4}>
                <Input type="select" name="language" id="language" value={this.state.language} onChange={this.languageChangeHandler} required >
                {array1.map((text) => (
                <option value={text}>
                    {text}
                </option>
            ))}

                  </Input>
              </Col>
            </FormGroup>
           <br/>
          
           <FormGroup row>
              <Label for="exampleText" sm={2}>TimeZone</Label>
              <Col sm={7}>
                <Input selected="selected" type="select" name="timezone" id="timezone"  onChange={this.timezoneChangeHandler} value={this.state.timezone} required >
                {array2.map((text) => (
                <option value={text}>
                    {text}
                </option>
            ))}
                </Input>
              </Col>
            </FormGroup>
            {/* <FormGroup check row>
              <Col sm={{ size: 4, offset: 5 }}>
                <Button style={{ width: 150, height: 50 }}>Update</Button>
              </Col>
            </FormGroup> */}
            <div className="form-group" style ={{marginLeft : "50px", marginTop : "40px"}}>
                                        <Mutation
                                            mutation={editviewprofile}
                                            variables={{ 
                                              // propertyid: this.state.propertyid,
                                              //   bookedBy: sessionStorage.getItem('cookie2'),
                                              //   bookedFrom : this.state.bookingFromDate,
                                              //   bookedTo : this.state.bookingToDate,
                                              //   NoOfGuests : this.state.guests,
                                              //   pricePaid : price
                                              //emailId : "geetika.kapil@sjsu.edu",
                                              emailId : localStorage.getItem('email_current'),
                                              username :this.state.username,
                                              password :this.state.password,
                                              email :this.state.email,
                                              language: this.state.language,
                                              currency:this.state.currency,
                                              timezone:this.state.timezone,
                                              
                                              contactphone :this.state.contactphone,
                                            }}

                                            //onError={ error => this.handleValidation(error) }
                                            onCompleted= { data => {this.editProfileHandlerSubmit(data) }}
                                        >
                                            {mutation => (
                                                <button className="btn btn-primary" onClick = {mutation} style = {{ height: "60px", borderColor: "#ffffff", backgroundColor:"#0067db", width: "200px", borderRadius: 25}} data-effect="ripple" type="button" tabIndex="5" data-loading-animation="true">
                                                    Update
                                                </button>
                                            )}
                                        </Mutation>
                                        {this.state.alert}
                                    </div>
           {/* </Form>  */}
            </div>

    </div>
   );
  }
}
  export default VProfile;    
      
  

    
              

    
      






