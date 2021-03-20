 
  const getuser = (req, res,pool) => {
    console.log('Inside getusergroupdata module:');
    let tableName = 'USERS';
    const {emailId} = req.body;
 
       
            
          // searchSql = `Select username,emailId from ${tableName} `;
          searchSql = `Select * FROM ${tableName} WHERE emailId = '${emailId}'`;
        console.log(searchSql);
          pool.query(searchSql, (insertError, result) => {
            if (insertError) {
              console.log(insertError);
              res.send('Error');
            }
            console.log("fetched data from users table ");
          res.send(result);
       
            console.log(result);
         });
  }
 
 
  

  exports.getuser = getuser;


  