const bcrypt = require('bcrypt')

module.exports = {
    hash: function(password) {
        return new Promise((resolve, reject) => {
            bcrypt.hash(password, Number(process.env.SALT_ROUNDS) , function(err, hash) {
                if(!!err)
                    return reject(err)
                else
                    return resolve(hash)
            })
        })
    },
    compare: function(password, hash) {
        return new Promise((resolve, reject) => {
            bcrypt.compare(password, hash, function(err, result) {
                if(!!err)
                    return resolve(false)
                else
                    return resolve(result)
            });
        })
        
    }
}