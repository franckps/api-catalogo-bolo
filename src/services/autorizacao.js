const jwt = require('./jwt')

module.exports = {
    authorize: function() {
        return async (request, response, next) => {
            const bearerToken = request.headers.authorization;

            if(!bearerToken)
                return response.status(403).json({
                    message: 'Acesso negado para usuario não autenticado'
                })

            const arrayBearerToken = bearerToken.split(' ');

            if(arrayBearerToken[0] !== 'Bearer')
                return response.status(403).json({
                    message: 'Token mal formado'
                })
            
            if(arrayBearerToken.length !== 2)
                return response.status(403).json({
                    message: 'Token mal formado'
                })
            
            const token = arrayBearerToken[1];

            const dados = jwt.verify(token)

            if(!dados)
                return response.status(403).json({
                    message: 'Token inválido'
                })

            return next()
        }
    }
}