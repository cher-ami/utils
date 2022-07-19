import { describe, expect, it } from "vitest"
import { mergeClass } from "../src/string"

describe("mergeClass", () => {
  it("should be merge string and remove values", () => {
    const test = false
    const result = mergeClass("a", !!test && "b", "c", "d", false ? "e" : null)
    expect(result).toBe("a c d")
  })
})
