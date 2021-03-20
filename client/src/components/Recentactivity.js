import React from "react";
import { connect } from "react-redux";
import "../styles/Dashboard.css";
import {NavLink} from 'react-router-dom';
import { serverIp, serverPort } from '../components/config';
import DashHeader from '../components/DashHeader';
import axios from 'axios';
import {
  Card, Modal, Image,
} from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Dropdown from 'react-dropdown';
import {  
  useParams
} from "react-router-dom";
//import  StudentListEvents from '../components/Dashboard/filter';

 class Recentactivity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: '',
            registeredStudents: [],
            userOption: ['Asc', 'Desc'],
            poetFilter: "",
            poets: [],
            filteredPoets: []
        };
        this.onChangeSelectedOptionHandler = this.onChangeSelectedOptionHandler.bind(this);
        this.returnRegisteredStudents = this.returnRegisteredStudents.bind(this);
        this.handleChange = this.handleChange(this);
        this.filterPoets = this.filterPoets(this);
      }
      handleChange(e) {
        this.setState({
          poetFilter: e.value,
        })
       this.filterPoets(e.value);
      }

      filterPoets(poetFilter)  {
       console.log("Inside filterpoets");
        let filteredPoets = this.state.registeredStudents
        console.log(this.state.filteredPoets)
        filteredPoets = filteredPoets.filter((poet) => {
          let poetName = poet.username.toLowerCase()
          console.log(poetName);
          return poetName.indexOf(
            poetFilter.toLowerCase()) !== -1
        })
        this.setState({
          filteredPoets
        })
        console.log(this.state.filteredPoets)
      }
    

      componentDidMount() {
       
        axios.post(`${serverIp}:${serverPort}/gettransactionsdatatot`)
       // axios.post(`${serverIp}:${serverPort}/gettransactionsdata`)
          .then((response) => {
            console.log('Response data in componentDidMount');
            console.log(response.data);
            
            this.setState({
              registeredStudents: response.data,
            
            filteredPoets: response.data
            });
          }).catch((err) => {
            console.log(`Error in componentDidMount of fetchdata: ${err}`);
            window.alert('Error in connecting to server');
          });
       
        }
      
        onChangeUserHandler(e) {
            this.setState({
              user: e.value,
            });
          }
        onChangeSelectedOptionHandler(e) {
            this.setState({
              selectedOption: e.value,
            });
          }

returnRegisteredStudents() {

  console.log(this.state.registeredStudents);
  if(this.state.SelectedOption == 'Asc')
  {

      console.log("Inside Asc");
  return this.state.registeredStudents.map((eachStudent) => {
    
    return (
      
      <div >
      <DashHeader/>
        <div>
        {/* <StudentListEvents/> */}
          <div>
            <Card border="primary">
              <Card.Body>
                <Card.Title>
                  
                  {' '}
                  {' '}
                
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                
                </Card.Subtitle>
                <Card.Text>
                  <b>Transaction data</b>
                  {' '}
                  <br />
                  
                  <b>Transaction data</b>
                      {' '}
                      <br />
                      <b>Bill iD</b>
                      {eachStudent.billid}
                      <br/>
                      <b>Groupname</b>
                      {eachStudent.group_name}
                      <br/>
                      <b>Transaction description </b>
                  {eachStudent.description}
                  <br/>
                  <b>For </b>
                  {eachStudent.email}
                  <br/>
                  <b>CreatedDate</b>
                  {eachStudent.createddate}
                  <br/>
                  <b>Paid By </b>
                  {eachStudent.paidby}
                </Card.Text>
              </Card.Body>
            </Card>
            <br />
          </div>
          
             
              
          
        </div>
        </div>
    );
  });
}
else{
    console.log("Inside Dec");
    return this.state.registeredStudents.reverse().map((eachStudent) => {
    
        return (
           
          <div>
         <DashHeader/>
            <div>
      
              <div>
                <Card border="primary">
                  <Card.Body>
                    <Card.Title>
                      
                      {' '}
                      {' '}
                    
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                    
                    </Card.Subtitle>
                    <Card.Text>
                      <b>Transaction data</b>
                      {' '}
                      <br />
                      <b>Bill iD</b>
                      {eachStudent.billid}
                      <br/>
                      <b>Groupname </b>
                      {eachStudent.group_name}
                      <br/>
                      <b>Transaction description </b>
                  {eachStudent.description}
                  <br/>
                  <b>For </b>
                  {eachStudent.email}
                  <br/>
                  <b>CreatedDate</b>
                  {eachStudent.createddate}
                  <br/>
                  <b>Paid By </b>
                  {eachStudent.paidby}
                    </Card.Text>
                  </Card.Body>
                </Card>
                <br />
              </div>
              
                 
                  
              
            </div>
            </div>
        );
      });
    }

}
render(){
   return (
    <div>
     <Dropdown
                            options={this.state.userOption}
                            onChange={this.onChangeSelectedOptionHandler}
                            value={this.state.selectedOption}
                            placeholder="Sort"
                          />
     
      {this.returnRegisteredStudents()}
    </div>
    


  );
   }
   
}
    
 export default Recentactivity;
 

 