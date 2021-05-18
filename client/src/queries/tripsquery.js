import { gql } from 'apollo-boost';

const tripsfetchquery = gql`
    query TravellerTripListings($bookedBy: String){
        travellertripsfetch(bookedBy: $bookedBy) {
            bookedBy,
            bookedFrom,
            bookedTo,
            propertyID,
            NoOfGuests,
            price,
            bookingID,
            listedBy,
            startDate,
            endDate,
            sleeps,
            bedrooms,
            bathrooms,
            baseRate,
            country,
            city,
            state,
            zipcode,
            headline,
            description,
            currency,
            minStay,
            amenities,
            streetAddress,
            propertyType,
            uid,
            image1,
            image2,
            image3,
            image4,
            image5,
        }
    }
`;

// const groupnamefetch = gql`
// query GroupnameListings($emailId: String){
//     groupnamefetch(emailId: $emailId) {
//          groupname,
//         status,
//    message,      
//     }
//  }
// `;
const billfetch = gql`
query($emailId: String){
    groupnamefetch(emailId: $emailId){
    groupname,
  status,
     message, 

     cookie1,
      cookie2,
      cookie3,
    status,
    message,  
    }
}
`; 
const fetchbill = gql`
query Addexp(
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


 const groupnamefetch = gql`
query($emailId: String){
    groupnamefetch(emailId: $emailId){
    groupname,
  status,
     message, 

     cookie1,
      cookie2,
      cookie3,
    status,
    message,  
    }
}
`; 
const fetchuser = gql`
query($emailId: String){
    fetchuser(emailId: $emailId){
    groupname,
  status,
     message, 

     cookie1,
      cookie2,
      cookie3,
    status,
    message,  
    }
}
`; 

const getPropertyDetails = gql`
mutation($id:ID!){
    getPropertyDetails(id:$id){
        id,
        place_name,
        headline,
        description,
        street,
        apt,
        location_city,
        state,
        zipcode,
        country,
        bedrooms,
        bathrooms,
        accomodates,
        price
    }
}
`;
export { tripsfetchquery,groupnamefetch };