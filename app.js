const express = require('express');
const app = express();

const path = require("path");
const rutas = require("./rutas/index");
const sistemaAsistenciasBD = require('./bd/conexion');
const bodyParser = require("body-parser");

//Configuraciones
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname,"vistas"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));

//middlewares
app.use((req,res,next) =>{
    console.log(`${req.url} - ${req.method}`);
    next();
});

//rutas
app.use(rutas);

//static files
app.use(express.static(path.join(__dirname, 'public')));

sistemaAsistenciasBD.conexion();
sistemaAsistenciasBD.guardar();

app.listen(app.get("port"), () =>{
    console.log('Servidor en el puerto 3000')
});