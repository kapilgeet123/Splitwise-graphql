// import React from "react";
// import "../../../styles/frndPop.css";
// import Chips, { Chip } from "react-chips";
// import {instance} from "../../../utils/AxiosConfig";


// import { withRouter } from "react-router-dom";
// import axios from 'axios';
// import Groups from "../../Groups";
// import { serverIp, serverPort } from '../../config';
// import { Mutation } from 'react-apollo';
// import { addbill,fetchbill } from '../../../mutations/signup';

// class AddExpense extends React.Component {
//   constructor(props) {
//     super(props);
//     this.input = {};
//     this.state = {
//       chips: [],
//       registeredStudents:[]
//  //registeredStudentsCan't resolve '../../../redux/actionCreator/userAction'
//     };
    
//   }
//   getdate() {
//     var today = new Date();

//     return (
//       today.getFullYear() +
//       "-" +
//       ("0" + (today.getMonth() + 1)).slice(-2) +
//       "-" +
//       ("0" + today.getDate()).slice(-2)
//     );
//   }
//   onChange = chips => {
//     console.log(chips);
//     this.setState({ ...this.state, chips });
//   };


//   componentDidMount() {
//     console.log(this.props.groupname);
//     //this.props.groupname = "ejkwjkesdfdshrjwk"
//     axios.post(`${serverIp}:${serverPort}/getStudentsRegisteredInAJob`, { groupname: this.props.groupname })
//       .then((response) => {
//         console.log('Response data in componentDidMount');
//         console.log(response.data);
//         this.setState({
//          registeredStudents: response.data,//useremail
//         });
//       }).catch((err) => {
//         console.log(`Error in componentDidMount of RegisteredStudents: ${err}`);
//         window.alert('Error in connecting to server');
//       });
//       console.log(this.state.registeredStudents);
//       console.log(this.props.groupname);
//     //   this.props.fetchbill({
//     //     variables: {
       
//     //        groupname: this.props.groupname,
        
//     //     }
//     // })
//     //     .then(response => {
//     //         console.log(response.data.loginOwner)
//     //         if(response.data.loginOwner){
//     //             localStorage.setItem("ownerlogin",response.data.loginOwner.id)
//     //             localStorage.setItem("owneremail",response.data.loginOwner.email)
//     //             this.props.history.push('/owner/home')
//     //         }else{
//     //             this.setState({
//     //                 message:"Invalid Username or Password"
//     //             })
//     //         }
//     //     })






//   }
//   save() {
//     // console.log("clicked...", this.state.chips, this.input);
//     console.log(this.input[description]);
//     console.log(this.input[amount]);
//     const mean = Math.round(parseInt(this.input.amount)/(this.state.registeredStudents.length ));
//     console.log(mean);
    
//     // for(let value of this.state.chips){
//     //   // console.log({username:this.props.user.username,user:value,inp:this.input});
//     //   instance.post('/addExp',{username:this.props.user.username,user:value,inp:this.input}).then((resp)=>{
//     //     console.log("*****************************00",resp.data.doc);
//     //     var action = userActionCreator(resp.data.doc,'AddUser');
//     //    store.dispatch(action);
//     //     this.props.friend();
//     //   })

      
//     // }

    
//       if (sessionStorage.clickcount) {
//         sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
//       } else {
//         sessionStorage.clickcount = 1;
//       }
//     const billId = sessionStorage.clickcount +1;
    
    
//     const output=[];
//    let tmp;
   
//    for(let i = 0; i < this.state.registeredStudents.length; i++){
//      if(this.state.registeredStudents[i].emailID === localStorage.getItem('email_current'))
//      {
//    tmp = {billId:billId,groupname:this.props.groupname ,amount: (this.input.amount - mean),description:this.input.description,email:this.state.registeredStudents[i].emailID,createddata:this.input.date,paidby: localStorage.getItem('email_current') };
// //    this.props.addbill({
// //     variables: {
// //        billId :billId,
// //        groupname: this.props.groupname,
// //       amount : (this.input.amount - mean),
// //       description:this.input.description,
// //       email:this.state.registeredStudents[i].emailID,
// //       createddata:this.input.date,
// //       paidby: localStorage.getItem('email_current')
// //     }
// // })
// //     .then(response => {
// //         console.log(response.data.loginOwner)
// //         if(response.data.loginOwner){
// //             localStorage.setItem("ownerlogin",response.data.loginOwner.id)
// //             localStorage.setItem("owneremail",response.data.loginOwner.email)
// //             this.props.history.push('/owner/home')
// //         }else{
// //             this.setState({
// //                 message:"Invalid Username or Password"
// //             })
// //         }
// //     })
//      }
//      else{
//       tmp = {billId:billId, groupname: this.props.groupname ,amount: (- mean),description:this.input.description,email:this.state.registeredStudents[i].emailID,createddata:this.input.date,paidby: localStorage.getItem('email_current') };
//   //    this.props.addbill({
//   //     variables: {
//   //        billId :billId,
//   //        groupname: this.props.groupname,
//   //       amount : (- mean),
//   //       description:this.input.description,
//   //       email:this.state.registeredStudents[i].emailID,
//   //       createddata:this.input.date,
//   //       paidby: localStorage.getItem('email_current')
//   //     }
//   // })
//   //     .then(response => {
//   //         console.log(response.data.loginOwner)
//   //         if(response.data.loginOwner){
//   //             localStorage.setItem("ownerlogin",response.data.loginOwner.id)
//   //             localStorage.setItem("owneremail",response.data.loginOwner.email)
//   //             this.props.history.push('/owner/home')
//   //         }else{
//   //             this.setState({
//   //                 message:"Invalid Username or Password"
//   //             })
//   //         }
//   //     })
//      }
//    output.push(tmp);
//   }
        
    
//     //  console.log(output);
      
      
        
