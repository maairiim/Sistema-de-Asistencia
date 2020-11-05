const mongoose = require('mongoose');
const schemas = require('./schemas');
const uri = "mongodb+srv://maairiim:123456root@nuevocluster.ocj5q.mongodb.net/SistemaAsistencias?retryWrites=true&w=majority";

const sistemaAsistenciasBD = {
    conexion: function(){
        mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
          }).then(() => {
            console.log('MongoDB Connected…');
          }).catch(err => console.log(err));
    },

    guardar: function(){
        let Maestro = schemas.Maestro;
        let juanMaestro = new Maestro({
            _id: new mongoose.Types.ObjectId(),
            nombre: 'Perla',
            apellido: 'Rosas',
            correo: 'ejemplo@cosa.com',
            contraseña: '111111'

        }); 
        juanMaestro.save(function(err){
            if(err) return console.log(err);
            console.log('documento guardado');
        });
    }


}




module.exports = sistemaAsistenciasBD;
