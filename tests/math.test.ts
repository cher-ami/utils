import { describe, expect, it } from "vitest"
import { clamp, modulo, randomRange } from "../src/math"
const { log } = console

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

describe("modulo", () => {
  it("should always return positive modulo", () => {
    for (let n = -10; n <= 10; n++) {
      const value = modulo(n, 10)
      expect(value).toBeGreaterThanOrEqual(0)
    }
  })
})

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
