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
    define(['ApiClient', 'model/StatisticValueForRegisterResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./StatisticValueForRegisterResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.InlineResponse2001Data = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.StatisticValueForRegisterResponse);
  }
}(this, function(ApiClient, StatisticValueForRegisterResponse) {
  'use strict';




  /**
   * The InlineResponse2001Data model module.
   * @module model/InlineResponse2001Data
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>InlineResponse2001Data</code>.
   * @alias module:model/InlineResponse2001Data
   * @class
   * @param subscriptionId {String} ID used to fetch statistics values from /reporting/{subscriptionId}
   * @param statistics {Array.<module:model/StatisticValueForRegisterResponse>} The list of all the registered statitstics.
   */
  var exports = function(subscriptionId, statistics) {
    var _this = this;

    _this['subscriptionId'] = subscriptionId;
    _this['statistics'] = statistics;
  };

  /**
   * Constructs a <code>InlineResponse2001Data</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2001Data} obj Optional instance to populate.
   * @return {module:model/InlineResponse2001Data} The populated <code>InlineResponse2001Data</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('subscriptionId')) {
        obj['subscriptionId'] = ApiClient.convertToType(data['subscriptionId'], 'String');
      }
      if (data.hasOwnProperty('statistics')) {
        obj['statistics'] = ApiClient.convertToType(data['statistics'], [StatisticValueForRegisterResponse]);
      }
    }
    return obj;
  }

  /**
   * ID used to fetch statistics values from /reporting/{subscriptionId}
   * @member {String} subscriptionId
   */
  exports.prototype['subscriptionId'] = undefined;
  /**
   * The list of all the registered statitstics.
   * @member {Array.<module:model/StatisticValueForRegisterResponse>} statistics
   */
  exports.prototype['statistics'] = undefined;



  return exports;
}));


