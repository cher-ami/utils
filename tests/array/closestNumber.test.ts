import { describe, expect, it } from "vitest"
import { getClosestNumberInArray } from "../../src"
import { n } from "vitest/dist/reporters-2ff87305"

describe("closestNumberInArray", () => {
  it("should return the closest value", () => {


    const data: [number, number[], number][] = [
      [0.2, [0, 0.25, 0.5, 0.75, 1], 0.25],
      // TODO other examples
      [0.2, [0, 0.25, 0.5, 0.75, 1], 0.25],
      [0.2, [0, 0.25, 0.5, 0.75, 1], 0.25],
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
