/*
TO-DO LIST:
    - Make recipes clickable on the side
    - Add edit and delete capabilities, both for pages and for individual items (-)
    - Error check (properties != null)
    - Minor styling (move buttons to the right, adjust sidebar size dynamically, make recipe content box wider, center all the things)
    - Connect modes to buttons (add, edit, delete)
*/

const MyRecipesComponent = Vue.component("my-recipes-component", {
  data: function() {
    return {
      recipes: [],
      recipeIndex: 0,
      currentUser: "",
      allUsers: ["Spencer", "Emily", "Julie"],
      mode: "view",
      newRecipe: { ingredients: [], title: "", instructions: [] },
      newImage: null,
      newIngredient: "",
      newInstruction: ""
    };
  },
  computed: {
    currentRecipe() {
      if (this.recipeIndex < this.recipes.length) {
        return this.recipes[this.recipeIndex];
      } else {
        return null;
      }
    }
  },
  created() {
    this.getAllRecipes();
  },
  methods: {
    async getAllRecipes() {
      let response = await axios.get("/api/recipes");
      this.recipes = response.data;
      if (this.recipes.length > 0) {
        this.recipeIndex = 0;
      }
    },
    addIngredient() {
      this.newRecipe.ingredients.push(this.newIngredient);
      this.newIngredient = "";
    },
    addInstruction() {
      this.newRecipe.instructions.push(this.newInstruction);
      this.newInstruction = "";
    },
    changeImage(event) {
      this.newImage = event.target.files[0];
    },
    async saveRecipe() {
      try {
        const formData = new FormData();
        formData.append("photo", this.newImage, this.newImage.name);
        let photoResponse = await axios.post("/api/photos", formData);

        this.newRecipe.user = this.currentUser;
        this.newRecipe.imagePath = photoResponse.data.path;

        let recipeResponse = await axios.post("/api/recipes", this.newRecipe);

        this.newRecipe = { ingredients: [], title: "", instructions: [] };
        this.newIngredient = "";
        this.newIngredient = "";
        this.newImage = null;
        this.mode = "view";
        this.getAllRecipes();
      } catch (error) {
        console.log(error);
      }
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
    <article class="myRecipe" v-if="currentRecipe">
      <figure>
        <img v-bind:src="currentRecipe.imagePath" />
      </figure>
      <section class="recipeCard">
        <h2 class="recipeTitle">{{ currentRecipe.title }}</h2>
        <h4>Created by {{ currentRecipe.user }}</h4>
        <section class="ingredientSection">
          <ul class="ingredients">
            <li v-for="ingredient in currentRecipe.ingredients">{{ ingredient }}</li>
          </ul>
        </section>
        <section class="instructionSection">
          <ol class="">
            <li v-for="instruction in currentRecipe.instructions">{{ instruction }}</li>
          </ol>
        </section>
      </section>
    </article>
    <article class="myRecipe" v-else>
      <input type="text" v-model="newRecipe.title" placeholder="Recipe Title"></input>
    <section class="ingredientSection">
      <h3>Ingredients</h3>
      <ul class="ingredients">
        <li v-for="ingredient in newRecipe.ingredients">{{ ingredient }}</li>
        <li><input type="text" v-model="newIngredient" placeholder="Add ingredient"></input>
          <button @click="addIngredient"> + </button>
        </li>
      </ul>
    </section>
    <section class="instructionSection">
      <h3>Instructions</h3>
      <ol class="ingredients">
        <li v-for="instruction in newRecipe.instructions">{{ instruction }}</li>
        <li><input type="text" v-model="newInstruction" placeholder="Add instruction"></input>
          <button @click="addInstruction"> + </button>
        </li>
      </ol>
    </section>
    <section class="imageSection">
      <input type="file" name="photo" @change="changeImage"></input>
    </section>
    <button @click="saveRecipe">Save Recipe</button>
    </article>
  </section>
</main>`
});

export { MyRecipesComponent };
