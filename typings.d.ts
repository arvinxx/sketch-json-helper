declare class NSString extends String {
  static stringWithContentsOfFile_encoding_error(...args: any[]): NSString;
  static stringWithFormat(...args: any[]): NSString;
  static stringWithString(rawString: string): NSString;

  dataUsingEncoding(NSUTF8StringEncoding: number): any;
}

declare class NSObject {
  /**
   * Implemented by subclasses to initialize a new object (the receiver)
   * immediately after memory for it has been allocated.
   */
  init(): NSObject;

  static alloc(): NSObject;
  class(): any;

  get value(): any;
}

/**
 * MO 指针
 */
declare class MOPointer extends NSObject {}

declare class MSBaseUnarchiver extends NSObject {
  static unarchiveObjectWithData(...args: any[]): any;
  /* typeEncoding=@40@0:8@16^q24^@32 */
  static unarchiveObjectWithData_actualVersion_error(...args: any[]): any;
  /* typeEncoding=@48@0:8@16q24^c32^@40 */
  static unarchiveObjectWithData_asVersion_corruptionDetected_error(
    ...args: any[]
  ): any;

  init(...args: any[]): any;
}

declare class MSJSONUnarchiver extends MSBaseUnarchiver /* implements BCJSONDecoderDelegate */ {
  /* typeEncoding=v16@0:8 */
  static defineReplacementClasses(): void;
  /* typeEncoding=v16@0:8 */
  static load(): void;
  /* typeEncoding=@24@0:8@16 */
  static unarchiverFromCoder(...args: any[]): any;

  /* typeEncoding=@16@0:8 */
  init(...args: any[]): any;
}

declare class MSJSONDictionaryUnarchiver extends MSJSONUnarchiver {
  /**
   * @deprecated
   * @param args
   */
  static unarchiveObjectFromDictionary_asVersion_corruptionDetected_error(
    ...args: any[]
  ): any;

  /**
   * 64版本的方法
   **/
  static unarchivedObjectFromDictionary_asVersion_corruptionDetected_error(
    json: JSON,
    version: string,
    x: any,
    err: MOPointer
  ): any;
}
