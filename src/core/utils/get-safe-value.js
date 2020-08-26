/**
 * copies ::: https://silvantroxler.ch/2017/avoid-cannot-read-property-of-undefined/
 * use it like this
      getSafeValue(() => obj.a.lot.of.properties);

 * or add an optional default value
      getSafeValue(() => obj.a.lot.of.properties, 'nothing');
 */
export default function getSafeValue(fn, defaultValue) {
  try {
    return fn();
  } catch (e) {
    return defaultValue;
  }
}
