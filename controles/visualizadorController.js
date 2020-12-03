const sistemaAsistenciasBD = require('../bd/SistemaAsistenciasBD');


function llenandoTablaLista() {
    
}

module.exports = {
    index : function (req, respuesta) {
        sistemaAsistenciasBD.obtenerGrupos(req.user).then((resGrupos)=> {
            if(!resGrupos == null){
                sistemaAsistenciasBD.obtenerListaAsistencias(resGrupos[1]).then((resPaseLista)=>{ 
                    console.log(resPaseLista);
                    respuesta.render('index',{
                        isAuthenticated: req.isAuthenticated(),
                        user: req.user,
                        grupos: resGrupos,
                        paseLista: resPaseLista
                    });
    
                }).catch(err => console.log(err));
            }else{
                respuesta.render('index',{
                    isAuthenticated: req.isAuthenticated(),
                    user: req.user,
                    grupos: resGrupos,
                    paseLista: {}
                });
            }
        }).catch(err => console.log(err)); 

        
    }
}