const sistemaAsistenciasBD = require('../bd/SistemaAsistenciasBD');
const fs = require('fs');
const multer = require('multer');

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
        res.render('agregarAsistencias',{
            isAuthenticated: req.isAuthenticated(),
            user: req.user
        });
    },
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
            res.end("File is uploaded");
        });
    },

    getGestionarAsistencia: function (req, res) {
        res.render('GestionarAsistencia',{
            isAuthenticated: req.isAuthenticated(),
            user: req.user
        });
        
    }

    
    

}


