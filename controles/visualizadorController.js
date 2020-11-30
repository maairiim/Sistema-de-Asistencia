const sistemaAsistenciasBD = require('../bd/SistemaAsistenciasBD');

module.exports = {
    index : function (req, respuesta) {

        sistemaAsistenciasBD.obtenerGrupos(req.user).then((res)=> {
            respuesta.render('index',{
                isAuthenticated: req.isAuthenticated(),
                user: req.user,
                grupos: res
            });
            
        }).catch(err => console.log(err));

        
    }
}