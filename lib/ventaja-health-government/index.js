
// const Signature = require('../../common/signature');
const Schema = require('../../common/options/IPhilHealthPayment');
const PhilHealtCode = require('../../common/code');
const UtilService = require('../../common/utils');
const CustomHttpExceptions = require('../../common/httpExceptions/http.exceptions');

module.exports = class VentajaPhilHealthGovernment {
    constructor(options){
        // this.ventajaService = new Signature();
        this.schema = Schema;
        this.codes = PhilHealtCode;
        this.optionsConfig = options;
        this.service = new UtilService();
        this.httpException = new CustomHttpExceptions()
    }

    /**
     * @description validate philhealth contribution payment (13.a - 106)
     * @author jagannath
     * @date 24/03/2021
     */
    async validatePhilHealthPayment(payload){
        const config = this.optionsConfig;
        try {
            var result = await this.schema.validatePhilhealthPayment(payload)
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
            
            const response = await this.service.postWithSignature(`${config.ventajaUrl}validate`, data, base64Signature)
            
            if(
                response && 
                response.data && 
                response.data.responseCode && 
                response.data.responseCode !== 100) {
                    return this.httpException.throwHttpError(response)
                }
            return {
                status: 200,
                message: "success",
                data: response && response.data
            }
            
        } catch (error) {
            if(error.status === 400){
                throw error
            }
            
            if (error && error.response && error.response.status === 500) {
                throw new Error("An Error has occurred!");
            }
            throw new Error("Something went wrong");
        }
    }

    /**
     * @description process philhealth contribution payment (13.a - 106)
     * @author jagannath
     * @date 24/03/2021
     */
     async processPhilHealthPayment(payload){
        const config = this.optionsConfig;
        try {
            var result = await this.schema.validatePhilhealthPayment(payload)
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
            
            const response = await this.service.postWithSignature(`${config.ventajaUrl}process`, data, base64Signature)
            
            if(
                response && 
                response.data && 
                response.data.responseCode && 
                response.data.responseCode !== 100) {
                    return this.httpException.throwHttpError(response)
                }
            return {
                status: 200,
                message: "success",
                data: response && response.data
            }
            
        } catch (error) {
            if(error.status === 400){
                throw error
            }
            
            if (error && error.response && error.response.status === 500) {
                throw new Error("An Error has occurred!");
            }
            throw new Error("Something went wrong");
        }
    }

    /**
     * @description philhealth payment transaction inqyiry (13.B - 107)
     * @author jagannath
     * @date 24/03/2021
     */
     async inquiryPhilHealthPayment(payload){
        const config = this.optionsConfig;
        try {
            var result = await this.schema.inquiryPhilHealthPayment(payload)
            
            const data = {
                id: config.id,
                uid: config.uid,
                pwd: config.pwd,
                code: this.codes.TRANSACTION_INQUIRY,
                countryCode: config.countryCode,
                data: result
            }

            const ventagaSignature = await this.service.createSignature(config.certificatePath ,data);
            const base64Signature = await this.service.hexToBase64(ventagaSignature);
            
            const response = await this.service.postWithSignature(`${config.ventajaUrl}inquiry`, data, base64Signature)
            
            if(
                response && 
                response.data && 
                response.data.responseCode && 
                response.data.responseCode !== 100) {
                    return this.httpException.throwHttpError(response)
                }
            return {
                status: 200,
                message: "success",
                data: response && response.data
            }
            
        } catch (error) {
            if(error.status === 400){
                throw error
            }
            
            if (error && error.response && error.response.status === 500) {
                throw new Error("An Error has occurred!");
            }
            throw new Error("Something went wrong");
        }
    }

    /**
     * @description cancel philhealth payment transaction (13.C - 107)
     * @author jagannath
     * @date 24/03/2021
     */
     async cancelPhilHealthPayment(payload){
        const config = this.optionsConfig;
        try {
            var result = await this.schema.cancelPhilHealthTransaction(payload)
            
            const data = {
                id: config.id,
                uid: config.uid,
                pwd: config.pwd,
                code: this.codes.CANCEL_TRANSACTION,
                countryCode: config.countryCode,
                data: result
            }

            const ventagaSignature = await this.service.createSignature(config.certificatePath ,data);
            const base64Signature = await this.service.hexToBase64(ventagaSignature);
            
            const response = await this.service.postWithSignature(`${config.ventajaUrl}cancel`, data, base64Signature)
            
            if(
                response && 
                response.data && 
                response.data.responseCode && 
                response.data.responseCode !== 100) {
                    return this.httpException.throwHttpError(response)
                }
            return {
                status: 200,
                message: "success",
                data: response && response.data
            }
            
        } catch (error) {
            if(error.status === 400){
                throw error
            }
            
            if (error && error.response && error.response.status === 500) {
                throw new Error("An Error has occurred!");
            }
            throw new Error("Something went wrong");
        }
    }
}