//        axios.post(`${serverIp}:${serverPort}/AddExp`, output)
//       .then((response) => {
//         console.log('Addgroup Response Data');
//         console.log(response.data);
//       if (response.data === 'Error') {
//           window.alert('Error while querying the Database');
//         } else {
//           window.alert('Successfully created the bill'); 
		      
//         }
//       }).catch((err) => {
//         console.log(`In catch of axios post call to add bill${err}`);
//         window.alert('Error in add exp API axios Post call');
//        });
      
// }


//         // instance.post('/addExp',{username:this.props.user.username,user:value,inp:this.input}).then((resp)=>{
//         //   console.log("*****************************00",resp.data.doc);
//         //   var action = userActionCreator(resp.data.doc,'AddUser');
//         //  store.dispatch(action);
//         //   this.props.friend();
//         // })
  
//        // window.location.reload(false);
   

//   render() {
//  //   console.log("pa pa")
//     return (
//       <div className="friendPopup">
//         <div className="frnd-content">
//           <div className="frnd-header">
//             <span>Add an expense</span>
//             <button className="float-right" onClick={this.props.friend}>
//               <i class="fas fa-times" />
//             </button>
//           </div>
//           <div className="exp-inp">
//             <label htmlFor="">With you and</label>
//             {/* <input id = "username"  placeholder = "Enter friend name" className = "exp-name" type="text"/> */}
//             <div className="exp-name">
//               {/* <Chips
//                 value={this.state.chips}
//                 onChange={this.onChange}
//                 suggestions={this.props.user.friends}
//               /> */}
//             </div>
//           </div>
//           <div className="exp-inp2">
//             <input
//               id="description"
//               type="text"
//               placeholder="Enter Description"
//               onChange={e => {
//                 this.input[e.target.id] = e.target.value;
//               }}
//             />
//             <input
//               id="amount"
//               type="number"
//               placeholder="Enter Amount"
//               onChange={e => {
//                 this.input[e.target.id] = e.target.value;
//               }}
//             />
//            <br/>
//            {/* value={this.getdate()} */}
//             <input
              
//               id="date"
//               type="date"
//               onChange={e => {
//                 this.input[e.target.id] = e.target.value;
//               }}
//             />
//           </div>

//           <div className="pop-btn pop-btns">
//           <button
//                     onClick={this.save}
//                     className="btn Add"
//                     style={{ width: "100%" }}
//                   >
//                     Save
//                   </button>
//           {/* <Mutation
//                 mutation={addbill}
//                 variables={{
//                   emailId: this.state.emailId.toLowerCase(),
//                   billData: this.input.description,
//                   amount: this.input.amount,
//                   groupname: this.props.groupname ,
//                 }}
//                 onCompleted={(data1) => this.onSignUpSubmit(data1)}
//               >
//                 {(mutation) => (
//                   <button
//                     onClick={mutation}
//                     className="btn Add"
//                     style={{ width: "100%" }}
//                   >
//                     Save
//                   </button>
//                 )}
//               </Mutation>
//               {this.state.alert} */}
          

//             <button className="btn cut" onClick={this.props.friend}>
//               Close
//             </button>
//           </div>
//         </div>
       
//       </div>
//     );
//   }
// }


// export default AddExpense;

import React from "react";
import "../../../styles/frndPop.css";
import Chips, { Chip } from "react-chips";
import {instance} from "../../../utils/AxiosConfig";


import { withRouter } from "react-router-dom";
import axios from 'axios';
import Groups from "../../Groups";
import { serverIp, serverPort } from '../../config';

