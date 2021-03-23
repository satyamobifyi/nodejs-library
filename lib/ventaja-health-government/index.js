
// const Signature = require('../../common/signature');
const Schema = require('../../common/options/IPhilHealthPayment');
const PhilHealtCode = require('../../common/code');
const UtilService = require('../../common/utils');
const Base = require('../../common/signature');

module.exports = class VentajaPhilHealthGovernment {
    constructor(options){
        // this.ventajaService = new Signature();
        this.schema = Schema;
        this.codes = PhilHealtCode;
        this.optionsConfig = options;
        this.service = new UtilService();
    }

    async validatePhilHealthPayment(payload){
        // console.log(':::::', payload)

        const config = this.optionsConfig;
        const result = await this.schema.validatePayload(payload)
        // console.log('this.codes', result)
        const data = {
            id: config.id,
            uid: config.uid,
            pwd: config.pwd,
            code: this.codes.VALIDATE_CONTRIBUTION,
            countryCode: config.countryCode,
            data: result
        }

        const ventagaSignature = await this.service.createSignature(config.certificatePath ,data);
        const base64Signature = await this.service.hexToBase64(ventagaSignature);
        
        try {
            const response = await this.service.postWithSignature(
                `${config.ventajaUrl}validate`, data, base64Signature
                )
            return response && response.data;
        } catch (error) {
            if (error && error.response && error.response.status === 500) {
                throw new Error("An Error has occurred!");
            }
            throw new Error("Something went wrong");
        }
    }
}