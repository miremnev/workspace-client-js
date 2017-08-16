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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.UcslucenesearchinteractionData = factory(root.WorkspaceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UcslucenesearchinteractionData model module.
   * @module model/UcslucenesearchinteractionData
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>UcslucenesearchinteractionData</code>.
   * @alias module:model/UcslucenesearchinteractionData
   * @class
   * @param query {String} The query to do the lucene search for contacts
   */
  var exports = function(query) {
    var _this = this;


    _this['query'] = query;


  };

  /**
   * Constructs a <code>UcslucenesearchinteractionData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UcslucenesearchinteractionData} obj Optional instance to populate.
   * @return {module:model/UcslucenesearchinteractionData} The populated <code>UcslucenesearchinteractionData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('contactAttributes')) {
        obj['contactAttributes'] = ApiClient.convertToType(data['contactAttributes'], ['String']);
      }
      if (data.hasOwnProperty('query')) {
        obj['query'] = ApiClient.convertToType(data['query'], 'String');
      }
      if (data.hasOwnProperty('searchMyHistory')) {
        obj['searchMyHistory'] = ApiClient.convertToType(data['searchMyHistory'], 'Boolean');
      }
      if (data.hasOwnProperty('maxResults')) {
        obj['maxResults'] = ApiClient.convertToType(data['maxResults'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The list of contact attributes to be returned for each contact in response
   * @member {Array.<String>} contactAttributes
   */
  exports.prototype['contactAttributes'] = undefined;
  /**
   * The query to do the lucene search for contacts
   * @member {String} query
   */
  exports.prototype['query'] = undefined;
  /**
   * Indicates if the search is performed among the history of interactions of the logged in agent
   * @member {Boolean} searchMyHistory
   */
  exports.prototype['searchMyHistory'] = undefined;
  /**
   * The maximum number of contacts to be returned
   * @member {Number} maxResults
   */
  exports.prototype['maxResults'] = undefined;



  return exports;
}));


