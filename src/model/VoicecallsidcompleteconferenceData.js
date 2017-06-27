/**
 * Workspace API
 * Application API used by Workspace Web Edition
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
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
    root.WorkspaceApi.VoicecallsidcompleteconferenceData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.Kvpair);
  }
}(this, function(ApiClient, Kvpair) {
  'use strict';




  /**
   * The VoicecallsidcompleteconferenceData model module.
   * @module model/VoicecallsidcompleteconferenceData
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>VoicecallsidcompleteconferenceData</code>.
   * @alias module:model/VoicecallsidcompleteconferenceData
   * @class
   * @param currentConnId {String} Connection identifier of the consultation call; the consultation call will be deleted after completion of operation.
   */
  var exports = function(currentConnId) {
    var _this = this;

    _this['currentConnId'] = currentConnId;


  };

  /**
   * Constructs a <code>VoicecallsidcompleteconferenceData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VoicecallsidcompleteconferenceData} obj Optional instance to populate.
   * @return {module:model/VoicecallsidcompleteconferenceData} The populated <code>VoicecallsidcompleteconferenceData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('currentConnId')) {
        obj['currentConnId'] = ApiClient.convertToType(data['currentConnId'], 'String');
      }
      if (data.hasOwnProperty('reasons')) {
        obj['reasons'] = ApiClient.convertToType(data['reasons'], [Kvpair]);
      }
      if (data.hasOwnProperty('extensions')) {
        obj['extensions'] = ApiClient.convertToType(data['extensions'], [Kvpair]);
      }
    }
    return obj;
  }

  /**
   * Connection identifier of the consultation call; the consultation call will be deleted after completion of operation.
   * @member {String} currentConnId
   */
  exports.prototype['currentConnId'] = undefined;
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



  return exports;
}));


