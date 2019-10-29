const Joi = require('joi');
const dbconfig = require('./dbconfig');
require('dotenv').config();

const envVarsSchema = Joi.object({
    NODE_ENV: Joi.string()
        .allow(['development', 'production', 'test'])
        .default('development'),
    PORT: Joi.number()
        .default(4040),
    JWT_SECRET: Joi.string().required()
        .description('JWT Secret requis pour signer'),
    JWT_EXPIRES_IN: Joi.number().default(1440)
        .description('JWT Expiration temps en seconde'),
}).unknown()
    .required();

const { error, value: envVars } = Joi.validate(process.env, envVarsSchema);
if (error) {
    throw new Error(`Config Validation Erreur: ${error.message}`)
}

const config = {
    env: envVars.NODE_ENV,
    port: envVars.PORT,
    jwtSecret: envVars.JWT_SECRET,
    jwtExpiresIn: envVars.JWT_EXPIRES_IN,
};

module.exports = config;
