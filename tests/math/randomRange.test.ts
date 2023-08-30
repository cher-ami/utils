import { describe, expect, it } from "vitest"
import { randomRange } from "../../src/math/randomRange"


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
})
