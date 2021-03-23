
const Signature = require('../../common/signature');
const Schema = require('../../common/options/IPhilHealthPayment')

module.exports = class VentajaPhilHealthGovernment {
    constructor(){
        this.ventajaService = new Signature();
        this.schema = Schema
    }

    async validatePhilHealthPayment(payload){
        const result = await this.schema.validatePayload(payload)
        const data = {
            id: service.optionsConfig.id,
            uid: service.optionsConfig.uid,
            pwd: service.optionsConfig.pwd,
            countryCode: service.optionsConfig.countryCode,
            // code: 
            data: result
        }
    }
}