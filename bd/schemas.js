const mongoose = require('mongoose');
 
var maestroSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre: String,
    apellido: String,
    correo: String,
    contraseña: String
});

const schemas = {
    Maestro: mongoose.model('Maestro',maestroSchema)
}





module.exports = schemas;