import { SketchFormat } from 'sketch-types';
/**
 * Versions based on discussion info: http://sketchplugins.com/d/316-sketch-version
 */
// Internal Sketch Version (ex: 95 => v47 and below)
const SKETCH_HIGHEST_COMPATIBLE_VERSION = '95';

/**
 * Convert Sketch JSON to Sketch Native Object
 *
 * @param  sketchJSON Sketch JSON
 * @param {String} version
 */
export const fromSJSON = (sketchJSON: JSON, version = SKETCH_HIGHEST_COMPATIBLE_VERSION): any => {
  const unarchivedObjectFromDictionary =
    MSJSONDictionaryUnarchiver.unarchivedObjectFromDictionary_asVersion_corruptionDetected_error;
  const decoded = unarchivedObjectFromDictionary(sketchJSON, version, null, null);

  const mutableClass = decoded.class().mutableClass();
  return mutableClass.alloc().initWithImmutableModelObject(decoded);
};

/**
 * Convert Sketch Native Object to Sketch JSON
 *
 * @param layer
 */
export const toSJSON = (layer: any): SketchFormat.AnyObject | undefined => {
  if (!layer) {
    return;
  }
  const sketchObject = layer.sketchObject ?? layer;

  const imm = sketchObject.immutableModelObject();

  const data = MSJSONDataArchiver.archiveStringWithRootObject_error(imm, null);

  return data ? JSON.parse(data) : data;
};
