const express = require("express");
const router = express.Router();
const sistemaAsistenciasBD = require('../bd/SistemaAsistenciasBD');

router.get("/", (req, res) => {
    res.render('login');

});

router.get("/registro", (req, res) => {
    res.render('registro',{mensaje:""});

});

router.post("/registro", (req, res) => {
    let maestro = req.body;
    console.log(maestro.nombre);
    
    try {
        sistemaAsistenciasBD.registrarMaestro(maestro.nombre, maestro.apellido, maestro.email, maestro.password);
        res.render('registro',{ mensaje: 'El usuasrio fue guardado' });
    } catch (error) {
        console.log(error);
        console.log("Entro aqui");
        res.render('registro',{ mensaje: 'Sucedio un error' });
    }
    
});


module.exports = router;