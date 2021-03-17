import React from 'react';
// import {connect} from 'react-redux';
import DashHeader from '../components/DashHeader';
import Grouptransactionheader from '../components/Dashboard/Grouptransactionheader';
import { AddFriend } from '../components/Dashboard/AddFriends';
import  Grouptransaction  from '../components/Dashboard/Grouptransaction';
//import { serverIp, serverPort } from '../components/config';
// import {userActionCreator} from "../redux/actionCreator/userAction";
// import { store } from "../redux/store"
//import  Friend  from '../components/Dashboard/popups/Friend';//invittaion no wale 
//import "../styles/Dashboard.css"
import Result from '../components/Dashboard/Result';
import Invitation from '../components/Dashboard/Invitation';
//import SettleUp  from '../components/Dashboard/popups/settleUp';
import '../styles/dashHeader.css'
export class transactionma extends React.Component{
    constructor(props){
         super(props);
         

    }

    // alwaysRun(email_current){
    //   console.log("this is username ...........",email_current);
    // //   if(username != undefined){
    // //     instance.post('/getData',{username: username}).then((resp)=>{
    // //                        console.log("this is response",resp.data.user);
    // //                        var action = userActionCreator(resp.data.user,'AddUser');
    // //                        store.dispatch(action);
    // //                    })
    // //   }
    // }  
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
// componentDidMount(){
//     console.log("will Mount********************************************** ",localStorage.email_current);
//    instance.post('/getData',{username: localStorage.username}).then((resp)=>{
//        console.log("this is response",resp.data.user);
//        var action = userActionCreator(resp.data.user,'AddUser');
//        store.dispatch(action);
//    })
// }
// //get data bill of current user 
// //get invitation no wale data  from grouplist
// //show invitaion data


// // showFriend(){
// //      this.setState({...this.state,showFriend: !this.state.showFriend});
// //      console.log(this.state.showFriend);
// // }


// // settle(){
// //     this.setState({...this.state,settleUp: !this.state.settleUp});
// //     console.log(this.state.settleUp);
// // }
render(){
    
    return(
    <div >
        {/* {this.alwaysRun(this.props.userInfo.username)} */}
        <DashHeader/>
        <Grouptransactionheader {...this.props} />
        {/* {this.state.showFriend && <Friend friend = {this.showFriend.bind(this)}/>} */}
       
        {/* {this.state.settleUp && <SettleUp friend = {this.settle.bind(this)}/>} */}
        
       
        {/* <AddFriend  friend = {this.showFriend.bind(this)}/> */}
        {/* <Grouptransaction friend = {this.showExpense.bind(this)} settle = {this.settle.bind(this)}/> */}
        <div>
        <Grouptransaction {...this.props}  />
       
        <div class="transaction">
            
            <Result/>
            <Invitation/>
        </div>
        </div>
    </div>
)
}
}

