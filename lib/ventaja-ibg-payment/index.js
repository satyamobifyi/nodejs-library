
const UtilService = require("../../common/utils");
const { VENATJA_BILL_CODES } = require("../../common/billPaymentCodes");
const CustomHttpExceptions = require('../../common/httpExceptions/http.exceptions');
const Schema = require("../../common/options/IVentajaBillPayments");

module.exports = class VentajaBillPayments {

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
    async getOutletBalance() {
        const config = this.optionsConfig;
        try {
            const data = {
                id: config.id,
                uid: config.uid,
                pwd: config.pwd,
                code: VENATJA_BILL_CODES.BALANCE,
                countryCode: config.countryCode,
                data: null
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
    }

    /**
     * @param body having interface ITopUpWallet
     * @Remarks This function is used to validate the topUp parameters
     */
    async validateTopUpWallet(body) {
        try {
            const config = this.optionsConfig;
            const payload = this.schema.validateITopUpWallet(body);
            const data = {
                id: config.id,
                uid: config.uid,
                pwd: config.pwd,
                code: VENATJA_BILL_CODES.TOPUP,
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
    } // End of validateTopUpWallet

    /**
     * 
     * @param {body} validateITopUpWallet fuction will validate the body
     * @returns 
     */
    async processTopUpWallet(body) {
        try {
            const config = this.optionsConfig;
            const payload = this.schema.validateITopUpWallet(body);
            const data = {
                id: config.id,
                uid: config.uid,
                pwd: config.pwd,
                code: VENATJA_BILL_CODES.TOPUP,
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
    } // End of process top up

    /**
     * 
     * @param {body} validateITransaction function validates body
     * @returns 
     */
    async topUpTransactionInquiry(body) {
        try {
            const config = this.optionsConfig;
            const payload = this.schema.validateITransaction(body);
            const data = {
                id: config.id,
                uid: config.uid,
                pwd: config.pwd,
                code: VENATJA_BILL_CODES.TOPUP,
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
    } // End of topup transaction inquiry

    /**
     * @returns the previous reservation details
     * @param payload having interface IReservationDetail
     * @Remarks This function is used to get the reservation details
     */
    async processReservationDetail(body) {
        try {
            const config = this.optionsConfig;
            const payload = this.schema.validateIReservationDetail(body);
            const data = {
                id: config.id,
                uid: config.uid,
                pwd: config.pwd,
                code: VENATJA_BILL_CODES.RESERVATION,
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
    } // End of processReservationDetail

    /**
     * @returns whether the provided details are correct or not
     * @param payload having interface IReservationPaymentDetail
     * @Remarks This function is used to validate the payload
     */
    async validateReservationPaymentDetail(body) {
        try {
            const config = this.optionsConfig;
            const payload = this.schema.validateIReservationPaymentDetail(body);
            const data = {
                id: config.id,
                uid: config.uid,
                pwd: config.pwd,
                code: VENATJA_BILL_CODES.RESERVATION_DETAIL,
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
    } // End of validateReservationPaymentDetail 

    /**
     * @returns process and return the reservation payment process information
     * @param payload having interface reservationPaymentdetails
     * @Remarks This function is used to process the reservation payment
     */
    async processReservationPaymentDetail(body) {
        try {
            const config = this.optionsConfig;
            const payload = this.schema.validateIReservationPaymentDetail(body);
            const data = {
                id: config.id,
                uid: config.uid,
                pwd: config.pwd,
                code: VENATJA_BILL_CODES.RESERVATION_DETAIL,
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
    } // End of processReservationPaymentDetail

    /**
     * @returns the previous payment information
     * @param payload having interface IReservationEnquiry
     * @Remarks This function is used to fetch the previous payment process information
     */
    async reservationPaymentEnquiry(body) {
        try {
            const config = this.optionsConfig;
            const payload = this.schema.validateIReservationPaymentDetail(body);
            const data = {
                id: config.id,
                uid: config.uid,
                pwd: config.pwd,
                code: VENATJA_BILL_CODES.RESERVATION_DETAIL,
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
    } // End of reservationPaymentEnquiry

    /**
     * @returns transaction details
     * @param payload having interface IPullReservationDetails
     * @Remarks This function is used to pull the transaction details
     */
     async pullTransactionDetails(body) {
        try {
            const config = this.optionsConfig;
            const payload = this.schema.validateIPullReservationDetails(body);
            const data = {
                id: config.id,
                uid: config.uid,
                pwd: config.pwd,
                code: VENATJA_BILL_CODES.RESERVATION_DETAIL,
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
    } // End of pullTransactionDetails

    /**
     * @returns the billing payload validation
     * @param payload having interface IValidateBilling
     * @Remarks This function is used to validate the payload
     */
    async validateBilling(body) {
        try {
            const config = this.optionsConfig;
            const payload = this.schema.validateIValidateBilling(body);
            const data = {
                id: config.id,
                uid: config.uid,
                pwd: config.pwd,
                code: VENATJA_BILL_CODES.VALIDATE_BILLING,
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
    } // End of validateBilling

    /**
     * @returns the billing process info
     * @param payload having interface IProcessBilling
     * @Remarks This function is used to process the billing
     */
     async processBilling(body) {
        try {
            const config = this.optionsConfig;
            const payload = this.schema.validateIProcessBilling(body);
            const data = {
                id: config.id,
                uid: config.uid,
                pwd: config.pwd,
                code: VENATJA_BILL_CODES.VALIDATE_BILLING,
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
    } // End of processBilling

}