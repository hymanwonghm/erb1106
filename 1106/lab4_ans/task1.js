//Task 1: Set up Knex and connect to the database
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
  
    
  // Test the connection  
  knex.raw('SELECT 1+1 AS result')  
    .then(result => {  
      console.log(result.rows); // Should output 2  
    })  
    .catch(err => {  
      console.error('Error connecting to the database:', err);  
    })