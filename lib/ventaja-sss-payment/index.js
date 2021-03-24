const SssPaymentCode = require('../../common/code');
const CustomHttpExceptions = require('../../common/httpExceptions/http.exceptions');
const Schema = require('../../common/options/ISssPaymentValidation');
const UtilService = require('../../common/utils');

module.exports = class VentajaSssPayment {
    constructor(options){
        this.schema = Schema;
        this.codes = SssPaymentCode;
        this.optionsConfig = options;
        this.service = new UtilService();
        this.httpException = new CustomHttpExceptions();
    }

/** -------------------- SSS Contribution --------------------- */
    /**
     * @description validate philhealth contribution payment (13.a - 106)
     * @author jagannath
     * @date 24/03/2021
     */
     async validateContributionSearchPrnByMember(payload){
        const config = this.optionsConfig;
        try {
            var result = await this.schema.validateSssContributionSearchByMember(payload)
            const data = {
                id: config.id,
                uid: config.uid,
                pwd: config.pwd,
                code: this.codes.VALIDATE_CONTRIBUTION_SEARCH_BY_MEMBER,
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
            console.error('error', error)
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
     * @description process sss contribution search by member ID (15.B - i - 152)
     * @author jagannath
     * @date 24/03/2021
     */
     async processContributionSearchPrnByMember(payload){
        const config = this.optionsConfig;
        try {
            var result = await this.schema.processSssContributionSearchByMember(payload)
            const data = {
                id: config.id,
                uid: config.uid,
                pwd: config.pwd,
                code: this.codes.PROCESS_CONTRIBUTION_SEARCH_BY_MEMBER,
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
            console.error('error', error)
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
     * @description validate sss contribution search by prn (15.B - ii - 153)
     * @author jagannath
     * @date 24/03/2021
     */
     async validateContributionSearchByPrn(payload){
        const config = this.optionsConfig;
        try {
            var result = await this.schema.validateSssContributionSearchByPrn(payload)
            const data = {
                id: config.id,
                uid: config.uid,
                pwd: config.pwd,
                code: this.codes.VALIDATE_CONTRIBUTION_SEARCH_BY_PRN,
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
            console.error('error', error)
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
     * @description process sss contribution search by prn (15.B - ii - 153)
     * @author jagannath
     * @date 24/03/2021
     */
     async processContributionSearchByPrn(payload){
        const config = this.optionsConfig;
        try {
            var result = await this.schema.processSssContributionSearchByPrn(payload)
            const data = {
                id: config.id,
                uid: config.uid,
                pwd: config.pwd,
                code: this.codes.PROCESS_CONTRIBUTION_SEARCH_BY_PRN,
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
            console.error('error', error)
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
     * @description validate sss contribution create and pay new prn (15.B - iii - 113)
     * @author jagannath
     * @date 24/03/2021
     */
     async validateContributionCreateAndPayPrn(payload){
        const config = this.optionsConfig;
        try {
            var result = await this.schema.validateContributionCreateAndPayPrn(payload)
            const data = {
                id: config.id,
                uid: config.uid,
                pwd: config.pwd,
                code: this.codes.VALIDATE_CONTRIBUTION_CREATE_AND_PAY_PRN,
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
            console.error('error', error)
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
     * @description process sss contribution create and pay new prn (15.B - iii - 113)
     * @author jagannath
     * @date 24/03/2021
     */
     async processContributionCreateAndPayPrn(payload){
        const config = this.optionsConfig;
        try {
            var result = await this.schema.processContributionCreateAndPayPrn(payload)
            const data = {
                id: config.id,
                uid: config.uid,
                pwd: config.pwd,
                code: this.codes.PROCESS_CONTRIBUTION_CREATE_AND_PAY_PRN,
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
            console.error('error', error)
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
     * @description validate sss contribution pay for prn (15.B - iv - 154)
     * @author jagannath
     * @date 24/03/2021
     */
     async validateContributionPayForPrn(payload){
        const config = this.optionsConfig;
        try {
            var result = await this.schema.validateContributionPayForPrn(payload)
            const data = {
                id: config.id,
                uid: config.uid,
                pwd: config.pwd,
                code: this.codes.VALIDATE_CONTRIBUTION_PAY_FOR_PRN,
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
            console.error('error', error)
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
     * @description process sss contribution pay for prn (15.B - iv - 154)
     * @author jagannath
     * @date 24/03/2021
     */
     async processContributionPayForPrn(payload){
        const config = this.optionsConfig;
        try {
            var result = await this.schema.processContributionPayForPrn(payload)
            const data = {
                id: config.id,
                uid: config.uid,
                pwd: config.pwd,
                code: this.codes.PROCESS_CONTRIBUTION_PAY_FOR_PRN,
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
            console.error('error', error)
            if(error.status === 400){
                throw error
            }
            
            if (error && error.response && error.response.status === 500) {
                throw new Error("An Error has occurred!");
            }
            throw new Error("Something went wrong");
        }
    }


/** ------------------ Short Term Load ------------------------ */
    /**
     * @description validate SSS STL search by rtpl prn (15.C - i - 158)
     * @author jagannath
     * @date 24/03/2021
     */
     async validateSearchByRtplPrn(payload){
        const config = this.optionsConfig;
        try {
            var result = await this.schema.validateSearchByRtplPrn(payload)
            const data = {
                id: config.id,
                uid: config.uid,
                pwd: config.pwd,
                code: this.codes.SEARCH_BY_RTPL_PRN,
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
            console.error('error', error)
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
     * @description PROCESS SSS STL search by rtpl prn (15.C - i - 158)
     * @author jagannath
     * @date 24/03/2021
     */
     async processSearchByRtplPrn(payload){
        const config = this.optionsConfig;
        try {
            var result = await this.schema.processSearchByRtplPrn(payload)
            const data = {
                id: config.id,
                uid: config.uid,
                pwd: config.pwd,
                code: this.codes.SEARCH_BY_RTPL_PRN,
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
            console.error('error', error)
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
     * @description validate SSS STL pay for rtpl prn (15.C - ii - 159)
     * @author jagannath
     * @date 24/03/2021
     */
     async validatePayForRtplPrn(payload){
        const config = this.optionsConfig;
        try {
            var result = await this.schema.validatePayForRtplPrn(payload)
            const data = {
                id: config.id,
                uid: config.uid,
                pwd: config.pwd,
                code: this.codes.PAY_FOR_RTPL_PRN,
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
            console.error('error', error)
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
     * @description PROCESS SSS STL pay for rtpl prn (15.C - ii - 159)
     * @author jagannath
     * @date 24/03/2021
     */
     async processPayForRtplPrn(payload){
        const config = this.optionsConfig;
        try {
            var result = await this.schema.processPayForRtplPrn(payload)
            const data = {
                id: config.id,
                uid: config.uid,
                pwd: config.pwd,
                code: this.codes.PAY_FOR_RTPL_PRN,
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
            console.error('error', error)
            if(error.status === 400){
                throw error
            }
            
            if (error && error.response && error.response.status === 500) {
                throw new Error("An Error has occurred!");
            }
            throw new Error("Something went wrong");
        }
    }

/** -------------------- SSS Real Estate Loan --------------------- */

    /**
     * @description validate SSS Real Estate Loan pay for rtpl prn (15.D  - 115)
     * @author jagannath
     * @date 24/03/2021
     */
     async validateRealEstateLoanPayment(payload){
        const config = this.optionsConfig;
        try {
            var result = await this.schema.validateRealEstateLoanPayment(payload)
            const data = {
                id: config.id,
                uid: config.uid,
                pwd: config.pwd,
                code: this.codes.REAL_ESTATE_LOAN_PAYMENT,
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
            console.error('error', error)
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
     * @description process SSS Real Estate Loan pay for rtpl prn (15.D  - 115)
     * @author jagannath
     * @date 24/03/2021
     */
     async processRealEstateLoanPayment(payload){
        const config = this.optionsConfig;
        try {
            var result = await this.schema.processRealEstateLoanPayment(payload)
            const data = {
                id: config.id,
                uid: config.uid,
                pwd: config.pwd,
                code: this.codes.REAL_ESTATE_LOAN_PAYMENT,
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
            console.error('error', error)
            if(error.status === 400){
                throw error
            }
            
            if (error && error.response && error.response.status === 500) {
                throw new Error("An Error has occurred!");
            }
            throw new Error("Something went wrong");
        }
    }

/** -------------------- SSS Miscellaneous Payment --------------------- */

    /**
     * @description validate SSS Miscellaneous Payment (15.E  - 116)
     * @author jagannath
     * @date 24/03/2021
     */
     async validateMiscellaneousPayment(payload){
        const config = this.optionsConfig;
        try {
            var result = await this.schema.validateMiscellaneousPayment(payload)
            const data = {
                id: config.id,
                uid: config.uid,
                pwd: config.pwd,
                code: this.codes.MISCELLANEOUS_PAYMENT,
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
            console.error('error', error)
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
     * @description validate SSS Miscellaneous Payment (15.E  - 116)
     * @author jagannath
     * @date 24/03/2021
     */
     async processMiscellaneousPayment(payload){
        const config = this.optionsConfig;
        try {
            var result = await this.schema.processMiscellaneousPayment(payload)
            const data = {
                id: config.id,
                uid: config.uid,
                pwd: config.pwd,
                code: this.codes.MISCELLANEOUS_PAYMENT,
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
            console.error('error', error)
            if(error.status === 400){
                throw error
            }
            
            if (error && error.response && error.response.status === 500) {
                throw new Error("An Error has occurred!");
            }
            throw new Error("Something went wrong");
        }
    }

/** -------------------- SSS Transaction Inquiry --------------------- */

    /**
     * @description contribution transaction inquiry (15.E - 113)
     * @author jagannath
     * @date 24/03/2021
     */
     async inquiryContributionTransaction(payload){
        const config = this.optionsConfig;
        try {
            var result = await this.schema.inquiryPaymentTransaction(payload)
            const data = {
                id: config.id,
                uid: config.uid,
                pwd: config.pwd,
                code: this.codes.INQUIRY_CONTRIBUTION_TRANSACTION,
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
            console.error('error', error)
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
     * @description short-term-loan transaction inquiry (15.E - 113)
     * @author jagannath
     * @date 24/03/2021
     */
     async inquiryShortTermLoanTransaction(payload){
        const config = this.optionsConfig;
        try {
            var result = await this.schema.inquiryPaymentTransaction(payload)
            const data = {
                id: config.id,
                uid: config.uid,
                pwd: config.pwd,
                code: this.codes.INQUIRY_SHORT_TERM_LOAN_TRANSACTION,
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
            console.error('error', error)
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
     * @description real-estate-loan transaction inquiry (15.E - 113)
     * @author jagannath
     * @date 24/03/2021
     */
     async inquiryRealEstateLoanTransaction(payload){
        const config = this.optionsConfig;
        try {
            var result = await this.schema.inquiryPaymentTransaction(payload)
            const data = {
                id: config.id,
                uid: config.uid,
                pwd: config.pwd,
                code: this.codes.INQUIRY_REAL_ESTATE_LOAN_TRANSACTION,
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
            console.error('error', error)
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
     * @description real-estate-loan transaction inquiry (15.E - 113)
     * @author jagannath
     * @date 24/03/2021
     */
     async inquiryRealEstateLoanTransaction(payload){
        const config = this.optionsConfig;
        try {
            var result = await this.schema.inquiryPaymentTransaction(payload)
            const data = {
                id: config.id,
                uid: config.uid,
                pwd: config.pwd,
                code: this.codes.INQUIRY_REAL_ESTATE_LOAN_TRANSACTION,
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
            console.error('error', error)
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
     * @description Miscellaneous transaction inquiry (15.E - 116)
     * @author jagannath
     * @date 24/03/2021
     */
     async inquiryMiscellaneousTransaction(payload){
        const config = this.optionsConfig;
        try {
            var result = await this.schema.inquiryPaymentTransaction(payload)
            const data = {
                id: config.id,
                uid: config.uid,
                pwd: config.pwd,
                code: this.codes.INQUIRY_MISCELLANEOUS_TRANSACTION,
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
            console.error('error', error)
            if(error.status === 400){
                throw error
            }
            
            if (error && error.response && error.response.status === 500) {
                throw new Error("An Error has occurred!");
            }
            throw new Error("Something went wrong");
        }
    }

/** -------------------- SSS Cancel Transaction --------------------- */

    /**
     * @description cancel real-estate-loan transaction (15.F - 115)
     * @author jagannath
     * @date 24/03/2021
     */
     async inquiryRealEstateLoanTransaction(payload){
        const config = this.optionsConfig;
        try {
            var result = await this.schema.cancelPaymentTransaction(payload)
            const data = {
                id: config.id,
                uid: config.uid,
                pwd: config.pwd,
                code: this.codes.CANCEL_REAL_ESTATE_LOAN_TRANSACTION,
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
            console.error('error', error)
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
     * @description cancel Miscellaneous transaction (15.E - 116)
     * @author jagannath
     * @date 24/03/2021
     */
     async cancelMiscellaneousTransaction(payload){
        const config = this.optionsConfig;
        try {
            var result = await this.schema.cancelPaymentTransaction(payload)
            const data = {
                id: config.id,
                uid: config.uid,
                pwd: config.pwd,
                code: this.codes.CANCEL_MISCELLANEOUS_TRANSACTION,
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
            console.error('error', error)
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