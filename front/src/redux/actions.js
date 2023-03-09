import { ADD_CARD, DELETE_CARD, FILTER, GET_CHARACTERS, ORDER } from "./types"

export const addCard = (character) => {
    return {
        type: ADD_CARD,
        payload: character,
    }
}

export const deleteCard = (id) => {
    return {
        type: DELETE_CARD,
        payload: id,
    }
}

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender,
    }
}

export const orderCards = (id) => {
    return {
        type: ORDER,
        payload: id,
    }
}

export const getCharacters = (payload) => {
    return {
        type: GET_CHARACTERS,
        payload
    }
}

