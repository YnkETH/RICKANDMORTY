const axios = require('axios')
const url = 'https://rickandmortyapi.com/api/character/'

const getCharDetail = (res,id) => {
    axios(`${url}${id}`)
    .then( res => res.data)  //cuando traemos infromacion axios lo convierte en json automaticamente
    .then( data => {
        let character = {
            id : data.id,
            name: data.name,
            image: data.image,
            gender: data.gender,
            species: data.species,
            status: data.status,
            origin: data.origin
        }
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(character)) //pero al enviar si debemos enviarlo parseado
    })
    .catch( err => {
        res.writeHead(500, {'Content-Type': 'text/plain'})
        res.end(err.message)
    })
}

module.exports = getCharDetail;
