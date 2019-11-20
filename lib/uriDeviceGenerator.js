module.exports = function (networkId,deviceId){
    return new Promise((resolve,reject) => {
        if (!networkId || !deviceId) return reject('Missing parameters: networkId or deviceId')
        const uri = `/networks/${networkId}/devices/${deviceId}`;
        resolve(uri);
    })
};