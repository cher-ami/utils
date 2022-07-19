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
    .filter((e) => e)
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
  facebookAppId: number,
  isHandedDevice: boolean
): string =>
  isHandedDevice
    ? `fb-messenger://share?link=${encodeURIComponent(url)}&app_id=${encodeURIComponent(facebookAppId)}`
    : `http://www.facebook.com/dialog/send?app_id=${facebookAppId}&link=${url}&redirect_uri=${url}`;

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
