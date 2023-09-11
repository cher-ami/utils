/**
 * Get random value between min and max (include)
 * @param min
 * @param max
 * @param decimal
 */
export function randomRange(min: number, max: number, decimal = 0): number {
  const power = Math.pow(10, decimal)
  return Math.floor(Math.random() * (max - min + 1) + min * power) / power
}
