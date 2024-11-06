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
  });

  
//Task 2: Create a table
//Use Knex to create a table named users.
//The table should contain id (auto-incrementing primary key), name (string), and email (string, unique) fields.
// write your code here

knex.schema.hasTable('users').then((exists) => {
  if (!exists) {
    return knex.schema.createTable('users', (t) => {
      t.increments('id').primary()
      t.string('name', 100)
      t.string('email', 255).unique()
  })
    .then(result => {
      console.log("Table created.")
  })
    .catch(err => {  
      console.error('Error creating table:', err);  
  })
  } else {
    console.log('users table exists')
  }
})


//Task 3: Insert data
//Insert a new record into the users table.
//The data to insert should be { name: 'John Doe', email: 'john@example.com' }.
// write your code here


knex('users').insert([
  {'name': 'John Doe', 'email': 'john@example.com'}
]).catch(err => {  
  console.error('Error inserting user:', err);  
})
knex('users').insert([
  {'name': 'Peter Doe', 'email': 'peter@example.com'}
]).catch(err => {  
  console.error('Error inserting user:', err);  
})

  

//Task 4: Query data
//Query all users from the users table.
//Output each user's id, name, and email.
// write your code here

function query () {
knex('users').where('name', 'like', 'John%').select('id', 'name', 'email').from('users')
  .then(rows => {
    console.log(rows)
  })
}
query ()


//Task 5: Update data
//Update the email of the user with id 1 in the users table to 'newemail@example.com'.  
// write your code here
knex('users').where({'id': 1}).update({'email': 'newemail@example.com'})
  .then(rows => {
    console.log('updated')
    query ()
  })
  .catch(err => {
    console.log('Fails to update' + err)
  })


//Task 6: Delete data
//Delete the user with id 1 from the users table.  
// write your code here
knex('users').where({'id': 10}).delete()
.then(rows => {
  console.log('deleted')
  query ()
})
.catch(err => {
  console.log('Fails to delete' + err)
})

