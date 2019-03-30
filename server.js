const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

const isLocal = true;
const isTim = true;

if (isLocal) {
  app.use(express.static("public"));
}

const mongoose = require("mongoose");

// connect to the database
mongoose.connect("mongodb://localhost:27017/recipes", {
  useNewUrlParser: true
});

// Configure multer so that it will upload to '/public/images'
const multer = require("multer");
var upload = undefined;
if (isLocal) {
  upload = multer({
    dest: "./public/images/",
    limits: {
      fileSize: 10000000
    }
  });
} else {
  if (isTim) {
    upload = multer({
      dest: "/var/www/cp4.twhiting.org/images/",
      limits: {
        fileSize: 10000000
      }
    });
  } else {
    upload = multer({
      dest: "/var/www/cp4.mycs260website.com/images/",
      limits: {
        fileSize: 10000000
      }
    });
  }
}

// Create a scheme for recipes in the recipe collection: a title and a path to an image.
const recipeSchema = new mongoose.Schema({
  user: String,
  title: String,
  imagePath: String,
  instructions: [String],
  ingredients: [String]
});

// Create a model for recipes in the recipe collection.
const Recipe = mongoose.model("Recipe", recipeSchema);

// Upload a photo. Uses the multer middleware for the upload and then returns
// the path where the photo is stored in the file system.
app.post("/api/photos", upload.single("photo"), async (req, res) => {
  // Just a safety check
  if (!req.file) {
    return res.sendStatus(400);
  }
  res.send({
    path: "/images/" + req.file.filename
  });
});

// Create a new item in the museum: takes a title and a path to an image.
app.post("/api/recipes", async (req, res) => {
  const recipe = new Recipe({
    user: req.body.user,
    title: req.body.title,
    imagePath: req.body.imagePath,
    instructions: req.body.instructions,
    ingredients: req.body.ingredients
  });
  try {
    await recipe.save();
    res.send(recipe);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Get a list of all of the items in the museum.
app.get("/api/recipes", async (req, res) => {
  try {
    let recipes = await Recipe.find();
    res.send(recipes);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Delete an item in the museum.
app.delete("/api/recipes/:id", async (req, res) => {
  try {
    await Recipe.deleteOne({ _id: req.params.id });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Delete an item in the museum.
app.put("/api/recipes/:id", async (req, res) => {
  try {
    let recipe = await Recipe.findOne({ _id: req.params.id });
    recipe.title = req.body.title;
    recipe.ingredients = req.body.ingredients;
    recipe.instructions = req.body.instructions;
    recipe.save();
    res.send(recipe);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(3000, () => console.log("Server listening on port 3000!"));
