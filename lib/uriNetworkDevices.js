module.exports = function (networkId){
    return new Promise((resolve,reject) => {
        if (!networkId) return reject('Missing parameters: networkId')
        const uri = `/networks/${networkId}/devices`;
        resolve(uri);
    })
};