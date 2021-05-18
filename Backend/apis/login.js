const login = (req, res,bcrypt,pool) => {
  console.log('Inside login module:');
  console.log(req.body);
  const { emailId } = req.body;
  const { password } = req.body;
  let tableName = 'USERS';

  // pool.query("SELECT * FROM USERS",function(err,res){

  //   if(err) throw err;

  //   console.log(res);
  // });


  const userPresentSql = `SELECT * FROM USERS WHERE emailId = '${emailId}'`;
  


  pool.query(userPresentSql, (searchError, searchResult) => {
    if (searchError) {
      console.log(searchError);
      res.send('Error');
    }
    if (searchResult.length === 0) {
      console.log(`User with email: ${emailId} is not present in table: ${tableName}`);
      res.send('User Not Present');
    } else {
      const foundUser = searchResult[0];
      console.log(`User found in table ${tableName}`);
      console.log(foundUser);
      //res.send (foundUser);
      bcrypt.compare(password, foundUser.password, (pwdCompareError, pwdCompareResult) => {
        if (pwdCompareError) {
          console.log(`Password Compare Error: ${pwdCompareError}`);
          res.send('Error in comparing Password');
        }
        console.log("pwd compare");
        console.log(pwdCompareResult);
        if (!pwdCompareResult) {
          res.send('Wrong Password');
        } else {
          console.log('Correct password given');
          res.send(foundUser);
        }
      });

    }
  });
 };

exports.login = login;
