const sistemaAsistenciasBD = require('../bd/SistemaAsistenciasBD');
const fs = require('fs');
const multer = require('multer');


module.exports = {
    ///---------------------- GET agregarGrupos
    getGrupos: function (req, res) {
        if(req.isAuthenticated()){
            res.render('grupos',{
                isAuthenticated: req.isAuthenticated(),
                user: req.user
            });
        }
        res.redirect('/');
        
    }, 
    ///---------------------- POST agregarGrupos
    postGrupos: function (req, res){
        console.log(req.body);
        //sistemaAsistenciasBD.agreagrGrupo(maestroId, materia, hora, dias, unidades);
        res.render('index',{
            isAuthenticated: req.isAuthenticated(),
            user: req.user
        });

    },

    ///---------------------- GET agregarAsistencia 
    getAnadirAsistencia: function (req, res) {
        if(req.isAuthenticated()){
            res.render('agregarAsistencias',{
                isAuthenticated: req.isAuthenticated(),
                user: req.user
            });
        }
        res.redirect('/');
        
    },

    ///---------------------- POST agregarAsistencia 
    postAnadirAsistencia: function (req, res) {
        //Agregar extension 
        let storage =   multer.diskStorage({
            destination: './uploads',
            filename: function (req, file, callback) {
              callback(null, file.originalname);
            }
          });

        var upload = multer({ storage : storage}).single('archivo');
        upload(req,res,function(err) {
            if(err) {
                console.log(err);
                return res.end("Error uploading file.");
            }
            
            controles.visualizadorController.index;
        });
    },

    ///---------------------- GET gestionarAsistencia
    getGestionarAsistencia: function (req, res) {
        if(req.isAuthenticated()){
            res.render('GestionarAsistencia',{
                isAuthenticated: req.isAuthenticated(),
                user: req.user
            });
            
        }
        res.redirect('/');
        
        
    }

    
    

}


