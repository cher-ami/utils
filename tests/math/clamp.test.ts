import { describe, expect, it } from "vitest"
import { clamp } from "../../src"

describe("clamp", () => {
  it("should clamp between to value", () => {
    const [min, max] = [20, 70]
    for (let i = 0; i <= 100; i++) {
      const value = clamp(min, i, max)
      for (let n = 0; n <= 100; n++) {
        expect(value).toBeLessThanOrEqual(max)
        expect(value).toBeGreaterThanOrEqual(min)
      }
    }
  })
})
