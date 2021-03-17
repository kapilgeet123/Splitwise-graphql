import React from "react";
import { connect } from "react-redux";
import "../../styles/Dashboard.css";
import {NavLink} from 'react-router-dom';
import { serverIp, serverPort } from '../config';
import axios from 'axios';
import {
  Card, Modal, Image,
} from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {  
  useParams
} from "react-router-dom";


 class Grouptransaction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            exp : 0,
            registeredStudents: [],
        };
        this.returnRegisteredStudents = this.returnRegisteredStudents.bind(this);
       
      }
    

      componentDidMount() {
        //let {groupname} = useParams();
        const { groupname } = this.props.match.params;
        console.log(groupname)
        var res = groupname.slice(1);
        console.log(res);
        console.log(this.props.match.params.groupname);
        axios.post(`${serverIp}:${serverPort}/gettransactionsdata`,  { groupname : res  })
       // axios.post(`${serverIp}:${serverPort}/gettransactionsdata`)
          .then((response) => {
            console.log('Response data in componentDidMount');
            console.log(response.data);
            
            this.setState({
              registeredStudents: response.data,
            });
          }).catch((err) => {
            console.log(`Error in componentDidMount of fetchdata: ${err}`);
            window.alert('Error in connecting to server');
          });
       
        }
    



returnRegisteredStudents() {
  console.log(this.state.registeredStudents);
  return this.state.registeredStudents.map((eachStudent) => {
    
    return (
      <div>
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
                  <b>Career Objective</b>
                  {' '}
                  <br />
                  {eachStudent.billid}
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

render(){
   return (
    <div>
      {this.returnRegisteredStudents()}
    </div>
    


  );
   }
   
}
    
 export default Grouptransaction;
 

 