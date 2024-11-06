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


// Task 6
// Delete user with id 1
knex("users").where({id: 1}).del()
.then((data)=>{
    console.log("deleted:"+data)
    // query back the user table to check
    knex("users").select().then((rows)=>{
        console.log(rows)
      }).catch((err)=>{
        console.log("Failed to select:"+err)
      })
}).catch(err=>{
    console.log("Failed to del:"+err)
})