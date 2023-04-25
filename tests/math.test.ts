import { describe, expect, it } from "vitest"
import { clamp, modulo, normalizeValue, originalValueFromNormalized, randomRange } from "../src/math"
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

describe("normalizeValue", () => {
  it("should return value between 0 and 1", () => {
    const [min, max] = [0, 100]
    expect(normalizeValue(-20, -15, 0)).toBe(0.25)
    expect(normalizeValue(-20, 0, 20)).toBe(0.5)
    expect(normalizeValue(min, 10, max)).toBe(0.1)
    expect(normalizeValue(min, 90, max)).toBe(0.9)
    expect(normalizeValue(min, -10, max)).toBe(0)
    expect(normalizeValue(min, 110, max)).toBe(1)
  })
})

describe("originalValueFromNormalized", () => {
  it("should return value between 0 and 1", () => {
    const [min, max] = [0, 100]
    expect(originalValueFromNormalized(-20, 0.25, 0)).toBe(-15)
    expect(originalValueFromNormalized(-20, 0.5, 20)).toBe(0)
    expect(originalValueFromNormalized(min, 0.1, max)).toBe(10)
    expect(originalValueFromNormalized(min, 0.9, max)).toBe(90)
    expect(originalValueFromNormalized(min, -0.1, max)).toBe(0)
    expect(originalValueFromNormalized(min, 1.1, max)).toBe(100)
  })
})
