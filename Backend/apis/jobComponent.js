

const getStudentsRegisteredInAJob = (req, res, pool) => {
  console.log('Inside getStudentsRegisteredInAJob');
  console.log(req.body);
  const { groupname } = req.body;
  // const searchSQL = `select a.job_post_id,a.student_id,a.status,a.resume_file_url,a.jobApplicationId,a.applying_date,
  //                     b.student_name,b.college_name,b.date_of_birth,b.city,b.state,b.country,b.career_objective,b.contact_phone,b.contact_email,b.profile_picture_url
  //                     from students_applied_for_job a,student_information b
  //                     where a.student_id = b.student_id
  //                     and a.job_post_id = '${req.body.jobPostId}'`;
  const searchSQL = `select emailID from USERGROUP where groupname ='${groupname}'`;
  

  pool.query(searchSQL, (searchError, searchResult) => {
    if (searchError) {
      console.log(searchError);
      console.log('Error in getStudentsRegisteredInAEvent');
      res.send('Error');
    }
    res.send(searchResult);


  });
};








exports.getStudentsRegisteredInAJob = getStudentsRegisteredInAJob;

