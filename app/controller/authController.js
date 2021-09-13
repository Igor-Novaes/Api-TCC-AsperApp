const express = require('express')
const User = require('../models/User')
const JWT = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const crypto = require ('crypto')

const router = express.Router();

function token (params = {}){
    return JWT.sign({id: User.id}, "71360e07cf08f6ecf732511ebec75208", {
        expiresIn: 86400,
    })
}
router.post('/register', async (req, res) =>{
    const { email } = req.body
    try{
        if(await User.findOne({ email }))
        return res.status(400).send({error: 'E-mail já registrado'})
        const user = await User.create(req.body);

        user.password = undefined
        return res.send({ user,

        token: token({id: user.id}),
     })
    }catch (err) {
        return res.status(400).send({error: 'O cadastro falhou :/'});
    }

});

router.post('/login', async (req, res) =>{
    const { email, password} = req.body

    const user = await User.findOne({ email }).select('+password')

    if(!user)
        return res.status(400).send({err: 'Usuario não encontrado'})
    

    if(!await bcrypt.compare(password, user.password))
        return res.status(400).send({err: 'senha invalida'})
    

    user.password = undefined

    res.send({user,
         token: token({id: user.id}),
        })
     })

router.post('/reset-password', async (req, res) =>{
    const { email } = req.body;
    try {
        const user = await User.findOne({ email })

        if(!user)
        return res.status(400).send({erro: 'Usuario não encontrado'})

        const token = crypto.randomBytes(20).toString('hex')
        
        const date = new Date();
        date.setHours(date.getHours() + 1);

        await User.findByIdAndUpdate(user.id, {
            '$set':{
                passwordResetToken: token,
                passwordResetExpires: date,

            }
        });
        console.log(token, date)
    } catch (error) {
        res.status(400).send({error: 'Erro ao recuperar senha, tente novamente'})
    }

})
module.exports = app => app.use('/auth', router)