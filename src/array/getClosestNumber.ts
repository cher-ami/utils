/**
 * Returns closest number in array
 *
 * Example:
 * const array = [0, 0.25, 0.5, 0.75, 1];
 * getClosestNumberInArray(0.2, array); // 0.25
 * getClosestNumberInArray(0.6, array); // 0.5
 *
 * @param input: number
 * @param array: number[]
 */
export function getClosestNumberInArray(
  input: number,
  array: number[],
): number {
  if (input == null || array?.length < 1) return

  return array.reduce((a, b) =>
    Math.abs(b - input) < Math.abs(a - input) ? b : a,
  )
}
