import React from 'react';
import '../styles/viewprofile.css';
import DashHeader from './DashHeader';
import { withRouter } from "react-router-dom";
import axios from 'axios';
import { serverIp, serverPort } from '../components/config';


class VProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userdata: [],
     disabled: true,
      
    };
 
  }
  handleEditusername() {
    this.setState( {disabled: !this.state.disabled} )

  } 
 
  handleEditphone() {
    this.setState( {disabled: !this.state.disabled} )

  } 
  handleEditpassword() {
    this.setState( {disabled: !this.state.disabled} )

  } 
  handleEditemail() {
    this.setState( {disabled: !this.state.disabled} )

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

  render()
  {
   const email = localStorage.getItem('email_current');
   const   username = localStorage.getItem('username');
    const contact_phone = localStorage.getItem('contact_phone');
   const  password = localStorage.getItem("password");
   const currency = localStorage.getItem("currency")
  const   timezone =localStorage.getItem("timezone");
   const  language = localStorage.getItem("language");
    
  const array =  this.defaultcurrency(currency);
  const array1 =  this.defaultlanguage(language);
  const array2 = this.defaulttimezone(timezone);
 console.log(array);

 console.log(this.props.event);
 const values = [];
 //{colour} = this.props.match.params;
//  this.props.event.map((eachEvent) => {
//     values.push({eachEvent});
//  }); 
 console.log(values);
   return(
    
     <div>
       <h1>Your Account</h1>
       <div class="imageholder">
<img className = "profile" src={require('../images/logo.png')} alt="" srcset=""class="image"/>

    <div class="avatar">
          Change your avatar       
        <input id="user_avatar" name="user[avatar]"  size="10" type="file"/>
        </div>
    </div>
    
<div class="clearfix">
  <label for="user_name">Your name</label>
  <div class="input static name">
  <input
               value= {(this.state.disabled)? username : ""}
                  type="text"
                  
                  id = "username1"
                  disabled = {(this.state.disabled)? "disabled" : ""}
                  class="name"
                required/>
    <button onClick ={this.handleEditusername.bind(this)}>Edit</button>
    {/* <strong id="username">{username} </strong>   */}
    
    
  </div>
  <div class="input dynamic name">
    <input autocomplete="off" type="text" value="GEETIKA KAPIL" name="user[name]" id="user_name"/>
  </div>
</div>
<div class="clearfix">
  <label for="user_email">Your email address</label>
  <div class="input static email">
  <input
               value= {(this.state.disabled)? email  : ""}
                  type="email"
                  
                  id = "email1"
                  disabled = {(this.state.disabled)? "disabled" : ""}
                  class="email"
                required/>
   
    
   <button onClick ={this.handleEditemail.bind(this)}>Edit</button>
    
  </div>
</div>
<div class="identities"></div>
     
  <div class="clearfix">
    <label for="user_phone">Your phone number</label>
    <div class="input static phone">
    <input
               value= {(this.state.disabled)? contact_phone  : ""}
                  type="phone"
                  
                  id = "phone"
                  disabled = {(this.state.disabled)? "disabled" : ""}
                  class="contactphone"
                required/>
    
    <button onClick ={this.handleEditphone.bind(this)}>Edit</button>
       
      
    </div>
    <div class="input dynamic phone">

      <div>
      <input autocomplete="off" type="tel" name="user[phone]" id="user_phone"/>
      
    </div>
  </div>

  <div class="clearfix password-change-link">
    <label for="user_password">Your password</label>
    <div class="input">
    <input
               value= {(this.state.disabled)? password  : ""}
                  type="password"
                  
                  id = "password"
                  disabled = {(this.state.disabled)? "disabled" : ""}
                  class="password"
                required/>
     
  
    <button onClick ={this.handleEditpassword.bind(this)}>Edit</button>
    </div>
  </div>
</div>

<div class="span3 columns">

  <div class="clearfix">
    <label for="user_default_currency">Your default currency</label>
    
    <div class="input">
  <select class="modernized" name="user[default_currency]" id="user_default_currency">
    <option> {currency} </option>
  {array.map((text) => (
                <option value={text}>
                    {text}
                </option>
            ))}
</select>
  </div>
  </div>

</div>





<div>

   <div class="clearfix">
    <label for="user_locale">Language</label>
     <div class="input">
      <select class="modernized" name="user[locale]" id="user_locale">
        <option selected="selected" value="en">{language}  </option>
        {array1.map((text) => (
                <option value={text}>
                    {text}
                </option>
            ))}

      
       </select>


    </div>
   </div>
   </div>
  
     <div class="clearfix">
     <label for="user_time_zone">Your time zone</label>
     <div class="input">
       <select class="modernized" name="user[time_zone]" id="user_time_zone">
  <option selected="selected" >{timezone}</option>
  {array2.map((text) => (
                <option value={text}>
                    {text}
                </option>
            ))}
 
</select>
</div>
</div>





    

    <div class="row">
      <div class="offset9 span3 columns" >&nbsp;
        <input type="submit" name="commit" value="Save"  class="btn btn-large btn-orange"  data-disable-with="Save"/>
       </div>
     </div>

    

    

    

  

          

    
          
    

       
    
      
    
    ]
     
</div>
    
  

    
              

    
      



   );
  }

}

 export default VProfile;