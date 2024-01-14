const { bases, sauces, cheeses, toppings, toppedCheeses } = require("./data/calories")

const testPizza = {
  "base": { base: "thin stonebaked base", size: "large" },
  "sauce": "tomato sauce",
  "cheese": "grated cheese",
  "toppings": ["diced steak", "plain chicken", "smoked ham", "mozzarella slices"]
}


function calculatePizzaCalories(pizza) {
  let calories = 0;
  
  //get base calories
  const { base, size } = pizza.base;
  let baseCalories =  bases[base].filter(function(baseSize) {
    return baseSize[size]
  });
  baseCalories = baseCalories[0][size]

  //final calcluation
  calories = baseCalories
  return calories
}

console.log(calculatePizzaCalories(testPizza))


