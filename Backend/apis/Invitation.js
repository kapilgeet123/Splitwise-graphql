const invitation = (req, res, pool) => {
    console.log('Inside invitation module:');
    console.log(req.body);
    const {email} = req.body;
    let tableName = 'USERGROUP';
  
    const selectSQL = `select groupname from ${tableName} where emailId = '${email}' and invite="yes" `;
    pool.query(selectSQL, (insertError, result) => {
      if (insertError) {
        console.log(insertError);
        console.log('Error in createEvent');
        res.send('Error');
      }
      console.log(`fetched invite data from USERGROUP`);
      console.log(result);
      res.send(result);
    });
  };
  

  const updateusergroup = (req, res, pool) => {
    console.log('Inside updateusergroup module:');
      let tableName = 'USERGROUP';
      console.log(req.body);
      const {groupname} = req.body;
      const {email} = req.body;

  
    const selectSQL = `UPDATE  ${tableName} SET invite = "no" where emailId = '${email}' and invite="yes" `;
  
    pool.query(selectSQL, (insertError, result) => {
      if (insertError) {
        console.log(insertError);
        console.log('Error in createEvent');
        res.send('Error');
      }
      console.log(`fetched invite data from USERGROUP`);
      console.log(result);
      res.send(result);
    });
  };
  
 
  exports.invitation = invitation;
  exports.updateusergroup = updateusergroup;