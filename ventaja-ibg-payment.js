const express = require("express");
const app = express()
app.use(express.json())
const { SignService } = require("./index");
// const VentajaPhilHealthGovernment = require('./lib/ventaja-health-government.js')
const options = {
    certificatePath: "server.key",
    ventajaUrl: "https://demo.pinoypay.com/ventajaapi-v4/api/",
    id: "131191900001",
    uid: "teller",
    pwd: "p@ssw0rD",
    countryCode: "PH"
}
const service = new SignService(options);

app.post('/validate-ibg-payment', async (req, res) => {
    // console.log('req.payload', req.body)
    // {
    //     "memberId": "121074345129",
    //     "lastName": "ROCHE",
    //     "firstName": "EMILY",
    //     "middleName": "ARAGON",
    //     "birthDate": "1978-01-01",
    //     "mobileNumber": "",
    //     "emailAddress": "juan.delacruz@email.com",
    //     "memberType": 0,
    //     "amount": 100.0,
    //     "startYear": 2021,
    //     "startMonth": 4,
    //     "endYear": 2022,
    //     "endMonth": 1,
    //     "agentRefNo": "A1234"
    // }
    try {
        const result = await service.ventajaIbgPaymentService.validateIBGPayment(req.body)
        if (result.status == 200) {
            return res.json(result)
        } else {
            return res.status(result.status).send(result)
        }

    } catch (error) {
        console.log('API error', error)
        res.status(error.status || 500).send(error)
    }
})

app.post('/process-ibg-payment', async (req, res) => {
    // console.log('req.payload', req.body)
    // {
    //     "memberId": "121074345129",
    //     "lastName": "ROCHE",
    //     "firstName": "EMILY",
    //     "middleName": "ARAGON",
    //     "birthDate": "1978-01-01",
    //     "mobileNumber": "",
    //     "emailAddress": "juan.delacruz@email.com",
    //     "memberType": 0,
    //     "amount": 100.0,
    //     "startYear": 2021,
    //     "startMonth": 4,
    //     "endYear": 2022,
    //     "endMonth": 1,
    //     "agentRefNo": "A1234"
    // }
    try {
        const result = await service.ventajaIbgPaymentService.processIBGPayment(req.body)
        if (result.status == 200) {
            return res.json(result)
        } else {
            return res.status(result.status).send(result)
        }

    } catch (error) {
        console.log('API error', error)
        res.status(error.status || 500).send(error)
    }
})

app.post('/validate-short-term-loan', async (req, res) => {
    // console.log('req.payload', req.body)
    // {
    //     "memberId": "121074345129",
    //     "lastName": "ROCHE",
    //     "firstName": "EMILY",
    //     "middleName": "ARAGON",
    //     "birthDate": "1978-01-01",
    //     "mobileNumber": "",
    //     "emailAddress": "juan.delacruz@email.com",
    //     "memberType": 0,
    //     "amount": 100.0,

    //     "agentRefNo": "A1234"
    // }
    try {
        const result = await service.ventajaIbgPaymentService.validateShortTermLoan(req.body)
        if (result.status == 200) {
            return res.json(result)
        } else {
            return res.status(result.status).send(result)
        }

    } catch (error) {
        console.log('API error', error)
        res.status(error.status || 500).send(error)
    }
})

app.post('/process-short-term-loan', async (req, res) => {
    // console.log('req.payload', req.body)
    // {
    //     "memberId": "121074345129",
    //     "lastName": "ROCHE",
    //     "firstName": "EMILY",
    //     "middleName": "ARAGON",
    //     "birthDate": "1978-01-01",
    //     "mobileNumber": "",
    //     "emailAddress": "juan.delacruz@email.com",
    //     "amount": 100.0,
    //     "agentRefNo": "A2121"
    // }
    try {
        const result = await service.ventajaIbgPaymentService.processShortTermLoan(req.body)
        if (result.status == 200) {
            return res.json(result)
        } else {
            return res.status(result.status).send(result)
        }

    } catch (error) {
        console.log('API error', error)
        res.status(error.status || 500).send(error)
    }
})

app.post('/validate-housing-loan', async (req, res) => {
    // console.log('req.payload', req.body)
    // {
    //     "memberId": "121074345129",
    //     "lastName": "ROCHE",
    //     "firstName": "EMILY",
    //     "middleName": "ARAGON",
    //     "birthDate": "1978-01-01",
    //     "mobileNumber": "",
    //     "emailAddress": "juan.delacruz@email.com",
    //     "memberType": 0,
    //     "amount": 100.0,
    //     "startYear": 2021,
    //     "startMonth": 4,
    //     "endYear": 2022,
    //     "endMonth": 1,
    //     "agentRefNo": "A1234"
    // }
    // Unexpected system error
    try {
        const result = await service.ventajaIbgPaymentService.validateHousingLoan(req.body)
        if (result.status == 200) {
            return res.json(result)
        } else {
            return res.status(result.status).send(result)
        }

    } catch (error) {
        console.log('API error', error)
        res.status(error.status || 500).send(error)
    }
})

