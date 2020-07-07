require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = process.env.PORT || 4000;
const app = express();

const routeBusiness = require("./routes/business");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./config/schema")
  .createTableBusiness()
  .catch((err) => console.log(err));

app.use("/api/business", routeBusiness);

app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
