const mongoose = require('mongoose');
const uniquevalidator = require('mongoose-unique-validator');
const Usuario = require('./usuario');
const Categoria = require('./categoria');

let Schema = mongoose.Schema;

let productoSchema = new Schema({
    nombre: {
        type: String,
        unique: true,
        required: [true, 'Por favor ingresa el nombre del producto']
    },
    precioUni: {
        type: Number,
        required: [true, 'Por favor ingresa el precio del producto']
    },
    categoria: {
        type: Schema.Types.ObjectID,
        ref: 'Categoria',
        required: [true, 'Por favor ingresa el id de la categoria']
    },
    disponible: {
        type: Boolean,
        default: true
    },
    usuario: {
        type: Schema.Types.ObjectID,
        ref: 'Usuario',
        required: [true, 'Por favor ingresa el el id del usuario']
    }
});

productoSchema.plugin(uniquevalidator, {
    message: '{PATH} Debe ser unico y diferente'
});

module.exports = mongoose.model('Producto', productoSchema);