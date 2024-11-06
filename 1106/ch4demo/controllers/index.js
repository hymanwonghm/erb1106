const dbConfigs = require("../knexfile") 
const knex = require("knex")(dbConfigs)

const indexController = (req, res) => {
    res.send("Hello World Controller")
}

// GET /todo
const checkController = (req, res) => {
    knex("todo").select()
    .then((result) => {
        console.log(result)
        return res.json(result)
    })
}

// POST /todo
const createController = (req, res) => {
    data = req.body
    id = Number(data.id)
    task = data.task
    description = data.description
    knex("todo").insert([
        {'id': id, 'task': task, 'description': description}
    ])
    .then((result) => {
        console.log("Todo created sucessfully")
        return res.send("Todo created sucessfully")
    })
}

// PUT /todo
const updateController = (req, res) => {
    const todoId = req.params.todoId
    task = req.body.task
    description = req.body.description
    knex("todo").where({
        'id': todoId
    }).update({
        'task':task,
        'description':description
    }).then((result) =>{
        return res.json(result)
    })

}

// DELETE /todo
const deleteController = (req, res) => {
    const todoId = req.params.todoId
    knex("todo").where({
        'id': todoId
    }).del()
    .then((result) =>{
        return res.json(result)
    })
}

// GET /todo/:todoId
const check1Controller = (req, res) => {
    const todoId = req.params.todoId
    knex("todo").where({
        'id': todoId
    }).select()
    .then((result) => {
        console.log(result)
        return res.json(result)
    })
}

module.exports = { indexController, checkController, createController, updateController, deleteController, check1Controller }