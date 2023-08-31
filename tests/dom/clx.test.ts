import { describe, it, expect } from "vitest"
import { clx } from "../../src/dom/clx"

describe("classes", () => {
  it("should compose clx list", () => {
    // simple
    expect(clx("a", "b")).toBe("a b")

    // with boolean
    expect(clx(false && "a", "b")).toBe("b")
    expect(clx(true && "foo", true && "bar")).toBe("foo bar")
    expect(clx(false && "foo", true && "bar")).toBe("bar")

    // ternary operator
    expect(clx(false ? "foo" : "voo", true && "bar")).toBe("voo bar")

    // return empty string if no clx
    expect(clx(false)).toBe("")
    expect(clx(false && "foo")).toBe("")
    expect(clx(undefined)).toBe("")
    expect(clx(null)).toBe("")
  })
})
