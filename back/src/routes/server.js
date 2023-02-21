const http = require("http");

const data = require("../utils/data.js");

http.createServer(function(req, res){
    //CON EL ASTERICO DECIMOS QUE CUALQUIER DOMINIO DE NUESTRO FRONT
    //HACER PETICIONES A MI SERVIDOR asi sea un link web
    //CORS CROSS ORIGIN RESOURCES, Y ESTO ES POR SEGURIDAD.
    res.setHeader('Access-Control-Allow-Origin', '*');

    //el metoodo includes verifica si incluye algo
    if(req.url.includes('rickandmorty/character')){
        let id = req.url.split("/").pop(); //"id"
        let character = data.find(char => char.id === Number(id));

                //con el find buscamos una coincidencia             
                //con el filter trae todo el arreglo 
                //nos llega como string y lo volvemos numero

        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify(character))
    }
}
).listen(3001, () => {
    console.log("server levantado");
});

// rickandmorty/character/id

// ["rickandmorty", "character", "id"]

/// NO OLVIDAR ALGO IMPORTANTE PARA LEVANTAR EL SERVIDOR HACEMOS EL START EN PACKAGE JSON PEUDE SER CON NODEMON