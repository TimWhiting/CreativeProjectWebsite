import { MainComponent } from "./components/MainComponent.js";
import { MyRecipesComponent } from "./components/MyRecipesComponent.js";
import { MealPlanComponent } from "./components/MealPlanComponent.js";
import { LoginComponent } from "./components/LoginComponent.js";

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: "/index", component: MainComponent, alias: "/" },
  { path: "/login", component: LoginComponent },
  { path: "/myRecipes", component: MyRecipesComponent },
  { path: "/mealPlan", component: MealPlanComponent }
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes: routes // short for `routes: routes`
});

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  el: "#app",
  router
});
