const setData = require("../utils/setData");
const getData = require("../utils/getData");
const crypto = require("crypto");

const data = getData();

exports.getAllRecipes = (req, res) => {
  // Create a copy of the data array
  let recipes = [...data];

  // Get the search query from the request
  const search = req.query?.search?.toLowerCase();

  // if there is a search query, filter the data
  if (search) {
    recipes = data.filter((recipe) =>
      recipe.recipeName.toLowerCase().includes(search)
    );
  }

  // If there is a sort query, order the data
  if (req.query.order) {
    recipes.sort((a, b) =>
      req.query.order === "asc"
        ? a.recipeTime - b.recipeTime
        : b.recipeTime - a.recipeTime
    );
  }

  res.status(200).json({
    message: "Have All Recipes",
    results: recipes.length,
    recipes: recipes,
  });
};

exports.createRecipe = (req, res) => {
  // Get the data from the request body
  const newRecipe = req.body;

  // Check if the data is valid
  if (
    !newRecipe.recipeName ||
    !newRecipe.recipeTime ||
    !newRecipe.category ||
    !newRecipe.ingredients ||
    !newRecipe.instructions ||
    !newRecipe.image
  ) {
    return res.status(400).json({ message: "Invalid Data" });
  }
  // Add the id to the data
  newRecipe.id = crypto.randomUUID();

  // Add new data to the array
  data.push(newRecipe);

  // Add updated data to the json file
  setData(data);

  // Send a success message
  res.status(200).json({
    message: " Recipe Created",
  });
};

exports.getRecipe = (req, res) => {
  // Search for the recipe by id
  const found = data.find((i) => i.id === req.params.id);

  // If there is no id in the request, send an error
  if (!found) return res.status(404).json({ message: "Recipe Not Found" });

  // If there is an id in the request, send the recipe
  res.status(200).json({
    message: "Recipe Found",
    recipe: found,
  });
};

exports.deleteRecipe = (req, res) => {
  // Search for the recipe by id
  const index = data.findIndex((i) => i.id === req.params.id);

  // delete the recipe from the array
  data.splice(index, 1);

  // Add updated data to the json file
  setData(data);

  // Send a success message
  res.status(204).json({
    message: "Recipe Deleted",
  });
};
