/**
 * Upcloud api
 * Upcloud api specification
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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.UpcloudApi);
  }
}(this, function(expect, UpcloudApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new UpcloudApi.InlineResponse2001();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('InlineResponse2001', function() {
    it('should create an instance of InlineResponse2001', function() {
      // uncomment below and update the code to test InlineResponse2001
      //var instane = new UpcloudApi.InlineResponse2001();
      //expect(instance).to.be.a(UpcloudApi.InlineResponse2001);
    });

    it('should have the property server (base name: "server")', function() {
      // uncomment below and update the code to test the property server
      //var instane = new UpcloudApi.InlineResponse2001();
      //expect(instance).to.be();
    });

  });

}));
