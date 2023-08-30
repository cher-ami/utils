/**
 * Share Urls
 * find share url: https://bit.ly/3i3Lwgj
 *
 */

/**
 * Facebook
 * @param siteUrl
 */
export const facebookShareUrl = (siteUrl: string = window.location.href): string =>
  `https://www.facebook.com/sharer/sharer.php?u=${siteUrl}`

/**
 * LinkedIn
 * @param siteUrl
 */
export const linkedInShareUrl = (siteUrl: string = window.location.href): string =>
  `https://www.linkedin.com/sharing/share-offsite/?url=${siteUrl}`

/**
 * Twitter
 * @param url
 * @param text
 * @param via
 * @param hashtags
 */
export const twitterShareUrl = (
  url: string = window.location.href,
  text?: string,
  via?: string,
  hashtags?: string
): string =>
  [
    `https://twitter.com/intent/tweet`,
    `?url=${url}`,
    text && `&text=${text}`,
    via && `&text=${via}`,
    hashtags && `&hashtags=${hashtags}`,
  ]
    .filter(e => e)
    .join("")

/**
 * Facebook messenger
 * @param url
 * @param facebookAppId
 * @param isHandedDevice
 */
// prettier-ignore
export const facebookMessengerShareUrl = (
  url: string,
  isHandedDevice: boolean,
  facebookAppId?: number
): string => {
  const appId = facebookAppId ? `&app_id=${encodeURIComponent(facebookAppId)}` : ""

  return isHandedDevice
    ? `fb-messenger://share/?link=${encodeURIComponent(url)}${appId}`
    : `http://www.facebook.com/dialog/send/?link=${url}&redirect_uri=${url}${appId}`;
}

/**
 * Whatsapp
 * @param url
 * @param text
 * @param isHandedDevice
 */
export const whatsappShareUrl = (
  url: string,
  text: string,
  isHandedDevice: boolean
): string =>
  isHandedDevice
    ? `whatsapp://send?text=${text}%20${url}`
    : `https://api.whatsapp.com/send?text=${text}%20${url}`

/**
 * Native share on mobile
 * @param url
 * @param text
 * @param isHandedDevice
 */
export const nativeSharePopin = async (
  title: string = document.title,
  text: string,
  url: string = window.location.href
) => {
  try {
    await navigator.share({ title, text, url })
  } catch (err) {
    console.log("Error")
  }
}