app.post('/process-housing-loan', async (req, res) => {
    // console.log('req.payload', req.body)
    // {
    //     "memberId": "121074345129",
    //     "lastName": "ROCHE",
    //     "firstName": "EMILY",
    //     "middleName": "ARAGON",
    //     "birthDate": "1978-01-01",
    //     "mobileNumber": "",
    //     "emailAddress": "juan.delacruz@email.com",
    //     "memberType": 0,
    //     "amount": 100.0,
    //     "startYear": 2021,
    //     "startMonth": 4,
    //     "endYear": 2022,
    //     "endMonth": 1,
    //     "agentRefNo": "A1234"
    // }
    // Unexpected system error
    try {
        const result = await service.ventajaIbgPaymentService.processHousingLoan(req.body)
        if (result.status == 200) {
            return res.json(result)
        } else {
            return res.status(result.status).send(result)
        }

    } catch (error) {
        console.log('API error', error)
        res.status(error.status || 500).send(error)
    }
})

app.post('/ibg-payment-inquiry', async (req, res) => {
    // console.log('req.payload', req.body)
    // {
    //     "transactionNumber": "PagIbig-13202103-000018",
    //      "referenceNumber": "210790067139030",
    //      "agentRefNo": "A12345"
    //  }
    // The specified account number or identifier doesn't match any record
    try {
        const result = await service.ventajaIbgPaymentService.IbgPaymentTransactionInquiry(req.body)
        if (result.status == 200) {
            return res.json(result)
        } else {
            return res.status(result.status).send(result)
        }

    } catch (error) {
        console.log('API error', error)
        res.status(error.status || 500).send(error)
    }
})

app.post('/ibg-short-term-loan-inquiry', async (req, res) => {
    // console.log('req.payload', req.body)
    // {
    //     "transactionNumber": "PagIbig-13202103-000018",
    //      "referenceNumber": "210790067139030",
    //      "agentRefNo": "A12345"
    //  }
    // The specified account number or identifier doesn't match any record
    try {
        const result = await service.ventajaIbgPaymentService.IbgShortTermLoanTransactionIquiry(req.body)
        if (result.status == 200) {
            return res.json(result)
        } else {
            return res.status(result.status).send(result)
        }

    } catch (error) {
        console.log('API error', error)
        res.status(error.status || 500).send(error)
    }
})

app.post('/ibg-housing-loan-inquiry', async (req, res) => {
    // console.log('req.payload', req.body)
    // {
    //     "transactionNumber": "PagIbig-13202103-000018",
    //      "referenceNumber": "210790067139030",
    //      "agentRefNo": "A12345"
    //  }
    // The specified account number or identifier doesn't match any record
    try {
        const result = await service.ventajaIbgPaymentService.IbgHousingLoanTransactionIquiry(req.body)
        if (result.status == 200) {
            return res.json(result)
        } else {
            return res.status(result.status).send(result)
        }

    } catch (error) {
        console.log('API error', error)
        res.status(error.status || 500).send(error)
    }
})

app.post('/ibg-cancel-payment-transaction', async (req, res) => {
    // console.log('req.payload', req.body)
    // {
    //     "transactionNumber": "PagIbig-13202103-000018",
    //      "referenceNumber": "210790067139030",
    //      "agentRefNo": "A12345"
    //  }
    // The specified account number or identifier doesn't match any record
    try {
        const result = await service.ventajaIbgPaymentService.IbgCancelPaymentTransaction(req.body)
        if (result.status == 200) {
            return res.json(result)
        } else {
            return res.status(result.status).send(result)
        }

    } catch (error) {
        console.log('API error', error)
        res.status(error.status || 500).send(error)
    }
})

app.post('/ibg-cancel-housing-loan-transaction', async (req, res) => {
    // console.log('req.payload', req.body)
    // {
    //     "transactionNumber": "PagIbig-13202103-000018",
    //      "referenceNumber": "210790067139030",
    //      "agentRefNo": "A12345"
    //  }
    // The specified account number or identifier doesn't match any record
    try {
        const result = await service.ventajaIbgPaymentService.IbgHousingLoanTransactionIquiry(req.body)
        if (result.status == 200) {
            return res.json(result)
        } else {
            return res.status(result.status).send(result)
        }

    } catch (error) {
        console.log('API error', error)
        res.status(error.status || 500).send(error)
    }
})

app.post('/ibg-cancel-short-term-loan-transaction', async (req, res) => {
    // console.log('req.payload', req.body)
    // {
    //     "transactionNumber": "PagIbig-13202103-000018",
    //      "referenceNumber": "210790067139030",
    //      "agentRefNo": "A12345"
    //  }
    // The specified account number or identifier doesn't match any record
    try {
        const result = await service.ventajaIbgPaymentService.IbgShortTermLoanTransactionIquiry(req.body)
        if (result.status == 200) {
            return res.json(result)
        } else {
            return res.status(result.status).send(result)
        }

    } catch (error) {
        console.log('API error', error)
        res.status(error.status || 500).send(error)
    }
})






app.listen(3000, () => {
    console.log("Your app is listenting port ####-------", 3000, "-------####")
}) // End of app listening
