import {asdaPizzaIngredients} from "/asdaPizza/src/data/calories.js";

function formSubmit(event) {
    event.preventDefault();

    const resultArea = document.getElementById("result")

    const formData = new FormData(this);
    const size = formData.getAll("size")
    const base = formData.getAll("base")
    const sauce = formData.getAll("sauce")
    const toppings = formData.getAll("toppings")

    let calories = 0
    calories += asdaPizzaIngredients[size].bases[base]
    calories += asdaPizzaIngredients[size].sauces[sauce]
    toppings.forEach((topping) => {
       calories+=  asdaPizzaIngredients[size].toppings[topping]
    })
    console.log(calories)
    const result = document.createElement("h4")
    result.textContent = `Calories: ${calories}`
    resultArea.appendChild(result)
    resultArea.style.setProperty("display","block")
    return true;
}

const form = document.getElementById("form");
form.addEventListener("submit", formSubmit);