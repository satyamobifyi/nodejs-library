const Joi = require("joi")

module.exports = {
  validateITopUpWallet: function validateITopUpWallet(payload) {
    const payloadSchema = {
      /**
     * user pay remit number
     */
      payremitNo: Joi.string().required(),
      /**
       * amount to process
       */
      amount: Joi.number().required(),
      /**
       * provide country code
       */
      currencyCode: Joi.string().required(),
      /**
       * unique agent reference number
       */
      agentRefNo: Joi.string().required(),
    } // End of process wallet interface

    const { error, value: initialOptions } = payloadSchema.validate(payload);
    if (error) {
      throw error
    } else {
      return initialOptions
    }
  },

  validateITransaction: function validateITransaction(payload) {
    const payloadSchema = {
     /**
     * transaction number
     */
    transactionNumber: Joi.string().required(),
    /**
     * reference number
     */
    referenceNumber: Joi.string().required(),
    /**
     * provide agent reference number
     */
    agentRefNo: Joi.string().required(),
    } // End of process wallet interface

    const { error, value: initialOptions } = payloadSchema.validate(payload);
    if (error) {
      throw error
    } else {
      return initialOptions
    }
  },

  validateIReservationDetail: function validateIReservationDetail(payload) {
    const payloadSchema = {
     /**
     * reservation number
     */
    reservationNumber: Joi.string().required(),
    } // End of process wallet interface

    const { error, value: initialOptions } = payloadSchema.validate(payload);
    if (error) {
      throw error
    } else {
      return initialOptions
    }
  },

  validateIReservationPaymentDetail: function validateIReservationPaymentDetail(payload) {
    const payloadSchema = {
     /**
         * reservation number
         */
      reservationNumber: Joi.string().required(),
      /**
       * amount
       */
      amount: Joi.number().required(),
      /**
       * currency code such as PHP
       */
      currencyCode: Joi.string().required(),
      /**
       * settlement currency code such as USD
       */
      settlementCurrencyCode: Joi.string().required(),
      /**
       * settlement amount such as 150
       */
      settlementAmount: Joi.number().required(),
      /**
       * agent reference number
       */
      agentRefNo: Joi.string().required(),
    } // End of process wallet interface

    const { error, value: initialOptions } = payloadSchema.validate(payload);
    if (error) {
      throw error
    } else {
      return initialOptions
    }
  },

  validateIReservationEnquiry: function validateIReservationEnquiry(payload) {
    const payloadSchema = {
     /**
         * reservation code such as 143
         */
      reservationCode: Joi.number().required(),
      /**
       * transaction number
       */
      transactionNumber?: Joi.string().required(),
      /**
       * reference number provided to user
       */
      referenceNumber?: Joi.string().required(),
      /**
       * agent reference number
       */
      agentRefNo: Joi.string().required(),
    } // End of process wallet interface

    const { error, value: initialOptions } = payloadSchema.validate(payload);
    if (error) {
      throw error
    } else {
      return initialOptions
    }
  },

  validateIPullReservationDetails: function validateIPullReservationDetails(payload) {
    const payloadSchema = {
     /**
         * reservation code such as 143
         */
      reservationCode: Joi.number().required(),
      /**
       * transaction number
       */
      transactionNumber?: Joi.string().required(),
      /**
       * reference number provided to user
       */
      referenceNumber: Joi.string().allow(""),
      /**
       * agent reference number
       */
      agentRefNo: Joi.string().required(),
    } // End of process wallet interface

    const { error, value: initialOptions } = payloadSchema.validate(payload);
    if (error) {
      throw error
    } else {
      return initialOptions
    }
  },

  validateIValidateBilling: function validateIValidateBilling(payload) {
    const payloadSchema = {
     /**
         * provided user biller code
         */
      billerCode: Joi.string().required(),
      /**
       * provided unique user account number
       */
      accountNumber: Joi.string().required(),
      /**
       * provided user identifier
       */
      identifier: Joi.string().required(),
      /**
       * amount
       */
      amount: Joi.number().required(),
      /**
       * agent reference number
       */
      agentRefNo: Joi.string().required(),
    } // End of process wallet interface

    const { error, value: initialOptions } = payloadSchema.validate(payload);
    if (error) {
      throw error
    } else {
      return initialOptions
    }
  },

  validateIProcessBilling: function validateIProcessBilling(payload) {
    const payloadSchema = {
     /**
         * provided user biller code
         */
      billerCode: Joi.string().required(),
      /**
       * provided unique user account number
       */
      accountNumber: Joi.string().required(),
      /**
       * provided user identifier
       */
      identifier: Joi.string().required(),
      /**
       * amount
       */
      amount: Joi.number().required(),
      /**
       * agent reference number
       */
      agentRefNo: Joi.string().required(),
    } // End of process wallet interface

    const { error, value: initialOptions } = payloadSchema.validate(payload);
    if (error) {
      throw error
    } else {
      return initialOptions
    }
  },



}