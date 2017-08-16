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
import ServerIpAddresses from './ServerIpAddresses';
import ServerStorageDevices from './ServerStorageDevices';
import ServerTags from './ServerTags';





/**
* The Server model module.
* @module model/Server
* @version 1.0.0
*/
export default class Server {
    /**
    * Constructs a new <code>Server</code>.
    * @alias module:model/Server
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>Server</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Server} obj Optional instance to populate.
    * @return {module:model/Server} The populated <code>Server</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Server();

            
            
            

            if (data.hasOwnProperty('boot_order')) {
                obj['boot_order'] = ApiClient.convertToType(data['boot_order'], 'String');
            }
            if (data.hasOwnProperty('core_number')) {
                obj['core_number'] = ApiClient.convertToType(data['core_number'], 'Number');
            }
            if (data.hasOwnProperty('firewall')) {
                obj['firewall'] = ApiClient.convertToType(data['firewall'], 'String');
            }
            if (data.hasOwnProperty('host')) {
                obj['host'] = ApiClient.convertToType(data['host'], 'Number');
            }
            if (data.hasOwnProperty('hostname')) {
                obj['hostname'] = ApiClient.convertToType(data['hostname'], 'String');
            }
            if (data.hasOwnProperty('ip_addresses')) {
                obj['ip_addresses'] = ServerIpAddresses.constructFromObject(data['ip_addresses']);
            }
            if (data.hasOwnProperty('license')) {
                obj['license'] = ApiClient.convertToType(data['license'], 'Number');
            }
            if (data.hasOwnProperty('memory_amount')) {
                obj['memory_amount'] = ApiClient.convertToType(data['memory_amount'], 'Number');
            }
            if (data.hasOwnProperty('nic_model')) {
                obj['nic_model'] = ApiClient.convertToType(data['nic_model'], 'String');
            }
            if (data.hasOwnProperty('plan')) {
                obj['plan'] = ApiClient.convertToType(data['plan'], 'String');
            }
            if (data.hasOwnProperty('plan_ipv4_bytes')) {
                obj['plan_ipv4_bytes'] = ApiClient.convertToType(data['plan_ipv4_bytes'], 'Number');
            }
            if (data.hasOwnProperty('plan_ipv6_bytes')) {
                obj['plan_ipv6_bytes'] = ApiClient.convertToType(data['plan_ipv6_bytes'], 'Number');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('storage_devices')) {
                obj['storage_devices'] = ServerStorageDevices.constructFromObject(data['storage_devices']);
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ServerTags.constructFromObject(data['tags']);
            }
            if (data.hasOwnProperty('timezone')) {
                obj['timezone'] = ApiClient.convertToType(data['timezone'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('video_model')) {
                obj['video_model'] = ApiClient.convertToType(data['video_model'], 'String');
            }
            if (data.hasOwnProperty('vnc')) {
                obj['vnc'] = ApiClient.convertToType(data['vnc'], 'String');
            }
            if (data.hasOwnProperty('vnc_host')) {
                obj['vnc_host'] = ApiClient.convertToType(data['vnc_host'], 'String');
            }
            if (data.hasOwnProperty('vnc_password')) {
                obj['vnc_password'] = ApiClient.convertToType(data['vnc_password'], 'String');
            }
            if (data.hasOwnProperty('vnc_port')) {
                obj['vnc_port'] = ApiClient.convertToType(data['vnc_port'], 'String');
            }
            if (data.hasOwnProperty('zone')) {
                obj['zone'] = ApiClient.convertToType(data['zone'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {module:model/Server.BootOrderEnum} boot_order
    */
    boot_order = undefined;
    /**
    * @member {Number} core_number
    */
    core_number = undefined;
    /**
    * @member {module:model/Server.FirewallEnum} firewall
    */
    firewall = undefined;
    /**
    * @member {Number} host
    */
    host = undefined;
    /**
    * @member {String} hostname
    */
    hostname = undefined;
    /**
    * @member {module:model/ServerIpAddresses} ip_addresses
    */
    ip_addresses = undefined;
    /**
    * @member {Number} license
    */
    license = undefined;
    /**
    * @member {Number} memory_amount
    */
    memory_amount = undefined;
    /**
    * @member {String} nic_model
    */
    nic_model = undefined;
    /**
    * @member {String} plan
    */
    plan = undefined;
    /**
    * @member {Number} plan_ipv4_bytes
    */
    plan_ipv4_bytes = undefined;
    /**
    * @member {Number} plan_ipv6_bytes
    */
    plan_ipv6_bytes = undefined;
    /**
    * @member {module:model/Server.StateEnum} state
    */
    state = undefined;
    /**
    * @member {module:model/ServerStorageDevices} storage_devices
    */
    storage_devices = undefined;
    /**
    * @member {module:model/ServerTags} tags
    */
    tags = undefined;
    /**
    * @member {String} timezone
    */
    timezone = undefined;
    /**
    * @member {String} title
    */
    title = undefined;
    /**
    * @member {String} uuid
    */
    uuid = undefined;
    /**
    * @member {module:model/Server.VideoModelEnum} video_model
    */
    video_model = undefined;
    /**
    * @member {module:model/Server.VncEnum} vnc
    */
    vnc = undefined;
    /**
    * @member {String} vnc_host
    */
    vnc_host = undefined;
    /**
    * @member {String} vnc_password
    */
    vnc_password = undefined;
    /**
    * @member {String} vnc_port
    */
    vnc_port = undefined;
    /**
    * @member {String} zone
    */
    zone = undefined;






    /**
    * Allowed values for the <code>boot_order</code> property.
    * @enum {String}
    * @readonly
    */
    static BootOrderEnum = {
    
        /**
         * value: "disk"
         * @const
         */
        "disk": "disk",
    
        /**
         * value: "cdrom"
         * @const
         */
        "cdrom": "cdrom",
    
        /**
         * value: "disk,cdrom"
         * @const
         */
        "disk,cdrom": "disk,cdrom",
    
        /**
         * value: "cdrom,disk"
         * @const
         */
        "cdrom,disk": "cdrom,disk"    
    };

    /**
    * Allowed values for the <code>firewall</code> property.
    * @enum {String}
    * @readonly
    */
    static FirewallEnum = {
    
        /**
         * value: "on"
         * @const
         */
        "on": "on",
    
        /**
         * value: "off"
         * @const
         */
        "off": "off"    
    };

    /**
    * Allowed values for the <code>state</code> property.
    * @enum {String}
    * @readonly
    */
    static StateEnum = {
    
        /**
         * value: "started"
         * @const
         */
        "started": "started",
    
        /**
         * value: "stopped"
         * @const
         */
        "stopped": "stopped",
    
        /**
         * value: "maintenance"
         * @const
         */
        "maintenance": "maintenance",
    
        /**
         * value: "error"
         * @const
         */
        "error": "error"    
    };

    /**
    * Allowed values for the <code>video_model</code> property.
    * @enum {String}
    * @readonly
    */
    static VideoModelEnum = {
    
        /**
         * value: "vga"
         * @const
         */
        "vga": "vga",
    
        /**
         * value: "cirrus"
         * @const
         */
        "cirrus": "cirrus"    
    };

    /**
    * Allowed values for the <code>vnc</code> property.
    * @enum {String}
    * @readonly
    */
    static VncEnum = {
    
        /**
         * value: "on"
         * @const
         */
        "on": "on",
    
        /**
         * value: "off"
         * @const
         */
        "off": "off"    
    };



}

