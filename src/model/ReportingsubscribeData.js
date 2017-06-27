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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.ReportingsubscribeData = factory(root.WorkspaceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ReportingsubscribeData model module.
   * @module model/ReportingsubscribeData
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ReportingsubscribeData</code>.
   * @alias module:model/ReportingsubscribeData
   * @class
   * @param connectionId {String} 
   * @param statistics {Array.<String>} 
   */
  var exports = function(connectionId, statistics) {
    var _this = this;

    _this['connectionId'] = connectionId;
    _this['statistics'] = statistics;
  };

  /**
   * Constructs a <code>ReportingsubscribeData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReportingsubscribeData} obj Optional instance to populate.
   * @return {module:model/ReportingsubscribeData} The populated <code>ReportingsubscribeData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('connectionId')) {
        obj['connectionId'] = ApiClient.convertToType(data['connectionId'], 'String');
      }
      if (data.hasOwnProperty('statistics')) {
        obj['statistics'] = ApiClient.convertToType(data['statistics'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {String} connectionId
   */
  exports.prototype['connectionId'] = undefined;
  /**
   * @member {Array.<String>} statistics
   */
  exports.prototype['statistics'] = undefined;



  return exports;
}));


