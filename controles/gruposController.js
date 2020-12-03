const sistemaAsistenciasBD = require('../bd/SistemaAsistenciasBD');

module.exports = {
    getGrupos: function (req, res) {
        res.render('grupos',{
            isAuthenticated: req.isAuthenticated(),
            user: req.user
        })
    }, 
    postGrupos: function (req, res){
        console.log(req.body);
        //sistemaAsistenciasBD.agreagrGrupo(maestroId, materia, hora, dias, unidades);


        res.render('/index',{
            isAuthenticated: req.isAuthenticated(),
            user: req.user
        });

    },
    getAnadirAsistencia: function (req, res) {
        res.render('',{

        });
    },
    postAnadirAsistencia: function (req, res) {
        res.render('',{

        });
        
    },

    getGestionarAsistencia: function (req, res) {
        res.render('GestionarAsistencia',{
            isAuthenticated: req.isAuthenticated(),
            user: req.user
        });
        
    }

    
    

}