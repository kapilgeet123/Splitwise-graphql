import React from 'react';
import axios from 'axios';
import { serverIp, serverPort } from '../config';
import {
    Card
  } from 'react-bootstrap';


  class Invitation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     registeredStudents: [],
    };
    this.returnRegisteredStudents = this.returnRegisteredStudents.bind(this);
    
  }

  componentDidMount() {
      console.log("inside invitation componenet")
    axios.post(`${serverIp}:${serverPort}/fetchinvitation`, { email: localStorage.getItem('email_current') })
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
  console.log(this.registeredStudents);
  }

handleSearchReset(e)
{
  const data =
  {
      email : localStorage.getItem('email_current'),
      groupname : this.state.registeredStudents.groupname

  }


    axios.post(`${serverIp}:${serverPort}/updateusergroup`,data )
      .then((response) => {
        console.log('upadtedtheusergroup');
        console.log(response.data);
        //get invite email no 
        
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
           
            {/* <span>{eachStudent.email} </span>
            <div>
            <span>{eachStudent.sum}</span>
            </div> */}

          <div className="fitting">
             <label htmlFor="">{eachStudent.groupname}</label>
             <button onClick={this.handleSearchReset()}> Yes </button>
             <button> No </button>

             {/* <p style = {{color:"red"}}>$ {({eachStudent.sum}>=0)? '"gets back"' {eachStudent.sum} :"gives back" {eachStudent.sum} }</p> */}
           </div>
           
              
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


  
//   function splitPayments(payments) {
//     const people = Object.keys(payments);//
//     console.log(people)
//     const valuesPaid = Object.values(payments);
//   console.log(valuesPaid)
//     const sum = valuesPaid.reduce((acc, curr) => curr + acc);
//     const mean = sum / people.length;
//   console.log(mean)
//     const sortedPeople = people.sort((personA, personB) => payments[personA] - payments[personB]);
//     console.log(sortedPeople);
//     const sortedValuesPaid = sortedPeople.map((person) => payments[person] - mean);
//   console.log(sortedValuesPaid)
//     let i = 0;
//     let j = sortedPeople.length - 1;
//     let debt;
  
//     while (i < j) {
//       debt = Math.min(-(sortedValuesPaid[i]), sortedValuesPaid[j]);
//       console.log(debt);
//       sortedValuesPaid[i] += debt;
//       sortedValuesPaid[j] -= debt;
  
//       console.log(`${sortedPeople[i]} owes ${sortedPeople[j]} $${debt}`);
  
//       if (sortedValuesPaid[i] === 0) {
//         i++;
//       }
  
//       if (sortedValuesPaid[j] === 0) {
//         j--;
//       }
//     }
//   }
  
//   splitPayments(payments);
  
// }

}
export default Invitation;












// function calculate(props){
//     exp = 0;
//     owe = [];
//     owed = [];
//     if(props.user.expensis){
//       console.log("****************************m kitni barri hu *********************************");
//     props.user.expensis.forEach(element => {
//  if(element.data){
//    exp += parseInt(element.data.ammount);
//    //someone has to give you 
//        if(element.data.ammount>0){
         
//          console.log("element.data.ammount>0")
//          owed.push(element);
//          console.log(owed);
//        }//u need to give
//        else if(element.data.ammount<0){
//          console.log("element.data.ammount<0");
//          // element.data.ammount = -(element.data.ammount);
//          owe.push(element);
//          // owe[owe.length].data.ammount = -( owe[owe.length].data.ammount );
//          console.log(owe);
//        }
//      }
//     });
//    }
//    // return exp;
//  }
 
//   const Middle = props => {
//    return (
//      <div className="Middle">
//        {calculate(props)}
       
//        <div className="MidDash">
//          <div className="DashHeader">
//            <h3>Dashboard</h3>
//            <button className="btn float-right settle" onClick={props.settle}>
//              Settle up
//            </button>
//            <button className="btn float-right expense" onClick={props.friend}>
//              Add an expense
//            </button>
//          </div>
 
//          <div className="total">
//            <div className="fitting">
//              <label htmlFor="">total balance</label>
//              <p className="green">$ {exp}</p>
//            </div>
//            <div className="fitting">
//              <label htmlFor="">you owe</label>
//              <p style = {{color:"red"}}>$ {(exp<0)?exp:0}</p>
//            </div>
//            <div className="fitting">
//              <label htmlFor="">you are owed</label>
//              <p className="green">$ {(exp>0)?exp:0}</p>
//            </div>
//          </div>
//        </div>
 
//        <div className="totalCollection">
//          <div>
//            <label htmlFor="">YOU OWE</label>
//          </div>
//          <div>
//            <label htmlFor="" className="float-right mr-4">
//              YOU ARE OWED
//            </label>
//          </div>
//        </div>
//        <div className = "flex">
//          <div className="float-left ml-3 borders">
//            <ul>
//              {(owe.length == 0)?<li>You do not owe anything</li>:owe.map(value=>
//               <li>
//               <img
//                 className="imgs"
//                 src={require("../../images/person-profile.png")}
//                 alt="" align="left"
//               />
//               <div className="inline">
//                 <h5>{value.name}</h5>
//                 <span>you owe ${-(value.data.ammount)}</span>
//               </div>
//             </li>
//              )}
//              {/* <li>
//                <img
//                  className="imgs"
//                  src={require("../../images/person-profile.png")}
//                  alt="" align="left"
//                />
//                <div className="inline">
//                  <h5>Ram</h5>
//                  <span>you owe $500</span>
//                </div>
//              </li> */}
//            </ul>
//          </div>
 
 
 
//          <div>
//            <ul>
//            {(owed.length == 0)?<li>You do not owe anything</li>:owed.map(value=>
//              <li>
//              <img
//                className="imgs"
//                src={require("../../images/person-profile.png")}
//                alt=""
//                align="left"
//              />
//              <div className="inline">
//                <h5>{value.name}</h5>
//                <span>owes you ${value.data.ammount}</span>
//              </div>
//            </li>
//              )}
 
//              {/* <li>
//                <img
//                  className="imgs"
//                  src={require("../../images/person-profile.png")}
//                  alt=""
//                  align="left"
//                />
//                <div className="inline">
//                  <h5>Ram</h5>
//                  <span>you owe $500</span>
//                </div>
//              </li> */}
            
             
//            </ul>
//          </div>
//        </div>
//      </div>
//    );
//  };
 