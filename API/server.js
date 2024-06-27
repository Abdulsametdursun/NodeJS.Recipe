const express = require("express");
const cors = require("cors");
const recipeRouter = require("./routes/recipeRoutes");

const app = express();

// To use the cors middleware
app.use(cors());

// translate the json data to js format
app.use(express.json());

// To use the body-parser middleware
app.use(recipeRouter);

// To listen for requests on port 4001
app.listen(4001, () => {
  console.log("Server is running on port 4001");
});
