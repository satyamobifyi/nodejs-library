const axios = require("axios");

export default class UtilService {

    constructor(

    ) { } //End of constructor
    
    /**
     * @param {*} endPoint 
     * @param {*} data 
     * @returns api call data
     */
    async postWithSignature(endPoint, data) {
        return await axios.request({
            url: url,
            method: "POST",
            body: data
        })
    } // End of postWithSignature function

    /**
     * @description method to dynamically create headers
     * @param signature String - ventaja hashed signature
     * @return { * } custom header object, add header here if you want to add something in header
     */
    getHeaders(signature) {
        return {
            "Content-Type": "application/json",
            "Signature": signature,
        };
    }// End of getHeaders function
}