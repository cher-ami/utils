import { describe, expect, it } from "vitest"
import { mergeStrings } from "../src/string"

describe("mergeClass", () => {
  it("should be merge strings and remove values", () => {
    const test = false
    const result = mergeStrings(["a", !!test && "b", "c", "d", false ? "e" : null])
    expect(result).toBe("a c d")
  })

  it("should return undefined", () => {
    const result = mergeStrings([])
    expect(result).toBeUndefined()
  })
})
