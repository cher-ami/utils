import {describe, expect, it} from "vitest"
import { deferredPromise, waitPromise } from "../../src"

/**
 * @credit Willy Brauner https://github.com/willybrauner
 * Mainly stolen from https://github.com/willybrauner/deferred-promise/blob/main/test/index.test.ts
 */
describe("deferredPromise", () => {
  it('should resolve the deferred promise', async () => {
    let resolve = false
    let reject = false
    const deferred = deferredPromise<void>()

    deferred.promise
      .then(() => {
        resolve = true
      })
      .catch(() => {
        reject = true
      })

    expect(resolve).toBe(false)
    expect(reject).toBe(false)

    deferred.resolve()
    await waitPromise(0)

    expect(resolve).toBe(true)
    expect(reject).toBe(false)
  })

  it('should reject the deferred promise', async () => {

    let resolve = false
    let reject = false
    const deferred = deferredPromise<void>()

    deferred.promise
      .then(() => {
        resolve = true
      })
      .catch(() => {
        reject = true
      })

    expect(resolve).toBe(false)
    expect(reject).toBe(false)

    deferred.reject()
    await waitPromise(0)

    expect(resolve).toBe(false)
    expect(reject).toBe(true)
  })

})
