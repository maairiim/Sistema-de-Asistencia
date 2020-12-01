const mongoose = require('mongoose');
 
var maestroSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre: String,
    apellido: String,
    correo: String,
    contrasena: String
},{collection : 'maestros'});

var grupoSchema = mongoose.Schema({
    materia: String,
    hora: String,
    dias: Array,
    maestro: { type: mongoose.Schema.ObjectId, ref: "maestros"}
},{collection : 'grupos'});

var paseListaSchema = mongoose.Schema({
    fecha: Date,
    alumnos: Array,
    asistencias: Array,
    grupo: { type: mongoose.Schema.ObjectId, ref: "grupos"}
},{collection : 'paseLista'});


const schemas = {
    Maestro: mongoose.model('Maestro',maestroSchema),
    Grupo: mongoose.model('Grupo',grupoSchema),
    PaseLista: mongoose.model('PaseLista', paseListaSchema)
}





module.exports = schemas;