/**
 * Workspace API
 * Agent API
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
    root.WorkspaceApi.OpenMediaChannel = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.Kvpair);
  }
}(this, function(ApiClient, Kvpair) {
  'use strict';




  /**
   * The OpenMediaChannel model module.
   * @module model/OpenMediaChannel
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>OpenMediaChannel</code>.
   * @alias module:model/OpenMediaChannel
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>OpenMediaChannel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OpenMediaChannel} obj Optional instance to populate.
   * @return {module:model/OpenMediaChannel} The populated <code>OpenMediaChannel</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('dnd')) {
        obj['dnd'] = ApiClient.convertToType(data['dnd'], 'Boolean');
      }
      if (data.hasOwnProperty('reasons')) {
        obj['reasons'] = ApiClient.convertToType(data['reasons'], [Kvpair]);
      }
      if (data.hasOwnProperty('interactions')) {
        obj['interactions'] = ApiClient.convertToType(data['interactions'], ['String']);
      }
      if (data.hasOwnProperty('capabilities')) {
        obj['capabilities'] = ApiClient.convertToType(data['capabilities'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} state
   */
  exports.prototype['state'] = undefined;
  /**
   * @member {Boolean} dnd
   */
  exports.prototype['dnd'] = undefined;
  /**
   * A key/value pairs list of a data structure that provides additional information associated with the state.
   * @member {Array.<module:model/Kvpair>} reasons
   */
  exports.prototype['reasons'] = undefined;
  /**
   * @member {Array.<String>} interactions
   */
  exports.prototype['interactions'] = undefined;
  /**
   * @member {Array.<String>} capabilities
   */
  exports.prototype['capabilities'] = undefined;



  return exports;
}));

