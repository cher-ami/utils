import { describe, expect, it } from "vitest"
import { originalValueFromNormalized } from "../../src"

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
