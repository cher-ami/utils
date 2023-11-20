import { describe, expect, it } from "vitest"
import { getClosestNumberInArray } from "../../src"

describe("closestNumberInArray", () => {
  it("should return the closest value", () => {


    const data: [number, number[], number][] = [
      [-100, [], 0],
      [null, [10, 20], 0],
      [undefined, [], 0],

      [-1, [-100, 0, 0.25, 0.5, 0.75, 1], 0],
      [-51, [-100, 0, 0.25, 0.5, 0.75, 1], -100],
      [0.2, [0, 0.25, 0.5, 0.75, 1], 0.25],

      [-12, [-20, -10, 0, 10, 20], -10],
      [-15, [-20, -10, 0, 10, 20], -20],
      [-18, [-20, -10, 0, 10, 20], -20],
      [0, [-20, -10, 0, 10, 20], 0],
      [12, [-20, -10, 0, 10, 20], 10],
      [15, [-20, -10, 0, 10, 20], 10],
      [18, [-20, -10, 0, 10, 20], 20],

      [375, [100, 200, 300, 400, 500], 400],
      [-100, [100, 200, 300, 400, 500], 100],
      [100, [-100, -200, -300, -400, -500], -100],
      [-375, [-100, -200, -300, -400, -500], -400],
    ]

    for (let [input, array, result] of data) {
      expect(getClosestNumberInArray(input, array)).toBe(result)
    }
  })

  it("should return the smallest closest value if number is between two value", () => {
    const closestNumber = getClosestNumberInArray(25, [10, 20, 30, 40, 50])
    expect(closestNumber).toBe(20)
  })
})
