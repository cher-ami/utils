/**
 * Returns a string with all the classes passed as arguments
 * Useful to compose classes in jsx
 *
 * @param classes: List of classes
 * @returns string
 * @example
 *
 *    cls("a", "b") // "a b"
 *    cls(false && "a", "b") // "b"
 *
 */
export function cls(...classes: (boolean | string)[]): string {
  return classes?.filter(Boolean).join(" ")
}
