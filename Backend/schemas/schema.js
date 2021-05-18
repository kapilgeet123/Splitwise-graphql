const graphql = require("graphql");
const graphqldate = require("graphql-iso-date");
const _ = require("lodash");
var pool = require("../store");
var crypt = require("../models/bcrypt.js");
var async = require("async");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLInt,
  GraphQLList,
} = graphql;

const { GraphQLDate } = graphqldate;

const UserProfileType = new GraphQLObjectType({
  name: "UserProfile",
  fields: () => ({
    user_id: { type: GraphQLInt },
    username: { type: GraphQLString },
    emailId: { type: GraphQLString },
    password: { type: GraphQLString },
    contact_phone: { type: GraphQLString },
    timezone: { type: GraphQLString },
    currency: { type: GraphQLString },
    language: { type: GraphQLString },
    profilepicture: { type: GraphQLString },
    cookie1: { type: GraphQLString },
    cookie2: { type: GraphQLString },
    cookie3: { type: GraphQLString },
    status: { type: GraphQLInt },
    message: { type: GraphQLString },
  }),
});

const GroupProfileType = new GraphQLObjectType({
  name: "GroupProfile",
  fields: () => ({
    emailId : { type: GraphQLString },
    groupid: { type: GraphQLInt },
    groupname: { type: GraphQLString },
    createdby: { type: GraphQLString },
    createdate: { type: GraphQLString },
    grouppicture: { type: GraphQLString },
    cookie1: { type: GraphQLString },
    cookie2: { type: GraphQLString },
    cookie3: { type: GraphQLString },
    status: { type: GraphQLInt },
    message: { type: GraphQLString },
  }),
});

const UserLoginType = new GraphQLObjectType({
  name: "UserLogin",
  fields: () => ({
    cookie1: { type: GraphQLString },
    cookie2: { type: GraphQLString },
    cookie3: { type: GraphQLString },
    status: { type: GraphQLInt },
    message: { type: GraphQLString },
  }),
});
const AddUserGroupType = new GraphQLObjectType({
  name: "AddUserGroup",
  fields: () => ({
    cookie1: { type: GraphQLString },
    cookie2: { type: GraphQLString },
    cookie3: { type: GraphQLString },
    status: { type: GraphQLInt },
    message: { type: GraphQLString },

  }),
});

const AddBillType = new GraphQLObjectType({
  name: "AddBillType",
  fields: () => ({
    cookie1: { type: GraphQLString },
    cookie2: { type: GraphQLString },
    cookie3: { type: GraphQLString },
    status: { type: GraphQLInt },
    message: { type: GraphQLString },
    billId : { type: GraphQLInt },
    groupname: { type: GraphQLString },
   amount : { type: GraphQLString },
   description:{ type: GraphQLString },
   email:{ type: GraphQLString },
   createddata:{ type: GraphQLString },
   paidby: { type: GraphQLString },
  }),
});

const Addusergroup = new GraphQLObjectType({
  name: "Addusergroup",
  fields: () => ({
    emailId :{ type: GraphQLString },
    groupname: { type: GraphQLString },
    invite : { type: GraphQLString },
  }),
});




// const author_insert_input = new GraphQLObjectType({
//   groupname : { type: GraphQLString },
//   email : { type: GraphQLString },
//   invite :{ type: GraphQLString },
// },
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    profilefetch: {
      type: new GraphQLList(UserProfileType),
      args: { user_id: { type: GraphQLInt } },
      resolve(parent, args) {
        return new Promise((resolve, reject) => {
          console.log("inside profile fetch query");
          pool.query("SELECT * FROM USERS", (err, result) => {
            if (err) {
              console.log(err);
            } else {
              const result2 = JSON.stringify(result);
              console.log("result" + result2);
              resolve(result);
              //return ( result2);
            }
          });
        });
      },
    },
    groupnamefetch: {
      type: GroupProfileType,
      args: { emailId: { type: GraphQLString } },
     
      resolve(parent, args) {
        return new Promise((resolve, reject) => {
          emailId = args. emailId;
          console.log("inside groupname fetch query");
          pool.query("SELECT groupname FROM USERGROUP where emailId=?",[emailId], (err, result) => {
            if (err) {
              console.log(err);
            } else {
              console.log("Groupname");
                let cookies = {
                  cookie1: result[0].groupname,
                  cookie2: null,
                  cookie3: null,
                  status: 200,
                  message: "Groupname returned successfully",
                };
                resolve(cookies);
            }
          });
        });
      },
    },



    fetchbill : {
      type: GroupProfileType,
      args: { groupname: { type: GraphQLString } },
     
      resolve(parent, args) {
        return new Promise((resolve, reject) => {
          emailId = args. emailId;
          console.log("inside groupname fetch query");
          pool.query("SELECT * from where  groupname=?",[groupname], (err, result) => {
            if (err) {
              console.log(err);
            } else {
              console.log("Groupname");
                let cookies = {
                  cookie1: result[0].email,
                  cookie2: result[0].billData,
                  cookie3: result[0].amount,
                  cookie4: result[0].groupname,
                  status: 200,
                  message: "Groupname returned successfully",
                };
                resolve(cookies);
            }
          });
        });
      },
    },
