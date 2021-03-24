const Joi = require("joi")

module.exports = {
    validatePhilhealthPayment: function validatePayload(payload){
        const payloadSchema = Joi.object({
            memberId: Joi.string().required(),
            lastName: Joi.string().required(),
            firstName: Joi.string().required(),
            middleName: Joi.string().required(),
            birthDate: Joi.string().required(),
            mobileNumber: Joi.string().disallow('', null),
            emailAddress: Joi.string().disallow('', null),
            memberType: Joi.number().required(),
            amount: Joi.number().required(),
            startMonth: Joi.number().required(),
            startYear: Joi.number().required(),
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
    processPhilhealthPayment: function validatePayload(payload){
        const payloadSchema = Joi.object({
            memberId: Joi.string().required(),
            lastName: Joi.string().required(),
            firstName: Joi.string().required(),
            middleName: Joi.string().required(),
            birthDate: Joi.string().required(),
            mobileNumber: Joi.string().disallow('', null),
            emailAddress: Joi.string().disallow('', null),
            memberType: Joi.number().required(),
            amount: Joi.number().required(),
            startMonth: Joi.number().required(),
            startYear: Joi.number().required(),
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
    inquiryPhilHealthPayment: function validatePayload(payload){
        const payloadSchema = Joi.object({
            transactionNumber: Joi.string(),
            referenceNumber: Joi.string(),
            agentRefNo: Joi.string(),
            dateEntry: Joi.string()
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
    cancelPhilHealthTransaction: function validatePayload(payload){
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
    }
}