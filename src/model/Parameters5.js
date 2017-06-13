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
    define(['ApiClient', 'model/VoicecallsidanswerData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./VoicecallsidanswerData'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApplicationApi) {
      root.WorkspaceApplicationApi = {};
    }
    root.WorkspaceApplicationApi.Parameters5 = factory(root.WorkspaceApplicationApi.ApiClient, root.WorkspaceApplicationApi.VoicecallsidanswerData);
  }
}(this, function(ApiClient, VoicecallsidanswerData) {
  'use strict';




  /**
   * The Parameters5 model module.
   * @module model/Parameters5
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Parameters5</code>.
   * @alias module:model/Parameters5
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Parameters5</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Parameters5} obj Optional instance to populate.
   * @return {module:model/Parameters5} The populated <code>Parameters5</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = VoicecallsidanswerData.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/VoicecallsidanswerData} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


