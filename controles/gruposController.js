const sistemaAsistenciasBD = require('../bd/SistemaAsistenciasBD');

module.exports = {
    getGrupos: function (req, res) {
        res.render('grupos',{
            isAuthenticated: req.isAuthenticated(),
            user: req.user
        })
    }, 
    postGrupos: function (req, res){
        res.render('',{
            isAuthenticated: req.isAuthenticated(),
            user: req.user
        });

    },
    getAñadirAsistencia: function (req, res) {
        res.render('',{

        });
    },
    postAñadirAsistencia: function (req, res) {
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