const axios = require('axios')

const url = 'https://rickandmortyapi.com/api/character/'

const getCharDetail = ( req,res ) =>{
    const [ id ] = req.params;
    try {
        axios(`${url}${id}`)
        .then( info => info.data)  //cuando traemos infromacion axios lo convierte en json automaticamente
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
            res.status(200).json(character);
        })
    } catch( error )  {
        res.status(500).json({message: error.message})
    }
    
}

module.exports = getCharDetail;
