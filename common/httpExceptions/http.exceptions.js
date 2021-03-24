const CUSTOM_ERRORS = require('../exceptions/index')
module.exports = class CustomHttpExceptions {
    constructor(){}
    async throwHttpError(res) {
        if(
            res && 
            res.data && 
            res.data.responseCode && 
            res.data.responseCode !== 100) {
                // return CUSTOM_ERRORS[res.data.responseCode]
                const error = CUSTOM_ERRORS[res.data.responseCode] 
                error.status = 400;
                throw error
                // throw new Error(
                //     CUSTOM_ERRORS[res.data.responseCode] || res.data
                // )
            }
    }

}