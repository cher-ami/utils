/**
 * Listen to an event on an obj
 *
 * ex:
 *    const unlisten = listen(window, "resize", () => {})
 *
 *    unlisten()
 *
 * @param obj
 * @param event
 * @param callback
 * @param options
 */

export function listen<
  K extends keyof (HTMLElementEventMap | DocumentEventMap | WindowEventMap),
>(
  obj: HTMLElement | Window | Document,
  event: (K | string) | (K | string)[],
  callback: (
    event: (HTMLElementEventMap | DocumentEventMap | WindowEventMap)[K],
  ) => any,
  options?: boolean | AddEventListenerOptions,
): () => void {
  if (typeof event === "string") event = [event]
  for (let name of event) obj?.addEventListener(name, callback, options)
  return () => {
    for (let name of event) obj?.removeEventListener(name, callback, options)
  }
}

/**
 * Listen to an event on an obj, and remove the listener after the first call
 *
 * ex:
 *
 *    listenOnce(window, "resize", () => {})
 *
 * @param obj
 * @param event
 * @param callback
 * @param options
 */
export function listenOnce<
  K extends keyof (HTMLElementEventMap | DocumentEventMap | WindowEventMap),
>(
  obj: HTMLElement | Window | Document,
  event: (K | string) | (K | string)[],
  callback: (
    event: (HTMLElementEventMap | DocumentEventMap | WindowEventMap)[K],
  ) => any,
  options?: boolean | AddEventListenerOptions,
): () => void {
  const unlisten = listen(
    obj,
    event,
    (event) => {
      unlisten()
      callback(event)
    },
    options,
  )
  return unlisten
}

/**
 * Compose listeners
 *
 * ex:
 *
 *    const unlisten = listenCompose(
 *      listen(window, "resize", () => {})
 *      listen(window, "scroll", () => {})
 *    )
 *
 *    unlisten()
 *
 * @param listeners
 */
export function listenCompose(...listeners: (() => void)[]): () => void {
  return () => {
    for (let listener of listeners) listener()
  }
}
