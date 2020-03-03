import * as jsonConfig from './config.json';
const environment = process.env.NODE_ENV; // qa | demo

// Configuration relative to the execution environment
const jsonConfiguration = jsonConfig[environment] || {};

// Configuration based on commandline arguments
const commandLineConfiguration = process.argv.slice(2)
    .reduce((accumulator, currentValue) => {
        const argumentAndValue = currentValue.split('=');
        accumulator[argumentAndValue[0]] = argumentAndValue[1];
    }, {});

// Default configuration
const defaultConfiguration = {
    url: 'https://jsonplaceholder.typicode.com'
};

export const configuration = {
    url: process.env.APP_URL || commandLineConfiguration.url || jsonConfiguration.url || defaultConfiguration.url
};
