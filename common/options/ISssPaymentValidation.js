const Joi = require("joi");

module.exports = {
    validateSssContributionSearchByMember: function validatePayload(payload){
        const payloadSchema = Joi.object({
            memberId: Joi.string().required()
        })

        const { error, value: initialOptions } = payloadSchema.validate(payload);
        if(error){
            const errorData = {
                status: 400,
                error: "Bad Request",
                message: error.message,
            }
            throw errorData
        }else{
            return initialOptions
        }
    },
    processSssContributionSearchByMember: function validatePayload(payload){
        const payloadSchema = Joi.object({
            memberId: Joi.string().required()
        })

        const { error, value: initialOptions } = payloadSchema.validate(payload);
        if(error){
            const errorData = {
                status: 400,
                error: "Bad Request",
                message: error.message,
            }
            throw errorData
        }else{
            return initialOptions
        }
    },
    validateSssContributionSearchByPrn: function validatePayload(payload){
        const payloadSchema = Joi.object({
            prn: Joi.string().required()
        })

        const { error, value: initialOptions } = payloadSchema.validate(payload);
        if(error){
            const errorData = {
                status: 400,
                error: "Bad Request",
                message: error.message,
            }
            throw errorData
        }else{
            return initialOptions
        }
    },
    processSssContributionSearchByPrn: function validatePayload(payload){
        const payloadSchema = Joi.object({
            prn: Joi.string().required()
        })

        const { error, value: initialOptions } = payloadSchema.validate(payload);
        if(error){
            const errorData = {
                status: 400,
                error: "Bad Request",
                message: error.message,
            }
            throw errorData
        }else{
            return initialOptions
        }
    },
    validateContributionCreateAndPayPrn: function validatePayload(payload){
        const payloadSchema = Joi.object({
            memberId: Joi.string().required(),
            lastName: Joi.string().required(),
            firstName: Joi.string().required(),
            middleName: Joi.string().required(),
            birthDate: Joi.string().required(),
            mobileNumber: Joi.string().allow("",null),
            emailAddress: Joi.string().allow("",null),
            memberType: Joi.number().required(),
            amount: Joi.number().required(),
            startYear: Joi.number().required(),
            startMonth: Joi.number().required(),
            endYear: Joi.number().required(),
            endMonth: Joi.number().required(),
            flexiFund: Joi.number().required(),
            agentRefNo: Joi.string().required(),
        })

        const { error, value: initialOptions } = payloadSchema.validate(payload);
        if(error){
            const errorData = {
                status: 400,
                error: "Bad Request",
                message: error.message,
            }
            throw errorData
        }else{
            return initialOptions
        }
    },
    processContributionCreateAndPayPrn: function validatePayload(payload){
        const payloadSchema = Joi.object({
            memberId: Joi.string().required(),
            lastName: Joi.string().required(),
            firstName: Joi.string().required(),
            middleName: Joi.string().required(),
            birthDate: Joi.string().required(),
            mobileNumber: Joi.string().allow("",null),
            emailAddress: Joi.string().allow("",null),
            memberType: Joi.number().required(),
            amount: Joi.number().required(),
            startYear: Joi.number().required(),
            startMonth: Joi.number().required(),
            endYear: Joi.number().required(),
            endMonth: Joi.number().required(),
            flexiFund: Joi.number().required(),
            agentRefNo: Joi.string().required(),
        })

        const { error, value: initialOptions } = payloadSchema.validate(payload);
        if(error){
            const errorData = {
                status: 400,
                error: "Bad Request",
                message: error.message,
            }
            throw errorData
        }else{
            return initialOptions
        }
    },

    validateContributionPayForPrn: function validatePayload(payload){
        const payloadSchema = Joi.object({
            prn: Joi.string().required(),
            agentRefNo: Joi.string().required()
        })

        const { error, value: initialOptions } = payloadSchema.validate(payload);
        if(error){
            const errorData = {
                status: 400,
                error: "Bad Request",
                message: error.message,
            }
            throw errorData
        }else{
            return initialOptions
        }
    },
    processContributionPayForPrn: function validatePayload(payload){
        const payloadSchema = Joi.object({
            prn: Joi.string().required(),
            agentRefNo: Joi.string().required()
        })

        const { error, value: initialOptions } = payloadSchema.validate(payload);
        if(error){
            const errorData = {
                status: 400,
                error: "Bad Request",
                message: error.message,
            }
            throw errorData
        }else{
            return initialOptions
        }
    },

    /** short term loan validations */
    validateSearchByRtplPrn: function validatePayload(payload){
        const payloadSchema = Joi.object({
            prn: Joi.string().required()
        })

        const { error, value: initialOptions } = payloadSchema.validate(payload);
        if(error){
            const errorData = {
                status: 400,
                error: "Bad Request",
                message: error.message,
            }
            throw errorData
        }else{
            return initialOptions
        }
    },
    processSearchByRtplPrn: function validatePayload(payload){
        const payloadSchema = Joi.object({
            prn: Joi.string().required()
        })

        const { error, value: initialOptions } = payloadSchema.validate(payload);
        if(error){
            const errorData = {
                status: 400,
                error: "Bad Request",
                message: error.message,
            }
            throw errorData
        }else{
            return initialOptions
        }
    },

    validatePayForRtplPrn: function validatePayload(payload){
        const payloadSchema = Joi.object({
            prn: Joi.string().required(),
            agentRefNo: Joi.string().required()
        })

        const { error, value: initialOptions } = payloadSchema.validate(payload);
        if(error){
            const errorData = {
                status: 400,
                error: "Bad Request",
                message: error.message,
            }
            throw errorData
        }else{
            return initialOptions
        }
    },
    processPayForRtplPrn: function validatePayload(payload){
        const payloadSchema = Joi.object({
            prn: Joi.string().required(),
            agentRefNo: Joi.string().required()
        })

        const { error, value: initialOptions } = payloadSchema.validate(payload);
        if(error){
            const errorData = {
                status: 400,
                error: "Bad Request",
                message: error.message,
            }
            throw errorData
        }else{
            return initialOptions
        }
    },

    validateRealEstateLoanPayment: function validatePayload(payload){
        const payloadSchema = Joi.object({
            memberId: Joi.string().required(),
            lastName: Joi.string().required(),
            firstName: Joi.string().required(),
            middleName: Joi.string().optional(),
            birthDate: Joi.string().required(),
            mobileNumber: Joi.string().allow("", null),
            emailAddress: Joi.string().allow("", null),
            memberType: Joi.number().required(),
            amount: Joi.number().required(),
            loanNumber: Joi.string().required(),
            agentRefNo: Joi.string().required(),
        })

        const { error, value: initialOptions } = payloadSchema.validate(payload);
        if(error){
            const errorData = {
                status: 400,
                error: "Bad Request",
                message: error.message,
            }
            throw errorData
        }else{
            return initialOptions
        }
    },
    processRealEstateLoanPayment: function validatePayload(payload){
        const payloadSchema = Joi.object({
            memberId: Joi.string().required(),
            lastName: Joi.string().required(),
            firstName: Joi.string().required(),
            middleName: Joi.string().optional(),
            birthDate: Joi.string().required(),
            mobileNumber: Joi.string().allow("", null),
            emailAddress: Joi.string().allow("", null),
            memberType: Joi.number().required(),
            amount: Joi.number().required(),
            loanNumber: Joi.string().required(),
            agentRefNo: Joi.string().required(),
        })

        const { error, value: initialOptions } = payloadSchema.validate(payload);
        if(error){
            const errorData = {
                status: 400,
                error: "Bad Request",
                message: error.message,
            }
            throw errorData
        }else{
            return initialOptions
        }
    },

    validateMiscellaneousPayment: function validatePayload(payload){
        const payloadSchema = Joi.object({
            paymentType: Joi.number().required(),
            memberId: Joi.string().required(),
            lastName: Joi.string().required(),
            firstName: Joi.string().required(),
            middleName: Joi.string().optional(),
            birthDate: Joi.string().required(),
            mobileNumber: Joi.string().allow("", null),
            emailAddress: Joi.string().allow("", null),
            memberType: Joi.number().required(),
            amount: Joi.number().required(),
            agentRefNo: Joi.string().required(),
        })

        const { error, value: initialOptions } = payloadSchema.validate(payload);
        if(error){
            const errorData = {
                status: 400,
                error: "Bad Request",
                message: error.message,
            }
            throw errorData
        }else{
            return initialOptions
        }
    },
    processMiscellaneousPayment: function validatePayload(payload){
        const payloadSchema = Joi.object({
            paymentType: Joi.number().required(),
            memberId: Joi.string().required(),
            lastName: Joi.string().required(),
            firstName: Joi.string().required(),
            middleName: Joi.string().optional(),
            birthDate: Joi.string().required(),
            mobileNumber: Joi.string().allow("", null),
            emailAddress: Joi.string().allow("", null),
            memberType: Joi.number().required(),
            amount: Joi.number().required(),
            agentRefNo: Joi.string().required(),
        })

        const { error, value: initialOptions } = payloadSchema.validate(payload);
        if(error){
            const errorData = {
                status: 400,
                error: "Bad Request",
                message: error.message,
            }
            throw errorData
        }else{
            return initialOptions
        }
    },

    inquiryPaymentTransaction: function validatePayload(payload){
        const payloadSchema = Joi.object({
            transactionNumber: Joi.string(),
            referenceNumber: Joi.string(),
            agentRefNo: Joi.string(),
            dateEntry: Joi.string().optional()
        })

        const { error, value: initialOptions } = payloadSchema.validate(payload);
        if(error){
            const errorData = {
                status: 400,
                error: "Bad Request",
                message: error.message,
            }
            throw errorData
        }else{
            return initialOptions
        }
    },

    cancelPaymentTransaction: function validatePayload(payload){
        const payloadSchema = Joi.object({
            transactionNumber: Joi.string(),
            referenceNumber: Joi.string(),
            agentRefNo: Joi.string()
        })

        const { error, value: initialOptions } = payloadSchema.validate(payload);
        if(error){
            const errorData = {
                status: 400,
                error: "Bad Request",
                message: error.message,
            }
            throw errorData
        }else{
            return initialOptions
        }
    },
}