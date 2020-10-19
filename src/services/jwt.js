const jwt = require('jsonwebtoken')

module.exports = {
    sign: function(dados) {
        return new Promise((resolve, reject) => {
            try{
                token = jwt.sign(dados, !!process.env.PRIVATE_KEY? process.env.PRIVATE_KEY : 'shhhhh');
                return resolve(token);
            }catch(err) {
                return reject(err);
            }
        })
    },
    verify: function(token) {
        return new Promise((resolve, reject) => {
            jwt.verify(token, !!process.env.PRIVATE_KEY? process.env.PRIVATE_KEY : 'shhhhh', function (err, decoded) {
                if(!!err)
                    return reject(err);
                else
                    return resolve(decoded);
            });
        })
        
    }
}