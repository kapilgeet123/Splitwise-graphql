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


const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
      
  

    // let j = req.body;
    //   const groupname = req.body.groupname;
    //   const email = req.body.email;
    //   let values=j.reduce((o,a)=>{
    //     let ini=[];
    //     ini.push(a.groupname);
    //     ini.push(a.email);
    //     ini.push(a.invite);
    //     o.push(ini);
    //     return o
    // },[])
    // console.log(values);

    //   let tableName = 'USERGROUP';

    //         let insertSql = '';

    //          insertSql = `INSERT INTO ${tableName}  (groupname,emailId,invite) VALUES ?`;
    //       console.log(insertSql);
    //          pool.query(insertSql,[values], (insertError, result) => {

    //           if (insertError) {
    //             console.log(insertError);
    //             res.send('Error');
    //           }
    //           console.log(`Group:  created in Table: ${tableName} `);
    //        res.send(`Group:  created in Table: ${tableName} `);

    //      console.log("jhala");
    //        });
    // }

    addusergroup: {
      type: new GraphQLList(AddUserGroupType),
      
      args: {
        groupname: { type: GraphQLString },
        email: { type: GraphQLString },
        invite: { type: GraphQLString },
      },
      resolve(parent, args) {
        return new Promise((resolve, reject) => {
          console.log("Inside addgroupuser Mutation");
          j = args.body;
          let values = j.reduce((o, a) => {
            let ini = [];
            ini.push(a.groupname);
            ini.push(a.email);
            ini.push(a.invite);
            o.push(ini);
            return o;
          }, []);
          console.log(values);
          var emailId = args.emailId;
          //var lowercaseemail = emailId.toLowerCase();
          //var trimemail = lowercaseemail.trim();

          pool.query(
            "INSERT INTO USERGROUP  (groupname,emailId,invite) VALUES ?",
            [values],
            (err, rows) => {
              if (err) {
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

                console.log("addusergroup inserted in DB");
                let cookies = {
                  cookie1: "addusergroupcookie",
                  // cookie2: emailId,
                  // cookie3: rows[0].username,
                  // password: password,
                  // timezone: rows[0].timezone,
                  // contact_phone: rows[0].phonenumber,
                  // currency: rows[0].currency,
                  // language: rows[0].language,
                  // profilepicture: rows[0].profilepicture,
                  status: 200,
                  message: "Addusergroup Successful",
                };
                resolve(cookies);
              }
            }
          );
        });
      },
    },
  
  
  
  
  },
});

module.exports = new GraphQLSchema({
  mutation: Mutation,
});
