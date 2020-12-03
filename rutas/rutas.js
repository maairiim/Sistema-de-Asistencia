const express = require("express");
const router = express.Router();
const controladores = require('../controles');
const passport = require('passport');
const autenticador = require('../middleware/autenticacion');


router.get("/", autenticador.estaLogueado , controladores.visualizadorController.index);



router.get("/registro", controladores.usuarioController.getSignup);
router.post("/registro", controladores.usuarioController.postSignup);

router.get("/login", controladores.usuarioController.getLogin);
router.post("/login", passport.authenticate('local',{
    successRedirect: '/',
    failureRedirect: '/registro',
    failureFlash:true
}));
router.get('/logout',controladores.usuarioController.logout);


router.get('/agregarAsistencia', controladores.gruposController.getAnadirAsistencia);
router.post('/agregarAsistencia', controladores.gruposController.postAnadirAsistencia);

router.get('/agregarGrupo', controladores.gruposController.getGrupos);
router.post('/agregarGrupo', controladores.gruposController.postGrupos)

router.get('/gestionarAsistencias', controladores.gruposController.getGestionarAsistencia);




module.exports = router;