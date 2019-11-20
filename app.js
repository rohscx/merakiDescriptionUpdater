const dotenv = require('dotenv').config({path:'../.env'});
const {
    writeFile,
    objectKeyFilter,
    macFromString,
} = require('nodeutilz');
const merakiApiRequest = require('./lib/merakiApiRequest.js');
const uriDeviceGenerator = require('./lib/uriDeviceGenerator.js');
const uriNetworkDevices = require('./lib/uriNetworkDevices.js');
const logFileGenerator = require('./lib/logFileGenerator.js');

module.exports = {
    dotenv,
    merakiApiRequest,
    uriDeviceGenerator,
    uriNetworkDevices,
    writeFile,
    objectKeyFilter,
    macFromString,
    logFileGenerator,
}