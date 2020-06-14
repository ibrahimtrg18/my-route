require("dotenv").config();
const express = require("express");
const cors = require("cors");
const knex = require('./config/database');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
