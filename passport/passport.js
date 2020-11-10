var localStrategy = require('passport-local').Strategy;
const schemas = require('../bd/schemas');
const sistemaAsistenciasBD = require('../bd/SistemaAsistenciasBD');
const bcrypt = require('bcryptjs');


module.exports = function(passport){
    //serializar el objeto | pasarlo a cadena 
    passport.serializeUser(function(user, done){
        done(null, user);
    })

    passport.deserializeUser(function(obj,done){
        done(null,obj);
    });

    passport.use(new localStrategy({
        passReqToCallback : true
    }, function(req, email, password,done){
        sistemaAsistenciasBD.conexion();
        let usuarios = schemas.Maestro; // collection name;
        usuarios.find({correo: email}).exec(function (err,data) {
            if(err) throw err;
            if(data.length > 0){
                console.log("Si Existe el correo");
                let usuario = data[0];
                if(bcrypt.compareSync(password,usuario.contrasena)){
                    console.log("Contraseña correcta");
                    return done(null, {
                        nombre: usuario.nombre,
                        apellido: usuario.apellido,
                        correo: usuario.correo
                    });
                }

            }
            return done(null, false);
        });
        return;
    }));
}