class AddExpense extends React.Component {
  constructor(props) {
    super(props);
    this.input = {};
    this.state = {
      chips: [],
      registeredStudents:[]
 //registeredStudentsCan't resolve '../../../redux/actionCreator/userAction'
    };
    
  }
  getdate() {
    var today = new Date();

    return (
      today.getFullYear() +
      "-" +
      ("0" + (today.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + today.getDate()).slice(-2)
    );
  }
  onChange = chips => {
    console.log(chips);
    this.setState({ ...this.state, chips });
  };


  componentDidMount() {
    console.log(this.props.groupname);
    axios.post(`${serverIp}:${serverPort}/getStudentsRegisteredInAJob`, { groupname: this.props.groupname })
      .then((response) => {
        console.log('Response data in componentDidMount');
        console.log(response.data);
        this.setState({
         registeredStudents: response.data,//useremail
        });
      }).catch((err) => {
        console.log(`Error in componentDidMount of RegisteredStudents: ${err}`);
        window.alert('Error in connecting to server');
      });
      console.log(this.state.registeredStudents);
  }
  save() {
    // console.log("clicked...", this.state.chips, this.input);
    const mean = Math.round(parseInt(this.input.amount)/(this.state.registeredStudents.length ));
    console.log(mean);
    
    // for(let value of this.state.chips){
    //   // console.log({username:this.props.user.username,user:value,inp:this.input});
    //   instance.post('/addExp',{username:this.props.user.username,user:value,inp:this.input}).then((resp)=>{
    //     console.log("*****************************00",resp.data.doc);
    //     var action = userActionCreator(resp.data.doc,'AddUser');
    //    store.dispatch(action);
    //     this.props.friend();
    //   })

      
    // }

    
      if (sessionStorage.clickcount) {
        sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
      } else {
        sessionStorage.clickcount = 1;
      }
    const billId = sessionStorage.clickcount +1;
    
    
    const output=[];
   let tmp;
   
   for(let i = 0; i < this.state.registeredStudents.length; i++){
     if(this.state.registeredStudents[i].emailID === localStorage.getItem('email_current'))
     {
   tmp = {billId:billId,groupname:this.props.groupname ,amount: (this.input.amount - mean),description:this.input.description,email:this.state.registeredStudents[i].emailID,createddata:this.input.date,paidby: localStorage.getItem('email_current') };
     }
     else{
      tmp = {billId:billId, groupname: this.props.groupname ,amount: (- mean),description:this.input.description,email:this.state.registeredStudents[i].emailID,createddata:this.input.date,paidby: localStorage.getItem('email_current') };
     }
    output.push(tmp);
  }
        
    
      console.log(output);
      
      
        
       axios.post(`${serverIp}:${serverPort}/AddExp`, output)
      .then((response) => {
        console.log('Addgroup Response Data');
        console.log(response.data);
      if (response.data === 'Error') {
          window.alert('Error while querying the Database');
        } else {
          window.alert('Successfully created the bill'); 
		      
        }
      }).catch((err) => {
        console.log(`In catch of axios post call to add bill${err}`);
        window.alert('Error in add exp API axios Post call');
      });


        // instance.post('/addExp',{username:this.props.user.username,user:value,inp:this.input}).then((resp)=>{
        //   console.log("*****************************00",resp.data.doc);
        //   var action = userActionCreator(resp.data.doc,'AddUser');
        //  store.dispatch(action);
        //   this.props.friend();
        // })
  
        window.location.reload(false);
   
  }
  render() {
 //   console.log("pa pa")
    return (
      <div className="friendPopup">
        <div className="frnd-content">
          <div className="frnd-header">
            <span>Add an expense</span>
            <button className="float-right" onClick={this.props.friend}>
              <i class="fas fa-times" />
            </button>
          </div>
          <div className="exp-inp">
            <label htmlFor="">With you and</label>
            {/* <input id = "username"  placeholder = "Enter friend name" className = "exp-name" type="text"/> */}
            <div className="exp-name">
              {/* <Chips
                value={this.state.chips}
                onChange={this.onChange}
                suggestions={this.props.user.friends}
              /> */}
            </div>
          </div>
          <div className="exp-inp2">
            <input
              id="description"
              type="text"
              placeholder="Enter Description"
              onChange={e => {
                this.input[e.target.id] = e.target.value;
              }}
            />
            <input
              id="amount"
              type="number"
              placeholder="Enter Amount"
              onChange={e => {
                this.input[e.target.id] = e.target.value;
              }}
            />
           <br/>
           {/* value={this.getdate()} */}
            <input
              
              id="date"
              type="date"
              onChange={e => {
                this.input[e.target.id] = e.target.value;
              }}
            />
          </div>

          <div className="pop-btn pop-btns">
            <button className="btn Add" onClick={this.save.bind(this)}>
              Save
            </button>

            <button className="btn cut" onClick={this.props.friend}>
              Close
            </button>
          </div>
        </div>
       
      </div>
    );
  }
}


export default AddExpense;





