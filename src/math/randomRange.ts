/**
 * Get random value between min and max (include)
 * @param min
 * @param max
 * @param decimalNumber 1 = 0.1, 2 = 0.01, 3 = 0.001
 */
export function randomRange(min: number, max: number, decimalNumber = 0): number {
  if (decimalNumber < 0) return
  return parseFloat((Math.random() * (max - min) + min).toFixed(decimalNumber))
}