//  billfetch:
//  {
//   type: new AddBillType(GroupProfileType),
//   args: { emailId: { type: GraphQLString } },
//   resolve(parent, args) {
//     return new Promise((resolve, reject) => {
//       console.log("inside groupname fetch query");
//       pool.query("SELECT groupname FROM USERGROUP where emailId=?",[emailId], (err, result) => {
//         if (err) {
//           console.log(err);
//         } else {
//           console.log("Groupname");
//             let cookies = {
//               cookie1: result[0].groupname,
//               cookie2: null,
//               cookie3: null,
//               status: 200,
//               message: "Groupname returned successfully",
//             };
//             resolve(cookies);
//         }
//       });
//     });
//   }, 
//  }

// fetchBillInfo = (groupName) => {
//   return new Promise((resolve, reject) => {
//     db.query(
//       "SELECT distinct transactions.groupName , transactions.sender , bill.billData, bill.time, bill.amount FROM transactions RIGHT JOIN bill ON transactions.billId = bill.billId where groupName = ?",
//       [groupName],
//       (err, result) => {
//         resolve(result);
//       }
//     );
//   });
// };
fetchbill: {
  type: GroupProfileType,
  args: { emailId: { type: GraphQLString } },
 
  resolve(parent, args) {
    return new Promise((resolve, reject) => {
      emailId = args. emailId;
      console.log("inside groupname fetch query");
      pool.query("SELECT groupname FROM USERGROUP where emailId=?",[emailId], (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Groupname");
            let cookies = {
              cookie1: result[0].groupname,
              cookie2: null,
              cookie3: null,
              status: 200,
              message: "Groupname returned successfully",
            };
            resolve(cookies);
        }
      });
    });
  },
},






  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    userlogin: {
      type: UserProfileType,
      args: {
        emailId: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parent, args) {
        return new Promise((resolve, reject) => {
          console.log("Inside user Login Mutation");
          var emailId = args.emailId;
          //var lowercaseemail = emailId.toLowerCase();
          //var trimemail = lowercaseemail.trim();
          var password = args.password;

          pool.query(
            "SELECT * FROM USERS WHERE emailId = ?",
            [emailId],
            (err, rows) => {
              if (err) {
                console.log("User does not exist");
                let cookies = {
                  cookie1: null,
                  cookie2: null,
                  cookie3: null,
                  status: 401,
                  message: "User does not exist",
                };
                resolve(cookies);
              } else {
                console.log(rows);
                if (rows.length > 0) {
                  // Check if password matches
                  crypt.compareHash(
                    password,
                    rows[0].password,
                    function (err, isMatch) {
                      if (isMatch && !err) {
                        console.log("User found in DB");
                        let cookies = {
                          cookie1: "usercookie",
                          cookie2: emailId,
                          cookie3: rows[0].username,
                          password: password,
                          timezone: rows[0].timezone,
                          contact_phone: rows[0].phonenumber,
                          currency: rows[0].currency,
                          language: rows[0].language,
                          profilepicture: rows[0].profilepicture,
                          status: 200,
                          message: "Login Successful",
                        };
                        resolve(cookies);
                      } else {
                        console.log(
                          "Authentication failed. Passwords did not match."
                        );
                        let cookies = {
                          cookie1: null,
                          cookie2: null,
                          cookie3: null,
                          status: 402,
                          message:
                            "Authentication failed. Passwords did not match.",
                        };
                        resolve(cookies);
                      }
                    }
                  );
                } else {
                  console.log("Authentication failed. User does not exist.");
                  let cookies = {
                    cookie1: null,
                    cookie2: null,
                    cookie3: null,
                    status: 403,
                    message: "Authentication failed. User does not exist.",
                  };
                  resolve(cookies);
                }
              }
            }
          );
        });
      },
    },

    usersignup: {
      type: UserLoginType,
      args: {
        username : {type: GraphQLString},
        emailId: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parent, args) {
        return new Promise((resolve, reject) => {
          console.log("In Signup Mutation");
          emailId = args.emailId.toLowerCase();

          var today = new Date();
          var year = today.getFullYear();

          pool.query(
            "SELECT * FROM USERS WHERE emailId = ?",
            [emailId],
            (err, rows) => {
              if (err) {
                console.log(err);
                console.log("unable to read the database");
              } else {
                if (rows.length > 0) {
                  console.log("User already exists");
                  let cookies = {
                    cookie1: null,
                    cookie2: null,
                    cookie3: null,
                    status: 400,
                    message: "User already exists",
                  };
                  resolve(cookies);
                } else {
                  crypt.createHash(args.password, function (response) {
                    encryptedPassword = response;

                    var userData = {
                      username: args.username,
                      emailId: args.emailId,
                      password: encryptedPassword,
                    };

                    //Save the user in database
                    pool.query(
                      "INSERT INTO USERS SET ?",
                      userData,
                      function (err, rows) {
                        if (err) {
                          console.log("unable to insert into database");
                        } else {
                          console.log("User Added");
                          let cookies = {
                            cookie1: "usercookie",
                            cookie2: emailId,
                            cookie3: args.username,
                            password: args.password,
                            status: 200,
                            message: "User added",
                          };
                          resolve(cookies);
                        }
                      }
                    );
                  });
                }
              }
            }
          );
        });
      },
    },

    addgroup: {     
      type: GroupProfileType,
      args: {
        groupname: { type: GraphQLString },
        createdby: { type: GraphQLString },
        createdate: { type: GraphQLString },
        grouppicture : { type: GraphQLString },
      },
      resolve(parent, args) {
        return new Promise((resolve, reject) => {
          console.log("In Addgroup Mutation");
          groupname = args.groupname.toLowerCase();
          console.log(groupname);
          var today = new Date();
          var year = today.getFullYear();
        //   pool.query(
        //     "SELECT * FROM GROUPSDATA WHERE groupname = ?",
        //     [groupname],
        //     (err, rows) => {
        //       if (err) {
        //         console.log(err);
        //         console.log("unable to read the database");
        //       } else {
        //         if (rows.length > 0) {
        //           console.log("Group already exists");
        //           let cookies = {
        //             cookie1: null,
        //             cookie2: null,
        //             cookie3: null,
        //             status: 400,
        //             message: "Group already exists",
        //           };
        //           resolve(cookies);
        //         } else {
                

                    var groupData = {
                        groupname: args.groupname,
                        createdby: args.createdby,
                        createdate: today,
                        grouppicture : args.grouppicture,
                    };

                    //Save the user in database
                    pool.query(
                      "INSERT INTO GROUPSDATA SET ?",
                      groupData,
                      function (err, rows) {
                        if (err) {
                            console.log(err);
                          console.log("unable to insert into database");
                        } else {
                          console.log("Group Added");
                          let cookies = {
                            cookie1: "usercookie",
                            cookie2: groupname,
                            status: 200,
                            message: "Group added",
                          };
                          resolve(cookies);
                        }
                      }
                    );
                //  }
            //  }
           // })

        })
    }
},

