import React from 'react';
import {Switch,Route} from 'react-router-dom';
// import { Login } from './components/login';
import Login_smart from './containers/login_container';
import { Landing } from './components/landing';
import  SignUp  from './components/signup';
import {Dashboard} from './containers/Dashboard';
import Addgroup from './components/Groups';
import VProfile from  './components/ViewProfile';
import {transactionma} from './containers/transactionma';
import Recentactivity from  './components/Recentactivity';
export  class App extends React.Component{
  render(){
    return (
      <div>
        <Switch>
        
          <Route exact path = "/" component = {Landing}></Route>
          <Route exact path = "/login" component = {Login_smart}></Route>
          <Route exact path = "/signup" component = {SignUp}></Route>        
          <Route exact path = "/Dashboard" component = {Dashboard}></Route>
          <Route exact path = "/Groups" component = {Addgroup}></Route>
          <Route exact path = "/ViewProfile" component = {VProfile}></Route>
          <Route exact path = "/ViewProfile" component = {VProfile}></Route>
          <Route exact path = "/Recentactivity" component = {Recentactivity}></Route>
          <Route exact path = "/transactionma:groupname" component = {transactionma}></Route>
       </Switch>
      </div>
    )
  }
} 