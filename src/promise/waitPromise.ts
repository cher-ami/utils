/**
 * Returns a promise that resolves after a delay
 * @param {number} delay
 *
 * ex:
 *    await waitPromise(1000)
 *
 */
export function waitPromise(delay: number = 1000): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, delay))
}
