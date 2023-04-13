const tasks = require("./routes/tasks");
const connection = require("./db");
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const { request, response } = require("express");
const app = express()

connection();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json())

app.use('/task', require('./routes/tasks'))

const port = process.env.PORT || 8080;

app.listen(port, console.log(`Server Run on Port No  ${port}`));