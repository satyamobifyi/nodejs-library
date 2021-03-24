const rs = require("jsrsasign");
const rsu = require("jsrsasign-util");
const path = require("path");
const ventajaOptions = require("../../common/options/IVentajaOption");
const VentajaPhilHealthGovernment = require('../../lib/ventaja-health-government');
const VentajaSssPayment = require("../../lib/ventaja-sss-payment");
module.exports = class Base {
    
    constructor(
        options
    ) {
        // console.log("Your options", options)
        const validateOptions = ventajaOptions.validateOptions(options);
        this.optionsConfig = validateOptions;   
        this.pem = "";
        this.healthService = new VentajaPhilHealthGovernment(validateOptions)
        this.sssPaymentService = new VentajaSssPayment(validateOptions)
    } // End of the constructor
    

    bootstrap(options){
        try {
            for (const item in options) {
                if (!options[item]) {
                    this.logger.error(`${item} field is invalid or missing!`);
                    throw new Error(`${item} field is invalid or missing!`);
                }
            }
            /**
             * required pem file to make a SHA1withRSA signature
             */
            // console.log("Your data", this.optionsConfig)
            this.pem = path.join(__dirname, + this.optionsConfig.certificatePath)
            
        } catch (error) {
            throw new Error("Certificate File Not Found!")
        }
    } // Eno of bootstrap function

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

    createSignature(data) {
        try {
            // console.log("Your data for this.pem", this.pem);
            const sig = new rs.Signature({alg: "SHA1withRSA"});
            sig.init(this.pem);
            const value1 = JSON.stringify(data);
            sig.updateString(value1);

            return sig.sign();
        } catch (error) {
            /**
             * If something went wrong
             */
            this.logger.error("Error Creating signature");
            throw new Error(error);
        }
    } // Create RSAwithSHA signature of payload

    // providers() {
        
    // }


}
