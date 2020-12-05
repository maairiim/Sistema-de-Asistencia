const sistemaAsistenciasBD = require('../bd/SistemaAsistenciasBD');


function llenandoTablaLista() {
    
}

module.exports = {
    index : function (req, respuesta) {
        sistemaAsistenciasBD.obtenerGrupos(req.user).then((resGrupos)=> {
            console.log(resGrupos);
            
            if(!resGrupos){
                console.log("No se encontró pase de lista");
                respuesta.render('index',{
                    isAuthenticated: req.isAuthenticated(),
                    user: req.user,
                    grupos: resGrupos,
                    paseLista: {}
                });
            }else{
                sistemaAsistenciasBD.obtenerListaAsistencias(resGrupos[1]).then((resPaseLista)=>{

                    console.log(resPaseLista);
                    respuesta.render('index',{
                        isAuthenticated: req.isAuthenticated(),
                        user: req.user,
                        grupos: resGrupos,
                        paseLista: resPaseLista
                    });
    
                }).catch(err => console.log(err));
            }
        }).catch(err => console.log(err));

        
    }
}