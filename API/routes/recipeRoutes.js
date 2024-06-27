const express = require("express");
const {
  createRecipe,
  getAllRecipes,
  getRecipe,
  deleteRecipe,
} = require("../controllers/recipeControllers");

// Allows us to define routes outside the Router > server.js file
const router = express.Router();

// Determining the endpoint/route/paths of the router we
// created and the function that will run when the request comes
router.route("/api/recipes").get(getAllRecipes).post(createRecipe);

router.route("/api/recipes/:id").get(getRecipe).delete(deleteRecipe);

// Exporting the router
module.exports = router;
