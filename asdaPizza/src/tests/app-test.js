import { expect } from "chai";
import { calculatePizzaCalories } from "../app.js";

describe("Test ASDA pizza calorie calculator", () => {
    it("should return 1687 for the test pizza", () => {
        const testPizza = {
            "size": "large",
            "base": "thin stonebaked",
            "sauce": "tomato sauce",
            "cheese": "grated cheese",
            "toppings": ["diced steak", "plain chicken", "smoked ham", "mozzarella slices"]
        };
        const result = calculatePizzaCalories(testPizza)
        expect(result).to.equal(1687);
    })
})