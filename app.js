const express = require("express");
const app = express()
app.use(express.json())
const Library = require("./index");
const VentajaPhilHealthGovernment = require('./lib/ventaja-health-government.js')
const options = {
    certificatePath: "./server.key",
    ventajaUrl: "https://demo.pinoypay.com/ventajaapi-v4/api/",
    id: "131191900001",
    uid: "teller",
    pwd: "p@ssw0rD",
    countryCode: "PH"
}
const service = new Library(options);

const philhealthService = new VentajaPhilHealthGovernment()
console.log('philhealthService', philhealthService)



app.post('/validate-philhealth-payment', async(req,res)=>{
    
    console.info(payload)
    res.json(result)


})

app.listen(3000, () => {
    console.log("Your app is listenting port ####-------", 3000, "-------####")
}) // End of app listening
