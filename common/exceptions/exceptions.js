module.exports = {
    101: {
        responseCode: 101,
        message: "request rejected",
        description: "selected payment type is not allowed"
    },
    102: {
        responseCode: 102,
        message: "access denied",
        description: "supplied agent’s credentials is not valid, user has no right to access the API or the IP address where the request originate is not whitelisted for the specified outlet"
    },
    103: {
        responseCode: 103,
        message: "InComplete data",
        description: "one or more fields are missing for the selected payment type"
    },
    105: {
        responseCode: 105,
        message: "Invalid member ID",
        description: "supplied member ID failed check digit validation"
    },
    107: {
        responseCode: 107,
        message: "Invalid amount",
        description: "either amount is less than the allowed minimum or exceeding allowed maximum"
    },
    109: {
        responseCode: 109,
        message: "Invalid contact details",
        description: "no contact details provided, must provide either mobile number or email address"
    },
    110: {
        responseCode: 110,
        message: "Invalid applicable date",
        description: "either the date is invalid or pass allowed cut-off date"
    },
    111: {
        responseCode: 111,
        message: "Invalid name",
        description: "Name is incomplete"
    },
    112: {
        responseCode: 112,
        message: "Invalid birthdate",
        description: "Birth date is invalid or the member’s age is under the allowed age"
    },
    113: {
        responseCode: 113,
        message: "Insufficient credit",
        description: "credit is not enough for the transaction"
    },
    114: {
        responseCode: 114,
        message: "Invalid member type",
        description: "supplied value is not recognized"
    },
    115: {
        responseCode: 115,
        message: "Invalid payment type",
        description: "Supplied value is not recognized"
    },
    117: {
        responseCode: 117,
        message: "country code is missing/invalid",
        description: "country code is missing or invalid"
    },
    118: {
        responseCode: 118,
        message: "Invalid government institution",
        description: "supplied value is not recognized"
    },
    119: {
        responseCode: 119,
        message: "Invalid MP2 ID",
        description: "Supplied MP2 ID failed check digit validation"
    },
    124: {
        responseCode: 124,
        message: "Duplicate reference number",
        description: "supplied value for this merchant already exist"
    },
    125: {
        responseCode: 125,
        message: "Already cancelled",
        description: "The specified transaction was already cancelled"
    },
    126: {
        responseCode: 126,
        message: "Already batched",
        description: "The specified transaction was already forwarded to the institution for posting and might require amendment/cancellation request"
    },
    128: {
        responseCode: 128,
        message: "Already beyond cutoff time",
        description: "The specified transaction can no longer be cancelled"
    },
    129: {
        responseCode: 129,
        message: "No record found",
        description: "The specified account number or identifier doesn't match any record"
    },
    130: {
        responseCode: 130,
        message: "Invalid biller code",
        description: "supplied value is not recognized"
    },
    131: {
        responseCode: 131,
        message: "Duplicate transaction",
        description: "Applicable date has an overlapping payment"
    },
    132: {
        responseCode: 132,
        message: "Invalid agent reference number",
        description: "supplied value is not valid"
    },
    136: {
        responseCode: 136,
        message: "Already paid",
        description: "The supplied PRN is already paid"
    },
    138: {
        responseCode: 138,
        message: "Invalid biller code",
        description: "supplied value is not recognized"
    },
    139: {
        responseCode: 139,
        message: "Invalid biller code",
        description: "supplied value is not recognized"
    },
    141: {
        responseCode: 141,
        message: "Invalid identifier",
        description: "supplied value is not recognized"
    },
    143: {
        responseCode: 143,
        message: "Invalid PRN",
        description: "The supplied value is not recognized"
    },
    122: {
        responseCode: 122,
        message: "Invalid signature",
        description: "signature does not match or the payload has been tampered"
    },
    997: {
        responseCode: 998,
        message: "Service unavailable ",
        description: "connection to provider is unavailable"
    },
    998: {
        responseCode: 998,
        message: "server is down",
        description: "Server is down or the system is under maintenance"
    },
    999: {
        responseCode: 999,
        message: "system error",
        description: "An unexpected error occurred"
    },
    133: {
        responseCode: 133,
        message: "INVALID REQUEST CODE",
        description: "The supplied code is not valid"
    },
}
