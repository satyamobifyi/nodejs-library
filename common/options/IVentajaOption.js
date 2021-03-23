const joi = require("joi");

/**
 * @Remarks validate these params before intializing this module
 * @param id
 * @param uid
 * @param pwd
 * @param countryCode
 * @param certificatePath
 * @param ventajaUrl
 */
module.exports = {
    validateOptions: function validateOptions(options) {
        const VentajaOptions = joi.object({
            /**
             * unique Id of the user
             */
            id: joi.string().required().description("hello"),
            /**
             * unique user id to send it to ventaja
             */
            uid: joi.string().required(),
            /**
             * put the password confidentially
             */
            pwd: joi.string().required(),
            /**
             * country code to define the request is coming from such as PH
             */
            countryCode: joi.string().required(),
            /**
             * Ventaja private key path
             */
            certificatePath: joi.string().required(),
            /**
             * Ventaja base api url
             */
            ventajaUrl: joi.string().required()
        });

        const { error, value: initialOptions } = VentajaOptions.validate(options);
        if (error) {
            throw new Error(`Config validation error: ${error}`)
          }
        return initialOptions;

    }
    
}
