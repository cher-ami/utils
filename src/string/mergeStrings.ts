/**
 * merge strings
 */
export function mergeStrings(str: any[], join: string = " "): string {
  if (str?.length === 0) return
  return str.reduce((a, b) => (b ? a.concat(b) : a), []).join(join)
}
