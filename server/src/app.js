require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const {
  createTableBusiness,
  createTableBusinessEmployee,
  createTableEmployee,
  createTableRoute,
  createTableRouteDestination,
  createTableDestination,
  createTableHistory,
} = require("./config/schema");

const PORT = process.env.PORT || 4000;
const app = express();

const routeBusiness = require("./routes/business");
const routeEmployee = require("./routes/employee");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

function createTable() {
  createTableBusiness();
  createTableEmployee();
  createTableBusinessEmployee();
  createTableRoute();
  createTableDestination();
  createTableRouteDestination();
  createTableHistory();
}
createTable();
app.use("/api/business", routeBusiness);
app.use("/api/employee", routeEmployee);

app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
