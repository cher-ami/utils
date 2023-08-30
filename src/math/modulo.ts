/**
 * Returns positive modulo, even when 'n' is negative.
 * @from http://stackoverflow.com/questions/4467539/javascript-modulo-not-behaving
 * @article https://web.archive.org/web/20090717035140if_/javascript.about.com/od/problemsolving/a/modulobug.htm
 */
export function modulo(base: number, modulo: number): number {
  return ((base % modulo) + modulo) % modulo
}
