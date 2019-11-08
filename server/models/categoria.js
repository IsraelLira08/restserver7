const mongoose = require('mongoose');
const uniquevalidator = require('mongoose-unique-validator');
const Usuario = require('./usuario');

let Schema = mongoose.Schema;

let categoriaSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'Por favor ingresa el nombre de la categoria']
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: [true, 'Por favor ingresa el id del usuario']
    },
    disponible: {
        type: Boolean,
        default: true
    }
});

categoriaSchema.plugin(uniquevalidator, {
    message: '{PATH} Debe ser unico y diferente'
});

module.exports = mongoose.model('Categoria', categoriaSchema);