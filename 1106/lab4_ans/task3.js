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

//Task 3: Insert data
//Insert a new record into the users table.
//The data to insert should be { name: 'John Doe', email: 'john@example.com' }.
// write your code here
knex('users').insert([
    {
      name: "John Doe",
      email: "john@example.com"
    }
  ]).catch(err => {  
    console.error('Error insering user:', err);  
  });
  
  knex('users').insert([
    {
      name: "Peter Doe",
      email: "peter@example.com"
    }
  ]).catch(err => {  
    console.error('Error insering user:', err);  
  });
    