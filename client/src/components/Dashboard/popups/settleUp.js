import React from 'react';
import '../../../styles/frndPop.css';
import { PaidBy } from './paidBy';
import { PaidTo } from './paidTo';

import { instance } from '../../../utils/AxiosConfig';

import axios from 'axios';
import { serverIp, serverPort } from '../../config';


 class SettleUp extends React.Component{
    constructor(props){
    super(props);
    this.val = 0;
  //  this.props.user.friends.push(this.props.user.username);
 // this.props.user.friends.push(this.props.eve.username);
 
 this.paidTo = this.paidTo.bind(this);
 this.toValue = this.toValue.bind(this);
    this.state = {paidBy:false,paidTo:false,byValue: "you",toValue:"select"}
    }
     PaidBy() {
        this.setState({paidBy: !this.state.paidBy,paidTo:false});
    }

    PaidTo() {
        this.setState({paidBy:false,paidTo: !this.state.paidTo});
    }
    byValue(event){
       
     if(event == this.props.eve) 
     event = "you"
     else {
        event = event.slice(0,6); 
        event = event+"..."
     }
       
        this.setState({...this.state,byValue: event});
    }
    toValue(event){
    //  if(event == this.props.eve) 
    //  event = "you";
          
         this.setState({...this.state,toValue: event});
     }
    //  close(){
    //   window.location.reload();
    //  }

    
    paidTo(){
      console.log(this.props.eve)
      return this.props.eve.map((eachStudent) => {
    return(
      <div className = "secondBox">
           <div className = "frnd-header">   
         <span>Paid To</span>
         </div>
         <ul className = "myList">
          
         {this.props.eve.map((eachStudent) => (
       <li onClick = {(event)=>{
        this.toValue(event.target.id);
      
    }} id = {eachStudent}>{eachStudent}</li>
    ))}
                
         </ul>
      </div>
  )   
            }); 
}
     Save(){
         if(this.state.toValue == "select"){
             alert("please select the reciver");
             return;
         }
         else if(this.val == ""){
            alert("you must enter an amount");
            return;
         }
         else if(this.state.toValue != "you" && this.state.byValue != "you"){
            alert("you cannot add an Expense that does not involve yourself");
         }
         else if(this.state.toValue == this.state.byValue){
            alert("you can't add money to yourself");
           }
       else{ 
           var sender;
            if(this.state.toValue == "you"){
                this.val = "-" + this.val;
                sender =  this.state.byValue;
            }else sender = this.state.toValue;

            console.log(parseInt(this.val),this.state.byValue,this.state.toValue);
          // instance.post("/settle",{username: this.props.user.username,user: sender,val: parseInt(this.val)}).then((resp)=>{
          //     console.log(resp.data.doc);
          //     var action = userActionCreator(resp.data.doc,'AddUser');
          //     store.dispatch(action);
              
           //   this.props.friend();
       //   });
        } 
    const data =
        {
            email : localStorage.getItem('email_current'),
            toValue: this.state.toValue
        }
        console.log(data);
        axios.post(`${serverIp}:${serverPort}/UpdateExp`,data)
        .then((response) => {
          console.log(' Updated the exp successfully');         
        if (response.data === 'Error') {
            window.alert('Error while querying the Database');
          } else {
            window.alert('Successfully created the bill'); 
                
          }
        }).catch((err) => {
          console.log(`In catch of axios post call to add bill${err}`);
          window.alert('Error in add exp API axios Post call');
        });
      

    }
  render(){ 
    console.log(this.props);
  //   const values =[];
  //   // this.props.eve.map((eachEvent) => {
  //   //    values.push({eachEvent});
  //   // }); 
  //  console.log(values);
    
        return (
        <div className = "friendPopup">
        <div className = "flx">
        <div className = "frnd-content">
        <div className = "frnd-header">   
        <span>Settle up</span>
        <button className = "float-right" onClick = {this.props.friend}><i class="fas fa-times"></i></button>
        </div>

        <div className = "frnd-set">
        <button onClick = {this.PaidBy.bind(this)}>{(this.state.byValue == "you")?"you":this.state.byValue.slice(0,6) + "..."}</button> paid <button onClick = {this.PaidTo.bind(this)}>{(this.state.toValue == "you" || this.state.toValue == "select")?this.state.toValue:this.state.toValue.slice(0,6) + "..."}</button>
        </div>
      
      <input className = "money" onChange = {(event)=>{
          this.val = event.target.value;
      }} placeholder = "$ 0.0" type="number" name="" id=""/>
      <div className = "pop-btn bt-mr">

        <button className = "btn Add" onClick = {this.Save.bind(this)}>Save</button>

        <button className = "btn cut" onClick = {this.props.friend}>Close</button>
    </div>
        </div>
        
        {this.state.paidBy && <PaidBy list = {this.props.eve} byValue = {this.byValue.bind(this)}/>}  
        
        {this.paidTo()}
       

        </div>

    </div>
    )}
}

export default SettleUp;