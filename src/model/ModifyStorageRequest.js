/**
 * Upcloud api
 * The UpCloud API consists of operations used to control resources on UpCloud. The API is a web service interface. HTTPS is used to connect to the API. The API follows the principles of a RESTful web service wherever possible. The base URL for all API operations is  https://api.upcloud.com/. All API operations require authentication.
 *
 * OpenAPI spec version: 1.2.0
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Storage'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Storage'));
  } else {
    // Browser globals (root is window)
    if (!root.upcloud) {
      root.upcloud = {};
    }
    root.upcloud.ModifyStorageRequest = factory(
      root.upcloud.ApiClient,
      root.upcloud.Storage,
    );
  }
})(this, function(ApiClient, Storage) {
  'use strict';

  /**
   * The ModifyStorageRequest model module.
   * @module model/ModifyStorageRequest
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>ModifyStorageRequest</code>.
   * @alias module:model/ModifyStorageRequest
   * @class
   */
  var exports = function() {
    var _this = this;
  };

  /**
   * Constructs a <code>ModifyStorageRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModifyStorageRequest} obj Optional instance to populate.
   * @return {module:model/ModifyStorageRequest} The populated <code>ModifyStorageRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('storage')) {
        obj['storage'] = Storage.constructFromObject(data['storage']);
      }
    }
    return obj;
  };

  /**
   * @member {module:model/Storage} storage
   */
  exports.prototype['storage'] = undefined;

  return exports;
});
