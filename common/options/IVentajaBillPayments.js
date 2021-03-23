'use strict'

const joi = require('joi')

const envVarsSchema = joi.object({
  AUTH_APP_NAME: joi.string()
    .required(),
  AUTH_NODE_ENV: joi.string()
    .allow(['development', 'production', 'test', 'provision'])
    .required()
}).unknown()
  .required()

const { error, value: envVars } = joi.validate(process.env, envVarsSchema)
if (error) {
  throw new Error(`Config validation error: ${error.message}`)
}

const config = {
  env: envVars.AUTH_NODE_ENV,
  appName: envVars.AUTH_APP_NAME
}

module.exports = config