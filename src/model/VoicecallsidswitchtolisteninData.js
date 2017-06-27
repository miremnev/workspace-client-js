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
    root.WorkspaceApi.VoicecallsidswitchtolisteninData = factory(root.WorkspaceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The VoicecallsidswitchtolisteninData model module.
   * @module model/VoicecallsidswitchtolisteninData
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>VoicecallsidswitchtolisteninData</code>.
   * @alias module:model/VoicecallsidswitchtolisteninData
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>VoicecallsidswitchtolisteninData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VoicecallsidswitchtolisteninData} obj Optional instance to populate.
   * @return {module:model/VoicecallsidswitchtolisteninData} The populated <code>VoicecallsidswitchtolisteninData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('monitoringScope')) {
        obj['monitoringScope'] = ApiClient.convertToType(data['monitoringScope'], 'String');
      }
    }
    return obj;
  }

  /**
   * The monitoring scope (Call/Agent).
   * @member {module:model/VoicecallsidswitchtolisteninData.MonitoringScopeEnum} monitoringScope
   */
  exports.prototype['monitoringScope'] = undefined;


  /**
   * Allowed values for the <code>monitoringScope</code> property.
   * @enum {String}
   * @readonly
   */
  exports.MonitoringScopeEnum = {
    /**
     * value: "Call"
     * @const
     */
    "Call": "Call",
    /**
     * value: "Agent"
     * @const
     */
    "Agent": "Agent"  };


  return exports;
}));


