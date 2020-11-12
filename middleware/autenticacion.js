module.exports = {
    estaLogueado: function (req,res,next) {
        if(req.isAuthenticated()){
            next();
        }else{
            res.redirect('/login');
        }        
    },

    noPermitido:function (req,res,next) {
        if(req.isAuthenticated()){
            next();
        }else{
            res.redirect('/login');
        }        
    }
}