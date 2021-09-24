const mongoose = require('mongoose')

const ToDoSchema = new mongoose.Schema({
    titulo:{
        type: String,
        required: true
    },
    prioridade:{
        type: Number,
        required: true,
    },
    completado:{
        type: Boolean,
        required: true,
        default: false
    }

})


const ToDo = mongoose.model('ToDo', ToDoSchema);

module.exports = ToDo;