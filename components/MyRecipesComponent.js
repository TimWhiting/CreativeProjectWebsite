const getRandomMealURL = "https://www.themealdb.com/api/json/v1/1/random.php";

const MyRecipesComponent = Vue.component("my-recipes-component", {
  data: function() {
    return { recipes: [] };
  },
  created() {
    this.getAllRecipes();
  },
  methods: {
    async getAllRecipes() {
      //get a random recipe
      //format it
      //add it to the container
      let numImages = 15;
      for (let i = 0; i < numImages; i++) {
        console.log(getRandomMealURL);
        let recipe = await axios.get(getRandomMealURL);
        console.log(recipe.data.meals[0]);
        this.recipes.push(recipe.data.meals[0]);
      }
    }
  },
  template: `<main class="myRecipeContent">
  <aside class="myRecipeList">
    <ul>
      <li v-for="recipe in recipes">{{ recipe.strMeal }}</li>
    </ul>
  </aside>
  <section class="myRecipeSection">
    <h1>My Recipes</h1>
    <article class="myRecipe">
      <figure>
        <img src="/images/brownies.jpg" />
      </figure>
      <section class="recipeCard">
        <h2 class="recipeTitle">Brownies</h2>
        <section class="ingredientSection">
          <ul class="ingredients">
            <li>Cookies</li>
            <li>Fudge</li>
            <li>Butter</li>
            <li>Sugar</li>
            <li>1000 cups of Fun</li>
          </ul>
        </section>
        <section class="instructionSection">
          <ol class="">
            <li>Mix the cookies and fudge.</li>
            <li>Add some butter and sugar.</li>
            <li>Put in oven at 10 degrees.</li>
            <li>Pull out with bare hands.</li>
            <li>Top with 1000 cups of Fun!</li>
          </ol>
        </section>
      </section>
    </article>
  </section>
</main>`
});

export { MyRecipesComponent };
