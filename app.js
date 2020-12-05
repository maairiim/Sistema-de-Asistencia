const express = require('express');
const app = express();
const path = require("path");
const rutas = require("./rutas/rutas");
const bodyParser = require("body-parser");
const session = require('express-session');

const passport = require('passport');
const cookieParser = require('cookie-parser');


require('./passport/passport')(passport);


//Configuraciones
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname,"vistas"));
app.set("view engine", "ejs");
    app.use((req,res,next) =>{
        console.log(`${req.url} - ${req.method}`);
        next();
    });
    app.use(bodyParser.urlencoded({ extended: false }));
    
    
    app.use(cookieParser());
    app.use(session({
        secret:'secret', //recuperar variable de sesion
        resave:false,
        saveUninitialized: false
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    
    //rutas
    app.use(rutas);
    
    //static files
    app.use(express.static(path.join(__dirname, 'public')));

    app.use(redirectUnmatched);

//middlewares
function redirectUnmatched(req, res) { 
    res.redirect("/"); 
} 


app.listen(app.get("port"), () =>{
    console.log('Servidor en el puerto 3000')
});