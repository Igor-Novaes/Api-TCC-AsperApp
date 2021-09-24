const express = require('express')
const authMiddleware = require('../middlewares/authMiddleware')
const Viajem = require('../models/Viajem')

const Viajem = require ('../models/Viajem')
const router = express.Router()

router.use(authMiddleware)

router.get('/' , async (req, res) =>{
    res.send({ user: req.userId})
})
router.get('/:viajemId' , async(req, res) =>{
    res.send({user: req.userId})
})
router.put('/:viajemId' , async(req, res) =>{
    res.send({user: req.userId})
})
router.post('/' , async(req, res) =>{
   try {
       const viajem = await Viajem.create(req.body)

       return res.send({ viajem })
       
   } catch (err) {
    return res.status(400).send({error: 'Não foi possivel criar uma tarefa para viajem'})
   }
})
router.delete('/:viajemId' , async(req, res) =>{
    res.send({user: req.userId})
})


module.exports = app => app.use('/viajem', router)