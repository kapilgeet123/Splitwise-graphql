import React from 'react';
// import {connect} from 'react-redux';
import DashHeader from '../components/DashHeader';
import AddFriends  from '../components/Dashboard/AddFriends';
import  Middle  from '../components/Dashboard/MiddleDashboard';
import {instance} from '../utils/AxiosConfig';
import {userActionCreator} from "../redux/actionCreator/userAction";
import { store } from "../redux/store"
import  Friend  from '../components/Dashboard/popups/Friend';
import "../styles/Dashboard.css"
import AddExpense from '../components/Dashboard/popups/addExpense';
import SettleUp  from '../components/Dashboard/popups/settleUp';
import Invitation from '../components/Dashboard/Invitation';
import { serverIp, serverPort } from '../components/config';
import axios from 'axios';
export class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state = 
        {
    showFriend: false,
    showExp:false,
    settleUp: false,
    mainarray:[],
}

    }

    
    
    
    
    
    
    
    alwaysRun(username){
      console.log("this is username ...........",username);
    //   if(username != undefined){
    //     instance.post('/getData',{username: username}).then((resp)=>{
    //                        console.log("this is response",resp.data.user);
    //                        var action = userActionCreator(resp.data.user,'AddUser');
    //                        store.dispatch(action);
    //                    })
    //   }
    }  
//  componentWillReceiveProps(nextprops){
//      let oldState = this.props.userInfo;
//      console.log("old state length ",oldState.friends.length);
//      console.log("nxt prop lenght ", nextprops.userInfo.friends.length);


//     if(oldState.friends.length != nextprops.userInfo.friends.length){
//         instance.post('/geftData',{username: nextprops.userInfo.username}).then((resp)=>{
//                console.log("this is response",resp.data.user);
//                var action = userActionCreator(resp.data.user,'AddUser');
//                store.dispatch(action);
//            })
//         oldState = nextprops.userInfo;
//     }
//     console.log("old state length ",oldState.friends.length);

//     // console.log("will Mount ",nextprops.userInfo);
//     // instance.post('/getData',{username: nextprops.userInfo.username}).then((resp)=>{
//     //            console.log("this is response",resp.data.user);
//     //            var action = userActionCreator(resp.data.user,'AddUser');
//     //            store.dispatch(action);
//     //        })
//  }   
componentDidMount(){
    console.log("will Mount********************************************** ",localStorage.username);
//    instance.post('/getData',{username: localStorage.username}).then((resp)=>{
//        console.log("this is response",resp.data.user);
//        var action = userActionCreator(resp.data.user,'AddUser');
//        store.dispatch(action);
  // })

//const mainarray=[];
axios.post(`${serverIp}:${serverPort}/getuserdata`)
.then((response) => {
  console.log('AddUsergroup Response Data');
  console.log(response.data);
if (response.data === 'Error') {
    window.alert('Error while querying the Database');
  } else {
    window.alert('Successfully Added the Usergroup'); 

//     response.data.map(a => hintArrayname.push(a.username))
//    response.data.map(a => hintArrayemail.push(a.emailId))
//    response.data.map(a => mainarrayy.push(a.username))
   // response.data.map(a => mainarray.push(a))
    this.setState({
    // autosuggestname : hintArrayname,
    //  mainarray : mainarrayy
    mainarray : response.data,
    });
    // this.setState({
    //   autosuggestemail : hintArrayemail,
    // });
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

showFriend(){
     this.setState({...this.state,showFriend: !this.state.showFriend});
     console.log(this.state.showFriend);
}
showExpense(){
    this.setState({...this.state,showExp: !this.state.showExp});
    console.log(this.state.showExp);
}  

settle(){
    this.setState({...this.state,settleUp: !this.state.settleUp});
    console.log(this.state.settleUp);
}
render(){
    const values =[];
    this.state.mainarray.map((eachEvent) => values.push(eachEvent.username))
    console.log(values);
    return(
    <div >
        {/* {this.alwaysRun(this.props.userInfo.username)} */}
        <DashHeader/>
        
        {this.state.showFriend && <Friend friend = {this.showFriend.bind(this)}/>}
        {this.state.showExp && <AddExpense friend = {this.showExpense.bind(this)}/>}
        {this.state.settleUp &&  <SettleUp eve={values} />}
        
        <div className ="flex">
        <AddFriends  friend = {this.showFriend.bind(this)}/>
        
        <Middle friend = {this.showExpense.bind(this)} settle = {this.settle.bind(this)}/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Invitation/>
        </div>
    </div>
)
}
}

