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

router.get('/agregarGrupo', controladores.gruposController.grupos);


module.exports = router;