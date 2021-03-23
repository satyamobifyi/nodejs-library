const express = require("express");
const app = express()
const library = require("./index");

// (() => {
//     console.log(new library())
//     console.log("Your library function is goest here")
// })()

app.listen(3000, () => {
    console.log("Your app is listenting port ####-------", 3000, "-------####")
}) // End of app listening