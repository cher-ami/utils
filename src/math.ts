/**
 * Return value clamp between min and max value
 * @param min
 * @param value
 * @param max
 */
export function clamp(min: number, value: number, max: number): number {
  return Math.max(min, Math.min(value, max))
}

/**
 * Returns positive modulo, even when 'n' is negative.
 * @from http://stackoverflow.com/questions/4467539/javascript-modulo-not-behaving
 * @article https://web.archive.org/web/20090717035140if_/javascript.about.com/od/problemsolving/a/modulobug.htm
 */
export function modulo(base: number, modulo: number): number {
  return ((base % modulo) + modulo) % modulo
}

/**
 * Get random value between min and max (include)
 * @param min
 * @param max
 */
export function randomRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
