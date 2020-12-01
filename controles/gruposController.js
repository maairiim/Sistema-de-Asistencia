const sistemaAsistenciasBD = require('../bd/SistemaAsistenciasBD');

module.exports = {
    grupos: function (req, res) {
        res.render('grupos',{
            isAuthenticated: req.isAuthenticated(),
            user: req.user
        })
    }


}