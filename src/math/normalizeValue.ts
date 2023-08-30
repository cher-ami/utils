import { clamp } from "./clamp"

/**
 * Normalized value
 * Return value between 0 and 1 (include)
 *
 * normalizeValue(-20, -15, 0)  // 0.25
 * normalizeValue(-20, 0, 20)   // 0.5
 * normalizeValue(0, 15, 20)    // 0.75
 *
 * @param min
 * @param value
 * @param max
 */
export const normalizeValue = (min:number, value:number, max:number): number => {
  return clamp(0, (value - min) / (max - min), 1)
}

/**
 * Original value from normalized value (between 0 & 1)
 * Return value between min and max (include)
 *
 * normalizeValue(-20, 0.25, 0)  // -15
 * normalizeValue(-20, 0.5, 20)  // 0
 * normalizeValue(0, 0.75, 20)   // 15
 *
 * @param min
 * @param normalizedValue
 * @param max
 */
export const originalValueFromNormalized = (min:number, normalizedValue:number, max:number): number => {
  return clamp(min, (normalizedValue * (max - min)) + min, max)
}
