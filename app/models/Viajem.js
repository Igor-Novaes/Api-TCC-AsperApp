const mongoose = require('mongoose')

const ViajemSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    datahora_passagem:{
        type: Date,
        required: true

    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    datahora_saida:{
        type: Date,
        required: true,
    },
    to_do:{  
            
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
    },
    tipo_de_transporte:{
        type: String,
        required: true
    },
    descricao:{
        type:String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
})


const Viajem = mongoose.model('Viajem', ViajemSchema);

module.exports = Viajem;