import { describe, expect, it } from "vitest"
import { modulo } from "../../src"

describe("modulo", () => {
  it("should always return positive modulo", () => {
    for (let n = -10; n <= 10; n++) {
      const value = modulo(n, 10)
      expect(value).toBeGreaterThanOrEqual(0)
    }
  })
})
