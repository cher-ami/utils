import { describe, expect, it } from "vitest"
import { waitPromise } from "../../src"

describe("waitPromise", () => {
  it("should be resolve after delay", async () => {
    const test = async (delay: number): Promise<any> => {
      const start = performance.now()
      await waitPromise(delay)
      const now = performance.now() - start
      expect(now).toBeGreaterThanOrEqual(delay - 10)
    }
    return Promise.all([test(100), test(200), test(300)])
  })
})
