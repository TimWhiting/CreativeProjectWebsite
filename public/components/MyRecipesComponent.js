const MyRecipesComponent = Vue.component("my-recipes-component", {
  data: function() {
    return {
      recipes: [],
      currentRecipe: null,
      currentUser: "",
      allUsers: ["Spencer", "Emily", "Julie"],
      mode: "view"
    };
  },
  created() {
    this.getAllRecipes();
  },
  methods: {
    async getAllRecipes() {
      let response = await axios.get("/api/recipes");
      this.recipes = response.data;
    }
  },
  template: `<main class="myRecipeContent">
  <aside class="myRecipeList">

    <h3 v-if="currentUser != ''">{{currentUser}}'s Recipes</h3>
    <h3 v-else>Your Recipes</h3>
    <ul>
      <li v-for="recipe in recipes">{{ recipe.title }}</li>
    </ul>
  </aside>
  <section class="myRecipeSection">
    <h1>My Recipes</h1>
    <section class="menu">
      <div class="users">
        <datalist id="users">
          <option v-for="user in allUsers" :value="user"></option>
        </datalist>
        <input list="users" name="userInput" v-model="currentUser" placeHolder="Select User" class="largeSelector"/>
      </div>
      <div class="controls">
        <button><img src="/images/plus.png"/></button>
        <button><img src="/images/pencil.png"/></button>
        <button><img src="/images/trash.png"/></button>
      </div>
    </section>
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
