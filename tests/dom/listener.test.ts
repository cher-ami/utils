import { describe, it, vi, expect } from "vitest"
import { listen, listenCompose, listenOnce } from "../../src/dom/listener"
import { getDOM } from "../_test-utils/getDOM"

describe("listener", () => {
  it("should listen to events", () => {
    const { win, el } = getDOM()

    const mock = vi.fn()
    const unlisten = listen(win, "click", mock)

    for (let i = 1; i <= 10; i++) el.click()
    expect(mock).toHaveBeenCalledTimes(10)

    unlisten()
    for (let i = 1; i <= 10; i++) el.click()
    expect(mock).toHaveBeenCalledTimes(10)
  })

  it("should accept multiple event", () => {
    const { el } = getDOM()
    const mock = vi.fn()
    listen(el, ["click", "scroll"], () => {
      mock()
    })
    el.click()
    expect(mock).toHaveBeenCalledTimes(1)
  })

  it("should execute callback once", () => {
    const { el } = getDOM()
    const mock = vi.fn()
    listenOnce(el, "click", mock)
    for (let i = 1; i <= 10; i++) el.click()
    expect(mock).toHaveBeenCalledTimes(1)
  })

  it("should accept composition", () => {
    const { doc, el } = getDOM()
    const el2 = doc.createElement("div")
    const mock = vi.fn()
    const mock2 = vi.fn()

    const unlisten = listenCompose(
      listen(el, "click", mock),
      listen(el2, "click", mock2),
    )

    el.click()
    el2.click()
    el2.click()
    expect(mock).toHaveBeenCalledTimes(1)
    expect(mock2).toHaveBeenCalledTimes(2)

    unlisten()

    el.click()
    el2.click()
    expect(mock).toHaveBeenCalledTimes(1)
    expect(mock2).toHaveBeenCalledTimes(2)
  })
})
