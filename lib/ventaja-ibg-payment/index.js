
const UtilService = require("../../common/utils");
const { VENATJA_IBG_CODES } = require("../../common/ibgPaymentCodes");
const CustomHttpExceptions = require('../../common/httpExceptions/http.exceptions');
const Schema = require("../../common/options/IVentajaIbgPayment");

/**
     * @Author Satyam
     * @Date March 24 2021
     * @param ventajaSignServices
     * @param httpService
     * @param httpException
     * @param headers
     */

module.exports = class VentajaIbgPayments {

    constructor(options) {
        this.schema = Schema;
        this.optionsConfig = options;
        this.service = new UtilService();
        this.httpException = new CustomHttpExceptions()
    } // End of the constructor


    // Get Outlet balance
    /**
     * @Author  Satyam
     * @Date 24 April 2021
     * @returns the flexm balance info
     * @Description This function is used to get the flexm balance
     */
    async validateIBGPayment(body) {
        const config = this.optionsConfig;
        const payload = this.schema.validateIBGPayment(body);
        try {
            const data = {
                id: config.id,
                uid: config.uid,
                pwd: config.pwd,
                code: payload.mp2 ? VENATJA_IBG_CODES.IBGMPAYMENT : VENATJA_IBG_CODES.IBGPAYMENT,
                countryCode: config.countryCode,
                data: payload
            }

            const ventagaSignature = await this.service.createSignature(config.certificatePath, data);
            const base64Signature = await this.service.hexToBase64(ventagaSignature);

            const response = await this.service.postWithSignature(`${config.ventajaUrl}validate`, data, base64Signature)

            if (
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
            console.log("Your error ", error)
            if (error.status === 400) {
                throw error
            }

            if (error && error.response && error.response.status === 500) {
                throw new Error("An Error has occurred!");
            }
            throw new Error("Something went wrong");
        }
    }

    /**
     * @param body having interface processIBGPayment
     * @Remarks This function is used to validate the ibg parameters
     */
    async processIBGPayment(body) {
        try {
            const config = this.optionsConfig;
            const payload = this.schema.validateIBGPaymentProcess(body);
            const data = {
                id: config.id,
                uid: config.uid,
                pwd: config.pwd,
                code: payload.mp2 ? VENATJA_IBG_CODES.IBGMPAYMENT : VENATJA_IBG_CODES.IBGPAYMENT,
                countryCode: config.countryCode,
                data: payload
            }

            const ventagaSignature = await this.service.createSignature(config.certificatePath, data);
            const base64Signature = await this.service.hexToBase64(ventagaSignature);

            const response = await this.service.postWithSignature(`${config.ventajaUrl}process`, data, base64Signature)

            if (
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
            console.log("Your error ", error)
            if (error.status === 400) {
                throw error
            }

            if (error && error.response && error.response.status === 500) {
                throw new Error("An Error has occurred!");
            }
            throw new Error("Something went wrong");
        }
    } // End of processIBGPayment

    /**
     * 
     * @param {body} shortTermLoanValidate fuction will validate the body
     * @returns 
     */
    async validateShortTermLoan(body) {
        try {
            const config = this.optionsConfig;
            const payload = this.schema.validateIBGShortLoan(body);
            const data = {
                id: config.id,
                uid: config.uid,
                pwd: config.pwd,
                code: VENATJA_IBG_CODES.STLOAN,
                countryCode: config.countryCode,
                data: payload
            }

            const ventagaSignature = await this.service.createSignature(config.certificatePath, data);
            const base64Signature = await this.service.hexToBase64(ventagaSignature);

            const response = await this.service.postWithSignature(`${config.ventajaUrl}validate`, data, base64Signature)

            if (
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
            console.log("Your error ", error)
            if (error.status === 400) {
                throw error
            }

            if (error && error.response && error.response.status === 500) {
                throw new Error("An Error has occurred!");
            }
            throw new Error("Something went wrong");
        }
    } // End of validateShortTermLoan

    /**
     * 
     * @param {body} shortTermLoanValidate fuction will validate the body
     * @returns 
     */
     async processShortTermLoan(body) {
        try {
            const config = this.optionsConfig;
            const payload = this.schema.validateIBGShortLoanProcess(body);
            const data = {
                id: config.id,
                uid: config.uid,
                pwd: config.pwd,
                code: VENATJA_IBG_CODES.STLOAN,
                countryCode: config.countryCode,
                data: payload
            }

            const ventagaSignature = await this.service.createSignature(config.certificatePath, data);
            const base64Signature = await this.service.hexToBase64(ventagaSignature);

            const response = await this.service.postWithSignature(`${config.ventajaUrl}process`, data, base64Signature)

            if (
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
            console.log("Your error ", error)
            if (error.status === 400) {
                throw error
            }

            if (error && error.response && error.response.status === 500) {
                throw new Error("An Error has occurred!");
            }
            throw new Error("Something went wrong");
        }
    } // End of processShortTermLoan

    /**
     * 
     * @param {body} validateHousingLoan fuction will validate the body
     * @returns 
     */
     async validateHousingLoan(body) {
        try {
            const config = this.optionsConfig;
            const payload = this.schema.validateIBGHousingLoan(body);
            const data = {
                id: config.id,
                uid: config.uid,
                pwd: config.pwd,
                code: VENATJA_IBG_CODES.HLOAN,
                countryCode: config.countryCode,
                data: payload
            }

            const ventagaSignature = await this.service.createSignature(config.certificatePath, data);
            const base64Signature = await this.service.hexToBase64(ventagaSignature);

            const response = await this.service.postWithSignature(`${config.ventajaUrl}validate`, data, base64Signature)

            if (
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
            console.log("Your error ", error)
            if (error.status === 400) {
                throw error
            }

            if (error && error.response && error.response.status === 500) {
                throw new Error("An Error has occurred!");
            }
            throw new Error("Something went wrong");
        }
    } // End of validateShortTermLoan

    /**
     * 
     * @param {body} processHousingLoan fuction will validate the body
     * @returns 
     */
     async processHousingLoan(body) {
        try {
            const config = this.optionsConfig;
            const payload = this.schema.validateIBGHousingLoanProcess(body);
            const data = {
                id: config.id,
                uid: config.uid,
                pwd: config.pwd,
                code: VENATJA_IBG_CODES.HLOAN,
                countryCode: config.countryCode,
                data: payload
            }

            const ventagaSignature = await this.service.createSignature(config.certificatePath, data);
            const base64Signature = await this.service.hexToBase64(ventagaSignature);

            const response = await this.service.postWithSignature(`${config.ventajaUrl}process`, data, base64Signature)

            if (
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
            console.log("Your error ", error)
            if (error.status === 400) {
                throw error
            }

            if (error && error.response && error.response.status === 500) {
                throw new Error("An Error has occurred!");
            }
            throw new Error("Something went wrong");
        }
    } // End of processHousingLoan

    /**
     * 
     * @param {body} IbgPaymentTransactionEnquiry function validates body
     * @returns 
     */
    async IbgPaymentTransactionInquiry(body) {
        try {
            const config = this.optionsConfig;
            const payload = this.schema.validateIBGInquiry(body);
            const data = {
                id: config.id,
                uid: config.uid,
                pwd: config.pwd,
                code: payload.mp2 ? VENATJA_IBG_CODES.MODIFIED_IBG_PAYMENT_INQUIRY : VENATJA_IBG_CODES.IBG_PAYMENT_INQUIRY,
                countryCode: config.countryCode,
                data: payload
            }

            const ventagaSignature = await this.service.createSignature(config.certificatePath, data);
            const base64Signature = await this.service.hexToBase64(ventagaSignature);

            const response = await this.service.postWithSignature(`${config.ventajaUrl}inquiry`, data, base64Signature)

            if (
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
            console.log("Your error ", error)
            if (error.status === 400) {
                throw error
            }

            if (error && error.response && error.response.status === 500) {
                throw new Error("An Error has occurred!");
            }
            throw new Error("Something went wrong");
        }
    } // End of IbgPaymentTransactionEnquiry

    async IbgShortTermLoanTransactionIquiry(body) {
        try {
            const config = this.optionsConfig;
            const payload = this.schema.validateIBGInquiry(body);
            const data = {
                id: config.id,
                uid: config.uid,
                pwd: config.pwd,
                code: VENATJA_IBG_CODES.SHORT_TERM_LOAN_INQUIRY,
                countryCode: config.countryCode,
                data: payload
            }

            const ventagaSignature = await this.service.createSignature(config.certificatePath, data);
            const base64Signature = await this.service.hexToBase64(ventagaSignature);

            const response = await this.service.postWithSignature(`${config.ventajaUrl}inquiry`, data, base64Signature)

            if (
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
            console.log("Your error ", error)
            if (error.status === 400) {
                throw error
            }

            if (error && error.response && error.response.status === 500) {
                throw new Error("An Error has occurred!");
            }
            throw new Error("Something went wrong");
        }
    } // End of IbgShortTermLoanTransactionnquiry

    async IbgHousingLoanTransactionIquiry(body) {
        try {
            const config = this.optionsConfig;
            const payload = this.schema.validateIBGInquiry(body);
            const data = {
                id: config.id,
                uid: config.uid,
                pwd: config.pwd,
                code: VENATJA_IBG_CODES.HOUSING_LOAN_INQUIRY,
                countryCode: config.countryCode,
                data: payload
            }

            const ventagaSignature = await this.service.createSignature(config.certificatePath, data);
            const base64Signature = await this.service.hexToBase64(ventagaSignature);

            const response = await this.service.postWithSignature(`${config.ventajaUrl}inquiry`, data, base64Signature)

            if (
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
            console.log("Your error ", error)
            if (error.status === 400) {
                throw error
            }

            if (error && error.response && error.response.status === 500) {
                throw new Error("An Error has occurred!");
            }
            throw new Error("Something went wrong");
        }
    } // End of IbgHousingLoanTransactionnquiry

    async IbgCancelPaymentTransaction(body) {
        try {
            const config = this.optionsConfig;
            const payload = this.schema.validateIBGInquiry(body);
            const data = {
                id: config.id,
                uid: config.uid,
                pwd: config.pwd,
                code: payload.mp2 ? VENATJA_IBG_CODES.CANCEL_MODIFIED_IBG_PAYMENT : VENATJA_IBG_CODES.CANCEL_IBG_PAYMENT ,
                countryCode: config.countryCode,
                data: payload
            }

            const ventagaSignature = await this.service.createSignature(config.certificatePath, data);
            const base64Signature = await this.service.hexToBase64(ventagaSignature);

            const response = await this.service.postWithSignature(`${config.ventajaUrl}cancel`, data, base64Signature)

            if (
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
            console.log("Your error ", error)
            if (error.status === 400) {
                throw error
            }

            if (error && error.response && error.response.status === 500) {
                throw new Error("An Error has occurred!");
            }
            throw new Error("Something went wrong");
        }
    } // End of IbgCancelPaymentTransactioInquiry

    async cancelShortTermLoanTransaction(body) {
        try {
            const config = this.optionsConfig;
            const payload = this.schema.validateIBGInquiry(body);
            const data = {
                id: config.id,
                uid: config.uid,
                pwd: config.pwd,
                code: VENATJA_IBG_CODES.CANCEL_SHORT_TERM_LOAN,
                countryCode: config.countryCode,
                data: payload
            }

            const ventagaSignature = await this.service.createSignature(config.certificatePath, data);
            const base64Signature = await this.service.hexToBase64(ventagaSignature);

            const response = await this.service.postWithSignature(`${config.ventajaUrl}cancel`, data, base64Signature)

            if (
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
            console.log("Your error ", error)
            if (error.status === 400) {
                throw error
            }

            if (error && error.response && error.response.status === 500) {
                throw new Error("An Error has occurred!");
            }
            throw new Error("Something went wrong");
        }
    } // End of cancelShortTermLoanTransaction

    async cancelHousingLoanTransaction(body) {
        try {
            const config = this.optionsConfig;
            const payload = this.schema.validateIBGInquiry(body);
            const data = {
                id: config.id,
                uid: config.uid,
                pwd: config.pwd,
                code: VENATJA_IBG_CODES.CANCEL_HOUSING_LOAN,
                countryCode: config.countryCode,
                data: payload
            }

            const ventagaSignature = await this.service.createSignature(config.certificatePath, data);
            const base64Signature = await this.service.hexToBase64(ventagaSignature);

            const response = await this.service.postWithSignature(`${config.ventajaUrl}cancel`, data, base64Signature)

            if (
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
            console.log("Your error ", error)
            if (error.status === 400) {
                throw error
            }

            if (error && error.response && error.response.status === 500) {
                throw new Error("An Error has occurred!");
            }
            throw new Error("Something went wrong");
        }
    } // End of cancelHousingLoanTransaction

}