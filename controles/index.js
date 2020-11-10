const fs = require('fs');
const path = require("path");

var files  = fs.readdirSync(__dirname);

files.forEach( function(file){
    var nombreArchivo = path.basename(file, '.js');

    if(nombreArchivo !== 'index'){
        exports[nombreArchivo] = require('./' + nombreArchivo);
    }
});