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
    define(['ApiClient', 'model/Kvpair'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Kvpair'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.VoicecallsidsinglestepconferenceData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.Kvpair);
  }
}(this, function(ApiClient, Kvpair) {
  'use strict';




  /**
   * The VoicecallsidsinglestepconferenceData model module.
   * @module model/VoicecallsidsinglestepconferenceData
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>VoicecallsidsinglestepconferenceData</code>.
   * @alias module:model/VoicecallsidsinglestepconferenceData
   * @class
   * @param destination {String} Number of the party to conference.
   */
  var exports = function(destination) {
    var _this = this;

    _this['destination'] = destination;




  };

  /**
   * Constructs a <code>VoicecallsidsinglestepconferenceData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VoicecallsidsinglestepconferenceData} obj Optional instance to populate.
   * @return {module:model/VoicecallsidsinglestepconferenceData} The populated <code>VoicecallsidsinglestepconferenceData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('destination')) {
        obj['destination'] = ApiClient.convertToType(data['destination'], 'String');
      }
      if (data.hasOwnProperty('location')) {
        obj['location'] = ApiClient.convertToType(data['location'], 'String');
      }
      if (data.hasOwnProperty('userData')) {
        obj['userData'] = ApiClient.convertToType(data['userData'], [Kvpair]);
      }
      if (data.hasOwnProperty('reasons')) {
        obj['reasons'] = ApiClient.convertToType(data['reasons'], [Kvpair]);
      }
      if (data.hasOwnProperty('extensions')) {
        obj['extensions'] = ApiClient.convertToType(data['extensions'], [Kvpair]);
      }
    }
    return obj;
  }

  /**
   * Number of the party to conference.
   * @member {String} destination
   */
  exports.prototype['destination'] = undefined;
  /**
   * Name of the remote location in the form of <SwitchName> or <T-ServerApplicationName>@<SwitchName>. When there is no need to specify a T-Server for location, this parameter must have the value NULL, not an empty string.
   * @member {String} location
   */
  exports.prototype['location'] = undefined;
  /**
   * A key/value pairs list of the user data that should be attached to the call.
   * @member {Array.<module:model/Kvpair>} userData
   */
  exports.prototype['userData'] = undefined;
  /**
   * A key/value pairs list of a data structure that provides additional information associated with this action.
   * @member {Array.<module:model/Kvpair>} reasons
   */
  exports.prototype['reasons'] = undefined;
  /**
   * A key/value pairs list of additional data.
   * @member {Array.<module:model/Kvpair>} extensions
   */
  exports.prototype['extensions'] = undefined;



  return exports;
}));


