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

//Task 2: Create a table
//Use Knex to create a table named users.
//The table should contain 
// id (auto-incrementing primary key), 
// name (string), and 
// email (string, unique) fields.
// write your code here

// Check if the table users created or not
knex.schema.hasTable('users').then(function (exists) {
    if (!exists) {
        // Only create the users table if it is not there
        knex.schema.createTable(
          "users", function(t) {
            t.increments('id').primary();
            t.string('name', 100)
            t.string('email', 255).unique();
          }
        ).then(result => {  
          console.log("Table created.")
        })  
        .catch(err => {  
          console.error('Error creating table:', err);  
        });
      } else {
        console.log("users table exists")
      }
  });