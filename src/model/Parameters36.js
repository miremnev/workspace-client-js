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
    define(['ApiClient', 'model/UcssetcallcompletedData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UcssetcallcompletedData'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApplicationApi) {
      root.WorkspaceApplicationApi = {};
    }
    root.WorkspaceApplicationApi.Parameters36 = factory(root.WorkspaceApplicationApi.ApiClient, root.WorkspaceApplicationApi.UcssetcallcompletedData);
  }
}(this, function(ApiClient, UcssetcallcompletedData) {
  'use strict';




  /**
   * The Parameters36 model module.
   * @module model/Parameters36
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Parameters36</code>.
   * @alias module:model/Parameters36
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Parameters36</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Parameters36} obj Optional instance to populate.
   * @return {module:model/Parameters36} The populated <code>Parameters36</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = UcssetcallcompletedData.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/UcssetcallcompletedData} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


