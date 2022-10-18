const mongoose = require('mongoose');

const usuariosEschema = mongoose.Schema ({
    nombre:{
        type: String,
        required:[true, 'Por favor registra el nombre del Usuario.'],
        trim: true,
        maxLength: [120, 'El nombre del Usuario no debe exceder los 120 caracteres.']
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password: {
        type:String,
        required:true
    }
});

module.exports = mongoose.model('usuario', usuariosSchema)