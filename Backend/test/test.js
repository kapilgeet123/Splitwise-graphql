var app = require('../index');
var chai = require('chai');
chai.use(require('chai-http'));
var expect = require('chai').expect;

var agent = require('chai').request.agent(app);

describe('Splitwise Application', function(){

    it('POST /AddUserGroup - Verifying wheather adduser group created ',function(done){
        agent.post('/AddUserGroup').send({'groupname':"Farewell Party",'emailId':'geet@sjsu.edu','invite':"yes"})
            .then(function(res){
                // console.log(res.body);
                expect(res.text).to.equal("Group:  created");
                done();
            })
            .catch((e) => {
                done(e);
            });
    });
    
    it('POST /leavgroup - Veriying whether user can leave group',function(done){
      agent.post('/leavgroup').send({'email':'x@gmail.com','groupname':"Farewell Party"})
          .then(function(res){
              // console.log(res);
              expect(res.text).to.equal('Clear you dues');
              done();
          })
          .catch((e) => {
              done(e); 
          });
    });

   

    it('POST /signup- Verifying wheather user can sign up',function(done){
      agent.post('/signup').send({'emailId':'g@gmail.com','username':"g",'password':"g123"})
          .then(function(res){
              // console.log(res.body);
              expect(res.text).to.equal('User signup successfully');
              done();
          })
          .catch((e) => {
              done(e);
          });
    });

    it('POST /login - Verifying wheather person can login',function(done){
        agent.post('/login').send({'emailId':'g@gmail.com','password':"g123"})
            .then(function(res){
                expect(res.text).to.equal('sucessfully login');
                done();
            })
            .catch((e) => {
                done(e);
            });
    });

   it('POST /getuserdata - Verifying wheather we can fetch user details',function(done){
        agent.post('/getuserdata').send({'emailId':'g@gmail.com'})
            .then(function(res){
                expect(res.text).to.equal('fetched data from users table');
                done();
            })
            .catch((e) => {
                done(e);
            });
    });






})