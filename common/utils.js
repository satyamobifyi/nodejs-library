const request = require("request");
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
        // const signt = this.getHeaders(signature)
        // console.log('\n\nsignt', signt)
        // console.log('endPoint, data, signature', endPoint, data, signt)
        // return await request.post({
        //     url: endPoint,
        //     method: "POST",
        //     headers: signt,
        //     body: JSON.stringify(data),
        // })

        request.post({
            url: endPoint,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Signature": signature,
            },
            body: JSON.stringify(data)
          }, (err, res, body) => {
            if(err){
                console.log('err', err)
              
            }else{
              console.log('------',body)
            }
          });
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

    // btoa(str) {
    //     let buffer;

    //     if (str instanceof Buffer) {
    //         buffer = str;
    //     } else {
    //         buffer = Buffer.from(str.toString(), "binary");
    //     }

    //     return buffer;
    // } // End of btoa function

    hexToBase64(str) {
        return btoa(String.fromCharCode.apply(null,
        str.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" "))
        );
    }

    createSignature(certificatePath, data){
        //Generating Signature start
        console.log('booooooooommmmm', data);
        let pem = rsu.readFile('server.key');
        let sig = new rs.Signature({alg: 'SHA1withRSA'});
        sig.init(pem);
        const value1 = JSON.stringify(data);
        sig.updateString(value1)
        return sig.sign()
        // return sigValueHex;
        //Generating Signature end
    }

    // hexToBase64(data) {
    //     /**
    //      * @returns data after converting to base64 using btoa function
    //      */
    //     // console.log("data ----->", data);
    //    return btoa(String.fromCharCode.apply(null,
    //         data.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" "))
    //     ).toString("base64");
    // } // End of hexToBase64 function

    // createSignature(certificatePath, data) {
    //     try {
    //         let pem = rsu.readFile(certificatePath);
    //         // let sig = new rs.Signature({alg: 'SHA1withRSA'});
    //         // sig.init(pem);
    //         // const value1 = JSON.stringify(data);
    //         // sig.updateString(value1)
    //         // let sigValueHex = sig.sign();
    //         // return sigValueHex;
    //         // console.log("Your pem bale bale", pem)
    //         const sig = new rs.Signature({alg: "SHA1withRSA"});
    //         sig.init(pem);
    //         const value1 = JSON.stringify(data);
    //         sig.updateString(value1);

    //         return sig.sign();
    //     } catch (error) {
    //         /**
    //          * If something went wrong
    //          */
    //         // console.error("Error Creating signature", error);
    //         throw new Error(error);
    //     }
    // } // Create RSAwithSHA signature of payload
}