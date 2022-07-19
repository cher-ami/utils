/**
 * getCssVars
 * Returns css var value
 * @param varName
 * @param target
 */
export function getCssVariable(
  varName: string,
  target = document.documentElement
): string {
  return getComputedStyle(target).getPropertyValue(varName)
}
