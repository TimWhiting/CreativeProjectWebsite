const getRandomMealURL = "https://www.themealdb.com/api/json/v1/1/random.php";
const MainComponent = Vue.component("main-component", {
  data: function() {
    return {
      recipes: []
    };
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
        //console.log(recipe);
        this.recipes.push(recipe.data.meals[0]);
      }
    }
  },
  template: `<main class="mainPageContent">
      <h1>Public Recipes</h1>
      <section class="masonry" id="recipeImages">
        <figure v-for="recipe in recipes">
          <img v-bind:src="recipe.strMealThumb"/>
          <figcaption> {{ recipe.strMeal }} </figcaption>
        </figure>
      </section>
    </main>`
});

export { MainComponent };
