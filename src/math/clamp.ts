/**
 * Return value clamp between min and max value
 * @param min
 * @param value
 * @param max
 */
export function clamp(min: number, value: number, max: number): number {
  return Math.max(min, Math.min(value, max))
}
