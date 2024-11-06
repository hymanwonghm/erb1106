const express = require('express')
// Define the express app
const app = express()
const port = 3000

// Enable express app to parse JSON body
app.use(express.json())

// Import the db config from knexfile.js
const dbConfigs = require("./knexfile")
const knex = require("knex")(dbConfigs)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// GET /todo
app.get('/todo', (req, res)=>{
  // Return a list of TODO Items
  return knex("todo").select()
  .then((value)=>{
    return res.json(value)
  })
})

// POST /todo
app.post('/todo', (req, res)=>{
  // Insert a TODO item
  const task = req.body
  return knex("todo").insert(task).then(value=>{
    res.json(value.rowCount)
  })
})

// PUT /todo/:todoId
app.put('/todo/:todoId', (req, res)=>{
  // Update a TODO item
  const todoId = req.params.todoId
  return knex("todo").where({
    id: todoId
  }).update({
    task: req.body.task,
    description: req.body.description,
  }).then((value)=>{
    return res.json(value)
  })
})

// Delete /todo/:todoId
app.delete('/todo/:todoId', (req, res)=>{
  // Delete a TODO item
  const todoId = req.params.todoId
  return knex("todo").where({
    id: todoId
  }).del().then((value)=>{
    return res.json(value)
  })
})

// Get /todo/:todoId
app.get('/todo/:todoId', (req, res)=>{
  // Get a TODO item
  const todoId = req.params.todoId
  return knex("todo").where({
    id: todoId
  }).first().then((value)=>{
    return res.json(value)
  })
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})