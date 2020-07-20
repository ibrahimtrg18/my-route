require("dotenv").config();
const app = require("express")();
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

createTableBusiness();
createTableEmployee();
createTableBusinessEmployee();
createTableRoute();
createTableDestination();
createTableRouteDestination();
createTableHistory();

const PORT = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/", require("./routes/index"));

app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
