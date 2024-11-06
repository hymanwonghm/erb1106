/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  // Create table TODO
  return knex.schema.createTable("todo", (table)=>{
    table.increments("id").primary()
    table.text("task", 128).notNullable()
    table.text("description", 128)
  })
};


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  // Drop table too
  return knex.schema.dropTableIfExists("todo")
};

