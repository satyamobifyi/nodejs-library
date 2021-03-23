const { required } = require("joi");


module.exports = {
    SignService: require("./common/signature"),
    HealthService: require("./lib/ventaja-health-government")
}

