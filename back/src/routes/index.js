const { Router } = require('express')

const getCharById = require('../controllers/getCharById')
const getCharDetail = require('../controllers/getCharDetail')
const getFavorite = require('../controllers/getFavorite')
const postFavorite = require('../controllers/postFavorite')
const deleteFavorite = require('../controllers/deleteFavorite')

const router = Router();

//hace la busqueda desde la barra de la busqueda y ejecuta la funcion
router.get('/rickandmorty/character/:id', getCharById);
router.get('/detail/:id', getCharDetail);
router.get('/rickandmorty/fav', getFavorite);
router.get('/rickandmorty/fav', postFavorite);
router.get('/rickandmorty/fav/id', deleteFavorite);

module.exports = { router }