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
    instance = new UpcloudApi.StorageDevice();
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

  describe('StorageDevice', function() {
    it('should create an instance of StorageDevice', function() {
      // uncomment below and update the code to test StorageDevice
      //var instane = new UpcloudApi.StorageDevice();
      //expect(instance).to.be.a(UpcloudApi.StorageDevice);
    });

    it('should have the property address (base name: "address")', function() {
      // uncomment below and update the code to test the property address
      //var instane = new UpcloudApi.StorageDevice();
      //expect(instance).to.be();
    });

    it('should have the property partOfPlan (base name: "part_of_plan")', function() {
      // uncomment below and update the code to test the property partOfPlan
      //var instane = new UpcloudApi.StorageDevice();
      //expect(instance).to.be();
    });

    it('should have the property storage (base name: "storage")', function() {
      // uncomment below and update the code to test the property storage
      //var instane = new UpcloudApi.StorageDevice();
      //expect(instance).to.be();
    });

    it('should have the property storageSize (base name: "storage_size")', function() {
      // uncomment below and update the code to test the property storageSize
      //var instane = new UpcloudApi.StorageDevice();
      //expect(instance).to.be();
    });

    it('should have the property storageTitle (base name: "storage_title")', function() {
      // uncomment below and update the code to test the property storageTitle
      //var instane = new UpcloudApi.StorageDevice();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new UpcloudApi.StorageDevice();
      //expect(instance).to.be();
    });

  });

}));
