const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {

    const tokenHeader = req.headers.authorization;

    if(!tokenHeader)

        return res.status(401).send({err: 'Token não foi informado'})
    
    const parts = tokenHeader.split(' ')

    if(!parts.length === 2)
    return res.status(401).send({err: "Error token"})

    const [ scheme, token ] = parts

    if(!/^Bearer$/i.test(scheme))

    return res.status(401).send({err: "Token não está em formato padrao"})

    jwt.verify(token, "71360e07cf08f6ecf732511ebec75208", (err, decoded) => {
        if(err)
        return res.status(401).send({error: 'Token invalido'})

        req.userId = decoded.id
        return next();
    })
}