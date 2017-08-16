/**
 * Workspace API
 * Application API used by Workspace Web Edition
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Kvpair'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Kvpair'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.VoicecallsidsenddtmfData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.Kvpair);
  }
}(this, function(ApiClient, Kvpair) {
  'use strict';




  /**
   * The VoicecallsidsenddtmfData model module.
   * @module model/VoicecallsidsenddtmfData
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>VoicecallsidsenddtmfData</code>.
   * @alias module:model/VoicecallsidsenddtmfData
   * @class
   * @param dtmfDigits {String} The digits that should be sent.
   */
  var exports = function(dtmfDigits) {
    var _this = this;



    _this['dtmfDigits'] = dtmfDigits;
  };

  /**
   * Constructs a <code>VoicecallsidsenddtmfData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VoicecallsidsenddtmfData} obj Optional instance to populate.
   * @return {module:model/VoicecallsidsenddtmfData} The populated <code>VoicecallsidsenddtmfData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('reasons')) {
        obj['reasons'] = ApiClient.convertToType(data['reasons'], [Kvpair]);
      }
      if (data.hasOwnProperty('extensions')) {
        obj['extensions'] = ApiClient.convertToType(data['extensions'], [Kvpair]);
      }
      if (data.hasOwnProperty('dtmfDigits')) {
        obj['dtmfDigits'] = ApiClient.convertToType(data['dtmfDigits'], 'String');
      }
    }
    return obj;
  }

  /**
   * A key/value pairs list of a data structure that provides additional information associated with this action.
   * @member {Array.<module:model/Kvpair>} reasons
   */
  exports.prototype['reasons'] = undefined;
  /**
   * A key/value pairs list of additional data.
   * @member {Array.<module:model/Kvpair>} extensions
   */
  exports.prototype['extensions'] = undefined;
  /**
   * The digits that should be sent.
   * @member {String} dtmfDigits
   */
  exports.prototype['dtmfDigits'] = undefined;



  return exports;
}));


