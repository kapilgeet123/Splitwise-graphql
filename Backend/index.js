// inbuilt package imports
const express = require('express');
const {graphqlHTTP} = require('express-graphql');
//const Config = require('./config');
const schema = require('./schemas/schema');
const groupschema = require('./schemas/groupschema');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
//const cors = require('cors');
const multer = require('multer');
//const pool = require('./DS_Store');
const Config = require('./config');
const Signup = require('./apis/signup');
const Login = require('./apis/login');
const JobComponent = require('./apis/jobComponent');
const EventComponent = require('./apis/eventComponent');
const AddGroup = require('./apis/AddGroup');
const AddExp = require('./apis/AddExp');
const Invitation = require('./apis/Invitation');
const Adduser = require('./apis/Adduser');
//const app = express();

//const saltRounds = 10;
// App Instance
var app = express();
const pool = require('./store');

//use cors to allow cross origin resource sharing
var cors = require('cors');

app.use(cors({ origin: `${Config.applicationAddress}:${Config.applicationPort}`, credentials: true }));


//Allow Access Control
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  res.setHeader('Cache-Control', 'no-cache');
  next();
})



app.use("/graphql",graphqlHTTP({
  schema,
  groupschema,
  graphiql: true
}));

pool.query('select * from USERS',  function(err, rows){
  if(err) throw err;
  else {
    console.log("Connection to DB established");
   // console.log(rows);
  }
});  

const saltRounds = 10;

// my api package imports
// const pool = require('./Database');

// setting view engine
app.set('view engine', 'ejs');
// use body parser to parse JSON and urlencoded request bodies
app.use(bodyParser.json({type: 'application/json'}));
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// use cookie parser to parse request headers
app.use(cookieParser());
// use session to store user data between HTTP requests
app.use(session({
  secret: 'sarthak_handshake_secure_string',
  resave: false,
  saveUninitialized: true,
}));
app.use(cors({ origin: `${Config.applicationAddress}:${Config.applicationPort}`, credentials: true }));
app.use(express.static('./ProfilePictures/Company'));
app.use(express.static('./ProfilePictures/Student'));
app.use(express.static('./ProfilePictures/Common'));
app.use(express.static('./Resume/JobApplication'));
app.use(express.static('./WebsiteImages'));

app.post('/signup', (req, res) => {
  Signup.signup(req, res, bcrypt, saltRounds, pool);
});

app.post('/login', (req, res) => {
  Login.login(req, res, bcrypt, pool);
});


app.use("/homeaway/graphql",graphqlHTTP({
  schema,
  graphiql: true
}));





app.post('/getStudentsRegisteredInAJob', (req, res) => {
  JobComponent.getStudentsRegisteredInAJob(req, res, pool);
});


app.post('/AddGroup', (req, res) => {
  AddGroup.AddGroup(req, res, pool);
});
app.post('/AddUserGroup', (req, res) => {
  AddGroup.AddUserGroup(req, res, pool);
});
const studentResumeFileStorage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './Resume/JobApplication');
  },
  filename(req, file, cb) {
    cb(null, `student_${req.body.studentId}_${req.body.jobPostId}.${file.originalname.split('.')[file.originalname.split('.').length - 1]}`);
  },
});

const studentResumeFileUpload = multer({ storage: studentResumeFileStorage });


app.post('/getStudentsRegisteredInAEvent', (req, res) => {
  EventComponent.getStudentsRegisteredInAEvent(req, res, pool);
});





const companyProfilePictureStorage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './ProfilePictures/Company');
  },
  filename(req, file, cb) {
    cb(null, `company_${req.body.company_id}.${file.originalname.split('.')[file.originalname.split('.').length - 1]}`);
  },
});

const companyProfilePictureUpload = multer({ storage: companyProfilePictureStorage });


app.post('/fetchcomputedresult', (req, res) => {
  AddExp.FetchExp(req, res, pool);
});


app.post('/fetchcomputedresulttotal', (req, res) => {
  AddExp.FetchExptotal(req, res, pool);
});
const studentProfilePictureStorage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './ProfilePictures/Student');
  },
  filename(req, file, cb) {
    cb(null, `student_${req.body.student_id}.${file.originalname.split('.')[file.originalname.split('.').length - 1]}`);
  },
});

const studentProfilePictureUpload = multer({ storage: studentProfilePictureStorage });


app.post('/AddExp', (req, res) => {
  AddExp.AddExp(req,res,pool);
});
module.exports = app;

app.post('/gettransactionsdata', (req, res) => {
  AddExp.Getbilldata(req,res,pool);
});

app.post('/gettransactionsdatatotal', (req, res) => {
  AddExp.FetchExptotal(req,res,pool);
});

app.post('/fetchinvitation', (req, res) => {
  Invitation.invitation(req,res,pool);
});
app.post('/updateusergroup', (req, res) => {
  Invitation.updateusergroup(req,res,pool);
});
app.post('/updateexp', (req, res) => {
  AddExp.ExpU(req,res,pool);
});

app.post('/getuserdata', (req, res) => {
  Adduser.getuser(req,res,pool);
});
module.exports = app;
app.post('/gettransactionsdatatot', (req, res) => {
  AddExp.Totaltransaction(req,res,pool);
});
app.post('/leavgroup', (req, res) => {
  AddGroup.LeaveGroup(req,res,pool);
});

