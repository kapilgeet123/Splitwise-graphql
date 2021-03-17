import React from 'react';
import axios from 'axios';
import { serverIp, serverPort } from '../config';
import  Grouptransaction  from './Grouptransaction';
import { Route, Switch,Link } from 'react-router-dom';
class Grouplist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      registeredStudents: [],
    };
    this.returnRegisteredStudents = this.returnRegisteredStudents.bind(this);
 //   this.showGroup = this.showGroup.bind(this);
   
  }

  componentDidMount() {
    axios.post(`${serverIp}:${serverPort}/getStudentsRegisteredInAEvent`, { email: localStorage.getItem('email_current') })
      .then((response) => {
        console.log('Response data in componentDidMount');
        console.log(response.data);
        //get invite email no 
        this.setState({
          registeredStudents: response.data,
        });
      }).catch((err) => {
        console.log(`Error in componentDidMount of RegisteredStudents: ${err}`);
        window.alert('Error in connecting to server');
      });
  }

  
  
  returnRegisteredStudents() {
    return this.state.registeredStudents.map((eachStudent) => {
      // let imgSrc = `${serverIp}:${serverPort}/default.png`;
      // if (eachStudent.profile_picture_url !== '') {
      //   imgSrc = `${serverIp}:${serverPort}/${eachStudent.profile_picture_url}`;
      // }
      return (
        <div>
           
           <Link to={`/transactionma:${eachStudent.groupname}`}> <span>{eachStudent.groupname} </span></Link>
           
            <Route path={`/transactionma:${eachStudent.groupname}`} component={Grouptransaction}/> 
               
              
        </div>
      );

    });
       
          
  }
  
  
render()
{
return(
<div>
<ul>
             <li className="friendlist">
               <i class="fas fa-user"/>
               
               {this.returnRegisteredStudents()}
               
               </li>


</ul>


</div>
);
}
}
export default Grouplist;
