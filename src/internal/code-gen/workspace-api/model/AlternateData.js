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
    define(['ApiClient', 'model/VoicecallsidalternateData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./VoicecallsidalternateData'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.AlternateData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.VoicecallsidalternateData);
  }
}(this, function(ApiClient, VoicecallsidalternateData) {
  'use strict';




  /**
   * The AlternateData model module.
   * @module model/AlternateData
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>AlternateData</code>.
   * @alias module:model/AlternateData
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>AlternateData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AlternateData} obj Optional instance to populate.
   * @return {module:model/AlternateData} The populated <code>AlternateData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = VoicecallsidalternateData.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/VoicecallsidalternateData} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