app.post('/updateeditvalues', (req, res) => {
  AddExp.updateeditvalues(req,res,pool);
});

const server = app.listen(3001, () => {
  console.log('Server listening on port 3001');
});































































// const saltRounds = 10;

// // my api package imports
// // const pool = require('./Database');
// const pool = require('./DS_Store');
// const Config = require('./config');
// const Signup = require('./apis/signup');
// const Login = require('./apis/login');
// const JobComponent = require('./apis/jobComponent');
// const EventComponent = require('./apis/eventComponent');
// const AddGroup = require('./apis/AddGroup');
// const AddExp = require('./apis/AddExp');
// const Invitation = require('./apis/Invitation');
// const Adduser = require('./apis/Adduser');
// const app = express();
// // setting view engine
// app.set('view engine', 'ejs');
// // use body parser to parse JSON and urlencoded request bodies
// app.use(bodyParser.json({type: 'application/json'}));
// //app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// // use cookie parser to parse request headers
// app.use(cookieParser());
// // use session to store user data between HTTP requests
// app.use(session({
//   secret: 'sarthak_handshake_secure_string',
//   resave: false,
//   saveUninitialized: true,
// }));
// app.use(cors({ origin: `${Config.applicationAddress}:${Config.applicationPort}`, credentials: true }));
// app.use(express.static('./ProfilePictures/Company'));
// app.use(express.static('./ProfilePictures/Student'));
// app.use(express.static('./ProfilePictures/Common'));
// app.use(express.static('./Resume/JobApplication'));
// app.use(express.static('./WebsiteImages'));

// app.post('/signup', (req, res) => {
//   Signup.signup(req, res, bcrypt, saltRounds, pool);
// });

// app.post('/login', (req, res) => {
//   Login.login(req, res, bcrypt, pool);
// });


// app.use("/homeaway/graphql",graphqlHTTP({
//   schema,
//   graphiql: true
// }));

// const server = app.listen(3001, () => {
//   console.log('Server listening on port 3001');
// });



// app.post('/getStudentsRegisteredInAJob', (req, res) => {
//   JobComponent.getStudentsRegisteredInAJob(req, res, pool);
// });


// app.post('/AddGroup', (req, res) => {
//   AddGroup.AddGroup(req, res, pool);
// });
// app.post('/AddUserGroup', (req, res) => {
//   AddGroup.AddUserGroup(req, res, pool);
// });
// const studentResumeFileStorage = multer.diskStorage({
//   destination(req, file, cb) {
//     cb(null, './Resume/JobApplication');
//   },
//   filename(req, file, cb) {
//     cb(null, `student_${req.body.studentId}_${req.body.jobPostId}.${file.originalname.split('.')[file.originalname.split('.').length - 1]}`);
//   },
// });

// const studentResumeFileUpload = multer({ storage: studentResumeFileStorage });


// app.post('/getStudentsRegisteredInAEvent', (req, res) => {
//   EventComponent.getStudentsRegisteredInAEvent(req, res, pool);
// });





// const companyProfilePictureStorage = multer.diskStorage({
//   destination(req, file, cb) {
//     cb(null, './ProfilePictures/Company');
//   },
//   filename(req, file, cb) {
//     cb(null, `company_${req.body.company_id}.${file.originalname.split('.')[file.originalname.split('.').length - 1]}`);
//   },
// });

// const companyProfilePictureUpload = multer({ storage: companyProfilePictureStorage });


// app.post('/fetchcomputedresult', (req, res) => {
//   AddExp.FetchExp(req, res, pool);
// });


// app.post('/fetchcomputedresulttotal', (req, res) => {
//   AddExp.FetchExptotal(req, res, pool);
// });
// const studentProfilePictureStorage = multer.diskStorage({
//   destination(req, file, cb) {
//     cb(null, './ProfilePictures/Student');
//   },
//   filename(req, file, cb) {
//     cb(null, `student_${req.body.student_id}.${file.originalname.split('.')[file.originalname.split('.').length - 1]}`);
//   },
// });

// const studentProfilePictureUpload = multer({ storage: studentProfilePictureStorage });


// app.post('/AddExp', (req, res) => {
//   AddExp.AddExp(req,res,pool);
// });
// module.exports = app;

// app.post('/gettransactionsdata', (req, res) => {
//   AddExp.Getbilldata(req,res,pool);
// });

// app.post('/gettransactionsdatatotal', (req, res) => {
//   AddExp.FetchExptotal(req,res,pool);
// });

// app.post('/fetchinvitation', (req, res) => {
//   Invitation.invitation(req,res,pool);
// });
// app.post('/updateusergroup', (req, res) => {
//   Invitation.updateusergroup(req,res,pool);
// });
// app.post('/updateexp', (req, res) => {
//   AddExp.ExpU(req,res,pool);
// });

// app.post('/getuserdata', (req, res) => {
//   Adduser.getuser(req,res,pool);
// });
// module.exports = app;
// app.post('/gettransactionsdatatot', (req, res) => {
//   AddExp.Totaltransaction(req,res,pool);
// });
// app.post('/leavgroup', (req, res) => {
//   AddGroup.LeaveGroup(req,res,pool);
// });

// app.post('/updateeditvalues', (req, res) => {
//   AddExp.updateeditvalues(req,res,pool);
// });

// const server = app.listen(3001, () => {
//   console.log('Server listening on port 3001');
// });






