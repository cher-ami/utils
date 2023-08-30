import { describe, expect, it } from "vitest"
import { mergeStrings } from "../../src"

describe("mergeStrings", () => {

  it("should be merge strings and remove values", () => {
    const test = false
    const result = mergeStrings(["a", !!test && "b", "c", "d", false ? "e" : null])
    expect(result).toBe("a c d")
  })

  it("should return undefined", () => {
    expect(mergeStrings([])).toBeUndefined()
  })
})
