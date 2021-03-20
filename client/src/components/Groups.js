import React from 'react';
import '../styles/signup.css';
import { withRouter } from "react-router-dom";
import axios from 'axios';
import { serverIp, serverPort } from '../components/config';
import SettleUp from '../components/Dashboard/popups/settleUp';
//import ViewProfile from './ViewProfile'
import { Hint } from 'react-autocomplete-hint';
import DashHeader from '../components/DashHeader';
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
        email:'',
        name:'',
       user:[{name:"",email:"",invite:"no"}],
       autosuggestname : [],
       autosuggestemail :[],
      mainarray :[]
      
      };
   
      this.onChangeUserNameHandler = this.onChangeUserNameHandler.bind(this);
      
   
      this.onSignUpSubmit = this.onSignUpSubmit.bind(this);
 //     this.onChangeEmailHandler = this.onChangeEmailHandler.bind(this);

      
    }
    // both company name and student name change will call this handler
  
componentDidMount(){
  //const mainarray=[];
  axios.post(`${serverIp}:${serverPort}/getuserdata`)
  .then((response) => {
    console.log('AddUsergroup Response Data');
    console.log(response.data);
  if (response.data === 'Error') {
      window.alert('Error while querying the Database');
    } else {
     
      
      var hintArrayname = []
      var hintArrayemail = []
      var mainarrayy = []
      response.data.map(a => hintArrayname.push(a.username))
      response.data.map(a => hintArrayemail.push(a.emailId))
      response.data.map(a => mainarrayy.push(a.username))
     // response.data.map(a => mainarray.push(a))
      this.setState({
       autosuggestname : hintArrayname,
        mainarray : mainarrayy
      });
      this.setState({
        autosuggestemail : hintArrayemail,
      });
    }
  }).catch((err) => {
    console.log(`In catch of axios post call to get user data ${err}`);
    window.alert('Error in Add USERgroup API axios Post call');
 });
 //console.log({thus.state.mainarray});
 
// console.log(this.state)
// const happy =[{a:1}];
// console.log(happy);

}
  
    // eventList() {
    //   // for each object in exercise we are returning an Exercise component and passing three props
    //   return this.state.mainarray.map((eachEvent) => <SettleUp event={eachEvent} key={eachEvent.event_id} />);
    // }
 
    onChangeUserNameHandler(e) {
   this.setState({
     groupname: e.target.value,
   });
 }
  
 

 
//  onChangeEmailHandler(e){
//   this.setState({
//        email: e.target.value,
//      });
//    }
 
 
 
 

 addUser =(e) =>{
   this.setState((prevState)  => ({
    user: [...prevState.user, {name:"",email:"",invite:"no"}],
 // user: [...prevState.user]
   }));
 }

 handleChange = (e) => {
  
  if (["email"].includes(e.target.className) ) {
    console.log(e.target.className);
   
    let user = [...this.state.user]
    user[e.target.dataset.id] = {
      [e.target.className]: e.target.value,
      ["invite"]: "yes"
  };
   // console.log(user)
   // user[e.target.dataset.id][e.target.className] = "geetika.kapil@sjsu.edu"
    this.setState({ user }, () => console.log(this.state.user))
  } else {
    this.setState({ [e.target.name]: e.target.value.toUpperCase() })
  }

}



 onSignUpSubmit(e) {
   e.preventDefault();
   const data = {
      groupname: this.state.groupname.toLowerCase(),
      createdby : localStorage.getItem('email_current'),
      createdate:Date().toLocaleString()
        };
      console.log(data);
      
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



      const userdata = [];
      userdata.push([localStorage.getItem('email_current'),"no"]);
      console.log(userdata);
       console.log(this.state.user)
       this.state.user.forEach((eachObj) => {
      userdata.push([eachObj.email,eachObj.invite]);
     });
       console.log(userdata);
      const output=[]
     let tmp;
sessionStorage.setItem('groupname',this.state.groupname);

     for(let i = 0; i < userdata.length; i++){  
       tmp = {groupname : this.state.groupname,email: userdata[i][0],invite : userdata[i][1] };
       output.push(tmp);      
             
    }
 
     console.log(output)
 
       sessionStorage.setItem('group_length',output.length);
     
      axios.post(`${serverIp}:${serverPort}/AddUserGroup`, output)
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
     
       let {user} =this.state
       console.log(this.state.autocomplete);
       this.state.mainarray.map((eachEvent) => <SettleUp event={eachEvent} />);
  // this.state.mainarray.map((eachStudent) => {
  // //console.log({eachStudent.username})
  // });
		 return(

         <div className = "container signup">
           <DashHeader/>
     <div className = "signup-form">
       
	   <div class="imageholder">
<img className = "profile" src={require('../images/logo.png')} alt="" srcset=""class="image"/>
      
	  <div id='group_avatar_upload'>
        <input type="file" name="group[avatar]" id="group_avatar" />
      </div>
	  </div>
       <form onSubmit={this.onSignUpSubmit} onChange={this.handleChange}>
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
			  <a href='#' onclick=" "> invite link</a>.
            </div>
			<div id="invite_link_container" >
				</div>

      
      

        <a href="#"class="add"><button onClick={this.addUser}>+ Add a person</button></a>


      {/* <div>
	  <input placeholder="Name" class="name"   onchange={this.onChangeNameHandler} type="text"  id="name" required/>
    <input placeholder="Email address " class="email"  onchange={this.onChangeEmailHandler} type="email"  id="email" required/>
      <a class="delete remove_nested_fields" onclick="" href="javascript:void(0)">×</a>
   </div> */}


       


  <div>    
	
   {
          user.map((val, idx)=> {
            let userId = `name-${idx}`, emailId = `email-${idx}`,inviteId = `invite-${idx}`
            return (
              <div key={idx}>
                <Hint options={this.state.autosuggestname} allowTabFill>
                <input
                placeholder="Name"
                  type="text"
                  name={userId}
                  data-id={idx}
                  id={userId}
                 // value={user[idx].name}
              //   onchange={this.onChangeNameHandler}
                  class="name"
                required/>
                </Hint>
               <Hint options={this.state.autosuggestemail} allowTabFill>
                <input
                placeholder="Email address "
                  type="email"
                  name={emailId}
                  data-id={idx}
                  id={emailId}
                 // value={user[idx].email}
                  class="email"
              //    onchange={this.onChangeEmailHandler}
                required/>
                </Hint> 
                  <input type="checkbox" name={inviteId} data-id={idx} id={inviteId} class="invite" onChange={this.handleCheck} />
      
                <a class="delete remove_nested_fields" onclick="" href="">×</a>
              </div>
            )
          })
        }
	 </div>
 
   
 <button type="submit" className="btn">Confirm</button>
      </form>
   </div>



    </div>

    

);
}
}
     
export default AddGroup;


















