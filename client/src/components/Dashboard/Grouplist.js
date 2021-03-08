import React from 'react';
import axios from 'axios';
import { serverIp, serverPort } from '../config';

class Grouplist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      registeredStudents: [],
    };
    this.returnRegisteredStudents = this.returnRegisteredStudents.bind(this);
   
  }

  componentDidMount() {
    axios.post(`${serverIp}:${serverPort}/getStudentsRegisteredInAEvent`, { email: 'geetika.kapil@sjsu.edu' })
      .then((response) => {
        console.log('Response data in componentDidMount');
        console.log(response.data);
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
      let imgSrc = `${serverIp}:${serverPort}/default.png`;
      if (eachStudent.profile_picture_url !== '') {
        imgSrc = `${serverIp}:${serverPort}/${eachStudent.profile_picture_url}`;
      }
      return (
        <div>
            
               <span>{eachStudent.groupname} </span>
                <button >Detail</button>
              
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
