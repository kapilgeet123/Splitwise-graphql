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
    };
  }


  // componentDidMount() {
  //   console.log("in componenetdid mount")
  //   axios.post(`${serverIp}:${serverPort}/updateUserData`, { emailId: localStorage.getItem('emailId') })
  //     .then((response) => {
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
    <strong>GEETIKA KAPIL</strong>   
      <i class="icon-pencil"></i> Edit
    
  </div>
  <div class="input dynamic name">
    <input autocomplete="off" type="text" value="GEETIKA KAPIL" name="user[name]" id="user_name"/>
  </div>
</div>
<div class="clearfix">
  <label for="user_email">Your email address</label>
  <div class="input static email">
    <strong>geetikakapil123@gmail.com</strong>
   
    
      <i class="icon-pencil"></i> Edit
    
  </div>
</div>
<div class="identities"></div>
 <div class="identities-container">
 <table class="identities-list">
  
     <tbody><tr class="identity confirmed primary ">
      
        
        <td class="primary-radio">
          <input type="radio" id="identity71078072" value="geetikakapil123@gmail.com" name="primary" checked="true'"/>
       </td>
        <td class="identity-email">
          <label class="identity-title" for="identity71078072">
             geetikakapil123@gmail.com
         </label>

            <span class="label label-success">Primary</span>
          
        </td>

         <td class="actions">
          
        </td>
      
     </tr>

     <tr class="add-identity">
      <td colspan="3">
        
       </td>
     </tr>
  
 </tbody></table>
</div>       
  <div class="clearfix">
    <label for="user_phone">Your phone number</label>
    <div class="input static phone">
      <strong>None</strong>
    
     
        <i class="icon-pencil"></i> Edit
      
    </div>
    <div class="input dynamic phone">
      <select name="user[phone_region]" id="user_phone_region" data-convert="no"><option value="AF">🇦🇫 Afghanistan +93</option>
<option value="AL">🇦🇱 Albania +355</option>
<option value="DZ">🇩🇿 Algeria +213</option>
<option value="AS">🇦🇸 American Samoa +1</option>
<option value="AD">🇦🇩 Andorra +376</option>
<option value="AO">🇦🇴 Angola +244</option>
<option value="AI">🇦🇮 Anguilla +1</option>
</select>
      <div>
      <input autocomplete="off" type="tel" name="user[phone]" id="user_phone"/>
      
    </div>
  </div>

  <div class="clearfix password-change-link">
    <label for="user_password">Your password</label>
    <div class="input">
   
     
  
        <i class="icon-pencil"></i> Edit
    </div>
  </div>
</div>

<div class="span3 columns">

  <div class="clearfix">
    <label for="user_default_currency">Your default currency</label>
    <div class="newexpense">(for new expenses)</div>
    <div class="input">
      <select class="modernized" name="user[default_currency]" id="user_default_currency"><option value="AED">AED (DH)</option>
<option value="AFN">AFN (Afs)</option>
<option value="ALL">ALL (L)</option>
<option value="AMD">AMD (AMD)</option>
<option value="ANG">ANG (NAf)</option>
</select>
  </div>
  </div>

</div>





<div>

   <div class="clearfix">
    <label for="user_locale">Language</label>
     <div class="input">
      <select class="modernized" name="user[locale]" id="user_locale"><option selected="selected" value="en">English</option>
 <option value="de">Deutsch</option>
 <option value="es">Español</option>
  <option value="fr">Français</option>
 <option value="id">Bahasa Indonesia</option>
 <option value="it">Italiano</option>
</select>


    </div>
   </div>
   </div>
  
     <div class="clearfix">
     <label for="user_time_zone">Your time zone</label>
     <div class="input">
       <select class="modernized" name="user[time_zone]" id="user_time_zone"><option value="International Date Line West">(GMT-12:00) International Date Line West</option>
 <option value="American Samoa">(GMT-11:00) American Samoa</option>
<option value="Midway Island">(GMT-11:00) Midway Island</option>
 <option value="Hawaii">(GMT-10:00) Hawaii</option>
 <option value="Alaska">(GMT-09:00) Alaska</option>
<option selected="selected" value="Pacific Time (US &amp; Canada)">(GMT-08:00) Pacific Time (US &amp; Canada)</option>
 <option value="Tijuana">(GMT-08:00) Tijuana</option>
</select>
</div>
</div>





    

    <div class="row">
      <div class="offset9 span3 columns" >&nbsp;
        <input type="submit" name="commit" value="Save" class="btn btn-large btn-orange"  data-disable-with="Save"/>
       </div>
     </div>

    

    

    

  

          

    
          
    

       
    
      
    
    ]
     
</div>
    
  

    
              

    
      



   );
  }

}

 export default VProfile;