// addusergroup: {
  
//   type: new GraphQLList(AddUserGroupType),
  
//   args: {
//      output: { type: new GraphQLList(Addusergroup) }  
//   },
//   resolve(parent, args) {
//     return new Promise((resolve, reject) => {
//       console.log("Inside addgroupuser Mutation");
//       j = args.body;
//       let values = j.reduce((o, a) => {
//         let ini = [];
//         ini.push(a.groupname);
//         ini.push(a.email);
//         ini.push(a.invite);
//         o.push(ini);
//         return o;
//       }, []);
//       console.log(values);
//       var emailId = args.emailId;
//       //var lowercaseemail = emailId.toLowerCase();
//       //var trimemail = lowercaseemail.trim();

//       pool.query(
//         "INSERT INTO USERGROUP  (groupname,emailId,invite) VALUES ?",
//         [values],
//         (err, rows) => {
//           if (err) {
//             console.log("some error occured");
//             let cookies = {
//               cookie1: null,
//               cookie2: null,
//               cookie3: null,
//               status: 401,
//               message: "some error occured",
//             };
//             resolve(cookies);
//           } else {
//             console.log(rows);

//             // Check if password matches

//             console.log("addusergroup inserted in DB");
//             let cookies = {
//               cookie1: "addusergroupcookie",
//               // cookie2: emailId,
//               // cookie3: rows[0].username,
//               // password: password,
//               // timezone: rows[0].timezone,
//               // contact_phone: rows[0].phonenumber,
//               // currency: rows[0].currency,
//               // language: rows[0].language,
//               // profilepicture: rows[0].profilepicture,
//               status: 200,
//               message: "Addusergroup Successful",
//             };
//             resolve(cookies);
//           }
//         }
//       );
//     });
//   },
// },


