const {writeFile} = require('nodeutilz');

module.exports = function (logPath,logName,logData,debugging = {debug:false}){
    const {debug} = debugging;
    if (debug === true) return new Promise((resolve) => resolve(logData))

    const filePath = `${logPath}${logName}`;
    let data 
    try {
        data = JSON.stringify(logData,null,'\t');
    } catch (error) {
        console.log('error')
        data = logData;
    }
    return writeFile(filePath,data,'utf8');
};