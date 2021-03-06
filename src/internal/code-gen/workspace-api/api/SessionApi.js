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
    define(['ApiClient', 'model/ApiErrorResponse', 'model/ApiSuccessResponse', 'model/ChannelsData', 'model/ConfigResponse', 'model/CurrentSession', 'model/Devices'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiErrorResponse'), require('../model/ApiSuccessResponse'), require('../model/ChannelsData'), require('../model/ConfigResponse'), require('../model/CurrentSession'), require('../model/Devices'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.SessionApi = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.ApiErrorResponse, root.WorkspaceApi.ApiSuccessResponse, root.WorkspaceApi.ChannelsData, root.WorkspaceApi.ConfigResponse, root.WorkspaceApi.CurrentSession, root.WorkspaceApi.Devices);
  }
}(this, function(ApiClient, ApiErrorResponse, ApiSuccessResponse, ChannelsData, ConfigResponse, CurrentSession, Devices) {
  'use strict';

  /**
   * Session service.
   * @module api/SessionApi
   * @version 1.0.0
   */

  /**
   * Constructs a new SessionApi. 
   * @alias module:api/SessionApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Activate channels for the user with the specified resources
     * The activate-channels request is used to activate voice/media for the user by declaring the channels and resources that should be used. If the channels are is successfully activated, additional information about the state of active resources (dns, channels) will be received via events. 
     * @param {module:model/ChannelsData} channelsData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.activateChannelsWithHttpInfo = function(channelsData) {
      var postBody = channelsData;

      // verify the required parameter 'channelsData' is set
      if (channelsData === undefined || channelsData === null) {
        throw new Error("Missing the required parameter 'channelsData' when calling activateChannels");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ApiSuccessResponse;

      return this.apiClient.callApi(
        '/activate-channels', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Activate channels for the user with the specified resources
     * The activate-channels request is used to activate voice/media for the user by declaring the channels and resources that should be used. If the channels are is successfully activated, additional information about the state of active resources (dns, channels) will be received via events. 
     * @param {module:model/ChannelsData} channelsData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.activateChannels = function(channelsData) {
      return this.activateChannelsWithHttpInfo(channelsData)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * DEPRECATED login the specified user (HTTP session only)
     * The login request authenticates the user and retrieves the authorization code. 
     * @param {String} redirectUri this the URI the AUTH service uses to redirect the user after authentication
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.deprecatedLoginWithHttpInfo = function(redirectUri) {
      var postBody = null;

      // verify the required parameter 'redirectUri' is set
      if (redirectUri === undefined || redirectUri === null) {
        throw new Error("Missing the required parameter 'redirectUri' when calling deprecatedLogin");
      }


      var pathParams = {
      };
      var queryParams = {
        'redirect_uri': redirectUri
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ApiSuccessResponse;

      return this.apiClient.callApi(
        '/login', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * DEPRECATED login the specified user (HTTP session only)
     * The login request authenticates the user and retrieves the authorization code. 
     * @param {String} redirectUri this the URI the AUTH service uses to redirect the user after authentication
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.deprecatedLogin = function(redirectUri) {
      return this.deprecatedLoginWithHttpInfo(redirectUri)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the business attribute hierarchy
     * Get the business attribute hierarchy
     * @param {Number} id id of the business attribute
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.getBusinessAttributeHierarchyWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getBusinessAttributeHierarchy");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ApiSuccessResponse;

      return this.apiClient.callApi(
        '/configuration/business-attribute/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get the business attribute hierarchy
     * Get the business attribute hierarchy
     * @param {Number} id id of the business attribute
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.getBusinessAttributeHierarchy = function(id) {
      return this.getBusinessAttributeHierarchyWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Read settings, action codes, business attributes and other configuration.
     * This request returns all necessary configuration items to be used by the UI. This includes action codes, business attributes, transactions and settings at the moment. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.types A comma delimited list of types used to specify what content should be returned. If not specified the default is  actionCodes, agentGroups, and settings. Valid values are actionCodes, agentGroups, settings, workspaceTransactions, and businessAttributes.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ConfigResponse} and HTTP response
     */
    this.getConfigurationWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'types': opts['types']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ConfigResponse;

      return this.apiClient.callApi(
        '/configuration', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Read settings, action codes, business attributes and other configuration.
     * This request returns all necessary configuration items to be used by the UI. This includes action codes, business attributes, transactions and settings at the moment. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.types A comma delimited list of types used to specify what content should be returned. If not specified the default is  actionCodes, agentGroups, and settings. Valid values are actionCodes, agentGroups, settings, workspaceTransactions, and businessAttributes.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ConfigResponse}
     */
    this.getConfiguration = function(opts) {
      return this.getConfigurationWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Read information about the logged in user including any existing media logins and calls
     * This request can be used to retrieve information about the current user. This can be done at startup to check for an existing session. The returned user information includes state recovery information about the active session. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CurrentSession} and HTTP response
     */
    this.getCurrentSessionWithHttpInfo = function() {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CurrentSession;

      return this.apiClient.callApi(
        '/current-session', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Read information about the logged in user including any existing media logins and calls
     * This request can be used to retrieve information about the current user. This can be done at startup to check for an existing session. The returned user information includes state recovery information about the active session. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CurrentSession}
     */
    this.getCurrentSession = function() {
      return this.getCurrentSessionWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * get devices from place
     * This request can be used to retrieve information about the devices of the user. The returned devices are the devices attached to the place where the user logs in. 
     * @param {String} place The name of the place
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Devices} and HTTP response
     */
    this.getDevicesWithHttpInfo = function(place) {
      var postBody = null;

      // verify the required parameter 'place' is set
      if (place === undefined || place === null) {
        throw new Error("Missing the required parameter 'place' when calling getDevices");
      }


      var pathParams = {
        'place': place
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Devices;

      return this.apiClient.callApi(
        '/devices/{place}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * get devices from place
     * This request can be used to retrieve information about the devices of the user. The returned devices are the devices attached to the place where the user logs in. 
     * @param {String} place The name of the place
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Devices}
     */
    this.getDevices = function(place) {
      return this.getDevicesWithHttpInfo(place)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieves authorization token and registers it
     * The initialize-workspace request retrieves the authorization token using the authorization code.  The token is then registered and the user&#39;s environment is prepared. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.code the authorization code
     * @param {String} opts.redirectUri the same redirect_uri used in the initial login step
     * @param {String} opts.authorization For OAuth resource owner password credentials grant should contains Bearer authorization. Example: &#39;Authorization: Bearer access_token&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.initializeWorkspaceWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'code': opts['code'],
        'redirect_uri': opts['redirectUri']
      };
      var headerParams = {
        'Authorization': opts['authorization']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ApiSuccessResponse;

      return this.apiClient.callApi(
        '/initialize-workspace', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Retrieves authorization token and registers it
     * The initialize-workspace request retrieves the authorization token using the authorization code.  The token is then registered and the user&#39;s environment is prepared. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.code the authorization code
     * @param {String} opts.redirectUri the same redirect_uri used in the initial login step
     * @param {String} opts.authorization For OAuth resource owner password credentials grant should contains Bearer authorization. Example: &#39;Authorization: Bearer access_token&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.initializeWorkspace = function(opts) {
      return this.initializeWorkspaceWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * login the specified user (HTTP session only)
     * The login request authenticates the user and retrieves the authorization code. 
     * @param {String} redirectUri this the URI the AUTH service uses to redirect the user after authentication
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.loginWithHttpInfo = function(redirectUri) {
      var postBody = null;

      // verify the required parameter 'redirectUri' is set
      if (redirectUri === undefined || redirectUri === null) {
        throw new Error("Missing the required parameter 'redirectUri' when calling login");
      }


      var pathParams = {
      };
      var queryParams = {
        'redirect_uri': redirectUri
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ApiSuccessResponse;

      return this.apiClient.callApi(
        '/login', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * login the specified user (HTTP session only)
     * The login request authenticates the user and retrieves the authorization code. 
     * @param {String} redirectUri this the URI the AUTH service uses to redirect the user after authentication
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.login = function(redirectUri) {
      return this.loginWithHttpInfo(redirectUri)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Logout of media and end the session
     * This request is used to end the user session. It will log the agent out for voice/channels, end the HTTP session and clean up related resources. The suggested shutdown sequence is to disconnect socket.io and then make this request. After ending the session the login request is required before making any new calls to the API. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.logoutWithHttpInfo = function() {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ApiSuccessResponse;

      return this.apiClient.callApi(
        '/logout', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Logout of media and end the session
     * This request is used to end the user session. It will log the agent out for voice/channels, end the HTTP session and clean up related resources. The suggested shutdown sequence is to disconnect socket.io and then make this request. After ending the session the login request is required before making any new calls to the API. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.logout = function() {
      return this.logoutWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
