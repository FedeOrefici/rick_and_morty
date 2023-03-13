import { ADD_CARD, DELETE_CARD, FILTER, GET_CHARACTERS, ORDER, GET_FAVORITES } from "./types";
import axios from 'axios';

export const addCard = (character) => {
    return async function (dispatch){   //debo colocar la ruta y luego lo que se va a postear
        try {
            const responseBackEnd = await axios.post("http://localhost:3001/favs/create", character)
                return dispatch({
                    type: ADD_CARD,
                    //primero el type que es el metodo y luego la data de la respuesta que 
                    //recibo del BackEnd.
                    payload: responseBackEnd.data
                });
            
        } catch (error) {
            return dispatch({type: "ERROR", payload: error})
        };
    };
};

export const deleteCard = (id) => {
    return async function(dispatch){
        try {
            const responseBackEnd = await axios.delete("http://localhost:3001/favs/delete/" + id);
                return dispatch({
                    type: DELETE_CARD,
                    payload: responseBackEnd.data
                });  
        } catch (error) {
            return dispatch({type: "ERROR", payload: error})
        };
    };
};


export const getFavorites = () => {
     return async function(dispatch){
        try {
            const response = await axios.get('http://localhost:3001/rickandmorty/fav')
            return dispatch({
            type: GET_FAVORITES,
            payload: response.data
        });
        } catch (error) {
            return dispatch({type: "ERROR", payload: error})
        };
     };
};

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender,
    };
};

export const orderCards = (id) => {
    return {
        type: ORDER,
        payload: id,
    };
};

export const getCharacters = (payload) => {
    return {
        type: GET_CHARACTERS,
        payload
    };
};