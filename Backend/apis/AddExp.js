const AddExp = (req, res,pool) => {
 console.log('Inside addexp module:');
  console.log(req.body);
  
  let j = req.body;
 
  let values=j.reduce((o,a)=>{
    let ini=[];
    ini.push(a.billId);
    ini.push(a.groupname);
    ini.push(a.amount);  
   ini.push(a.description);
   ini.push(a.email);
   ini.push(a.createddata);
   ini.push(a.paidby);
   
    o.push(ini);
    return o
},[])
console.log(values);
  

  let tableName = 'BILL';

  
  
        let insertSql = '';
     
          
        insertSql = `INSERT INTO ${tableName}  (billid,group_name,mean,description,email,createddate,paidby) VALUES ?`;
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



const FetchExp = (req, res,pool) => {
  console.log('Inside fetchexp module:');


   
 
   let tableName = 'BILL';
 
   
   
         let insertSql = '';
      
           
         calculationSql = `select email,sum(mean) as sum from BILL group by email`;
      console.log(calculationSql);
        pool.query(calculationSql, (insertError, result) => {
          if (insertError) {
           console.log(insertError);
            res.send('Error');
          }
          
          console.log(`Group:  created in Table: ${tableName} `);
        res.send(result);
     console.log("jhala");
       });
 }

 const FetchExptotal = (req, res,pool) => {
  console.log('Inside fetchexptotal module:');


   
 
   let tableName = 'BILL';
 
   
   
         let insertSql = '';
      
           
         calculationSql = `select email,sum(mean) as sum from BILL group by email`;
      console.log(calculationSql);
        pool.query(calculationSql, (insertError, result) => {
          if (insertError) {
           console.log(insertError);
            res.send('Error');
          }
          
          console.log(`fetched total data `);
        res.send(result);
     
       });
 }



 const Getbilldata = (req, res,pool) => {
  console.log("Inside getbilldata module:");
  console.log(req.body);
  const {groupname} = req.body;

   
 
   let tableName = 'BILL';
 
   
   
         let insertSql = '';
      
        
         calculationSql = `SELECT * from ${tableName} WHERE group_name = '${groupname}' order by ASC`;
      console.log(calculationSql);
        pool.query(calculationSql, (insertError, result) => {
          if (insertError) {
           console.log(insertError);
            res.send('Error');
          }
          console.log(result);
          console.log(`fetched data from Bill `);
        res.send(result);
     
       });
 }

 const ExpU = (req, res,pool) => {
  console.log("Inside updteexp module:");
  console.log(req.body);
  const {email} = req.body; //current_email
  const {toValue}= req.body; //to give
   
 
   let tableName = 'BILL';
   let insertSql = '';
   let insert = '';
   let updateSQL = '';
   let updateSQ ='';

   insertSql =  `select sum(mean) as sum,email from BILL where email = '${email}'`//geetika
   
        pool.query(insertSql, (insertError, result1) => {
          if (insertError) {
           console.log(insertError);
            
          }
          console.log(result1);
          console.log(`fetched geetika data from Bill `);
       // res.send(result);   
       
        
       console.log(toValue)

       insert =  `select sum(mean) as sum,COUNT(email) as count from BILL where email = '${toValue}'`//werwwer
   
       pool.query(insert, (insertError, res) => {
         if (insertError) {
          console.log(insertError);
           
         }
         console.log(res);
         console.log(`fetched werwer data from Bill `);
      // res.send(result);   
      count = res[0].count
      meansum = ((res[0].sum- result1[0].sum)/count)
      
      console.log({meansum})
  updateSQL = `update BILL SET  mean = '0' where email = '${email}' `;
  pool.query(updateSQL, (insertError, result2) => {
    if (insertError) {
     console.log(insertError);
      
    }
    
    console.log(`updated settle up from  data `);

    });
     
    updateSQ = `update BILL  SET mean = ${meansum} where email = '${toValue}'`;
    pool.query(updateSQ, (insertError, result3) => {
      if (insertError) {
      
        
      }
     
      console.log(`updated settle up to data `);
 
      });
  
  });
    });
  }
 
  const Totaltransaction = (req, res,pool) => {
    console.log("Inside totaltransactioneexp module:");
    
     
   
     let tableName = 'BILL';
     let insertSql = '';
     insertSql =  `select * from  ${tableName} order by createddate`
     
          pool.query(insertSql, (insertError, result) => {
            if (insertError) {
             console.log(insertError);
              res.send('Error');
            }
            console.log(result);
            res.send(result);
            console.log(`fetched total  data from Bill `);
         // res.send(result);   
         
      
      
        
      });
    }
       






exports.ExpU = ExpU;
exports.AddExp = AddExp;
exports.FetchExp = FetchExp;
exports.Getbilldata = Getbilldata;
exports.FetchExptotal = FetchExptotal;
exports.Totaltransaction = Totaltransaction;






