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
    define(['ApiClient', 'model/CallParticipants', 'model/Kvpair'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CallParticipants'), require('./Kvpair'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.Call = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.CallParticipants, root.WorkspaceApi.Kvpair);
  }
}(this, function(ApiClient, CallParticipants, Kvpair) {
  'use strict';




  /**
   * The Call model module.
   * @module model/Call
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Call</code>.
   * @alias module:model/Call
   * @class
   */
  var exports = function() {
    var _this = this;

















  };

  /**
   * Constructs a <code>Call</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Call} obj Optional instance to populate.
   * @return {module:model/Call} The populated <code>Call</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('previousConnId')) {
        obj['previousConnId'] = ApiClient.convertToType(data['previousConnId'], 'String');
      }
      if (data.hasOwnProperty('parentConnId')) {
        obj['parentConnId'] = ApiClient.convertToType(data['parentConnId'], 'String');
      }
      if (data.hasOwnProperty('phoneNumber')) {
        obj['phoneNumber'] = ApiClient.convertToType(data['phoneNumber'], 'String');
      }
      if (data.hasOwnProperty('connId')) {
        obj['connId'] = ApiClient.convertToType(data['connId'], 'String');
      }
      if (data.hasOwnProperty('callUuid')) {
        obj['callUuid'] = ApiClient.convertToType(data['callUuid'], 'String');
      }
      if (data.hasOwnProperty('callType')) {
        obj['callType'] = ApiClient.convertToType(data['callType'], 'String');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('capabilities')) {
        obj['capabilities'] = ApiClient.convertToType(data['capabilities'], ['String']);
      }
      if (data.hasOwnProperty('participants')) {
        obj['participants'] = ApiClient.convertToType(data['participants'], [CallParticipants]);
      }
      if (data.hasOwnProperty('dnis')) {
        obj['dnis'] = ApiClient.convertToType(data['dnis'], 'String');
      }
      if (data.hasOwnProperty('ani')) {
        obj['ani'] = ApiClient.convertToType(data['ani'], 'String');
      }
      if (data.hasOwnProperty('recordingState')) {
        obj['recordingState'] = ApiClient.convertToType(data['recordingState'], 'String');
      }
      if (data.hasOwnProperty('userData')) {
        obj['userData'] = ApiClient.convertToType(data['userData'], [Kvpair]);
      }
      if (data.hasOwnProperty('extensions')) {
        obj['extensions'] = ApiClient.convertToType(data['extensions'], [Kvpair]);
      }
    }
    return obj;
  }

  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} previousConnId
   */
  exports.prototype['previousConnId'] = undefined;
  /**
   * @member {String} parentConnId
   */
  exports.prototype['parentConnId'] = undefined;
  /**
   * @member {String} phoneNumber
   */
  exports.prototype['phoneNumber'] = undefined;
  /**
   * @member {String} connId
   */
  exports.prototype['connId'] = undefined;
  /**
   * @member {String} callUuid
   */
  exports.prototype['callUuid'] = undefined;
  /**
   * @member {String} callType
   */
  exports.prototype['callType'] = undefined;
  /**
   * @member {String} state
   */
  exports.prototype['state'] = undefined;
  /**
   * @member {Array.<String>} capabilities
   */
  exports.prototype['capabilities'] = undefined;
  /**
   * @member {Array.<module:model/CallParticipants>} participants
   */
  exports.prototype['participants'] = undefined;
  /**
   * @member {String} dnis
   */
  exports.prototype['dnis'] = undefined;
  /**
   * @member {String} ani
   */
  exports.prototype['ani'] = undefined;
  /**
   * @member {String} recordingState
   */
  exports.prototype['recordingState'] = undefined;
  /**
   * A key/value pairs list of a data structure that provides additional information associated with this action.
   * @member {Array.<module:model/Kvpair>} userData
   */
  exports.prototype['userData'] = undefined;
  /**
   * A key/value pairs list of a data structure that provides additional information associated with this action.
   * @member {Array.<module:model/Kvpair>} extensions
   */
  exports.prototype['extensions'] = undefined;



  return exports;
}));


