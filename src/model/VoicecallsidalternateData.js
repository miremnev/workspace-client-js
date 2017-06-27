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
    root.WorkspaceApi.VoicecallsidalternateData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.Kvpair);
  }
}(this, function(ApiClient, Kvpair) {
  'use strict';




  /**
   * The VoicecallsidalternateData model module.
   * @module model/VoicecallsidalternateData
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>VoicecallsidalternateData</code>.
   * @alias module:model/VoicecallsidalternateData
   * @class
   * @param currentConnId {String} Connection identifier of the active call that is requested to be placed on hold. This parameter can be either a dn or a party_id, where party_id is the party identifier given by the switch.
   */
  var exports = function(currentConnId) {
    var _this = this;

    _this['currentConnId'] = currentConnId;


  };

  /**
   * Constructs a <code>VoicecallsidalternateData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VoicecallsidalternateData} obj Optional instance to populate.
   * @return {module:model/VoicecallsidalternateData} The populated <code>VoicecallsidalternateData</code> instance.
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
   * Connection identifier of the active call that is requested to be placed on hold. This parameter can be either a dn or a party_id, where party_id is the party identifier given by the switch.
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


