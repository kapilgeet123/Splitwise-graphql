import React from 'react';
import '../styles/signup.css';
import { withRouter } from "react-router-dom";
import axios from 'axios';
import { serverIp, serverPort } from '../components/config';
//import {View, StyleSheet, ImageBackground, Alert} from 'react-native';
//import {Container, Header, Content, Left, Body, Right, Button, Icon, Title, Text, Item, Form, Label, Input, Toast} from 'native-base';
//import SelectMultiple from 'react-native-select-multiple';
//import ImagePicker from 'react-native-image-crop-picker';
//import {Actions} from 'react-native-router-flux';




var obj = {};
 class  AddGroup extends React.Component{
   constructor(props) {
      super(props);
      this.state = {
        groupname: '', // name corresponds to student name for student role and company name for company role
        createdate:'',
        grouppicture: '',
        createdby: '',
        email1:'',
        email2:'',
        email3:'',
            };
      
      this.onChangeUserNameHandler = this.onChangeUserNameHandler.bind(this);
      
   
      this.onSignUpSubmit = this.onSignUpSubmit.bind(this);
      this.onChangeEmail1Handler = this.onChangeEmail1Handler.bind(this);
      this.onChangeEmail2Handler = this.onChangeEmail2Handler.bind(this);
      this.onChangeEmail3Handler = this.onChangeEmail3Handler.bind(this);
    }
    // both company name and student name change will call this handler
  

 onChangeUserNameHandler(e) {
   this.setState({
     groupname: e.target.value,
   });
 }

 
 
 onChangeEmail1Handler(e){
  this.setState({
       email1: e.target.value,
     });
   }
 
 
 
 onChangeEmail2Handler(e){
  this.setState({
       email2: e.target.value,
     });
   }
 onChangeEmail3Handler(e){
this.setState({
     email3: e.target.value,
   });
 }
 onSignUpSubmit(e) {
   e.preventDefault();
   const data = {
      groupname: this.state.groupname.toLowerCase(),
      createdby : localStorage.getItem('email_current'),
      createdate:Date().toLocaleString()
        };
      console.log(data.createdby);
     
    axios.defaults.withCredentials = true;
    axios.post(`${serverIp}:${serverPort}/AddGroup`, data)
      .then((response) => {
        console.log('Addgroup Response Data');
        console.log(response.data);
      if (response.data === 'Error') {
          window.alert('Error while querying the Database');
        } else {
          window.alert('Successfully Added the group'); 
		  localStorage.setItem('groupname', response.data.groupname);
			   localStorage.setItem('groupid', response.data.groupid);
			   localStorage.setItem('createdby', response.data.createdby);
			   localStorage.setItem('createddate', response.data.createddate);
			   localStorage.setItem('grouppicture', response.data.groupicture);       
        }
      }).catch((err) => {
        console.log(`In catch of axios post call to add group ${err}`);
        window.alert('Error in Add group API axios Post call');
      });
      // const data1 = {
      //   groupname: this.state.groupname.toLowerCase(),
      //   email1:this.state.email1,
      //   email2:this.state.email2,
      //   email3:this.state.email3
      //     };
      const data1 = {
        groupname: this.state.groupname.toLowerCase(),
        email1:'geetika.kapil@sjsu.edu',
        email2:'sfsdfs@gmail.com',
        email3:'dfsdf@gmail.com'
          };
     console.log(data1);
     
      axios.post(`${serverIp}:${serverPort}/AddUserGroup`, data1)
      .then((response) => {
        console.log('AddUsergroup Response Data');
        console.log(response.data);
      if (response.data === 'Error') {
          window.alert('Error while querying the Database');
        } else {
          window.alert('Successfully Added the Usergroup'); 
		       
        }
      }).catch((err) => {
        console.log(`In catch of axios post call to add Usergroup ${err}`);
        window.alert('Error in Add USERgroup API axios Post call');
      });

  }
   
   render()
     {
		 return(
         <div className = "container signup">

    


     <div className = "signup-form">
       
	   <div class="imageholder">
<img className = "profile" src={require('../images/logo.png')} alt="" srcset=""class="image"/>
      
	  <div id='group_avatar_upload'>
        <input type="file" name="group[avatar]" id="group_avatar" />
      </div>
	  </div>
       <form onSubmit={this.onSignUpSubmit}>
	   <h2>Start a group</h2>
    <div class="label1">
		My Group shall be called
	</div>
	<input id = "groupname" 
       onChange={this.onChangeUserNameHandler}
      className = "form-control" type="text" required/>
     <h2 class ="members">Group members</h2>
	 <div class="invite">

              Tip: Lots of people to add? Send your friends an 
			  <a href='#' onclick=" ">invite link</a>.
            </div>
			<div id="invite_link_container" >
				</div>

      
      




      <div>
	  <input placeholder="Name" class="name"  onchange="" type="text" value="" name="" id="" />
    <input placeholder="Email address " class="email"  onchange={this.onChangeEmail1Handler} type="email"  id="email1" required/>
      <a class="delete remove_nested_fields" onclick="" href="javascript:void(0)">×</a>



       
</div>
<div>
<input placeholder="Name" class="name"  onchange="this.onChangeEmail2Handler" type="text" value="" name="" id="" />
<input placeholder="Email address " class="email"  onchange={this.onChangeEmail2Handler} type="email"  id="email2" required/>
<a class="delete remove_nested_fields" onclick="" href="">×</a>
</div>

<div>
<input placeholder="Name" class="name"  onchange="aded&#39;))" type="text" value="" name="" id="" />
<input placeholder="Email address " class="email"  onchange={this.onChangeEmail3Handler} type="email"  id="email3" required/>
<a class="delete remove_nested_fields" onclick="" href="">×</a>

</div>
      
	 <a href="#"class="add">+ Add a person</a>

	 

   
 <button type="submit" className="btn">Confirm</button>
      </form>
   </div>



    </div>

    

);
}
}
     
export default withRouter(AddGroup);


















