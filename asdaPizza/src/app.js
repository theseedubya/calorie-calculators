import { asdaPizzaIngredients }from "./data/calories.js"

export function calculatePizzaCalories(pizza) {
  //set variables
  let calories = 0;

  //decontruct payload
  const { size, base, sauce, cheese, toppings } = pizza
  
  //calculate base calories TODO: logic if combination does not exist
  let baseCalories =  asdaPizzaIngredients.bases[size][base];
  
  //calculate sauce calories
  let sauceCalories = asdaPizzaIngredients.sauces[size][sauce];

  //calculate cheese calories
  let cheeseCalories = asdaPizzaIngredients.cheeses[size][cheese];
  
  //calculate toppings calories
  let toppingsCalories = 0
  for(let i = 0; i < toppings.length; i++){
    toppingsCalories += asdaPizzaIngredients.toppings[size][toppings[i]]
  }
  
  //final calcluation
  calories = baseCalories + sauceCalories + cheeseCalories + toppingsCalories
  return calories
}


