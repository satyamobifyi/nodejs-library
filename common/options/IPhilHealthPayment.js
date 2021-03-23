const Joi = require("joi")

module.exports = {
    validatePayload: function validatePayload(payload){
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
            throw error
        }else{
            return initialOptions
        }
    }
}