const db = require("./database");

function createTableBusiness() {
  return db.schema.hasTable("business").then((exists) => {
    if (!exists) {
      return db.schema.createTable("business", (table) => {
        table.increments();
        table.string("name").notNullable();
        table.string("email").notNullable();
        table.string("password").notNullable();
        table.string("phone_number").notNullable();
        table.string("address");
        table.timestamps();
        return console.log("table business successfully created");
      });
    } else {
      return console.log("table business already exists!");
    }
  });
}

module.exports = { createTableBusiness };
