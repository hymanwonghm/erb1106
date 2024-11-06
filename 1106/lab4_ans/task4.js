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

//Task 4: Query data
//Query all users from the users table.
//Output each user's id, name, and email.
// write your code here
// Select all users from the table
knex("users").select("id", "name", "email")
 .then((rows)=>{
   console.log(rows)
 })

// Filter records with name John Doe
knex("users").where(
 {
  name: 'John Doe'
 }
).select("id", "name", "email")
.then((rows)=>{
  console.log(rows)
})

// Example of like filtering
knex("users").where(
  "name", "like", "%Doe"
).select("id", "name", "email")
 .then((rows)=>{
   console.log(rows)
 })


// Raw SQL example
//  https://knexjs.org/guide/raw.html#raw-queries
knex.raw(
`
SELECT * FROM users
WHERE name LIKE ?
`, ["%Doe"]
).then((val)=>{
    console.log("raw result")
    console.log(val)
}).catch((err)=>{
    console.log(err)
})

// MUST NOT BE:
// We must use parameterized query to provide
// dynamic input to prevent SQL Injection attack
// knex.raw(
//     `
//     SELECT * FROM users
//     WHERE name LIKE 
//     ` + "%Doe"
//     )
