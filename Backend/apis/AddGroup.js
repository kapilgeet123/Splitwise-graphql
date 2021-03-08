const AddGroup = (req, res,pool) => {
  console.log('Inside addgroup module:');
  console.log(req.body);
  const { groupname } = req.body;
  const {createdby} = req.body;
  const {createdate} = req.body;
  const {grouppicture} = req.body;
  

  let tableName = 'GROUPSDATA';

  
  
        let insertSql = '';
     
          
        insertSql = `INSERT INTO ${tableName} (groupname,createdby,createdate)  VALUES ('${groupname}', '${createdby}', '${createdate}')`;
      console.log(insertSql);
        pool.query(insertSql, (insertError, result) => {
          if (insertError) {
            console.log(insertError);
            res.send('Error');
          }
          console.log(`Group: ${groupname} created in Table: ${tableName} `);
          res.send(`Group: ${groupname} created in Table: ${tableName} `);
        });
}

const AddUserGroup = (req, res,pool) => {
  console.log('Inside addusergroup module:');
  console.log(req.body);
  const { groupname } = req.body;
  const {email1} = req.body;
  const {email2} = req.body;
  const {email3} = req.body;
  

  let tableName = 'USERGROUP';

  
  
        let insertSql = '';
     
          
        insertSql = `INSERT INTO ${tableName} (emailId1,groupname,emailId2,emailId3)  VALUES ('${email1}','${groupname}','${email2}' , '${email3}')`;
      console.log(insertSql);
        pool.query(insertSql, (insertError, result) => {
          if (insertError) {
            console.log(insertError);
            res.send('Error');
          }
          console.log(`Group: ${groupname} created in Table: ${tableName} `);
         // res.send(`Group: ${groupname} created in Table: ${tableName} `);
        });
}






exports.AddGroup = AddGroup;
exports.AddUserGroup = AddUserGroup;










