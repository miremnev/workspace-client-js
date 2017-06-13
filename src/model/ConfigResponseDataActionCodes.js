/**
 * Workspace Application API
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
    if (!root.WorkspaceApplicationApi) {
      root.WorkspaceApplicationApi = {};
    }
    root.WorkspaceApplicationApi.ConfigResponseDataActionCodes = factory(root.WorkspaceApplicationApi.ApiClient, root.WorkspaceApplicationApi.Kvpair);
  }
}(this, function(ApiClient, Kvpair) {
  'use strict';




  /**
   * The ConfigResponseDataActionCodes model module.
   * @module model/ConfigResponseDataActionCodes
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ConfigResponseDataActionCodes</code>.
   * @alias module:model/ConfigResponseDataActionCodes
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ConfigResponseDataActionCodes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConfigResponseDataActionCodes} obj Optional instance to populate.
   * @return {module:model/ConfigResponseDataActionCodes} The populated <code>ConfigResponseDataActionCodes</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('userProperties')) {
        obj['userProperties'] = ApiClient.convertToType(data['userProperties'], [Kvpair]);
      }
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} code
   */
  exports.prototype['code'] = undefined;
  /**
   * @member {Array.<module:model/Kvpair>} userProperties
   */
  exports.prototype['userProperties'] = undefined;



  return exports;
}));


