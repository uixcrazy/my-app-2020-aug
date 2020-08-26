
/**
 * http://hgoebl.github.io/mobile-detect.js/doc/MobileDetect.html
 * https://nextjs.org/docs/#fetching-data-and-component-lifecycle
 * if (window.innerWidth <= 800 && window.innerHeight <= 600)
 */

import MobileDetect from 'mobile-detect';

export const isMobileDetect = (userAgent) => {
  const ua = userAgent || (process.browser && navigator && navigator.userAgent);
  if (ua) {
    const md = new MobileDetect(ua);
    return md.mobile() ? true : false;
  }
  return false;
};

export default isMobileDetect;
