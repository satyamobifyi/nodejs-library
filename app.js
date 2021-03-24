const express = require("express");
const app = express()
app.use(express.json())
const {SignService} = require("./index");
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

// const philhealthService = new VentajaPhilHealthGovernment()
// console.log('philhealthService', philhealthService)

// console.log("Your provider ", service.healthServide.validatePhilHealthPayment)

app.post('/validate-philhealth-payment', async(req,res)=>{
    // console.log('req.payload', req.body)
    try {
        const result = await service.healthServide.validatePhilHealthPayment(req.body)
        if(result.status == 200){
            return res.json(result)
        }else{
            return res.status(result.status).send(result)
        }
        
    } catch (error) {
        console.log('API error', error)
        res.status(error.status || 500).send(error)
    }
})
app.post('/process-philhealth-payment', async(req,res)=>{
    // console.log('req.payload', req.body)
    try {
        const result = await service.healthServide.processPhilHealthPayment(req.body)
        if(result.status == 200){
            return res.json(result)
        }else{
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