addbill:
{
  type: AddBillType,
  args: {
    emailId: { type: GraphQLString },
      billData: { type: GraphQLString },
      amount: { type: GraphQLString },
      groupname:  { type: GraphQLString },
  },
  resolve(parent, args) {
    return new Promise((resolve, reject) => {

      var bill = {
        email : args.emailId,
        billData : args.billData,
        amount: args.amount,
        groupname : args.groupname,
    };
      console.log("Inside addbilltype query");
      pool.query(
        "INSERT INTO BILLS SET ?",
        bill,
        (err, rows) => {
          if (err) {
            console.log(err);
            console.log("some error occured");
            let cookies = {
              cookie1: null,
              cookie2: null,
              cookie3: null,
              status: 401,
              message: "some error occured",
            };
            resolve(cookies);
          } else {
            console.log(rows);

            // Check if password matches

            console.log("bills inserted in DB");
            let cookies = {
              cookie1: "addbillcookie",
              // cookie2: emailId,
              // cookie3: rows[0].username,
              // password: password,
              // timezone: rows[0].timezone,
              // contact_phone: rows[0].phonenumber,
              // currency: rows[0].currency,
              // language: rows[0].language,
              // profilepicture: rows[0].profilepicture,
              status: 200,
              message: "bill add Successful",
            };
            resolve(cookies);
          }
        }
      );
      
    })
  }

},


editviewprofile:{
  type: UserProfileType,
  args: {
    // emailId: { type: GraphQLString },
    //   billData: { type: GraphQLString },
    //   amount: { type: GraphQLString },
    //   groupname:  { type: GraphQLString },
    emailId : { type: GraphQLString },
                                              username :{ type: GraphQLString },
                                              password :{ type: GraphQLString },
                                              email :{ type: GraphQLString },
                                              language: { type: GraphQLString },
                                              currency:{ type: GraphQLString },
                                              timezone:{ type: GraphQLString },
                                              file : { type: GraphQLString },
                                              contactphone :{ type: GraphQLString },
  
  
  
  },

  resolve(parent, args) {
    return new Promise((resolve, reject) => {
       emailId = args.emailId;
      var updateuser = {
        
                                              "username" : args.username,
                                              "password" : args.password,
                                              "emailId" : args.email,
                                              "language": args.language,
                                              "currency" :args.currency,
                                              "timezone" : args.timezone,
                                              
                                              "phonenumber" : args.contactphone,
    };
      console.log("update usertype query");
      pool.query(
        // "INSERT INTO BILLS SET ?",
        "UPDATE USERS SET ? where emailId = ?",[updateuser, emailId],
        
        (err, rows) => {
          if (err) {
            console.log(err);
            console.log("some error while updating user occured");
            let cookies = {
              cookie1: null,
              cookie2: null,
              cookie3: null,
              status: 401,
              message: "some error while updating user occured",
            };
            resolve(cookies);
          } else {
            console.log(rows);

            // Check if password matches

            console.log("user updated");
            let cookies = {
              cookie1: "userupdated",
              cookie2: args.email,
              cookie3: args.username,
              password: args.password,
              timezone: args.timezone,
              contact_phone: args.contactphone,
              currency: args.currency,
              language: args.language,
             
              status: 200,
              message: "user updated Successfully",
            };
            resolve(cookies);
          }
        }
      );
      
    })
  }
},















},
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
