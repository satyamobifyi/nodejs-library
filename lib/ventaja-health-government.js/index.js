
const Signature = require('../../common/signature');
const Schema = require('../../common/options/IPhilHealthPayment')

module.exports = class VentajaPhilHealthGovernment {
    constructor(){
        this.ventajaService = new Signature();
        this.schema = Schema
    }

    async validatePhilHealthPayment(payload){
        this.schema.validatePayload(payload)
    }
}