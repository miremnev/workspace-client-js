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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.UcsresponsesidgetdetailsData = factory(root.WorkspaceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UcsresponsesidgetdetailsData model module.
   * @module model/UcsresponsesidgetdetailsData
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>UcsresponsesidgetdetailsData</code>.
   * @alias module:model/UcsresponsesidgetdetailsData
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>UcsresponsesidgetdetailsData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UcsresponsesidgetdetailsData} obj Optional instance to populate.
   * @return {module:model/UcsresponsesidgetdetailsData} The populated <code>UcsresponsesidgetdetailsData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('version')) {
        obj['version'] = ApiClient.convertToType(data['version'], 'Number');
      }
      if (data.hasOwnProperty('attachments')) {
        obj['attachments'] = ApiClient.convertToType(data['attachments'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Standard Response version number
   * @member {Number} version
   */
  exports.prototype['version'] = undefined;
  /**
   * true to get attachments
   * @member {Boolean} attachments
   */
  exports.prototype['attachments'] = undefined;



  return exports;
}));

