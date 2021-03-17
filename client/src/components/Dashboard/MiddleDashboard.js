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
       exp : 0,
      owe : [],
      owed : [],
    };
    this.calculate = this.calculate.bind(this);
  // this.showGroup = this.showGroup.bind(this);
   
  }



  componentDidMount() {
    axios.post(`${serverIp}:${serverPort}/gettransactionsdatatotal`)
  
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

calculate(){
  console.log("Inside calculate function")
let values = [];
let temp = 0;
this.state.registeredStudents.map((values) => {
  if(values.sum){
    console.log(values.sum)
    temp += values.sum;
    console.log(temp);
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



  }
  // return exp;




 




render()
{


  return (
    <div className="Middlesd">
     {this.calculate()}
      
      <div className="MidDash">
        <div className="DashHeader">
          <h3>Dashboard</h3>
          <button className="btn float-right settle" onClick={this.props.settle} >
            Settle up
          </button>
          <button className="btn float-right expense" onClick={this.props.friend}>
            Add an expense
          </button>
        </div>

        <div className="total">
          <div className="fitting">
            <label htmlFor="">total balance</label>
            <p className="green">$ {this.exp}</p>
          </div>
          <div className="fitting">
            <label htmlFor="">you owe</label>
            <p style = {{color:"red"}}>$ {(this.exp<0)?this.exp:0}</p>
          </div>
          <div className="fitting">
            <label htmlFor="">you are owed</label>
            <p className="green">$ {(this.exp>0)?this.exp:0}</p>
          </div>
        </div>
      </div>

      <div className="totalCollection">
        <div>
          <label htmlFor="">YOU OWE</label>
        </div>
        <div>
          <label htmlFor="" className="float-right mr-4">
            YOU ARE OWED
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
               <span>you owe ${-(value.sum)}</span>
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
              <span>owes you ${value.sum}</span>
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
          }
};


export default Middle;
