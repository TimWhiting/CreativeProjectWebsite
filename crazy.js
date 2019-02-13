const getRandomMealURL = "https://www.themealdb.com/api/json/v1/1/random.php";

const masonryContainer = document.getElementById("recipeImages");

function stuffIt(json) {
  let recipe = "<figure>";
  recipe += "<img src=" + json.meals[0].strMealThumb + ">";
  recipe += "<figcaption>" + json.meals[0].strMeal + "</figcaption>";
  recipe += "</figure>";
  return recipe;
}

function createIt(json) {
  console.log(json);
  return;
  let recipeImageCard = document.createElement('figure');
  let img = document.createElement('img');
  img.src = "/images/burger.jpg";
  let caption = document.createElement('figcaption');
  caption.textContent = "Burger";
  recipeImageCard.appendChild(img);
  recipeImageCard.appendChild(caption);
  masonryContainer.appendChild(recipeImageCard);
}

function getAllRecipes() {
  let recipes = [];
  //get a random recipe
  //format it
  //add it to the container
  let numImages = 15;
  for (let i = 0; i < numImages; i++) {
    console.log(getRandomMealURL);
    fetch(getRandomMealURL).then(function (response) {
      return response.json();
    }).then(function (json) {
      recipes.push(stuffIt(json));
      if (recipes.length == numImages) {
        let allRecipes = recipes.reduce(function (concatenated, nextItem) {
          return concatenated.concat(nextItem);
        }, "");
        masonryContainer.innerHTML = allRecipes;
      }
    });
  }

}


getAllRecipes();