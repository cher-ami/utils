/**
 * Returns closest number in array
 *
 * Example:
 * const array = [0, 0.25, 0.5, 0.75, 1];
 * closestNumberInArray(0.2, array); // 0.25
 * closestNumberInArray(0.6, array); // 0.5
 *
 * @param number: number
 * @param array: number[]
 */
export function closestNumberInArray(number: number, array: number[]): number {
  return array.reduce((a, b) => {
    return Math.abs(b - number) < Math.abs(a - number) ? b : a
  })
}
