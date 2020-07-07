const db = require("knex")({
  client: "mysql",
  connection: {
    host: process.env.MYSQL_PORT || "127.0.0.1",
    user: process.env.MYSQL_ || "root",
    password: process.env.MYSQL_PASSWORD || "123456",
    database: process.env.MYSQL_DATABASE || "my_route",
  },
});

module.exports = db;
