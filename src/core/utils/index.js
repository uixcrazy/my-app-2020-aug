export { default as getSafeValue } from "./get-safe-value";
export { default as getScrollbarWidth } from "./get-scrollbar-width";
/**
 *  new Intl.NumberFormat('en-GB', { minimumIntegerDigits: 2,maximumSignificantDigits: 2 }).format(monthFinal.month);
 */

// function validateEmail(email) {
//     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

// export const pad = (num, size) => {
//   var s = num+"";
//   while (s.length < size) s = "0" + s;
//   return s;
// }

// export const pickerLang = {
//   months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//   from: 'From', to: 'To',
// };

// export const makeText = m => {
//   if (m && m.year && m.month) return (pickerLang.months[m.month - 1] + ` ` + m.year)
//   return '?'
// };

// export const generateTooltipKey = () => Math.random().toString().slice(2);
// export const label2Id = str => str.toLowerCase().replace(/[^a-zA-Z ]/g, "").replace(/\s+/g, "-");

// export const isNil = (value) => typeof value === 'undefined' || value === null;
// export const isArrayEmpty = (array) => !Array.isArray(array) || !array.length;
// export const isArrayAvailable = (array) => Array.isArray(array) && array.length>0;
// export const isObjectEmpty = (obj) => Object.keys(obj).length === 0 && obj.constructor === Object;

// // export const isNormalInteger = (str) => /^\+?([1-9]\d*)$/.test(str);

// export function isNormalInteger(str) {
//   return /^\+?(0|[1-9]\d*)$/.test(str);
// }

export function getCleanUrl(url) {
  return url.replace(/#.*$/, '').replace(/\?.*$/, '');
};
