const mongoose = require('mongoose');
const uri = "mongodb+srv://maairiim:123456root@nuevocluster.ocj5q.mongodb.net/SistemaAsistencias?retryWrites=true&w=majority";

const sistemaAsistenciasBD = {
    conexion: function(){
        mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
          }).then(() => {
            console.log('MongoDB Connected…');
          }).catch(err => console.log(err));
    }

}


module.exports = sistemaAsistenciasBD;
