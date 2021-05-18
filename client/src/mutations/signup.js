import { gql } from "apollo-boost";

const usersignupmutation = gql`
  mutation UserSignup($username: String,$emailId: String, $password:String) {
    usersignup(username: $username, emailId: $emailId, password:$password) {
      cookie1
      cookie2
      cookie3
      status
      message
    }
  }
`;
const userloginmutation = gql`
  mutation Userlogin($emailId: String, $password: String) {
    userlogin(emailId: $emailId, password: $password) {
      cookie1
      cookie2
      cookie3
      password
      timezone
      contact_phone
      currency
      language
      profilepicture
      status
      message
    }
  }
`;

const addgroupmutation = gql`
  mutation Addgroup(
    $groupname: String
    $createdby: String
    $createdate: String
    $grouppicture: String
  ) {
    addgroup(groupname: $groupname, createdby: $createdby , createdate :$createdate, grouppicture : $grouppicture) {
      cookie1
      cookie2
      status
      message
    }
  }
`;
const addbill = gql`
  mutation Addexp(
    $username: String
    $emailId: String
    $password: String
    
  ) {
    addbill(username: $username, emailId: $emailId , password :$password) {
      cookie1
      cookie2
      status
      message
    }
  }
`;


const fetchbill = gql`
  mutation Addexp(
    $groupname: String,  
  ) {
    fetchbill(groupname: $groupname) {
      cookie1,
       cookie2,
    cookie3,
                  cookie4,
                  status,
                  message,
    }
  }
`;




const editviewprofile = gql`
  mutation Addexp(
     $emailId :String
     $email : String
     $username : String
     $contactphone : String
     $password : String
    $currency : String
    $timezone :String
   $language : String

  ) {
    editviewprofile(emailId: $emailId, email : $email, username: $username, contactphone : $contactphone, password :$password, currency :$currency,timezone:$timezone,language:$language) {
      cookie1,
       cookie2,
    cookie3,
                 
                  status,
                  message,
    }
  }
`;


export { usersignupmutation, userloginmutation, addgroupmutation,addbill,fetchbill,editviewprofile };
