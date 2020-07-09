const db = require("./database");

module.exports = {
  createTableBusiness: function () {
    return db.schema
      .hasTable("business")
      .then((exists) => {
        if (!exists) {
          return db.schema.createTable("business", (table) => {
            table.increments();
            table.string("name").notNullable();
            table.string("email").notNullable();
            table.string("password").notNullable();
            table.string("phone_number").notNullable();
            table.string("address");
            table.timestamps(true, true);
            return console.log("table business successfully created");
          });
        } else {
          return console.log("table business already exists!");
        }
      })
      .catch((err) => console.log(err));
  },
  createTableBusinessEmployee: function () {
    return db.schema
      .hasTable("business_employee")
      .then((exists) => {
        if (!exists) {
          return db.schema.createTable("business_employee", (table) => {
            table.increments();
            table.integer("business_id").unsigned();
            table
              .integer("employee_id")
              .unsigned()
              .notNullable()
              .references("id")
              .inTable("employee")
              .onDelete("CASCADE");
            table.timestamps(true, true);
            return console.log("table business_employee successfully created");
          });
        } else {
          return console.log("table business_employee already exists!");
        }
      })
      .catch((err) => console.log(err));
  },
  createTableEmployee: function () {
    return db.schema
      .hasTable("employee")
      .then((exists) => {
        if (!exists) {
          return db.schema.createTable("employee", (table) => {
            table.increments();
            table.string("name").notNullable();
            table.string("custom_id").notNullable();
            table.string("email").notNullable();
            table.string("password").notNullable();
            table.string("phone_number").notNullable();
            table.string("address");
            table.timestamps(true, true);
            return console.log("table employee successfully created");
          });
        } else {
          return console.log("table employee already exists!");
        }
      })
      .catch((err) => console.log(err));
  },
};
