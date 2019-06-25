module.exports = function tc(promise) {
    return promise.then(data => {
       return [null, data];
    })
    .catch((err) => {
        console.error(err);
        return [err]
    });
}