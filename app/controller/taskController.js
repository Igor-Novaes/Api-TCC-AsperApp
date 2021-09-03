const express = require('express')
const authMiddleware = require('../middlewares/authMiddleware')

const router = express.Router()

router.use(authMiddleware)

router.get('/' ,(req, res) =>{
    res.send({message: "tudo certo aqui"})
})

module.exports = app => app.use('/task', router)