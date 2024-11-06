const express = require('express')
const { router } = require('./routers')
// Define the express app
const app = express()
const port = 3000

// Import the db config from knexfile.js
/*
const dbConfigs = require("./knexfile") 
const knex = require("knex")(dbConfigs)
*/

app.use(express.json())
app.use("/", router)

// GET /todo
/*
app.get('/todo', (req, res) =>{
    return knex("todo").select()
    .then((value) => {
        console.log(value)
        return res.json(value)
    })
})
*/
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })