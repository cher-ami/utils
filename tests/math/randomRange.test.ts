import { describe, expect, it } from "vitest"
import { randomRange } from "../../src"

describe("randomRange", () => {
  it("should return random value between min and max", () => {
    for (let i = 0; i <= 10; i++) {
      const [min, max] = [10 * i, 70 * i]
      for (let i = 0; i <= 10; i++) {
        const value = randomRange(min, max)
        for (let n = 0; n <= 10; n++) {
          expect(value).toBeLessThanOrEqual(max)
          expect(value).toBeGreaterThanOrEqual(min)
        }
      }
    }
  })

  it("should generate a random integer within the specified range", () => {
    const result = randomRange(1, 10)
    expect(result).toBeTypeOf("number")
    expect(result).toBeGreaterThanOrEqual(1)
    expect(result).toBeLessThanOrEqual(10)
  })

  it("should generate a random float with the specified number of decimal places", () => {
    const result = randomRange(1.5, 5.5, 2)
    expect(result).toBeTypeOf("number")
    expect(result).toBeGreaterThanOrEqual(1.5)
    expect(result).toBeLessThanOrEqual(5.5)
    expect(result.toFixed(2)).toBe(result.toString())
  })

  it("should return undefined if there is no valid decimal set as param", () => {
    expect(randomRange(0, 1, -1)).toBeUndefined()
  })
})
