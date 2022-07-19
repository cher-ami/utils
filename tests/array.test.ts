import { describe, expect, it } from "vitest"
import { shuffleArray } from "../src/array"
const { log } = console

describe("shuffleArray", () => {
  it("should return the same array reference", () => {
    const arr = [1, 2, 3, 4, 5]
    const shuffled = shuffleArray(arr)
    expect(shuffled).toBe(arr)
  })

  it("should return same number of items", () => {
    const arr = [1, 2, 3, 4, 5]
    const copy = [...arr]
    const shuffled = shuffleArray(arr)
    expect(shuffled.length).toBe(copy.length)
  })
})
