require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { createTableBusiness,createTableBusinessEmployee, createTableEmployee } = require("./config/schema");

const PORT = process.env.PORT || 4000;
const app = express();

const routeBusiness = require("./routes/business");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

createTableBusiness();
createTableEmployee();
createTableBusinessEmployee();

app.use("/api/business", routeBusiness);

app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
