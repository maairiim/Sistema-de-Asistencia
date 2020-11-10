const sistemaAsistenciasBD = require('../bd/SistemaAsistenciasBD');
const bcrypt = require('bcryptjs');


module.exports = {
    /**
     * Llamada GET a Registro en la pagina
     * @param {*} req contenido del body
     * @param {*} res que vamos a mandar
     */
    getSignup : function (req, res) {
        // Se manda el archivo registro.ejs de la carpeta vistas con parametros con sus respectivos valores
        res.render('registro',{
            mensaje:"",
            isAuthenticated: req.isAuthenticated(),
            user: req.user
        });
        
    },
    
    postSignup: function(req,res){
        //Creamos al maestro temporal
        let maestro = req.body;
        //nivel de dificultad al password
        let salt = bcrypt.genSaltSync(10);
        let password = bcrypt.hashSync(maestro.password,salt);

        try {
            sistemaAsistenciasBD.registrarMaestro(maestro.nombre, maestro.apellido, maestro.email, password);
            res.render('registro',{ mensaje: 'El usuasrio fue guardado' });
    
        } catch (error) {
            console.log(error);
            res.render('registro',{ mensaje: mensaje });
        }
    },
    getLogin: function (req, res) {
        res.render('login',{
            isAuthenticated: req.isAuthenticated(),
            user: req.user
        });
        
    },
    logout:function (req,res,next) {
        req.logout();        
        res.redirect('/registro');
    }
}