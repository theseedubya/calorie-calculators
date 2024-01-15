const subwayCalories = require('./calorieData/calories')

function calculateSubwayUKCalories(calorieData, ingredientsArray, isFootlong) {
    let sandwichCalories = 0
    for (let i = 0; i < ingredientsArray.length; i++) {
        let ingredient = ingredientsArray[i]
        sandwichCalories = sandwichCalories + calorieData[ingredient]
    }
    if (isFootlong) {
        return sandwichCalories * 2;
    } else {
        return sandwichCalories
    }
};
    
const meatball =
    [
        "Italian White Bread",
        "Pork & Beef Meatballs (in marinara sauce)",
        "American-style Cheese",
        "Lettuce",
        "Tomatoes",
        "Pickles"
    ]

console.log("kimMeatball: ",calculateSandwichCalories(subwayCalories, meatball, true))

