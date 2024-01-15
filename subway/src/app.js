import { subwayCalories } from './data/calories.js'

export const calculateSubwayUKCalories = (subwayCalories, ingredientsArray, isFootlong) => {
    let sandwichCalories = 0
    for (let i = 0; i < ingredientsArray.length; i++) {
        let ingredient = ingredientsArray[i]
        sandwichCalories = sandwichCalories + subwayCalories[ingredient]
    }
    if (isFootlong) {
        return sandwichCalories * 2;
    } else {
        return sandwichCalories
    }
};