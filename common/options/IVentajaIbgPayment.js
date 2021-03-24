const Joi = require("joi");

module.exports = {
    validateIBGPayment: function validate(payload) {
        const payloadSchema = Joi.object({
            /**
           * member id assigned by ventaja
           */
            memberId: Joi.string().required(),
            /**
             * user last name
             */
            lastName: Joi.string().required(),
            /**
             * user first name
             */
            firstName: Joi.string().required(),
            /**
             * user middle name
             */
            middleName: Joi.string().required(),
            /**
             * use birth date to validate
             */
            birthDate: Joi.string().required(),
            /**
             * user mobile number
             */
            mobileNumber: Joi.allow("", null),
            /**
             *  user email address
             */
            emailAddress: Joi.allow("", null),
            /**
             * user member type such as 0
             */
            memberType: Joi.number().required(),
            /**
             *  amount to validate
             */
            amount: Joi.number().required(),
            /**
             * start year
             */
            startYear: Joi.number().required(),
            /**
             * start month
             */
            startMonth: Joi.number().required(),
            /**
             * end year
             */
            endYear: Joi.number().required(),
            /**
             * end month
             */
            endMonth: Joi.number().required(),
            /**
             * user mp2 id
             */
            mp2: Joi.allow("", null),
            /**
             * agent reference number
             */
            agentRefNo: Joi.string().required(),
        }) // End of process wallet interface

        const { error, value: initialOptions } = payloadSchema.validate(payload);
        if (error) {
            throw error
        } else {
            return initialOptions
        }
    },
    validateIBGPaymentProcess: function validate(payload) {
        const payloadSchema = Joi.object({
            /**
           * member id assigned by ventaja
           */
            memberId: Joi.string().required(),
            /**
             * user last name
             */
            lastName: Joi.string().required(),
            /**
             * user first name
             */
            firstName: Joi.string().required(),
            /**
             * user middle name
             */
            middleName: Joi.string().required(),
            /**
             * use birth date to validate
             */
            birthDate: Joi.string().required(),
            /**
             * user mobile number
             */
            mobileNumber: Joi.allow("", null),
            /**
             *  user email address
             */
            emailAddress: Joi.allow("", null),
            /**
             * user member type such as 0
             */
            memberType: Joi.number().required(),
            /**
             *  amount to validate
             */
            amount: Joi.number().required(),
            /**
             * start year
             */
            startYear: Joi.number().required(),
            /**
             * start month
             */
            startMonth: Joi.number().required(),
            /**
             * end year
             */
            endYear: Joi.number().required(),
            /**
             * end month
             */
            endMonth: Joi.number().required(),
            /**
             * user mp2 id
             */
            mp2: Joi.allow("", null),
            /**
             * agent reference number
             */
            agentRefNo: Joi.string().required(),
        }) // End of process wallet interface

        const { error, value: initialOptions } = payloadSchema.validate(payload);
        if (error) {
            throw error
        } else {
            return initialOptions
        }
    },

    validateIBGShortLoan: function validate(payload) {
        const payloadSchema = Joi.object({
            /**
            * member id assigned by ventaja
            */
            memberId: Joi.string().required(),
            /**
             * user last name
             */
            lastName: Joi.string().required(),
            /**
             * user first name
             */
            firstName: Joi.string().required(),
            /**
             * user middle name
             */
            middleName: Joi.string().required(),
            /**
             * use birth date to validate
             */
            birthDate: Joi.string().required(),
            /**
             * user mobile number
             */
            mobileNumber: Joi.allow("", null),
            /**
             *  user email address
             */
            emailAddress: Joi.allow("", null),
            /**
             * user member type such as 0
             */
            memberType: Joi.number().required(),
            /**
             *  amount to validate
             */
            amount: Joi.number().required(),
            /**
             * agent reference number
             */
            agentRefNo: Joi.string().required(),
        }) // End of process wallet interface

        const { error, value: initialOptions } = payloadSchema.validate(payload);
        if (error) {
            throw error
        } else {
            return initialOptions
        }
    },
    validateIBGShortLoanProcess: function validate(payload) {
        const payloadSchema = Joi.object({
            /**
            * member id assigned by ventaja
            */
            memberId: Joi.string().required(),
            /**
             * user last name
             */
            lastName: Joi.string().required(),
            /**
             * user first name
             */
            firstName: Joi.string().required(),
            /**
             * user middle name
             */
            middleName: Joi.string().required(),
            /**
             * use birth date to validate
             */
            birthDate: Joi.string().required(),
            /**
             * user mobile number
             */
            mobileNumber: Joi.allow("", null),
            /**
             *  user email address
             */
            emailAddress: Joi.allow("", null),
            /**
             *  amount to validate
             */
            amount: Joi.number().required(),
            /**
             * agent reference number
             */
            agentRefNo: Joi.string().required(),
        }) // End of process wallet interface

        const { error, value: initialOptions } = payloadSchema.validate(payload);
        if (error) {
            throw error
        } else {
            return initialOptions
        }
    },
    validateIBGHousingLoan: function validate(payload) {
        const payloadSchema = Joi.object({
            /**
         * member id assigned by ventaja
         */
            memberId: Joi.string().required(),
            /**
             * user last name
             */
            lastName: Joi.string().required(),
            /**
             * user first name
             */
            firstName: Joi.string().required(),
            /**
             * user middle name
             */
            middleName: Joi.string().required(),
            /**
             * use birth date to validate
             */
            birthDate: Joi.string().required(),
            /**
             * user mobile number
             */
            mobileNumber: Joi.allow("", null),
            /**
             *  user email address
             */
            emailAddress: Joi.allow("", null),
            /**
             * user member type such as 0
             */
            memberType: Joi.number().required(),
            /**
             *  amount to validate
             */
            amount: Joi.number().required(),
            /**
             * start year
             */
            startYear: Joi.number().required(),
            /**
             * start month
             */
            startMonth: Joi.number().required(),
            /**
             * end year
             */
            endYear: Joi.number().required(),
            /**
             * end month
             */
            endMonth: Joi.number().required(),
            /**
             * user mp2 id
             */
            loanNumber: Joi.allow("", null),
            /**
             * agent reference number
             */
            agentRefNo: Joi.string().required(),
        }) // End of process wallet interface

        const { error, value: initialOptions } = payloadSchema.validate(payload);
        if (error) {
            throw error
        } else {
            return initialOptions
        }
    },
    validateIBGHousingLoanProcess: function validate(payload) {
        const payloadSchema = Joi.object({
            /**
         * member id assigned by ventaja
         */
            memberId: Joi.string().required(),
            /**
             * user last name
             */
            lastName: Joi.string().required(),
            /**
             * user first name
             */
            firstName: Joi.string().required(),
            /**
             * user middle name
             */
            middleName: Joi.string().required(),
            /**
             * use birth date to validate
             */
            birthDate: Joi.string().required(),
            /**
             * user mobile number
             */
            mobileNumber: Joi.allow("", null),
            /**
             *  user email address
             */
            emailAddress: Joi.allow("", null),
            /**
             * user member type such as 0
             */
            memberType: Joi.number().required(),
            /**
             *  amount to validate
             */
            amount: Joi.number().required(),
            /**
             * start year
             */
            startYear: Joi.number().required(),
            /**
             * start month
             */
            startMonth: Joi.number().required(),
            /**
             * end year
             */
            endYear: Joi.number().required(),
            /**
             * end month
             */
            endMonth: Joi.number().required(),
            /**
             * user mp2 id
             */
            loanNumber: Joi.allow("", null),
            /**
             * agent reference number
             */
            agentRefNo: Joi.string().required(),
        }) // End of process wallet interface

        const { error, value: initialOptions } = payloadSchema.validate(payload);
        if (error) {
            throw error
        } else {
            return initialOptions
        }
    },
    validateIBGInquiry: function validate(payload) {
        const payloadSchema = Joi.object({
            /**
            * payment enquiry by code
            * 109- Pag-IBIG Savings
            * 110 - Modified Pag-IBIG 2 (MP2)
            * 111 - Pag-IBIG Short-term Loan
            * 112 - Pag-IBIG Housing Loan
            */
            mp2: Joi.boolean().default(false),
            /**
             * transaction number provided to user
             */
            transactionNumber: Joi.string().required(),
            /**
             * reference number provided to user
             */
            referenceNumber: Joi.string().required(),
            /**
             * agent reference number
             */
            agentRefNo: Joi.string().required(),
        }) // End of process wallet interface

        const { error, value: initialOptions } = payloadSchema.validate(payload);
        if (error) {
            throw error
        } else {
            return initialOptions
        }
    },
    validateIbgPaymentCancel: function validate(payload) {
        const payloadSchema = Joi.object({
            /**
            * cancel payment by code
            * 109- Pag-IBIG Savings
            * 110 - Modified Pag-IBIG 2 (MP2)
            * 111 - Pag-IBIG Short-term Loan
            * 112 - Pag-IBIG Housing Loan
            */
            code: Joi.number().required(),
            /**
             * transaction number provided to user
             */
            transactionNumber: Joi.number().required(),
            /**
             * reference number provided to user
             */
            referenceNumber: Joi.string().required(),
            /**
             * agent reference number
             */
            agentRefNumber: Joi.number().required(),
        }) // End of process wallet interface

        const { error, value: initialOptions } = payloadSchema.validate(payload);
        if (error) {
            throw error
        } else {
            return initialOptions
        }
    },






}