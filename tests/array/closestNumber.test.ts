import { describe, expect, it } from "vitest"
import { closestNumberInArray } from "../../src"

describe("closestNumber", () => {
  it("should return 0.25", () => {
    const array = [0, 0.25, 0.5, 0.75, 1]
    const closestNumber = closestNumberInArray(0.2, array)
    expect(closestNumber).toBe(0.25)
  })

  it("should return 20", () => {
    const array = [10, 20, 30, 40, 50]
    const closestNumber = closestNumberInArray(25, array)
    expect(closestNumber).toBe(20)
  })
})
