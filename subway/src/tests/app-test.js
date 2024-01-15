import { expect } from "chai";
import { calculateSubwayUKCalories } from "../app.js";
import { subwayCalories } from "../data/calories.js"; "../data/calories.js"
import { meatball } from "./mocks/sandwiches.js"

describe("Test subway sandwich calorie calculator", () => {
    it("should return 878 for a footlong meatball marinara", () => {
        const result = calculateSubwayUKCalories(subwayCalories,meatball,true)
        expect(result).to.equal(878);
    })
})

describe("Test subway sandwich calorie calculator", () => {
    it("should return 439 for a 6 inch meatball marinara", () => {
        const result = calculateSubwayUKCalories(subwayCalories,meatball,false)
        expect(result).to.equal(439);
    })
})