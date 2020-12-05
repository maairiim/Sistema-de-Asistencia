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
        });
        
    },
    buscarCorreo: function(email){
        let correcto=false;
        let maestro = schemas.Maestro;
        maestro.find({correo:email}).exec(function(err, maestros){
            if(err){
                console.log("Ocurrio un error");
            }
            else{
                if(maestro.correo == email){
                    console.log();
                    return correcto = true;

                }
                correcto = true;
                return true;
            }
        });
        return correcto;
    },

    obtenerListaAsistencias: async function(grupo){
        let listaAsistencias = schemas.PaseLista;
        let lista = await listaAsistencias.find({grupo: grupo._id}).exec();
        return lista;

    },

    obtenerGrupos: async function(maestro){
        let listaGrupos = schemas.Grupo;
        let lista = await listaGrupos.find({maestro: maestro.id}).exec();
        if(lista == null ){
            return false;
        }
        return lista;
    },

    agreagrGrupo: function(maestroId, materia, hora, dias, unidades){
        let Grupo = schemas.Grupo;
        let nuevoGrupo = new Grupo({
            materia: materia,
            hora: hora,
            dias: dias,
            unidades: unidades,
            maestro: maestroId
        });
        this.conexion();
        nuevoGrupo.save(function(err){
            if(err) return err;
            console.log('grupo guardado');
        });
    }




}




module.exports = sistemaAsistenciasBD;
