const mongoose = require('mongoose');
const schemas = require('./schemas');
const uri = "mongodb+srv://maairiim:123456root@nuevocluster.ocj5q.mongodb.net/SistemaAsistencias?retryWrites=true&w=majority";

const sistemaAsistenciasBD = {
    /**
     * Método conexion, para conectar con la base de datos
     */
    conexion: function(){
        //con mongoose se llama al metodo de conexion 
        mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
          }).then(() => {
            console.log('MongoDB Connected…');
          }).catch(err => console.log(err));
    },
    /**
     * Método registrar maestro, para dar de alta en la base de datos un nuevo usuario.
     * @param {*} nombre Nombre
     * @param {*} apellido Apellido
     * @param {*} correo email
     * @param {*} contrasena contraseña
     */
    registrarMaestro: function(nombre,apellido,correo,contrasena){
        //se crea un modelo de maestro con el esquema previamente creado
        let Maestro = schemas.Maestro;

        //se le asignan los datos al modelo
        let nuevoMaestro = new Maestro({
            _id: new mongoose.Types.ObjectId(),
            nombre: nombre,
            apellido: apellido,
            correo: correo,
            contrasena: contrasena

        }); 

        //Se hace la conexion a la BD 
        this.conexion();

        //Se da de alta el maestro en la BD
        nuevoMaestro.save(function(err){
            if(err) return err;
            console.log('documento guardado');
            return ""
        });
        
    },

    buscarMaestro: function(){
        

    
    }

}




module.exports = sistemaAsistenciasBD;
