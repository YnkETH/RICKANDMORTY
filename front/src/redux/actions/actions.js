import axios from 'axios';

import { DELETE_FAVORITE, ADD_FAVORITE, FILTER, ORDER } from "./types";

export function addFavorite(charac){
    return function(dispatch){
        axios.post(`https://localhost:3001/rickandmorty/fav`, charac)
        .then(info => info.data)
        .then(data => {
            dispatch({
                type: DELETE_FAVORITE,
                payload: data
            })
        }) 
    }
}

export function deleteFavorite(id){

    return function(dispatch){
        axios.delete(`https://localhost:3001/rickandmorty/fav/${id}`)
        .then(info => info.data)
        .then(data => {
            dispatch({
                type: DELETE_FAVORITE,
                payload: id
            })
        })
    }
}

export function filterCards(status){
    return {
        type: FILTER,
        payload: status
    }
}

export function orderCards(id){
    return {
        type: ORDER,
        payload: id
    }
}