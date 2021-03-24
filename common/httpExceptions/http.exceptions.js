const CUSTOM_ERRORS = require('../exceptions/index')
module.exports = class CustomHttpExceptions {
    constructor() { }
    async throwHttpError(res) {
        let dataSentToVentaja = {}
        if (
            res &&
            res.config &&
            res.config.data
        ) {
            dataSentToVentaja = JSON.parse(res.config.data);
            delete dataSentToVentaja.id;
            delete dataSentToVentaja.uid;
            delete dataSentToVentaja.pwd;
        }

        if (
            res &&
            res.data &&
            res.data.responseCode &&
            res.data.responseCode !== 100) {
            const error = CUSTOM_ERRORS[res.data.responseCode] || res.data
            error.status = 400;
            error.dataSentToVentaja = dataSentToVentaja;
            throw error
        }
    }

}