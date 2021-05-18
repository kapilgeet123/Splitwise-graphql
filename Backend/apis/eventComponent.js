

const getStudentsRegisteredInAEvent = (req, res, pool) => {
  let tableName = 'USERGROUP';
  
  console.log('Inside getStudentsRegisteredInAEvent');
  console.log(req.body); 
  const {email} = req.body;
 
  //const searchSQL = `SELECT groupname FROM ${tableName} WHERE emailID = '${email}'`
  const searchSQL = `SELECT groupname FROM ${tableName} WHERE emailID = '${email}' and invite ="no"`
  pool.query(searchSQL, (searchError, searchResult) => {
    if (searchError) {
      console.log(searchError);
      console.log('Error in getStudentsRegisteredInAEvent');
      res.send('Error');
    }
    console.log("groupnmae found is" +searchResult);
    res.send(searchResult);
  });
};







exports.getStudentsRegisteredInAEvent = getStudentsRegisteredInAEvent;
