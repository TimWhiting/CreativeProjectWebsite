/*
TO-DO LIST:
     - Adjust sidebar size dynamically
*/

const MyRecipesComponent = Vue.component("my-recipes-component", {
  data: function() {
    return {
      recipes: [],
      recipeIndex: 0,
      currentUser: "Spencer",
      allUsers: ["Spencer", "Emily", "Julie"],
      mode: "add",
      newRecipe: { ingredients: [], title: "", instructions: [] },
      newImage: null,
      newIngredient: "",
      newInstruction: "",
      error: ""
    };
  },
  computed: {
    showEditForm() {
      return (
        this.mode == "edit" || this.mode == "add" || this.recipes.length < 1
      );
    },
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
      } else {
        this.resetNewRecipe();
        this.mode = "add";
      }
    },
    resetNewRecipe() {
      this.newRecipe = { ingredients: [], title: "", instructions: [] };
      this.newIngredient = "";
      this.newInstruction = "";
      this.newImage = null;
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
    checkData() {
      if (this.allUsers.includes(this.currentUser)) {
        if (this.newImage != null && this.newImage.name != "") {
          if (this.newRecipe.title != "") {
            if (this.newRecipe.ingredients.length >= 1) {
              if (this.newRecipe.instructions.length >= 1) {
                return true;
              } else {
                this.error = "You need to specify at least one instruction!";
                return false;
              }
            } else {
              this.error = "You need to specify at least one ingredient!";
              return false;
            }
          } else {
            this.error = "You need to specify a title!";
            return false;
          }
        } else {
          this.error = "You need to choose a file to upload!";
          return false;
        }
      } else {
        this.error = "You need to specify a user!";
        return false;
      }
    },
    async saveRecipe() {
      try {
        if (this.checkData()) {
          const formData = new FormData();
          formData.append("photo", this.newImage, this.newImage.name);
          let photoResponse = await axios.post("/api/photos", formData);

          this.newRecipe.user = this.currentUser;
          this.newRecipe.imagePath = photoResponse.data.path;

          let recipeResponse = await axios.post("/api/recipes", this.newRecipe);
          this.resetNewRecipe();
          this.mode = "view";
          this.getAllRecipes();
        }
      } catch (error) {
        console.log(error);
      }
    },
    async updateRecipe() {
      try {
        if (this.checkData()) {
          let recipeResponse = await axios.put(
            "/api/recipes/" + this.newRecipe._id,
            this.newRecipe
          );
          this.resetNewRecipe();
          this.mode = "view";
          this.getAllRecipes();
        }
      } catch (error) {
        console.log(error);
      }
    },
    selectRecipe(index) {
      this.mode = "view";
      this.recipeIndex = index;
    },
    handleAddRecipe() {
      this.resetNewRecipe();
      this.mode = "add";
    },
    handleEditRecipe() {
      this.mode = "edit";
      //placeholders
      this.newRecipe = this.currentRecipe;
    },
    removeIngredient(index) {
      this.newRecipe.ingredients.splice(index, 1);
    },
    removeInstruction(index) {
      this.newRecipe.instructions.splice(index, 1);
    },
    async handleDeleteRecipe() {
      try {
        let recipeResponse = await axios.delete(
          "/api/recipes/" + this.currentRecipe._id
        );
      } catch (error) {
        console.log(error);
      }
      this.getAllRecipes();
    }
  },
  template: `<main class="myRecipeContent">
  <aside class="myRecipeList">
    <h3>Your Recipes</h3>
    <ul>
      <li v-for="(recipe, index) in recipes" @click="selectRecipe(index)" v-bind:class="{selected: index == recipeIndex}">{{ recipe.title }}</li>
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
        <button v-if="mode != 'add'" @click="handleAddRecipe"><img src="/images/plus.png"/></button>
        <button v-if="mode == 'view'" @click="handleEditRecipe"><img src="/images/pencil.png"/></button>
        <button v-if="mode == 'view'" @click="handleDeleteRecipe"><img src="/images/trash.png"/></button>
      </div>
    </section>
    <article v-bind:class="{myRecipe:true, adding: mode=='add'} " v-if="showEditForm">
      <figure v-if="mode == 'edit'">
        <img v-bind:src="newRecipe.imagePath" />
      </figure>
      <figure v-else id="spiceFigure">
        <img src="/images/spice.jpg" />
      </figure>
      <section class="recipeCard">
        <p class="error">{{this.error}}</p>
        <input type="text" v-model="newRecipe.title" placeholder="Recipe Title"></input>
        <section class="ingredientSection">
          <h3>Ingredients</h3>
          <ul class="ingredients">
            <li v-for="(ingredient,index) in newRecipe.ingredients">
              <input type="text" v-model="newRecipe.ingredients[index]">
              <button @click="removeIngredient(index)"> x </button>
            </li>
            <li>
              <input type="text" v-model="newIngredient" placeholder="Add ingredient"></input>
              <button @click="addIngredient"> + </button>
            </li>
          </ul>
        </section>
        <section class="instructionSection">
          <h3>Instructions</h3>
          <ol class="ingredients">
            <li v-for="(instruction, index) in newRecipe.instructions">
              <input type="text" v-model="newRecipe.instructions[index]">
              <button @click="removeInstruction(index)"> x </button>
            </li>
            <li><input type="text" v-model="newInstruction" placeholder="Add instruction"></input>
              <button @click="addInstruction"> + </button>
            </li>
          </ol>
        </section>
      <input v-if="mode == 'add'" type="file" name="photo" @change="changeImage"></input>
      <button v-if="mode == 'edit'" @click="updateRecipe">Update Recipe</button>
      <button v-else @click="saveRecipe">Save Recipe</button>
      <br/>
     </section>
    </article>
    <article class="myRecipe" v-else>
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
  </section>
</main>`
});

export { MyRecipesComponent };
