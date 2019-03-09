const MealPlanComponent = Vue.component("meal-plan-component", {
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

export { MealPlanComponent };
