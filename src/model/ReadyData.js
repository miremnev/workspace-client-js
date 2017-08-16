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
    define(['ApiClient', 'model/VoicecallsidholdData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./VoicecallsidholdData'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.ReadyData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.VoicecallsidholdData);
  }
}(this, function(ApiClient, VoicecallsidholdData) {
  'use strict';




  /**
   * The ReadyData model module.
   * @module model/ReadyData
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ReadyData</code>.
   * @alias module:model/ReadyData
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ReadyData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReadyData} obj Optional instance to populate.
   * @return {module:model/ReadyData} The populated <code>ReadyData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = VoicecallsidholdData.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/VoicecallsidholdData} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


