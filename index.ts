/**
 * Versions based on discussion info: http://sketchplugins.com/d/316-sketch-version
 */
// Internal Sketch Version (ex: 95 => v47 and below)
const SKETCH_HIGHEST_COMPATIBLE_VERSION = '95';

/**
 * transform Sketch JSON to Sketch Native Object
 *
 * if there is any error then throw it
 * @param  json JSON 对象
 * @param {String} version
 */
export const fromSJSON = (
  json: JSON,
  version = SKETCH_HIGHEST_COMPATIBLE_VERSION
): any => {
  const err = MOPointer.alloc().init();
  const unarchivedObjectFromDictionary =
    // above v64
    MSJSONDictionaryUnarchiver.unarchivedObjectFromDictionary_asVersion_corruptionDetected_error ||
    // below v64
    MSJSONDictionaryUnarchiver.unarchiveObjectFromDictionary_asVersion_corruptionDetected_error;
  const decoded = unarchivedObjectFromDictionary(json, version, null, err);

  if (err.value() !== null) {
    console.error(err.value());
    throw new Error(err.value());
  }

  const mutableClass = decoded.class().mutableClass();
  return mutableClass.alloc().initWithImmutableModelObject(decoded);
};

export default fromSJSON;
