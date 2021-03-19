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
  let j = req.body;
  // const groupname = req.body.groupname;
  // const email = req.body.email;
  let values=j.reduce((o,a)=>{
    let ini=[];
    ini.push(a.groupname);
    ini.push(a.email);
    ini.push(a.invite);
    o.push(ini);
    return o
},[])
console.log(values);
  

  let tableName = 'USERGROUP';

  
  
        let insertSql = '';
     
          
        insertSql = `INSERT INTO ${tableName}  (groupname,emailId,invite) VALUES ?`;
      console.log(insertSql);
        pool.query(insertSql,[values], (insertError, result) => {
          if (insertError) {
            console.log(insertError);
            res.send('Error');
          }
          console.log(`Group:  created in Table: ${tableName} `);
        res.send(`Group:  created in Table: ${tableName} `);
     console.log("jhala");
       });
}

const LeaveGroup = (req, res,pool) => {
  const { groupname } = req.body;
  const {email } = req.body;
  console.log('Inside Leavegroup module:');
  console.log(req.body);
 
  

  let tableName = 'USERGROUP';

  
  
        let insertSql = '';
     
        insertSql = `SELECT sum(mean) as sum  from BILL where email ='${email}'`; 
        console.log(insertSql);
        pool.query(insertSql,(insertError, result) => {
          if (insertError) {
            console.log(insertError);
            res.send('Error');
          }
       
     
       console.log(result[0].sum);
        if (result[0].sum == 0)
        {
          console.log("result is 0")
        insertSql = `DELETE FROM USERGROUP WHERE emailId='${email}' and groupname='${groupname}'`;
      console.log(insertSql);
        pool.query(insertSql, (insertError, result) => {
          if (insertError) {
            console.log(insertError);
            res.send('Error');
          }
        console.log("susccessfully deleted the entry")
        res.send("Successfully deleted the entry")
       });
        }
      else
      {
          console.log("Inside else");
        res.send("Clear you dues")
      }
      
    
        }); 
      
     
}







exports.AddGroup = AddGroup;
exports.AddUserGroup = AddUserGroup;
exports.LeaveGroup = LeaveGroup;









