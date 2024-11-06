exports.seed = function(knex) {
    return knex("todo").insert([
        {id: 1, task: "Task 1", description: "Task 1 description"},
        {id: 2, task: "Task 2", description: "Task 2 description"},
        {id: 3, task: "Task 3", description: "Task 3 description"}
    ]).onConflict("id").ignore()
}