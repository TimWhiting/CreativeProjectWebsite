const getRandomMealURL = "https://www.themealdb.com/api/json/v1/1/random.php";
const recipes = [];
let MainComponent = Vue.component("main-component", {
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

let MyRecipesComponent = Vue.component("my-recipes-component", {
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

let LoginComponent = Vue.component("my-login-component", {
  data: function() {
    return {};
  },
  template: `<main>
  <h1>Login</h1>

  <section class="loginCard">
    <p class="smallCenteredHeader">Please sign in to access your recipes.</p>
    <form class="loginForm">
      <label for="username">Username: </label>
      <input type="email" id="username" name="username" />
      <label for="password">Password: </label>
      <input type="password" id="password" name="password" />
    </form>
  </section>
</main>`
});

let MealPlanComponent = Vue.component("meal-plan-component", {
  template: `<main class="mealPlanContent">
  <h1>Meal Plan</h1>
  <form>
    <datalist id="breakfast">
      <option value="Crepes"></option>
    </datalist>
    <datalist id="linner">
      <option value="Burger"></option>
      <option value="Mediterranean"></option>
      <option value="Taco"></option>
      <option value="Shrimp"></option>
      <option value="Pizza"></option>
    </datalist>
    <datalist id="sides">
      <option value="Salad"></option>
      <option value="Garlic bread"></option>
    </datalist>
    <datalist id="dessert">
      <option value="Brownies"></option>
      <option value="Cupcake"></option>
    </datalist>
    <section class="weekdays">
      <div class="weekday">
        <h3>Sunday</h3>
        <label for="breakfast">Breakfast:</label>
        <input list="breakfast" name="sundayBreakfast" class="breakfast" />
        <label for="lunch">Lunch:</label>
        <input list="linner" name="sundayLunch" class="lunch" />
        <label for="dinner">Dinner:</label>
        <input list="linner" name="sundayDinner" class="dinner" />
        <label for="side">Side:</label>
        <input list="sides" name="sundaySide" class="side" />
        <label for="dessert">Dessert:</label>
        <input list="dessert" name="sundayDessert" class="dessert" />
      </div>
      <div class="weekday">
        <h3>Monday</h3>
        <label for="breakfast">Breakfast:</label>
        <input list="breakfast" name="mondayBreakfast" class="breakfast" />
        <label for="lunch">Lunch:</label>
        <input list="linner" name="mondayLunch" class="lunch" />
        <label for="dinner">Dinner:</label>
        <input list="linner" name="mondayDinner" class="dinner" />
        <label for="side">Side:</label>
        <input list="sides" name="mondaySide" class="side" />
        <label for="dessert">Dessert:</label>
        <input list="dessert" name="mondayDessert" class="dessert" />
      </div>
      <div class="weekday">
        <h3>Tuesday</h3>
        <label for="breakfast">Breakfast:</label>
        <input list="breakfast" name="tuesdayBreakfast" class="breakfast" />
        <label for="lunch">Lunch:</label>
        <input list="linner" name="tuesdayLunch" class="lunch" />
        <label for="dinner">Dinner:</label>
        <input list="linner" name="tuesdayDinner" class="dinner" />
        <label for="side">Side:</label>
        <input list="sides" name="tuesdaySide" class="side" />
        <label for="dessert">Dessert:</label>
        <input list="dessert" name="tuesdayDessert" class="dessert" />
      </div>
      <div class="weekday">
        <h3>Wednesday</h3>
        <label for="breakfast">Breakfast:</label>
        <input list="breakfast" name="wednesdayBreakfast" class="breakfast" />
        <label for="lunch">Lunch:</label>
        <input list="linner" name="wednesdayLunch" class="lunch" />
        <label for="dinner">Dinner:</label>
        <input list="linner" name="wednesdayDinner" class="dinner" />
        <label for="side">Side:</label>
        <input list="sides" name="wednesdaySide" class="side" />
        <label for="dessert">Dessert:</label>
        <input list="dessert" name="wednesdayDessert" class="dessert" />
      </div>
      <div class="weekday">
        <h3>Thursday</h3>
        <label for="breakfast">Breakfast:</label>
        <input list="breakfast" name="thursdayBreakfast" class="breakfast" />
        <label for="lunch">Lunch:</label>
        <input list="linner" name="thursdayLunch" class="lunch" />
        <label for="dinner">Dinner:</label>
        <input list="linner" name="thursdayDinner" class="dinner" />
        <label for="side">Side:</label>
        <input list="sides" name="thursdaySide" class="side" />
        <label for="dessert">Dessert:</label>
        <input list="dessert" name="thursdayDessert" class="dessert" />
      </div>
      <div class="weekday">
        <h3>Friday</h3>
        <label for="breakfast">Breakfast:</label>
        <input list="breakfast" name="fridayBreakfast" class="breakfast" />
        <label for="lunch">Lunch:</label>
        <input list="linner" name="fridayLunch" class="lunch" />
        <label for="dinner">Dinner:</label>
        <input list="linner" name="fridayDinner" class="dinner" />
        <label for="side">Side:</label>
        <input list="sides" name="fridaySide" class="side" />
        <label for="dessert">Dessert:</label>
        <input list="dessert" name="fridayDessert" class="dessert" />
      </div>
      <div class="weekday">
        <h3>Saturday</h3>
        <label for="breakfast">Breakfast:</label>
        <input list="breakfast" name="saturdayBreakfast" class="breakfast" />
        <label for="lunch">Lunch:</label>
        <input list="linner" name="saturdayLunch" class="lunch" />
        <label for="dinner">Dinner:</label>
        <input list="linner" name="saturdayDinner" class="dinner" />
        <label for="side">Side:</label>
        <input list="sides" name="saturdaySide" class="side" />
        <label for="dessert">Dessert:</label>
        <input list="dessert" name="saturdayDessert" class="dessert" />
      </div>
    </section>
  </form>
</main>
`
});

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: "/index", component: MainComponent },
  { path: "/login", component: LoginComponent },
  { path: "/myRecipes", component: MyRecipesComponent },
  { path: "/mealPlan", component: MealPlanComponent }
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
});

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  router
}).$mount("#app");
