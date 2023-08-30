import { describe, expect, it } from "vitest"
import { normalizeValue } from "../../src"

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
