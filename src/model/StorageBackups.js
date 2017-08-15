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


import ApiClient from '../ApiClient';





/**
* The StorageBackups model module.
* @module model/StorageBackups
* @version 1.0.0
*/
export default class StorageBackups {
    /**
    * Constructs a new <code>StorageBackups</code>.
    * @alias module:model/StorageBackups
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>StorageBackups</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/StorageBackups} obj Optional instance to populate.
    * @return {module:model/StorageBackups} The populated <code>StorageBackups</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StorageBackups();

            
            
            

            if (data.hasOwnProperty('backup')) {
                obj['backup'] = ApiClient.convertToType(data['backup'], ['String']);
            }
        }
        return obj;
    }

    /**
    * @member {Array.<String>} backup
    */
    backup = undefined;








}


