import React from 'react';
import {
  Col, Button, Form, FormGroup, Label, Input,
} from 'reactstrap';
import { Image } from 'react-bootstrap';
import axios from 'axios';
import { serverIp, serverPort } from '../components/config';
//import CustomNavBar from '../../NavBar/CustomNavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        email : '',
        username : '',
        contactphone : '',
        password : '',
       currency : '',
       timezone :'',
      language : '',
      profile_picture_url: '',
    };
    this.editProfileHandler = this.editProfileHandler.bind(this);
    this.capitalize = this.capitalize.bind(this);
  }

  componentDidMount() {
   
      this.setState({
        email : localStorage.getItem('email_current'),
     username : localStorage.getItem('username'),
     contactphone : localStorage.getItem('contact_phone'),
     password : localStorage.getItem("password"),
    currency : localStorage.getItem("currency"),
    timezone :localStorage.getItem("timezone"),
   language : localStorage.getItem("language"),
   profile_picture_url: localStorage.getItem('profilepicture'),
      });
    } 
  

  capitalize(word, splitParam = ' ') {
    if (word) {
      word = word.split(splitParam).map((eachWord) => eachWord.split(' ').map((each) => each.charAt(0).toUpperCase() + each.substring(1)).join(' '));
      word = word.join(splitParam);
      return word;
    } return '';
  }

  editProfileHandler(e) {
    e.preventDefault();
    window.location.href = '/ViewProfile';
  }
  defaultcurrency(currency)
  {
    console.log("indside default cuurecy")
    let Data     = ["USD", "KWD", "BHD", "GBP", "EUR", "CAD"];
    var index = Data.indexOf(currency);
    console.log(currency);
    console.log(index);
    if (index > -1) {
       Data.splice(index, 1);
}
    console.log(Data);
  
return Data;
    };
  

    defaultlanguage(language)
  {
    console.log("indside default language")
    let Data     = ["Deutsch", "Español", "Français", "Bahasa Indonesia", "Italiano", "Nederlands"];
    var index = Data.indexOf(language);
    
    console.log(index);
    if (index > -1) {
       Data.splice(index, 1);
}
    console.log(Data);
  
return Data;
    };
    defaulttimezone(timezone)
    {
      console.log("indside default timezone")
      let Data     = ["(GMT-11:00) American Samoa", "(GMT-11:00) Midway Island", "(GMT-10:00) Hawaii", "(GMT-09:00) Alaska", "(GMT-08:00) Tijuana", "(GMT-07:00) Arizona"];
      var index = Data.indexOf(timezone);
    
      console.log(index);
      if (index > -1) {
         Data.splice(index, 1);
  }
      console.log(Data);
    
  return Data;
      };
  

  render() {
    const array =  this.defaultcurrency(this.currency);
  const array1 =  this.defaultlanguage(this.language);
  const array2 = this.defaulttimezone(this.timezone);
 console.log(array);

 console.log(this.props.event);
 const values = [];
    
    let profileSrc = 'default.png';
    console.log(this.state.profile_picture_url)
    if (this.state.profile_picture_url !== 'undefined') {
      console.log("Inside profile picture")
      // profileSrc = 'default.png';
      profileSrc = this.state.profile_picture_url;
    }
    let buttons = '';
    if (!this.props.match.params.id) {
      buttons = (
        <FormGroup check row>
          <Col sm={{ size: 4, offset: 5 }}>
            <Button style={{ width: 150, height: 50 }}>Edit</Button>
          </Col>
        </FormGroup>
      );
    }
    return (
      <div>
        
        <br />

        <div>
          <Form onSubmit={this.editProfileHandler}>
            <FormGroup row>
              <Col xs={6} md={4}>
                <Image
                  src={`${serverIp}:${serverPort}/${profileSrc}`}
                  alt="Profile Picture"
                  roundedCircle
                  style={{ height: 200, width: 200 }}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="companyName" sm={2}>Your Name</Label>
              <Col sm={6}>
                <Input type="text" name="companyName" id="companyName" value={this.capitalize(this.state.username)} disabled />
              </Col>
            </FormGroup>
            <br />
            <FormGroup row>
              <Label for="contactEmail" sm={2}> Email</Label>
              <Col sm={3}>
                <Input type="email" name="contactEmail" id="contactEmail" value={this.state.email} disabled />
              </Col>
              <Label for="contactPhone" sm={2}>Contact Phone</Label>
              <Col sm={3}>
                <Input type="number" name="contactNumber" id="contactNumber" value={this.state.contactphone} disabled />
              </Col>
            </FormGroup>
            <br />
            <FormGroup row>
              <Label for="city" sm={1}>Password</Label>
              <Col sm={2}>
                <Input type="text" name="city" id="city" value={this.capitalize(this.state.password)} disabled />
              </Col>
              <Label for="state" sm={1}>Currency</Label>
              <Col sm={2}>
                <Input type="select" name="currency" id="currency" value={this.capitalize(this.state.currency)} disabled >
                {array.map((text) => (
                <option value={text}>
                    {text}
                </option>
            ))}

                </Input>
              </Col>
              <Label for="country" sm={1}>Language</Label>
              <Col sm={2}>
                <Input type="select" name="language" id="language" value={this.capitalize(this.state.language)} disabled >
                {array1.map((text) => (
                <option value={text}>
                    {text}
                </option>
            ))}

                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleText" sm={2}>Timezone</Label>
              <Col sm={8}>
                <Input type="select" name="text" id="exampleText"  value={this.state.timezone} disabled >
                {array2.map((text) => (
                <option value={text}>
                    {text}
                </option>
            ))}
                


                </Input>
              </Col>
            </FormGroup>
            {buttons}
          </Form>
        </div>
      </div>
    );
  }
}

export default UserProfile;
