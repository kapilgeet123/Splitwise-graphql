 
  const getuser = (req, res,pool) => {
    console.log('Inside getusergroupdata module:');
    let tableName = 'USERS';
 
       
            
          // searchSql = `Select username,emailId from ${tableName} `;
          searchSql = `Select * from ${tableName} `;
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