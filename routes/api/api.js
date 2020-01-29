///rutas -> router -> app : express

///rutas -> router:entidad -> router:api ->app:express



//importar modulos externos
var express = require('express');
var router = express.Router();

//metodo que trae el objeto, quenpermite registrar una ruta....
// http://localhost:3000/api/version

/*router.get('/version', function(req, res){
    res.status(200).json({"version":"API v1.0"});
} );*/

router.get('/yo', function(req, res){
    res.status(200).json({"yo":"0801199810000", "Nombre": "Ana Gabriela Fiallos"});
} );

module.exports = router;

//Estructura de un Modulo y uso ode module.export para exponer la funcionalidad del modulo
/*
var mensaje = "Hola Mundo";

var libLencaFunctions = {};//JSON Javascript Objrct Notation
libLencaFunctions.mensaje = "Hola Mundo";
libLencaFunctions.version = "v1.0";
libLencaFunctions.sayHello = ()=>{
    console.log("Help");
}//ES6
*/

//global
//module.exports = mensaje;