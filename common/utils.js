const axios = require("axios");
const rs = require("jsrsasign");
const rsu = require("jsrsasign-util");
const path = require("path");
const btoa = require('btoa')


module.exports = class UtilService {

    constructor(

    ) { } //End of constructor
    
    /**
     * @param {*} endPoint 
     * @param {*} data 
     * @returns api call data
     */
    async postWithSignature(endPoint, data, signature) {
        const signt = this.getHeaders(signature)
        return await axios.request({
            url: endPoint,
            method: "POST",
            data: JSON.stringify(data),
            headers: signt,
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

    btoa(str) {
        let buffer;

        if (str instanceof Buffer) {
            buffer = str;
        } else {
            buffer = Buffer.from(str.toString(), "binary");
        }

        return buffer;
    } // End of btoa function


    hexToBase64(data) {
        /**
         * @returns data after converting to base64 using btoa function
         */
       return this.btoa(String.fromCharCode.apply(null,
            data.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" "))
        ).toString("base64");
    } // End of hexToBase64 function

    createSignature(certificatePath, data) {
        try {
            let pem = rsu.readFile(certificatePath);
            const sig = new rs.Signature({alg: "SHA1withRSA"});
            sig.init(pem);
            const value1 = JSON.stringify(data);
            sig.updateString(value1);

            return sig.sign();
        } catch (error) {
            /**
             * If something went wrong
             */
            // console.error("Error Creating signature", error);
            throw new Error(error);
        }
    } // Create RSAwithSHA signature of payload
}