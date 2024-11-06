//Use Knex.js to create a new database connection.
//Connect to a locally running PostgreSQL database (or any other database of your choice).
// write your code here
const knex = require('knex')({
    client: 'pg',
    connection: {
      host: "localhost",
      port: 5432,
      user: "postgres",
      database: "lab4",
      password: "123456",
    },
  });

//Task 5: Update data
//Update the email of the user 
// with id 1 in the users table 
// to 'newemail@example.com'.  
knex("users").where("id", 1).update(
    {
      email: "newemail@example.com"
    }
  ).then((rows)=>{
    console.log("Updated")
    // Here we need to nest the async call to make sure
    // the query is after the update is done!!
    
    // Query id 1 back to check if the data 
    // is updated
    knex("users").where(
      {
      id: 1
      }
    ).select("id", "name", "email")
    .then((rows)=>{
      console.log(rows)
    })
  
  }).catch(err =>{
    console.log("Fails to update:"+err)
  })
  