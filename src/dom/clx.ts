/**
 * Returns a string with all the classes passed as arguments
 * Useful to compose classes in jsx
 *
 * @param classes: List of classes
 * @returns string
 * @example
 *
 *    clx("a", "b") // "a b"
 *    clx(false && "a", "b") // "b"
 *
 */
export function clx(...classes: (boolean | string)[]): string {
  return classes?.filter(Boolean).join(" ")
}
