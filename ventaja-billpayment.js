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

app.post('/outlet-balance', async (req, res) => {
    // console.log('req.payload', req.body)
    try {
        const result = await service.billPaymentService.getOutletBalance()
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
app.post('/validate-topup', async (req, res) => {
    // console.log('req.payload', req.body)
    // {
    //     "payremitNo": "1017108390499970",
    //     "amount": 1000.0,
    //     "currencyCode": "PHP",
    //     "agentRefNo": "A1234"
    // }
    try {
        const result = await service.billPaymentService.validateTopUpWallet(req.body)
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

app.post('/process-topup', async (req, res) => {
    // console.log('req.payload', req.body)
    // {
    //     "payremitNo": "1017108390499970",
    //     "amount": 1000.0,
    //     "currencyCode": "PHP",
    //     "agentRefNo": "A1234"
    // }
    try {
        const result = await service.billPaymentService.processTopUpWallet(req.body)
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

app.post('/topup-transaction-inquiry', async (req, res) => {
    // console.log('req.payload', req.body)
    // {
    //     "transactionNumber": "PRT-13202010-000001",
    //     "referenceNumber": "TU-202010000001",
    //     "agentRefNo": "A1234"
    // }
    try {
        const result = await service.billPaymentService.topUpTransactionInquiry(req.body)
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

app.post('/process-reservation-detail', async (req, res) => {
    // console.log('req.payload', req.body)
    // {
    //     "reservationNumber": "RN-202007000011"
    // }
    try {
        const result = await service.billPaymentService.processReservationDetail(req.body)
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

app.post('/validate-payment-reservation-detail', async (req, res) => {
    // console.log('req.payload', req.body)
    // {
    //     "reservationNumber": "RN-202007000011",
    //     "amount": 150,
    //     "currencyCode": "USD",
    //     "settlementCurrencyCode": "PHP",
    //     "settlementAmount": 8250,
    //     "agentRefNo": "A1234"
    // }
    try {
        const result = await service.billPaymentService.validateReservationPaymentDetail(req.body)
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

app.post('/process-payment-reservation-detail', async (req, res) => {
    // console.log('req.payload', req.body)
    // {
    //     "reservationNumber": "RN-202007000011",
    //     "amount": 150,
    //     "currencyCode": "USD",
    //     "settlementCurrencyCode": "PHP",
    //     "settlementAmount": 8250,
    //     "agentRefNo": "A1234"
    // }
    try {
        const result = await service.billPaymentService.processReservationPaymentDetail(req.body)
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

app.post('/reservation-payment-inquiry', async (req, res) => {
    // console.log('req.payload', req.body)
    // {
    //     "reservationNumber": "RN-202007000011",
    //     "amount": 150,
    //     "currencyCode": "USD",
    //     "settlementCurrencyCode": "PHP",
    //     "settlementAmount": 8250,
    //     "agentRefNo": "A1234"
    // }
    try {
        const result = await service.billPaymentService.reservationPaymentEnquiry(req.body)
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

app.post('/pull-transaction-detail', async (req, res) => {
    // console.log('req.payload', req.body)
    // {
    //     "code": 106,
    //        "transactionNumber": "PRP-13202007-000006",
    //        "referenceNumber": "RP-202007000001",
    //        "agentRefNo": "A1234"
    //  }
    try {
        const result = await service.billPaymentService.pullTransactionDetails(req.body)
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

app.post('/validate-billing', async (req, res) => {
    // console.log('req.payload', req.body)
    // {
    //     "billerCode": "C15",
    //     "accountNumber": "816218000",
    //     "identifier": "Juan Dela Cruz",
    //     "amount": 120,
    //     "agentRefNo": "A12346"
    // }
    try {
        const result = await service.billPaymentService.validateBilling(req.body)
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

app.post('/process-billing', async (req, res) => {
    // console.log('req.payload', req.body)
    // {
    //     "billerCode": "C15",
    //     "accountNumber": "816218000",
    //     "identifier": "Juan Dela Cruz",
    //     "amount": 120,
    //     "agentRefNo": "A2121"
    // }
    try {
        const result = await service.billPaymentService.processBilling(req.body)
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
