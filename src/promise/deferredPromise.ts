/**
 * Create a deferred promise who can be resolved or rejected from anywhere.
 * Mainly stolen from https://github.com/willybrauner/deferred-promise
 * @credit Willy Brauner https://github.com/willybrauner
 * @name deferredPromise
 * @return TDeferredPromise
 *  ex:
 *
 *      const deferred = deferredPromise();
 *
 *      deferred.promise.then(() => {
 *        // deferredPromise is resolved!
 *      });
 *
 *      // when needed, resolve this promise
 *      deferred.resolve();
 *
 *      // or reject it
 *      deferred.reject();
 *
 */

export type TDeferredPromise<T = any> = {
  promise: Promise<T>
  resolve: (resolve?: T) => void
  reject: (error?: Error | any) => void
}

export function deferredPromise<T = any>(): TDeferredPromise<T> {
  const deferred: TDeferredPromise<T> | any = {}

  deferred.promise = new Promise((resolve, reject) => {
    deferred.resolve = resolve
    deferred.reject = reject
  })

  return deferred
}
