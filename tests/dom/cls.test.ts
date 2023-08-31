import { describe, it, expect } from "vitest"
import { cls } from "../../src/dom/cls"

describe("cls", () => {
  it("should compose cls list", () => {
    // simple
    expect(cls("a", "b")).toBe("a b")

    // with boolean
    expect(cls(false && "a", "b")).toBe("b")
    expect(cls(true && "foo", true && "bar")).toBe("foo bar")
    expect(cls(false && "foo", true && "bar")).toBe("bar")

    // ternary operator
    expect(cls(false ? "foo" : "voo", true && "bar")).toBe("voo bar")

    // return empty string if no cls
    expect(cls(false)).toBe("")
    expect(cls(false && "foo")).toBe("")
    expect(cls(undefined)).toBe("")
    expect(cls(null)).toBe("")
  })
})
