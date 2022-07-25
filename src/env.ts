/**
 * is handheld device check
 */
export const isHandheldDevice: boolean =
  /(tablet|ipad|playbook|silk)|(android(?!.*mobi))|Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/i.test(
    navigator.userAgent
  )
