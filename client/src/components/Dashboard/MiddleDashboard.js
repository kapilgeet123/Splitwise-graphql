import React from "react";
import { connect } from "react-redux";
import "../../styles/Dashboard.css";
import axios from 'axios';
import { serverIp, serverPort } from '../config';


class Middle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      registeredStudents: [],
      exp: 0,
      owe : [],
      owed : [],
    };
   this.calculate = this.calculate.bind(this);
  // this.showGroup = this.showGroup.bind(this);
   
  }



  componentDidMount() {
  //  localStorage.setItem("x",1)
    axios.post(`${serverIp}:${serverPort}/gettransactionsdatatotal`)
  
  .then((response) => {
    console.log('Response data in componentDidMount');
    console.log(response.data);
    console.log("middle dashboard componet");
    this.setState({
      registeredStudents: response.data,
    });
  }).catch((err) => {
    console.log(`Error in componentDidMount of fetchdata: ${err}`);
    window.alert('Error in connecting to server');
  });
  console.log("Inside calculate function")
  
  // let values = [];
  // var temp = 0;
  // this.state.registeredStudents.map((values) => {
  //   if(values.sum){
  //     console.log(values.sum)
  //     temp += values.sum;
  //     console.log(this.state.exp);
  //     //   //someone has to give you 
  //            if(values.sum>0){
              
  //              console.log("element.data.ammount>0")
  //             this.state.owed.push(values);
  //             console.log(this.owed);
  //           }//u need to give
  //            else if(values.sum<0){
  //            console.log("element.data.ammount<0");
  //             values.sum = -(values.sum);
  //              this.state.owe.push(values);
  //     //         // owe[owe.length].data.ammount = -( owe[owe.length].data.ammount );
  //              console.log(this.owe);
  //           }
  //         }
  //         else
  //         {
  //          console.log("some error");
  //         }
  //       });








    
  }

calculate(temp){
  console.log("Inside calculate function")
  
let values = [];
 temp = 0;
this.state.registeredStudents.map((values) => {
  if(values.sum){
    console.log(values.sum)
    temp += values.sum;
  
    //   //someone has to give you 
           if(values.sum>0){
            
             console.log("element.data.ammount>0")
            this.state.owed.push(values);
            console.log(this.owed);
          }//u need to give
           else if(values.sum<0){
           console.log("element.data.ammount<0");
            values.sum = -(values.sum);
             this.state.owe.push(values);
    //         // owe[owe.length].data.ammount = -( owe[owe.length].data.ammount );
             console.log(this.owe);
          }
        }
        else
        {
         console.log("some error");
        }

});
console.log(temp);
return(temp);

  }
  // return exp;




 




render()
{

  var temp;
  console.log(this.state.exp);
  let total = this.calculate(temp)
  console.log(total);
// console.log("I m printing dashboard")  
// console.log(localStorage.getItem("x"));
//     if(localStorage.getItem("x")==1)
//     {

//     return(
//      <div>
//        </div>


//     );



//     }

// else{
  
  return (
    <div className="Middlesd">
     {/* {this.calculate(temp)} */}
      
      <div className="MidDash">
        <div className="DashHeader">
          <h3>Dashboard</h3>
          <button className="btn float-right settle" onClick={this.props.settle} >
            Settle up
          </button>
          
        </div>

        <div className="total">
          <div className="fitting">
            <label htmlFor="">total balance</label>
            <p className="green">${total}</p>
          </div>
          <div className="fitting">
            <label htmlFor="">you owe</label>
            <p style = {{color:"red"}}>$ {(total<0)?total:0}</p>
          </div>
          <div className="fitting">
            <label htmlFor="">you are owed</label>
            <p className="green">$ {(total>0)?total:0}</p>
          </div>
        </div>
      </div>

      <div className="totalCollection">
        <div>
          <label htmlFor="">YOU ARE OWED</label>
        </div>
        <div>
          <label htmlFor="" className="float-right mr-4">
            YOU OWE
          </label>
        </div>
      </div>
      <div className = "flex">
        <div className="float-left ml-3 borders">
          <ul>
            {(this.state.owe.length == 0)?<li>You do not owe anything</li>:this.state.owe.map(value=>
             <li>
             {/* <img
               className="imgs"
               src={require("../../images/person-profile.png")}
               alt="" align="left"
             /> */}
             <div className="inline">
               <h5>{value.email}</h5>
               <span>owes you ${-(value.sum)}</span>
             </div>
           </li>
            )}
            {/* <li>
              <img
                className="imgs"
                src={require("../../images/person-profile.png")}
                alt="" align="left"
              />
              <div className="inline">
                <h5>Ram</h5>
                <span>you owe $500</span>
              </div>
            </li> */}
          </ul>
        </div>



        <div>
          <ul>
          {(this.state.owed.length == 0)?<li>You do not owe anything</li>:this.state.owed.map(value=>
            <li>  
            <img
              className="imgs"
              src={require("../../images/person-profile.png")}
              alt=""
              align="left"
            />
            <div className="inline">
              <h5>{value.email}</h5>
              <span>will get ${value.sum}</span>
            </div>
          </li>
            )}

            {/* <li>
              <img
                className="imgs"
                src={require("../../images/person-profile.png")}
                alt=""
                align="left"
              />
              <div className="inline">
                <h5>Ram</h5>
                <span>you owe $500</span>
              </div>
            </li> */}
           
            
          </ul>
        </div>
      </div>
    </div>
  );
 //        }
        }
};


export default Middle;
