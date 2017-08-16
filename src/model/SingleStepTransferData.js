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
    define(['ApiClient', 'model/VoicecallsidsinglesteptransferData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./VoicecallsidsinglesteptransferData'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.SingleStepTransferData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.VoicecallsidsinglesteptransferData);
  }
}(this, function(ApiClient, VoicecallsidsinglesteptransferData) {
  'use strict';




  /**
   * The SingleStepTransferData model module.
   * @module model/SingleStepTransferData
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>SingleStepTransferData</code>.
   * @alias module:model/SingleStepTransferData
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>SingleStepTransferData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SingleStepTransferData} obj Optional instance to populate.
   * @return {module:model/SingleStepTransferData} The populated <code>SingleStepTransferData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = VoicecallsidsinglesteptransferData.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/VoicecallsidsinglesteptransferData} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


